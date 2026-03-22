use crate::ai_data;
use aes_gcm_siv::aead::{Aead, KeyInit};
use aes_gcm_siv::{Aes256GcmSiv, Nonce};
use aisdk::core::{
    DynamicModel, LanguageModelRequest, LanguageModelStreamChunkType, Messages,
    StreamTextResponse,
};
use aisdk::core::utils::step_count_is;
use aisdk::integrations::vercel_aisdk_ui::VercelUIRequest;
use aisdk::providers::OpenAICompatible;
use aisdk::providers::openrouter::Openrouter;
use axum::extract::{Query, State};
use axum::http::StatusCode;
use axum::response::Sse;
use axum::response::sse::{Event, KeepAlive, KeepAliveStream};
use axum::routing::{get, post};
use axum::{Json, Router};
use futures::StreamExt;
use rand::RngCore;
use rusqlite::{Connection, OptionalExtension, params};
use serde::{Deserialize, Serialize};
use sha2::{Digest, Sha256};
use std::convert::Infallible;
use std::net::{SocketAddr, TcpStream};
use std::pin::Pin;
use std::sync::{Arc, Mutex, OnceLock};
use std::time::Duration;
use tauri::Manager;
use tokio::sync::Mutex as AsyncMutex;
use tower_http::cors::{Any, CorsLayer};

pub const AI_HTTP_SERVER_PORT: u16 = 32456;
const OPENROUTER_SECRET_KEY: &str = "openrouter_api_key";
const SECRETS_DB_NAME: &str = "ai-secrets.sqlite";
const AI_SYSTEM_PROMPT: &str = "Anda adalah asisten operasional toko untuk aplikasi POS desktop. Jawab dalam bahasa Indonesia yang sederhana. Jika pengguna meminta membaca data nyata toko atau mengubah data toko, wajib gunakan tool POS yang tersedia lebih dulu sebelum menyimpulkan jawaban. Jangan mengarang angka, stok, transaksi, atau perubahan data.";

static AI_RUNTIME: OnceLock<Arc<AiRuntime>> = OnceLock::new();

#[derive(Default)]
struct AiRuntime {
    chat_lock: AsyncMutex<()>,
    ready: Mutex<bool>,
}

#[derive(Clone)]
struct AiHttpState {
    app_handle: tauri::AppHandle,
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct AiHttpError {
    message: String,
}

#[derive(Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct AiChatMessageInput {
    content: String,
    role: String,
}

