import { Alert, Card, Chip } from "@heroui/react";
import { useStatus } from "@powersync/react";
import { useQueries } from "@powersync/tanstack-react-query";

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
        <p className="text-sm text-stone-500">
          Start here when something needs attention, like low stock or unfinished orders.
        </p>
      </div>

      {syncError ? (
        <Alert status="danger">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>Updates are having trouble</Alert.Title>
            <Alert.Description>
              {syncError.message || "We couldn't update this device right now."}
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
                    {item.kind === "stock" ? "Stock" : "Orders"}
                  </Card.Description>
                </div>
                <Chip color={severityColor(item.severity)}>
                  {item.severity === "danger" ? "Urgent" : "Check soon"}
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
              <p className="text-sm text-stone-600">Nothing urgent right now.</p>
            </Card.Content>
          </Card>
        )}
      </div>
    </div>
  );
}
