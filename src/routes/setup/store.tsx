import { zodResolver } from "@hookform/resolvers/zod";
import { Navigate, createFileRoute } from "@tanstack/react-router";
import { Alert, Button, InputGroup } from "@heroui/react";
import { StorefrontIcon } from "@phosphor-icons/react/dist/csr/Storefront";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { createRandomOrganizationSlug, useOrganizationGate } from "../../lib/organization";
import { neon } from "../../lib/powersync";

const setupStoreSchema = z.object({
  name: z
    .string()
    .min(2, "Nama toko minimal 2 karakter.")
    .max(80, "Nama toko maksimal 80 karakter."),
});

type SetupStoreFormValues = z.infer<typeof setupStoreSchema>;
type OrganizationCreateAuth = typeof neon.auth & {
  organization: {
    create: (input: { name: string; slug: string }) => Promise<{
      data?: {
        id: string;
        name: string;
        slug: string;
      } | null;
      error?: { message?: string } | null;
    }>;
  };
};

const organizationAuth = neon.auth as OrganizationCreateAuth;

export const Route = createFileRoute("/setup/store")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = Route.useNavigate();
  const gate = useOrganizationGate();
  const {
    control,
    handleSubmit,
    setError,
    clearErrors,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<SetupStoreFormValues>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(setupStoreSchema),
  });

  useEffect(() => {
    if (gate.status !== "needs-organization") {
      return;
    }

    const suggestedName = gate.user.name?.trim();

    if (!suggestedName) {
      return;
    }

    setValue("name", suggestedName, {
      shouldDirty: false,
    });
  }, [gate, setValue]);

  if (gate.status === "signed-out") {
    return <Navigate replace to="/auth/sign-in" />;
  }

  if (gate.status === "ready") {
    return <Navigate replace to="/" />;
  }

  if (gate.status === "loading" || gate.status === "activating") {
    return (
      <main className="flex min-h-screen items-center justify-center p-6">
        <p className="text-sm text-stone-500">{gate.message ?? "Menyiapkan toko..."}</p>
      </main>
    );
  }

  const onSubmit = handleSubmit(async ({ name }) => {
    clearErrors("root");

    const { error } = await organizationAuth.organization.create({
      name,
      slug: createRandomOrganizationSlug(name),
    });

    if (error) {
      setError("root", {
        type: "server",
        message: error.message ?? "Gagal membuat toko.",
      });
      return;
    }

    void navigate({
      replace: true,
      to: "/",
    });
  });

  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50 px-4 py-10">
      <div className="w-full max-w-sm space-y-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-stone-900">Buat toko</h1>
          <p className="text-sm text-stone-500">
            Masukkan nama toko untuk mulai menggunakan aplikasi.
          </p>
        </div>

        {gate.status === "error" ? (
          <Alert status="danger">
            <Alert.Indicator />
            <Alert.Content>
              <Alert.Title>Data toko gagal dimuat</Alert.Title>
              <Alert.Description>{gate.message}</Alert.Description>
            </Alert.Content>
          </Alert>
        ) : null}

        <form className="space-y-4" onSubmit={onSubmit}>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-stone-700" htmlFor="setup-store-name">
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
                    autoComplete="organization"
                    className="w-full"
                    id="setup-store-name"
                    onBlur={field.onBlur}
                    onChange={field.onChange}
                    placeholder="Warung Maju Jaya"
                    value={field.value}
                  />
                </InputGroup>
              )}
            />
            {errors.name?.message ? (
              <p className="text-sm text-red-600">{errors.name.message}</p>
            ) : (
              <p className="text-sm text-stone-500">
                Nama ini akan tampil sebagai toko aktif di dashboard.
              </p>
            )}
          </div>

          {errors.root?.message ? (
            <Alert status="danger">
              <Alert.Indicator />
              <Alert.Content>
                <Alert.Title>Pembuatan toko gagal</Alert.Title>
                <Alert.Description>{errors.root.message}</Alert.Description>
              </Alert.Content>
            </Alert>
          ) : null}

          <Button fullWidth isPending={isSubmitting} type="submit">
            Buat toko dan lanjutkan
          </Button>
        </form>
      </div>
    </main>
  );
}
