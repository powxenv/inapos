import { useMemo, useState } from "react";
import { Alert, Card, Chip, ListBox, Select, Table } from "@heroui/react";
import { ChartBarIcon } from "@phosphor-icons/react/dist/csr/ChartBar";
import { CoinsIcon } from "@phosphor-icons/react/dist/csr/Coins";
import { CreditCardIcon } from "@phosphor-icons/react/dist/csr/CreditCard";
import { ReceiptIcon } from "@phosphor-icons/react/dist/csr/Receipt";
import { TrendDownIcon } from "@phosphor-icons/react/dist/csr/TrendDown";
import { TrendUpIcon } from "@phosphor-icons/react/dist/csr/TrendUp";
import { WalletIcon } from "@phosphor-icons/react/dist/csr/Wallet";
import { useQueries } from "@powersync/tanstack-react-query";

type ReportsModuleProps = {
  storeId: string;
};

type ReportPeriodId = "today" | "7days" | "30days" | "month";

type SummaryRow = {
  value: number | null;
};

type SalesOverviewRow = {
  orders: number | null;
  value: number | null;
};

type CashOverviewRow = {
  balance: number | null;
  cash_in: number | null;
  cash_out: number | null;
};

type BreakdownRow = {
  count: number | null;
  label: string | null;
  value: number | null;
};

type TopProductRow = {
  name: string | null;
  quantity: number | null;
  revenue: number | null;
};

const reportPeriods: readonly {
  description: string;
  id: ReportPeriodId;
  label: string;
}[] = [
  {
    description: "Best for checking today at a glance.",
    id: "today",
    label: "Today",
  },
  {
    description: "A quick look at the past week.",
    id: "7days",
    label: "Last 7 days",
  },
  {
    description: "See the bigger picture across the last month.",
    id: "30days",
    label: "Last 30 days",
  },
  {
    description: "Shows the current calendar month.",
    id: "month",
    label: "This month",
  },
] as const;

function formatRupiah(value: number | null | undefined) {
  return new Intl.NumberFormat("id-ID", {
    currency: "IDR",
    maximumFractionDigits: 0,
    style: "currency",
  }).format(value ?? 0);
}

function formatNumber(value: number | null | undefined) {
  return new Intl.NumberFormat("id-ID").format(value ?? 0);
}

function paymentMethodLabel(value: string | null | undefined) {
  if (!value || value === "other") {
    return "Other";
  }

  if (value === "cash") {
    return "Cash";
  }

  if (value === "transfer") {
    return "Bank transfer";
  }

  if (value === "qris") {
    return "QRIS";
  }

  if (value === "tempo") {
    return "Pay later";
  }

  return value;
}

function expenseCategoryLabel(value: string | null | undefined) {
  if (!value || value === "other") {
    return "Other";
  }

  if (value === "listrik") {
    return "Electricity";
  }

  if (value === "air") {
    return "Water";
  }

  if (value === "transport") {
    return "Transport";
  }

  if (value === "kemasan") {
    return "Packaging";
  }

  if (value === "gaji") {
    return "Wages";
  }

  if (value === "perawatan") {
    return "Maintenance";
  }

  if (value === "lainnya") {
    return "Other";
  }

  return value;
}

function formatDate(value: Date) {
  return value.toISOString().slice(0, 10);
}

function getReportRange(period: ReportPeriodId) {
  const today = new Date();
  const end = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const start = new Date(end);

  if (period === "7days") {
    start.setDate(start.getDate() - 6);
  }

  if (period === "30days") {
    start.setDate(start.getDate() - 29);
  }

  if (period === "month") {
    start.setDate(1);
  }

  return {
    endDate: formatDate(end),
    startDate: formatDate(start),
  };
}

