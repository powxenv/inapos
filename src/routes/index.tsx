import { Navigate, createFileRoute } from "@tanstack/react-router";
import { Alert, Button } from "@heroui/react";
import { useOrganizationGate } from "../lib/organization";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const gate = useOrganizationGate();

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
              <Alert.Title>Data toko belum siap</Alert.Title>
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

  return (
    <Navigate replace to="/stores/$storeSlug" params={{ storeSlug: gate.organization.slug }} />
  );
}
