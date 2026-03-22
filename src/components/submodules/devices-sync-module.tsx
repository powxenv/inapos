import { Card, Chip } from "@heroui/react";
import { useStatus } from "@powersync/react";

function getSyncMessage(status: ReturnType<typeof useStatus>) {
  const syncError = status.dataFlowStatus.downloadError ?? status.dataFlowStatus.uploadError;

  if (syncError) {
    return syncError.message || syncError.name || "PowerSync gagal tersambung.";
  }

  if (status.connected && status.hasSynced) {
    return "Perangkat sudah tersambung dan sinkron dengan PowerSync.";
  }

  if (status.connecting) {
    return "PowerSync sedang mencoba membuat koneksi awal.";
  }

  return "PowerSync belum tersambung.";
}

export function DevicesSyncModule() {
  const status = useStatus();
  const hasSyncError = Boolean(
    status.dataFlowStatus.downloadError ?? status.dataFlowStatus.uploadError,
  );

  const connectionLabel = hasSyncError
    ? "Butuh perhatian"
    : status.connected && status.hasSynced
      ? "Sinkron"
      : status.connecting || status.connected
        ? "Menghubungkan"
        : "Belum tersambung";

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Perangkat & Sinkronisasi</h3>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="space-y-1">
            <div className="flex items-center justify-between gap-3">
              <Card.Title className="text-base">PowerSync</Card.Title>
              <Chip
                color={
                  hasSyncError
                    ? "danger"
                    : status.connected && status.hasSynced
                      ? "success"
                      : status.connected
                        ? "warning"
                        : "default"
                }
              >
                {connectionLabel}
              </Chip>
            </div>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-stone-600">{getSyncMessage(status)}</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="space-y-1">
            <Card.Title className="text-base">Tulis Balik</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-stone-600">
              Pengiriman perubahan lokal ke backend belum diaktifkan di app ini.
            </p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="space-y-1">
            <Card.Title className="text-base">Unduh Data</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-stone-600">
              {status.dataFlowStatus.downloading
                ? "Perangkat sedang menerima perubahan terbaru dari PowerSync."
                : status.dataFlowStatus.downloadError
                  ? status.dataFlowStatus.downloadError.message ||
                    status.dataFlowStatus.downloadError.name ||
                    "Unduhan PowerSync gagal."
                  : "Belum ada unduhan aktif saat ini."}
            </p>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}
