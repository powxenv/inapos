use aisdk::core::tools::{Tool, ToolExecute};
use http_client::native::NativeClient;
use powersync::env::PowerSyncEnvironment;
use powersync::schema::{Column, Schema, Table};
use powersync::{ConnectionPool, PowerSyncDatabase};
use reqwest::{Client, Method, RequestBuilder, Url};
use rusqlite::Connection;
use rusqlite::params_from_iter;
use rusqlite::types::Value as SqlValue;
use schemars::JsonSchema;
use schemars::schema_for;
use serde::{Deserialize, Serialize};
use serde_json::{Map, Value, json};
use std::collections::{BTreeMap, HashSet};
use std::path::PathBuf;
use std::sync::{Arc, Mutex, OnceLock};
use tauri::Manager;

const AI_POWERSYNC_DB_NAME: &str = "ai-powersync.sqlite";

static DATA_RUNTIME: OnceLock<Mutex<Option<AiDataRuntimeState>>> = OnceLock::new();
static POWERSYNC_EXTENSION_READY: OnceLock<()> = OnceLock::new();

#[derive(Clone)]
struct AiDataRuntimeState {
    neon_data_api_url: String,
    powersync_db_path: PathBuf,
    session_token: String,
}

#[derive(Clone, Copy, Debug, Deserialize, Eq, Hash, JsonSchema, PartialEq, Serialize)]
#[serde(rename_all = "snake_case")]
pub enum AiTable {
    CashEntries,
    Customers,
    Expenses,
    InventoryItems,
    Products,
    Promotions,
    Purchases,
    SaleItems,
    Sales,
    Suppliers,
}

#[derive(Clone, Copy)]
enum FieldKind {
    Integer,
    Real,
    Text,
}

#[derive(Clone, Copy)]
struct FieldSpec {
    kind: FieldKind,
    name: &'static str,
}

#[derive(Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
struct ListRecordsInput {
    filters: Option<Vec<RecordFilterInput>>,
    limit: Option<u32>,
    order_by: Option<String>,
    table: AiTable,
}

#[derive(Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
struct GetRecordInput {
    id: String,
    table: AiTable,
}

#[derive(Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
struct CreateRecordInput {
    table: AiTable,
    values: BTreeMap<String, Value>,
}

#[derive(Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
struct UpdateRecordInput {
    id: String,
    table: AiTable,
    values: BTreeMap<String, Value>,
}

#[derive(Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
struct DeleteRecordInput {
    id: String,
    table: AiTable,
}

#[derive(Clone, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
struct RecordFilterInput {
    field: String,
    operator: FilterOperator,
    value: String,
}

#[derive(Clone, Copy, Deserialize, JsonSchema)]
#[serde(rename_all = "snake_case")]
enum FilterOperator {
    Eq,
    Gte,
    ILike,
    Lte,
}

#[derive(Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
struct CreateSaleInput {
    customer_id: Option<String>,
    items: Vec<CreateSaleItemInput>,
    payment_method: String,
    receipt_number: Option<String>,
}

#[derive(Clone, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
struct CreateSaleItemInput {
    product_id: String,
    quantity: f64,
    unit_price: Option<f64>,
}

#[derive(Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
struct DeleteSaleInput {
    sale_id: String,
}

#[derive(Clone)]
struct ProductSnapshot {
    id: String,
    name: Option<String>,
    selling_price: f64,
}

#[derive(Clone)]
struct InventorySnapshot {
    id: String,
    on_hand: f64,
}

#[derive(Clone)]
struct CustomerSnapshot {
    id: String,
    total_spent: f64,
}

#[derive(Clone)]
struct SaleLinePlan {
    inventory: InventorySnapshot,
    line_total: f64,
    price: f64,
    product: ProductSnapshot,
    quantity: f64,
    sale_item_id: String,
}

fn data_runtime() -> &'static Mutex<Option<AiDataRuntimeState>> {
    DATA_RUNTIME.get_or_init(|| Mutex::new(None))
}

fn runtime_state() -> Result<AiDataRuntimeState, String> {
    let guard = data_runtime()
        .lock()
        .map_err(|_| "Runtime data AI sedang terkunci.".to_string())?;
    guard
        .clone()
        .ok_or_else(|| "Runtime data AI belum diinisialisasi.".to_string())
}

fn ensure_powersync_extension() -> Result<(), String> {
    if POWERSYNC_EXTENSION_READY.get().is_some() {
        return Ok(());
    }

    PowerSyncEnvironment::powersync_auto_extension().map_err(|error| error.to_string())?;
    let _ = POWERSYNC_EXTENSION_READY.set(());

    Ok(())
}

fn initialize_local_cache_schema(path: &PathBuf) -> Result<(), String> {
    let connection = Connection::open(path).map_err(|error| error.to_string())?;
    connection
        .pragma_update(None, "busy_timeout", 30_000)
        .map_err(|error| error.to_string())?;

    for table in [
        AiTable::CashEntries,
        AiTable::Customers,
        AiTable::Expenses,
        AiTable::InventoryItems,
        AiTable::Promotions,
        AiTable::Products,
        AiTable::Purchases,
        AiTable::SaleItems,
        AiTable::Sales,
        AiTable::Suppliers,
    ] {
        let mut columns = vec!["id TEXT PRIMARY KEY".to_string()];

        for field in table_fields(table) {
            let column_type = match field.kind {
                FieldKind::Integer => "INTEGER",
                FieldKind::Real => "REAL",
                FieldKind::Text => "TEXT",
            };

            columns.push(format!("{} {}", field.name, column_type));
        }

        connection
            .execute(
                &format!(
                    "CREATE TABLE IF NOT EXISTS {} ({})",
                    table_name(table),
                    columns.join(", ")
                ),
                [],
            )
            .map_err(|error| error.to_string())?;
    }

    Ok(())
}

pub fn initialize_runtime(
    app_handle: &tauri::AppHandle,
    session_token: &str,
    powersync_url: &str,
    neon_data_api_url: &str,
) -> Result<(), String> {
    let trimmed_token = session_token.trim();
    let trimmed_powersync_url = powersync_url.trim();
    let trimmed_neon_data_api_url = neon_data_api_url.trim();

    if trimmed_token.is_empty() {
        return Err("Session token Neon wajib tersedia.".to_string());
    }

    if trimmed_powersync_url.is_empty() {
        return Err("URL PowerSync wajib tersedia.".to_string());
    }

    if trimmed_neon_data_api_url.is_empty() {
        return Err("URL Neon Data API wajib tersedia.".to_string());
    }

    let app_data_dir = app_handle
        .path()
        .app_data_dir()
        .map_err(|error| error.to_string())?;

    std::fs::create_dir_all(&app_data_dir).map_err(|error| error.to_string())?;

    let powersync_db_path = app_data_dir.join(AI_POWERSYNC_DB_NAME);
    initialize_local_cache_schema(&powersync_db_path)?;

    if !cfg!(target_vendor = "apple") && ensure_powersync_extension().is_ok() {
        let environment = PowerSyncEnvironment::custom(
            Arc::new(NativeClient::new()),
            ConnectionPool::open(&powersync_db_path).map_err(|error| error.to_string())?,
            Box::new(PowerSyncEnvironment::tokio_timer()),
        );

        let _ = PowerSyncDatabase::new(environment, build_powersync_schema());
    }

    let mut guard = data_runtime()
        .lock()
        .map_err(|_| "Runtime data AI sedang terkunci.".to_string())?;

    *guard = Some(AiDataRuntimeState {
        neon_data_api_url: trimmed_neon_data_api_url.to_string(),
        powersync_db_path,
        session_token: trimmed_token.to_string(),
    });

    Ok(())
}

