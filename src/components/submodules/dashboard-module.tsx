import { Card, Chip, Table } from "@heroui/react";
import { useStatus } from "@powersync/react";
import { useQueries } from "@powersync/tanstack-react-query";
import { useI18n } from "../../lib/i18n";

type DashboardMetricRow = {
  nilai: number | null;
};

type RecentSaleRow = {
  created_at: string | null;
  id: string;
  payment_method: string | null;
  receipt_number: string | null;
  total_amount: number | null;
};

type DashboardModuleProps = {
  storeId: string;
};

function getSyncMessage(
  status: ReturnType<typeof useStatus>,
  text: ReturnType<typeof useI18n>["text"],
) {
  const syncError = status.dataFlowStatus.downloadError ?? status.dataFlowStatus.uploadError;

  if (syncError) {
    return syncError.message || syncError.name || text.modules.dashboard.syncError;
  }

  if (status.connected && status.hasSynced) {
    return text.modules.dashboard.thisDeviceUpToDate;
  }

  if (status.connecting) {
    return text.modules.dashboard.loadingUpdates;
  }

  return text.modules.dashboard.notConnected;
}

function getSyncChipColor(connected: boolean, hasSynced: boolean | undefined, hasError: boolean) {
  if (hasError) {
    return "danger";
  }

  if (connected && hasSynced) {
    return "success";
  }

  if (connected) {
    return "warning";
  }

  return "default";
}

export function DashboardModule({ storeId }: DashboardModuleProps) {
  const { formatCurrency, formatDate, text } = useI18n();
  const status = useStatus();
  const hasSyncError = Boolean(
    status.dataFlowStatus.downloadError ?? status.dataFlowStatus.uploadError,
  );
  const [
    salesTodayQuery,
    transactionCountQuery,
    lowStockQuery,
    cashBalanceQuery,
    recentSalesQuery,
  ] = useQueries<
    [DashboardMetricRow, DashboardMetricRow, DashboardMetricRow, DashboardMetricRow, RecentSaleRow]
  >({
    queries: [
      {
        parameters: [storeId],
        query: `
            SELECT COALESCE(SUM(total_amount), 0) AS nilai
            FROM sales
            WHERE store_id = ?
              AND date(created_at) = date('now', 'localtime')
              AND status != 'cancelled'
          `,
        queryKey: ["dashboard", storeId, "sales-today"],
      },
      {
        parameters: [storeId],
        query: `
            SELECT COUNT(*) AS nilai
            FROM sales
            WHERE store_id = ?
              AND date(created_at) = date('now', 'localtime')
              AND status != 'cancelled'
          `,
        queryKey: ["dashboard", storeId, "transactions-today"],
      },
      {
        parameters: [storeId, storeId],
        query: `
            SELECT COUNT(products.id) AS nilai
            FROM products
            LEFT JOIN inventory_items
              ON inventory_items.product_id = products.id
             AND inventory_items.store_id = ?
            WHERE products.store_id = ?
              AND COALESCE(inventory_items.on_hand, 0) <= COALESCE(inventory_items.reorder_point, 0)
          `,
        queryKey: ["dashboard", storeId, "low-stock"],
      },
      {
        parameters: [storeId],
        query: `
            SELECT COALESCE(SUM(CASE WHEN entry_type = 'in' THEN amount ELSE -amount END), 0) AS nilai
            FROM cash_entries
            WHERE store_id = ?
          `,
        queryKey: ["dashboard", storeId, "cash-balance"],
      },
      {
        parameters: [storeId],
        query: `
            SELECT
              id,
              receipt_number,
              payment_method,
              total_amount,
              created_at
            FROM sales
            WHERE store_id = ?
            ORDER BY COALESCE(created_at, updated_at) DESC
            LIMIT 5
          `,
        queryKey: ["dashboard", storeId, "recent-sales"],
      },
    ],
  });

  const totalSalesToday = salesTodayQuery.data?.[0]?.nilai ?? 0;
  const transactionCount = transactionCountQuery.data?.[0]?.nilai ?? 0;
  const lowStockCount = lowStockQuery.data?.[0]?.nilai ?? 0;
  const cashBalance = cashBalanceQuery.data?.[0]?.nilai ?? 0;
  const recentSales = recentSalesQuery.data ?? [];
  const syncLabel = hasSyncError
    ? text.modules.dashboard.syncNeedsAttention
    : status.connected && status.hasSynced
      ? text.common.states.upToDate
      : status.connecting || status.connected
        ? text.modules.dashboard.checking
        : text.common.states.offline;

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">Dashboard</h3>
        <p className="text-sm text-stone-500">{text.modules.dashboard.description}</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-sm font-medium text-stone-600">
              {text.modules.dashboard.salesToday}
            </Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">
              {formatCurrency(totalSalesToday)}
            </p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-sm font-medium text-stone-600">
              {text.modules.dashboard.totalSales}
            </Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">{transactionCount}</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="flex items-center justify-between gap-3">
            <Card.Title className="text-sm font-medium text-stone-600">
              {text.modules.dashboard.lowStock}
            </Card.Title>
            <Chip color={lowStockCount > 0 ? "warning" : "success"}>
              {text.common.prompts.totalItems(lowStockCount)}
            </Chip>
          </Card.Header>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-sm font-medium text-stone-600">
              {text.modules.dashboard.cashBalance}
            </Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">{formatCurrency(cashBalance)}</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="flex items-center justify-between gap-3">
            <Card.Title className="text-sm font-medium text-stone-600">
              {text.modules.dashboard.updated}
            </Card.Title>
            <Chip color={getSyncChipColor(status.connected, status.hasSynced, hasSyncError)}>
              {syncLabel}
            </Chip>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-stone-600">{getSyncMessage(status, text)}</p>
          </Card.Content>
        </Card>
      </div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label={text.modules.dashboard.recentSales}>
            <Table.Header>
              <Table.Column isRowHeader>{text.modules.dashboard.receipt}</Table.Column>
              <Table.Column>{text.modules.dashboard.time}</Table.Column>
              <Table.Column>{text.modules.dashboard.payment}</Table.Column>
              <Table.Column>{text.common.labels.total}</Table.Column>
            </Table.Header>
            <Table.Body>
              {recentSales.length > 0 ? (
                recentSales.map((sale) => (
                  <Table.Row key={sale.id}>
                    <Table.Cell>{sale.receipt_number ?? "-"}</Table.Cell>
                    <Table.Cell>
                      {formatDate(sale.created_at, {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </Table.Cell>
                    <Table.Cell>{sale.payment_method ?? "-"}</Table.Cell>
                    <Table.Cell>{formatCurrency(sale.total_amount)}</Table.Cell>
                  </Table.Row>
                ))
              ) : (
                <Table.Row>
                  <Table.Cell colSpan={4}>{text.modules.dashboard.emptySales}</Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}
