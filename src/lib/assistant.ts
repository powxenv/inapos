import { z } from "zod";
import { aiHttpFetch, buildAiHttpUrl } from "./ai-http";
import { type AiProvider } from "./ai-provider";
import { isTauriRuntime } from "./ollama";

const aiRuntimeStatusSchema = z.object({
  openrouterConfigured: z.boolean().optional().default(false),
  ready: z.boolean(),
  reason: z.string().nullable().optional(),
});

export type AiRuntimeStatus = z.infer<typeof aiRuntimeStatusSchema>;

export async function initializeAiRuntime(
  sessionToken: string,
  powersyncUrl: string,
  neonDataApiUrl: string,
) {
  if (!isTauriRuntime()) {
    return aiRuntimeStatusSchema.parse({
      ready: false,
      reason: "The assistant is only available in the desktop app.",
    });
  }

  const response = await aiHttpFetch("/runtime/initialize", {
    body: JSON.stringify({
      neonDataApiUrl,
      powersyncUrl,
      sessionToken,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  return aiRuntimeStatusSchema.parse(await response.json());
}

export function buildAiChatStreamUrl(input: {
  model: string;
  provider: AiProvider;
  storeId: string;
}) {
  if (!isTauriRuntime()) {
    throw new Error("Live assistant replies are only available in the desktop app.");
  }

  const model = z.string().min(1).parse(input.model);
  const provider = z.enum(["ollama", "openrouter"]).parse(input.provider);
  const storeId = z.string().min(1).parse(input.storeId);
  const searchParams = new URLSearchParams({
    model,
    provider,
    storeId,
  });

  return buildAiHttpUrl(`/chat/stream?${searchParams.toString()}`);
}