pub fn build_tools(store_id: &str) -> Vec<Tool> {
    vec![
        describe_tables_tool(),
        list_records_tool(store_id),
        get_record_tool(store_id),
        create_record_tool(store_id),
        update_record_tool(store_id),
        delete_record_tool(store_id),
        create_sale_tool(store_id),
        delete_sale_tool(store_id),
    ]
}

fn describe_tables_tool() -> Tool {
    Tool {
        description: "Menjelaskan tabel data POS yang bisa dibaca atau diubah lewat chat.".to_string(),
        execute: ToolExecute::new(Box::new(|_| {
            Ok(json!({
                "tables": [
                    {
                        "name": "products",
                        "purpose": "Master barang",
                        "writes": ["create_record", "update_record", "delete_record"]
                    },
                    {
                        "name": "customers",
                        "purpose": "Pelanggan dan total belanja",
                        "writes": ["create_record", "update_record", "delete_record"]
                    },
                    {
                        "name": "suppliers",
                        "purpose": "Pemasok",
                        "writes": ["create_record", "update_record", "delete_record"]
                    },
                    {
                        "name": "expenses",
                        "purpose": "Pengeluaran",
                        "writes": ["create_record", "update_record", "delete_record"]
                    },
                    {
                        "name": "cash_entries",
                        "purpose": "Kas masuk dan keluar",
                        "writes": ["create_record", "update_record", "delete_record"]
                    },
                    {
                        "name": "promotions",
                        "purpose": "Promo dan diskon",
                        "writes": ["create_record", "update_record", "delete_record"]
                    },
                    {
                        "name": "inventory_items",
                        "purpose": "Stok per barang",
                        "writes": ["create_record", "update_record", "delete_record"]
                    },
                    {
                        "name": "purchases",
                        "purpose": "Pembelian dari supplier",
                        "writes": ["create_record", "update_record", "delete_record"]
                    },
                    {
                        "name": "sales",
                        "purpose": "Header transaksi penjualan",
                        "writes": ["create_sale", "delete_sale"]
                    },
                    {
                        "name": "sale_items",
                        "purpose": "Detail item transaksi",
                        "writes": ["create_sale", "delete_sale"]
                    }
                ]
            })
            .to_string())
        })),
        input_schema: schema_for!(serde_json::Value),
        name: "describe_pos_tables".to_string(),
    }
}

fn list_records_tool(store_id: &str) -> Tool {
    let store_id = store_id.to_string();

    Tool {
        description: "Membaca daftar data dari tabel POS aktif. Gunakan saat pengguna meminta daftar, ringkasan, pencarian, atau pengecekan data nyata di toko aktif.".to_string(),
        execute: ToolExecute::new(Box::new(move |params| {
            let input: ListRecordsInput =
                serde_json::from_value(params).map_err(|error| error.to_string())?;
            list_records(&store_id, input)
        })),
        input_schema: schema_for!(ListRecordsInput),
        name: "list_records".to_string(),
    }
}

fn get_record_tool(store_id: &str) -> Tool {
    let store_id = store_id.to_string();

    Tool {
        description: "Membaca satu data spesifik berdasarkan id dari tabel POS aktif.".to_string(),
        execute: ToolExecute::new(Box::new(move |params| {
            let input: GetRecordInput =
                serde_json::from_value(params).map_err(|error| error.to_string())?;
            get_record(&store_id, input)
        })),
        input_schema: schema_for!(GetRecordInput),
        name: "get_record".to_string(),
    }
}

fn create_record_tool(store_id: &str) -> Tool {
    let store_id = store_id.to_string();

    Tool {
        description: "Membuat data baru pada tabel POS aktif yang aman untuk CRUD langsung. Jangan gunakan untuk sales atau sale_items.".to_string(),
        execute: ToolExecute::new(Box::new(move |params| {
            let input: CreateRecordInput =
                serde_json::from_value(params).map_err(|error| error.to_string())?;
            create_record(&store_id, input)
        })),
        input_schema: schema_for!(CreateRecordInput),
        name: "create_record".to_string(),
    }
}

fn update_record_tool(store_id: &str) -> Tool {
    let store_id = store_id.to_string();

    Tool {
        description: "Mengubah data pada tabel POS aktif yang aman untuk CRUD langsung. Jangan gunakan untuk sales atau sale_items.".to_string(),
        execute: ToolExecute::new(Box::new(move |params| {
            let input: UpdateRecordInput =
                serde_json::from_value(params).map_err(|error| error.to_string())?;
            update_record(&store_id, input)
        })),
        input_schema: schema_for!(UpdateRecordInput),
        name: "update_record".to_string(),
    }
}

fn delete_record_tool(store_id: &str) -> Tool {
    let store_id = store_id.to_string();

    Tool {
        description: "Menghapus data pada tabel POS aktif yang aman untuk CRUD langsung. Jangan gunakan untuk sales atau sale_items.".to_string(),
        execute: ToolExecute::new(Box::new(move |params| {
            let input: DeleteRecordInput =
                serde_json::from_value(params).map_err(|error| error.to_string())?;
            delete_record(&store_id, input)
        })),
        input_schema: schema_for!(DeleteRecordInput),
        name: "delete_record".to_string(),
    }
}

fn create_sale_tool(store_id: &str) -> Tool {
    let store_id = store_id.to_string();

    Tool {
        description: "Menyimpan transaksi penjualan lengkap seperti modul kasir. Tool ini membuat sales, sale_items, mengurangi stok inventory_items, dan menambah total_spent customer bila ada.".to_string(),
        execute: ToolExecute::new(Box::new(move |params| {
            let input: CreateSaleInput =
                serde_json::from_value(params).map_err(|error| error.to_string())?;
            create_sale(&store_id, input)
        })),
        input_schema: schema_for!(CreateSaleInput),
        name: "create_sale".to_string(),
    }
}

