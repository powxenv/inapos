import { Alert, Card, Chip } from "@heroui/react";
import { useStatus } from "@powersync/react";
import { useQueries } from "@powersync/tanstack-react-query";
import { useI18n } from "../../lib/i18n";

type AlertItemRow = {
  detail: string;
  kind: string;
  severity: string;
  title: string;
};

type AlertsModuleProps = {
  storeId: string;
};

function severityColor(severity: string) {
  if (severity === "danger") {
    return "danger" as const;
  }

  if (severity === "warning") {
    return "warning" as const;
  }

  return "default" as const;
}

export function AlertsModule({ storeId }: AlertsModuleProps) {
  const { text } = useI18n();
  const status = useStatus();
  const syncError = status.dataFlowStatus.downloadError ?? status.dataFlowStatus.uploadError;
  const [alertsQuery] = useQueries<[AlertItemRow]>({
    queries: [
      {
        parameters: [storeId, storeId, storeId],
        query: `
          SELECT
            'stock' AS kind,
            CASE
              WHEN COALESCE(inventory_items.on_hand, 0) <= 0 THEN 'danger'
              ELSE 'warning'
            END AS severity,
            CASE
              WHEN COALESCE(inventory_items.on_hand, 0) <= 0 THEN products.name || ' is out of stock'
              ELSE products.name || ' is running low'
            END AS title,
            'Only ' || COALESCE(inventory_items.on_hand, 0) || CASE
              WHEN COALESCE(products.unit, '') = '' THEN ''
              ELSE ' ' || products.unit
            END || ' left. Reorder point is ' || COALESCE(inventory_items.reorder_point, 0) AS detail
          FROM products
          LEFT JOIN inventory_items
            ON inventory_items.product_id = products.id
           AND inventory_items.store_id = ?
          WHERE products.store_id = ?
            AND COALESCE(inventory_items.on_hand, 0) <= COALESCE(inventory_items.reorder_point, 0)

          UNION ALL

          SELECT
            'order' AS kind,
            'warning' AS severity,
            'Orders still in progress' AS title,
            COUNT(*) || ' orders still need attention.' AS detail
          FROM sales
          WHERE store_id = ?
            AND status IN ('draft', 'ordered', 'ready')
          HAVING COUNT(*) > 0
        `,
        queryKey: ["alerts", storeId],
      },
    ],
  });

  const alerts = alertsQuery.data ?? [];

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">Alerts</h3>
        <p className="text-sm text-stone-500">{text.modules.alerts.description}</p>
      </div>

      {syncError ? (
        <Alert status="danger">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>{text.modules.alerts.syncProblemTitle}</Alert.Title>
            <Alert.Description>
              {syncError.message || text.modules.alerts.syncProblemDescription}
            </Alert.Description>
          </Alert.Content>
        </Alert>
      ) : null}

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {alerts.length > 0 ? (
          alerts.map((item, index) => (
            <Card className="border border-stone-200 shadow-none" key={`${item.kind}-${index}`}>
              <Card.Header className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <Card.Title className="text-base">{item.title}</Card.Title>
                  <Card.Description className="text-sm text-stone-500">
                    {item.kind === "stock" ? text.modules.alerts.stock : text.modules.alerts.orders}
                  </Card.Description>
                </div>
                <Chip color={severityColor(item.severity)}>
                  {item.severity === "danger"
                    ? text.modules.alerts.urgent
                    : text.modules.alerts.checkSoon}
                </Chip>
              </Card.Header>
              <Card.Content>
                <p className="text-sm text-stone-600">{item.detail}</p>
              </Card.Content>
            </Card>
          ))
        ) : (
          <Card className="border border-stone-200 shadow-none">
            <Card.Content className="py-6">
              <p className="text-sm text-stone-600">{text.modules.alerts.empty}</p>
            </Card.Content>
          </Card>
        )}
      </div>
    </div>
  );
}
