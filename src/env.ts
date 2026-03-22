import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  clientPrefix: "VITE_",
  client: {
    VITE_NEON_AUTH_URL: z.url(),
    VITE_NEON_DATA_API_URL: z.url(),
    VITE_POWERSYNC_URL: z.url(),
  },
  runtimeEnvStrict: {
    VITE_NEON_AUTH_URL: import.meta.env.VITE_NEON_AUTH_URL,
    VITE_NEON_DATA_API_URL: import.meta.env.VITE_NEON_DATA_API_URL,
    VITE_POWERSYNC_URL: import.meta.env.VITE_POWERSYNC_URL,
  },
  emptyStringAsUndefined: true,
});
