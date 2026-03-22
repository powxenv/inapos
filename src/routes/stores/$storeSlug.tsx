import { authClient } from "../../auth";
import { useState } from "react";
import { Navigate, createFileRoute } from "@tanstack/react-router";
import {
  Alert,
  AlertDialog,
  Button,
  Dropdown,
  Input,
  InputGroup,
  ListBox,
  Modal,
  Select,
  Tabs,
} from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChatCircleDotsIcon } from "@phosphor-icons/react/dist/csr/ChatCircleDots";
import { CaretDownIcon } from "@phosphor-icons/react/dist/csr/CaretDown";
import { CheckIcon } from "@phosphor-icons/react/dist/csr/Check";
import { GlobeIcon } from "@phosphor-icons/react/dist/csr/Globe";
import { MonitorIcon } from "@phosphor-icons/react/dist/csr/Monitor";
import { PencilSimpleIcon } from "@phosphor-icons/react/dist/csr/PencilSimple";
import { PlusIcon } from "@phosphor-icons/react/dist/csr/Plus";
import { SignOutIcon } from "@phosphor-icons/react/dist/csr/SignOut";
import { StorefrontIcon } from "@phosphor-icons/react/dist/csr/Storefront";
import { UserCircleIcon } from "@phosphor-icons/react/dist/csr/UserCircle";
import { UserIcon } from "@phosphor-icons/react/dist/csr/User";
import { WrenchIcon } from "@phosphor-icons/react/dist/csr/Wrench";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import {
  AlertsModule,
  AiModelsModule,
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
      { id: "ai-models", label: "Model AI", title: "Model AI" },
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
  "ai-models": AiModelsModule,
  assistant: AssistantModule,
};

const createStoreSchema = z.object({
  name: z
    .string()
    .min(2, "Nama toko minimal 2 karakter.")
    .max(80, "Nama toko maksimal 80 karakter."),
});

type CreateStoreFormValues = z.infer<typeof createStoreSchema>;