fn delete_sale_tool(store_id: &str) -> Tool {
    let store_id = store_id.to_string();

    Tool {
        description: "Menghapus transaksi penjualan dan membalikkan stok serta total belanja pelanggan seperti pembatalan transaksi.".to_string(),
        execute: ToolExecute::new(Box::new(move |params| {
            let input: DeleteSaleInput =
                serde_json::from_value(params).map_err(|error| error.to_string())?;
            delete_sale(&store_id, input)
        })),
        input_schema: schema_for!(DeleteSaleInput),
        name: "delete_sale".to_string(),
    }
}

fn list_records(store_id: &str, input: ListRecordsInput) -> Result<String, String> {
    let runtime = runtime_state()?;
    let limit = input.limit.unwrap_or(10).clamp(1, 50);
    let filters = input.filters.unwrap_or_default();

    validate_filters(input.table, &filters)?;

    let mut url = table_url(&runtime.neon_data_api_url, input.table)?;
    append_store_scope(&mut url, input.table, store_id, &filters)?;
    {
        let mut query = url.query_pairs_mut();
        query.append_pair("select", "*");
        query.append_pair("limit", &limit.to_string());

        for filter in &filters {
            query.append_pair(
                &filter.field,
                &format_filter_value(filter.operator, &filter.value),
            );
        }

        if let Some(order_by) = resolve_order_by(input.table, input.order_by.as_deref())? {
            query.append_pair("order", &order_by);
        }
    }

    let rows = parse_array_response(send_json_request(
        build_request(&runtime, Method::GET, url),
    )?)?;

    Ok(json!({
        "count": rows.len(),
        "records": rows,
        "storeId": store_id,
        "table": table_name(input.table)
    })
    .to_string())
}

fn get_record(store_id: &str, input: GetRecordInput) -> Result<String, String> {
    let runtime = runtime_state()?;

    if input.id.trim().is_empty() {
        return Err("ID data wajib diisi.".to_string());
    }

    let mut url = table_url(&runtime.neon_data_api_url, input.table)?;
    append_store_scope(&mut url, input.table, store_id, &[])?;
    {
        let mut query = url.query_pairs_mut();
        query.append_pair("select", "*");
        query.append_pair("id", &format!("eq.{}", input.id.trim()));
        if input.table == AiTable::SaleItems {
            return Err("Gunakan list_records untuk sale_items dengan filter sale_id.".to_string());
        }
    }

    let record = first_record_or_error(parse_array_response(send_json_request(build_request(
        &runtime,
        Method::GET,
        url,
    ))?)?)?;

    Ok(json!({
        "record": record,
        "storeId": store_id,
        "table": table_name(input.table)
    })
    .to_string())
}

fn create_record(store_id: &str, input: CreateRecordInput) -> Result<String, String> {
    let runtime = runtime_state()?;

    if !is_generic_write_table(input.table) {
        return Err("Tabel ini harus diubah lewat tool transaksi khusus.".to_string());
    }

    let record = sanitize_create_values(input.table, store_id, input.values)?;
    let mut url = table_url(&runtime.neon_data_api_url, input.table)?;
    url.query_pairs_mut().append_pair("select", "*");

    let response = send_json_request(
        build_request(&runtime, Method::POST, url)
            .header("Prefer", "return=representation")
            .json(&Value::Object(record.clone())),
    )?;
    let created = first_record_or_error(parse_array_or_single_record(response)?)?;

    mirror_upsert_record(&runtime, input.table, &created)?;

    Ok(json!({
        "record": created,
        "status": "created",
        "table": table_name(input.table)
    })
    .to_string())
}

fn update_record(store_id: &str, input: UpdateRecordInput) -> Result<String, String> {
    let runtime = runtime_state()?;

    if input.id.trim().is_empty() {
        return Err("ID data wajib diisi.".to_string());
    }

    if !is_generic_write_table(input.table) {
        return Err("Tabel ini harus diubah lewat tool transaksi khusus.".to_string());
    }

    let changes = sanitize_update_values(input.table, store_id, input.values)?;
    if changes.is_empty() {
        return Err("Perubahan data tidak boleh kosong.".to_string());
    }

    let mut url = table_url(&runtime.neon_data_api_url, input.table)?;
    append_store_scope(&mut url, input.table, store_id, &[])?;
    {
        let mut query = url.query_pairs_mut();
        query.append_pair("select", "*");
        query.append_pair("id", &format!("eq.{}", input.id.trim()));
    }

    let response = send_json_request(
        build_request(&runtime, Method::PATCH, url)
            .header("Prefer", "return=representation")
            .json(&Value::Object(changes)),
    )?;
    let updated = first_record_or_error(parse_array_or_single_record(response)?)?;

    mirror_upsert_record(&runtime, input.table, &updated)?;

    Ok(json!({
        "record": updated,
        "status": "updated",
        "table": table_name(input.table)
    })
    .to_string())
}

fn delete_record(store_id: &str, input: DeleteRecordInput) -> Result<String, String> {
    let runtime = runtime_state()?;

    if input.id.trim().is_empty() {
        return Err("ID data wajib diisi.".to_string());
    }

    if !is_generic_write_table(input.table) {
        return Err("Tabel ini harus dihapus lewat tool transaksi khusus.".to_string());
    }

    let mut url = table_url(&runtime.neon_data_api_url, input.table)?;
    append_store_scope(&mut url, input.table, store_id, &[])?;
    {
        let mut query = url.query_pairs_mut();
        query.append_pair("select", "*");
        query.append_pair("id", &format!("eq.{}", input.id.trim()));
    }

    let response = send_json_request(
        build_request(&runtime, Method::DELETE, url).header("Prefer", "return=representation"),
    )?;
    let deleted = first_record_or_error(parse_array_or_single_record(response)?)?;

    mirror_delete_record(&runtime, input.table, input.id.trim())?;

    Ok(json!({
        "record": deleted,
        "status": "deleted",
        "table": table_name(input.table)
    })
    .to_string())
}

