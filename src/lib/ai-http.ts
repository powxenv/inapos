import { isDesktopAppRuntime } from "./ollama";

const AI_HTTP_SERVER_PORT = 32456;
const AI_HTTP_BASE_URL = `http://127.0.0.1:${AI_HTTP_SERVER_PORT}/api/ai`;

type AiHttpErrorPayload = {
  message?: string;
};

function sleep(durationMs: number) {
  return new Promise((resolve) => window.setTimeout(resolve, durationMs));
}

async function readAiHttpError(response: Response) {
  try {
    const payload = (await response.json()) as AiHttpErrorPayload;

    if (typeof payload.message === "string" && payload.message.trim()) {
      return payload.message;
    }
  } catch {}

  const fallback = await response.text().catch(() => "");
  return fallback.trim() || "We couldn't complete that request.";
}

export function buildAiHttpUrl(path: string) {
  return `${AI_HTTP_BASE_URL}${path}`;
}

export async function aiHttpFetch(path: string, init?: RequestInit) {
  if (!isDesktopAppRuntime()) {
    throw new Error("The assistant is only available in the desktop app.");
  }

  let lastError: unknown = null;

  for (let attempt = 0; attempt < 10; attempt += 1) {
    try {
      const response = await fetch(buildAiHttpUrl(path), init);

      if (!response.ok) {
        throw new Error(await readAiHttpError(response));
      }

      return response;
    } catch (error) {
      lastError = error;

      if (attempt === 9) {
        break;
      }

      await sleep(150);
    }
  }

  throw lastError instanceof Error ? lastError : new Error("The assistant isn't ready yet.");
}
