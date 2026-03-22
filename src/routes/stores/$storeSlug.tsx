import { authClient } from "../../auth";
import { useState } from "react";
import { Navigate, createFileRoute } from "@tanstack/react-router";
import { Alert, AlertDialog, Button, Dropdown, InputGroup, Modal, Tabs } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { CaretDownIcon } from "@phosphor-icons/react/dist/csr/CaretDown";
import { CheckIcon } from "@phosphor-icons/react/dist/csr/Check";
import { PlusIcon } from "@phosphor-icons/react/dist/csr/Plus";
import { SignOutIcon } from "@phosphor-icons/react/dist/csr/SignOut";
import { StorefrontIcon } from "@phosphor-icons/react/dist/csr/Storefront";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
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
} from "../../components/submodules";
import {
  createRandomOrganizationSlug,
  getOrganizationMember,
  isOrganizationAdmin,
  useOrganizationGate,
} from "../../lib/organization";

type ModuleDefinition = {
  id: keyof typeof moduleComponents;
  label: string;
  title: string;
  adminOnly?: boolean;
};

type ModuleGroupDefinition = {
  id: string;
  label: string;
  title: string;
  modules: readonly ModuleDefinition[];
};

const moduleGroups: readonly ModuleGroupDefinition[] = [
  {
    id: "overview",
    label: "Ringkasan",
    title: "Hal utama untuk memantau kondisi toko",
    modules: [
      { id: "dashboard", label: "Dasbor", title: "Dasbor" },
      { id: "alerts", label: "Peringatan", title: "Peringatan" },
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
      { id: "cashier", label: "Kasir", title: "Kasir" },
      { id: "orders", label: "Pesanan", title: "Pesanan" },
      { id: "customers", label: "Pelanggan", title: "Pelanggan" },
      { id: "promo", label: "Promo", title: "Promo" },
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
      { id: "stock", label: "Stok", title: "Stok" },
      {
        id: "purchases",
        label: "Belanja Stok",
        title: "Belanja Stok",
      },
      { id: "suppliers", label: "Pemasok", title: "Pemasok" },
    ],
  },
  {
    id: "finance",
    label: "Keuangan",
    title: "Pencatatan uang masuk dan keluar",
    modules: [
      { id: "cash", label: "Kas", title: "Kas" },
      { id: "expenses", label: "Pengeluaran", title: "Pengeluaran" },
      { id: "reports", label: "Laporan", title: "Laporan" },
    ],
  },
  {
    id: "store",
    label: "Toko",
    title: "Pengaturan dasar dan alat bantu toko",
    modules: [
      { id: "users", label: "Pengguna", title: "Pengguna" },
      {
        id: "devices-sync",
        label: "Perangkat & Sinkronisasi",
        title: "Perangkat & Sinkronisasi",
        adminOnly: true,
      },
      {
        id: "store-settings",
        label: "Pengaturan Toko",
        title: "Pengaturan Toko",
        adminOnly: true,
      },
      { id: "assistant", label: "Asisten", title: "Asisten" },
    ],
  },
];

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
};

const createStoreSchema = z.object({
  name: z
    .string()
    .min(2, "Nama toko minimal 2 karakter.")
    .max(80, "Nama toko maksimal 80 karakter."),
});

type CreateStoreFormValues = z.infer<typeof createStoreSchema>;

export const Route = createFileRoute("/stores/$storeSlug")({
  component: RouteComponent,
});

