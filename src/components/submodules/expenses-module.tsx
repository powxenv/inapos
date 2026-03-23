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
import { useI18n } from "../../lib/i18n";
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

type ExpenseFormValues = {
  amount: string;
  category: string;
  paidAt: string;
  title: string;
};

const defaultValues: ExpenseFormValues = {
  amount: "0",
  category: "",
  paidAt: new Date().toISOString().slice(0, 10),
  title: "",
};

const expenseCategoryOptions = [
  { id: "listrik", label: "Electricity" },
  { id: "air", label: "Water" },
  { id: "transport", label: "Transport" },
  { id: "kemasan", label: "Packaging" },
  { id: "gaji", label: "Wages" },
  { id: "perawatan", label: "Maintenance" },
  { id: "lainnya", label: "Other" },
] as const;

function normalizeText(value: string) {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function formatDate(value: string | null | undefined, locale: string) {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
  }).format(new Date(value));
}

function formatRupiah(value: number | null | undefined, locale: string) {
  return new Intl.NumberFormat(locale, {
    currency: "IDR",
    maximumFractionDigits: 0,
    style: "currency",
  }).format(value ?? 0);
}

function expenseCategoryLabel(
  value: string | null | undefined,
  text: ReturnType<typeof useI18n>["text"],
) {
  if (!value) {
    return text.common.states.noCategory;
  }

  return (
    {
      air: text.modules.expenses.categories.air,
      gaji: text.modules.expenses.categories.gaji,
      kemasan: text.modules.expenses.categories.kemasan,
      lainnya: text.modules.expenses.categories.lainnya,
      listrik: text.modules.expenses.categories.listrik,
      perawatan: text.modules.expenses.categories.perawatan,
      transport: text.modules.expenses.categories.transport,
    }[value] ?? value
  );
}

