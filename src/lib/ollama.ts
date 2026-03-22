import { invoke } from "@tauri-apps/api/core";
import { z } from "zod";

const ollamaModelSchema = z.object({
  modifiedAt: z.string().nullable().optional(),
  name: z.string(),
  size: z.number().nullable().optional(),
});

const ollamaStatusSchema = z.object({
  availableModels: z.array(ollamaModelSchema),
  canUse: z.boolean(),
  isDesktop: z.boolean(),
  ollamaInstalled: z.boolean(),
  ollamaRunning: z.boolean(),
  platform: z.string(),
  reason: z.string().nullable().optional(),
});

const ollamaPullProgressSchema = z.object({
  active: z.boolean(),
  completed: z.number().nullable().optional(),
  done: z.boolean(),
  error: z.string().nullable().optional(),
  model: z.string().nullable().optional(),
  status: z.string().nullable().optional(),
  total: z.number().nullable().optional(),
});

export type OllamaModel = z.infer<typeof ollamaModelSchema>;
export type OllamaPullProgress = z.infer<typeof ollamaPullProgressSchema>;
export type OllamaStatus = z.infer<typeof ollamaStatusSchema>;

export const recommendedOllamaModels = [
  {
    description: "Paling ringan untuk memulai chat lokal di desktop dengan resource rendah.",
    minimumRequirement: "Rekomendasi minimum: RAM 8 GB, CPU 4 core, ruang kosong 3 GB.",
    name: "qwen3.5:0.8b",
    sizeLabel: "~1 GB",
  },
] as const;

export function isTauriRuntime() {
  return typeof window !== "undefined" && "__TAURI_INTERNALS__" in window;
}

export async function getOllamaStatus() {
  if (!isTauriRuntime()) {
    return ollamaStatusSchema.parse({
      availableModels: [],
      canUse: false,
      isDesktop: false,
      ollamaInstalled: false,
      ollamaRunning: false,
      platform: "web",
      reason: "Asisten AI hanya tersedia di desktop app.",
    });
  }

  const result = await invoke("get_ollama_status");
  return ollamaStatusSchema.parse(result);
}

export async function startOllamaPull(model: string) {
  if (!isTauriRuntime()) {
    throw new Error("Download model hanya tersedia di desktop app.");
  }

  await invoke("start_ollama_pull", { model });
}

export async function getOllamaPullProgress() {
  if (!isTauriRuntime()) {
    return ollamaPullProgressSchema.parse({
      active: false,
      completed: null,
      done: false,
      error: null,
      model: null,
      status: null,
      total: null,
    });
  }

  const result = await invoke("get_ollama_pull_progress");
  return ollamaPullProgressSchema.parse(result);
}
