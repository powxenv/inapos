import { authClient } from "../../auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Alert, Button, CloseButton, InputGroup } from "@heroui/react";
import { Link, Navigate, createFileRoute } from "@tanstack/react-router";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/csr/EnvelopeSimple";
import { EyeIcon } from "@phosphor-icons/react/dist/csr/Eye";
import { EyeSlashIcon } from "@phosphor-icons/react/dist/csr/EyeSlash";
import { LockKeyIcon } from "@phosphor-icons/react/dist/csr/LockKey";
import { useI18n } from "../../lib/i18n";

type SignInFormValues = {
  email: string;
  password: string;
};

export const Route = createFileRoute("/auth/sign-in")({
  component: RouteComponent,
});

function RouteComponent() {
  const { text } = useI18n();
  const signInSchema = z.object({
    email: z.email(text.auth.signIn.schema.email),
    password: z.string().min(1, text.auth.signIn.schema.password),
  });
  const navigate = Route.useNavigate();
  const session = authClient.useSession();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {
    control,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(signInSchema),
  });

  const inputIconClassName = "text-stone-400";

  if (!session.isPending && session.data?.session) {
    return <Navigate replace to="/" />;
  }

  const onSubmit = handleSubmit(async ({ email, password }) => {
    clearErrors("root");

    try {
      const { error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        setError("root", {
          type: "server",
          message: error.message ?? text.auth.signIn.failureDescription,
        });
        return;
      }

      void navigate({ replace: true, to: "/" });
    } catch (error) {
      setError("root", {
        type: "server",
        message: error instanceof Error ? error.message : text.auth.signIn.failureDescription,
      });
    }
  });

  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50 px-4 py-10">
      <div className="w-full max-w-sm space-y-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-stone-900">{text.auth.signIn.heading}</h1>
          <p className="text-sm text-stone-500">{text.auth.signIn.description}</p>
        </div>

        <form className="space-y-4" onSubmit={onSubmit}>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-stone-700" htmlFor="sign-in-email">
              {text.auth.signIn.emailLabel}
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
                    aria-label={text.auth.signIn.emailLabel}
                    autoComplete="email"
                    className="w-full"
                    id="sign-in-email"
                    onBlur={field.onBlur}
                    onChange={field.onChange}
                    placeholder={text.auth.signIn.emailPlaceholder}
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

          <div className="space-y-2">
            <label className="block text-sm font-medium text-stone-700" htmlFor="sign-in-password">
              {text.auth.signIn.passwordLabel}
            </label>
            <Controller
              control={control}
              name="password"
              render={({ field, fieldState }) => (
                <InputGroup className="w-full" isInvalid={fieldState.invalid}>
                  <InputGroup.Prefix className={inputIconClassName}>
                    <LockKeyIcon aria-hidden size={18} />
                  </InputGroup.Prefix>
                  <InputGroup.Input
                    aria-invalid={fieldState.invalid}
                    aria-label={text.auth.signIn.passwordLabel}
                    autoComplete="current-password"
                    className="w-full"
                    id="sign-in-password"
                    onBlur={field.onBlur}
                    onChange={field.onChange}
                    placeholder={text.auth.signIn.passwordPlaceholder}
                    type={isPasswordVisible ? "text" : "password"}
                    value={field.value}
                  />
                  <InputGroup.Suffix className="pr-0">
                    <Button
                      aria-label={
                        isPasswordVisible
                          ? text.auth.signIn.toggleHide
                          : text.auth.signIn.toggleShow
                      }
                      onPress={() => setIsPasswordVisible((value) => !value)}
                      size="sm"
                      type="button"
                      variant="ghost"
                      className="min-w-0 px-2 text-stone-500 hover:text-stone-900"
                    >
                      {isPasswordVisible ? (
                        <EyeSlashIcon aria-hidden size={18} />
                      ) : (
                        <EyeIcon aria-hidden size={18} />
                      )}
                    </Button>
                  </InputGroup.Suffix>
                </InputGroup>
              )}
            />
            {errors.password?.message ? (
              <p className="text-sm text-red-600">{errors.password.message}</p>
            ) : null}
          </div>

          {errors.root?.message ? (
            <Alert status="danger">
              <Alert.Indicator />
              <Alert.Content>
                <Alert.Title>{text.auth.signIn.failureTitle}</Alert.Title>
                <Alert.Description>{errors.root.message}</Alert.Description>
              </Alert.Content>
              <CloseButton aria-label="Close" onPress={() => clearErrors("root")} />
            </Alert>
          ) : null}

          <Button fullWidth isPending={isSubmitting} type="submit">
            {text.common.actions.signIn}
          </Button>

          <div className="space-y-2 pt-1 text-sm">
            <Link
              className="block text-stone-600 transition hover:text-stone-900"
              to="/auth/forgot-password"
            >
              {text.auth.signIn.forgotPassword}
            </Link>
            <Link
              className="block text-stone-600 transition hover:text-stone-900"
              to="/auth/sign-up"
            >
              {text.auth.signIn.needAccount}
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
