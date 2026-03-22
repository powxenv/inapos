import { useEffect, useState } from "react";
import { openUrl } from "@tauri-apps/plugin-opener";
import { Alert, Button, Card, ScrollShadow } from "@heroui/react";
import { ArrowClockwiseIcon } from "@phosphor-icons/react/dist/csr/ArrowClockwise";
import { DownloadSimpleIcon } from "@phosphor-icons/react/dist/csr/DownloadSimple";
import { ArrowUpIcon } from "@phosphor-icons/react/dist/csr/ArrowUp";
import { ClockCounterClockwiseIcon } from "@phosphor-icons/react/dist/csr/ClockCounterClockwise";
import TextareaAutosize from "react-textarea-autosize";
import {
  getOllamaStatus,
  isTauriRuntime,
  readPreferredOllamaModel,
  savePreferredOllamaModel,
  type OllamaStatus,
} from "../../lib/ollama";

type AssistantMessage = {
  body: string;
  id: string;
  role: "assistant" | "user";
};

type AssistantModuleProps = {
  minimal?: boolean;
};

const starterPrompts = [
  "Ringkas penjualan hari ini",
  "Barang apa yang perlu direstok besok?",
  "Jelaskan cara pakai mode kasir",
  "Pengeluaran mana yang paling besar bulan ini?",
] as const;

const initialMessages: AssistantMessage[] = [
  {
    body: "Halo. Saya bisa bantu merangkum kondisi toko, memberi saran restok, atau menjelaskan cara pakai menu yang ada.",
    id: "assistant-welcome",
    role: "assistant",
  },
];

function findDefaultModel(status: OllamaStatus) {
  return status.availableModels[0]?.name ?? "";
}

