import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { createHashHistory, RouterProvider, createRouter } from "@tanstack/react-router";

import { AppProviders } from "./lib/powersync";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree, history: createHashHistory() });
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element tidak ditemukan.");
}

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  </React.StrictMode>,
);
