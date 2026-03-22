import { useMemo, useState } from "react";
import {
  Alert,
  AlertDialog,
  Button,
  Card,
  Input,
  InputGroup,
  ListBox,
  Modal,
  Select,
  Table,
  useOverlayState,
} from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/csr/MagnifyingGlass";
import { PencilSimpleIcon } from "@phosphor-icons/react/dist/csr/PencilSimple";
import { PlusIcon } from "@phosphor-icons/react/dist/csr/Plus";
import { ReceiptIcon } from "@phosphor-icons/react/dist/csr/Receipt";
import { TrashIcon } from "@phosphor-icons/react/dist/csr/Trash";
import { Controller, useForm } from "react-hook-form";
import { useQueries } from "@powersync/tanstack-react-query";
import { z } from "zod";
import { powerSync } from "../../lib/powersync";

type ExpensesModuleProps = {
  storeId: string;
};

type ExpenseRow = {
  amount: number | null;
  category: string | null;
  id: string;
  paid_at: string | null;
  title: string | null;
};

type ExpenseSummaryRow = {
  count: number | null;
  month_total: number | null;
  today_total: number | null;
};

type EditingExpense = {
  id: string;
  title: string;
};

const expenseSchema = z.object({
  amount: z
    .string()
    .trim()
    .min(1, "Nominal wajib diisi.")
    .refine((value) => !Number.isNaN(Number(value)) && Number(value) > 0, {
      message: "Nominal harus lebih dari 0.",
    }),
  category: z.string().trim().max(60, "Kategori maksimal 60 karakter."),
  paidAt: z.string().trim().min(1, "Tanggal wajib diisi."),
  title: z.string().trim().min(1, "Keperluan wajib diisi.").max(120, "Keperluan maksimal 120 karakter."),
});

type ExpenseFormValues = z.infer<typeof expenseSchema>;

const defaultValues: ExpenseFormValues = {
  amount: "0",
  category: "",
  paidAt: new Date().toISOString().slice(0, 10),
  title: "",
};

const expenseCategoryOptions = [
  { id: "listrik", label: "Listrik" },
  { id: "air", label: "Air" },
  { id: "transport", label: "Transport" },
  { id: "kemasan", label: "Kemasan" },
  { id: "gaji", label: "Gaji" },
  { id: "perawatan", label: "Perawatan" },
  { id: "lainnya", label: "Lainnya" },
] as const;

function normalizeText(value: string) {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function formatDate(value: string | null | undefined) {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
  }).format(new Date(value));
}

function formatRupiah(value: number | null | undefined) {
  return new Intl.NumberFormat("id-ID", {
    currency: "IDR",
    maximumFractionDigits: 0,
    style: "currency",
  }).format(value ?? 0);
}