export function AssistantModule({ minimal = false }: AssistantModuleProps) {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<AssistantMessage[]>(initialMessages);
  const [status, setStatus] = useState<OllamaStatus | null>(null);
  const [statusError, setStatusError] = useState<string | null>(null);
  const [isLoadingStatus, setIsLoadingStatus] = useState(true);
  const [selectedModel, setSelectedModel] = useState(readPreferredOllamaModel);
  const trimmedInput = inputValue.trim();

  async function loadOllamaStatus() {
    setIsLoadingStatus(true);
    setStatusError(null);

    try {
      const nextStatus = await getOllamaStatus();
      setStatus(nextStatus);
    } catch (error) {
      setStatusError(error instanceof Error ? error.message : "Gagal memeriksa Ollama.");
      setStatus(null);
    } finally {
      setIsLoadingStatus(false);
    }
  }

  useEffect(() => {
    void loadOllamaStatus();
  }, []);

  async function handleInstallOllama() {
    if (!isTauriRuntime()) {
      return;
    }

    await openUrl("https://ollama.com/download");
  }

  useEffect(() => {
    if (!status?.availableModels.length) {
      return;
    }

    const preferredModel = readPreferredOllamaModel();
    const installed = new Set(status.availableModels.map((model) => model.name));
    const nextModel = installed.has(preferredModel) ? preferredModel : findDefaultModel(status);

    if (!nextModel || nextModel === selectedModel) {
      return;
    }

    setSelectedModel(nextModel);
    savePreferredOllamaModel(nextModel);
  }, [selectedModel, status]);

  function sendMessage(rawValue: string) {
    const value = rawValue.trim();

    if (!value || !status?.canUse) {
      return;
    }

    const userMessage: AssistantMessage = {
      body: value,
      id: `user-${crypto.randomUUID()}`,
      role: "user",
    };
    const assistantPlaceholderMessage: AssistantMessage = {
      body: selectedModel
        ? `Model ${selectedModel} sudah dipilih, tetapi chat Ollama asli belum disambungkan.`
        : "Chat Ollama asli belum disambungkan.",
      id: `assistant-${crypto.randomUUID()}`,
      role: "assistant",
    };

    setMessages((currentMessages) => [...currentMessages, userMessage, assistantPlaceholderMessage]);
    setInputValue("");
  }

  if (isLoadingStatus) {
    return (
      <div className={`flex min-h-[320px] items-center justify-center ${minimal ? "px-4" : ""}`}>
        <p className="text-sm text-stone-500">Memeriksa ketersediaan Ollama...</p>
      </div>
    );
  }

  if (statusError) {
    return (
      <div className="space-y-4">
        <Alert status="danger">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>Asisten AI belum siap</Alert.Title>
            <Alert.Description>{statusError}</Alert.Description>
          </Alert.Content>
        </Alert>
        <Button onPress={() => void loadOllamaStatus()} variant="outline">
          <ArrowClockwiseIcon aria-hidden size={16} />
          Coba lagi
        </Button>
      </div>
    );
  }

  if (!status || !status.canUse) {
    return (
      <div className={`${minimal ? "flex min-h-[320px] items-center justify-center px-4" : "space-y-4"}`}>
        <div className="space-y-4">
          <Alert status="warning">
            <Alert.Indicator />
            <Alert.Content>
              <Alert.Title>Asisten AI belum bisa dipakai</Alert.Title>
              <Alert.Description>
                {status?.reason ??
                  "Modul ini hanya bisa dipakai di desktop app dengan Ollama yang terpasang, aktif, dan memiliki model terinstal."}
              </Alert.Description>
            </Alert.Content>
          </Alert>
          {status?.isDesktop && !status.ollamaInstalled ? (
            <Button onPress={() => void handleInstallOllama()}>
              <DownloadSimpleIcon aria-hidden size={16} />
              Install Ollama
            </Button>
          ) : null}
        </div>
      </div>
    );
  }

  const content = (
    <div className="space-y-4">
      {minimal ? null : (
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">Asisten</h3>
          <p className="text-sm text-stone-500">
            Chat memakai Ollama lokal. Pengaturan model dipindahkan ke menu Model AI.
          </p>
        </div>
      )}

      {minimal ? null : (
        <div className="grid gap-3">
          <Alert status="success">
            <Alert.Indicator />
            <Alert.Content>
              <Alert.Title>Ollama siap dipakai</Alert.Title>
              <Alert.Description>
                Service aktif di desktop ini. Model default saat ini: {selectedModel || "belum dipilih"}.
              </Alert.Description>
            </Alert.Content>
          </Alert>
        </div>
      )}

      {minimal ? null : (
        <div className="flex flex-wrap gap-2">
          {starterPrompts.map((prompt) => (
            <Button
              className="rounded-full"
              key={prompt}
              onPress={() => sendMessage(prompt)}
              variant="outline"
            >
              {prompt}
            </Button>
          ))}
        </div>
      )}

      <ScrollShadow
        className={`${minimal ? "h-[calc(100vh-220px)]" : "h-[min(68vh,720px)]"} px-4 py-4`}
        hideScrollBar
      >
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
          {messages.map((message) => {
            const isAssistant = message.role === "assistant";

            return (
              <div
                className={`flex gap-3 ${isAssistant ? "justify-start" : "justify-end"}`}
                key={message.id}
              >
                <div
                  className={`max-w-3xl rounded-[28px] px-4 py-3 text-sm leading-7 ${
                    isAssistant
                      ? "rounded-tl-md border border-stone-200 bg-white text-stone-800"
                      : "rounded-tr-md bg-stone-950 text-stone-50"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollShadow>

      <div className={`${minimal ? "" : "border-t border-stone-200 pt-4"}`}>
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-3">
          <div className="rounded-[28px] border border-stone-200 bg-stone-50 p-2 shadow-sm">
            <div className="flex items-end gap-3">
              <TextareaAutosize
                className="max-h-56 min-h-[28px] w-full resize-none border-0 bg-transparent px-3 py-2 text-sm leading-7 text-stone-900 outline-none placeholder:text-stone-400"
                maxRows={8}
                minRows={1}
                onChange={(event) => setInputValue(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    sendMessage(inputValue);
                  }
                }}
                placeholder={`Tanyakan sesuatu dengan ${selectedModel}`}
                value={inputValue}
              />
              <Button
                aria-label="Kirim pesan"
                className="mb-1 mr-1 size-10 rounded-full"
                isDisabled={!trimmedInput}
                onPress={() => sendMessage(inputValue)}
              >
                <ArrowUpIcon aria-hidden size={16} />
              </Button>
            </div>
          </div>

          {minimal ? null : (
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500">
              <p>Tekan Enter untuk kirim, Shift + Enter untuk baris baru.</p>
              <div className="flex items-center gap-2">
                <ClockCounterClockwiseIcon aria-hidden size={14} />
                <span>Chat saat ini masih simulasi lokal, tetapi preferensi model sudah tersimpan.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (minimal) {
    return content;
  }

  return (
    <Card className="overflow-hidden border border-stone-200 bg-stone-50 shadow-none">
      <Card.Content className="p-4">{content}</Card.Content>
    </Card>
  );
}
