import { Outlet, createRootRoute } from "@tanstack/react-router";
import { PowerSyncSessionBridge } from "../lib/powersync";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <PowerSyncSessionBridge />
      <Outlet />
    </>
  );
}
