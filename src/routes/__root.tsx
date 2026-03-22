import { NeonAuthUIProvider } from "@neondatabase/neon-js/auth/react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { authClient } from "../auth";
import { PowerSyncSessionBridge } from "../lib/powersync";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <NeonAuthUIProvider authClient={authClient} defaultTheme="light">
      <PowerSyncSessionBridge />
      <Outlet />
    </NeonAuthUIProvider>
  );
}
