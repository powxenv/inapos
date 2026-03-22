import { Card, Chip, Table } from "@heroui/react";
import { useStatus } from "@powersync/react";
import { useQueries } from "@powersync/tanstack-react-query";

type DashboardMetricRow = {
  nilai: number | null;
};

type RecentSaleRow = {
  id: string;
  payment_method: string | null;
  receipt_number: string | null;
  status: string | null;
  total_amount: number | null;
};

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

function formatRupiah(value: number | null | undefined) {
  return new Intl.NumberFormat("id-ID", {
    currency: "IDR",
    maximumFractionDigits: 0,
    style: "currency",
  }).format(value ?? 0);
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

export function DashboardModule() {
  const status = useStatus();
  const hasSyncError = Boolean(
    status.dataFlowStatus.downloadError ?? status.dataFlowStatus.uploadError,
  );
  const [salesTodayQuery, transactionCountQuery, lowStockQuery, recentSalesQuery] = useQueries<
    [DashboardMetricRow, DashboardMetricRow, DashboardMetricRow, RecentSaleRow]
  >({
    queries: [
      {
        query: `
          SELECT COALESCE(SUM(total_amount), 0) AS nilai
          FROM sales
          WHERE date(created_at) = date('now', 'localtime')
        `,
        queryKey: ["dashboard", "sales-today"],
      },
      {
        query: `
          SELECT COUNT(*) AS nilai
          FROM sales
          WHERE date(created_at) = date('now', 'localtime')
        `,
        queryKey: ["dashboard", "transactions-today"],
      },
      {
        query: `
          SELECT COUNT(*) AS nilai
          FROM inventory_items
          WHERE COALESCE(on_hand, 0) <= COALESCE(reorder_point, 0)
        `,
        queryKey: ["dashboard", "low-stock"],
      },
      {
        query: `
          SELECT
            id,
            receipt_number,
            payment_method,
            status,
            total_amount
          FROM sales
          ORDER BY COALESCE(created_at, updated_at) DESC
          LIMIT 5
        `,
        queryKey: ["dashboard", "recent-sales"],
      },
    ],
  });

  const totalSalesToday = salesTodayQuery.data?.[0]?.nilai ?? 0;
  const transactionCount = transactionCountQuery.data?.[0]?.nilai ?? 0;
  const lowStockCount = lowStockQuery.data?.[0]?.nilai ?? 0;
  const recentSales = recentSalesQuery.data ?? [];
  const syncLabel = hasSyncError
    ? "Butuh perhatian"
    : status.connected && status.hasSynced
      ? "Tersambung"
      : status.connecting || status.connected
        ? "Menyinkronkan"
        : "Belum tersambung";

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Dasbor</h3>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-sm font-medium text-stone-600">
              Penjualan hari ini
            </Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">{formatRupiah(totalSalesToday)}</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-sm font-medium text-stone-600">Transaksi</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">{transactionCount}</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="flex items-center justify-between gap-3">
            <Card.Title className="text-sm font-medium text-stone-600">Stok menipis</Card.Title>
            <Chip color={lowStockCount > 0 ? "warning" : "success"}>{lowStockCount} barang</Chip>
          </Card.Header>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="flex items-center justify-between gap-3">
            <Card.Title className="text-sm font-medium text-stone-600">Sinkronisasi</Card.Title>
            <Chip color={getSyncChipColor(status.connected, status.hasSynced, hasSyncError)}>
              {syncLabel}
            </Chip>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-stone-600">{getSyncMessage(status)}</p>
          </Card.Content>
        </Card>
      </div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Tabel dasbor">
            <Table.Header>
              <Table.Column>Struk</Table.Column>
              <Table.Column>Pembayaran</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column>Nilai</Table.Column>
            </Table.Header>
            <Table.Body>
              {recentSales.length > 0 ? (
                recentSales.map((sale) => (
                  <Table.Row key={sale.id}>
                    <Table.Cell>{sale.receipt_number ?? "-"}</Table.Cell>
                    <Table.Cell>{sale.payment_method ?? "-"}</Table.Cell>
                    <Table.Cell>{sale.status ?? "-"}</Table.Cell>
                    <Table.Cell>{formatRupiah(sale.total_amount)}</Table.Cell>
                  </Table.Row>
                ))
              ) : (
                <Table.Row>
                  <Table.Cell colSpan={4}>Belum ada data transaksi di SQLite PowerSync.</Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}
