import { Card, Chip } from "@heroui/react";
import { useStatus } from "@powersync/react";

export function DevicesSyncModule() {
  const status = useStatus();
  const hasSyncError = Boolean(
    status.dataFlowStatus.downloadError ?? status.dataFlowStatus.uploadError,
  );

  const connectionLabel = hasSyncError
    ? "Butuh perhatian"
    : status.connected && status.hasSynced
      ? "Sinkron"
      : status.connected
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
            <p className="text-sm text-stone-600">
              Sinkronisasi berjalan otomatis lewat PowerSync saat sesi Neon
              Auth tersedia.
            </p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="space-y-1">
            <Card.Title className="text-base">Tulis Balik</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-stone-600">
              Pengiriman perubahan lokal ke backend belum diaktifkan di app
              ini.
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
                  ? status.dataFlowStatus.downloadError.message
                  : "Belum ada unduhan aktif saat ini."}
            </p>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}
