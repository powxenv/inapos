import { authClient } from "../../auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Navigate, createFileRoute } from "@tanstack/react-router";
import { Alert, Button, CloseButton, InputGroup } from "@heroui/react";
import { StorefrontIcon } from "@phosphor-icons/react/dist/csr/Storefront";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { useI18n } from "../../lib/i18n";
import { createRandomOrganizationSlug, useOrganizationGate } from "../../lib/organization";

type SetupStoreFormValues = {
  name: string;
};

export const Route = createFileRoute("/setup/store")({
  component: RouteComponent,
});

function RouteComponent() {
  const { text } = useI18n();
  const setupStoreSchema = z.object({
    name: z.string().min(2, text.setupStore.schema.min).max(80, text.setupStore.schema.max),
  });
  const [isGateAlertVisible, setIsGateAlertVisible] = useState(true);
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

  useEffect(() => {
    if (gate.status === "error") {
      setIsGateAlertVisible(true);
    }
  }, [gate.status]);

  if (gate.status === "signed-out") {
    return <Navigate replace to="/auth/sign-in" />;
  }

  if (gate.status === "ready") {
    return <Navigate replace to="/" />;
  }

  if (gate.status === "loading" || gate.status === "activating") {
    return (
      <main className="flex min-h-screen items-center justify-center p-6">
        <p className="text-sm text-stone-500">{gate.message ?? text.setupStore.loading}</p>
      </main>
    );
  }

  const onSubmit = handleSubmit(async ({ name }) => {
    clearErrors("root");

    const { error } = await authClient.organization.create({
      name,
      slug: createRandomOrganizationSlug(name),
    });

    if (error) {
      setError("root", {
        type: "server",
        message: error.message ?? text.setupStore.createErrorDescription,
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
          <h1 className="text-2xl font-semibold text-stone-900">{text.setupStore.heading}</h1>
          <p className="text-sm text-stone-500">{text.setupStore.subheading}</p>
        </div>

        {gate.status === "error" ? (
          isGateAlertVisible ? (
            <Alert status="danger">
              <Alert.Indicator />
              <Alert.Content>
                <Alert.Title>{text.setupStore.loadErrorTitle}</Alert.Title>
                <Alert.Description>{gate.message}</Alert.Description>
              </Alert.Content>
              <CloseButton aria-label="Close" onPress={() => setIsGateAlertVisible(false)} />
            </Alert>
          ) : null
        ) : null}

        <form className="space-y-4" onSubmit={onSubmit}>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-stone-700" htmlFor="setup-store-name">
              {text.setupStore.nameLabel}
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
                    aria-label={text.setupStore.nameLabel}
                    autoComplete="organization"
                    className="w-full"
                    id="setup-store-name"
                    onBlur={field.onBlur}
                    onChange={field.onChange}
                    placeholder={text.setupStore.namePlaceholder}
                    value={field.value}
                  />
                </InputGroup>
              )}
            />
            {errors.name?.message ? (
              <p className="text-sm text-red-600">{errors.name.message}</p>
            ) : (
              <p className="text-sm text-stone-500">{text.setupStore.helper}</p>
            )}
          </div>

          {errors.root?.message ? (
            <Alert status="danger">
              <Alert.Indicator />
              <Alert.Content>
                <Alert.Title>{text.setupStore.createErrorTitle}</Alert.Title>
                <Alert.Description>{errors.root.message}</Alert.Description>
              </Alert.Content>
              <CloseButton aria-label="Close" onPress={() => clearErrors("root")} />
            </Alert>
          ) : null}

          <Button fullWidth isPending={isSubmitting} type="submit">
            {text.common.actions.continue}
          </Button>
        </form>
      </div>
    </main>
  );
}
