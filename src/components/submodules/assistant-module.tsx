import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, isTextUIPart, type ChatTransport, type UIMessage } from "ai";
import { useEffect, useState } from "react";
import { openUrl } from "@tauri-apps/plugin-opener";
import { Alert, Button, Card, CloseButton, ScrollShadow, Spinner } from "@heroui/react";
import { ArrowClockwiseIcon } from "@phosphor-icons/react/dist/csr/ArrowClockwise";
import { DownloadSimpleIcon } from "@phosphor-icons/react/dist/csr/DownloadSimple";
import { ArrowUpIcon } from "@phosphor-icons/react/dist/csr/ArrowUp";
import TextareaAutosize from "react-textarea-autosize";
import { Streamdown } from "streamdown";
import { authClient } from "../../auth";
import { env } from "../../env";
import { buildAiChatStreamUrl, initializeAiRuntime } from "../../lib/assistant";
import { useI18n } from "../../lib/i18n";
import {
  getAiProviderStatus,
  readPreferredAiProvider,
  readPreferredModel,
  type AiProvider,
  type AiProviderStatus,
} from "../../lib/ai-provider";
import { getOllamaStatus, isDesktopAppRuntime, type OllamaStatus } from "../../lib/ollama";

type AssistantModuleProps = {
  minimal?: boolean;
  storeId: string;
};

type I18nText = ReturnType<typeof useI18n>["text"];

function localizeAssistantReason(reason: string | null | undefined, text: I18nText): string | null {
  if (!reason) {
    return null;
  }

  if (
    reason === "The AI assistant is only available in the desktop app." ||
    reason === "The assistant is only available in the desktop app."
  ) {
    return text.modules.assistant.nonDesktopDescription;
  }

  if (
    reason === "Ollama is not installed or not available in the system PATH." ||
    reason === "Ollama is not running in this desktop app." ||
    reason === "Ollama is not running at 127.0.0.1:11434." ||
    reason === "Ollama is installed, but the service is not running." ||
    reason === "Ollama is running, but no models are installed yet."
  ) {
    return text.modules.assistant.runtimeNotReady;
  }

  if (reason === "OpenRouter API key is not saved yet.") {
    return text.modules.assistant.openRouterNotConfigured;
  }

  return reason;
}

