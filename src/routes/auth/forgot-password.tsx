import { authClient } from "../../auth";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Alert, Button, InputGroup } from "@heroui/react";
import { Link, Navigate, createFileRoute } from "@tanstack/react-router";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/csr/EnvelopeSimple";

const forgotPasswordSchema = z.object({
  email: z.email("Enter a valid email address."),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export const Route = createFileRoute("/auth/forgot-password")({
  component: RouteComponent,
});

function RouteComponent() {
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
          message: error.message ?? "We couldn't send the reset link.",
        });
        return;
      }

      setNoticeMessage(
        "If that email is in your account, you'll get a password reset link shortly.",
      );
    } catch (error) {
      setError("root", {
        type: "server",
        message: error instanceof Error ? error.message : "We couldn't send the reset link.",
      });
    }
  });

  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50 px-4 py-10">
      <div className="w-full max-w-sm space-y-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-stone-900">Reset password</h1>
          <p className="text-sm text-stone-500">
            Enter the email address you use for this account and we'll send you a reset link.
          </p>
        </div>

        <form className="space-y-4" onSubmit={onSubmit}>
          <div className="space-y-2">
            <label
              className="block text-sm font-medium text-stone-700"
              htmlFor="forgot-password-email"
            >
              Email address
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
                    aria-label="Email address"
                    autoComplete="email"
                    className="w-full"
                    id="forgot-password-email"
                    onBlur={field.onBlur}
                    onChange={field.onChange}
                    placeholder="you@yourstore.com"
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
                <Alert.Title>That didn’t work</Alert.Title>
                <Alert.Description>{errors.root.message}</Alert.Description>
              </Alert.Content>
            </Alert>
          ) : null}

          {noticeMessage ? (
            <Alert status="success">
              <Alert.Indicator />
              <Alert.Content>
                <Alert.Title>Check your email</Alert.Title>
                <Alert.Description>{noticeMessage}</Alert.Description>
              </Alert.Content>
            </Alert>
          ) : null}

          <Button fullWidth isPending={isSubmitting} type="submit">
            Send reset link
          </Button>

          <div className="pt-1 text-sm">
            <Link
              className="block text-stone-600 transition hover:text-stone-900"
              to="/auth/sign-in"
            >
              Back to sign in
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