export function ExpensesModule({ storeId }: ExpensesModuleProps) {
  const { locale, text } = useI18n();
  const expenseSchema = z.object({
    amount: z
      .string()
      .trim()
      .min(1, text.modules.expenses.validation.amount)
      .refine((value) => !Number.isNaN(Number(value)) && Number(value) > 0, {
        message: text.modules.expenses.validation.amountMin,
      }),
    category: z.string().trim().max(60, text.modules.expenses.validation.categoryMax),
    paidAt: z.string().trim().min(1, text.modules.expenses.validation.date),
    title: z
      .string()
      .trim()
      .min(1, text.modules.expenses.validation.titleMin)
      .max(120, text.modules.expenses.validation.titleMax),
  });
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
      title: expense.title ?? text.modules.expenses.title,
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
      setFormError(error instanceof Error ? error.message : text.modules.expenses.saveError);
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
      setFormError(error instanceof Error ? error.message : text.modules.expenses.deleteError);
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">{text.modules.expenses.title}</h3>
        <p className="text-sm text-stone-500">{text.modules.expenses.description}</p>
      </div>

      {formError ? (
        <Alert status="danger">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>{text.modules.expenses.thatDidNotWork}</Alert.Title>
            <Alert.Description>{formError}</Alert.Description>
          </Alert.Content>
        </Alert>
      ) : null}

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-sm font-medium text-stone-600">
              {text.modules.expenses.today}
            </Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">
              {formatRupiah(summary?.today_total, locale)}
            </p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-sm font-medium text-stone-600">
              {text.modules.expenses.thisMonth}
            </Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">
              {formatRupiah(summary?.month_total, locale)}
            </p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-sm font-medium text-stone-600">
              {text.modules.expenses.savedEntries}
            </Card.Title>
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
              aria-label={text.modules.expenses.searchLabel}
              className="w-full"
              onChange={(event) => setSearch(event.target.value)}
              placeholder={text.modules.expenses.placeholderSearch}
              value={search}
            />
          </InputGroup>
          <Modal state={modalState}>
            <Button onPress={openCreateModal}>
              <PlusIcon aria-hidden size={16} />
              {text.modules.expenses.addExpense}
            </Button>
            <Modal.Backdrop>
              <Modal.Container placement="center" size="lg">
                <Modal.Dialog
                  aria-label={
                    editingExpense
                      ? text.modules.expenses.headingEdit(editingExpense.title)
                      : text.modules.expenses.headingNew
                  }
                >
                  {({ close }) => (
                    <>
                      <Modal.Header>
                        <Modal.Heading>
                          {editingExpense
                            ? text.modules.expenses.headingEdit(editingExpense.title)
                            : text.modules.expenses.headingNew}
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
                            <label
                              className="block text-sm font-medium text-stone-700"
                              htmlFor="expense-title"
                            >
                              {text.modules.expenses.whatFor}
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
                                    placeholder={text.modules.expenses.placeholderTitle}
                                    value={field.value}
                                  />
                                </InputGroup>
                              )}
                            />
                            {formState.errors.title?.message ? (
                              <p className="text-sm text-red-600">
                                {formState.errors.title.message}
                              </p>
                            ) : null}
                          </div>

                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                              <label
                                className="block text-sm font-medium text-stone-700"
                                htmlFor="expense-category"
                              >
                                {text.modules.expenses.categoryOptional}
                              </label>
                              <Controller
                                control={control}
                                name="category"
                                render={({ field }) => (
                                  <Select
                                    aria-label={text.modules.expenses.placeholderCategory}
                                    className="w-full"
                                    id="expense-category"
                                    onBlur={field.onBlur}
                                    onSelectionChange={(key) =>
                                      field.onChange(typeof key === "string" ? key : "")
                                    }
                                    placeholder={text.modules.expenses.placeholderCategory}
                                    selectedKey={field.value || null}
                                  >
                                    <Select.Trigger className="w-full">
                                      <Select.Value />
                                      <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                      <ListBox>
                                        <ListBox.Item id="">
                                          {text.common.states.noCategory}
                                        </ListBox.Item>
                                        {expenseCategoryOptions.map((option) => (
                                          <ListBox.Item id={option.id} key={option.id}>
                                            {expenseCategoryLabel(option.id, text)}
                                          </ListBox.Item>
                                        ))}
                                      </ListBox>
                                    </Select.Popover>
                                  </Select>
                                )}
                              />
                            </div>

                            <div className="space-y-2">
                              <label
                                className="block text-sm font-medium text-stone-700"
                                htmlFor="expense-amount"
                              >
                                {text.common.labels.amount}
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
                                <p className="text-sm text-red-600">
                                  {formState.errors.amount.message}
                                </p>
                              ) : null}
                            </div>

                            <div className="space-y-2">
                              <label
                                className="block text-sm font-medium text-stone-700"
                                htmlFor="expense-date"
                              >
                                {text.common.labels.date}
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
                                <p className="text-sm text-red-600">
                                  {formState.errors.paidAt.message}
                                </p>
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
                              {text.common.actions.cancel}
                            </Button>
                            <Button isPending={isSaving} type="submit">
                              {editingExpense
                                ? text.common.actions.saveChanges
                                : text.common.actions.saveExpense}
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
          {text.common.prompts.ofTotal(
            filteredExpenses.length,
            expenses.length,
            text.modules.expenses.tableCountLabel,
          )}
        </p>
      </div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label={text.modules.expenses.title}>
            <Table.Header>
              <Table.Column isRowHeader>{text.common.labels.date}</Table.Column>
              <Table.Column>{text.modules.expenses.purpose}</Table.Column>
              <Table.Column>{text.common.labels.category}</Table.Column>
              <Table.Column>{text.common.labels.amount}</Table.Column>
              <Table.Column className="w-[160px]">{text.common.labels.actions}</Table.Column>
            </Table.Header>
            <Table.Body>
              {filteredExpenses.length > 0 ? (
                filteredExpenses.map((expense) => (
                  <Table.Row key={expense.id}>
                    <Table.Cell>{formatDate(expense.paid_at, locale)}</Table.Cell>
                    <Table.Cell>{expense.title ?? text.modules.expenses.title}</Table.Cell>
                    <Table.Cell>{expenseCategoryLabel(expense.category, text)}</Table.Cell>
                    <Table.Cell>{formatRupiah(expense.amount, locale)}</Table.Cell>
                    <Table.Cell>
                      <div className="flex items-center gap-2">
                        <Button onPress={() => startEdit(expense)} size="sm" variant="outline">
                          <PencilSimpleIcon aria-hidden size={16} />
                          {text.common.actions.edit}
                        </Button>
                        <AlertDialog>
                          <Button size="sm" variant="tertiary">
                            <TrashIcon aria-hidden size={16} />
                            {text.common.actions.delete}
                          </Button>
                          <AlertDialog.Backdrop>
                            <AlertDialog.Container placement="center" size="sm">
                              <AlertDialog.Dialog>
                                <AlertDialog.Header>
                                  <AlertDialog.Heading>
                                    {text.modules.expenses.deleteTitle}
                                  </AlertDialog.Heading>
                                </AlertDialog.Header>
                                <AlertDialog.Body>
                                  {text.modules.expenses.deleteBody(
                                    expense.title ?? text.modules.expenses.title,
                                  )}
                                </AlertDialog.Body>
                                <AlertDialog.Footer>
                                  <Button slot="close" variant="tertiary">
                                    {text.common.actions.cancel}
                                  </Button>
                                  <Button
                                    isPending={pendingDeleteId === expense.id}
                                    onPress={() => void deleteExpense(expense.id)}
                                    variant="danger"
                                  >
                                    {text.common.actions.delete}
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
                    {expensesQuery.isPending
                      ? text.modules.expenses.loading
                      : text.modules.expenses.empty}
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
