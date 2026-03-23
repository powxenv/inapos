import { useEffect, useMemo, useState } from "react";
import { Alert, Card, Chip, CloseButton, ListBox, Select, Table } from "@heroui/react";
import { ChartBarIcon } from "@phosphor-icons/react/dist/csr/ChartBar";
import { CoinsIcon } from "@phosphor-icons/react/dist/csr/Coins";
import { CreditCardIcon } from "@phosphor-icons/react/dist/csr/CreditCard";
import { ReceiptIcon } from "@phosphor-icons/react/dist/csr/Receipt";
import { TrendDownIcon } from "@phosphor-icons/react/dist/csr/TrendDown";
import { TrendUpIcon } from "@phosphor-icons/react/dist/csr/TrendUp";
import { WalletIcon } from "@phosphor-icons/react/dist/csr/Wallet";
import { useQueries } from "@powersync/tanstack-react-query";
import { useI18n } from "../../lib/i18n";

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

function paymentMethodLabel(
  value: string | null | undefined,
  text: ReturnType<typeof useI18n>["text"],
) {
  if (!value || value === "other") {
    return text.modules.expenses.categories.lainnya;
  }

  if (value === "cash") {
    return text.modules.orders.paymentMethods.cash;
  }

  if (value === "transfer") {
    return text.modules.orders.paymentMethods.transfer;
  }

  if (value === "qris") {
    return text.modules.orders.paymentMethods.qris;
  }

  if (value === "tempo") {
    return text.modules.orders.paymentMethods.tempo;
  }

  return value;
}

