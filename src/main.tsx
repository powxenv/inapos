import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { createBrowserHistory, RouterProvider, createRouter } from "@tanstack/react-router";

import { AppProviders } from "./lib/powersync";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree, history: createBrowserHistory() });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  </React.StrictMode>,
);
