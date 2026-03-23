import { Card, Chip } from "@heroui/react";
import { useStatus } from "@powersync/react";
import { useI18n } from "../../lib/i18n";

function getSyncMessage(
  status: ReturnType<typeof useStatus>,
  text: ReturnType<typeof useI18n>["text"],
) {
  const syncError = status.dataFlowStatus.downloadError ?? status.dataFlowStatus.uploadError;

  if (syncError) {
    return syncError.message || syncError.name || text.modules.devicesSync.syncError;
  }

  if (status.connected && status.hasSynced) {
    return text.modules.devicesSync.ready;
  }

  if (status.connecting) {
    return text.modules.devicesSync.updating;
  }

  return text.modules.devicesSync.notConnected;
}

export function DevicesSyncModule() {
  const { text } = useI18n();
  const status = useStatus();
  const hasSyncError = Boolean(
    status.dataFlowStatus.downloadError ?? status.dataFlowStatus.uploadError,
  );

  const connectionLabel = hasSyncError
    ? text.modules.devicesSync.needsAttention
    : status.connected && status.hasSynced
      ? text.modules.devicesSync.upToDate
      : status.connecting || status.connected
        ? text.modules.devicesSync.checking
        : text.common.states.offline;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{text.modules.devicesSync.title}</h3>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="space-y-1">
            <div className="flex items-center justify-between gap-3">
              <Card.Title className="text-base">{text.modules.devicesSync.connection}</Card.Title>
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
            <p className="text-sm text-stone-600">{getSyncMessage(status, text)}</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="space-y-1">
            <Card.Title className="text-base">{text.modules.devicesSync.sendingChanges}</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-stone-600">{text.modules.devicesSync.descriptionSending}</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="space-y-1">
            <Card.Title className="text-base">{text.modules.devicesSync.gettingUpdates}</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-stone-600">
              {status.dataFlowStatus.downloading
                ? text.modules.devicesSync.gettingUpdatesDownloading
                : status.dataFlowStatus.downloadError
                  ? status.dataFlowStatus.downloadError.message ||
                    status.dataFlowStatus.downloadError.name ||
                    text.modules.devicesSync.gettingUpdatesFailed
                  : text.modules.devicesSync.gettingUpdatesDescription}
            </p>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}
