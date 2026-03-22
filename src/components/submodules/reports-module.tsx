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
    description: "Cocok untuk melihat performa hari ini.",
    id: "today",
    label: "Hari ini",
  },
  {
    description: "Ringkas untuk evaluasi mingguan.",
    id: "7days",
    label: "7 hari terakhir",
  },
  {
    description: "Melihat tren satu bulan berjalan.",
    id: "30days",
    label: "30 hari terakhir",
  },
  {
    description: "Mengikuti bulan kalender saat ini.",
    id: "month",
    label: "Bulan ini",
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
  const [salesOverviewQuery, cogsQuery, expensesQuery, purchasesQuery, cashQuery, paymentBreakdownQuery, expenseBreakdownQuery, topProductsQuery] =
    useQueries<
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
              COALESCE(payment_method, 'lainnya') AS label,
              COALESCE(SUM(total_amount), 0) AS value,
              COUNT(*) AS count
            FROM sales
            WHERE store_id = ?
              AND status != 'cancelled'
              AND date(created_at) BETWEEN date(?) AND date(?)
            GROUP BY COALESCE(payment_method, 'lainnya')
            ORDER BY value DESC, label ASC
          `,
          queryKey: ["reports", storeId, period, "payment-breakdown"],
        },
        {
          parameters: [storeId, range.startDate, range.endDate],
          query: `
            SELECT
              COALESCE(category, 'lainnya') AS label,
              COALESCE(SUM(amount), 0) AS value,
              COUNT(*) AS count
            FROM expenses
            WHERE store_id = ?
              AND date(paid_at) BETWEEN date(?) AND date(?)
            GROUP BY COALESCE(category, 'lainnya')
            ORDER BY value DESC, label ASC
          `,
          queryKey: ["reports", storeId, period, "expense-breakdown"],
        },
        {
          parameters: [storeId, range.startDate, range.endDate],
          query: `
            SELECT
              COALESCE(products.name, 'Barang tanpa nama') AS name,
              COALESCE(SUM(sale_items.quantity), 0) AS quantity,
              COALESCE(SUM(sale_items.subtotal), 0) AS revenue
            FROM sale_items
            INNER JOIN sales ON sales.id = sale_items.sale_id
            LEFT JOIN products ON products.id = sale_items.product_id
            WHERE sales.store_id = ?
              AND sales.status != 'cancelled'
              AND date(sales.created_at) BETWEEN date(?) AND date(?)
            GROUP BY COALESCE(products.name, 'Barang tanpa nama')
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
          <h3 className="text-lg font-semibold">Laporan</h3>
          <p className="text-sm text-stone-500">
            Lihat omzet, biaya, laba sederhana, dan kas tercatat untuk periode yang dipilih.
          </p>
        </div>
        <Select
          aria-label="Pilih periode laporan"
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
            Laba di bawah ini masih bersifat sederhana. HPP dihitung dari harga modal barang saat ini,
            bukan snapshot harga modal saat transaksi terjadi.
          </Alert.Description>
        </Alert.Content>
      </Alert>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="flex items-center justify-between gap-3">
            <div className="space-y-1">
              <Card.Title className="text-sm font-medium text-stone-600">
                Penjualan kotor
              </Card.Title>
              <Card.Description>{formatNumber(salesOverview?.orders)} transaksi</Card.Description>
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
                HPP estimasi
              </Card.Title>
              <Card.Description>Perkiraan modal barang terjual</Card.Description>
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
                Laba kotor
              </Card.Title>
              <Card.Description>Penjualan dikurangi HPP estimasi</Card.Description>
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
              <Card.Title className="text-sm font-medium text-stone-600">
                Pengeluaran
              </Card.Title>
              <Card.Description>Biaya operasional dalam periode ini</Card.Description>
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
                Laba bersih sederhana
              </Card.Title>
              <Card.Description>Laba kotor dikurangi pengeluaran</Card.Description>
            </div>
            <Chip color={netProfit >= 0 ? "success" : "danger"}>
              {netProfit >= 0 ? "Positif" : "Minus"}
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
                Belanja stok
              </Card.Title>
              <Card.Description>Total pembelian stok</Card.Description>
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
            <Card.Title>Arus kas tercatat</Card.Title>
            <Card.Description>
              Berdasarkan modul kas. Cocok untuk melihat uang masuk dan keluar yang memang dicatat.
            </Card.Description>
          </Card.Header>
          <Card.Content className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-stone-200 p-4">
              <p className="text-sm text-stone-500">Kas masuk</p>
              <p className="mt-2 text-lg font-semibold text-stone-950">
                {formatRupiah(cashOverview?.cash_in)}
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 p-4">
              <p className="text-sm text-stone-500">Kas keluar</p>
              <p className="mt-2 text-lg font-semibold text-stone-950">
                {formatRupiah(cashOverview?.cash_out)}
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 p-4">
              <p className="text-sm text-stone-500">Saldo tercatat</p>
              <p className="mt-2 text-lg font-semibold text-stone-950">
                {formatRupiah(cashOverview?.balance)}
              </p>
            </div>
          </Card.Content>
        </Card>

        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="space-y-1">
            <Card.Title>Kesimpulan cepat</Card.Title>
            <Card.Description>Angka utama yang paling mudah dibaca tim toko.</Card.Description>
          </Card.Header>
          <Card.Content className="space-y-3">
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-stone-200 px-4 py-3">
              <div className="space-y-1">
                <p className="text-sm text-stone-500">Rata-rata per transaksi</p>
                <p className="text-base font-semibold text-stone-950">
                  {formatRupiah(
                    (salesOverview?.orders ?? 0) > 0 ? grossSales / (salesOverview?.orders ?? 1) : 0,
                  )}
                </p>
              </div>
              <CreditCardIcon className="size-5 text-stone-400" />
            </div>
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-stone-200 px-4 py-3">
              <div className="space-y-1">
                <p className="text-sm text-stone-500">Porsi pengeluaran</p>
                <p className="text-base font-semibold text-stone-950">
                  {grossSales > 0 ? `${Math.round((expenses / grossSales) * 100)}% dari penjualan` : "Belum ada penjualan"}
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
            <Card.Title>Pembayaran</Card.Title>
            <Card.Description>Metode bayar yang paling sering dipakai.</Card.Description>
          </Card.Header>
          <Card.Content>
            <Table>
              <Table.ScrollContainer>
                <Table.Content aria-label="Ringkasan pembayaran">
                  <Table.Header>
                    <Table.Column isRowHeader>Metode</Table.Column>
                    <Table.Column>Transaksi</Table.Column>
                    <Table.Column>Nilai</Table.Column>
                  </Table.Header>
                  <Table.Body>
                    {paymentBreakdown.length > 0 ? (
                      paymentBreakdown.map((row) => (
                        <Table.Row key={row.label ?? "lainnya"}>
                          <Table.Cell>{row.label ?? "Lainnya"}</Table.Cell>
                          <Table.Cell>{formatNumber(row.count)}</Table.Cell>
                          <Table.Cell>{formatRupiah(row.value)}</Table.Cell>
                        </Table.Row>
                      ))
                    ) : (
                      <Table.Row>
                        <Table.Cell colSpan={3}>Belum ada penjualan pada periode ini.</Table.Cell>
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
            <Card.Title>Pengeluaran per kategori</Card.Title>
            <Card.Description>Biaya terbesar dalam periode yang dipilih.</Card.Description>
          </Card.Header>
          <Card.Content>
            <Table>
              <Table.ScrollContainer>
                <Table.Content aria-label="Ringkasan pengeluaran per kategori">
                  <Table.Header>
                    <Table.Column isRowHeader>Kategori</Table.Column>
                    <Table.Column>Catatan</Table.Column>
                    <Table.Column>Nilai</Table.Column>
                  </Table.Header>
                  <Table.Body>
                    {expenseBreakdown.length > 0 ? (
                      expenseBreakdown.map((row) => (
                        <Table.Row key={row.label ?? "lainnya"}>
                          <Table.Cell>{row.label ?? "Lainnya"}</Table.Cell>
                          <Table.Cell>{formatNumber(row.count)}</Table.Cell>
                          <Table.Cell>{formatRupiah(row.value)}</Table.Cell>
                        </Table.Row>
                      ))
                    ) : (
                      <Table.Row>
                        <Table.Cell colSpan={3}>Belum ada pengeluaran pada periode ini.</Table.Cell>
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
            <Card.Title>Barang terlaris</Card.Title>
            <Card.Description>Barang yang paling sering terjual pada periode ini.</Card.Description>
          </Card.Header>
          <Card.Content>
            <Table>
              <Table.ScrollContainer>
                <Table.Content aria-label="Barang terlaris">
                  <Table.Header>
                    <Table.Column isRowHeader>Barang</Table.Column>
                    <Table.Column>Qty</Table.Column>
                    <Table.Column>Omzet</Table.Column>
                  </Table.Header>
                  <Table.Body>
                    {topProducts.length > 0 ? (
                      topProducts.map((row) => (
                        <Table.Row key={row.name ?? "barang"}>
                          <Table.Cell>{row.name ?? "Barang tanpa nama"}</Table.Cell>
                          <Table.Cell>{formatNumber(row.quantity)}</Table.Cell>
                          <Table.Cell>{formatRupiah(row.revenue)}</Table.Cell>
                        </Table.Row>
                      ))
                    ) : (
                      <Table.Row>
                        <Table.Cell colSpan={3}>Belum ada barang terjual pada periode ini.</Table.Cell>
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
