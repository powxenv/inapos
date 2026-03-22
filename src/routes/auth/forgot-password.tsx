import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Alert, Button, InputGroup } from "@heroui/react";
import { Link, Navigate, createFileRoute } from "@tanstack/react-router";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/csr/EnvelopeSimple";
import { neon } from "../../lib/powersync";

const forgotPasswordSchema = z.object({
  email: z.email("Format email tidak valid."),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export const Route = createFileRoute("/auth/forgot-password")({
  component: RouteComponent,
});

function RouteComponent() {
  const session = neon.auth.useSession();
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
      const { error } = await neon.auth.requestPasswordReset({
        email,
        redirectTo: `${window.location.origin}/auth/sign-in`,
      });

      if (error) {
        setError("root", {
          type: "server",
          message: error.message ?? "Gagal mengirim tautan reset.",
        });
        return;
      }

      setNoticeMessage("Tautan reset kata sandi sudah dikirim ke email tersebut.");
    } catch (error) {
      setError("root", {
        type: "server",
        message: error instanceof Error ? error.message : "Gagal mengirim tautan reset.",
      });
    }
  });

  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50 px-4 py-10">
      <div className="w-full max-w-sm space-y-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-stone-900">Lupa kata sandi</h1>
          <p className="text-sm text-stone-500">
            Masukkan email akun untuk menerima tautan reset kata sandi.
          </p>
        </div>

        <form className="space-y-4" onSubmit={onSubmit}>
          <div className="space-y-2">
            <label
              className="block text-sm font-medium text-stone-700"
              htmlFor="forgot-password-email"
            >
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
                    id="forgot-password-email"
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

          {errors.root?.message ? (
            <Alert status="danger">
              <Alert.Indicator />
              <Alert.Content>
                <Alert.Title>Permintaan gagal</Alert.Title>
                <Alert.Description>{errors.root.message}</Alert.Description>
              </Alert.Content>
            </Alert>
          ) : null}

          {noticeMessage ? (
            <Alert status="success">
              <Alert.Indicator />
              <Alert.Content>
                <Alert.Title>Email terkirim</Alert.Title>
                <Alert.Description>{noticeMessage}</Alert.Description>
              </Alert.Content>
            </Alert>
          ) : null}

          <Button fullWidth isPending={isSubmitting} type="submit">
            Kirim tautan reset
          </Button>

          <div className="pt-1 text-sm">
            <Link
              className="block text-stone-600 transition hover:text-stone-900"
              to="/auth/sign-in"
            >
              Kembali ke halaman masuk
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