const profileSchema = z.object({
  name: z.string().trim().min(2, "Nama minimal 2 karakter.").max(80, "Nama maksimal 80 karakter."),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

const preferencesSchema = z.object({
  language: z.enum(["id", "en"]),
});

type PreferencesFormValues = z.infer<typeof preferencesSchema>;

type AppMode = "full" | "cashier" | "chat";
type LanguagePreference = "id" | "en";

const APP_MODE_STORAGE_KEY = "inapos.app-mode";
const LANGUAGE_STORAGE_KEY = "inapos.language";

const appModes: readonly {
  description: string;
  icon: typeof MonitorIcon;
  id: AppMode;
  label: string;
}[] = [
  {
    description: "Tampilan lengkap untuk melihat seluruh modul toko.",
    icon: MonitorIcon,
    id: "full",
    label: "Mode lengkap",
  },
  {
    description: "Fokus hanya ke layar kasir agar lebih ringkas saat jualan.",
    icon: StorefrontIcon,
    id: "cashier",
    label: "Mode kasir",
  },
  {
    description: "Tampilkan asisten chat saja untuk tanya dan minta bantuan cepat.",
    icon: ChatCircleDotsIcon,
    id: "chat",
    label: "Mode chat",
  },
] as const;

const languageOptions: readonly {
  description: string;
  id: LanguagePreference;
  label: string;
}[] = [
  {
    description: "Bahasa utama aplikasi saat ini.",
    id: "id",
    label: "Bahasa Indonesia",
  },
  {
    description: "Disimpan untuk preferensi berikutnya.",
    id: "en",
    label: "English",
  },
] as const;

function readAppMode(): AppMode {
  if (typeof window === "undefined") {
    return "full";
  }

  const value = window.localStorage.getItem(APP_MODE_STORAGE_KEY);
  return value === "cashier" || value === "chat" || value === "full" ? value : "full";
}

function readLanguagePreference(): LanguagePreference {
  if (typeof window === "undefined") {
    return "id";
  }

  const value = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return value === "en" || value === "id" ? value : "id";
}

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
  const [appMode, setAppMode] = useState<AppMode>(readAppMode);
  const [languagePreference, setLanguagePreference] = useState<LanguagePreference>(
    readLanguagePreference,
  );
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isPreferencesModalOpen, setIsPreferencesModalOpen] = useState(false);
  const [isSignOutDialogOpen, setIsSignOutDialogOpen] = useState(false);
  const [profileError, setProfileError] = useState<string | null>(null);
  const [preferencesMessage, setPreferencesMessage] = useState<string | null>(null);
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const [isSavingPreferences, setIsSavingPreferences] = useState(false);
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
  const {
    control: profileControl,
    handleSubmit: handleProfileSubmit,
    reset: resetProfile,
    formState: { errors: profileErrors },
  } = useForm<ProfileFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(profileSchema),
  });
  const {
    control: preferencesControl,
    handleSubmit: handlePreferencesSubmit,
    reset: resetPreferences,
  } = useForm<PreferencesFormValues>({
    defaultValues: {
      language: languagePreference,
    },
    resolver: zodResolver(preferencesSchema),
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
  const currentAppMode = appModes.find((mode) => mode.id === appMode) ?? appModes[0];
  const currentLanguageOption =
    languageOptions.find((option) => option.id === languagePreference) ?? languageOptions[0];

  function openProfileModal() {
    setProfileError(null);
    resetProfile({
      name: user.name ?? "",
    });
    setIsProfileModalOpen(true);
  }

  function openPreferencesModal() {
    setPreferencesMessage(null);
    resetPreferences({
      language: languagePreference,
    });
    setIsPreferencesModalOpen(true);
  }

  function handleProfileAction(key: React.Key) {
    const action = String(key);

    if (action === "profile") {
      openProfileModal();
      return;
    }

    if (action === "preferences") {
      openPreferencesModal();
      return;
    }

    if (action === "logout") {
      setIsSignOutDialogOpen(true);
    }
  }

  function handleModeAction(key: React.Key) {
    const nextMode = String(key);

    if (nextMode !== "full" && nextMode !== "cashier" && nextMode !== "chat") {
      return;
    }

    setAppMode(nextMode);
    window.localStorage.setItem(APP_MODE_STORAGE_KEY, nextMode);
  }

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

  const saveProfile = async (values: ProfileFormValues) => {
    setProfileError(null);
    setIsSavingProfile(true);

    const { error } = await authClient.updateUser({
      name: values.name.trim(),
    });

    setIsSavingProfile(false);

    if (error) {
      setProfileError(error.message ?? "Gagal menyimpan profil.");
      return false;
    }

    await gate.refresh();
    setIsProfileModalOpen(false);
    return true;
  };

  const savePreferences = async (values: PreferencesFormValues) => {
    setIsSavingPreferences(true);
    setLanguagePreference(values.language);
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, values.language);
    setPreferencesMessage("Preferensi disimpan di perangkat ini.");
    setIsSavingPreferences(false);
    setIsPreferencesModalOpen(false);
    return true;
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
            <Dropdown>
              <Dropdown.Trigger>
                <Button variant="outline">
                  <WrenchIcon aria-hidden size={16} />
                  {currentAppMode.label}
                  <CaretDownIcon aria-hidden size={16} />
                </Button>
              </Dropdown.Trigger>
              <Dropdown.Popover className="min-w-[260px]">
                <Dropdown.Menu
                  aria-label="Pilih mode tampilan"
                  selectedKeys={new Set([appMode])}
                  selectionMode="single"
                  onAction={handleModeAction}
                >
                  {appModes.map((mode) => {
                    const Icon = mode.icon;

                    return (
                      <Dropdown.Item id={mode.id} key={mode.id} textValue={mode.label}>
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 text-stone-500">
                            <Icon aria-hidden size={16} />
                          </div>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium text-stone-900">{mode.label}</p>
                            <p className="text-xs text-stone-500">{mode.description}</p>
                          </div>
                          <Dropdown.ItemIndicator />
                        </div>
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>

            <Dropdown>
              <Dropdown.Trigger>
                <Button variant="outline">
                  <UserCircleIcon aria-hidden size={16} />
                  <span className="max-w-[160px] truncate">{user.name ?? user.email}</span>
                  <CaretDownIcon aria-hidden size={16} />
                </Button>
              </Dropdown.Trigger>
              <Dropdown.Popover className="min-w-[240px]">
                <Dropdown.Menu aria-label="Menu profil" onAction={handleProfileAction}>
                  <Dropdown.Section>
                    <Dropdown.Item id="profile" textValue="Edit profil">
                      <div className="flex items-center gap-3">
                        <PencilSimpleIcon aria-hidden className="text-stone-500" size={16} />
                        <div className="text-left">
                          <p className="text-sm font-medium text-stone-900">Edit profil</p>
                          <p className="text-xs text-stone-500">Ubah nama akun yang tampil.</p>
                        </div>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item id="preferences" textValue="Preferensi">
                      <div className="flex items-center gap-3">
                        <GlobeIcon aria-hidden className="text-stone-500" size={16} />
                        <div className="text-left">
                          <p className="text-sm font-medium text-stone-900">Preferensi</p>
                          <p className="text-xs text-stone-500">
                            Bahasa saat ini: {currentLanguageOption.label}
                          </p>
                        </div>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item id="logout" textValue="Keluar" variant="danger">
                      <div className="flex items-center gap-3">
                        <SignOutIcon aria-hidden className="text-stone-500" size={16} />
                        <div className="text-left">
                          <p className="text-sm font-medium">Keluar</p>
                          <p className="text-xs text-stone-500">Akhiri sesi di perangkat ini.</p>
                        </div>
                      </div>
                    </Dropdown.Item>
                  </Dropdown.Section>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          </div>
        </div>

        {preferencesMessage ? (
          <Alert className="mb-4" status="success">
            <Alert.Indicator />
            <Alert.Content>
              <Alert.Title>Preferensi diperbarui</Alert.Title>
              <Alert.Description>{preferencesMessage}</Alert.Description>
            </Alert.Content>
          </Alert>
        ) : null}

        <Modal.Backdrop
          isDismissable
          isOpen={isProfileModalOpen}
          onOpenChange={setIsProfileModalOpen}
        >
          <Modal.Container placement="center" size="sm">
            <Modal.Dialog aria-label="Edit profil">
              {({ close }) => (
                <>
                  <Modal.Header>
                    <Modal.Heading>Edit profil</Modal.Heading>
                  </Modal.Header>
                  <Modal.Body>
                    <form
                      className="space-y-4"
                      onSubmit={handleProfileSubmit(async (values) => {
                        const isSaved = await saveProfile(values);
                        if (isSaved) {
                          close();
                        }
                      })}
                    >
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-stone-700" htmlFor="profile-name">
                          Nama
                        </label>
                        <Controller
                          control={profileControl}
                          name="name"
                          render={({ field, fieldState }) => (
                            <InputGroup className="w-full" isInvalid={fieldState.invalid}>
                              <InputGroup.Prefix className="text-stone-400">
                                <UserIcon aria-hidden size={18} />
                              </InputGroup.Prefix>
                              <InputGroup.Input
                                aria-invalid={fieldState.invalid}
                                className="w-full"
                                id="profile-name"
                                onBlur={field.onBlur}
                                onChange={field.onChange}
                                placeholder="Nama pengguna"
                                value={field.value}
                              />
                            </InputGroup>
                          )}
                        />
                        {profileErrors.name?.message ? (
                          <p className="text-sm text-red-600">{profileErrors.name.message}</p>
                        ) : null}
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-stone-700" htmlFor="profile-email">
                          Email
                        </label>
                        <Input className="w-full" disabled id="profile-email" value={user.email} />
                      </div>

                      {profileError ? (
                        <Alert status="danger">
                          <Alert.Indicator />
                          <Alert.Content>
                            <Alert.Title>Profil gagal diperbarui</Alert.Title>
                            <Alert.Description>{profileError}</Alert.Description>
                          </Alert.Content>
                        </Alert>
                      ) : null}

                      <div className="flex justify-end gap-2">
                        <Button
                          onPress={() => {
                            setIsProfileModalOpen(false);
                            close();
                          }}
                          type="button"
                          variant="tertiary"
                        >
                          Batal
                        </Button>
                        <Button isPending={isSavingProfile} type="submit">
                          Simpan
                        </Button>
                      </div>
                    </form>
                  </Modal.Body>
                </>
              )}
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>

        <Modal.Backdrop
          isDismissable
          isOpen={isPreferencesModalOpen}
          onOpenChange={setIsPreferencesModalOpen}
        >
          <Modal.Container placement="center" size="sm">
            <Modal.Dialog aria-label="Preferensi">
              {({ close }) => (
                <>
                  <Modal.Header>
                    <Modal.Heading>Preferensi</Modal.Heading>
                  </Modal.Header>
                  <Modal.Body>
                    <form
                      className="space-y-4"
                      onSubmit={handlePreferencesSubmit(async (values) => {
                        const isSaved = await savePreferences(values);
                        if (isSaved) {
                          close();
                        }
                      })}
                    >
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-stone-700" htmlFor="preferences-language">
                          Bahasa
                        </label>
                        <Controller
                          control={preferencesControl}
                          name="language"
                          render={({ field }) => (
                            <Select
                              aria-label="Pilih bahasa"
                              className="w-full"
                              id="preferences-language"
                              selectedKey={field.value}
                              onSelectionChange={(key) => {
                                if (typeof key === "string") {
                                  field.onChange(key);
                                }
                              }}
                            >
                              <Select.Trigger className="w-full">
                                <Select.Value />
                                <Select.Indicator />
                              </Select.Trigger>
                              <Select.Popover>
                                <ListBox>
                                  {languageOptions.map((option) => (
                                    <ListBox.Item id={option.id} key={option.id} textValue={option.label}>
                                      {option.label}
                                      <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                  ))}
                                </ListBox>
                              </Select.Popover>
                            </Select>
                          )}
                        />
                        <p className="text-sm text-stone-500">
                          Preferensi ini disimpan lokal di perangkat. Antarmuka saat ini masih dominan berbahasa Indonesia.
                        </p>
                      </div>

                      <div className="flex justify-end gap-2">
                        <Button
                          onPress={() => {
                            setIsPreferencesModalOpen(false);
                            close();
                          }}
                          type="button"
                          variant="tertiary"
                        >
                          Batal
                        </Button>
                        <Button isPending={isSavingPreferences} type="submit">
                          Simpan
                        </Button>
                      </div>
                    </form>
                  </Modal.Body>
                </>
              )}
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>

        <AlertDialog.Backdrop
          isOpen={isSignOutDialogOpen}
          onOpenChange={setIsSignOutDialogOpen}
        >
          <AlertDialog.Container placement="center" size="sm">
            <AlertDialog.Dialog aria-label="Keluar dari aplikasi">
              <AlertDialog.Header>
                <AlertDialog.Heading>Keluar dari aplikasi?</AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                Sesi akun {user.email} akan diakhiri di perangkat ini.
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button onPress={() => setIsSignOutDialogOpen(false)} type="button" variant="tertiary">
                  Batal
                </Button>
                <Button isPending={isSigningOut} onPress={() => void handleSignOut()}>
                  Keluar
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>

        {appMode === "cashier" ? (
          <div className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">Mode kasir</h2>
              <p className="text-sm text-stone-500">
                Tampilan disederhanakan agar fokus ke proses penjualan tanpa gangguan modul lain.
              </p>
            </div>
            <Tabs className="w-full" defaultSelectedKey="cashier">
              <Tabs.ListContainer>
                <Tabs.List aria-label="Mode kasir" className="w-fit">
                  <Tabs.Tab id="cashier" key="cashier">
                    Kasir
                    <Tabs.Indicator />
                  </Tabs.Tab>
                  <Tabs.Tab id="transactions" key="transactions">
                    Transaksi
                    <Tabs.Indicator />
                  </Tabs.Tab>
                </Tabs.List>
              </Tabs.ListContainer>

              <Tabs.Panel className="pt-4" id="cashier">
                <CashierModule storeId={organization.id} />
              </Tabs.Panel>

              <Tabs.Panel className="pt-4" id="transactions">
                <OrdersModule storeId={organization.id} />
              </Tabs.Panel>
            </Tabs>
          </div>
        ) : null}

        {appMode === "chat" ? (
          <AssistantModule minimal storeId={organization.id} />
        ) : null}

        {appMode === "full" ? (
          <Tabs className="w-full" defaultSelectedKey={visibleModuleGroups[0]?.id}>
          <Tabs.ListContainer>
            <Tabs.List aria-label="Modul utama" className="w-fit">
              {visibleModuleGroups.map((group) => (
                <Tabs.Tab key={group.id} id={group.id}>
                  {group.label}
                  <Tabs.Indicator />
                </Tabs.Tab>
              ))}
              <Tabs.Tab id="assistant" key="assistant">
                Asisten
                <Tabs.Indicator />
              </Tabs.Tab>
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

                      if (module.id === "dashboard") {
                        return <DashboardModule storeId={organization.id} />;
                      }

                      if (module.id === "alerts") {
                        return <AlertsModule storeId={organization.id} />;
                      }

                      if (module.id === "today-activity") {
                        return <TodayActivityModule storeId={organization.id} />;
                      }

                      if (module.id === "cashier") {
                        return <CashierModule storeId={organization.id} />;
                      }

                      if (module.id === "orders") {
                        return <OrdersModule storeId={organization.id} />;
                      }

                      if (module.id === "customers") {
                        return <CustomersModule storeId={organization.id} />;
                      }

                      if (module.id === "promo") {
                        return <PromoModule storeId={organization.id} />;
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

                      if (module.id === "cash") {
                        return <CashModule storeId={organization.id} />;
                      }

                      if (module.id === "expenses") {
                        return <ExpensesModule storeId={organization.id} />;
                      }

                      if (module.id === "reports") {
                        return <ReportsModule storeId={organization.id} />;
                      }

                      if (module.id === "ai-models") {
                        return <AiModelsModule />;
                      }

                      if (module.id === "assistant") {
                        return <AssistantModule storeId={organization.id} />;
                      }

                      const ModuleComponent = moduleComponents[module.id];
                      return <ModuleComponent />;
                    })()}
                  </Tabs.Panel>
                ))}
              </Tabs>
            </Tabs.Panel>
          ))}

          <Tabs.Panel className="w-full pt-4" id="assistant">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Asisten</h2>
            </div>
            <AssistantModule storeId={organization.id} />
          </Tabs.Panel>
          </Tabs>
        ) : null}
      </div>
    </>
  );
}