fn create_sale(store_id: &str, input: CreateSaleInput) -> Result<String, String> {
    let runtime = runtime_state()?;

    if input.items.is_empty() {
        return Err("Minimal satu item penjualan wajib diisi.".to_string());
    }

    let now = now_iso_string();
    let sale_id = random_id("sale");
    let receipt_number = input
        .receipt_number
        .unwrap_or_else(create_receipt_number)
        .trim()
        .to_string();

    if receipt_number.is_empty() {
        return Err("Nomor struk wajib tersedia.".to_string());
    }

    let customer = match input.customer_id.as_deref().map(str::trim) {
        Some(customer_id) if !customer_id.is_empty() => Some(fetch_customer(&runtime, customer_id)?),
        _ => None,
    };

    let mut lines = Vec::new();

    for item in &input.items {
        if item.product_id.trim().is_empty() {
            return Err("Setiap item penjualan wajib punya product_id.".to_string());
        }

        if item.quantity <= 0.0 {
            return Err("Jumlah item penjualan harus lebih dari 0.".to_string());
        }

        let product = fetch_product(&runtime, store_id, item.product_id.trim())?;
        let inventory = fetch_inventory(&runtime, store_id, item.product_id.trim())?;
        let price = item.unit_price.unwrap_or(product.selling_price);

        if inventory.on_hand < item.quantity {
            return Err(format!(
                "Stok {} tidak cukup. Tersedia {}, diminta {}.",
                product.name.clone().unwrap_or_else(|| product.id.clone()),
                inventory.on_hand,
                item.quantity
            ));
        }

        lines.push(SaleLinePlan {
            inventory,
            line_total: price * item.quantity,
            price,
            product,
            quantity: item.quantity,
            sale_item_id: random_id("sale_item"),
        });
    }

    let total_amount = lines.iter().map(|line| line.line_total).sum::<f64>();

    let sale_record = json!({
        "id": sale_id,
        "store_id": store_id,
        "receipt_number": receipt_number,
        "customer_id": customer.as_ref().map(|entry| entry.id.clone()),
        "payment_method": input.payment_method.trim(),
        "status": "completed",
        "total_amount": total_amount,
        "created_at": now,
        "updated_at": now
    });
    let mut created_sale_items = Vec::new();
    let mut patched_inventory = Vec::new();
    let mut patched_customer: Option<Map<String, Value>> = None;

    let created_sale = match create_remote_record(&runtime, AiTable::Sales, sale_record)? {
        Some(record) => record,
        None => return Err("Gagal membuat transaksi penjualan.".to_string()),
    };

    let result = (|| -> Result<(), String> {
        for line in &lines {
            let sale_item = json!({
                "id": line.sale_item_id,
                "sale_id": created_sale
                    .get("id")
                    .and_then(Value::as_str)
                    .unwrap_or_default(),
                "product_id": line.product.id,
                "quantity": line.quantity,
                "unit_price": line.price,
                "line_total": line.line_total,
                "updated_at": now
            });

            let created = match create_remote_record(&runtime, AiTable::SaleItems, sale_item)? {
                Some(record) => record,
                None => return Err("Gagal membuat item penjualan.".to_string()),
            };

            created_sale_items.push(created);

            let patched = patch_remote_record(
                &runtime,
                AiTable::InventoryItems,
                &line.inventory.id,
                store_id,
                json!({
                    "on_hand": (line.inventory.on_hand - line.quantity).max(0.0),
                    "updated_at": now
                }),
            )?
            .ok_or_else(|| "Gagal memperbarui stok barang.".to_string())?;

            patched_inventory.push(patched);
        }

        if let Some(customer_snapshot) = &customer {
            patched_customer = patch_remote_record(
                &runtime,
                AiTable::Customers,
                &customer_snapshot.id,
                store_id,
                json!({
                    "total_spent": customer_snapshot.total_spent + total_amount,
                    "updated_at": now
                }),
            )?;
        }

        Ok(())
    })();

    if let Err(error) = result {
        rollback_sale_creation(
            &runtime,
            store_id,
            &created_sale,
            &created_sale_items,
            &lines,
            customer.as_ref(),
        );
        return Err(error);
    }

    mirror_upsert_record(&runtime, AiTable::Sales, &created_sale)?;
    for row in &created_sale_items {
        mirror_upsert_record(&runtime, AiTable::SaleItems, row)?;
    }
    for row in &patched_inventory {
        mirror_upsert_record(&runtime, AiTable::InventoryItems, row)?;
    }
    if let Some(row) = &patched_customer {
        mirror_upsert_record(&runtime, AiTable::Customers, row)?;
    }

    Ok(json!({
        "customer": patched_customer,
        "inventoryUpdates": patched_inventory,
        "sale": created_sale,
        "saleItems": created_sale_items,
        "status": "created"
    })
    .to_string())
}

fn delete_sale(store_id: &str, input: DeleteSaleInput) -> Result<String, String> {
    let runtime = runtime_state()?;
    let sale_id = input.sale_id.trim();

    if sale_id.is_empty() {
        return Err("ID transaksi wajib diisi.".to_string());
    }

    let sale = fetch_sale(&runtime, store_id, sale_id)?;
    let sale_items = fetch_sale_items(&runtime, sale_id)?;
    let sale_total = get_f64_field(&sale, "total_amount")?;
    let customer_id = sale
        .get("customer_id")
        .and_then(Value::as_str)
        .map(str::to_string)
        .filter(|value| !value.trim().is_empty());
    let customer = match customer_id.as_deref() {
        Some(value) => Some(fetch_customer(&runtime, value)?),
        None => None,
    };

    let inventory_snapshots = sale_items
        .iter()
        .map(|item| {
            let product_id = get_string_field(item, "product_id")?;
            fetch_inventory(&runtime, store_id, &product_id)
        })
        .collect::<Result<Vec<_>, _>>()?;

    for sale_item in &sale_items {
        let sale_item_id = get_string_field(sale_item, "id")?;
        let _ = delete_remote_record(&runtime, AiTable::SaleItems, &sale_item_id, None)?;
    }

    let deleted_sale = delete_remote_record(&runtime, AiTable::Sales, sale_id, Some(store_id))?
        .ok_or_else(|| "Transaksi penjualan tidak ditemukan.".to_string())?;

    let mut patched_inventory = Vec::new();
    for (sale_item, inventory) in sale_items.iter().zip(inventory_snapshots.iter()) {
        let quantity = get_f64_field(sale_item, "quantity")?;
        let patched = patch_remote_record(
            &runtime,
            AiTable::InventoryItems,
            &inventory.id,
            store_id,
            json!({
                "on_hand": inventory.on_hand + quantity,
                "updated_at": now_iso_string()
            }),
        )?
        .ok_or_else(|| "Gagal mengembalikan stok barang.".to_string())?;
        patched_inventory.push(patched);
    }

    let patched_customer = if let Some(customer_snapshot) = &customer {
        patch_remote_record(
            &runtime,
            AiTable::Customers,
            &customer_snapshot.id,
            store_id,
            json!({
                "total_spent": (customer_snapshot.total_spent - sale_total).max(0.0),
                "updated_at": now_iso_string()
            }),
        )?
    } else {
        None
    };

    for sale_item in &sale_items {
        let sale_item_id = get_string_field(sale_item, "id")?;
        mirror_delete_record(&runtime, AiTable::SaleItems, &sale_item_id)?;
    }
    mirror_delete_record(&runtime, AiTable::Sales, sale_id)?;
    for row in &patched_inventory {
        mirror_upsert_record(&runtime, AiTable::InventoryItems, row)?;
    }
    if let Some(row) = &patched_customer {
        mirror_upsert_record(&runtime, AiTable::Customers, row)?;
    }

    Ok(json!({
        "customer": patched_customer,
        "inventoryUpdates": patched_inventory,
        "sale": deleted_sale,
        "saleItems": sale_items,
        "status": "deleted"
    })
    .to_string())
}

