import { z } from "zod";
import { aiHttpFetch } from "./ai-http";
import { isTauriRuntime } from "./ollama";

const aiProviderSchema = z.enum(["ollama", "openrouter"]);

const aiProviderStatusSchema = z.object({
  openrouterConfigured: z.boolean(),
});

const openRouterPricingSchema = z.object({
  completion: z.string().optional(),
  prompt: z.string().optional(),
});

const openRouterArchitectureSchema = z.object({
  output_modalities: z.array(z.string()).optional(),
});

const openRouterModelSchema = z.object({
  architecture: openRouterArchitectureSchema.optional(),
  context_length: z.number().nullable().optional(),
  description: z.string().nullable().optional(),
  id: z.string(),
  name: z.string(),
  pricing: openRouterPricingSchema.optional(),
});

const openRouterModelsResponseSchema = z.object({
  data: z.array(openRouterModelSchema),
});

export const AI_PROVIDER_PREFERENCE_KEY = "inapos.ai-provider";
export const OLLAMA_MODEL_PREFERENCE_KEY = "inapos.ollama-model";
export const OPENROUTER_MODEL_PREFERENCE_KEY = "inapos.openrouter-model";

export type AiProvider = z.infer<typeof aiProviderSchema>;
export type AiProviderStatus = z.infer<typeof aiProviderStatusSchema>;
export type OpenRouterModel = z.infer<typeof openRouterModelSchema>;

function isZeroPrice(value: string | undefined) {
  return value === "0";
}

function isOpenRouterFreeModel(model: OpenRouterModel) {
  if (model.id === "openrouter/free") {
    return true;
  }

  const pricing = model.pricing;

  if (!pricing) {
    return false;
  }

  return isZeroPrice(pricing.prompt) && isZeroPrice(pricing.completion);
}

function supportsTextOutput(model: OpenRouterModel) {
  const outputModalities = model.architecture?.output_modalities;

  if (!outputModalities?.length) {
    return true;
  }

  return outputModalities.includes("text");
}

export function readPreferredAiProvider(): AiProvider {
  if (typeof window === "undefined") {
    return "ollama";
  }

  const value = window.localStorage.getItem(AI_PROVIDER_PREFERENCE_KEY) ?? "ollama";
  return aiProviderSchema.catch("ollama").parse(value);
}

export function savePreferredAiProvider(value: AiProvider) {
  window.localStorage.setItem(AI_PROVIDER_PREFERENCE_KEY, value);
}

export function readPreferredModel(provider: AiProvider) {
  if (typeof window === "undefined") {
    return "";
  }

  const key =
    provider === "openrouter" ? OPENROUTER_MODEL_PREFERENCE_KEY : OLLAMA_MODEL_PREFERENCE_KEY;

  return window.localStorage.getItem(key) ?? "";
}

export function savePreferredModel(provider: AiProvider, value: string) {
  const key =
    provider === "openrouter" ? OPENROUTER_MODEL_PREFERENCE_KEY : OLLAMA_MODEL_PREFERENCE_KEY;

  window.localStorage.setItem(key, value);
}

export async function getOpenRouterFreeModels() {
  const response = await fetch("https://openrouter.ai/api/v1/models");

  if (!response.ok) {
    throw new Error("We couldn't load the available assistant options.");
  }

  const parsed = openRouterModelsResponseSchema.parse(await response.json());

  return parsed.data
    .filter((model) => supportsTextOutput(model) && isOpenRouterFreeModel(model))
    .sort((left, right) => {
      if (left.id === "openrouter/free") {
        return -1;
      }

      if (right.id === "openrouter/free") {
        return 1;
      }

      return left.name.localeCompare(right.name);
    });
}

export async function getAiProviderStatus() {
  if (!isTauriRuntime()) {
    return aiProviderStatusSchema.parse({
      openrouterConfigured: false,
    });
  }

  const response = await aiHttpFetch("/provider-status");
  return aiProviderStatusSchema.parse(await response.json());
}

export async function saveOpenRouterApiKey(apiKey: string) {
  if (!isTauriRuntime()) {
    throw new Error("This option is only available in the desktop app.");
  }

  const response = await aiHttpFetch("/openrouter-api-key", {
    body: JSON.stringify({
      apiKey,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  return aiProviderStatusSchema.parse(await response.json());
}

export async function clearOpenRouterApiKey() {
  if (!isTauriRuntime()) {
    throw new Error("This option is only available in the desktop app.");
  }

  const response = await aiHttpFetch("/openrouter-api-key", {
    method: "DELETE",
  });

  return aiProviderStatusSchema.parse(await response.json());
}
