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

function wait(milliseconds: number) {
  return new Promise<void>((resolve) => {
    globalThis.setTimeout(resolve, milliseconds);
  });
}

export async function waitForActiveSession() {
  for (const delay of [0, 150, 300, 600, 900]) {
    if (delay > 0) {
      await wait(delay);
    }

    const session = await authClient.getSession();

    if (session.data?.session && session.data.user) {
      return session.data;
    }
  }

  return null;
}
