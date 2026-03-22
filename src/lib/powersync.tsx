import { createClient } from "@neondatabase/neon-js";
import { BetterAuthReactAdapter } from "@neondatabase/neon-js/auth/react/adapters";
import { PowerSyncContext } from "@powersync/react";
import { PowerSyncDatabase, Schema, Table, WASQLiteOpenFactory, column } from "@powersync/web";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type PropsWithChildren, useEffect, useRef } from "react";
import { env } from "../env";

const POWERSYNC_DB_FILENAME = "warungku.sqlite";
const POWERSYNC_ASSET_BASE = "/@powersync/@powersync";

const appSchema = new Schema({
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
  stores: new Table({
    name: column.text,
    owner_name: column.text,
    phone: column.text,
    address: column.text,
    currency: column.text,
    timezone: column.text,
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
  users: new Table({
    store_id: column.text,
    name: column.text,
    role: column.text,
    phone: column.text,
    email: column.text,
    is_active: column.integer,
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

export const neon = createClient({
  auth: {
    adapter: BetterAuthReactAdapter(),
    url: env.VITE_NEON_AUTH_URL,
  },
  dataApi: {
    url: env.VITE_NEON_DATA_API_URL,
  },
});

const connector = {
  async fetchCredentials() {
    const response = await neon.auth.getSession();
    const token = response.data?.session?.token?.trim();

    if (!token) {
      return null;
    }

    return {
      endpoint: env.VITE_POWERSYNC_URL,
      token,
    };
  },
  async uploadData() {
    // Write-back ke app backend / Neon Data API belum dipasang di app ini.
    // Untuk tahap UI dan read-sync, PowerSync tetap bisa dipakai dengan uploadData no-op.
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
  const session = neon.auth.useSession();
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
