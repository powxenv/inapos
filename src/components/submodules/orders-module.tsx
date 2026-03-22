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

const orderSchema = z.object({
  customerId: z.string().trim().max(100, "Pelanggan tidak valid."),
  orderDate: z.string().trim().min(1, "Tanggal wajib diisi."),
  paymentMethod: z.enum(["cash", "transfer", "qris", "tempo"]),
  status: z.enum(["draft", "ordered", "ready", "completed", "cancelled"]),
  totalAmount: z
    .string()
    .trim()
    .min(1, "Total wajib diisi.")
    .refine((value) => !Number.isNaN(Number(value)) && Number(value) >= 0, {
      message: "Total harus angka 0 atau lebih.",
    }),
});

type OrderFormValues = z.infer<typeof orderSchema>;

const defaultValues: OrderFormValues = {
  customerId: "",
  orderDate: new Date().toISOString().slice(0, 10),
  paymentMethod: "cash",
  status: "ordered",
  totalAmount: "0",
};

const paymentMethodOptions = [
  { id: "cash", label: "Tunai" },
  { id: "transfer", label: "Transfer" },
  { id: "qris", label: "QRIS" },
  { id: "tempo", label: "Tempo" },
] as const;

const orderStatusOptions = [
  { id: "draft", label: "Draft" },
  { id: "ordered", label: "Diproses" },
  { id: "ready", label: "Siap diambil" },
  { id: "completed", label: "Selesai" },
  { id: "cancelled", label: "Dibatalkan" },
] as const;

function createOrderNumber() {
  const stamp = new Date().toISOString().replace(/[-:TZ.]/g, "").slice(0, 12);
  return `ORD-${stamp}`;
}

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

export function OrdersModule({ storeId }: OrdersModuleProps) {
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
      label: order.receipt_number ?? "Pesanan",
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
      setFormError(error instanceof Error ? error.message : "Gagal menyimpan pesanan.");
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
      setFormError(error instanceof Error ? error.message : "Gagal menghapus pesanan.");
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">Pesanan</h3>
        <p className="text-sm text-stone-500">Lihat dan ubah status pesanan yang sedang diproses toko.</p>
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

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-1 flex-wrap items-center gap-3">
          <InputGroup className="max-w-md">
            <InputGroup.Prefix className="text-stone-400">
              <MagnifyingGlassIcon aria-hidden size={18} />
            </InputGroup.Prefix>
            <InputGroup.Input
              aria-label="Cari pesanan"
              className="w-full"
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Cari nomor, pelanggan, status, atau pembayaran"
              value={search}
            />
          </InputGroup>
          <Modal state={modalState}>
            <Button onPress={openCreateModal}>
              <PlusIcon aria-hidden size={16} />
              Pesanan baru
            </Button>
            <Modal.Backdrop>
              <Modal.Container placement="center" size="lg">
                <Modal.Dialog aria-label={editingOrder ? "Ubah pesanan" : "Pesanan baru"}>
                  {({ close }) => (
                    <>
                      <Modal.Header>
                        <Modal.Heading>
                          {editingOrder ? `Ubah pesanan: ${editingOrder.label}` : "Pesanan baru"}
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
                            <label className="block text-sm font-medium text-stone-700" htmlFor="order-customer">
                              Pelanggan (optional)
                            </label>
                            <Controller
                              control={control}
                              name="customerId"
                              render={({ field }) => (
                                <Select
                                  aria-label="Pilih pelanggan"
                                  className="w-full"
                                  id="order-customer"
                                  onBlur={field.onBlur}
                                  onSelectionChange={(key) =>
                                    field.onChange(typeof key === "string" ? key : "")
                                  }
                                  placeholder="Pilih pelanggan"
                                  selectedKey={field.value || null}
                                >
                                  <Select.Trigger className="w-full">
                                    <Select.Value />
                                    <Select.Indicator />
                                  </Select.Trigger>
                                  <Select.Popover>
                                    <ListBox>
                                      <ListBox.Item id="">Tanpa pelanggan</ListBox.Item>
                                      {customerOptions.map((customer) => (
                                        <ListBox.Item id={customer.id} key={customer.id}>
                                          {customer.name ?? "Pelanggan tanpa nama"}
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
                              <label className="block text-sm font-medium text-stone-700" htmlFor="order-status">
                                Status
                              </label>
                              <Controller
                                control={control}
                                name="status"
                                render={({ field }) => (
                                  <Select
                                    aria-label="Status pesanan"
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
                              <label className="block text-sm font-medium text-stone-700" htmlFor="order-payment">
                                Pembayaran
                              </label>
                              <Controller
                                control={control}
                                name="paymentMethod"
                                render={({ field }) => (
                                  <Select
                                    aria-label="Metode pembayaran"
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
                              <label className="block text-sm font-medium text-stone-700" htmlFor="order-total">
                                Total
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
                                <p className="text-sm text-red-600">{formState.errors.totalAmount.message}</p>
                              ) : null}
                            </div>

                            <div className="space-y-2">
                              <label className="block text-sm font-medium text-stone-700" htmlFor="order-date">
                                Tanggal
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
                                <p className="text-sm text-red-600">{formState.errors.orderDate.message}</p>
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
                              {editingOrder ? "Simpan perubahan" : "Simpan pesanan"}
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
          {filteredOrders.length} dari {orders.length} pesanan
        </p>
      </div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Tabel pesanan toko">
            <Table.Header>
              <Table.Column isRowHeader>No. Pesanan</Table.Column>
              <Table.Column>Tanggal</Table.Column>
              <Table.Column>Pelanggan</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column>Pembayaran</Table.Column>
              <Table.Column>Total</Table.Column>
              <Table.Column className="w-[160px]">Aksi</Table.Column>
            </Table.Header>
            <Table.Body>
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <Table.Row key={order.id}>
                    <Table.Cell>{order.receipt_number ?? "-"}</Table.Cell>
                    <Table.Cell>{formatDate(order.created_at)}</Table.Cell>
                    <Table.Cell>{order.customer_name ?? "-"}</Table.Cell>
                    <Table.Cell>{order.status ?? "-"}</Table.Cell>
                    <Table.Cell>{order.payment_method ?? "-"}</Table.Cell>
                    <Table.Cell>{formatRupiah(order.total_amount)}</Table.Cell>
                    <Table.Cell>
                      <div className="flex items-center gap-2">
                        <Button onPress={() => startEdit(order)} size="sm" variant="outline">
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
                                  <AlertDialog.Heading>Hapus pesanan?</AlertDialog.Heading>
                                </AlertDialog.Header>
                                <AlertDialog.Body>
                                  {order.receipt_number ?? "Pesanan ini"} akan dihapus dari daftar pesanan.
                                </AlertDialog.Body>
                                <AlertDialog.Footer>
                                  <Button slot="close" variant="tertiary">
                                    Batal
                                  </Button>
                                  <Button
                                    isPending={pendingDeleteId === order.id}
                                    onPress={() => void deleteOrder(order.id)}
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
                  <Table.Cell colSpan={7}>
                    {ordersQuery.isPending ? "Memuat pesanan..." : "Belum ada pesanan untuk toko ini."}
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
