import { authClient } from "../../auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Alert, Button, InputGroup } from "@heroui/react";
import { Link, Navigate, createFileRoute } from "@tanstack/react-router";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/csr/EnvelopeSimple";
import { EyeIcon } from "@phosphor-icons/react/dist/csr/Eye";
import { EyeSlashIcon } from "@phosphor-icons/react/dist/csr/EyeSlash";
import { LockKeyIcon } from "@phosphor-icons/react/dist/csr/LockKey";
import { UserIcon } from "@phosphor-icons/react/dist/csr/User";
import { useI18n } from "../../lib/i18n";

type SignUpFormValues = {
  confirmPassword: string;
  email: string;
  name: string;
  password: string;
};

export const Route = createFileRoute("/auth/sign-up")({
  component: RouteComponent,
});

function RouteComponent() {
  const { text } = useI18n();
  const signUpSchema = z
    .object({
      name: z.string().min(1, text.auth.signUp.schema.name),
      email: z.email(text.auth.signUp.schema.email),
      password: z.string().min(8, text.auth.signUp.schema.password),
      confirmPassword: z.string().min(1, text.auth.signUp.schema.confirmPassword),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: text.auth.signUp.schema.passwordMatch,
      path: ["confirmPassword"],
    });
  const navigate = Route.useNavigate();
  const session = authClient.useSession();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const {
    control,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(signUpSchema),
  });

  const inputIconClassName = "text-stone-400";

  if (!session.isPending && session.data?.session) {
    return <Navigate replace to="/" />;
  }

  const onSubmit = handleSubmit(async ({ email, password, name }) => {
    clearErrors("root");

    try {
      const { error } = await authClient.signUp.email({
        email,
        password,
        name,
      });

      if (error) {
        setError("root", {
          type: "server",
          message: error.message ?? text.auth.signUp.failureDescription,
        });
        return;
      }

      void navigate({ replace: true, to: "/" });
    } catch (error) {
      setError("root", {
        type: "server",
        message: error instanceof Error ? error.message : text.auth.signUp.failureDescription,
      });
    }
  });

  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50 px-4 py-10">
      <div className="w-full max-w-sm space-y-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-stone-900">{text.auth.signUp.heading}</h1>
          <p className="text-sm text-stone-500">{text.auth.signUp.description}</p>
        </div>

        <form className="space-y-4" onSubmit={onSubmit}>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-stone-700" htmlFor="sign-up-name">
              {text.auth.signUp.nameLabel}
            </label>
            <Controller
              control={control}
              name="name"
              render={({ field, fieldState }) => (
                <InputGroup className="w-full" isInvalid={fieldState.invalid}>
                  <InputGroup.Prefix className={inputIconClassName}>
                    <UserIcon aria-hidden size={18} />
                  </InputGroup.Prefix>
                  <InputGroup.Input
                    aria-invalid={fieldState.invalid}
                    aria-label={text.auth.signUp.nameLabel}
                    autoComplete="name"
                    className="w-full"
                    id="sign-up-name"
                    onBlur={field.onBlur}
                    onChange={field.onChange}
                    placeholder={text.auth.signUp.namePlaceholder}
                    value={field.value}
                  />
                </InputGroup>
              )}
            />
            {errors.name?.message ? (
              <p className="text-sm text-red-600">{errors.name.message}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-stone-700" htmlFor="sign-up-email">
              {text.auth.signUp.emailLabel}
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
                    aria-label={text.auth.signUp.emailLabel}
                    autoComplete="email"
                    className="w-full"
                    id="sign-up-email"
                    onBlur={field.onBlur}
                    onChange={field.onChange}
                    placeholder={text.auth.signUp.emailPlaceholder}
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
            <label className="block text-sm font-medium text-stone-700" htmlFor="sign-up-password">
              {text.auth.signUp.passwordLabel}
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
                    aria-label={text.auth.signUp.passwordLabel}
                    autoComplete="new-password"
                    className="w-full"
                    id="sign-up-password"
                    onBlur={field.onBlur}
                    onChange={field.onChange}
                    placeholder={text.auth.signUp.passwordPlaceholder}
                    type={isPasswordVisible ? "text" : "password"}
                    value={field.value}
                  />
                  <InputGroup.Suffix className="pr-0">
                    <Button
                      aria-label={
                        isPasswordVisible
                          ? text.auth.signUp.toggleHide
                          : text.auth.signUp.toggleShow
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

          <div className="space-y-2">
            <label
              className="block text-sm font-medium text-stone-700"
              htmlFor="sign-up-confirm-password"
            >
              {text.auth.signUp.confirmPasswordLabel}
            </label>
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field, fieldState }) => (
                <InputGroup className="w-full" isInvalid={fieldState.invalid}>
                  <InputGroup.Prefix className={inputIconClassName}>
                    <LockKeyIcon aria-hidden size={18} />
                  </InputGroup.Prefix>
                  <InputGroup.Input
                    aria-invalid={fieldState.invalid}
                    aria-label={text.auth.signUp.confirmPasswordLabel}
                    autoComplete="new-password"
                    className="w-full"
                    id="sign-up-confirm-password"
                    onBlur={field.onBlur}
                    onChange={field.onChange}
                    placeholder={text.auth.signUp.confirmPasswordPlaceholder}
                    type={isConfirmPasswordVisible ? "text" : "password"}
                    value={field.value}
                  />
                  <InputGroup.Suffix className="pr-0">
                    <Button
                      aria-label={
                        isConfirmPasswordVisible
                          ? text.auth.signUp.toggleHide
                          : text.auth.signUp.toggleShow
                      }
                      onPress={() => setIsConfirmPasswordVisible((value) => !value)}
                      size="sm"
                      type="button"
                      variant="ghost"
                      className="min-w-0 px-2 text-stone-500 hover:text-stone-900"
                    >
                      {isConfirmPasswordVisible ? (
                        <EyeSlashIcon aria-hidden size={18} />
                      ) : (
                        <EyeIcon aria-hidden size={18} />
                      )}
                    </Button>
                  </InputGroup.Suffix>
                </InputGroup>
              )}
            />
            {errors.confirmPassword?.message ? (
              <p className="text-sm text-red-600">{errors.confirmPassword.message}</p>
            ) : null}
          </div>

          {errors.root?.message ? (
            <Alert status="danger">
              <Alert.Indicator />
              <Alert.Content>
                <Alert.Title>{text.auth.signUp.failureTitle}</Alert.Title>
                <Alert.Description>{errors.root.message}</Alert.Description>
              </Alert.Content>
            </Alert>
          ) : null}

          <Button fullWidth isPending={isSubmitting} type="submit">
            {text.auth.signUp.heading}
          </Button>

          <div className="pt-1 text-sm">
            <Link
              className="block text-stone-600 transition hover:text-stone-900"
              to="/auth/sign-in"
            >
              {text.auth.signUp.haveAccount}
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
