import { authClient } from "../../auth";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Alert, Button, InputGroup } from "@heroui/react";
import { Link, Navigate, createFileRoute } from "@tanstack/react-router";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/csr/EnvelopeSimple";
import { useI18n } from "../../lib/i18n";

type ForgotPasswordFormValues = {
  email: string;
};

export const Route = createFileRoute("/auth/forgot-password")({
  component: RouteComponent,
});

function RouteComponent() {
  const { text } = useI18n();
  const forgotPasswordSchema = z.object({
    email: z.email(text.auth.forgotPassword.schema.email),
  });
  const session = authClient.useSession();
  const [noticeMessage, setNoticeMessage] = useState<string | null>(null);
  const {
    control,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(forgotPasswordSchema),
  });

  const inputIconClassName = "text-stone-400";

  if (!session.isPending && session.data?.session) {
    return <Navigate replace to="/" />;
  }

  const onSubmit = handleSubmit(async ({ email }) => {
    clearErrors("root");
    setNoticeMessage(null);

    try {
      const { error } = await authClient.requestPasswordReset({
        email,
        redirectTo: `${window.location.origin}/auth/sign-in`,
      });

      if (error) {
        setError("root", {
          type: "server",
          message: error.message ?? text.auth.forgotPassword.failureDescription,
        });
        return;
      }

      setNoticeMessage(text.auth.forgotPassword.notice);
    } catch (error) {
      setError("root", {
        type: "server",
        message:
          error instanceof Error ? error.message : text.auth.forgotPassword.failureDescription,
      });
    }
  });

  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50 px-4 py-10">
      <div className="w-full max-w-sm space-y-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-stone-900">
            {text.auth.forgotPassword.heading}
          </h1>
          <p className="text-sm text-stone-500">{text.auth.forgotPassword.description}</p>
        </div>

        <form className="space-y-4" onSubmit={onSubmit}>
          <div className="space-y-2">
            <label
              className="block text-sm font-medium text-stone-700"
              htmlFor="forgot-password-email"
            >
              {text.auth.forgotPassword.emailLabel}
            </label>
            <Controller
              control={control}
              name="email"
              render={({ field, fieldState }) => (
                <InputGroup className="w-full" isInvalid={fieldState.invalid}>
                  <InputGroup.Prefix className={inputIconClassName}>
                    <EnvelopeSimpleIcon aria-hidden size={18} />
                  </InputGroup.Prefix>
                  <InputGroup.Input
                    aria-invalid={fieldState.invalid}
                    aria-label={text.auth.forgotPassword.emailLabel}
                    autoComplete="email"
                    className="w-full"
                    id="forgot-password-email"
                    onBlur={field.onBlur}
                    onChange={field.onChange}
                    placeholder={text.auth.forgotPassword.emailPlaceholder}
                    type="email"
                    value={field.value}
                  />
                </InputGroup>
              )}
            />
            {errors.email?.message ? (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            ) : null}
          </div>

          {errors.root?.message ? (
            <Alert status="danger">
              <Alert.Indicator />
              <Alert.Content>
                <Alert.Title>{text.auth.forgotPassword.failureTitle}</Alert.Title>
                <Alert.Description>{errors.root.message}</Alert.Description>
              </Alert.Content>
            </Alert>
          ) : null}

          {noticeMessage ? (
            <Alert status="success">
              <Alert.Indicator />
              <Alert.Content>
                <Alert.Title>{text.auth.forgotPassword.successTitle}</Alert.Title>
                <Alert.Description>{noticeMessage}</Alert.Description>
              </Alert.Content>
            </Alert>
          ) : null}

          <Button fullWidth isPending={isSubmitting} type="submit">
            {text.common.actions.sendResetLink}
          </Button>

          <div className="pt-1 text-sm">
            <Link
              className="block text-stone-600 transition hover:text-stone-900"
              to="/auth/sign-in"
            >
              {text.auth.forgotPassword.back}
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