#[derive(Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct AiChatRequest {
    messages: Vec<AiChatMessageInput>,
    model: String,
    provider: String,
    store_id: String,
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
pub struct AiChatResponse {
    reply: String,
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
pub struct AiRuntimeStatus {
    openrouter_configured: bool,
    ready: bool,
    reason: Option<String>,
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
pub struct AiProviderStatus {
    openrouter_configured: bool,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct InitializeAiRuntimeRequest {
    neon_data_api_url: String,
    powersync_url: String,
    session_token: String,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct SaveOpenrouterApiKeyRequest {
    api_key: String,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct StreamChatQuery {
    model: String,
    provider: String,
    store_id: String,
}

type AiHttpJsonResult<T> = Result<Json<T>, (StatusCode, Json<AiHttpError>)>;
type AiEventStream =
    KeepAliveStream<Pin<Box<dyn futures::Stream<Item = Result<Event, Infallible>> + Send>>>;
type AiStreamResponse = Sse<AiEventStream>;
type AiHttpStreamResult = Result<AiStreamResponse, (StatusCode, Json<AiHttpError>)>;

#[derive(Serialize)]
#[serde(tag = "type")]
enum FrontendUiChunk {
    #[serde(rename = "start")]
    Start,
    #[serde(rename = "finish")]
    Finish {
        #[serde(rename = "finishReason", skip_serializing_if = "Option::is_none")]
        finish_reason: Option<&'static str>,
    },
    #[serde(rename = "text-start")]
    TextStart {
        id: String,
    },
    #[serde(rename = "text-delta")]
    TextDelta {
        id: String,
        delta: String,
    },
    #[serde(rename = "text-end")]
    TextEnd {
        id: String,
    },
    #[serde(rename = "reasoning-start")]
    ReasoningStart {
        id: String,
    },
    #[serde(rename = "reasoning-delta")]
    ReasoningDelta {
        id: String,
        delta: String,
    },
    #[serde(rename = "reasoning-end")]
    ReasoningEnd {
        id: String,
    },
    #[serde(rename = "error")]
    Error {
        #[serde(rename = "errorText")]
        error_text: String,
    },
}

fn runtime() -> &'static Arc<AiRuntime> {
    AI_RUNTIME.get_or_init(|| Arc::new(AiRuntime::default()))
}

fn secret_db_path(app_handle: &tauri::AppHandle) -> Result<std::path::PathBuf, String> {
    let app_data_dir = app_handle
        .path()
        .app_data_dir()
        .map_err(|error| error.to_string())?;

    std::fs::create_dir_all(&app_data_dir).map_err(|error| error.to_string())?;

    Ok(app_data_dir.join(SECRETS_DB_NAME))
}

fn open_secret_database(app_handle: &tauri::AppHandle) -> Result<Connection, String> {
    let connection =
        Connection::open(secret_db_path(app_handle)?).map_err(|error| error.to_string())?;

    connection
        .execute(
            "
            CREATE TABLE IF NOT EXISTS secrets (
              key TEXT PRIMARY KEY,
              nonce BLOB NOT NULL,
              ciphertext BLOB NOT NULL,
              updated_at TEXT NOT NULL
            )
            ",
            [],
        )
        .map_err(|error| error.to_string())?;

    Ok(connection)
}

fn derive_encryption_key(app_handle: &tauri::AppHandle) -> [u8; 32] {
    let mut hasher = Sha256::new();
    hasher.update(app_handle.package_info().name.as_bytes());
    hasher.update(app_handle.config().identifier.as_bytes());
    hasher.update(std::env::consts::OS.as_bytes());
    hasher.update(std::env::consts::ARCH.as_bytes());
    hasher.update(std::env::var("USER").unwrap_or_default().as_bytes());
    hasher.update(std::env::var("HOME").unwrap_or_default().as_bytes());

    let digest = hasher.finalize();
    let mut key = [0_u8; 32];
    key.copy_from_slice(&digest[..32]);
    key
}

fn encrypt_secret(
    app_handle: &tauri::AppHandle,
    value: &str,
) -> Result<(Vec<u8>, Vec<u8>), String> {
    let key = derive_encryption_key(app_handle);
    let cipher = Aes256GcmSiv::new_from_slice(&key).map_err(|error| error.to_string())?;
    let mut nonce_bytes = [0_u8; 12];
    rand::thread_rng().fill_bytes(&mut nonce_bytes);
    let nonce = Nonce::from_slice(&nonce_bytes);
    let ciphertext = cipher
        .encrypt(nonce, value.as_bytes())
        .map_err(|_| "Gagal mengenkripsi API key.".to_string())?;

    Ok((nonce_bytes.to_vec(), ciphertext))
}

fn decrypt_secret(
    app_handle: &tauri::AppHandle,
    nonce: Vec<u8>,
    ciphertext: Vec<u8>,
) -> Result<String, String> {
    let key = derive_encryption_key(app_handle);
    let cipher = Aes256GcmSiv::new_from_slice(&key).map_err(|error| error.to_string())?;
    let plaintext = cipher
        .decrypt(Nonce::from_slice(&nonce), ciphertext.as_ref())
        .map_err(|_| "Gagal membuka API key terenkripsi.".to_string())?;

    String::from_utf8(plaintext).map_err(|error| error.to_string())
}

fn read_secret(app_handle: &tauri::AppHandle, key: &str) -> Result<Option<String>, String> {
    let connection = open_secret_database(app_handle)?;
    let record = connection
        .query_row(
            "SELECT nonce, ciphertext FROM secrets WHERE key = ?1",
            params![key],
            |row| Ok((row.get::<_, Vec<u8>>(0)?, row.get::<_, Vec<u8>>(1)?)),
        )
        .optional()
        .map_err(|error| error.to_string())?;

    record
        .map(|(nonce, ciphertext)| decrypt_secret(app_handle, nonce, ciphertext))
        .transpose()
}

fn write_secret(app_handle: &tauri::AppHandle, key: &str, value: &str) -> Result<(), String> {
    let connection = open_secret_database(app_handle)?;
    let (nonce, ciphertext) = encrypt_secret(app_handle, value)?;

    connection
        .execute(
            "
            INSERT INTO secrets (key, nonce, ciphertext, updated_at)
            VALUES (?1, ?2, ?3, ?4)
            ON CONFLICT(key) DO UPDATE SET
              nonce = excluded.nonce,
              ciphertext = excluded.ciphertext,
              updated_at = excluded.updated_at
            ",
            params![key, nonce, ciphertext, chrono_like_now()],
        )
        .map_err(|error| error.to_string())?;

    Ok(())
}

fn delete_secret(app_handle: &tauri::AppHandle, key: &str) -> Result<(), String> {
    let connection = open_secret_database(app_handle)?;

    connection
        .execute("DELETE FROM secrets WHERE key = ?1", params![key])
        .map_err(|error| error.to_string())?;

    Ok(())
}

fn chrono_like_now() -> String {
    let now = std::time::SystemTime::now();
    let date = now
        .duration_since(std::time::UNIX_EPOCH)
        .map(|duration| duration.as_secs())
        .unwrap_or_default();

    date.to_string()
}

fn ensure_ollama_running() -> Result<(), String> {
    let address: SocketAddr = "127.0.0.1:11434"
        .parse()
        .map_err(|error: std::net::AddrParseError| error.to_string())?;

    TcpStream::connect_timeout(&address, Duration::from_secs(2))
        .map(|_| ())
        .map_err(|_| "Ollama belum aktif di 127.0.0.1:11434.".to_string())
}

fn build_transcript(messages: &[AiChatMessageInput]) -> String {
    messages
        .iter()
        .map(|message| {
            let role = if message.role.eq_ignore_ascii_case("assistant") {
                "Assistant"
            } else {
                "User"
            };

            format!("{role}: {}", message.content.trim())
        })
        .collect::<Vec<_>>()
        .join("\n")
}

fn build_ai_system_prompt(store_id: &str) -> String {
    format!("{AI_SYSTEM_PROMPT}\nKonteks toko aktif: {store_id}.")
}

fn current_runtime_status(app_handle: &tauri::AppHandle) -> Result<AiRuntimeStatus, String> {
    let openrouter_configured = read_secret(app_handle, OPENROUTER_SECRET_KEY)?.is_some();
    let ready = ensure_ollama_running().is_ok();

    {
        let mut guard = runtime()
            .ready
            .lock()
            .map_err(|_| "Gagal menyimpan status runtime AI.".to_string())?;
        *guard = ready;
    }

    if ready {
        Ok(AiRuntimeStatus {
            openrouter_configured,
            ready: true,
            reason: None,
        })
    } else {
        Ok(AiRuntimeStatus {
            openrouter_configured,
            ready: false,
            reason: Some("Ollama belum aktif di desktop app ini.".to_string()),
        })
    }
}

fn provider_status(app_handle: &tauri::AppHandle) -> Result<AiProviderStatus, String> {
    Ok(AiProviderStatus {
        openrouter_configured: read_secret(app_handle, OPENROUTER_SECRET_KEY)?.is_some(),
    })
}

fn save_openrouter_key(
    app_handle: &tauri::AppHandle,
    api_key: String,
) -> Result<AiProviderStatus, String> {
    let trimmed = api_key.trim();

    if trimmed.is_empty() {
        return Err("API key OpenRouter wajib diisi.".to_string());
    }

    write_secret(app_handle, OPENROUTER_SECRET_KEY, trimmed)?;

    Ok(AiProviderStatus {
        openrouter_configured: true,
    })
}

fn clear_openrouter_key(app_handle: &tauri::AppHandle) -> Result<AiProviderStatus, String> {
    delete_secret(app_handle, OPENROUTER_SECRET_KEY)?;

    Ok(AiProviderStatus {
        openrouter_configured: false,
    })
}

async fn chat_response(
    app_handle: &tauri::AppHandle,
    request: AiChatRequest,
) -> Result<AiChatResponse, String> {
    let _guard = runtime().chat_lock.lock().await;
    let tools = ai_data::build_tools(&request.store_id);

    let prompt = format!(
        "Konteks toko aktif: {}.\n{}\n\nJawab ringkas, jelas, dan dalam bahasa Indonesia.",
        request.store_id,
        build_transcript(&request.messages)
    );

    let response = match request.provider.as_str() {
        "openrouter" => {
            let api_key = read_secret(app_handle, OPENROUTER_SECRET_KEY)?
                .ok_or_else(|| "API key OpenRouter belum disimpan.".to_string())?;

            let provider = Openrouter::<DynamicModel>::builder()
                .api_key(api_key)
                .model_name(request.model)
                .build()
                .map_err(|error| error.to_string())?;

            let mut builder = LanguageModelRequest::builder()
                .model(provider)
                .system(build_ai_system_prompt(&request.store_id))
                .prompt(prompt)
                .stop_when(step_count_is(6));

            for tool in tools.clone() {
                builder = builder.with_tool(tool);
            }

            builder
                .build()
                .generate_text()
                .await
                .map_err(|error| error.to_string())?
        }
        _ => {
            ensure_ollama_running()?;

            let provider = OpenAICompatible::<DynamicModel>::builder()
                .base_url("http://127.0.0.1:11434/v1")
                .api_key("ollama")
                .model_name(request.model)
                .provider_name("ollama-local")
                .build()
                .map_err(|error| error.to_string())?;

            let mut builder = LanguageModelRequest::builder()
                .model(provider)
                .system(build_ai_system_prompt(&request.store_id))
                .prompt(prompt)
                .stop_when(step_count_is(6));

            for tool in tools {
                builder = builder.with_tool(tool);
            }

            builder
                .build()
                .generate_text()
                .await
                .map_err(|error| error.to_string())?
        }
    };

    Ok(AiChatResponse {
        reply: response
            .text()
            .unwrap_or_else(|| "Saya belum berhasil menghasilkan jawaban.".to_string()),
    })
}

async fn chat_stream(
    app_handle: &tauri::AppHandle,
    query: StreamChatQuery,
    request: VercelUIRequest,
) -> Result<StreamTextResponse, String> {
    let _guard = runtime().chat_lock.lock().await;
    let messages: Messages = request.into();
    let system_prompt = build_ai_system_prompt(&query.store_id);
    let tools = ai_data::build_tools(&query.store_id);

    match query.provider.as_str() {
        "openrouter" => {
            let api_key = read_secret(app_handle, OPENROUTER_SECRET_KEY)?
                .ok_or_else(|| "API key OpenRouter belum disimpan.".to_string())?;

            let provider = Openrouter::<DynamicModel>::builder()
                .api_key(api_key)
                .model_name(query.model)
                .build()
                .map_err(|error| error.to_string())?;

            let mut builder = LanguageModelRequest::builder()
                .model(provider)
                .system(system_prompt)
                .messages(messages)
                .stop_when(step_count_is(6));

            for tool in tools.clone() {
                builder = builder.with_tool(tool);
            }

            builder
                .build()
                .stream_text()
                .await
                .map_err(|error| error.to_string())
        }
        _ => {
            ensure_ollama_running()?;

            let provider = OpenAICompatible::<DynamicModel>::builder()
                .base_url("http://127.0.0.1:11434/v1")
                .api_key("ollama")
                .model_name(query.model)
                .provider_name("ollama-local")
                .build()
                .map_err(|error| error.to_string())?;

            let mut builder = LanguageModelRequest::builder()
                .model(provider)
                .system(system_prompt)
                .messages(messages)
                .stop_when(step_count_is(6));

            for tool in tools {
                builder = builder.with_tool(tool);
            }

            builder
                .build()
                .stream_text()
                .await
                .map_err(|error| error.to_string())
        }
    }
}

fn into_http_error(error: String) -> (StatusCode, Json<AiHttpError>) {
    (
        StatusCode::BAD_REQUEST,
        Json(AiHttpError { message: error }),
    )
}

fn serialize_frontend_chunk(chunk: FrontendUiChunk) -> String {
    serde_json::to_string(&chunk).unwrap_or_else(|_| {
        "{\"type\":\"error\",\"errorText\":\"Gagal menyiapkan stream AI.\"}".to_string()
    })
}

fn into_frontend_sse_response(response: StreamTextResponse) -> AiStreamResponse {
    let message_id = format!("msg_{:016x}", rand::random::<u64>());
    let mut sent_text_start = false;
    let mut sent_reasoning_start = false;
    let stream = response.stream.map(move |chunk| {
        let mut payloads = Vec::new();

        match chunk {
            LanguageModelStreamChunkType::Start => {
                payloads.push(serialize_frontend_chunk(FrontendUiChunk::Start));
            }
            LanguageModelStreamChunkType::Text(delta) => {
                if !sent_text_start {
                    sent_text_start = true;
                    payloads.push(serialize_frontend_chunk(FrontendUiChunk::TextStart {
                        id: message_id.clone(),
                    }));
                }

                payloads.push(serialize_frontend_chunk(FrontendUiChunk::TextDelta {
                    id: message_id.clone(),
                    delta,
                }));
            }
            LanguageModelStreamChunkType::Reasoning(delta) => {
                if !sent_reasoning_start {
                    sent_reasoning_start = true;
                    payloads.push(serialize_frontend_chunk(FrontendUiChunk::ReasoningStart {
                        id: message_id.clone(),
                    }));
                }

                payloads.push(serialize_frontend_chunk(FrontendUiChunk::ReasoningDelta {
                    id: message_id.clone(),
                    delta,
                }));
            }
            LanguageModelStreamChunkType::End(_) => {
                if sent_reasoning_start {
                    payloads.push(serialize_frontend_chunk(FrontendUiChunk::ReasoningEnd {
                        id: message_id.clone(),
                    }));
                    sent_reasoning_start = false;
                }

                if sent_text_start {
                    payloads.push(serialize_frontend_chunk(FrontendUiChunk::TextEnd {
                        id: message_id.clone(),
                    }));
                }

                payloads.push(serialize_frontend_chunk(FrontendUiChunk::Finish {
                    finish_reason: Some("stop"),
                }));
            }
            LanguageModelStreamChunkType::Failed(error)
            | LanguageModelStreamChunkType::Incomplete(error) => {
                payloads.push(serialize_frontend_chunk(FrontendUiChunk::Error {
                    error_text: error,
                }));
            }
            LanguageModelStreamChunkType::ToolCall(_) | LanguageModelStreamChunkType::NotSupported(_) => {}
        }

        let events = payloads
            .into_iter()
            .map(|payload| Ok(Event::default().data(payload)));

        futures::stream::iter(events)
    });
    let boxed_stream = Box::pin(stream.flatten()) as Pin<
        Box<dyn futures::Stream<Item = Result<Event, Infallible>> + Send>,
    >;

    Sse::new(boxed_stream).keep_alive(KeepAlive::new())
}

async fn health_handler() -> AiHttpJsonResult<AiRuntimeStatus> {
    Ok(Json(AiRuntimeStatus {
        openrouter_configured: false,
        ready: true,
        reason: None,
    }))
}

async fn provider_status_handler(
    State(state): State<AiHttpState>,
) -> AiHttpJsonResult<AiProviderStatus> {
    provider_status(&state.app_handle)
        .map(Json)
        .map_err(into_http_error)
}

async fn initialize_runtime_handler(
    State(state): State<AiHttpState>,
    Json(payload): Json<InitializeAiRuntimeRequest>,
) -> AiHttpJsonResult<AiRuntimeStatus> {
    ai_data::initialize_runtime(
        &state.app_handle,
        &payload.session_token,
        &payload.powersync_url,
        &payload.neon_data_api_url,
    )
    .map_err(into_http_error)?;

    current_runtime_status(&state.app_handle)
        .map(Json)
        .map_err(into_http_error)
}

async fn save_openrouter_key_handler(
    State(state): State<AiHttpState>,
    Json(payload): Json<SaveOpenrouterApiKeyRequest>,
) -> AiHttpJsonResult<AiProviderStatus> {
    save_openrouter_key(&state.app_handle, payload.api_key)
        .map(Json)
        .map_err(into_http_error)
}

async fn clear_openrouter_key_handler(
    State(state): State<AiHttpState>,
) -> AiHttpJsonResult<AiProviderStatus> {
    clear_openrouter_key(&state.app_handle)
        .map(Json)
        .map_err(into_http_error)
}

async fn chat_handler(
    State(state): State<AiHttpState>,
    Json(request): Json<AiChatRequest>,
) -> AiHttpJsonResult<AiChatResponse> {
    chat_response(&state.app_handle, request)
        .await
        .map(Json)
        .map_err(into_http_error)
}

async fn stream_chat_handler(
    State(state): State<AiHttpState>,
    Query(query): Query<StreamChatQuery>,
    Json(request): Json<VercelUIRequest>,
) -> AiHttpStreamResult {
    chat_stream(&state.app_handle, query, request)
        .await
        .map(into_frontend_sse_response)
        .map_err(into_http_error)
}

pub fn start_http_server(app_handle: tauri::AppHandle) {
    tauri::async_runtime::spawn(async move {
        if let Err(error) = run_http_server(app_handle).await {
            eprintln!("failed to start ai http server: {error}");
        }
    });
}

async fn run_http_server(app_handle: tauri::AppHandle) -> Result<(), String> {
    let cors = CorsLayer::new()
        .allow_origin(Any)
        .allow_methods(Any)
        .allow_headers(Any);

    let app = Router::new()
        .route("/api/ai/health", get(health_handler))
        .route("/api/ai/provider-status", get(provider_status_handler))
        .route(
            "/api/ai/openrouter-api-key",
            post(save_openrouter_key_handler).delete(clear_openrouter_key_handler),
        )
        .route(
            "/api/ai/runtime/initialize",
            post(initialize_runtime_handler),
        )
        .route("/api/ai/chat", post(chat_handler))
        .route("/api/ai/chat/stream", post(stream_chat_handler))
        .layer(cors)
        .with_state(AiHttpState { app_handle });

    let listener = tokio::net::TcpListener::bind(("127.0.0.1", AI_HTTP_SERVER_PORT))
        .await
        .map_err(|error| error.to_string())?;

    axum::serve(listener, app)
        .await
        .map_err(|error| error.to_string())
}
