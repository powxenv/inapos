import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, isTextUIPart, type UIMessage } from "ai";
import { useEffect, useState } from "react";
import { openUrl } from "@tauri-apps/plugin-opener";
import { Alert, Button, Card, ScrollShadow, Spinner } from "@heroui/react";
import { ArrowClockwiseIcon } from "@phosphor-icons/react/dist/csr/ArrowClockwise";
import { DownloadSimpleIcon } from "@phosphor-icons/react/dist/csr/DownloadSimple";
import { ArrowUpIcon } from "@phosphor-icons/react/dist/csr/ArrowUp";
import TextareaAutosize from "react-textarea-autosize";
import { Streamdown } from "streamdown";
import { authClient } from "../../auth";
import { env } from "../../env";
import { buildAiChatStreamUrl, initializeAiRuntime } from "../../lib/assistant";
import {
  getAiProviderStatus,
  readPreferredAiProvider,
  readPreferredModel,
  type AiProvider,
  type AiProviderStatus,
} from "../../lib/ai-provider";
import { getOllamaStatus, isTauriRuntime, type OllamaStatus } from "../../lib/ollama";

type AssistantModuleProps = {
  minimal?: boolean;
  storeId: string;
};

const starterPrompts = [
  "Summarize today’s sales",
  "What should I restock tomorrow?",
  "Show me how checkout works",
  "What was my biggest expense this month?",
  "Show the 5 best-selling items this week",
  "Who shops here most often this month?",
  "Which stock needs attention right now?",
  "Suggest an offer for slow-moving items",
] as const;

const initialMessages: UIMessage[] = [
  {
    id: "assistant-welcome",
    parts: [
      {
        text: "Hi. I can help you understand today’s numbers, spot low stock, and find your way around the store.",
        type: "text",
      },
    ],
    role: "assistant",
  },
];

function describeUnavailableAssistant(
  provider: AiProvider,
  hasSelectedModel: boolean,
  providerStatus: AiProviderStatus | null,
  status: OllamaStatus | null,
): string {
  if (provider === "openrouter" && !providerStatus?.openrouterConfigured) {
    return "Finish setting up the assistant in Store > Assistant setup.";
  }

  if (!hasSelectedModel) {
    return "Choose an assistant option in Store > Assistant setup.";
  }

  if (provider === "ollama") {
    return status?.reason ?? "The assistant on this device is not ready yet.";
  }

  return "The assistant is not ready yet. Check Store > Assistant setup.";
}

function findDefaultModel(status: OllamaStatus): string {
  return status.availableModels[0]?.name ?? "";
}

function readAssistantPreferences(): {
  model: string;
  provider: AiProvider;
} {
  const provider = readPreferredAiProvider();

  return {
    model: readPreferredModel(provider),
    provider,
  };
}

function extractMessageText(message: UIMessage): string {
  return message.parts
    .filter(isTextUIPart)
    .map((part) => part.text)
    .join("");
}

function findLatestAssistantMessage(messages: UIMessage[]): UIMessage | null {
  for (let index = messages.length - 1; index >= 0; index -= 1) {
    const message = messages[index];

    if (message.role === "assistant") {
      return message;
    }
  }

  return null;
}

function createAssistantTransport(
  provider: AiProvider,
  model: string,
  storeId: string,
): DefaultChatTransport<UIMessage> {
  return new DefaultChatTransport({
    api: buildAiChatStreamUrl({
      model,
      provider,
      storeId,
    }),
  });
}

