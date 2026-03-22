import { useEffect, useMemo, useState } from "react";
import { openUrl } from "@tauri-apps/plugin-opener";
import { Alert, Button, Card, ListBox, Select, Table } from "@heroui/react";
import { ArrowClockwiseIcon } from "@phosphor-icons/react/dist/csr/ArrowClockwise";
import { DownloadSimpleIcon } from "@phosphor-icons/react/dist/csr/DownloadSimple";
import {
  getOllamaPullProgress,
  getOllamaStatus,
  isTauriRuntime,
  readPreferredOllamaModel,
  recommendedOllamaModels,
  savePreferredOllamaModel,
  startOllamaPull,
  type OllamaPullProgress,
  type OllamaStatus,
} from "../../lib/ollama";

function formatBytes(value: number | null | undefined) {
  if (!value) {
    return "-";
  }

  const sizeInGb = value / 1024 / 1024 / 1024;
  return `${sizeInGb.toFixed(1)} GB`;
}

export function AiModelsModule() {
  const [status, setStatus] = useState<OllamaStatus | null>(null);
  const [statusError, setStatusError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedModel, setSelectedModel] = useState(readPreferredOllamaModel);
  const [pullProgress, setPullProgress] = useState<OllamaPullProgress | null>(null);
  const [pullError, setPullError] = useState<string | null>(null);
  const installedModels = status?.availableModels ?? [];
  const installedNames = useMemo(
    () => new Set(installedModels.map((model) => model.name)),
    [installedModels],
  );
  const progressPercent =
    pullProgress?.completed && pullProgress.total
      ? Math.min(100, Math.round((pullProgress.completed / pullProgress.total) * 100))
      : null;

  async function loadStatus() {
    setIsLoading(true);
    setStatusError(null);

    try {
      const nextStatus = await getOllamaStatus();
      setStatus(nextStatus);
    } catch (error) {
      setStatusError(error instanceof Error ? error.message : "Gagal memeriksa Ollama.");
      setStatus(null);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    void loadStatus();
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
        setPullError(error instanceof Error ? error.message : "Gagal membaca progress download model.");
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
      setSelectedModel(preferred);
      return;
    }

    const fallback = installedModels[0]?.name ?? "";

    if (fallback) {
      setSelectedModel(fallback);
      savePreferredOllamaModel(fallback);
    }
  }, [installedModels, installedNames]);

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
        status: "Memulai download model...",
        total: null,
      });
    } catch (error) {
      setPullError(error instanceof Error ? error.message : "Gagal memulai download model.");
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">Model AI</h3>
        <p className="text-sm text-stone-500">
          Kelola Ollama lokal dan pilih model default yang akan dipakai modul asisten.
        </p>
      </div>

      {isLoading ? <p className="text-sm text-stone-500">Memeriksa Ollama...</p> : null}

      {statusError ? (
        <Alert status="danger">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>Gagal memeriksa Ollama</Alert.Title>
            <Alert.Description>{statusError}</Alert.Description>
          </Alert.Content>
        </Alert>
      ) : null}

      {pullError ? (
        <Alert status="danger">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>Download model gagal</Alert.Title>
            <Alert.Description>{pullError}</Alert.Description>
          </Alert.Content>
        </Alert>
      ) : null}

      {pullProgress?.model && (pullProgress.active || pullProgress.done || pullProgress.error) ? (
        <Alert status={pullProgress.error ? "danger" : pullProgress.done ? "success" : "accent"}>
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>
              {pullProgress.active
                ? `Mengunduh ${pullProgress.model}`
                : pullProgress.error
                  ? `Download ${pullProgress.model} gagal`
                  : `${pullProgress.model} selesai diunduh`}
            </Alert.Title>
            <Alert.Description>
              {pullProgress.error ??
                pullProgress.status ??
                (progressPercent !== null ? `Progress ${progressPercent}%` : "Menunggu progress dari Ollama...")}
              {progressPercent !== null && pullProgress.active ? ` (${progressPercent}%)` : ""}
            </Alert.Description>
          </Alert.Content>
        </Alert>
      ) : null}

      {!isLoading && !statusError && status ? (
        <div className="grid gap-3 lg:grid-cols-[1fr_1fr]">
          <Card className="border border-stone-200 shadow-none">
            <Card.Header className="space-y-1">
              <Card.Title>Status runtime</Card.Title>
              <Card.Description>
                Asisten AI hanya tersedia di desktop app dengan Ollama aktif.
              </Card.Description>
            </Card.Header>
            <Card.Content className="space-y-3">
              <div className="rounded-2xl border border-stone-200 p-4">
                <p className="text-sm text-stone-500">Platform</p>
                <p className="mt-1 font-medium text-stone-950">{status.platform}</p>
              </div>
              <div className="rounded-2xl border border-stone-200 p-4">
                <p className="text-sm text-stone-500">Ollama</p>
                <p className="mt-1 font-medium text-stone-950">
                  {status.ollamaInstalled
                    ? status.ollamaRunning
                      ? "Terpasang dan aktif"
                      : "Terpasang, tetapi belum aktif"
                    : "Belum terpasang"}
                </p>
                {status.reason ? <p className="mt-2 text-sm text-stone-500">{status.reason}</p> : null}
              </div>
              {!status.ollamaInstalled && status.isDesktop ? (
                <Button onPress={() => void handleInstallOllama()}>
                  <DownloadSimpleIcon aria-hidden size={16} />
                  Install Ollama
                </Button>
              ) : null}
              <Button onPress={() => void loadStatus()} variant="outline">
                <ArrowClockwiseIcon aria-hidden size={16} />
                Refresh status
              </Button>
            </Card.Content>
          </Card>

          <Card className="border border-stone-200 shadow-none">
            <Card.Header className="space-y-1">
              <Card.Title>Model default</Card.Title>
              <Card.Description>Pilih model lokal yang dipakai asisten untuk chat.</Card.Description>
            </Card.Header>
            <Card.Content className="space-y-3">
              <div className="rounded-2xl border border-stone-200 p-4">
                <p className="text-sm text-stone-500">Rekomendasi saat ini</p>
                <p className="mt-1 font-medium text-stone-950">{recommendedOllamaModels[0].name}</p>
                <p className="mt-2 text-sm text-stone-500">{recommendedOllamaModels[0].description}</p>
                <p className="mt-2 text-sm text-stone-500">Ukuran: {recommendedOllamaModels[0].sizeLabel}</p>
                <p className="mt-2 text-sm text-stone-500">
                  {recommendedOllamaModels[0].minimumRequirement}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Button
                    isDisabled={Boolean(pullProgress?.active)}
                    onPress={() => void handleDownloadModel(recommendedOllamaModels[0].name)}
                    variant={installedNames.has(recommendedOllamaModels[0].name) ? "outline" : "primary"}
                  >
                    <DownloadSimpleIcon aria-hidden size={16} />
                    {installedNames.has(recommendedOllamaModels[0].name) ? "Download ulang" : "Download model"}
                  </Button>
                  {installedNames.has(recommendedOllamaModels[0].name) ? (
                    <Button
                      onPress={() => {
                        setSelectedModel(recommendedOllamaModels[0].name);
                        savePreferredOllamaModel(recommendedOllamaModels[0].name);
                      }}
                      variant={selectedModel === recommendedOllamaModels[0].name ? "primary" : "outline"}
                    >
                      Pilih sebagai default
                    </Button>
                  ) : null}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-stone-700" htmlFor="ollama-model">
                  Model terpasang
                </label>
                <Select
                  aria-label="Pilih model Ollama"
                  className="w-full"
                  id="ollama-model"
                  isDisabled={!installedModels.length}
                  selectedKey={selectedModel}
                  onSelectionChange={(key) => {
                    if (typeof key !== "string") {
                      return;
                    }

                    setSelectedModel(key);
                    savePreferredOllamaModel(key);
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
                          {model.name}
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      ))}
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>
            </Card.Content>
          </Card>
        </div>
      ) : null}

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Model Ollama terpasang">
            <Table.Header>
              <Table.Column isRowHeader>Model</Table.Column>
              <Table.Column>Ukuran</Table.Column>
              <Table.Column>Status</Table.Column>
            </Table.Header>
            <Table.Body>
              {installedModels.length > 0 ? (
                installedModels.map((model) => (
                  <Table.Row key={model.name}>
                    <Table.Cell>{model.name}</Table.Cell>
                    <Table.Cell>{formatBytes(model.size)}</Table.Cell>
                    <Table.Cell>{selectedModel === model.name ? "Default" : "Tersedia"}</Table.Cell>
                  </Table.Row>
                ))
              ) : (
                <Table.Row>
                  <Table.Cell colSpan={3}>Belum ada model terpasang yang terdeteksi.</Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}