function describeUnavailableAssistant(
  provider: AiProvider,
  hasSelectedModel: boolean,
  providerStatus: AiProviderStatus | null,
  status: OllamaStatus | null,
  text: I18nText,
): string {
  if (status?.isDesktop === false) {
    return text.modules.assistant.nonDesktopDescription;
  }

  if (provider === "openrouter" && !providerStatus?.openrouterConfigured) {
    return text.modules.assistant.openRouterNotConfigured;
  }

  if (!hasSelectedModel) {
    return text.modules.assistant.setupModel;
  }

  if (provider === "ollama") {
    return localizeAssistantReason(status?.reason, text) ?? text.modules.assistant.runtimeNotReady;
  }

  return text.modules.assistant.notReadyDescription;
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

function createUnavailableAssistantTransport(message: string): ChatTransport<UIMessage> {
  return {
    async reconnectToStream() {
      return null;
    },
    async sendMessages() {
      throw new Error(message);
    },
  };
}

export function AssistantModule({ minimal = false, storeId }: AssistantModuleProps) {
  const { text } = useI18n();
  const initialPreferences = readAssistantPreferences();
  const isDesktopRuntime = isDesktopAppRuntime();
  const [inputValue, setInputValue] = useState("");
  const [assistantError, setAssistantError] = useState<string | null>(null);
  const [isInitializingAssistant, setIsInitializingAssistant] = useState(false);
  const [isAssistantReady, setIsAssistantReady] = useState(false);
  const [status, setStatus] = useState<OllamaStatus | null>(null);
  const [providerStatus, setProviderStatus] = useState<AiProviderStatus | null>(null);
  const [statusError, setStatusError] = useState<string | null>(null);
  const [isLoadingStatus, setIsLoadingStatus] = useState(true);
  const [isStatusAlertVisible, setIsStatusAlertVisible] = useState(true);
  const [isUnavailableAlertVisible, setIsUnavailableAlertVisible] = useState(true);
  const [isAssistantErrorVisible, setIsAssistantErrorVisible] = useState(true);
  const [selectedProvider, setSelectedProvider] = useState<AiProvider>(initialPreferences.provider);
  const [selectedModel, setSelectedModel] = useState(initialPreferences.model);
  const trimmedInput = inputValue.trim();
  const chatId = `${storeId}:${selectedProvider}:${selectedModel || "unconfigured"}`;
  const activeModel = selectedModel || "unconfigured";
  const initialMessages: UIMessage[] = [
    {
      id: "assistant-welcome",
      parts: [
        {
          text: text.modules.assistant.welcome,
          type: "text",
        },
      ],
      role: "assistant",
    },
  ];
  const starterPrompts = text.modules.assistant.prompts;
  const chatTransport = isDesktopRuntime
    ? createAssistantTransport(selectedProvider, activeModel, storeId)
    : createUnavailableAssistantTransport(text.modules.assistant.nonDesktopDescription);
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
    transport: chatTransport,
  });
  const canUseAssistant =
    selectedProvider === "openrouter"
      ? Boolean(providerStatus?.openrouterConfigured)
      : Boolean(status?.canUse);
  const hasSelectedModel = selectedModel.length > 0;
  const canSendMessage = canUseAssistant && hasSelectedModel;
  const isSendingMessage = chatStatus === "submitted" || chatStatus === "streaming";
  const resolvedAssistantError = assistantError ?? chatError?.message ?? null;
  const unavailableAssistantMessage = describeUnavailableAssistant(
    selectedProvider,
    hasSelectedModel,
    providerStatus,
    status,
    text,
  );
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
      setStatusError(error instanceof Error ? error.message : text.modules.assistant.couldNotCheck);
      setStatus(null);
      setProviderStatus(null);
    } finally {
      setIsLoadingStatus(false);
    }
  }

  useEffect(() => {
    void loadOllamaStatus();
  }, []);

  useEffect(() => {
    if (statusError) {
      setIsStatusAlertVisible(true);
    }
  }, [statusError]);

  useEffect(() => {
    if (unavailableAssistantMessage) {
      setIsUnavailableAlertVisible(true);
    }
  }, [unavailableAssistantMessage]);

  useEffect(() => {
    if (resolvedAssistantError) {
      setIsAssistantErrorVisible(true);
    }
  }, [resolvedAssistantError]);

  async function handleInstallOllama(): Promise<void> {
    if (!isDesktopAppRuntime()) {
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
        throw new Error(text.modules.assistant.signInAgain);
      }

      const runtimeStatus = await initializeAiRuntime(
        sessionToken,
        env.VITE_POWERSYNC_URL,
        env.VITE_NEON_DATA_API_URL,
      );

      if (selectedProvider === "ollama" && !runtimeStatus.ready) {
        throw new Error(
          localizeAssistantReason(runtimeStatus.reason, text) ?? text.modules.assistant.notReady,
        );
      }

      setIsAssistantReady(true);
      return true;
    } catch (error) {
      setAssistantError(
        error instanceof Error ? error.message : text.modules.assistant.couldNotPrepare,
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
      setAssistantError(
        error instanceof Error ? error.message : text.modules.assistant.couldNotSend,
      );
    }
  }

  if (isLoadingStatus) {
    return (
      <div className={`flex min-h-[320px] items-center justify-center ${minimal ? "px-4" : ""}`}>
        <p className="text-sm text-stone-500">{text.modules.assistant.gettingReady}</p>
      </div>
    );
  }

  if (statusError) {
    return (
      <div className="space-y-4">
        {isStatusAlertVisible ? (
          <Alert status="danger">
            <Alert.Indicator />
            <Alert.Content>
              <Alert.Title>{text.modules.assistant.notReady}</Alert.Title>
              <Alert.Description>{statusError}</Alert.Description>
            </Alert.Content>
            <CloseButton aria-label="Close" onPress={() => setIsStatusAlertVisible(false)} />
          </Alert>
        ) : null}
        <Button onPress={() => void loadOllamaStatus()} variant="outline">
          <ArrowClockwiseIcon aria-hidden size={16} />
          {text.modules.assistant.retry}
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
          {isUnavailableAlertVisible ? (
            <Alert status="warning">
              <Alert.Indicator />
              <Alert.Content>
                <Alert.Title>{text.modules.assistant.notAvailable}</Alert.Title>
                <Alert.Description>{unavailableAssistantMessage}</Alert.Description>
              </Alert.Content>
              <CloseButton aria-label="Close" onPress={() => setIsUnavailableAlertVisible(false)} />
            </Alert>
          ) : null}
          {selectedProvider === "ollama" && status?.isDesktop && !status.ollamaInstalled ? (
            <Button onPress={() => void handleInstallOllama()}>
              <DownloadSimpleIcon aria-hidden size={16} />
              {text.common.actions.setUpOnThisDevice}
            </Button>
          ) : null}
        </div>
      </div>
    );
  }

  const content = (
    <div className="space-y-4">
      {!minimal && resolvedAssistantError && isAssistantErrorVisible ? (
        <Alert status="danger">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>{text.modules.assistant.cannotReply}</Alert.Title>
            <Alert.Description>{resolvedAssistantError}</Alert.Description>
          </Alert.Content>
          <CloseButton
            aria-label="Close"
            onPress={() => {
              setAssistantError(null);
              clearError();
              setIsAssistantErrorVisible(false);
            }}
          />
        </Alert>
      ) : null}

      {showStarterPromptSection ? (
        <div
          className={`mx-auto flex w-full max-w-3xl flex-col items-center ${minimal ? "space-y-3" : "space-y-2"}`}
        >
          <div className="space-y-1 text-center">
            <p className="text-sm font-medium text-stone-700">
              {text.modules.assistant.pickQuickQuestion}
            </p>
            <p className="text-sm text-stone-500">
              {minimal
                ? text.modules.assistant.minimalPrompt
                : text.modules.assistant.starterPrompt}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {starterPrompts.map((prompt: string) => (
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

      {minimal && resolvedAssistantError && isAssistantErrorVisible ? (
        <Alert status="danger">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>{text.modules.assistant.cannotReply}</Alert.Title>
            <Alert.Description>{resolvedAssistantError}</Alert.Description>
          </Alert.Content>
          <CloseButton
            aria-label="Close"
            onPress={() => {
              setAssistantError(null);
              clearError();
              setIsAssistantErrorVisible(false);
            }}
          />
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
                          <span>{text.modules.assistant.typing}</span>
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
                      {isInitializingAssistant
                        ? text.modules.assistant.initializing
                        : text.modules.assistant.thinking}
                    </p>
                    <p className="text-xs text-stone-500">
                      {isInitializingAssistant
                        ? text.modules.assistant.setupProgress
                        : text.modules.assistant.sendingHint}
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
                placeholder={text.modules.assistant.askPlaceholder}
                value={inputValue}
              />
              <Button
                aria-label={text.modules.assistant.sendAria}
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
              <p>{text.modules.assistant.shortcutsHint}</p>
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