export function AssistantModule({ minimal = false, storeId }: AssistantModuleProps) {
  const initialPreferences = readAssistantPreferences();
  const [inputValue, setInputValue] = useState("");
  const [assistantError, setAssistantError] = useState<string | null>(null);
  const [isInitializingAssistant, setIsInitializingAssistant] = useState(false);
  const [isAssistantReady, setIsAssistantReady] = useState(false);
  const [status, setStatus] = useState<OllamaStatus | null>(null);
  const [providerStatus, setProviderStatus] = useState<AiProviderStatus | null>(null);
  const [statusError, setStatusError] = useState<string | null>(null);
  const [isLoadingStatus, setIsLoadingStatus] = useState(true);
  const [selectedProvider, setSelectedProvider] = useState<AiProvider>(initialPreferences.provider);
  const [selectedModel, setSelectedModel] = useState(initialPreferences.model);
  const trimmedInput = inputValue.trim();
  const chatId = `${storeId}:${selectedProvider}:${selectedModel || "unconfigured"}`;
  const activeModel = selectedModel || "unconfigured";
  const {
    clearError,
    error: chatError,
    messages,
    sendMessage,
    status: chatStatus,
  } = useChat({
    experimental_throttle: 50,
    id: chatId,
    messages: initialMessages,
    transport: createAssistantTransport(selectedProvider, activeModel, storeId),
  });
  const canUseAssistant =
    selectedProvider === "openrouter"
      ? Boolean(providerStatus?.openrouterConfigured)
      : Boolean(status?.canUse);
  const hasSelectedModel = selectedModel.length > 0;
  const canSendMessage = canUseAssistant && hasSelectedModel;
  const isSendingMessage = chatStatus === "submitted" || chatStatus === "streaming";
  const resolvedAssistantError = assistantError ?? chatError?.message ?? null;
  const latestAssistantMessage = findLatestAssistantMessage(messages);
  const latestAssistantBody = latestAssistantMessage
    ? extractMessageText(latestAssistantMessage)
    : "";
  const showLoadingBubble =
    isInitializingAssistant ||
    (isSendingMessage &&
      (messages[messages.length - 1]?.role !== "assistant" || latestAssistantBody.length === 0));
  const showStarterPromptSection = true;

  async function loadOllamaStatus(): Promise<void> {
    setIsLoadingStatus(true);
    setStatusError(null);

    try {
      const preferences = readAssistantPreferences();
      const [nextStatus, nextProviderStatus] = await Promise.all([
        getOllamaStatus(),
        getAiProviderStatus(),
      ]);

      setSelectedProvider(preferences.provider);
      setSelectedModel(preferences.model);
      setStatus(nextStatus);
      setProviderStatus(nextProviderStatus);
    } catch (error) {
      setStatusError(error instanceof Error ? error.message : "We couldn't check the assistant.");
      setStatus(null);
      setProviderStatus(null);
    } finally {
      setIsLoadingStatus(false);
    }
  }

  useEffect(() => {
    void loadOllamaStatus();
  }, []);

  async function handleInstallOllama(): Promise<void> {
    if (!isTauriRuntime()) {
      return;
    }

    await openUrl("https://ollama.com/download");
  }

  useEffect(() => {
    if (!status?.availableModels.length) {
      return;
    }

    if (selectedProvider !== "ollama") {
      return;
    }

    const preferredModel = readPreferredModel("ollama");
    const installedModels = new Set(status.availableModels.map((model) => model.name));
    const nextModel = installedModels.has(preferredModel)
      ? preferredModel
      : findDefaultModel(status);

    if (nextModel && nextModel !== selectedModel) {
      setSelectedModel(nextModel);
    }
  }, [selectedModel, selectedProvider, status]);

  async function prepareAssistantRuntime(): Promise<boolean> {
    if (!canUseAssistant) {
      setIsAssistantReady(false);
      return false;
    }

    setIsInitializingAssistant(true);
    setAssistantError(null);

    try {
      const session = await authClient.getSession();
      const sessionToken = session.data?.session?.token?.trim();

      if (!sessionToken) {
        throw new Error("Please sign in again to use the assistant.");
      }

      const runtimeStatus = await initializeAiRuntime(
        sessionToken,
        env.VITE_POWERSYNC_URL,
        env.VITE_NEON_DATA_API_URL,
      );

      if (selectedProvider === "ollama" && !runtimeStatus.ready) {
        throw new Error(runtimeStatus.reason ?? "The assistant isn't ready yet.");
      }

      setIsAssistantReady(true);
      return true;
    } catch (error) {
      setAssistantError(
        error instanceof Error ? error.message : "We couldn't get the assistant ready.",
      );
      setIsAssistantReady(false);
      return false;
    } finally {
      setIsInitializingAssistant(false);
    }
  }

  useEffect(() => {
    if (!canUseAssistant) {
      return;
    }

    void prepareAssistantRuntime();
  }, [canUseAssistant, selectedProvider]);

  async function submitMessage(rawValue: string): Promise<void> {
    const value = rawValue.trim();

    if (!value || !canSendMessage || isSendingMessage) {
      return;
    }

    setAssistantError(null);
    clearError();
    setInputValue("");

    if (!isAssistantReady) {
      const ready = await prepareAssistantRuntime();

      if (!ready) {
        return;
      }
    }

    try {
      await sendMessage({
        text: value,
      });
    } catch (error) {
      setAssistantError(error instanceof Error ? error.message : "We couldn't send your message.");
    }
  }

  if (isLoadingStatus) {
    return (
      <div className={`flex min-h-[320px] items-center justify-center ${minimal ? "px-4" : ""}`}>
        <p className="text-sm text-stone-500">Getting the assistant ready...</p>
      </div>
    );
  }

  if (statusError) {
    return (
      <div className="space-y-4">
        <Alert status="danger">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>The assistant isn’t ready yet</Alert.Title>
            <Alert.Description>{statusError}</Alert.Description>
          </Alert.Content>
        </Alert>
        <Button onPress={() => void loadOllamaStatus()} variant="outline">
          <ArrowClockwiseIcon aria-hidden size={16} />
          Try again
        </Button>
      </div>
    );
  }

  if (!status || !providerStatus || !canUseAssistant || !hasSelectedModel) {
    return (
      <div
        className={`${minimal ? "flex min-h-[320px] items-center justify-center px-4" : "space-y-4"}`}
      >
        <div className="space-y-4">
          <Alert status="warning">
            <Alert.Indicator />
            <Alert.Content>
              <Alert.Title>The assistant isn’t available yet</Alert.Title>
              <Alert.Description>
                {describeUnavailableAssistant(
                  selectedProvider,
                  hasSelectedModel,
                  providerStatus,
                  status,
                )}
              </Alert.Description>
            </Alert.Content>
          </Alert>
          {selectedProvider === "ollama" && status?.isDesktop && !status.ollamaInstalled ? (
            <Button onPress={() => void handleInstallOllama()}>
              <DownloadSimpleIcon aria-hidden size={16} />
              Set up on this device
            </Button>
          ) : null}
        </div>
      </div>
    );
  }

  const content = (
    <div className="space-y-4">
      {!minimal && resolvedAssistantError ? (
        <Alert status="danger">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>The assistant can’t reply right now</Alert.Title>
            <Alert.Description>{resolvedAssistantError}</Alert.Description>
          </Alert.Content>
        </Alert>
      ) : null}

      {showStarterPromptSection ? (
        <div
          className={`mx-auto flex w-full max-w-3xl flex-col items-center ${minimal ? "space-y-3" : "space-y-2"}`}
        >
          <div className="space-y-1 text-center">
            <p className="text-sm font-medium text-stone-700">Start with a quick question</p>
            <p className="text-sm text-stone-500">
              {minimal
                ? "Pick the one that feels closest to what you need."
                : "Use one of these to start faster."}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {starterPrompts.map((prompt) => (
              <Button
                className={`${minimal ? "rounded-full px-4" : "rounded-full"}`}
                isDisabled={!canSendMessage || isInitializingAssistant || isSendingMessage}
                key={prompt}
                onPress={() => void submitMessage(prompt)}
                size={minimal ? "md" : "sm"}
                variant="outline"
              >
                {prompt}
              </Button>
            ))}
          </div>
        </div>
      ) : null}

      {minimal && resolvedAssistantError ? (
        <Alert status="danger">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>The assistant can’t reply right now</Alert.Title>
            <Alert.Description>{resolvedAssistantError}</Alert.Description>
          </Alert.Content>
        </Alert>
      ) : null}

      <ScrollShadow
        className={`${minimal ? "h-[calc(100vh-290px)]" : "h-[min(68vh,720px)]"} px-4 py-4`}
        hideScrollBar
      >
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
          {messages.map((message) => {
            const isAssistant = message.role === "assistant";
            const body = extractMessageText(message);
            const isLatestAssistantMessage = latestAssistantMessage?.id === message.id;

            if (!body) {
              return null;
            }

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
                  {isAssistant ? (
                    <div className="space-y-3">
                      <Streamdown
                        animated
                        className="streamdown text-sm leading-7 [&_a]:text-stone-900 [&_a]:underline [&_code]:rounded-md [&_code]:bg-stone-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_pre]:rounded-2xl [&_pre]:border [&_pre]:border-stone-200 [&_pre]:bg-stone-950 [&_pre]:text-stone-50"
                        isAnimating={isLatestAssistantMessage && chatStatus === "streaming"}
                        mode="streaming"
                      >
                        {body}
                      </Streamdown>
                      {isLatestAssistantMessage && chatStatus === "streaming" ? (
                        <div className="flex items-center gap-2 text-xs text-stone-500">
                          <Spinner color="current" size="sm" />
                          <span>Writing a reply</span>
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <p className="whitespace-pre-wrap">{body}</p>
                  )}
                </div>
              </div>
            );
          })}
          {showLoadingBubble ? (
            <div className="flex gap-3 justify-start">
              <div className="max-w-3xl rounded-[28px] rounded-tl-md border border-stone-200 bg-white px-4 py-4 text-stone-800">
                <div className="flex items-center gap-3">
                  <Spinner color="accent" size="sm" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-stone-900">
                      {isInitializingAssistant ? "Getting ready" : "Thinking"}
                    </p>
                    <p className="text-xs text-stone-500">
                      {isInitializingAssistant
                        ? "Checking everything before your reply starts."
                        : "The reply will appear here as soon as it starts."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
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
                    void submitMessage(inputValue);
                  }
                }}
                placeholder="Ask anything about your store"
                value={inputValue}
              />
              <Button
                aria-label="Send message"
                className="mb-1 mr-1 size-10 rounded-full"
                isDisabled={
                  !trimmedInput || !canSendMessage || isInitializingAssistant || isSendingMessage
                }
                onPress={() => void submitMessage(inputValue)}
              >
                <ArrowUpIcon aria-hidden size={16} />
              </Button>
            </div>
          </div>

          {minimal ? null : (
            <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500">
              <p>Press Enter to send. Press Shift + Enter for a new line.</p>
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
