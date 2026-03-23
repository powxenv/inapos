import { Table } from "@heroui/react";
import { useQueries } from "@powersync/tanstack-react-query";
import { useI18n } from "../../lib/i18n";

type ActivityRow = {
  activity: string;
  detail: string;
  happened_at: string | null;
  id: string;
};

type TodayActivityModuleProps = {
  storeId: string;
};

export function TodayActivityModule({ storeId }: TodayActivityModuleProps) {
  const { formatDate, text } = useI18n();
  const [activityQuery] = useQueries<[ActivityRow]>({
    queries: [
      {
        parameters: [storeId, storeId, storeId, storeId, storeId],
        query: `
          SELECT
            sales.id,
            sales.created_at AS happened_at,
            'Sale' AS activity,
            COALESCE(sales.receipt_number, 'No number') || ' • ' || CAST(COALESCE(sales.total_amount, 0) AS TEXT) AS detail
          FROM sales
          WHERE sales.store_id = ?
            AND date(sales.created_at) = date('now', 'localtime')

          UNION ALL

          SELECT
            purchases.id,
            purchases.purchased_at AS happened_at,
            'Purchase' AS activity,
            COALESCE(suppliers.name, 'No supplier') || ' • ' || CAST(COALESCE(purchases.total_amount, 0) AS TEXT) AS detail
          FROM purchases
          LEFT JOIN suppliers ON suppliers.id = purchases.supplier_id
          WHERE purchases.store_id = ?
            AND date(purchases.purchased_at) = date('now', 'localtime')

          UNION ALL

          SELECT
            expenses.id,
            expenses.paid_at AS happened_at,
            'Expense' AS activity,
            COALESCE(expenses.title, 'Untitled') || ' • ' || CAST(COALESCE(expenses.amount, 0) AS TEXT) AS detail
          FROM expenses
          WHERE expenses.store_id = ?
            AND date(expenses.paid_at) = date('now', 'localtime')

          UNION ALL

          SELECT
            cash_entries.id,
            cash_entries.happened_at AS happened_at,
            CASE WHEN cash_entries.entry_type = 'out' THEN 'Cash out' ELSE 'Cash in' END AS activity,
            COALESCE(cash_entries.title, 'No details') || ' • ' || CAST(COALESCE(cash_entries.amount, 0) AS TEXT) AS detail
          FROM cash_entries
          WHERE cash_entries.store_id = ?
            AND date(cash_entries.happened_at) = date('now', 'localtime')

          UNION ALL

          SELECT
            promotions.id,
            promotions.updated_at AS happened_at,
            'Offer' AS activity,
            COALESCE(promotions.title, 'Untitled') || ' • ' || COALESCE(promotions.status, 'draft') AS detail
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
        <h3 className="text-lg font-semibold">Today</h3>
        <p className="text-sm text-stone-500">{text.modules.todayActivity.description}</p>
      </div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label={text.modules.todayActivity.ariaLabel}>
            <Table.Header>
              <Table.Column isRowHeader>{text.modules.todayActivity.time}</Table.Column>
              <Table.Column>{text.modules.todayActivity.activity}</Table.Column>
              <Table.Column>{text.modules.todayActivity.details}</Table.Column>
            </Table.Header>
            <Table.Body>
              {activities.length > 0 ? (
                activities.map((activity) => (
                  <Table.Row key={activity.id}>
                    <Table.Cell>
                      {formatDate(activity.happened_at, {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </Table.Cell>
                    <Table.Cell>{activity.activity}</Table.Cell>
                    <Table.Cell>{activity.detail}</Table.Cell>
                  </Table.Row>
                ))
              ) : (
                <Table.Row>
                  <Table.Cell colSpan={3}>{text.modules.todayActivity.empty}</Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}
