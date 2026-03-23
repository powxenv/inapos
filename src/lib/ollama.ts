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
    description: "A lighter option for getting started on this device.",
    minimumRequirement: "Suggested minimum: 8 GB memory, 4 CPU cores, and 3 GB free space.",
    name: "qwen3.5:0.8b",
    sizeLabel: "~1 GB",
  },
] as const;

export function isTauriRuntime() {
  return typeof window !== "undefined" && "__TAURI_INTERNALS__" in window;
}

function isMobilePlatform() {
  if (typeof navigator === "undefined") {
    return false;
  }

  const navigatorValue: unknown = navigator;

  if (
    typeof navigatorValue === "object" &&
    navigatorValue !== null &&
    "userAgentData" in navigatorValue
  ) {
    const userAgentData = navigatorValue.userAgentData;

    if (
      typeof userAgentData === "object" &&
      userAgentData !== null &&
      "mobile" in userAgentData &&
      userAgentData.mobile === true
    ) {
      return true;
    }
  }

  if (/android|iphone|ipad|ipod/i.test(navigator.userAgent)) {
    return true;
  }

  return false;
}

export function isDesktopAppRuntime() {
  return isTauriRuntime() && !isMobilePlatform();
}

export async function getOllamaStatus() {
  if (!isDesktopAppRuntime()) {
    return ollamaStatusSchema.parse({
      availableModels: [],
      canUse: false,
      isDesktop: false,
      ollamaInstalled: false,
      ollamaRunning: false,
      platform: isTauriRuntime() ? "mobile" : "web",
      reason: "The assistant is only available in the desktop app.",
    });
  }

  const result = await invoke("get_ollama_status");
  return ollamaStatusSchema.parse(result);
}

export async function startOllamaPull(model: string) {
  if (!isDesktopAppRuntime()) {
    throw new Error("Downloads are only available in the desktop app.");
  }

  await invoke("start_ollama_pull", { model });
}

export async function getOllamaPullProgress() {
  if (!isDesktopAppRuntime()) {
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