export function ExpensesModule({ storeId }: ExpensesModuleProps) {
  const modalState = useOverlayState();
  const [search, setSearch] = useState("");
  const [editingExpense, setEditingExpense] = useState<EditingExpense | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  const { control, formState, handleSubmit, reset } = useForm<ExpenseFormValues>({
    defaultValues,
    resolver: zodResolver(expenseSchema),
  });
  const [expensesQuery, summaryQuery] = useQueries<[ExpenseRow, ExpenseSummaryRow]>({
    queries: [
      {
        parameters: [storeId],
        query: `
          SELECT id, title, category, amount, paid_at
          FROM expenses
          WHERE store_id = ?
          ORDER BY COALESCE(paid_at, updated_at) DESC
        `,
        queryKey: ["expenses", storeId],
      },
      {
        parameters: [storeId],
        query: `
          SELECT
            COALESCE(SUM(CASE WHEN date(paid_at) = date('now', 'localtime') THEN amount ELSE 0 END), 0) AS today_total,
            COALESCE(SUM(CASE WHEN strftime('%Y-%m', paid_at) = strftime('%Y-%m', 'now', 'localtime') THEN amount ELSE 0 END), 0) AS month_total,
            COUNT(*) AS count
          FROM expenses
          WHERE store_id = ?
        `,
        queryKey: ["expenses-summary", storeId],
      },
    ],
  });

  const expenses = expensesQuery.data ?? [];
  const summary = summaryQuery.data?.[0];
  const searchValue = search.trim().toLowerCase();
  const filteredExpenses = useMemo(() => {
    if (!searchValue) {
      return expenses;
    }

    return expenses.filter((expense) =>
      [expense.title, expense.category]
        .filter((value): value is string => Boolean(value))
        .some((value) => value.toLowerCase().includes(searchValue)),
    );
  }, [expenses, searchValue]);

  function resetForm() {
    setEditingExpense(null);
    setFormError(null);
    reset({
      ...defaultValues,
      paidAt: new Date().toISOString().slice(0, 10),
    });
  }

  function openCreateModal() {
    resetForm();
    modalState.open();
  }

  function startEdit(expense: ExpenseRow) {
    setEditingExpense({
      id: expense.id,
      title: expense.title ?? "Pengeluaran",
    });
    setFormError(null);
    reset({
      amount: String(expense.amount ?? 0),
      category: expense.category ?? "",
      paidAt: expense.paid_at ? expense.paid_at.slice(0, 10) : defaultValues.paidAt,
      title: expense.title ?? "",
    });
    modalState.open();
  }

  async function saveExpense(values: ExpenseFormValues, close: () => void) {
    setFormError(null);
    setIsSaving(true);

    const now = new Date().toISOString();
    const payload = {
      amount: Number(values.amount),
      category: normalizeText(values.category),
      paid_at: new Date(`${values.paidAt}T00:00:00`).toISOString(),
      store_id: storeId,
      title: values.title.trim(),
      updated_at: now,
    };

    try {
      if (editingExpense) {
        await powerSync.execute(
          `
            UPDATE expenses
            SET
              title = ?,
              category = ?,
              amount = ?,
              paid_at = ?,
              updated_at = ?
            WHERE id = ?
          `,
          [
            payload.title,
            payload.category,
            payload.amount,
            payload.paid_at,
            payload.updated_at,
            editingExpense.id,
          ],
        );
      } else {
        await powerSync.execute(
          `
            INSERT INTO expenses (
              id,
              store_id,
              title,
              category,
              amount,
              paid_at,
              updated_at
            )
            VALUES (?, ?, ?, ?, ?, ?, ?)
          `,
          [
            crypto.randomUUID(),
            payload.store_id,
            payload.title,
            payload.category,
            payload.amount,
            payload.paid_at,
            payload.updated_at,
          ],
        );
      }

      setIsSaving(false);
      close();
      resetForm();
    } catch (error) {
      setIsSaving(false);
      setFormError(error instanceof Error ? error.message : "Gagal menyimpan pengeluaran.");
    }
  }

  async function deleteExpense(expenseId: string) {
    setFormError(null);
    setPendingDeleteId(expenseId);

    try {
      await powerSync.execute("DELETE FROM expenses WHERE id = ?", [expenseId]);

      if (editingExpense?.id === expenseId) {
        resetForm();
      }

      setPendingDeleteId(null);
    } catch (error) {
      setPendingDeleteId(null);
      setFormError(error instanceof Error ? error.message : "Gagal menghapus pengeluaran.");
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">Pengeluaran</h3>
        <p className="text-sm text-stone-500">
          Catat biaya operasional agar toko mudah melihat pengeluaran harian dan bulanan.
        </p>
      </div>

      {formError ? (
        <Alert status="danger">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>Aksi tidak berhasil</Alert.Title>
            <Alert.Description>{formError}</Alert.Description>
          </Alert.Content>
        </Alert>
      ) : null}

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-sm font-medium text-stone-600">Hari ini</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">{formatRupiah(summary?.today_total)}</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-sm font-medium text-stone-600">Bulan ini</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">{formatRupiah(summary?.month_total)}</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-sm font-medium text-stone-600">Catatan tersimpan</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">{summary?.count ?? 0}</p>
          </Card.Content>
        </Card>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-1 flex-wrap items-center gap-3">
          <InputGroup className="max-w-md">
            <InputGroup.Prefix className="text-stone-400">
              <MagnifyingGlassIcon aria-hidden size={18} />
            </InputGroup.Prefix>
            <InputGroup.Input
              aria-label="Cari pengeluaran"
              className="w-full"
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Cari keperluan atau kategori"
              value={search}
            />
          </InputGroup>
          <Modal state={modalState}>
            <Button onPress={openCreateModal}>
              <PlusIcon aria-hidden size={16} />
              Tambah pengeluaran
            </Button>
            <Modal.Backdrop>
              <Modal.Container placement="center" size="lg">
                <Modal.Dialog aria-label={editingExpense ? "Ubah pengeluaran" : "Tambah pengeluaran"}>
                  {({ close }) => (
                    <>
                      <Modal.Header>
                        <Modal.Heading>
                          {editingExpense
                            ? `Ubah pengeluaran: ${editingExpense.title}`
                            : "Tambah pengeluaran"}
                        </Modal.Heading>
                      </Modal.Header>
                      <Modal.Body>
                        <form
                          className="space-y-4"
                          onSubmit={handleSubmit(async (values) => {
                            await saveExpense(values, close);
                          })}
                        >
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-stone-700" htmlFor="expense-title">
                              Keperluan
                            </label>
                            <Controller
                              control={control}
                              name="title"
                              render={({ field, fieldState }) => (
                                <InputGroup className="w-full" isInvalid={fieldState.invalid}>
                                  <InputGroup.Prefix className="text-stone-400">
                                    <ReceiptIcon aria-hidden size={18} />
                                  </InputGroup.Prefix>
                                  <InputGroup.Input
                                    aria-invalid={fieldState.invalid}
                                    className="w-full"
                                    id="expense-title"
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    placeholder="Contoh: Bayar listrik"
                                    value={field.value}
                                  />
                                </InputGroup>
                              )}
                            />
                            {formState.errors.title?.message ? (
                              <p className="text-sm text-red-600">{formState.errors.title.message}</p>
                            ) : null}
                          </div>

                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                              <label className="block text-sm font-medium text-stone-700" htmlFor="expense-category">
                                Kategori (optional)
                              </label>
                              <Controller
                                control={control}
                                name="category"
                                render={({ field }) => (
                                  <Select
                                    aria-label="Kategori pengeluaran"
                                    className="w-full"
                                    id="expense-category"
                                    onBlur={field.onBlur}
                                    onSelectionChange={(key) =>
                                      field.onChange(typeof key === "string" ? key : "")
                                    }
                                    placeholder="Pilih kategori"
                                    selectedKey={field.value || null}
                                  >
                                    <Select.Trigger className="w-full">
                                      <Select.Value />
                                      <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                      <ListBox>
                                        <ListBox.Item id="">Tanpa kategori</ListBox.Item>
                                        {expenseCategoryOptions.map((option) => (
                                          <ListBox.Item id={option.id} key={option.id}>
                                            {option.label}
                                          </ListBox.Item>
                                        ))}
                                      </ListBox>
                                    </Select.Popover>
                                  </Select>
                                )}
                              />
                            </div>

                            <div className="space-y-2">
                              <label className="block text-sm font-medium text-stone-700" htmlFor="expense-amount">
                                Nominal
                              </label>
                              <Controller
                                control={control}
                                name="amount"
                                render={({ field, fieldState }) => (
                                  <Input
                                    aria-invalid={fieldState.invalid}
                                    className="w-full"
                                    id="expense-amount"
                                    min={0}
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    placeholder="0"
                                    type="number"
                                    value={field.value}
                                  />
                                )}
                              />
                              {formState.errors.amount?.message ? (
                                <p className="text-sm text-red-600">{formState.errors.amount.message}</p>
                              ) : null}
                            </div>

                            <div className="space-y-2">
                              <label className="block text-sm font-medium text-stone-700" htmlFor="expense-date">
                                Tanggal
                              </label>
                              <Controller
                                control={control}
                                name="paidAt"
                                render={({ field, fieldState }) => (
                                  <Input
                                    aria-invalid={fieldState.invalid}
                                    className="w-full"
                                    id="expense-date"
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    type="date"
                                    value={field.value}
                                  />
                                )}
                              />
                              {formState.errors.paidAt?.message ? (
                                <p className="text-sm text-red-600">{formState.errors.paidAt.message}</p>
                              ) : null}
                            </div>
                          </div>

                          <div className="flex justify-end gap-2">
                            <Button
                              onPress={() => {
                                close();
                                resetForm();
                              }}
                              type="button"
                              variant="tertiary"
                            >
                              Batal
                            </Button>
                            <Button isPending={isSaving} type="submit">
                              {editingExpense ? "Simpan perubahan" : "Simpan pengeluaran"}
                            </Button>
                          </div>
                        </form>
                      </Modal.Body>
                    </>
                  )}
                </Modal.Dialog>
              </Modal.Container>
            </Modal.Backdrop>
          </Modal>
        </div>
        <p className="text-sm text-stone-500">
          {filteredExpenses.length} dari {expenses.length} pengeluaran
        </p>
      </div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Tabel pengeluaran toko">
            <Table.Header>
              <Table.Column isRowHeader>Tanggal</Table.Column>
              <Table.Column>Keperluan</Table.Column>
              <Table.Column>Kategori</Table.Column>
              <Table.Column>Nominal</Table.Column>
              <Table.Column className="w-[160px]">Aksi</Table.Column>
            </Table.Header>
            <Table.Body>
              {filteredExpenses.length > 0 ? (
                filteredExpenses.map((expense) => (
                  <Table.Row key={expense.id}>
                    <Table.Cell>{formatDate(expense.paid_at)}</Table.Cell>
                    <Table.Cell>{expense.title ?? "-"}</Table.Cell>
                    <Table.Cell>{expense.category ?? "-"}</Table.Cell>
                    <Table.Cell>{formatRupiah(expense.amount)}</Table.Cell>
                    <Table.Cell>
                      <div className="flex items-center gap-2">
                        <Button onPress={() => startEdit(expense)} size="sm" variant="outline">
                          <PencilSimpleIcon aria-hidden size={16} />
                          Ubah
                        </Button>
                        <AlertDialog>
                          <Button size="sm" variant="tertiary">
                            <TrashIcon aria-hidden size={16} />
                            Hapus
                          </Button>
                          <AlertDialog.Backdrop>
                            <AlertDialog.Container placement="center" size="sm">
                              <AlertDialog.Dialog>
                                <AlertDialog.Header>
                                  <AlertDialog.Heading>Hapus pengeluaran?</AlertDialog.Heading>
                                </AlertDialog.Header>
                                <AlertDialog.Body>
                                  {expense.title ?? "Pengeluaran ini"} akan dihapus dari catatan pengeluaran.
                                </AlertDialog.Body>
                                <AlertDialog.Footer>
                                  <Button slot="close" variant="tertiary">
                                    Batal
                                  </Button>
                                  <Button
                                    isPending={pendingDeleteId === expense.id}
                                    onPress={() => void deleteExpense(expense.id)}
                                    variant="danger"
                                  >
                                    Hapus
                                  </Button>
                                </AlertDialog.Footer>
                              </AlertDialog.Dialog>
                            </AlertDialog.Container>
                          </AlertDialog.Backdrop>
                        </AlertDialog>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))
              ) : (
                <Table.Row>
                  <Table.Cell colSpan={5}>
                    {expensesQuery.isPending ? "Memuat pengeluaran..." : "Belum ada pengeluaran untuk toko ini."}
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}
