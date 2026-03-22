import { PowerSyncContext } from "@powersync/react";
import {
  type AbstractPowerSyncDatabase,
  type CrudEntry,
  PowerSyncDatabase,
  Schema,
  Table,
  UpdateType,
  WASQLiteOpenFactory,
  column,
} from "@powersync/web";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type PropsWithChildren, useEffect, useRef } from "react";
import { authClient, neonClient } from "../auth";
import { env } from "../env";

const POWERSYNC_DB_FILENAME = "warungku.sqlite";
const POWERSYNC_ASSET_BASE = "/@powersync/@powersync";

const appSchema = new Schema({
  cash_entries: new Table({
    store_id: column.text,
    title: column.text,
    entry_type: column.text,
    amount: column.real,
    happened_at: column.text,
    note: column.text,
    updated_at: column.text,
  }),
  customers: new Table({
    store_id: column.text,
    name: column.text,
    phone: column.text,
    address: column.text,
    total_spent: column.real,
    updated_at: column.text,
  }),
  expenses: new Table({
    store_id: column.text,
    title: column.text,
    category: column.text,
    amount: column.real,
    paid_at: column.text,
    updated_at: column.text,
  }),
  inventory_items: new Table({
    store_id: column.text,
    product_id: column.text,
    on_hand: column.real,
    reorder_point: column.real,
    updated_at: column.text,
  }),
  promotions: new Table({
    store_id: column.text,
    title: column.text,
    status: column.text,
    discount_type: column.text,
    discount_value: column.real,
    start_at: column.text,
    end_at: column.text,
    description: column.text,
    updated_at: column.text,
  }),
  products: new Table({
    store_id: column.text,
    sku: column.text,
    barcode: column.text,
    name: column.text,
    category: column.text,
    unit: column.text,
    cost_price: column.real,
    selling_price: column.real,
    is_active: column.integer,
    updated_at: column.text,
  }),
  purchases: new Table({
    store_id: column.text,
    supplier_id: column.text,
    invoice_number: column.text,
    status: column.text,
    total_amount: column.real,
    purchased_at: column.text,
    updated_at: column.text,
  }),
  sale_items: new Table({
    sale_id: column.text,
    product_id: column.text,
    quantity: column.real,
    unit_price: column.real,
    line_total: column.real,
    updated_at: column.text,
  }),
  sales: new Table({
    store_id: column.text,
    receipt_number: column.text,
    customer_id: column.text,
    payment_method: column.text,
    status: column.text,
    total_amount: column.real,
    created_at: column.text,
    updated_at: column.text,
  }),
  suppliers: new Table({
    store_id: column.text,
    name: column.text,
    phone: column.text,
    city: column.text,
    payment_term: column.text,
    updated_at: column.text,
  }),
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 30_000,
    },
  },
});

const FATAL_RESPONSE_CODES = [/^22...$/, /^23...$/, /^42501$/];

const MUTABLE_TABLES = new Set([
  "cash_entries",
  "customers",
  "expenses",
  "inventory_items",
  "promotions",
  "products",
  "purchases",
  "sale_items",
  "sales",
  "suppliers",
]);

type UploadError = {
  code?: string;
  message?: string;
};

function isFatalUploadError(error: unknown): error is UploadError {
  if (!(typeof error === "object" && error !== null && "code" in error)) {
    return false;
  }

  const { code } = error as UploadError;
  return typeof code === "string" && FATAL_RESPONSE_CODES.some((pattern) => pattern.test(code));
}

async function applyCrudEntry(entry: CrudEntry) {
  if (!MUTABLE_TABLES.has(entry.table)) {
    throw new Error(`Tabel ${entry.table} tidak didukung untuk uploadData.`);
  }

  const table = neonClient.from(entry.table);

  if (entry.op === UpdateType.PUT) {
    return table.upsert({ ...entry.opData, id: entry.id });
  }

  if (entry.op === UpdateType.PATCH) {
    return table.update(entry.opData ?? {}).eq("id", entry.id);
  }

  return table.delete().eq("id", entry.id);
}

const connector = {
  async fetchCredentials() {
    const response = await authClient.getSession();
    const token = response.data?.session?.token?.trim();

    if (!token) {
      return null;
    }

    return {
      endpoint: env.VITE_POWERSYNC_URL,
      token,
    };
  },
  async uploadData(database: AbstractPowerSyncDatabase) {
    const transaction = await database.getNextCrudTransaction();

    if (!transaction) {
      return;
    }

    let lastEntry: CrudEntry | null = null;

    try {
      for (const entry of transaction.crud) {
        lastEntry = entry;
        const result = await applyCrudEntry(entry);

        if (result.error) {
          throw result.error;
        }
      }

      await transaction.complete();
    } catch (error) {
      if (isFatalUploadError(error)) {
        console.error("Gagal upload data dan transaksi dibuang.", lastEntry, error);
        await transaction.complete();
        return;
      }

      throw error;
    }
  },
};

export const powerSync = new PowerSyncDatabase({
  schema: appSchema,
  database: new WASQLiteOpenFactory({
    dbFilename: POWERSYNC_DB_FILENAME,
    flags: {
      useWebWorker: true,
    },
    worker: `${POWERSYNC_ASSET_BASE}/worker/WASQLiteDB.umd.js`,
  }),
  sync: {
    worker: `${POWERSYNC_ASSET_BASE}/worker/SharedSyncImplementation.umd.js`,
  },
});

let connectPromise: Promise<void> | null = null;

async function connectPowerSync() {
  await powerSync.init();

  if (powerSync.connected || powerSync.connecting) {
    return;
  }

  connectPromise ??= powerSync.connect(connector).finally(() => {
    connectPromise = null;
  });

  await connectPromise;
}

function PowerSyncSessionBridge() {
  const session = authClient.useSession();
  const hadSessionRef = useRef(false);

  useEffect(() => {
    if (session.isPending) {
      return;
    }

    const hasSession = Boolean(session.data?.session?.token);

    if (hasSession) {
      hadSessionRef.current = true;
      void connectPowerSync().catch((error: unknown) => {
        console.error("Gagal menghubungkan PowerSync.", error);
      });
      return;
    }

    if (!hadSessionRef.current) {
      return;
    }

    hadSessionRef.current = false;
    void powerSync.disconnectAndClear().catch((error: unknown) => {
      console.error("Gagal membersihkan data PowerSync saat logout.", error);
    });
  }, [session.data?.session?.token, session.isPending]);

  return null;
}

export { PowerSyncSessionBridge };

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <PowerSyncContext.Provider value={powerSync}>{children}</PowerSyncContext.Provider>
    </QueryClientProvider>
  );
}
