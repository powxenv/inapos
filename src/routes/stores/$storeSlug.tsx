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
    label: "Overview",
    title: "Keep an eye on what matters most",
    modules: [
      { id: "dashboard", label: "Dashboard", title: "Dashboard" },
      { id: "alerts", label: "Alerts", title: "Alerts" },
      {
        id: "today-activity",
        label: "Today",
        title: "Today",
      },
    ],
  },
  {
    id: "sales",
    label: "Sales",
    title: "Everything you need while serving customers",
    modules: [
      { id: "cashier", label: "Checkout", title: "Checkout" },
      { id: "orders", label: "Orders", title: "Orders" },
      { id: "customers", label: "Customers", title: "Customers" },
      { id: "promo", label: "Offers", title: "Offers" },
    ],
  },
  {
    id: "products",
    label: "Products",
    title: "Manage your items and stock day to day",
    modules: [
      {
        id: "product-list",
        label: "Items",
        title: "Items",
      },
      { id: "stock", label: "Stock", title: "Stock" },
      {
        id: "purchases",
        label: "Purchases",
        title: "Purchases",
      },
      { id: "suppliers", label: "Suppliers", title: "Suppliers" },
    ],
  },
  {
    id: "finance",
    label: "Money",
    title: "Track money in, money out, and your results",
    modules: [
      { id: "cash", label: "Cash", title: "Cash" },
      { id: "expenses", label: "Expenses", title: "Expenses" },
      { id: "reports", label: "Reports", title: "Reports" },
    ],
  },
  {
    id: "store",
    label: "Store",
    title: "Store details, your team, and helpful tools",
    modules: [
      { id: "users", label: "Team", title: "Team" },
      {
        id: "devices-sync",
        label: "This Device",
        title: "This Device",
        adminOnly: true,
      },
      {
        id: "store-settings",
        label: "Store Details",
        title: "Store Details",
        adminOnly: true,
      },
      { id: "ai-models", label: "Assistant Setup", title: "Assistant Setup" },
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
  name: z.string().min(2, "Use at least 2 characters.").max(80, "Use 80 characters or fewer."),
});

type CreateStoreFormValues = z.infer<typeof createStoreSchema>;

const profileSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Use at least 2 characters.")
    .max(80, "Use 80 characters or fewer."),
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
    description: "See the full store in one place.",
    icon: MonitorIcon,
    id: "full",
    label: "Full view",
  },
  {
    description: "Keep the screen focused on sales.",
    icon: StorefrontIcon,
    id: "cashier",
    label: "Checkout view",
  },
  {
    description: "Open only the assistant for quick help.",
    icon: ChatCircleDotsIcon,
    id: "chat",
    label: "Chat view",
  },
] as const;

