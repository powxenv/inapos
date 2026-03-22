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

const signInSchema = z.object({
  email: z.email("Format email tidak valid."),
  password: z.string().min(1, "Kata sandi wajib diisi."),
});

type SignInFormValues = z.infer<typeof signInSchema>;

export const Route = createFileRoute("/auth/sign-in")({
  component: RouteComponent,
});

function RouteComponent() {
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
          message: error.message ?? "Gagal masuk ke aplikasi.",
        });
        return;
      }

      void navigate({ replace: true, to: "/" });
    } catch (error) {
      setError("root", {
        type: "server",
        message: error instanceof Error ? error.message : "Gagal masuk ke aplikasi.",
      });
    }
  });

  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50 px-4 py-10">
      <div className="w-full max-w-sm space-y-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-stone-900">Masuk</h1>
          <p className="text-sm text-stone-500">Masuk ke akun toko Anda.</p>
        </div>

        <form className="space-y-4" onSubmit={onSubmit}>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-stone-700" htmlFor="sign-in-email">
              Email
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
                    aria-label="Email"
                    autoComplete="email"
                    className="w-full"
                    id="sign-in-email"
                    onBlur={field.onBlur}
                    onChange={field.onChange}
                    placeholder="nama@toko.com"
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
              Kata sandi
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
                    aria-label="Kata sandi"
                    autoComplete="current-password"
                    className="w-full"
                    id="sign-in-password"
                    onBlur={field.onBlur}
                    onChange={field.onChange}
                    placeholder="Masukkan kata sandi"
                    type={isPasswordVisible ? "text" : "password"}
                    value={field.value}
                  />
                  <InputGroup.Suffix className="pr-0">
                    <Button
                      aria-label={
                        isPasswordVisible ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"
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
                <Alert.Title>Masuk gagal</Alert.Title>
                <Alert.Description>{errors.root.message}</Alert.Description>
              </Alert.Content>
            </Alert>
          ) : null}

          <Button fullWidth isPending={isSubmitting} type="submit">
            Masuk
          </Button>

          <div className="space-y-2 pt-1 text-sm">
            <Link
              className="block text-stone-600 transition hover:text-stone-900"
              to="/auth/forgot-password"
            >
              Lupa kata sandi?
            </Link>
            <Link
              className="block text-stone-600 transition hover:text-stone-900"
              to="/auth/sign-up"
            >
              Belum punya akun? Daftar
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
