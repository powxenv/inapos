import { NeonAuthUIProvider } from "@neondatabase/neon-js/auth/react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { authClient } from "../auth";
import { I18nProvider } from "../lib/i18n";
import { PowerSyncSessionBridge } from "../lib/powersync";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <NeonAuthUIProvider authClient={authClient} defaultTheme="light">
      <I18nProvider>
        <PowerSyncSessionBridge />
        <Outlet />
      </I18nProvider>
    </NeonAuthUIProvider>
  );
}