fn rollback_sale_creation(
    runtime: &AiDataRuntimeState,
    store_id: &str,
    created_sale: &Map<String, Value>,
    created_sale_items: &[Map<String, Value>],
    lines: &[SaleLinePlan],
    customer: Option<&CustomerSnapshot>,
) {
    for line in lines {
        let _ = patch_remote_record(
            runtime,
            AiTable::InventoryItems,
            &line.inventory.id,
            store_id,
            json!({
                "on_hand": line.inventory.on_hand,
                "updated_at": now_iso_string()
            }),
        );
    }

    if let Some(customer_snapshot) = customer {
        let _ = patch_remote_record(
            runtime,
            AiTable::Customers,
            &customer_snapshot.id,
            store_id,
            json!({
                "total_spent": customer_snapshot.total_spent,
                "updated_at": now_iso_string()
            }),
        );
    }

    for sale_item in created_sale_items {
        if let Ok(id) = get_string_field(sale_item, "id") {
            let _ = delete_remote_record(runtime, AiTable::SaleItems, &id, None);
        }
    }

    if let Ok(id) = get_string_field(created_sale, "id") {
        let _ = delete_remote_record(runtime, AiTable::Sales, &id, Some(store_id));
    }
}

fn fetch_product(
    runtime: &AiDataRuntimeState,
    store_id: &str,
    product_id: &str,
) -> Result<ProductSnapshot, String> {
    let mut url = table_url(&runtime.neon_data_api_url, AiTable::Products)?;
    {
        let mut query = url.query_pairs_mut();
        query.append_pair("select", "id,name,selling_price");
        query.append_pair("store_id", &format!("eq.{store_id}"));
        query.append_pair("id", &format!("eq.{product_id}"));
        query.append_pair("limit", "1");
    }

    let record = first_record_or_error(parse_array_response(send_json_request(build_request(
        runtime,
        Method::GET,
        url,
    ))?)?)?;

    Ok(ProductSnapshot {
        id: get_string_field(&record, "id")?,
        name: record
            .get("name")
            .and_then(Value::as_str)
            .map(str::to_string),
        selling_price: get_f64_field(&record, "selling_price")?,
    })
}

fn fetch_inventory(
    runtime: &AiDataRuntimeState,
    store_id: &str,
    product_id: &str,
) -> Result<InventorySnapshot, String> {
    let mut url = table_url(&runtime.neon_data_api_url, AiTable::InventoryItems)?;
    {
        let mut query = url.query_pairs_mut();
        query.append_pair("select", "id,product_id,on_hand,reorder_point");
        query.append_pair("store_id", &format!("eq.{store_id}"));
        query.append_pair("product_id", &format!("eq.{product_id}"));
        query.append_pair("limit", "1");
    }

    let record = first_record_or_error(parse_array_response(send_json_request(build_request(
        runtime,
        Method::GET,
        url,
    ))?)?)?;

    Ok(InventorySnapshot {
        id: get_string_field(&record, "id")?,
        on_hand: get_f64_field(&record, "on_hand")?,
    })
}

fn fetch_customer(runtime: &AiDataRuntimeState, customer_id: &str) -> Result<CustomerSnapshot, String> {
    let mut url = table_url(&runtime.neon_data_api_url, AiTable::Customers)?;
    {
        let mut query = url.query_pairs_mut();
        query.append_pair("select", "id,total_spent");
        query.append_pair("id", &format!("eq.{customer_id}"));
        query.append_pair("limit", "1");
    }

    let record = first_record_or_error(parse_array_response(send_json_request(build_request(
        runtime,
        Method::GET,
        url,
    ))?)?)?;

    Ok(CustomerSnapshot {
        id: get_string_field(&record, "id")?,
        total_spent: get_optional_f64_field(&record, "total_spent").unwrap_or(0.0),
    })
}

fn fetch_sale(
    runtime: &AiDataRuntimeState,
    store_id: &str,
    sale_id: &str,
) -> Result<Map<String, Value>, String> {
    let mut url = table_url(&runtime.neon_data_api_url, AiTable::Sales)?;
    {
        let mut query = url.query_pairs_mut();
        query.append_pair("select", "*");
        query.append_pair("store_id", &format!("eq.{store_id}"));
        query.append_pair("id", &format!("eq.{sale_id}"));
        query.append_pair("limit", "1");
    }

    first_record_or_error(parse_array_response(send_json_request(build_request(
        runtime,
        Method::GET,
        url,
    ))?)?)
}

fn fetch_sale_items(
    runtime: &AiDataRuntimeState,
    sale_id: &str,
) -> Result<Vec<Map<String, Value>>, String> {
    let mut url = table_url(&runtime.neon_data_api_url, AiTable::SaleItems)?;
    {
        let mut query = url.query_pairs_mut();
        query.append_pair("select", "*");
        query.append_pair("sale_id", &format!("eq.{sale_id}"));
        query.append_pair("order", "updated_at.asc");
    }

    parse_array_response(send_json_request(build_request(runtime, Method::GET, url))?)
}

fn create_remote_record(
    runtime: &AiDataRuntimeState,
    table: AiTable,
    value: Value,
) -> Result<Option<Map<String, Value>>, String> {
    let mut url = table_url(&runtime.neon_data_api_url, table)?;
    url.query_pairs_mut().append_pair("select", "*");

    let response = send_json_request(
        build_request(runtime, Method::POST, url)
            .header("Prefer", "return=representation")
            .json(&value),
    )?;

    let rows = parse_array_or_single_record(response)?;
    if rows.is_empty() {
        return Ok(None);
    }

    Ok(rows.into_iter().next())
}

fn patch_remote_record(
    runtime: &AiDataRuntimeState,
    table: AiTable,
    id: &str,
    store_id: &str,
    value: Value,
) -> Result<Option<Map<String, Value>>, String> {
    let mut url = table_url(&runtime.neon_data_api_url, table)?;
    {
        let mut query = url.query_pairs_mut();
        query.append_pair("select", "*");
        query.append_pair("id", &format!("eq.{id}"));
        if has_store_id(table) {
            query.append_pair("store_id", &format!("eq.{store_id}"));
        }
    }

    let response = send_json_request(
        build_request(runtime, Method::PATCH, url)
            .header("Prefer", "return=representation")
            .json(&value),
    )?;
    let rows = parse_array_or_single_record(response)?;

    if rows.is_empty() {
        return Ok(None);
    }

    Ok(rows.into_iter().next())
}

fn delete_remote_record(
    runtime: &AiDataRuntimeState,
    table: AiTable,
    id: &str,
    store_id: Option<&str>,
) -> Result<Option<Map<String, Value>>, String> {
    let mut url = table_url(&runtime.neon_data_api_url, table)?;
    {
        let mut query = url.query_pairs_mut();
        query.append_pair("select", "*");
        query.append_pair("id", &format!("eq.{id}"));
        if has_store_id(table) {
            if let Some(value) = store_id {
                query.append_pair("store_id", &format!("eq.{value}"));
            }
        }
    }

    let response = send_json_request(
        build_request(runtime, Method::DELETE, url).header("Prefer", "return=representation"),
    )?;
    let rows = parse_array_or_single_record(response)?;

    if rows.is_empty() {
        return Ok(None);
    }

    Ok(rows.into_iter().next())
}

