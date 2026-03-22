mod ai;

use serde::{Deserialize, Serialize};
use std::io::{BufRead, BufReader, Read, Write};
use std::net::{SocketAddr, TcpStream};
use std::process::Command;
use std::sync::{Arc, Mutex};
use std::thread;
use std::time::Duration;

#[derive(Clone, Default, Serialize)]
#[serde(rename_all = "camelCase")]
struct OllamaPullProgress {
    active: bool,
    completed: Option<u64>,
    done: bool,
    error: Option<String>,
    model: Option<String>,
    status: Option<String>,
    total: Option<u64>,
}

#[derive(Default)]
struct OllamaState {
    pull_progress: Arc<Mutex<OllamaPullProgress>>,
}

#[derive(Deserialize)]
struct OllamaTagsResponse {
    models: Vec<OllamaModel>,
}

#[derive(Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
struct OllamaModel {
    name: String,
    modified_at: Option<String>,
    size: Option<u64>,
}

#[derive(Deserialize)]
struct OllamaPullChunk {
    completed: Option<u64>,
    error: Option<String>,
    status: Option<String>,
    total: Option<u64>,
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct OllamaStatus {
    available_models: Vec<OllamaModel>,
    can_use: bool,
    is_desktop: bool,
    ollama_installed: bool,
    ollama_running: bool,
    platform: String,
    reason: Option<String>,
}

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn read_http_response(stream: &mut TcpStream) -> Result<String, String> {
    let mut response = String::new();
    stream
        .read_to_string(&mut response)
        .map_err(|error| error.to_string())?;
    Ok(response)
}

fn fetch_ollama_tags() -> Result<OllamaTagsResponse, String> {
    let address: SocketAddr = "127.0.0.1:11434"
        .parse()
        .map_err(|error: std::net::AddrParseError| error.to_string())?;
    let mut stream = TcpStream::connect_timeout(&address, Duration::from_secs(2))
        .map_err(|_| "Ollama terpasang tetapi servicenya belum aktif.".to_string())?;

    stream
        .set_read_timeout(Some(Duration::from_secs(2)))
        .map_err(|error| error.to_string())?;
    stream
        .set_write_timeout(Some(Duration::from_secs(2)))
        .map_err(|error| error.to_string())?;
    stream
        .write_all(b"GET /api/tags HTTP/1.1\r\nHost: 127.0.0.1\r\nConnection: close\r\n\r\n")
        .map_err(|error| error.to_string())?;

    let response = read_http_response(&mut stream)?;

    if !response.starts_with("HTTP/1.1 200") && !response.starts_with("HTTP/1.0 200") {
        return Err("Ollama belum merespons dengan benar di port 11434.".to_string());
    }

    let body = response
        .split("\r\n\r\n")
        .nth(1)
        .ok_or_else(|| "Respons Ollama tidak lengkap.".to_string())?;

    serde_json::from_str::<OllamaTagsResponse>(body).map_err(|error| error.to_string())
}

fn update_pull_progress(progress: &Arc<Mutex<OllamaPullProgress>>, next: OllamaPullChunk) {
    if let Ok(mut current) = progress.lock() {
        if let Some(status) = next.status {
            current.status = Some(status.clone());
            if status == "success" {
                current.active = false;
                current.done = true;
            }
        }

        if let Some(completed) = next.completed {
            current.completed = Some(completed);
        }

        if let Some(total) = next.total {
            current.total = Some(total);
        }

        if let Some(error) = next.error {
            current.active = false;
            current.done = true;
            current.error = Some(error);
        }
    }
}

fn process_pull_line(progress: &Arc<Mutex<OllamaPullProgress>>, line: &str) {
    let trimmed = line.trim();

    if trimmed.is_empty() {
        return;
    }

    if let Ok(chunk) = serde_json::from_str::<OllamaPullChunk>(trimmed) {
        update_pull_progress(progress, chunk);
    }
}

fn read_headers(reader: &mut BufReader<TcpStream>) -> Result<(bool, u16), String> {
    let mut status_line = String::new();
    reader
        .read_line(&mut status_line)
        .map_err(|error| error.to_string())?;

    let status_code = status_line
        .split_whitespace()
        .nth(1)
        .ok_or_else(|| "Status HTTP Ollama tidak valid.".to_string())?
        .parse::<u16>()
        .map_err(|error| error.to_string())?;

    let mut is_chunked = false;

    loop {
        let mut line = String::new();
        reader
            .read_line(&mut line)
            .map_err(|error| error.to_string())?;

        if line == "\r\n" || line.is_empty() {
            break;
        }

        if line.to_ascii_lowercase().starts_with("transfer-encoding:")
            && line.to_ascii_lowercase().contains("chunked")
        {
            is_chunked = true;
        }
    }

    Ok((is_chunked, status_code))
}

fn stream_pull_response(
    progress: &Arc<Mutex<OllamaPullProgress>>,
    reader: &mut BufReader<TcpStream>,
) -> Result<(), String> {
    let mut pending = String::new();

    loop {
        let mut size_line = String::new();
        let bytes_read = reader
            .read_line(&mut size_line)
            .map_err(|error| error.to_string())?;

        if bytes_read == 0 {
            break;
        }

        let chunk_size =
            usize::from_str_radix(size_line.trim(), 16).map_err(|error| error.to_string())?;

        if chunk_size == 0 {
            break;
        }

        let mut chunk = vec![0_u8; chunk_size];
        reader
            .read_exact(&mut chunk)
            .map_err(|error| error.to_string())?;

        let mut trailer = [0_u8; 2];
        reader
            .read_exact(&mut trailer)
            .map_err(|error| error.to_string())?;

        let chunk_text = String::from_utf8_lossy(&chunk);
        pending.push_str(&chunk_text);

        while let Some(index) = pending.find('\n') {
            let line = pending[..index].to_string();
            pending = pending[index + 1..].to_string();
            process_pull_line(progress, &line);
        }
    }

    if !pending.trim().is_empty() {
        process_pull_line(progress, &pending);
    }

    Ok(())
}

fn pull_model(model: String, progress: Arc<Mutex<OllamaPullProgress>>) -> Result<(), String> {
    let address: SocketAddr = "127.0.0.1:11434"
        .parse()
        .map_err(|error: std::net::AddrParseError| error.to_string())?;
    let mut stream = TcpStream::connect_timeout(&address, Duration::from_secs(2))
        .map_err(|_| "Ollama belum aktif, jadi model belum bisa diunduh.".to_string())?;

    stream
        .set_read_timeout(Some(Duration::from_secs(60)))
        .map_err(|error| error.to_string())?;
    stream
        .set_write_timeout(Some(Duration::from_secs(5)))
        .map_err(|error| error.to_string())?;

    let body = serde_json::json!({
        "model": model,
        "stream": true
    })
    .to_string();
    let request = format!(
        "POST /api/pull HTTP/1.1\r\nHost: 127.0.0.1\r\nContent-Type: application/json\r\nContent-Length: {}\r\nConnection: close\r\n\r\n{}",
        body.len(),
        body
    );

    stream
        .write_all(request.as_bytes())
        .map_err(|error| error.to_string())?;

    let mut reader = BufReader::new(stream);
    let (is_chunked, status_code) = read_headers(&mut reader)?;

    if status_code != 200 {
        return Err("Ollama menolak permintaan download model.".to_string());
    }

    if is_chunked {
        stream_pull_response(&progress, &mut reader)?;
    } else {
        let mut response_body = String::new();
        reader
            .read_to_string(&mut response_body)
            .map_err(|error| error.to_string())?;

        for line in response_body.lines() {
            process_pull_line(&progress, line);
        }
    }

    if let Ok(mut current) = progress.lock() {
        current.active = false;
        current.done = true;
        if current.status.is_none() {
            current.status = Some("success".to_string());
        }
    }

    Ok(())
}

#[tauri::command]
fn get_ollama_status() -> Result<OllamaStatus, String> {
    let platform = std::env::consts::OS.to_string();
    let is_desktop = !cfg!(any(target_os = "android", target_os = "ios"));

    if !is_desktop {
        return Ok(OllamaStatus {
            available_models: Vec::new(),
            can_use: false,
            is_desktop,
            ollama_installed: false,
            ollama_running: false,
            platform,
            reason: Some("Asisten AI hanya tersedia di desktop app.".to_string()),
        });
    }

    let ollama_installed = Command::new("ollama")
        .arg("--version")
        .output()
        .map(|output| output.status.success())
        .unwrap_or(false);

    if !ollama_installed {
        return Ok(OllamaStatus {
            available_models: Vec::new(),
            can_use: false,
            is_desktop,
            ollama_installed,
            ollama_running: false,
            platform,
            reason: Some("Ollama belum terpasang atau tidak ada di PATH sistem.".to_string()),
        });
    }

    let payload = match fetch_ollama_tags() {
        Ok(payload) => payload,
        Err(reason) => {
            return Ok(OllamaStatus {
                available_models: Vec::new(),
                can_use: false,
                is_desktop,
                ollama_installed,
                ollama_running: false,
                platform,
                reason: Some(reason),
            })
        }
    };
    let has_models = !payload.models.is_empty();

    Ok(OllamaStatus {
        available_models: payload.models,
        can_use: has_models,
        is_desktop,
        ollama_installed,
        ollama_running: true,
        platform,
        reason: if has_models {
            None
        } else {
            Some("Ollama aktif, tetapi belum ada model yang terpasang.".to_string())
        },
    })
}

#[tauri::command]
fn get_ollama_pull_progress(
    state: tauri::State<'_, OllamaState>,
) -> Result<OllamaPullProgress, String> {
    state
        .pull_progress
        .lock()
        .map(|progress| progress.clone())
        .map_err(|_| "Gagal membaca progress download model.".to_string())
}

#[tauri::command]
fn start_ollama_pull(model: String, state: tauri::State<'_, OllamaState>) -> Result<(), String> {
    {
        let mut current = state
            .pull_progress
            .lock()
            .map_err(|_| "Gagal menyiapkan progress download model.".to_string())?;

        if current.active {
            return Err("Masih ada download model yang sedang berjalan.".to_string());
        }

        *current = OllamaPullProgress {
            active: true,
            completed: Some(0),
            done: false,
            error: None,
            model: Some(model.clone()),
            status: Some("Memulai download model...".to_string()),
            total: None,
        };
    }

    let progress = state.pull_progress.clone();

    thread::spawn(move || {
        if let Err(error) = pull_model(model, progress.clone()) {
            if let Ok(mut current) = progress.lock() {
                current.active = false;
                current.done = true;
                current.error = Some(error);
            }
        }
    });

    Ok(())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .manage(OllamaState::default())
        .plugin(tauri_plugin_opener::init())
        .setup(|app| {
            ai::start_http_server(app.handle().clone());
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            greet,
            get_ollama_status,
            get_ollama_pull_progress,
            start_ollama_pull
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
