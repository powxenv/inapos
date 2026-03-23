import { useMemo, useState } from "react";
import {
  Alert,
  AlertDialog,
  Button,
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

type PurchasesModuleProps = {
  storeId: string;
};

type PurchaseRow = {
  id: string;
  invoice_number: string | null;
  purchased_at: string | null;
  status: string | null;
  supplier_id: string | null;
  supplier_name: string | null;
  total_amount: number | null;
};

type SupplierOptionRow = {
  id: string;
  name: string | null;
};

type EditingPurchase = {
  id: string;
  label: string;
};

type PurchaseFormValues = {
  invoiceNumber: string;
  purchasedAt: string;
  status: "draft" | "ordered" | "received";
  supplierId: string;
  totalAmount: string;
};

const defaultValues: PurchaseFormValues = {
  invoiceNumber: "",
  purchasedAt: new Date().toISOString().slice(0, 10),
  status: "draft",
  supplierId: "",
  totalAmount: "0",
};

const purchaseStatusOptions = [
  { id: "draft", label: "Draft" },
  { id: "ordered", label: "Ordered" },
  { id: "received", label: "Received" },
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

function purchaseStatusLabel(
  value: string | null | undefined,
  text: ReturnType<typeof useI18n>["text"],
) {
  if (!value) {
    return text.common.states.notAdded;
  }

  return (
    {
      draft: text.modules.purchases.statusOptions.draft,
      ordered: text.modules.purchases.statusOptions.ordered,
      received: text.modules.purchases.statusOptions.received,
    }[value] ?? value
  );
}

export function PurchasesModule({ storeId }: PurchasesModuleProps) {
  const { formatCurrency, locale, text } = useI18n();
  const purchaseSchema = z.object({
    invoiceNumber: z.string().trim().max(80, text.modules.purchases.validation.invoiceMax),
    purchasedAt: z.string().trim().min(1, text.modules.purchases.validation.purchasedAt),
    status: z.enum(["draft", "ordered", "received"]),
    supplierId: z.string().trim().max(100, text.modules.purchases.validation.supplierId),
    totalAmount: z
      .string()
      .trim()
      .min(1, text.modules.purchases.validation.totalAmount)
      .refine((value) => !Number.isNaN(Number(value)) && Number(value) >= 0, {
        message: text.modules.purchases.validation.totalAmountMin,
      }),
  });
  const modalState = useOverlayState();
  const [search, setSearch] = useState("");
  const [editingPurchase, setEditingPurchase] = useState<EditingPurchase | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  const { control, formState, handleSubmit, reset } = useForm<PurchaseFormValues>({
    defaultValues,
    resolver: zodResolver(purchaseSchema),
  });
  const [purchasesQuery, suppliersQuery] = useQueries<[PurchaseRow, SupplierOptionRow]>({
    queries: [
      {
        parameters: [storeId],
        query: `
          SELECT
            purchases.id,
            purchases.invoice_number,
            purchases.purchased_at,
            purchases.status,
            purchases.supplier_id,
            purchases.total_amount,
            suppliers.name AS supplier_name
          FROM purchases
          LEFT JOIN suppliers ON suppliers.id = purchases.supplier_id
          WHERE purchases.store_id = ?
          ORDER BY COALESCE(purchases.purchased_at, purchases.updated_at) DESC
        `,
        queryKey: ["purchases", storeId],
      },
      {
        parameters: [storeId],
        query: `
          SELECT id, name
          FROM suppliers
          WHERE store_id = ?
          ORDER BY LOWER(COALESCE(name, ''))
        `,
        queryKey: ["purchase-suppliers", storeId],
      },
    ],
  });

  const purchases = purchasesQuery.data ?? [];
  const supplierOptions = suppliersQuery.data ?? [];
  const searchValue = search.trim().toLowerCase();
  const filteredPurchases = useMemo(() => {
    if (!searchValue) {
      return purchases;
    }

    return purchases.filter((purchase) =>
      [purchase.invoice_number, purchase.supplier_name, purchase.status]
        .filter((value): value is string => Boolean(value))
        .some((value) => value.toLowerCase().includes(searchValue)),
    );
  }, [purchases, searchValue]);

  function resetForm() {
    setEditingPurchase(null);
    setFormError(null);
    reset({
      ...defaultValues,
      purchasedAt: new Date().toISOString().slice(0, 10),
    });
  }

  function openCreateModal() {
    resetForm();
    modalState.open();
  }

  function startEdit(purchase: PurchaseRow) {
    setEditingPurchase({
      id: purchase.id,
      label: purchase.invoice_number ?? purchase.supplier_name ?? text.modules.purchases.title,
    });
    setFormError(null);
    reset({
      invoiceNumber: purchase.invoice_number ?? "",
      purchasedAt: purchase.purchased_at
        ? purchase.purchased_at.slice(0, 10)
        : defaultValues.purchasedAt,
      status:
        purchase.status === "ordered" || purchase.status === "received" ? purchase.status : "draft",
      supplierId: purchase.supplier_id ?? "",
      totalAmount: String(purchase.total_amount ?? 0),
    });
    modalState.open();
  }

  async function savePurchase(values: PurchaseFormValues, close: () => void) {
    setFormError(null);
    setIsSaving(true);

    const now = new Date().toISOString();
    const payload = {
      invoice_number: normalizeText(values.invoiceNumber),
      purchased_at: values.purchasedAt
        ? new Date(`${values.purchasedAt}T00:00:00`).toISOString()
        : null,
      status: values.status,
      store_id: storeId,
      supplier_id: normalizeText(values.supplierId),
      total_amount: Number(values.totalAmount),
      updated_at: now,
    };

    try {
      if (editingPurchase) {
        await powerSync.execute(
          `
            UPDATE purchases
            SET
              supplier_id = ?,
              invoice_number = ?,
              status = ?,
              total_amount = ?,
              purchased_at = ?,
              updated_at = ?
            WHERE id = ?
          `,
          [
            payload.supplier_id,
            payload.invoice_number,
            payload.status,
            payload.total_amount,
            payload.purchased_at,
            payload.updated_at,
            editingPurchase.id,
          ],
        );
      } else {
        await powerSync.execute(
          `
            INSERT INTO purchases (
              id,
              store_id,
              supplier_id,
              invoice_number,
              status,
              total_amount,
              purchased_at,
              updated_at
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
          `,
          [
            crypto.randomUUID(),
            payload.store_id,
            payload.supplier_id,
            payload.invoice_number,
            payload.status,
            payload.total_amount,
            payload.purchased_at,
            payload.updated_at,
          ],
        );
      }

      setIsSaving(false);
      close();
      resetForm();
    } catch (error) {
      setIsSaving(false);
      setFormError(error instanceof Error ? error.message : text.modules.purchases.saveError);
    }
  }

  async function deletePurchase(purchaseId: string) {
    setFormError(null);
    setPendingDeleteId(purchaseId);

    try {
      await powerSync.execute("DELETE FROM purchases WHERE id = ?", [purchaseId]);

      if (editingPurchase?.id === purchaseId) {
        resetForm();
      }

      setPendingDeleteId(null);
    } catch (error) {
      setPendingDeleteId(null);
      setFormError(error instanceof Error ? error.message : text.modules.purchases.deleteError);
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">{text.modules.purchases.title}</h3>
        <p className="text-sm text-stone-500">{text.modules.purchases.description}</p>
      </div>

      {formError ? (
        <Alert status="danger">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>{text.modules.purchases.thatDidNotWork}</Alert.Title>
            <Alert.Description>{formError}</Alert.Description>
          </Alert.Content>
        </Alert>
      ) : null}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-1 flex-wrap items-center gap-3">
          <InputGroup className="max-w-md">
            <InputGroup.Prefix className="text-stone-400">
              <MagnifyingGlassIcon aria-hidden size={18} />
            </InputGroup.Prefix>
            <InputGroup.Input
              aria-label={text.modules.purchases.searchLabel}
              className="w-full"
              onChange={(event) => setSearch(event.target.value)}
              placeholder={text.modules.purchases.placeholderSearch}
              value={search}
            />
          </InputGroup>
          <Modal state={modalState}>
            <Button onPress={openCreateModal}>
              <PlusIcon aria-hidden size={16} />
              {text.modules.purchases.addPurchase}
            </Button>
            <Modal.Backdrop>
              <Modal.Container placement="center" size="lg">
                <Modal.Dialog
                  aria-label={
                    editingPurchase
                      ? text.modules.purchases.headingEdit(editingPurchase.label)
                      : text.modules.purchases.headingNew
                  }
                >
                  {({ close }) => (
                    <>
                      <Modal.Header>
                        <Modal.Heading>
                          {editingPurchase
                            ? text.modules.purchases.headingEdit(editingPurchase.label)
                            : text.modules.purchases.headingNew}
                        </Modal.Heading>
                      </Modal.Header>
                      <Modal.Body>
                        <form
                          className="space-y-4"
                          onSubmit={handleSubmit(async (values) => {
                            await savePurchase(values, close);
                          })}
                        >
                          <div className="space-y-2">
                            <label
                              className="block text-sm font-medium text-stone-700"
                              htmlFor="purchase-invoice-number"
                            >
                              {text.modules.purchases.invoiceOptional}
                            </label>
                            <Controller
                              control={control}
                              name="invoiceNumber"
                              render={({ field, fieldState }) => (
                                <InputGroup className="w-full" isInvalid={fieldState.invalid}>
                                  <InputGroup.Prefix className="text-stone-400">
                                    <ReceiptIcon aria-hidden size={18} />
                                  </InputGroup.Prefix>
                                  <InputGroup.Input
                                    aria-invalid={fieldState.invalid}
                                    className="w-full"
                                    id="purchase-invoice-number"
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    placeholder={text.modules.purchases.placeholderInvoice}
                                    value={field.value}
                                  />
                                </InputGroup>
                              )}
                            />
                            {formState.errors.invoiceNumber?.message ? (
                              <p className="text-sm text-red-600">
                                {formState.errors.invoiceNumber.message}
                              </p>
                            ) : null}
                          </div>

                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                              <label
                                className="block text-sm font-medium text-stone-700"
                                htmlFor="purchase-supplier"
                              >
                                {text.modules.purchases.supplierOptional}
                              </label>
                              <Controller
                                control={control}
                                name="supplierId"
                                render={({ field }) => (
                                  <Select
                                    aria-label={text.modules.purchases.placeholderSupplier}
                                    className="w-full"
                                    id="purchase-supplier"
                                    onBlur={field.onBlur}
                                    onSelectionChange={(key) =>
                                      field.onChange(typeof key === "string" ? key : "")
                                    }
                                    placeholder={text.modules.purchases.placeholderSupplier}
                                    selectedKey={field.value || null}
                                  >
                                    <Select.Trigger className="w-full">
                                      <Select.Value />
                                      <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                      <ListBox>
                                        <ListBox.Item id="">
                                          {text.common.states.noSupplier}
                                        </ListBox.Item>
                                        {supplierOptions.map((supplier) => (
                                          <ListBox.Item id={supplier.id} key={supplier.id}>
                                            {supplier.name ?? text.common.states.unnamedSupplier}
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
                                htmlFor="purchase-status"
                              >
                                {text.common.labels.status}
                              </label>
                              <Controller
                                control={control}
                                name="status"
                                render={({ field }) => (
                                  <Select
                                    aria-label={text.modules.purchases.placeholderStatus}
                                    className="w-full"
                                    id="purchase-status"
                                    onBlur={field.onBlur}
                                    onSelectionChange={(key) =>
                                      field.onChange(typeof key === "string" ? key : "draft")
                                    }
                                    placeholder={text.modules.purchases.placeholderStatus}
                                    selectedKey={field.value}
                                  >
                                    <Select.Trigger className="w-full">
                                      <Select.Value />
                                      <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                      <ListBox>
                                        {purchaseStatusOptions.map((status) => (
                                          <ListBox.Item id={status.id} key={status.id}>
                                            {purchaseStatusLabel(status.id, text)}
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
                                htmlFor="purchase-total-amount"
                              >
                                {text.common.labels.total}
                              </label>
                              <Controller
                                control={control}
                                name="totalAmount"
                                render={({ field, fieldState }) => (
                                  <Input
                                    aria-invalid={fieldState.invalid}
                                    className="w-full"
                                    id="purchase-total-amount"
                                    min={0}
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    placeholder="0"
                                    type="number"
                                    value={field.value}
                                  />
                                )}
                              />
                              {formState.errors.totalAmount?.message ? (
                                <p className="text-sm text-red-600">
                                  {formState.errors.totalAmount.message}
                                </p>
                              ) : null}
                            </div>

                            <div className="space-y-2">
                              <label
                                className="block text-sm font-medium text-stone-700"
                                htmlFor="purchase-date"
                              >
                                {text.common.labels.date}
                              </label>
                              <Controller
                                control={control}
                                name="purchasedAt"
                                render={({ field, fieldState }) => (
                                  <Input
                                    aria-invalid={fieldState.invalid}
                                    className="w-full"
                                    id="purchase-date"
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    type="date"
                                    value={field.value}
                                  />
                                )}
                              />
                              {formState.errors.purchasedAt?.message ? (
                                <p className="text-sm text-red-600">
                                  {formState.errors.purchasedAt.message}
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
                              {editingPurchase
                                ? text.common.actions.saveChanges
                                : text.common.actions.savePurchase}
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
            filteredPurchases.length,
            purchases.length,
            text.modules.purchases.tableCountLabel,
          )}
        </p>
      </div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label={text.modules.purchases.purchaseList}>
            <Table.Header>
              <Table.Column isRowHeader>{text.common.labels.date}</Table.Column>
              <Table.Column>{text.common.labels.invoice}</Table.Column>
              <Table.Column>{text.common.labels.supplier}</Table.Column>
              <Table.Column>{text.common.labels.status}</Table.Column>
              <Table.Column>{text.common.labels.total}</Table.Column>
              <Table.Column className="w-[160px]">{text.common.labels.actions}</Table.Column>
            </Table.Header>
            <Table.Body>
              {filteredPurchases.length > 0 ? (
                filteredPurchases.map((purchase) => (
                  <Table.Row key={purchase.id}>
                    <Table.Cell>{formatDate(purchase.purchased_at, locale)}</Table.Cell>
                    <Table.Cell>
                      {purchase.invoice_number ?? text.common.states.notAdded}
                    </Table.Cell>
                    <Table.Cell>
                      {purchase.supplier_name ?? text.common.states.noSupplier}
                    </Table.Cell>
                    <Table.Cell>{purchaseStatusLabel(purchase.status, text)}</Table.Cell>
                    <Table.Cell>{formatCurrency(purchase.total_amount)}</Table.Cell>
                    <Table.Cell>
                      <div className="flex items-center gap-2">
                        <Button onPress={() => startEdit(purchase)} size="sm" variant="outline">
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
                                    {text.modules.purchases.deleteTitle}
                                  </AlertDialog.Heading>
                                </AlertDialog.Header>
                                <AlertDialog.Body>
                                  {text.modules.purchases.deleteBody(
                                    purchase.invoice_number ??
                                      purchase.supplier_name ??
                                      text.modules.purchases.title,
                                  )}
                                </AlertDialog.Body>
                                <AlertDialog.Footer>
                                  <Button slot="close" variant="tertiary">
                                    {text.common.actions.cancel}
                                  </Button>
                                  <Button
                                    isPending={pendingDeleteId === purchase.id}
                                    onPress={() => void deletePurchase(purchase.id)}
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
                  <Table.Cell colSpan={6}>
                    {purchasesQuery.isPending
                      ? text.modules.purchases.loading
                      : text.modules.purchases.empty}
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