fn build_request(runtime: &AiDataRuntimeState, method: Method, url: Url) -> RequestBuilder {
    Client::new()
        .request(method, url)
        .bearer_auth(runtime.session_token.as_str())
        .header("Accept", "application/json")
        .header("Content-Type", "application/json")
}

fn send_json_request(request: RequestBuilder) -> Result<Value, String> {
    tokio::task::block_in_place(move || {
        tokio::runtime::Handle::current().block_on(async move {
            let response = request.send().await.map_err(|error| error.to_string())?;
            let status = response.status();
            let text = response.text().await.map_err(|error| error.to_string())?;

            if status.is_success() {
                if text.trim().is_empty() {
                    return Ok(Value::Array(vec![]));
                }

                return serde_json::from_str::<Value>(&text).map_err(|error| error.to_string());
            }

            Err(read_neon_error(status.as_u16(), &text))
        })
    })
}

fn read_neon_error(status: u16, text: &str) -> String {
    if let Ok(payload) = serde_json::from_str::<Value>(&text) {
        if let Some(message) = payload.get("message").and_then(Value::as_str) {
            return format!("Neon Data API {status}: {message}");
        }

        if let Some(details) = payload.get("details").and_then(Value::as_str) {
            return format!("Neon Data API {status}: {details}");
        }

        if let Some(error) = payload.get("error").and_then(Value::as_str) {
            return format!("Neon Data API {status}: {error}");
        }
    }

    if text.trim().is_empty() {
        return format!("Neon Data API merespons status {}.", status);
    }

    format!("Neon Data API {status}: {text}")
}

fn parse_array_response(response: Value) -> Result<Vec<Map<String, Value>>, String> {
    match response {
        Value::Array(items) => items
            .into_iter()
            .map(|item| match item {
                Value::Object(record) => Ok(record),
                _ => Err("Respons Data API tidak berbentuk object.".to_string()),
            })
            .collect(),
        _ => Err("Respons Data API tidak berbentuk array.".to_string()),
    }
}

fn parse_array_or_single_record(response: Value) -> Result<Vec<Map<String, Value>>, String> {
    match response {
        Value::Array(items) => items
            .into_iter()
            .map(|item| match item {
                Value::Object(record) => Ok(record),
                _ => Err("Respons Data API tidak berbentuk object.".to_string()),
            })
            .collect(),
        Value::Object(record) => Ok(vec![record]),
        _ => Err("Respons Data API tidak bisa diproses.".to_string()),
    }
}

fn first_record_or_error(rows: Vec<Map<String, Value>>) -> Result<Map<String, Value>, String> {
    rows.into_iter()
        .next()
        .ok_or_else(|| "Data yang diminta tidak ditemukan.".to_string())
}

fn table_url(base_url: &str, table: AiTable) -> Result<Url, String> {
    Url::parse(&format!(
        "{}/{}",
        base_url.trim_end_matches('/'),
        table_name(table)
    ))
    .map_err(|error| error.to_string())
}

fn append_store_scope(
    url: &mut Url,
    table: AiTable,
    store_id: &str,
    filters: &[RecordFilterInput],
) -> Result<(), String> {
    if table == AiTable::SaleItems {
        let has_sale_scope = filters.iter().any(|filter| filter.field == "sale_id");

        if !has_sale_scope {
            return Err("sale_items wajib difilter dengan sale_id.".to_string());
        }

        return Ok(());
    }

    if has_store_id(table) {
        let mut query = url.query_pairs_mut();
        query.append_pair("store_id", &format!("eq.{store_id}"));
    }

    Ok(())
}

fn format_filter_value(operator: FilterOperator, value: &str) -> String {
    match operator {
        FilterOperator::Eq => format!("eq.{value}"),
        FilterOperator::Gte => format!("gte.{value}"),
        FilterOperator::ILike => format!("ilike.*{}*", value.replace('*', "")),
        FilterOperator::Lte => format!("lte.{value}"),
    }
}

fn resolve_order_by(table: AiTable, order_by: Option<&str>) -> Result<Option<String>, String> {
    let selected = match order_by {
        Some(value) if !value.trim().is_empty() => value.trim(),
        _ => default_order_field(table),
    };

    if selected.is_empty() {
        return Ok(None);
    }

    validate_field_name(table, selected)?;
    Ok(Some(format!("{selected}.desc")))
}

fn validate_filters(table: AiTable, filters: &[RecordFilterInput]) -> Result<(), String> {
    let mut seen = HashSet::new();

    for filter in filters {
        if filter.field.trim().is_empty() {
            return Err("Nama field filter wajib diisi.".to_string());
        }

        validate_field_name(table, filter.field.trim())?;

        if !seen.insert(filter.field.trim().to_string()) {
            return Err(format!("Filter {} duplikat.", filter.field.trim()));
        }
    }

    Ok(())
}

fn validate_field_name(table: AiTable, field: &str) -> Result<(), String> {
    if field == "id" {
        return Ok(());
    }

    if table_fields(table).iter().any(|spec| spec.name == field) {
        return Ok(());
    }

    Err(format!(
        "Field {} tidak tersedia pada tabel {}.",
        field,
        table_name(table)
    ))
}

fn sanitize_create_values(
    table: AiTable,
    store_id: &str,
    values: BTreeMap<String, Value>,
) -> Result<Map<String, Value>, String> {
    let mut record = Map::new();

    for (key, value) in values {
        if key == "id" {
            if !value.is_string() {
                return Err("Field id harus berupa string.".to_string());
            }
            record.insert(key, value);
            continue;
        }

        let spec = field_spec(table, &key)?;
        record.insert(key, coerce_field_value(spec, value)?);
    }

    if !record.contains_key("id") {
        record.insert("id".to_string(), Value::String(random_id(table_name(table))));
    }

    if has_store_id(table) {
        record.insert("store_id".to_string(), Value::String(store_id.to_string()));
    }

    if has_updated_at(table) {
        record.insert("updated_at".to_string(), Value::String(now_iso_string()));
    }

    if table == AiTable::Sales || table == AiTable::SaleItems {
        return Err("Tabel ini wajib memakai tool transaksi khusus.".to_string());
    }

    Ok(record)
}

