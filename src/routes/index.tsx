import type { ComponentType } from "react";
import { Navigate, createFileRoute } from "@tanstack/react-router";
import { Avatar, Button, Tabs } from "@heroui/react";
import {
  AlertsModule,
  AssistantModule,
  CashierModule,
  CashModule,
  CustomersModule,
  DashboardModule,
  DevicesSyncModule,
  ExpensesModule,
  OrdersModule,
  ProductListModule,
  PromoModule,
  PurchasesModule,
  ReportsModule,
  StockModule,
  StoreSettingsModule,
  SuppliersModule,
  TodayActivityModule,
  UsersModule,
} from "../components/submodules";
import { neon } from "../lib/powersync";

const moduleGroups = [
  {
    id: "overview",
    label: "Ringkasan",
    title: "Hal utama untuk memantau kondisi toko",
    modules: [
      {
        id: "dashboard",
        label: "Dasbor",
        title: "Dasbor",
      },
      {
        id: "alerts",
        label: "Peringatan",
        title: "Peringatan",
      },
      {
        id: "today-activity",
        label: "Aktivitas Hari Ini",
        title: "Aktivitas Hari Ini",
      },
    ],
  },
  {
    id: "sales",
    label: "Penjualan",
    title: "Menu yang dipakai saat jualan",
    modules: [
      {
        id: "cashier",
        label: "Kasir",
        title: "Kasir",
      },
      {
        id: "orders",
        label: "Pesanan",
        title: "Pesanan",
      },
      {
        id: "customers",
        label: "Pelanggan",
        title: "Pelanggan",
      },
      {
        id: "promo",
        label: "Promo",
        title: "Promo",
      },
    ],
  },
  {
    id: "products",
    label: "Barang",
    title: "Pengelolaan barang dan stok sehari-hari",
    modules: [
      {
        id: "product-list",
        label: "Daftar Barang",
        title: "Daftar Barang",
      },
      {
        id: "stock",
        label: "Stok",
        title: "Stok",
      },
      {
        id: "purchases",
        label: "Belanja Stok",
        title: "Belanja Stok",
      },
      {
        id: "suppliers",
        label: "Pemasok",
        title: "Pemasok",
      },
    ],
  },
  {
    id: "finance",
    label: "Keuangan",
    title: "Pencatatan uang masuk dan keluar",
    modules: [
      {
        id: "cash",
        label: "Kas",
        title: "Kas",
      },
      {
        id: "expenses",
        label: "Pengeluaran",
        title: "Pengeluaran",
      },
      {
        id: "reports",
        label: "Laporan",
        title: "Laporan",
      },
    ],
  },
  {
    id: "store",
    label: "Toko",
    title: "Pengaturan dasar dan alat bantu toko",
    modules: [
      {
        id: "users",
        label: "Pengguna",
        title: "Pengguna",
      },
      {
        id: "devices-sync",
        label: "Perangkat & Sinkronisasi",
        title: "Perangkat & Sinkronisasi",
      },
      {
        id: "store-settings",
        label: "Pengaturan Toko",
        title: "Pengaturan Toko",
      },
      {
        id: "assistant",
        label: "Asisten",
        title: "Asisten",
      },
    ],
  },
] as const;

const moduleComponents = {
  dashboard: DashboardModule,
  alerts: AlertsModule,
  "today-activity": TodayActivityModule,
  cashier: CashierModule,
  orders: OrdersModule,
  customers: CustomersModule,
  promo: PromoModule,
  "product-list": ProductListModule,
  stock: StockModule,
  purchases: PurchasesModule,
  suppliers: SuppliersModule,
  cash: CashModule,
  expenses: ExpensesModule,
  reports: ReportsModule,
  users: UsersModule,
  "devices-sync": DevicesSyncModule,
  "store-settings": StoreSettingsModule,
  assistant: AssistantModule,
} satisfies Record<string, ComponentType>;

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = Route.useNavigate();
  const session = neon.auth.useSession();
  const user = session.data?.user;
  const displayName = user?.name ?? user?.email ?? "Pengguna";

  if (session.isPending) {
    return (
      <main className="flex min-h-screen items-center justify-center p-6">
        <p className="text-sm text-stone-500">Memuat sesi pengguna...</p>
      </main>
    );
  }

  if (!session.data?.session) {
    return <Navigate replace to="/auth/sign-in" />;
  }

  async function handleSignOut() {
    const { error } = await neon.auth.signOut();

    if (error) {
      console.error("Gagal keluar dari aplikasi.", error);
      return;
    }

    void navigate({
      replace: true,
      to: "/auth/sign-in",
    });
  }

  return (
    <div className="p-8">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm text-stone-500">Masuk sebagai</p>
          <h1 className="text-2xl font-semibold">
            {displayName}
          </h1>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-3 rounded-full border border-stone-200 bg-white px-3 py-2">
            <Avatar className="size-9">
              <Avatar.Fallback>
                {displayName.slice(0, 1).toUpperCase()}
              </Avatar.Fallback>
            </Avatar>
            <div className="text-left">
              <p className="text-sm font-medium text-stone-900">
                {displayName}
              </p>
              <p className="text-xs text-stone-500">{user?.email}</p>
            </div>
          </div>
          <Button onPress={handleSignOut} variant="tertiary">
            Keluar
          </Button>
        </div>
      </div>

      <Tabs className="w-full" defaultSelectedKey="overview">
        <Tabs.ListContainer>
          <Tabs.List aria-label="Modul utama" className="w-fit">
            {moduleGroups.map((group) => (
              <Tabs.Tab key={group.id} id={group.id}>
                {group.label}
                <Tabs.Indicator />
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </Tabs.ListContainer>

        {moduleGroups.map((group) => (
          <Tabs.Panel key={group.id} className="w-full pt-4" id={group.id}>
            <div className="mb-4">
              <h2 className="text-xl font-semibold">{group.title}</h2>
            </div>

            <Tabs
              className="w-full"
              defaultSelectedKey={group.modules[0]?.id}
              orientation="vertical"
              variant="secondary"
            >
              <Tabs.ListContainer>
                <Tabs.List
                  aria-label={`Sub-modul ${group.label}`}
                  className="min-w-[250px]"
                >
                  {group.modules.map((module) => (
                    <Tabs.Tab
                      className="justify-start"
                      key={module.id}
                      id={module.id}
                    >
                      {module.label}
                      <Tabs.Indicator />
                    </Tabs.Tab>
                  ))}
                </Tabs.List>
              </Tabs.ListContainer>

              {group.modules.map((module) => (
                <Tabs.Panel key={module.id} className="px-4" id={module.id}>
                  {(() => {
                    const ModuleComponent = moduleComponents[module.id];
                    return <ModuleComponent />;
                  })()}
                </Tabs.Panel>
              ))}
            </Tabs>
          </Tabs.Panel>
        ))}
      </Tabs>
    </div>
  );
}
