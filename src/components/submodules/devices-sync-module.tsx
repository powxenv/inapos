import { Card, Chip } from "@heroui/react";
import { useStatus } from "@powersync/react";

function getSyncMessage(status: ReturnType<typeof useStatus>) {
  const syncError = status.dataFlowStatus.downloadError ?? status.dataFlowStatus.uploadError;

  if (syncError) {
    return syncError.message || syncError.name || "We couldn't update this device right now.";
  }

  if (status.connected && status.hasSynced) {
    return "This device is up to date.";
  }

  if (status.connecting) {
    return "Checking for the latest changes...";
  }

  return "This device is not connected yet.";
}

export function DevicesSyncModule() {
  const status = useStatus();
  const hasSyncError = Boolean(
    status.dataFlowStatus.downloadError ?? status.dataFlowStatus.uploadError,
  );

  const connectionLabel = hasSyncError
    ? "Needs attention"
    : status.connected && status.hasSynced
      ? "Up to date"
      : status.connecting || status.connected
        ? "Checking"
        : "Offline";

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">This device</h3>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="space-y-1">
            <div className="flex items-center justify-between gap-3">
              <Card.Title className="text-base">Connection</Card.Title>
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
            <Card.Title className="text-base">Sending changes</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-stone-600">Changes made here stay on this device for now.</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="space-y-1">
            <Card.Title className="text-base">Getting updates</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-stone-600">
              {status.dataFlowStatus.downloading
                ? "This device is downloading the latest changes."
                : status.dataFlowStatus.downloadError
                  ? status.dataFlowStatus.downloadError.message ||
                    status.dataFlowStatus.downloadError.name ||
                    "We couldn't download the latest changes."
                  : "There is no update in progress right now."}
            </p>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}
