import { zodResolver } from "@hookform/resolvers/zod";
import { openUrl } from "@tauri-apps/plugin-opener";
import {
  Alert,
  Button,
  Card,
  CloseButton,
  InputGroup,
  ListBox,
  Select,
  Switch,
} from "@heroui/react";
import { ArrowClockwiseIcon } from "@phosphor-icons/react/dist/csr/ArrowClockwise";
import { DownloadSimpleIcon } from "@phosphor-icons/react/dist/csr/DownloadSimple";
import { EyeIcon } from "@phosphor-icons/react/dist/csr/Eye";
import { EyeSlashIcon } from "@phosphor-icons/react/dist/csr/EyeSlash";
import { KeyIcon } from "@phosphor-icons/react/dist/csr/Key";
import { useEffect, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { useI18n } from "../../lib/i18n";
import {
  clearOpenRouterApiKey,
  getAiProviderStatus,
  getOpenRouterFreeModels,
  type OpenRouterModel,
  readPreferredAiProvider,
  readPreferredModel,
  saveOpenRouterApiKey,
  savePreferredAiProvider,
  savePreferredModel,
  type AiProvider,
  type AiProviderStatus,
} from "../../lib/ai-provider";
import {
  getOllamaPullProgress,
  getOllamaStatus,
  isTauriRuntime,
  recommendedOllamaModels,
  startOllamaPull,
  type OllamaPullProgress,
  type OllamaStatus,
} from "../../lib/ollama";

type OpenRouterApiKeyFormValues = {
  apiKey: string;
};

function formatBytes(value: number | null | undefined) {
  if (!value) {
    return "-";
  }

  const sizeInGb = value / 1024 / 1024 / 1024;
  return `${sizeInGb.toFixed(1)} GB`;
}

function formatContextLength(value: number | null | undefined) {
  if (!value) {
    return "-";
  }

  return `${value.toLocaleString("en-US")} token`;
}

function readPreferredOllamaModel() {
  return readPreferredModel("ollama");
}

function savePreferredOllamaModel(value: string) {
  savePreferredModel("ollama", value);
}

function readPreferredOpenRouterModel() {
  return readPreferredModel("openrouter");
}

function savePreferredOpenRouterModel(value: string) {
  savePreferredModel("openrouter", value);
}

type I18nText = ReturnType<typeof useI18n>["text"];

function localizeAiReason(reason: string | null | undefined, text: I18nText): string | null {
  if (!reason) {
    return null;
  }

  if (
    reason === "The AI assistant is only available in the desktop app." ||
    reason === "The assistant is only available in the desktop app."
  ) {
    return text.modules.assistant.notReadyDescription;
  }

  if (
    reason === "Ollama is not installed or not available in the system PATH." ||
    reason === "Ollama is installed, but the service is not running." ||
    reason === "Ollama is not running at 127.0.0.1:11434." ||
    reason === "Ollama is not running in this desktop app."
  ) {
    return text.modules.aiModels.statusNotReady;
  }

  if (reason === "Ollama is running, but no models are installed yet.") {
    return text.modules.aiModels.statusNoModels;
  }

  if (reason === "OpenRouter API key is not saved yet.") {
    return text.modules.aiModels.statusDescriptionMissing;
  }

  return reason;
}

function buildStatusMessage(
  provider: AiProvider,
  status: OllamaStatus | null,
  providerStatus: AiProviderStatus | null,
  text: I18nText,
) {
  if (provider === "openrouter") {
    return providerStatus?.openrouterConfigured
      ? text.modules.aiModels.statusDescriptionConfigured
      : text.modules.aiModels.statusDescriptionMissing;
  }

  if (!status) {
    return text.modules.aiModels.statusNotReady;
  }

  if (status.ollamaRunning) {
    return text.modules.aiModels.statusReady;
  }

  return localizeAiReason(status.reason, text) ?? text.modules.aiModels.statusNotReady;
}

export function AiModelsModule() {
  const { text } = useI18n();
  const openRouterApiKeySchema = z.object({
    apiKey: z.string().trim().min(1, text.modules.aiModels.validation.apiKey),
  });
  const [status, setStatus] = useState<OllamaStatus | null>(null);
  const [providerStatus, setProviderStatus] = useState<AiProviderStatus | null>(null);
  const [statusError, setStatusError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProvider, setSelectedProvider] = useState<AiProvider>(readPreferredAiProvider);
  const [selectedOllamaModel, setSelectedOllamaModel] = useState(readPreferredOllamaModel);
  const [selectedOpenRouterModel, setSelectedOpenRouterModel] = useState(
    readPreferredOpenRouterModel,
  );
  const [openRouterModels, setOpenRouterModels] = useState<OpenRouterModel[]>([]);
  const [openRouterModelsError, setOpenRouterModelsError] = useState<string | null>(null);
  const [isLoadingOpenRouterModels, setIsLoadingOpenRouterModels] = useState(false);
  const [pullProgress, setPullProgress] = useState<OllamaPullProgress | null>(null);
  const [pullError, setPullError] = useState<string | null>(null);
  const [providerMessage, setProviderMessage] = useState<string | null>(null);
  const [providerError, setProviderError] = useState<string | null>(null);
  const [isApiKeyVisible, setIsApiKeyVisible] = useState(false);
  const [isClearingApiKey, setIsClearingApiKey] = useState(false);
  const installedModels = status?.availableModels ?? [];
  const installedNames = useMemo(
    () => new Set(installedModels.map((model) => model.name)),
    [installedModels],
  );
  const progressPercent =
    pullProgress?.completed && pullProgress.total
      ? Math.min(100, Math.round((pullProgress.completed / pullProgress.total) * 100))
      : null;
  const currentStatusMessage = buildStatusMessage(selectedProvider, status, providerStatus, text);
  const {
    control,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<OpenRouterApiKeyFormValues>({
    defaultValues: {
      apiKey: "",
    },
    resolver: zodResolver(openRouterApiKeySchema),
  });

  async function loadStatus() {
    setIsLoading(true);
    setStatusError(null);

    try {
      const [nextStatus, nextProviderStatus] = await Promise.all([
        getOllamaStatus(),
        getAiProviderStatus(),
      ]);
      setStatus(nextStatus);
      setProviderStatus(nextProviderStatus);
    } catch (error) {
      setStatusError(error instanceof Error ? error.message : text.modules.aiModels.couldNotCheck);
      setStatus(null);
      setProviderStatus(null);
    } finally {
      setIsLoading(false);
    }
  }

  async function loadOpenRouterModels() {
    setIsLoadingOpenRouterModels(true);
    setOpenRouterModelsError(null);

    try {
      const nextModels = await getOpenRouterFreeModels();
      setOpenRouterModels(nextModels);
    } catch (error) {
      setOpenRouterModels([]);
      setOpenRouterModelsError(
        error instanceof Error ? error.message : text.modules.aiModels.couldNotLoadOptions,
      );
    } finally {
      setIsLoadingOpenRouterModels(false);
    }
  }

  useEffect(() => {
    void loadStatus();
    void loadOpenRouterModels();
  }, []);

  useEffect(() => {
    let intervalId: number | null = null;

    async function syncProgress() {
      try {
        const nextProgress = await getOllamaPullProgress();
        setPullProgress(nextProgress);

        if (nextProgress.done || !nextProgress.active) {
          if (intervalId !== null) {
            window.clearInterval(intervalId);
          }

          if (nextProgress.done) {
            void loadStatus();
          }
        }
      } catch (error) {
        setPullError(
          error instanceof Error ? error.message : text.modules.aiModels.couldNotTrackDownload,
        );
        if (intervalId !== null) {
          window.clearInterval(intervalId);
        }
      }
    }

    void syncProgress();
    intervalId = window.setInterval(() => {
      void syncProgress();
    }, 1000);

    return () => {
      if (intervalId !== null) {
        window.clearInterval(intervalId);
      }
    };
  }, []);

  useEffect(() => {
    if (!installedModels.length) {
      return;
    }

    const preferred = readPreferredOllamaModel();

    if (preferred && installedNames.has(preferred)) {
      setSelectedOllamaModel(preferred);
      return;
    }

    const fallback = installedModels[0]?.name ?? "";

    if (!fallback) {
      return;
    }

    setSelectedOllamaModel(fallback);
    savePreferredOllamaModel(fallback);
  }, [installedModels, installedNames]);

  useEffect(() => {
    if (!openRouterModels.length) {
      return;
    }

    const installed = new Set(openRouterModels.map((model) => model.id));
    const preferred = readPreferredOpenRouterModel();
    const nextModel = installed.has(preferred) ? preferred : (openRouterModels[0]?.id ?? "");

    if (!nextModel) {
      return;
    }

    if (nextModel === selectedOpenRouterModel) {
      return;
    }

    setSelectedOpenRouterModel(nextModel);
    savePreferredOpenRouterModel(nextModel);
  }, [openRouterModels, selectedOpenRouterModel]);

  async function handleInstallOllama() {
    if (!isTauriRuntime()) {
      return;
    }

    await openUrl("https://ollama.com/download");
  }

  async function handleDownloadModel(modelName: string) {
    setPullError(null);

    try {
      await startOllamaPull(modelName);
      setPullProgress({
        active: true,
        completed: 0,
        done: false,
        error: null,
        model: modelName,
        status: text.modules.aiModels.downloading,
        total: null,
      });
    } catch (error) {
      setPullError(
        error instanceof Error ? error.message : text.modules.aiModels.couldNotStartDownload,
      );
    }
  }

  function handleProviderToggle(useCloudProvider: boolean) {
    const nextProvider = useCloudProvider ? "openrouter" : "ollama";
    setSelectedProvider(nextProvider);
    savePreferredAiProvider(nextProvider);
    setProviderError(null);
    setProviderMessage(null);
  }

  function handleOllamaModelSelection(key: string) {
    setSelectedOllamaModel(key);
    savePreferredOllamaModel(key);
  }

  function handleOpenRouterModelSelection(key: string) {
    setSelectedOpenRouterModel(key);
    savePreferredOpenRouterModel(key);
  }

  const saveApiKey = handleSubmit(async ({ apiKey }) => {
    clearErrors("root");
    setProviderError(null);
    setProviderMessage(null);

    try {
      const nextStatus = await saveOpenRouterApiKey(apiKey);
      setProviderStatus(nextStatus);
      setProviderMessage(text.modules.aiModels.saveKeySuccess);
      reset({
        apiKey: "",
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : text.modules.aiModels.couldNotSaveKey;
      setError("root", {
        type: "server",
        message,
      });
      setProviderError(message);
    }
  });

  async function handleClearApiKey() {
    clearErrors("root");
    setProviderError(null);
    setProviderMessage(null);
    setIsClearingApiKey(true);

    try {
      const nextStatus = await clearOpenRouterApiKey();
      setProviderStatus(nextStatus);
      setProviderMessage(text.modules.aiModels.removeKeySuccess);
      reset({
        apiKey: "",
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : text.modules.aiModels.couldNotRemoveKey;
      setProviderError(message);
    } finally {
      setIsClearingApiKey(false);
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">{text.modules.aiModels.heading}</h3>
        <p className="text-sm text-stone-500">{text.modules.aiModels.description}</p>
      </div>

      <Card className="border border-stone-200 shadow-none">
        <Card.Content className="space-y-4 p-4">
          <div className="flex flex-col gap-3 rounded-2xl border border-stone-200 p-4 lg:flex-row lg:items-center lg:justify-between">
            <Switch isSelected={selectedProvider === "openrouter"} onChange={handleProviderToggle}>
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
              <Switch.Content>
                <div>
                  <p className="font-medium text-stone-950">
                    {selectedProvider === "openrouter"
                      ? text.modules.aiModels.cloudOn
                      : text.modules.aiModels.cloudOff}
                  </p>
                  <p className="text-sm text-stone-500">
                    {text.modules.aiModels.switchDescription}
                  </p>
                </div>
              </Switch.Content>
            </Switch>
            <div className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-700">
              {currentStatusMessage}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button onPress={() => void loadStatus()} variant="outline">
              <ArrowClockwiseIcon aria-hidden size={16} />
              {text.common.actions.checkAgain}
            </Button>
            {selectedProvider === "openrouter" ? (
              <Button
                isPending={isLoadingOpenRouterModels}
                onPress={() => void loadOpenRouterModels()}
                variant="outline"
              >
                <ArrowClockwiseIcon aria-hidden size={16} />
                {text.common.actions.refreshOptions}
              </Button>
            ) : null}
          </div>
        </Card.Content>
      </Card>

      {isLoading ? (
        <p className="text-sm text-stone-500">{text.modules.aiModels.checkingSetup}</p>
      ) : null}

      {statusError ? (
        <Alert status="danger">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>{text.modules.aiModels.couldNotCheckTitle}</Alert.Title>
            <Alert.Description>{statusError}</Alert.Description>
          </Alert.Content>
          <CloseButton aria-label="Close" onPress={() => setStatusError(null)} />
        </Alert>
      ) : null}

      {selectedProvider === "openrouter" ? (
        <div className="grid gap-3 lg:grid-cols-[1fr_1fr]">
          <Card className="border border-stone-200 shadow-none">
            <Card.Header>
              <Card.Title>{text.modules.aiModels.assistantOption}</Card.Title>
            </Card.Header>
            <Card.Content className="space-y-3">
              <div className="flex items-center justify-between rounded-2xl border border-stone-200 px-4 py-3">
                <span className="text-sm text-stone-500">{text.modules.aiModels.optionCount}</span>
                <span className="text-sm font-medium text-stone-950">
                  {openRouterModels.length}
                </span>
              </div>

              <div className="space-y-2">
                <label
                  className="block text-sm font-medium text-stone-700"
                  htmlFor="openrouter-model"
                >
                  {text.modules.aiModels.defaultOption}
                </label>
                <Select
                  aria-label={text.modules.aiModels.openRouterPlaceholder}
                  className="w-full"
                  id="openrouter-model"
                  isDisabled={!openRouterModels.length}
                  selectedKey={selectedOpenRouterModel}
                  onSelectionChange={(key) => {
                    if (typeof key !== "string" || !key) {
                      return;
                    }

                    handleOpenRouterModelSelection(key);
                  }}
                >
                  <Select.Trigger className="w-full">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      {openRouterModels.map((model) => (
                        <ListBox.Item id={model.id} key={model.id} textValue={model.id}>
                          <div className="flex w-full items-center justify-between gap-3">
                            <div className="min-w-0">
                              <p className="truncate">{model.id}</p>
                              <p className="truncate text-xs text-stone-500">{model.name}</p>
                            </div>
                            <span className="shrink-0 text-xs text-stone-500">
                              {formatContextLength(model.context_length)}
                            </span>
                          </div>
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      ))}
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {openRouterModelsError ? (
                <Alert status="danger">
                  <Alert.Indicator />
                  <Alert.Content>
                    <Alert.Title>{text.modules.aiModels.couldNotLoadOptionsTitle}</Alert.Title>
                    <Alert.Description>{openRouterModelsError}</Alert.Description>
                  </Alert.Content>
                  <CloseButton aria-label="Close" onPress={() => setOpenRouterModelsError(null)} />
                </Alert>
              ) : null}
            </Card.Content>
          </Card>

          <Card className="border border-stone-200 shadow-none">
            <Card.Header>
              <Card.Title>{text.modules.aiModels.signInKey}</Card.Title>
            </Card.Header>
            <Card.Content className="space-y-3">
              <div className="flex items-center justify-between rounded-2xl border border-stone-200 px-4 py-3">
                <span className="text-sm text-stone-500">{text.modules.aiModels.status}</span>
                <span className="text-sm font-medium text-stone-950">
                  {providerStatus?.openrouterConfigured
                    ? text.modules.aiModels.statusConfigured
                    : text.common.states.notAdded}
                </span>
              </div>

              <form className="space-y-3" onSubmit={saveApiKey}>
                <div className="space-y-2">
                  <label
                    className="block text-sm font-medium text-stone-700"
                    htmlFor="openrouter-api-key"
                  >
                    {text.modules.aiModels.signInKey}
                  </label>
                  <Controller
                    control={control}
                    name="apiKey"
                    render={({ field, fieldState }) => (
                      <InputGroup className="w-full" isInvalid={fieldState.invalid}>
                        <InputGroup.Prefix className="text-stone-400">
                          <KeyIcon aria-hidden size={18} />
                        </InputGroup.Prefix>
                        <InputGroup.Input
                          aria-invalid={fieldState.invalid}
                          aria-label={text.modules.aiModels.signInKey}
                          autoComplete="off"
                          className="w-full"
                          id="openrouter-api-key"
                          onBlur={field.onBlur}
                          onChange={field.onChange}
                          placeholder="sk-or-v1-..."
                          type={isApiKeyVisible ? "text" : "password"}
                          value={field.value}
                        />
                        <InputGroup.Suffix className="pr-0">
                          <Button
                            aria-label={
                              isApiKeyVisible
                                ? text.modules.aiModels.keyHidden
                                : text.modules.aiModels.keyShown
                            }
                            className="min-w-0 px-2 text-stone-500 hover:text-stone-900"
                            onPress={() => setIsApiKeyVisible((value) => !value)}
                            size="sm"
                            type="button"
                            variant="ghost"
                          >
                            {isApiKeyVisible ? (
                              <EyeSlashIcon aria-hidden size={18} />
                            ) : (
                              <EyeIcon aria-hidden size={18} />
                            )}
                          </Button>
                        </InputGroup.Suffix>
                      </InputGroup>
                    )}
                  />
                  {errors.apiKey?.message ? (
                    <p className="text-sm text-red-600">{errors.apiKey.message}</p>
                  ) : null}
                </div>

                {errors.root?.message ? (
                  <Alert status="danger">
                    <Alert.Indicator />
                    <Alert.Content>
                      <Alert.Title>{text.modules.aiModels.couldNotSaveKeyTitle}</Alert.Title>
                      <Alert.Description>{errors.root.message}</Alert.Description>
                    </Alert.Content>
                    <CloseButton aria-label="Close" onPress={() => clearErrors("root")} />
                  </Alert>
                ) : null}

                {providerError ? (
                  <Alert status="danger">
                    <Alert.Indicator />
                    <Alert.Content>
                      <Alert.Title>{text.modules.aiModels.thatDidNotWork}</Alert.Title>
                      <Alert.Description>{providerError}</Alert.Description>
                    </Alert.Content>
                    <CloseButton aria-label="Close" onPress={() => setProviderError(null)} />
                  </Alert>
                ) : null}

                {providerMessage ? (
                  <Alert status="success">
                    <Alert.Indicator />
                    <Alert.Content>
                      <Alert.Title>{text.modules.aiModels.saveSuccessTitle}</Alert.Title>
                      <Alert.Description>{providerMessage}</Alert.Description>
                    </Alert.Content>
                    <CloseButton aria-label="Close" onPress={() => setProviderMessage(null)} />
                  </Alert>
                ) : null}

                <div className="flex flex-wrap gap-2">
                  <Button isPending={isSubmitting} type="submit">
                    {text.common.actions.saveKey}
                  </Button>
                  <Button
                    isDisabled={!providerStatus?.openrouterConfigured}
                    isPending={isClearingApiKey}
                    onPress={() => void handleClearApiKey()}
                    type="button"
                    variant="outline"
                  >
                    {text.common.actions.removeKey}
                  </Button>
                </div>
              </form>
            </Card.Content>
          </Card>
        </div>
      ) : null}

      {pullError ? (
        <Alert status="danger">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>{text.modules.aiModels.downloadFailed}</Alert.Title>
            <Alert.Description>{pullError}</Alert.Description>
          </Alert.Content>
          <CloseButton aria-label="Close" onPress={() => setPullError(null)} />
        </Alert>
      ) : null}

      {pullProgress?.model && (pullProgress.active || pullProgress.done || pullProgress.error) ? (
        <Alert status={pullProgress.error ? "danger" : pullProgress.done ? "success" : "accent"}>
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>
              {pullProgress.active
                ? text.modules.aiModels.downloading
                : pullProgress.error
                  ? text.modules.aiModels.downloadFailed
                  : text.modules.aiModels.downloadComplete}
            </Alert.Title>
            <Alert.Description>
              {pullProgress.error ??
                pullProgress.status ??
                (progressPercent !== null
                  ? `Progress ${progressPercent}%`
                  : text.modules.aiModels.progressWaiting)}
              {progressPercent !== null && pullProgress.active ? ` (${progressPercent}%)` : ""}
            </Alert.Description>
          </Alert.Content>
          <CloseButton aria-label="Close" onPress={() => setPullProgress(null)} />
        </Alert>
      ) : null}

      {selectedProvider === "ollama" && !isLoading && !statusError && status ? (
        <div className="grid gap-3 lg:grid-cols-[1fr_1fr]">
          <Card className="border border-stone-200 shadow-none">
            <Card.Header>
              <Card.Title>{text.modules.aiModels.thisDevice}</Card.Title>
            </Card.Header>
            <Card.Content className="space-y-3">
              <div className="flex items-center justify-between rounded-2xl border border-stone-200 px-4 py-3">
                <span className="text-sm text-stone-500">{text.modules.aiModels.platform}</span>
                <span className="text-sm font-medium text-stone-950">{status.platform}</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-stone-200 px-4 py-3">
                <span className="text-sm text-stone-500">
                  {text.modules.aiModels.onDeviceHelper}
                </span>
                <span className="text-sm font-medium text-stone-950">
                  {status.ollamaInstalled
                    ? status.ollamaRunning
                      ? text.common.states.ready
                      : text.modules.aiModels.helperInstalled
                    : text.modules.aiModels.helperNotSetUp}
                </span>
              </div>
              {status.reason ? (
                <div className="rounded-2xl bg-stone-50 px-4 py-3 text-sm text-stone-500">
                  {localizeAiReason(status.reason, text)}
                </div>
              ) : null}
              {!status.ollamaInstalled && status.isDesktop ? (
                <Button onPress={() => void handleInstallOllama()}>
                  <DownloadSimpleIcon aria-hidden size={16} />
                  {text.common.actions.setUpOnThisDevice}
                </Button>
              ) : null}
            </Card.Content>
          </Card>

          <Card className="border border-stone-200 shadow-none">
            <Card.Header>
              <Card.Title>{text.modules.aiModels.assistantOption}</Card.Title>
            </Card.Header>
            <Card.Content className="space-y-3">
              <div className="flex items-center justify-between rounded-2xl border border-stone-200 px-4 py-3">
                <span className="text-sm text-stone-500">{text.modules.aiModels.default}</span>
                <span className="text-sm font-medium text-stone-950">
                  {selectedOllamaModel || text.common.states.notChosenYet}
                </span>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-stone-700" htmlFor="ollama-model">
                  {text.modules.aiModels.onDeviceOption}
                </label>
                <Select
                  aria-label={text.modules.aiModels.modelPlaceholder}
                  className="w-full"
                  id="ollama-model"
                  isDisabled={!installedModels.length}
                  selectedKey={selectedOllamaModel}
                  onSelectionChange={(key) => {
                    if (typeof key !== "string") {
                      return;
                    }

                    handleOllamaModelSelection(key);
                  }}
                >
                  <Select.Trigger className="w-full">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      {installedModels.map((model) => (
                        <ListBox.Item id={model.name} key={model.name} textValue={model.name}>
                          <div className="flex w-full items-center justify-between gap-3">
                            <span>{model.name}</span>
                            <span className="text-xs text-stone-500">
                              {formatBytes(model.size)}
                            </span>
                          </div>
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      ))}
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button
                  isDisabled={Boolean(pullProgress?.active)}
                  onPress={() => void handleDownloadModel(recommendedOllamaModels[0].name)}
                  variant={
                    installedNames.has(recommendedOllamaModels[0].name) ? "outline" : "primary"
                  }
                >
                  <DownloadSimpleIcon aria-hidden size={16} />
                  {installedNames.has(recommendedOllamaModels[0].name)
                    ? text.common.actions.downloadAgain
                    : text.common.actions.downloadRecommendedOption}
                </Button>
                {installedNames.has(recommendedOllamaModels[0].name) ? (
                  <Button
                    onPress={() => handleOllamaModelSelection(recommendedOllamaModels[0].name)}
                    variant={
                      selectedOllamaModel === recommendedOllamaModels[0].name
                        ? "primary"
                        : "outline"
                    }
                  >
                    {text.common.actions.setAsDefault}
                  </Button>
                ) : null}
              </div>
            </Card.Content>
          </Card>
        </div>
      ) : null}
    </div>
  );
}
