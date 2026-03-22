import { Table } from "@heroui/react";
import { useQueries } from "@powersync/tanstack-react-query";

type ActivityRow = {
  activity: string;
  detail: string;
  happened_at: string | null;
  id: string;
};

type TodayActivityModuleProps = {
  storeId: string;
};

function formatTime(value: string | null | undefined) {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

export function TodayActivityModule({ storeId }: TodayActivityModuleProps) {
  const [activityQuery] = useQueries<[ActivityRow]>({
    queries: [
      {
        parameters: [storeId, storeId, storeId, storeId, storeId],
        query: `
          SELECT
            sales.id,
            sales.created_at AS happened_at,
            'Transaksi' AS activity,
            COALESCE(sales.receipt_number, 'Tanpa nomor') || ' • ' || CAST(COALESCE(sales.total_amount, 0) AS TEXT) AS detail
          FROM sales
          WHERE sales.store_id = ?
            AND date(sales.created_at) = date('now', 'localtime')

          UNION ALL

          SELECT
            purchases.id,
            purchases.purchased_at AS happened_at,
            'Belanja stok' AS activity,
            COALESCE(suppliers.name, 'Tanpa pemasok') || ' • ' || CAST(COALESCE(purchases.total_amount, 0) AS TEXT) AS detail
          FROM purchases
          LEFT JOIN suppliers ON suppliers.id = purchases.supplier_id
          WHERE purchases.store_id = ?
            AND date(purchases.purchased_at) = date('now', 'localtime')

          UNION ALL

          SELECT
            expenses.id,
            expenses.paid_at AS happened_at,
            'Pengeluaran' AS activity,
            COALESCE(expenses.title, 'Tanpa judul') || ' • ' || CAST(COALESCE(expenses.amount, 0) AS TEXT) AS detail
          FROM expenses
          WHERE expenses.store_id = ?
            AND date(expenses.paid_at) = date('now', 'localtime')

          UNION ALL

          SELECT
            cash_entries.id,
            cash_entries.happened_at AS happened_at,
            CASE WHEN cash_entries.entry_type = 'out' THEN 'Kas keluar' ELSE 'Kas masuk' END AS activity,
            COALESCE(cash_entries.title, 'Tanpa keterangan') || ' • ' || CAST(COALESCE(cash_entries.amount, 0) AS TEXT) AS detail
          FROM cash_entries
          WHERE cash_entries.store_id = ?
            AND date(cash_entries.happened_at) = date('now', 'localtime')

          UNION ALL

          SELECT
            promotions.id,
            promotions.updated_at AS happened_at,
            'Promo' AS activity,
            COALESCE(promotions.title, 'Tanpa nama') || ' • ' || COALESCE(promotions.status, 'draft') AS detail
          FROM promotions
          WHERE promotions.store_id = ?
            AND date(promotions.updated_at) = date('now', 'localtime')

          ORDER BY happened_at DESC
          LIMIT 12
        `,
        queryKey: ["today-activity", storeId],
      },
    ],
  });

  const activities = activityQuery.data ?? [];

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">Aktivitas Hari Ini</h3>
        <p className="text-sm text-stone-500">
          Lihat apa saja yang sudah terjadi hari ini, mulai dari transaksi, belanja stok, sampai pengeluaran.
        </p>
      </div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Aktivitas hari ini toko">
            <Table.Header>
              <Table.Column isRowHeader>Waktu</Table.Column>
              <Table.Column>Aktivitas</Table.Column>
              <Table.Column>Keterangan</Table.Column>
            </Table.Header>
            <Table.Body>
              {activities.length > 0 ? (
                activities.map((activity) => (
                  <Table.Row key={activity.id}>
                    <Table.Cell>{formatTime(activity.happened_at)}</Table.Cell>
                    <Table.Cell>{activity.activity}</Table.Cell>
                    <Table.Cell>{activity.detail}</Table.Cell>
                  </Table.Row>
                ))
              ) : (
                <Table.Row>
                  <Table.Cell colSpan={3}>Belum ada aktivitas yang tercatat hari ini.</Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}
