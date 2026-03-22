import { createClient } from "@neondatabase/neon-js";
import { createAuthClient } from "@neondatabase/neon-js/auth";
import { BetterAuthReactAdapter } from "@neondatabase/neon-js/auth/react";
import { env } from "./env";

export const authClient = createAuthClient(env.VITE_NEON_AUTH_URL, {
  adapter: BetterAuthReactAdapter(),
});

export const neonClient = createClient({
  auth: {
    adapter: BetterAuthReactAdapter(),
    url: env.VITE_NEON_AUTH_URL,
  },
  dataApi: {
    url: env.VITE_NEON_DATA_API_URL,
  },
});