export function ReportsModule({ storeId }: ReportsModuleProps) {
  const [period, setPeriod] = useState<ReportPeriodId>("month");
  const range = useMemo(() => getReportRange(period), [period]);
  const selectedPeriod = reportPeriods.find((item) => item.id === period) ?? reportPeriods[3];
  const [
    salesOverviewQuery,
    cogsQuery,
    expensesQuery,
    purchasesQuery,
    cashQuery,
    paymentBreakdownQuery,
    expenseBreakdownQuery,
    topProductsQuery,
  ] = useQueries<
    [
      SalesOverviewRow,
      SummaryRow,
      SummaryRow,
      SummaryRow,
      CashOverviewRow,
      BreakdownRow,
      BreakdownRow,
      TopProductRow,
    ]
  >({
    queries: [
      {
        parameters: [storeId, range.startDate, range.endDate],
        query: `
            SELECT
              COALESCE(SUM(total_amount), 0) AS value,
              COUNT(*) AS orders
            FROM sales
            WHERE store_id = ?
              AND status != 'cancelled'
              AND date(created_at) BETWEEN date(?) AND date(?)
          `,
        queryKey: ["reports", storeId, period, "sales-overview"],
      },
      {
        parameters: [storeId, range.startDate, range.endDate],
        query: `
            SELECT COALESCE(SUM(COALESCE(sale_items.quantity, 0) * COALESCE(products.cost_price, 0)), 0) AS value
            FROM sale_items
            INNER JOIN sales ON sales.id = sale_items.sale_id
            LEFT JOIN products ON products.id = sale_items.product_id
            WHERE sales.store_id = ?
              AND sales.status != 'cancelled'
              AND date(sales.created_at) BETWEEN date(?) AND date(?)
          `,
        queryKey: ["reports", storeId, period, "estimated-cogs"],
      },
      {
        parameters: [storeId, range.startDate, range.endDate],
        query: `
            SELECT COALESCE(SUM(amount), 0) AS value
            FROM expenses
            WHERE store_id = ?
              AND date(paid_at) BETWEEN date(?) AND date(?)
          `,
        queryKey: ["reports", storeId, period, "expenses"],
      },
      {
        parameters: [storeId, range.startDate, range.endDate],
        query: `
            SELECT COALESCE(SUM(total_amount), 0) AS value
            FROM purchases
            WHERE store_id = ?
              AND date(purchased_at) BETWEEN date(?) AND date(?)
          `,
        queryKey: ["reports", storeId, period, "purchases"],
      },
      {
        parameters: [storeId, range.startDate, range.endDate],
        query: `
            SELECT
              COALESCE(SUM(CASE WHEN entry_type = 'in' THEN amount ELSE 0 END), 0) AS cash_in,
              COALESCE(SUM(CASE WHEN entry_type = 'out' THEN amount ELSE 0 END), 0) AS cash_out,
              COALESCE(SUM(CASE WHEN entry_type = 'in' THEN amount ELSE -amount END), 0) AS balance
            FROM cash_entries
            WHERE store_id = ?
              AND date(happened_at) BETWEEN date(?) AND date(?)
          `,
        queryKey: ["reports", storeId, period, "cash-overview"],
      },
      {
        parameters: [storeId, range.startDate, range.endDate],
        query: `
            SELECT
              COALESCE(payment_method, 'other') AS label,
              COALESCE(SUM(total_amount), 0) AS value,
              COUNT(*) AS count
            FROM sales
            WHERE store_id = ?
              AND status != 'cancelled'
              AND date(created_at) BETWEEN date(?) AND date(?)
            GROUP BY COALESCE(payment_method, 'other')
            ORDER BY value DESC, label ASC
          `,
        queryKey: ["reports", storeId, period, "payment-breakdown"],
      },
      {
        parameters: [storeId, range.startDate, range.endDate],
        query: `
            SELECT
              COALESCE(category, 'other') AS label,
              COALESCE(SUM(amount), 0) AS value,
              COUNT(*) AS count
            FROM expenses
            WHERE store_id = ?
              AND date(paid_at) BETWEEN date(?) AND date(?)
            GROUP BY COALESCE(category, 'other')
            ORDER BY value DESC, label ASC
          `,
        queryKey: ["reports", storeId, period, "expense-breakdown"],
      },
      {
        parameters: [storeId, range.startDate, range.endDate],
        query: `
            SELECT
              COALESCE(products.name, 'Unnamed item') AS name,
              COALESCE(SUM(sale_items.quantity), 0) AS quantity,
              COALESCE(SUM(sale_items.subtotal), 0) AS revenue
            FROM sale_items
            INNER JOIN sales ON sales.id = sale_items.sale_id
            LEFT JOIN products ON products.id = sale_items.product_id
            WHERE sales.store_id = ?
              AND sales.status != 'cancelled'
              AND date(sales.created_at) BETWEEN date(?) AND date(?)
            GROUP BY COALESCE(products.name, 'Unnamed item')
            ORDER BY quantity DESC, revenue DESC, name ASC
            LIMIT 5
          `,
        queryKey: ["reports", storeId, period, "top-products"],
      },
    ],
  });

  const salesOverview = salesOverviewQuery.data?.[0];
  const cashOverview = cashQuery.data?.[0];
  const grossSales = salesOverview?.value ?? 0;
  const estimatedCogs = cogsQuery.data?.[0]?.value ?? 0;
  const expenses = expensesQuery.data?.[0]?.value ?? 0;
  const purchases = purchasesQuery.data?.[0]?.value ?? 0;
  const grossProfit = grossSales - estimatedCogs;
  const netProfit = grossProfit - expenses;
  const paymentBreakdown = paymentBreakdownQuery.data ?? [];
  const expenseBreakdown = expenseBreakdownQuery.data ?? [];
  const topProducts = topProductsQuery.data ?? [];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">Reports</h3>
          <p className="text-sm text-stone-500">
            See sales, costs, and cash for the time you choose.
          </p>
        </div>
        <Select
          aria-label="Choose a report period"
          className="w-full sm:w-[220px]"
          selectedKey={period}
          onSelectionChange={(key) => {
            if (typeof key === "string") {
              setPeriod(key as ReportPeriodId);
            }
          }}
        >
          <Select.Trigger className="w-full">
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              {reportPeriods.map((item) => (
                <ListBox.Item id={item.id} key={item.id} textValue={item.label}>
                  {item.label}
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>
      </div>

      <Alert>
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>{selectedPeriod.label}</Alert.Title>
          <Alert.Description>
            The profit numbers below are estimates. Item costs are based on the current cost saved
            for each item.
          </Alert.Description>
        </Alert.Content>
      </Alert>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="flex items-center justify-between gap-3">
            <div className="space-y-1">
              <Card.Title className="text-sm font-medium text-stone-600">Sales total</Card.Title>
              <Card.Description>{formatNumber(salesOverview?.orders)} sales</Card.Description>
            </div>
            <div className="rounded-full bg-emerald-50 p-2 text-emerald-700">
              <TrendUpIcon className="size-5" />
            </div>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">{formatRupiah(grossSales)}</p>
          </Card.Content>
        </Card>

        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="flex items-center justify-between gap-3">
            <div className="space-y-1">
              <Card.Title className="text-sm font-medium text-stone-600">
                Estimated item cost
              </Card.Title>
              <Card.Description>Estimated cost of the items sold</Card.Description>
            </div>
            <div className="rounded-full bg-amber-50 p-2 text-amber-700">
              <ReceiptIcon className="size-5" />
            </div>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">{formatRupiah(estimatedCogs)}</p>
          </Card.Content>
        </Card>

        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="flex items-center justify-between gap-3">
            <div className="space-y-1">
              <Card.Title className="text-sm font-medium text-stone-600">
                Estimated gross profit
              </Card.Title>
              <Card.Description>Sales minus estimated item cost</Card.Description>
            </div>
            <div className="rounded-full bg-sky-50 p-2 text-sky-700">
              <ChartBarIcon className="size-5" />
            </div>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">{formatRupiah(grossProfit)}</p>
          </Card.Content>
        </Card>

        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="flex items-center justify-between gap-3">
            <div className="space-y-1">
              <Card.Title className="text-sm font-medium text-stone-600">Expenses</Card.Title>
              <Card.Description>Everyday spending in this period</Card.Description>
            </div>
            <div className="rounded-full bg-rose-50 p-2 text-rose-700">
              <TrendDownIcon className="size-5" />
            </div>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">{formatRupiah(expenses)}</p>
          </Card.Content>
        </Card>

        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="flex items-center justify-between gap-3">
            <div className="space-y-1">
              <Card.Title className="text-sm font-medium text-stone-600">
                Estimated money left
              </Card.Title>
              <Card.Description>Gross profit minus expenses</Card.Description>
            </div>
            <Chip color={netProfit >= 0 ? "success" : "danger"}>
              {netProfit >= 0 ? "Positive" : "Negative"}
            </Chip>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">{formatRupiah(netProfit)}</p>
          </Card.Content>
        </Card>

        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="flex items-center justify-between gap-3">
            <div className="space-y-1">
              <Card.Title className="text-sm font-medium text-stone-600">
                Stock purchases
              </Card.Title>
              <Card.Description>Total spent on buying stock</Card.Description>
            </div>
            <div className="rounded-full bg-violet-50 p-2 text-violet-700">
              <CoinsIcon className="size-5" />
            </div>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">{formatRupiah(purchases)}</p>
          </Card.Content>
        </Card>
      </div>

      <div className="grid gap-3 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="space-y-1">
            <Card.Title>Cash you recorded</Card.Title>
            <Card.Description>Based on the cash entries saved during this period.</Card.Description>
          </Card.Header>
          <Card.Content className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-stone-200 p-4">
              <p className="text-sm text-stone-500">Money in</p>
              <p className="mt-2 text-lg font-semibold text-stone-950">
                {formatRupiah(cashOverview?.cash_in)}
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 p-4">
              <p className="text-sm text-stone-500">Money out</p>
              <p className="mt-2 text-lg font-semibold text-stone-950">
                {formatRupiah(cashOverview?.cash_out)}
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 p-4">
              <p className="text-sm text-stone-500">Recorded balance</p>
              <p className="mt-2 text-lg font-semibold text-stone-950">
                {formatRupiah(cashOverview?.balance)}
              </p>
            </div>
          </Card.Content>
        </Card>

        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="space-y-1">
            <Card.Title>Quick take</Card.Title>
            <Card.Description>The main numbers your team can read fast.</Card.Description>
          </Card.Header>
          <Card.Content className="space-y-3">
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-stone-200 px-4 py-3">
              <div className="space-y-1">
                <p className="text-sm text-stone-500">Average per sale</p>
                <p className="text-base font-semibold text-stone-950">
                  {formatRupiah(
                    (salesOverview?.orders ?? 0) > 0
                      ? grossSales / (salesOverview?.orders ?? 1)
                      : 0,
                  )}
                </p>
              </div>
              <CreditCardIcon className="size-5 text-stone-400" />
            </div>
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-stone-200 px-4 py-3">
              <div className="space-y-1">
                <p className="text-sm text-stone-500">How much went to expenses</p>
                <p className="text-base font-semibold text-stone-950">
                  {grossSales > 0
                    ? `${Math.round((expenses / grossSales) * 100)}% of sales`
                    : "No sales yet"}
                </p>
              </div>
              <WalletIcon className="size-5 text-stone-400" />
            </div>
          </Card.Content>
        </Card>
      </div>

      <div className="grid gap-3 xl:grid-cols-3">
        <Card className="border border-stone-200 shadow-none xl:col-span-1">
          <Card.Header className="space-y-1">
            <Card.Title>Payments</Card.Title>
            <Card.Description>The payment methods used most often.</Card.Description>
          </Card.Header>
          <Card.Content>
            <Table>
              <Table.ScrollContainer>
                <Table.Content aria-label="Payment summary">
                  <Table.Header>
                    <Table.Column isRowHeader>Method</Table.Column>
                    <Table.Column>Sales</Table.Column>
                    <Table.Column>Total</Table.Column>
                  </Table.Header>
                  <Table.Body>
                    {paymentBreakdown.length > 0 ? (
                      paymentBreakdown.map((row) => (
                        <Table.Row key={row.label ?? "other"}>
                          <Table.Cell>{paymentMethodLabel(row.label)}</Table.Cell>
                          <Table.Cell>{formatNumber(row.count)}</Table.Cell>
                          <Table.Cell>{formatRupiah(row.value)}</Table.Cell>
                        </Table.Row>
                      ))
                    ) : (
                      <Table.Row>
                        <Table.Cell colSpan={3}>No sales in this period yet.</Table.Cell>
                      </Table.Row>
                    )}
                  </Table.Body>
                </Table.Content>
              </Table.ScrollContainer>
            </Table>
          </Card.Content>
        </Card>

        <Card className="border border-stone-200 shadow-none xl:col-span-1">
          <Card.Header className="space-y-1">
            <Card.Title>Expenses by category</Card.Title>
            <Card.Description>The biggest costs in the selected period.</Card.Description>
          </Card.Header>
          <Card.Content>
            <Table>
              <Table.ScrollContainer>
                <Table.Content aria-label="Expense summary by category">
                  <Table.Header>
                    <Table.Column isRowHeader>Category</Table.Column>
                    <Table.Column>Entries</Table.Column>
                    <Table.Column>Total</Table.Column>
                  </Table.Header>
                  <Table.Body>
                    {expenseBreakdown.length > 0 ? (
                      expenseBreakdown.map((row) => (
                        <Table.Row key={row.label ?? "other"}>
                          <Table.Cell>{expenseCategoryLabel(row.label)}</Table.Cell>
                          <Table.Cell>{formatNumber(row.count)}</Table.Cell>
                          <Table.Cell>{formatRupiah(row.value)}</Table.Cell>
                        </Table.Row>
                      ))
                    ) : (
                      <Table.Row>
                        <Table.Cell colSpan={3}>No expenses in this period yet.</Table.Cell>
                      </Table.Row>
                    )}
                  </Table.Body>
                </Table.Content>
              </Table.ScrollContainer>
            </Table>
          </Card.Content>
        </Card>

        <Card className="border border-stone-200 shadow-none xl:col-span-1">
          <Card.Header className="space-y-1">
            <Card.Title>Best-selling items</Card.Title>
            <Card.Description>The items sold most often in this period.</Card.Description>
          </Card.Header>
          <Card.Content>
            <Table>
              <Table.ScrollContainer>
                <Table.Content aria-label="Best-selling items">
                  <Table.Header>
                    <Table.Column isRowHeader>Item</Table.Column>
                    <Table.Column>Qty</Table.Column>
                    <Table.Column>Sales</Table.Column>
                  </Table.Header>
                  <Table.Body>
                    {topProducts.length > 0 ? (
                      topProducts.map((row) => (
                        <Table.Row key={row.name ?? "item"}>
                          <Table.Cell>{row.name ?? "Unnamed item"}</Table.Cell>
                          <Table.Cell>{formatNumber(row.quantity)}</Table.Cell>
                          <Table.Cell>{formatRupiah(row.revenue)}</Table.Cell>
                        </Table.Row>
                      ))
                    ) : (
                      <Table.Row>
                        <Table.Cell colSpan={3}>No items sold in this period yet.</Table.Cell>
                      </Table.Row>
                    )}
                  </Table.Body>
                </Table.Content>
              </Table.ScrollContainer>
            </Table>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}
