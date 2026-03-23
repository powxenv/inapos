import { useMemo, useState } from "react";
import {
  Alert,
  AlertDialog,
  Button,
  CloseButton,
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

type OrdersModuleProps = {
  storeId: string;
};

type OrderRow = {
  created_at: string | null;
  customer_id: string | null;
  customer_name: string | null;
  id: string;
  payment_method: string | null;
  receipt_number: string | null;
  status: string | null;
  total_amount: number | null;
};

type CustomerOptionRow = {
  id: string;
  name: string | null;
};

type EditingOrder = {
  id: string;
  label: string;
};

type OrderFormValues = {
  customerId: string;
  orderDate: string;
  paymentMethod: "cash" | "transfer" | "qris" | "tempo";
  status: "draft" | "ordered" | "ready" | "completed" | "cancelled";
  totalAmount: string;
};

const defaultValues: OrderFormValues = {
  customerId: "",
  orderDate: new Date().toISOString().slice(0, 10),
  paymentMethod: "cash",
  status: "ordered",
  totalAmount: "0",
};

const paymentMethodOptions = ["cash", "transfer", "qris", "tempo"] as const;

const orderStatusOptions = ["draft", "ordered", "ready", "completed", "cancelled"] as const;

function createOrderNumber() {
  const stamp = new Date()
    .toISOString()
    .replace(/[-:TZ.]/g, "")
    .slice(0, 12);
  return `ORD-${stamp}`;
}

function normalizeText(value: string) {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function paymentMethodLabel(
  value: string | null | undefined,
  text: ReturnType<typeof useI18n>["text"],
) {
  if (!value) {
    return "-";
  }

  return (
    text.modules.orders.paymentMethods[value as keyof typeof text.modules.orders.paymentMethods] ??
    value
  );
}

function orderStatusLabel(
  value: string | null | undefined,
  text: ReturnType<typeof useI18n>["text"],
) {
  if (!value) {
    return "-";
  }

  return (
    text.modules.orders.statusOptions[value as keyof typeof text.modules.orders.statusOptions] ??
    value
  );
}

export function OrdersModule({ storeId }: OrdersModuleProps) {
  const { formatCurrency, formatDate, text } = useI18n();
  const orderSchema = z.object({
    customerId: z.string().trim().max(100, text.modules.orders.validation.customerId),
    orderDate: z.string().trim().min(1, text.modules.orders.validation.orderDate),
    paymentMethod: z.enum(["cash", "transfer", "qris", "tempo"]),
    status: z.enum(["draft", "ordered", "ready", "completed", "cancelled"]),
    totalAmount: z
      .string()
      .trim()
      .min(1, text.modules.orders.validation.totalAmount)
      .refine((value) => !Number.isNaN(Number(value)) && Number(value) >= 0, {
        message: text.modules.orders.validation.totalAmountMin,
      }),
  });
  const modalState = useOverlayState();
  const [search, setSearch] = useState("");
  const [editingOrder, setEditingOrder] = useState<EditingOrder | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  const { control, formState, handleSubmit, reset } = useForm<OrderFormValues>({
    defaultValues,
    resolver: zodResolver(orderSchema),
  });
  const [ordersQuery, customersQuery] = useQueries<[OrderRow, CustomerOptionRow]>({
    queries: [
      {
        parameters: [storeId],
        query: `
          SELECT
            sales.id,
            sales.receipt_number,
            sales.customer_id,
            sales.payment_method,
            sales.status,
            sales.total_amount,
            sales.created_at,
            customers.name AS customer_name
          FROM sales
          LEFT JOIN customers ON customers.id = sales.customer_id
          WHERE sales.store_id = ?
          ORDER BY COALESCE(sales.created_at, sales.updated_at) DESC
        `,
        queryKey: ["orders", storeId],
      },
      {
        parameters: [storeId],
        query: `
          SELECT id, name
          FROM customers
          WHERE store_id = ?
          ORDER BY LOWER(COALESCE(name, ''))
        `,
        queryKey: ["order-customers", storeId],
      },
    ],
  });

  const orders = ordersQuery.data ?? [];
  const customerOptions = customersQuery.data ?? [];
  const searchValue = search.trim().toLowerCase();
  const filteredOrders = useMemo(() => {
    if (!searchValue) {
      return orders;
    }

    return orders.filter((order) =>
      [order.receipt_number, order.customer_name, order.status, order.payment_method]
        .filter((value): value is string => Boolean(value))
        .some((value) => value.toLowerCase().includes(searchValue)),
    );
  }, [orders, searchValue]);

  function resetForm() {
    setEditingOrder(null);
    setFormError(null);
    reset({
      ...defaultValues,
      orderDate: new Date().toISOString().slice(0, 10),
    });
  }

  function openCreateModal() {
    resetForm();
    modalState.open();
  }

  function startEdit(order: OrderRow) {
    setEditingOrder({
      id: order.id,
      label: order.receipt_number ?? text.modules.orders.title,
    });
    setFormError(null);
    reset({
      customerId: order.customer_id ?? "",
      orderDate: order.created_at ? order.created_at.slice(0, 10) : defaultValues.orderDate,
      paymentMethod:
        order.payment_method === "transfer" ||
        order.payment_method === "qris" ||
        order.payment_method === "tempo"
          ? order.payment_method
          : "cash",
      status:
        order.status === "draft" ||
        order.status === "ready" ||
        order.status === "completed" ||
        order.status === "cancelled"
          ? order.status
          : "ordered",
      totalAmount: String(order.total_amount ?? 0),
    });
    modalState.open();
  }

  async function saveOrder(values: OrderFormValues, close: () => void) {
    setFormError(null);
    setIsSaving(true);

    const now = new Date().toISOString();
    const payload = {
      created_at: new Date(`${values.orderDate}T00:00:00`).toISOString(),
      customer_id: normalizeText(values.customerId),
      payment_method: values.paymentMethod,
      status: values.status,
      store_id: storeId,
      total_amount: Number(values.totalAmount),
      updated_at: now,
    };

    try {
      if (editingOrder) {
        await powerSync.execute(
          `
            UPDATE sales
            SET
              customer_id = ?,
              payment_method = ?,
              status = ?,
              total_amount = ?,
              created_at = ?,
              updated_at = ?
            WHERE id = ?
          `,
          [
            payload.customer_id,
            payload.payment_method,
            payload.status,
            payload.total_amount,
            payload.created_at,
            payload.updated_at,
            editingOrder.id,
          ],
        );
      } else {
        await powerSync.execute(
          `
            INSERT INTO sales (
              id,
              store_id,
              receipt_number,
              customer_id,
              payment_method,
              status,
              total_amount,
              created_at,
              updated_at
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
          `,
          [
            crypto.randomUUID(),
            payload.store_id,
            createOrderNumber(),
            payload.customer_id,
            payload.payment_method,
            payload.status,
            payload.total_amount,
            payload.created_at,
            payload.updated_at,
          ],
        );
      }

      setIsSaving(false);
      close();
      resetForm();
    } catch (error) {
      setIsSaving(false);
      setFormError(error instanceof Error ? error.message : text.modules.orders.saveError);
    }
  }

  async function deleteOrder(orderId: string) {
    setFormError(null);
    setPendingDeleteId(orderId);

    try {
      await powerSync.execute("DELETE FROM sales WHERE id = ?", [orderId]);

      if (editingOrder?.id === orderId) {
        resetForm();
      }

      setPendingDeleteId(null);
    } catch (error) {
      setPendingDeleteId(null);
      setFormError(error instanceof Error ? error.message : text.modules.orders.deleteError);
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">{text.modules.orders.title}</h3>
        <p className="text-sm text-stone-500">{text.modules.orders.description}</p>
      </div>

      {formError ? (
        <Alert status="danger">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>{text.modules.orders.thatDidNotWork}</Alert.Title>
            <Alert.Description>{formError}</Alert.Description>
          </Alert.Content>
          <CloseButton aria-label="Close" onPress={() => setFormError(null)} />
        </Alert>
      ) : null}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-1 flex-wrap items-center gap-3">
          <InputGroup className="max-w-md">
            <InputGroup.Prefix className="text-stone-400">
              <MagnifyingGlassIcon aria-hidden size={18} />
            </InputGroup.Prefix>
            <InputGroup.Input
              aria-label={text.modules.orders.searchLabel}
              className="w-full"
              onChange={(event) => setSearch(event.target.value)}
              placeholder={text.modules.orders.placeholderSearch}
              value={search}
            />
          </InputGroup>
          <Modal state={modalState}>
            <Button onPress={openCreateModal}>
              <PlusIcon aria-hidden size={16} />
              {text.modules.orders.newOrder}
            </Button>
            <Modal.Backdrop>
              <Modal.Container placement="center" size="lg">
                <Modal.Dialog
                  aria-label={
                    editingOrder
                      ? text.modules.orders.headingEdit(editingOrder.label)
                      : text.modules.orders.headingNew
                  }
                >
                  {({ close }) => (
                    <>
                      <Modal.Header>
                        <Modal.Heading>
                          {editingOrder
                            ? text.modules.orders.headingEdit(editingOrder.label)
                            : text.modules.orders.headingNew}
                        </Modal.Heading>
                      </Modal.Header>
                      <Modal.Body>
                        <form
                          className="space-y-4"
                          onSubmit={handleSubmit(async (values) => {
                            await saveOrder(values, close);
                          })}
                        >
                          <div className="space-y-2">
                            <label
                              className="block text-sm font-medium text-stone-700"
                              htmlFor="order-customer"
                            >
                              {text.modules.cashier.customerOptional}
                            </label>
                            <Controller
                              control={control}
                              name="customerId"
                              render={({ field }) => (
                                <Select
                                  aria-label={text.common.labels.customer}
                                  className="w-full"
                                  id="order-customer"
                                  onBlur={field.onBlur}
                                  onSelectionChange={(key) =>
                                    field.onChange(typeof key === "string" ? key : "")
                                  }
                                  placeholder={text.modules.orders.placeholderCustomer}
                                  selectedKey={field.value || null}
                                >
                                  <Select.Trigger className="w-full">
                                    <Select.Value />
                                    <Select.Indicator />
                                  </Select.Trigger>
                                  <Select.Popover>
                                    <ListBox>
                                      <ListBox.Item id="">
                                        {text.common.states.noCustomer}
                                      </ListBox.Item>
                                      {customerOptions.map((customer) => (
                                        <ListBox.Item id={customer.id} key={customer.id}>
                                          {customer.name ?? text.common.states.unnamedCustomer}
                                        </ListBox.Item>
                                      ))}
                                    </ListBox>
                                  </Select.Popover>
                                </Select>
                              )}
                            />
                          </div>

                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                              <label
                                className="block text-sm font-medium text-stone-700"
                                htmlFor="order-status"
                              >
                                {text.common.labels.status}
                              </label>
                              <Controller
                                control={control}
                                name="status"
                                render={({ field }) => (
                                  <Select
                                    aria-label={text.common.labels.status}
                                    className="w-full"
                                    id="order-status"
                                    onBlur={field.onBlur}
                                    onSelectionChange={(key) =>
                                      field.onChange(typeof key === "string" ? key : "ordered")
                                    }
                                    selectedKey={field.value}
                                  >
                                    <Select.Trigger className="w-full">
                                      <Select.Value />
                                      <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                      <ListBox>
                                        {orderStatusOptions.map((option) => (
                                          <ListBox.Item id={option} key={option}>
                                            {text.modules.orders.statusOptions[option]}
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
                                htmlFor="order-payment"
                              >
                                {text.common.labels.payment}
                              </label>
                              <Controller
                                control={control}
                                name="paymentMethod"
                                render={({ field }) => (
                                  <Select
                                    aria-label={text.common.labels.payment}
                                    className="w-full"
                                    id="order-payment"
                                    onBlur={field.onBlur}
                                    onSelectionChange={(key) =>
                                      field.onChange(typeof key === "string" ? key : "cash")
                                    }
                                    selectedKey={field.value}
                                  >
                                    <Select.Trigger className="w-full">
                                      <Select.Value />
                                      <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                      <ListBox>
                                        {paymentMethodOptions.map((option) => (
                                          <ListBox.Item id={option} key={option}>
                                            {text.modules.orders.paymentMethods[option]}
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
                                htmlFor="order-total"
                              >
                                {text.modules.orders.totalLabel}
                              </label>
                              <Controller
                                control={control}
                                name="totalAmount"
                                render={({ field, fieldState }) => (
                                  <InputGroup className="w-full" isInvalid={fieldState.invalid}>
                                    <InputGroup.Prefix className="text-stone-400">
                                      <ReceiptIcon aria-hidden size={18} />
                                    </InputGroup.Prefix>
                                    <InputGroup.Input
                                      aria-invalid={fieldState.invalid}
                                      className="w-full"
                                      id="order-total"
                                      min={0}
                                      onBlur={field.onBlur}
                                      onChange={field.onChange}
                                      placeholder="0"
                                      type="number"
                                      value={field.value}
                                    />
                                  </InputGroup>
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
                                htmlFor="order-date"
                              >
                                {text.common.labels.date}
                              </label>
                              <Controller
                                control={control}
                                name="orderDate"
                                render={({ field, fieldState }) => (
                                  <Input
                                    aria-invalid={fieldState.invalid}
                                    className="w-full"
                                    id="order-date"
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    type="date"
                                    value={field.value}
                                  />
                                )}
                              />
                              {formState.errors.orderDate?.message ? (
                                <p className="text-sm text-red-600">
                                  {formState.errors.orderDate.message}
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
                              {editingOrder
                                ? text.common.actions.saveChanges
                                : text.common.actions.saveOrder}
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
            filteredOrders.length,
            orders.length,
            text.modules.orders.tableCountLabel,
          )}
        </p>
      </div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label={text.modules.orders.orderList}>
            <Table.Header>
              <Table.Column isRowHeader>{text.modules.orders.orderNumber}</Table.Column>
              <Table.Column>{text.common.labels.date}</Table.Column>
              <Table.Column>{text.common.labels.customer}</Table.Column>
              <Table.Column>{text.common.labels.status}</Table.Column>
              <Table.Column>{text.common.labels.payment}</Table.Column>
              <Table.Column>{text.common.labels.total}</Table.Column>
              <Table.Column className="w-[160px]">{text.common.labels.actions}</Table.Column>
            </Table.Header>
            <Table.Body>
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <Table.Row key={order.id}>
                    <Table.Cell>{order.receipt_number ?? "-"}</Table.Cell>
                    <Table.Cell>{formatDate(order.created_at, { dateStyle: "medium" })}</Table.Cell>
                    <Table.Cell>{order.customer_name ?? "-"}</Table.Cell>
                    <Table.Cell>{orderStatusLabel(order.status, text)}</Table.Cell>
                    <Table.Cell>{paymentMethodLabel(order.payment_method, text)}</Table.Cell>
                    <Table.Cell>{formatCurrency(order.total_amount)}</Table.Cell>
                    <Table.Cell>
                      <div className="flex items-center gap-2">
                        <Button onPress={() => startEdit(order)} size="sm" variant="outline">
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
                                    {text.modules.orders.deleteTitle}
                                  </AlertDialog.Heading>
                                </AlertDialog.Header>
                                <AlertDialog.Body>
                                  {text.modules.orders.deleteBody(
                                    order.receipt_number ?? text.modules.orders.title,
                                  )}
                                </AlertDialog.Body>
                                <AlertDialog.Footer>
                                  <Button slot="close" variant="tertiary">
                                    {text.common.actions.cancel}
                                  </Button>
                                  <Button
                                    isPending={pendingDeleteId === order.id}
                                    onPress={() => void deleteOrder(order.id)}
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
                  <Table.Cell colSpan={7}>
                    {ordersQuery.isPending
                      ? text.modules.orders.loading
                      : text.modules.orders.empty}
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