const languageOptions: readonly {
  description: string;
  id: LanguagePreference;
  label: string;
}[] = [
  {
    description: "Use Indonesian across the app.",
    id: "id",
    label: "Bahasa Indonesia",
  },
  {
    description: "Use English across the app.",
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
  const [languagePreference, setLanguagePreference] =
    useState<LanguagePreference>(readLanguagePreference);
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
        <p className="text-sm text-stone-500">{gate.message ?? "Getting your store ready..."}</p>
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
              <Alert.Title>Your store isn't ready yet</Alert.Title>
              <Alert.Description>{gate.message}</Alert.Description>
            </Alert.Content>
          </Alert>
          <Button fullWidth onPress={() => void gate.retry()}>
            Try again
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
      console.error("We couldn't sign you out.", error);
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
      setCreateStoreError(error?.message ?? "We couldn't create that store.");
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
      setProfileError(error.message ?? "We couldn't save your details.");
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
    setPreferencesMessage("Saved on this device.");
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
                  aria-label="Choose a store"
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
                New store
              </Button>
              <Modal.Backdrop>
                <Modal.Container placement="center" size="sm">
                  <Modal.Dialog aria-label="Create a new store">
                    {({ close }) => (
                      <>
                        <Modal.Header>
                          <Modal.Heading>Create a new store</Modal.Heading>
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
                                Store name
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
                                      aria-label="Store name"
                                      className="w-full"
                                      id="modal-store-name"
                                      onBlur={field.onBlur}
                                      onChange={field.onChange}
                                      placeholder="New branch store"
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
                                  <Alert.Title>We couldn’t create that store</Alert.Title>
                                  <Alert.Description>{createStoreError}</Alert.Description>
                                </Alert.Content>
                              </Alert>
                            ) : null}

                            <div className="flex justify-end gap-2">
                              <Button slot="close" type="button" variant="tertiary">
                                Cancel
                              </Button>
                              <Button isPending={isCreatingStore} type="submit">
                                Create store
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
                  aria-label="Choose a view"
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
                <Dropdown.Menu aria-label="Profile menu" onAction={handleProfileAction}>
                  <Dropdown.Section>
                    <Dropdown.Item id="profile" textValue="Edit profile">
                      <div className="flex items-center gap-3">
                        <PencilSimpleIcon aria-hidden className="text-stone-500" size={16} />
                        <div className="text-left">
                          <p className="text-sm font-medium text-stone-900">Edit profile</p>
                          <p className="text-xs text-stone-500">
                            Update the name shown in the app.
                          </p>
                        </div>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item id="preferences" textValue="Preferences">
                      <div className="flex items-center gap-3">
                        <GlobeIcon aria-hidden className="text-stone-500" size={16} />
                        <div className="text-left">
                          <p className="text-sm font-medium text-stone-900">Preferences</p>
                          <p className="text-xs text-stone-500">
                            Current language: {currentLanguageOption.label}
                          </p>
                        </div>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item id="logout" textValue="Sign out" variant="danger">
                      <div className="flex items-center gap-3">
                        <SignOutIcon aria-hidden className="text-stone-500" size={16} />
                        <div className="text-left">
                          <p className="text-sm font-medium">Sign out</p>
                          <p className="text-xs text-stone-500">Sign out on this device.</p>
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
              <Alert.Title>Preferences updated</Alert.Title>
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
            <Modal.Dialog aria-label="Edit profile">
              {({ close }) => (
                <>
                  <Modal.Header>
                    <Modal.Heading>Edit profile</Modal.Heading>
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
                        <label
                          className="block text-sm font-medium text-stone-700"
                          htmlFor="profile-name"
                        >
                          Name
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
                                placeholder="Your name"
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
                        <label
                          className="block text-sm font-medium text-stone-700"
                          htmlFor="profile-email"
                        >
                          Email
                        </label>
                        <Input className="w-full" disabled id="profile-email" value={user.email} />
                      </div>

                      {profileError ? (
                        <Alert status="danger">
                          <Alert.Indicator />
                          <Alert.Content>
                            <Alert.Title>We couldn’t save your details</Alert.Title>
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
                          Cancel
                        </Button>
                        <Button isPending={isSavingProfile} type="submit">
                          Save
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
            <Modal.Dialog aria-label="Preferences">
              {({ close }) => (
                <>
                  <Modal.Header>
                    <Modal.Heading>Preferences</Modal.Heading>
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
                        <label
                          className="block text-sm font-medium text-stone-700"
                          htmlFor="preferences-language"
                        >
                          Language
                        </label>
                        <Controller
                          control={preferencesControl}
                          name="language"
                          render={({ field }) => (
                            <Select
                              aria-label="Choose a language"
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
                                    <ListBox.Item
                                      id={option.id}
                                      key={option.id}
                                      textValue={option.label}
                                    >
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
                          This choice is saved on this device.
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
                          Cancel
                        </Button>
                        <Button isPending={isSavingPreferences} type="submit">
                          Save
                        </Button>
                      </div>
                    </form>
                  </Modal.Body>
                </>
              )}
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>

        <AlertDialog.Backdrop isOpen={isSignOutDialogOpen} onOpenChange={setIsSignOutDialogOpen}>
          <AlertDialog.Container placement="center" size="sm">
            <AlertDialog.Dialog aria-label="Sign out of the app">
              <AlertDialog.Header>
                <AlertDialog.Heading>Sign out?</AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>{user.email} will be signed out on this device.</AlertDialog.Body>
              <AlertDialog.Footer>
                <Button
                  onPress={() => setIsSignOutDialogOpen(false)}
                  type="button"
                  variant="tertiary"
                >
                  Cancel
                </Button>
                <Button isPending={isSigningOut} onPress={() => void handleSignOut()}>
                  Sign out
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>

        {appMode === "cashier" ? (
          <div className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">Checkout view</h2>
              <p className="text-sm text-stone-500">
                This view keeps the screen focused on selling, without extra distractions.
              </p>
            </div>
            <Tabs className="w-full" defaultSelectedKey="cashier">
              <Tabs.ListContainer>
                <Tabs.List aria-label="Checkout view" className="w-fit">
                  <Tabs.Tab id="cashier" key="cashier">
                    Checkout
                    <Tabs.Indicator />
                  </Tabs.Tab>
                  <Tabs.Tab id="transactions" key="transactions">
                    Orders
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

        {appMode === "chat" ? <AssistantModule minimal storeId={organization.id} /> : null}

        {appMode === "full" ? (
          <Tabs className="w-full" defaultSelectedKey={visibleModuleGroups[0]?.id}>
            <Tabs.ListContainer>
              <Tabs.List aria-label="Main sections" className="w-fit">
                {visibleModuleGroups.map((group) => (
                  <Tabs.Tab key={group.id} id={group.id}>
                    {group.label}
                    <Tabs.Indicator />
                  </Tabs.Tab>
                ))}
                <Tabs.Tab id="assistant" key="assistant">
                  Assistant
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
                    <Tabs.List aria-label={`${group.label} sections`} className="min-w-[250px]">
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
                <h2 className="text-xl font-semibold">Assistant</h2>
              </div>
              <AssistantModule storeId={organization.id} />
            </Tabs.Panel>
          </Tabs>
        ) : null}
      </div>
    </>
  );
}
