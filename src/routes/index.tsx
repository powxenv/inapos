import { useEffect, useState } from "react";
import { Navigate, createFileRoute } from "@tanstack/react-router";
import { Alert, Button, CloseButton } from "@heroui/react";
import { useI18n } from "../lib/i18n";
import { useOrganizationGate } from "../lib/organization";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { text } = useI18n();
  const gate = useOrganizationGate();
  const [isGateAlertVisible, setIsGateAlertVisible] = useState(true);
  const gateErrorMessage = gate.status === "error" ? gate.message : null;

  useEffect(() => {
    if (gate.status === "error") {
      setIsGateAlertVisible(true);
    }
  }, [gate.status, gateErrorMessage]);

  if (gate.status === "loading" || gate.status === "activating") {
    return (
      <main className="flex min-h-screen items-center justify-center p-6">
        <p className="text-sm text-stone-500">{gate.message ?? text.root.preparing}</p>
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
          {isGateAlertVisible ? (
            <Alert status="danger">
              <Alert.Indicator />
              <Alert.Content>
                <Alert.Title>{text.root.storeNotReadyTitle}</Alert.Title>
                <Alert.Description>{gate.message}</Alert.Description>
              </Alert.Content>
              <CloseButton aria-label="Close" onPress={() => setIsGateAlertVisible(false)} />
            </Alert>
          ) : null}
          <Button fullWidth onPress={() => void gate.retry()}>
            {text.common.actions.tryAgain}
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