fn sanitize_update_values(
    table: AiTable,
    store_id: &str,
    values: BTreeMap<String, Value>,
) -> Result<Map<String, Value>, String> {
    let mut record = Map::new();

    for (key, value) in values {
        if key == "id" {
            return Err("Field id tidak boleh diubah.".to_string());
        }

        if key == "store_id" && has_store_id(table) {
            record.insert(key, Value::String(store_id.to_string()));
            continue;
        }

        let spec = field_spec(table, &key)?;
        record.insert(key, coerce_field_value(spec, value)?);
    }

    if has_updated_at(table) {
        record.insert("updated_at".to_string(), Value::String(now_iso_string()));
    }

    Ok(record)
}

fn coerce_field_value(spec: FieldSpec, value: Value) -> Result<Value, String> {
    match spec.kind {
        FieldKind::Text => match value {
            Value::Null => Ok(Value::Null),
            Value::String(_) => Ok(value),
            other => Ok(Value::String(other.to_string())),
        },
        FieldKind::Integer => match value {
            Value::Null => Ok(Value::Null),
            Value::Bool(flag) => Ok(Value::Number((if flag { 1 } else { 0 }).into())),
            Value::Number(number) if number.is_i64() || number.is_u64() => Ok(Value::Number(number)),
            Value::String(text) => {
                let parsed = text
                    .trim()
                    .parse::<i64>()
                    .map_err(|_| format!("Field {} harus berupa integer.", spec.name))?;
                Ok(Value::Number(parsed.into()))
            }
            _ => Err(format!("Field {} harus berupa integer.", spec.name)),
        },
        FieldKind::Real => match value {
            Value::Null => Ok(Value::Null),
            Value::Number(number) => Ok(Value::Number(number)),
            Value::String(text) => {
                let parsed = text
                    .trim()
                    .parse::<f64>()
                    .map_err(|_| format!("Field {} harus berupa angka.", spec.name))?;
                Ok(json!(parsed))
            }
            _ => Err(format!("Field {} harus berupa angka.", spec.name)),
        },
    }
}

fn mirror_upsert_record(
    runtime: &AiDataRuntimeState,
    table: AiTable,
    record: &Map<String, Value>,
) -> Result<(), String> {
    let mut columns = vec!["id".to_string()];
    let mut values = vec![to_sql_value(
        record
            .get("id")
            .ok_or_else(|| "Record lokal tidak memiliki id.".to_string())?,
    )?];

    for spec in table_fields(table) {
        if let Some(value) = record.get(spec.name) {
            columns.push(spec.name.to_string());
            values.push(to_sql_value(value)?);
        }
    }

    let assignments = columns
        .iter()
        .filter(|column| column.as_str() != "id")
        .map(|column| format!("{column}=excluded.{column}"))
        .collect::<Vec<_>>()
        .join(", ");
    let placeholders = std::iter::repeat_n("?", columns.len())
        .collect::<Vec<_>>()
        .join(", ");
    let sql = format!(
        "INSERT INTO {} ({}) VALUES ({}) ON CONFLICT(id) DO UPDATE SET {}",
        table_name(table),
        columns.join(", "),
        placeholders,
        assignments
    );

    let connection = open_local_cache_connection(&runtime.powersync_db_path)?;
    connection
        .execute(&sql, params_from_iter(values))
        .map_err(|error| error.to_string())?;

    Ok(())
}

fn mirror_delete_record(
    runtime: &AiDataRuntimeState,
    table: AiTable,
    id: &str,
) -> Result<(), String> {
    let connection = open_local_cache_connection(&runtime.powersync_db_path)?;
    connection
        .execute(
            &format!("DELETE FROM {} WHERE id = ?", table_name(table)),
            [id],
        )
        .map_err(|error| error.to_string())?;

    Ok(())
}

fn open_local_cache_connection(path: &PathBuf) -> Result<Connection, String> {
    let connection = Connection::open(path).map_err(|error| error.to_string())?;
    connection
        .pragma_update(None, "busy_timeout", 30_000)
        .map_err(|error| error.to_string())?;
    Ok(connection)
}

fn to_sql_value(value: &Value) -> Result<SqlValue, String> {
    match value {
        Value::Null => Ok(SqlValue::Null),
        Value::Bool(flag) => Ok(SqlValue::Integer(i64::from(*flag))),
        Value::Number(number) => {
            if let Some(integer) = number.as_i64() {
                return Ok(SqlValue::Integer(integer));
            }

            if let Some(float) = number.as_f64() {
                return Ok(SqlValue::Real(float));
            }

            Err("Angka tidak valid untuk cache lokal.".to_string())
        }
        Value::String(text) => Ok(SqlValue::Text(text.clone())),
        _ => Err("Nilai kompleks tidak didukung untuk cache lokal.".to_string()),
    }
}

fn field_spec(table: AiTable, name: &str) -> Result<FieldSpec, String> {
    table_fields(table)
        .iter()
        .copied()
        .find(|spec| spec.name == name)
        .ok_or_else(|| format!("Field {} tidak tersedia pada tabel {}.", name, table_name(table)))
}

fn default_order_field(table: AiTable) -> &'static str {
    match table {
        AiTable::Sales => "created_at",
        AiTable::SaleItems => "updated_at",
        _ => {
            if has_updated_at(table) {
                "updated_at"
            } else {
                "id"
            }
        }
    }
}

fn has_store_id(table: AiTable) -> bool {
    table != AiTable::SaleItems
}

fn has_updated_at(table: AiTable) -> bool {
    table_fields(table).iter().any(|field| field.name == "updated_at")
}

fn is_generic_write_table(table: AiTable) -> bool {
    table != AiTable::Sales && table != AiTable::SaleItems
}

fn table_name(table: AiTable) -> &'static str {
    match table {
        AiTable::CashEntries => "cash_entries",
        AiTable::Customers => "customers",
        AiTable::Expenses => "expenses",
        AiTable::InventoryItems => "inventory_items",
        AiTable::Products => "products",
        AiTable::Promotions => "promotions",
        AiTable::Purchases => "purchases",
        AiTable::SaleItems => "sale_items",
        AiTable::Sales => "sales",
        AiTable::Suppliers => "suppliers",
    }
}