function RouteComponent() {
  const { storeSlug } = Route.useParams();
  const navigate = Route.useNavigate();
  const gate = useOrganizationGate(storeSlug);
  const [isCreatingStore, setIsCreatingStore] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [createStoreError, setCreateStoreError] = useState<string | null>(null);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateStoreFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(createStoreSchema),
  });

  if (gate.status === "loading" || gate.status === "activating") {
    return (
      <main className="flex min-h-screen items-center justify-center p-6">
        <p className="text-sm text-stone-500">{gate.message ?? "Memuat sesi pengguna..."}</p>
      </main>
    );
  }

  if (gate.status === "signed-out") {
    return <Navigate replace to="/auth/sign-in" />;
  }

  if (gate.status === "needs-organization") {
    return <Navigate replace to="/setup/store" />;
  }

  if (gate.status === "error") {
    return (
      <main className="flex min-h-screen items-center justify-center p-6">
        <div className="w-full max-w-md space-y-4">
          <Alert status="danger">
            <Alert.Indicator />
            <Alert.Content>
              <Alert.Title>Toko tidak siap</Alert.Title>
              <Alert.Description>{gate.message}</Alert.Description>
            </Alert.Content>
          </Alert>
          <Button fullWidth onPress={() => void gate.retry()}>
            Coba lagi
          </Button>
        </div>
      </main>
    );
  }

  if (gate.status !== "ready") {
    return null;
  }

  const { organization, organizations, user } = gate;
  const currentMember = getOrganizationMember(organization, user.id);
  const currentRole = currentMember?.role ?? "member";
  const canManageOrganization = isOrganizationAdmin(currentRole);
  const visibleModuleGroups = moduleGroups
    .map((group) => ({
      ...group,
      modules: group.modules.filter((module) => !module.adminOnly || canManageOrganization),
    }))
    .filter((group) => group.modules.length > 0);

  async function handleSignOut() {
    setIsSigningOut(true);
    const { error } = await authClient.signOut();
    setIsSigningOut(false);

    if (error) {
      console.error("Gagal keluar dari aplikasi.", error);
      return;
    }

    void navigate({
      replace: true,
      to: "/auth/sign-in",
    });
  }

  async function handleStoreAction(key: React.Key) {
    const action = String(key);

    if (action === organization.slug) {
      return;
    }

    void navigate({
      to: "/stores/$storeSlug",
      params: {
        storeSlug: action,
      },
    });
  }

  const createStore = async (name: string) => {
    setCreateStoreError(null);
    setIsCreatingStore(true);

    const { data, error } = await authClient.organization.create({
      name,
      slug: createRandomOrganizationSlug(name),
    });

    setIsCreatingStore(false);

    if (error || !data?.slug) {
      setCreateStoreError(error?.message ?? "Gagal membuat toko baru.");
      return null;
    }

    reset({ name: "" });
    await navigate({
      to: "/stores/$storeSlug",
      params: {
        storeSlug: data.slug,
      },
    });
    return data.slug;
  };

  return (
    <>
      <div className="p-8">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <Dropdown>
              <Dropdown.Trigger>
                <div className="flex min-w-[240px] items-center justify-between rounded-xl border border-stone-200 bg-white px-3 py-2 text-left text-sm font-medium text-stone-900 shadow-sm">
                  <span className="truncate">{organization.name}</span>
                  <CaretDownIcon aria-hidden className="text-stone-500" size={16} />
                </div>
              </Dropdown.Trigger>
              <Dropdown.Popover>
                <Dropdown.Menu
                  aria-label="Pilih toko"
                  onAction={(key) => void handleStoreAction(key)}
                >
                  <Dropdown.Section>
                    {organizations.map((store: (typeof organizations)[number]) => (
                      <Dropdown.Item id={store.slug} key={store.slug}>
                        <div className="flex min-w-[220px] items-center justify-between gap-3">
                          <div className="text-left">
                            <p className="text-sm font-medium text-stone-900">{store.name}</p>
                            <p className="text-xs text-stone-500">{store.slug}</p>
                          </div>
                          {store.slug === organization.slug ? (
                            <CheckIcon aria-hidden className="text-stone-500" size={16} />
                          ) : null}
                        </div>
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Section>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
            <Modal>
              <Button
                onPress={() => {
                  setCreateStoreError(null);
                  reset({ name: "" });
                }}
                variant="outline"
              >
                <PlusIcon aria-hidden size={16} />
                Buat toko baru
              </Button>
              <Modal.Backdrop>
                <Modal.Container placement="center" size="sm">
                  <Modal.Dialog aria-label="Buat toko baru">
                    {({ close }) => (
                      <>
                        <Modal.Header>
                          <Modal.Heading>Buat toko baru</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                          <form
                            className="space-y-4"
                            onSubmit={handleSubmit(async ({ name }) => {
                              const createdSlug = await createStore(name);
                              if (createdSlug) {
                                close();
                              }
                            })}
                          >
                            <div className="space-y-2">
                              <label
                                className="block text-sm font-medium text-stone-700"
                                htmlFor="modal-store-name"
                              >
                                Nama toko
                              </label>
                              <Controller
                                control={control}
                                name="name"
                                render={({ field, fieldState }) => (
                                  <InputGroup className="w-full" isInvalid={fieldState.invalid}>
                                    <InputGroup.Prefix className="text-stone-400">
                                      <StorefrontIcon aria-hidden size={18} />
                                    </InputGroup.Prefix>
                                    <InputGroup.Input
                                      aria-invalid={fieldState.invalid}
                                      aria-label="Nama toko"
                                      className="w-full"
                                      id="modal-store-name"
                                      onBlur={field.onBlur}
                                      onChange={field.onChange}
                                      placeholder="Warung Cabang Baru"
                                      value={field.value}
                                    />
                                  </InputGroup>
                                )}
                              />
                              {errors.name?.message ? (
                                <p className="text-sm text-red-600">{errors.name.message}</p>
                              ) : null}
                            </div>

                            {createStoreError ? (
                              <Alert status="danger">
                                <Alert.Indicator />
                                <Alert.Content>
                                  <Alert.Title>Pembuatan toko gagal</Alert.Title>
                                  <Alert.Description>{createStoreError}</Alert.Description>
                                </Alert.Content>
                              </Alert>
                            ) : null}

                            <div className="flex justify-end gap-2">
                              <Button slot="close" type="button" variant="tertiary">
                                Batal
                              </Button>
                              <Button isPending={isCreatingStore} type="submit">
                                Buat toko
                              </Button>
                            </div>
                          </form>
                        </Modal.Body>
                      </>
                    )}
                  </Modal.Dialog>
                </Modal.Container>
              </Modal.Backdrop>
            </Modal>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <AlertDialog>
              <Button variant="outline">
                <SignOutIcon aria-hidden size={16} />
                Keluar
              </Button>
              <AlertDialog.Backdrop>
                <AlertDialog.Container placement="center" size="sm">
                  <AlertDialog.Dialog>
                    <AlertDialog.Header>
                      <AlertDialog.Heading>Keluar dari aplikasi?</AlertDialog.Heading>
                    </AlertDialog.Header>
                    <AlertDialog.Body>
                      Sesi akun {user.email} akan diakhiri di perangkat ini.
                    </AlertDialog.Body>
                    <AlertDialog.Footer>
                      <Button slot="close" variant="tertiary">
                        Batal
                      </Button>
                      <Button isPending={isSigningOut} onPress={() => void handleSignOut()}>
                        Keluar
                      </Button>
                    </AlertDialog.Footer>
                  </AlertDialog.Dialog>
                </AlertDialog.Container>
              </AlertDialog.Backdrop>
            </AlertDialog>
          </div>
        </div>

        <Tabs className="w-full" defaultSelectedKey={visibleModuleGroups[0]?.id}>
          <Tabs.ListContainer>
            <Tabs.List aria-label="Modul utama" className="w-fit">
              {visibleModuleGroups.map((group) => (
                <Tabs.Tab key={group.id} id={group.id}>
                  {group.label}
                  <Tabs.Indicator />
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </Tabs.ListContainer>

          {visibleModuleGroups.map((group) => (
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
                  <Tabs.List aria-label={`Sub-modul ${group.label}`} className="min-w-[250px]">
                    {group.modules.map((module) => (
                      <Tabs.Tab className="justify-start" key={module.id} id={module.id}>
                        {module.label}
                        <Tabs.Indicator />
                      </Tabs.Tab>
                    ))}
                  </Tabs.List>
                </Tabs.ListContainer>

                {group.modules.map((module) => (
                  <Tabs.Panel key={module.id} className="px-4" id={module.id}>
                    {(() => {
                      if (module.id === "users") {
                        return (
                          <UsersModule
                            currentUserId={user.id}
                            onOrganizationChange={gate.refresh}
                            organization={organization}
                            userRole={currentRole}
                          />
                        );
                      }

                      if (module.id === "product-list") {
                        return <ProductListModule storeId={organization.id} />;
                      }

                      if (module.id === "stock") {
                        return <StockModule storeId={organization.id} />;
                      }

                      if (module.id === "purchases") {
                        return <PurchasesModule storeId={organization.id} />;
                      }

                      if (module.id === "suppliers") {
                        return <SuppliersModule storeId={organization.id} />;
                      }

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
    </>
  );
}