function expenseCategoryLabel(
  value: string | null | undefined,
  text: ReturnType<typeof useI18n>["text"],
) {
  if (!value || value === "other") {
    return text.modules.expenses.categories.lainnya;
  }

  if (value === "listrik") {
    return text.modules.expenses.categories.listrik;
  }

  if (value === "air") {
    return text.modules.expenses.categories.air;
  }

  if (value === "transport") {
    return text.modules.expenses.categories.transport;
  }

  if (value === "kemasan") {
    return text.modules.expenses.categories.kemasan;
  }

  if (value === "gaji") {
    return text.modules.expenses.categories.gaji;
  }

  if (value === "perawatan") {
    return text.modules.expenses.categories.perawatan;
  }

  if (value === "lainnya") {
    return text.modules.expenses.categories.lainnya;
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
  const { formatCurrency, formatNumber, text } = useI18n();
  const [period, setPeriod] = useState<ReportPeriodId>("month");
  const [isPeriodAlertVisible, setIsPeriodAlertVisible] = useState(true);
  const reportPeriods = [
    {
      description: text.modules.reports.periods.today.description,
      id: "today" as const,
      label: text.modules.reports.periods.today.label,
    },
    {
      description: text.modules.reports.periods.days7.description,
      id: "7days" as const,
      label: text.modules.reports.periods.days7.label,
    },
    {
      description: text.modules.reports.periods.days30.description,
      id: "30days" as const,
      label: text.modules.reports.periods.days30.label,
    },
    {
      description: text.modules.reports.periods.month.description,
      id: "month" as const,
      label: text.modules.reports.periods.month.label,
    },
  ] as const;
  const range = useMemo(() => getReportRange(period), [period]);
  const selectedPeriod = reportPeriods.find((item) => item.id === period) ?? reportPeriods[3];

  useEffect(() => {
    setIsPeriodAlertVisible(true);
  }, [period]);
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
          <h3 className="text-lg font-semibold">{text.modules.reports.title}</h3>
          <p className="text-sm text-stone-500">{text.modules.reports.description}</p>
        </div>
        <Select
          aria-label={text.modules.reports.reportPeriod}
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

      {isPeriodAlertVisible ? (
        <Alert>
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>{selectedPeriod.label}</Alert.Title>
            <Alert.Description>{text.modules.reports.periodWarningDescription}</Alert.Description>
          </Alert.Content>
          <CloseButton aria-label="Close" onPress={() => setIsPeriodAlertVisible(false)} />
        </Alert>
      ) : null}

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="flex items-center justify-between gap-3">
            <div className="space-y-1">
              <Card.Title className="text-sm font-medium text-stone-600">
                {text.modules.reports.salesTotal}
              </Card.Title>
              <Card.Description>
                {text.common.prompts.salesCount(salesOverview?.orders ?? 0)}
              </Card.Description>
            </div>
            <div className="rounded-full bg-emerald-50 p-2 text-emerald-700">
              <TrendUpIcon className="size-5" />
            </div>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">{formatCurrency(grossSales)}</p>
          </Card.Content>
        </Card>

        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="flex items-center justify-between gap-3">
            <div className="space-y-1">
              <Card.Title className="text-sm font-medium text-stone-600">
                {text.modules.reports.estimatedItemCost}
              </Card.Title>
              <Card.Description>
                {text.modules.reports.estimatedItemCostDescription}
              </Card.Description>
            </div>
            <div className="rounded-full bg-amber-50 p-2 text-amber-700">
              <ReceiptIcon className="size-5" />
            </div>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">{formatCurrency(estimatedCogs)}</p>
          </Card.Content>
        </Card>

        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="flex items-center justify-between gap-3">
            <div className="space-y-1">
              <Card.Title className="text-sm font-medium text-stone-600">
                {text.modules.reports.estimatedGrossProfit}
              </Card.Title>
              <Card.Description>
                {text.modules.reports.estimatedGrossProfitDescription}
              </Card.Description>
            </div>
            <div className="rounded-full bg-sky-50 p-2 text-sky-700">
              <ChartBarIcon className="size-5" />
            </div>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">{formatCurrency(grossProfit)}</p>
          </Card.Content>
        </Card>

        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="flex items-center justify-between gap-3">
            <div className="space-y-1">
              <Card.Title className="text-sm font-medium text-stone-600">
                {text.modules.reports.expenses}
              </Card.Title>
              <Card.Description>{text.modules.reports.expensesDescription}</Card.Description>
            </div>
            <div className="rounded-full bg-rose-50 p-2 text-rose-700">
              <TrendDownIcon className="size-5" />
            </div>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">{formatCurrency(expenses)}</p>
          </Card.Content>
        </Card>

        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="flex items-center justify-between gap-3">
            <div className="space-y-1">
              <Card.Title className="text-sm font-medium text-stone-600">
                {text.modules.reports.estimatedMoneyLeft}
              </Card.Title>
              <Card.Description>
                {text.modules.reports.estimatedMoneyLeftDescription}
              </Card.Description>
            </div>
            <Chip color={netProfit >= 0 ? "success" : "danger"}>
              {netProfit >= 0 ? text.modules.reports.positive : text.modules.reports.negative}
            </Chip>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">{formatCurrency(netProfit)}</p>
          </Card.Content>
        </Card>

        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="flex items-center justify-between gap-3">
            <div className="space-y-1">
              <Card.Title className="text-sm font-medium text-stone-600">
                {text.modules.reports.stockPurchases}
              </Card.Title>
              <Card.Description>{text.modules.reports.stockPurchasesDescription}</Card.Description>
            </div>
            <div className="rounded-full bg-violet-50 p-2 text-violet-700">
              <CoinsIcon className="size-5" />
            </div>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">{formatCurrency(purchases)}</p>
          </Card.Content>
        </Card>
      </div>

      <div className="grid gap-3 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="space-y-1">
            <Card.Title>{text.modules.reports.cashRecorded}</Card.Title>
            <Card.Description>{text.modules.reports.cashRecordedDescription}</Card.Description>
          </Card.Header>
          <Card.Content className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-stone-200 p-4">
              <p className="text-sm text-stone-500">{text.modules.reports.moneyIn}</p>
              <p className="mt-2 text-lg font-semibold text-stone-950">
                {formatCurrency(cashOverview?.cash_in)}
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 p-4">
              <p className="text-sm text-stone-500">{text.modules.reports.moneyOut}</p>
              <p className="mt-2 text-lg font-semibold text-stone-950">
                {formatCurrency(cashOverview?.cash_out)}
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 p-4">
              <p className="text-sm text-stone-500">{text.modules.reports.recordedBalance}</p>
              <p className="mt-2 text-lg font-semibold text-stone-950">
                {formatCurrency(cashOverview?.balance)}
              </p>
            </div>
          </Card.Content>
        </Card>

        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="space-y-1">
            <Card.Title>{text.modules.reports.quickTake}</Card.Title>
            <Card.Description>{text.modules.reports.quickTakeDescription}</Card.Description>
          </Card.Header>
          <Card.Content className="space-y-3">
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-stone-200 px-4 py-3">
              <div className="space-y-1">
                <p className="text-sm text-stone-500">{text.modules.reports.averagePerSale}</p>
                <p className="text-base font-semibold text-stone-950">
                  {formatCurrency(
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
                <p className="text-sm text-stone-500">
                  {text.modules.reports.howMuchWentToExpenses}
                </p>
                <p className="text-base font-semibold text-stone-950">
                  {grossSales > 0
                    ? text.modules.reports.salesShare(Math.round((expenses / grossSales) * 100))
                    : text.modules.reports.noSalesYet}
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
            <Card.Title>{text.modules.reports.payments}</Card.Title>
            <Card.Description>{text.modules.reports.paymentsDescription}</Card.Description>
          </Card.Header>
          <Card.Content>
            <Table>
              <Table.ScrollContainer>
                <Table.Content aria-label={text.modules.reports.tablePaymentAria}>
                  <Table.Header>
                    <Table.Column isRowHeader>{text.common.labels.method}</Table.Column>
                    <Table.Column>{text.modules.reports.salesTotal}</Table.Column>
                    <Table.Column>{text.common.labels.total}</Table.Column>
                  </Table.Header>
                  <Table.Body>
                    {paymentBreakdown.length > 0 ? (
                      paymentBreakdown.map((row) => (
                        <Table.Row key={row.label ?? "other"}>
                          <Table.Cell>{paymentMethodLabel(row.label, text)}</Table.Cell>
                          <Table.Cell>{formatNumber(row.count)}</Table.Cell>
                          <Table.Cell>{formatCurrency(row.value)}</Table.Cell>
                        </Table.Row>
                      ))
                    ) : (
                      <Table.Row>
                        <Table.Cell colSpan={3}>{text.modules.reports.emptySales}</Table.Cell>
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
            <Card.Title>{text.modules.reports.expensesByCategory}</Card.Title>
            <Card.Description>
              {text.modules.reports.expensesByCategoryDescription}
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <Table>
              <Table.ScrollContainer>
                <Table.Content aria-label={text.modules.reports.tableExpenseAria}>
                  <Table.Header>
                    <Table.Column isRowHeader>{text.common.labels.category}</Table.Column>
                    <Table.Column>{text.common.labels.entries}</Table.Column>
                    <Table.Column>{text.common.labels.total}</Table.Column>
                  </Table.Header>
                  <Table.Body>
                    {expenseBreakdown.length > 0 ? (
                      expenseBreakdown.map((row) => (
                        <Table.Row key={row.label ?? "other"}>
                          <Table.Cell>{expenseCategoryLabel(row.label, text)}</Table.Cell>
                          <Table.Cell>{formatNumber(row.count)}</Table.Cell>
                          <Table.Cell>{formatCurrency(row.value)}</Table.Cell>
                        </Table.Row>
                      ))
                    ) : (
                      <Table.Row>
                        <Table.Cell colSpan={3}>{text.modules.reports.emptyExpenses}</Table.Cell>
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
            <Card.Title>{text.modules.reports.bestSellingItems}</Card.Title>
            <Card.Description>{text.modules.reports.bestSellingItemsDescription}</Card.Description>
          </Card.Header>
          <Card.Content>
            <Table>
              <Table.ScrollContainer>
                <Table.Content aria-label={text.modules.reports.tableTopItemsAria}>
                  <Table.Header>
                    <Table.Column isRowHeader>{text.common.labels.item}</Table.Column>
                    <Table.Column>{text.common.labels.quantity}</Table.Column>
                    <Table.Column>{text.modules.reports.salesTotal}</Table.Column>
                  </Table.Header>
                  <Table.Body>
                    {topProducts.length > 0 ? (
                      topProducts.map((row) => (
                        <Table.Row key={row.name ?? "item"}>
                          <Table.Cell>{row.name ?? text.common.states.unnamedItem}</Table.Cell>
                          <Table.Cell>{formatNumber(row.quantity)}</Table.Cell>
                          <Table.Cell>{formatCurrency(row.revenue)}</Table.Cell>
                        </Table.Row>
                      ))
                    ) : (
                      <Table.Row>
                        <Table.Cell colSpan={3}>{text.modules.reports.emptyItems}</Table.Cell>
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