fn table_fields(table: AiTable) -> &'static [FieldSpec] {
    match table {
        AiTable::CashEntries => &[
            FieldSpec { kind: FieldKind::Text, name: "store_id" },
            FieldSpec { kind: FieldKind::Text, name: "title" },
            FieldSpec { kind: FieldKind::Text, name: "entry_type" },
            FieldSpec { kind: FieldKind::Real, name: "amount" },
            FieldSpec { kind: FieldKind::Text, name: "happened_at" },
            FieldSpec { kind: FieldKind::Text, name: "note" },
            FieldSpec { kind: FieldKind::Text, name: "updated_at" },
        ],
        AiTable::Customers => &[
            FieldSpec { kind: FieldKind::Text, name: "store_id" },
            FieldSpec { kind: FieldKind::Text, name: "name" },
            FieldSpec { kind: FieldKind::Text, name: "phone" },
            FieldSpec { kind: FieldKind::Text, name: "address" },
            FieldSpec { kind: FieldKind::Real, name: "total_spent" },
            FieldSpec { kind: FieldKind::Text, name: "updated_at" },
        ],
        AiTable::Expenses => &[
            FieldSpec { kind: FieldKind::Text, name: "store_id" },
            FieldSpec { kind: FieldKind::Text, name: "title" },
            FieldSpec { kind: FieldKind::Text, name: "category" },
            FieldSpec { kind: FieldKind::Real, name: "amount" },
            FieldSpec { kind: FieldKind::Text, name: "paid_at" },
            FieldSpec { kind: FieldKind::Text, name: "updated_at" },
        ],
        AiTable::InventoryItems => &[
            FieldSpec { kind: FieldKind::Text, name: "store_id" },
            FieldSpec { kind: FieldKind::Text, name: "product_id" },
            FieldSpec { kind: FieldKind::Real, name: "on_hand" },
            FieldSpec { kind: FieldKind::Real, name: "reorder_point" },
            FieldSpec { kind: FieldKind::Text, name: "updated_at" },
        ],
        AiTable::Products => &[
            FieldSpec { kind: FieldKind::Text, name: "store_id" },
            FieldSpec { kind: FieldKind::Text, name: "sku" },
            FieldSpec { kind: FieldKind::Text, name: "barcode" },
            FieldSpec { kind: FieldKind::Text, name: "name" },
            FieldSpec { kind: FieldKind::Text, name: "category" },
            FieldSpec { kind: FieldKind::Text, name: "unit" },
            FieldSpec { kind: FieldKind::Real, name: "cost_price" },
            FieldSpec { kind: FieldKind::Real, name: "selling_price" },
            FieldSpec { kind: FieldKind::Integer, name: "is_active" },
            FieldSpec { kind: FieldKind::Text, name: "updated_at" },
        ],
        AiTable::Promotions => &[
            FieldSpec { kind: FieldKind::Text, name: "store_id" },
            FieldSpec { kind: FieldKind::Text, name: "title" },
            FieldSpec { kind: FieldKind::Text, name: "status" },
            FieldSpec { kind: FieldKind::Text, name: "discount_type" },
            FieldSpec { kind: FieldKind::Real, name: "discount_value" },
            FieldSpec { kind: FieldKind::Text, name: "start_at" },
            FieldSpec { kind: FieldKind::Text, name: "end_at" },
            FieldSpec { kind: FieldKind::Text, name: "description" },
            FieldSpec { kind: FieldKind::Text, name: "updated_at" },
        ],
        AiTable::Purchases => &[
            FieldSpec { kind: FieldKind::Text, name: "store_id" },
            FieldSpec { kind: FieldKind::Text, name: "supplier_id" },
            FieldSpec { kind: FieldKind::Text, name: "invoice_number" },
            FieldSpec { kind: FieldKind::Text, name: "status" },
            FieldSpec { kind: FieldKind::Real, name: "total_amount" },
            FieldSpec { kind: FieldKind::Text, name: "purchased_at" },
            FieldSpec { kind: FieldKind::Text, name: "updated_at" },
        ],
        AiTable::SaleItems => &[
            FieldSpec { kind: FieldKind::Text, name: "sale_id" },
            FieldSpec { kind: FieldKind::Text, name: "product_id" },
            FieldSpec { kind: FieldKind::Real, name: "quantity" },
            FieldSpec { kind: FieldKind::Real, name: "unit_price" },
            FieldSpec { kind: FieldKind::Real, name: "line_total" },
            FieldSpec { kind: FieldKind::Text, name: "updated_at" },
        ],
        AiTable::Sales => &[
            FieldSpec { kind: FieldKind::Text, name: "store_id" },
            FieldSpec { kind: FieldKind::Text, name: "receipt_number" },
            FieldSpec { kind: FieldKind::Text, name: "customer_id" },
            FieldSpec { kind: FieldKind::Text, name: "payment_method" },
            FieldSpec { kind: FieldKind::Text, name: "status" },
            FieldSpec { kind: FieldKind::Real, name: "total_amount" },
            FieldSpec { kind: FieldKind::Text, name: "created_at" },
            FieldSpec { kind: FieldKind::Text, name: "updated_at" },
        ],
        AiTable::Suppliers => &[
            FieldSpec { kind: FieldKind::Text, name: "store_id" },
            FieldSpec { kind: FieldKind::Text, name: "name" },
            FieldSpec { kind: FieldKind::Text, name: "phone" },
            FieldSpec { kind: FieldKind::Text, name: "city" },
            FieldSpec { kind: FieldKind::Text, name: "payment_term" },
            FieldSpec { kind: FieldKind::Text, name: "updated_at" },
        ],
    }
}

fn build_powersync_schema() -> Schema {
    Schema {
        raw_tables: vec![],
        tables: vec![
            build_table(AiTable::CashEntries),
            build_table(AiTable::Customers),
            build_table(AiTable::Expenses),
            build_table(AiTable::InventoryItems),
            build_table(AiTable::Promotions),
            build_table(AiTable::Products),
            build_table(AiTable::Purchases),
            build_table(AiTable::SaleItems),
            build_table(AiTable::Sales),
            build_table(AiTable::Suppliers),
        ],
    }
}

fn build_table(table: AiTable) -> Table {
    let columns = table_fields(table)
        .iter()
        .map(|field| match field.kind {
            FieldKind::Integer => Column::integer(field.name),
            FieldKind::Real => Column::real(field.name),
            FieldKind::Text => Column::text(field.name),
        })
        .collect::<Vec<_>>();

    Table::create(table_name(table), columns, |_| {})
}

fn get_string_field(record: &Map<String, Value>, key: &str) -> Result<String, String> {
    record
        .get(key)
        .and_then(Value::as_str)
        .map(str::to_string)
        .ok_or_else(|| format!("Field {} tidak tersedia.", key))
}

fn get_f64_field(record: &Map<String, Value>, key: &str) -> Result<f64, String> {
    get_optional_f64_field(record, key).ok_or_else(|| format!("Field {} tidak tersedia.", key))
}

fn get_optional_f64_field(record: &Map<String, Value>, key: &str) -> Option<f64> {
    record.get(key).and_then(|value| match value {
        Value::Number(number) => number.as_f64(),
        Value::String(text) => text.parse::<f64>().ok(),
        _ => None,
    })
}

fn random_id(prefix: &str) -> String {
    format!("{}_{:016x}", prefix.replace('-', "_"), rand::random::<u64>())
}

fn create_receipt_number() -> String {
    let sanitized = now_iso_string().replace(['-', ':', 'T', 'Z', '.'], "");
    format!("TRX-{}", &sanitized[2..12])
}

fn now_iso_string() -> String {
    let now = std::time::SystemTime::now();
    let datetime: chrono::DateTime<chrono::Utc> = now.into();
    datetime.to_rfc3339_opts(chrono::SecondsFormat::Millis, true)
}
