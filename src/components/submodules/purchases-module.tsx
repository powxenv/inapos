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

const purchaseSchema = z.object({
  invoiceNumber: z.string().trim().max(80, "Nomor invoice maksimal 80 karakter."),
  purchasedAt: z.string().trim().min(1, "Tanggal beli wajib diisi."),
  status: z.enum(["draft", "ordered", "received"]),
  supplierId: z.string().trim().max(100, "Supplier tidak valid."),
  totalAmount: z
    .string()
    .trim()
    .min(1, "Total belanja wajib diisi.")
    .refine((value) => !Number.isNaN(Number(value)) && Number(value) >= 0, {
      message: "Total belanja harus angka 0 atau lebih.",
    }),
});

type PurchaseFormValues = z.infer<typeof purchaseSchema>;

const defaultValues: PurchaseFormValues = {
  invoiceNumber: "",
  purchasedAt: new Date().toISOString().slice(0, 10),
  status: "draft",
  supplierId: "",
  totalAmount: "0",
};

const purchaseStatusOptions = [
  { id: "draft", label: "Draft" },
  { id: "ordered", label: "Dipesan" },
  { id: "received", label: "Diterima" },
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

export function PurchasesModule({ storeId }: PurchasesModuleProps) {
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
      label: purchase.invoice_number ?? purchase.supplier_name ?? "Belanja stok",
    });
    setFormError(null);
    reset({
      invoiceNumber: purchase.invoice_number ?? "",
      purchasedAt: purchase.purchased_at ? purchase.purchased_at.slice(0, 10) : defaultValues.purchasedAt,
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
      setFormError(error instanceof Error ? error.message : "Gagal menyimpan pembelian.");
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
      setFormError(error instanceof Error ? error.message : "Gagal menghapus pembelian.");
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">Belanja stok</h3>
        <p className="text-sm text-stone-500">Catat pembelian stok agar histori belanja tetap rapi.</p>
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
              aria-label="Cari pembelian"
              className="w-full"
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Cari invoice, pemasok, atau status"
              value={search}
            />
          </InputGroup>
          <Modal state={modalState}>
            <Button onPress={openCreateModal}>
              <PlusIcon aria-hidden size={16} />
              Catat pembelian
            </Button>
            <Modal.Backdrop>
              <Modal.Container placement="center" size="lg">
                <Modal.Dialog aria-label={editingPurchase ? "Ubah pembelian" : "Catat pembelian"}>
                  {({ close }) => (
                    <>
                      <Modal.Header>
                        <Modal.Heading>
                          {editingPurchase
                            ? `Ubah pembelian: ${editingPurchase.label}`
                            : "Catat pembelian"}
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
                              Nomor invoice (optional)
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
                                    placeholder="INV-001"
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
                                Pemasok (optional)
                              </label>
                              <Controller
                                control={control}
                                name="supplierId"
                                render={({ field }) => (
                                  <Select
                                    aria-label="Pilih pemasok"
                                    className="w-full"
                                    id="purchase-supplier"
                                    onBlur={field.onBlur}
                                    onSelectionChange={(key) =>
                                      field.onChange(typeof key === "string" ? key : "")
                                    }
                                    placeholder="Pilih pemasok"
                                    selectedKey={field.value || null}
                                  >
                                    <Select.Trigger className="w-full">
                                      <Select.Value />
                                      <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                      <ListBox>
                                        <ListBox.Item id="">Tanpa pemasok</ListBox.Item>
                                        {supplierOptions.map((supplier) => (
                                          <ListBox.Item id={supplier.id} key={supplier.id}>
                                            {supplier.name ?? "Pemasok tanpa nama"}
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
                                Status
                              </label>
                              <Controller
                                control={control}
                                name="status"
                                render={({ field }) => (
                                  <Select
                                    aria-label="Status pembelian"
                                    className="w-full"
                                    id="purchase-status"
                                    onBlur={field.onBlur}
                                    onSelectionChange={(key) =>
                                      field.onChange(typeof key === "string" ? key : "draft")
                                    }
                                    placeholder="Pilih status"
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
                                            {status.label}
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
                                Total belanja
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
                                Tanggal beli
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
                              Batal
                            </Button>
                            <Button isPending={isSaving} type="submit">
                              {editingPurchase ? "Simpan perubahan" : "Simpan pembelian"}
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
          {filteredPurchases.length} dari {purchases.length} pembelian
        </p>
      </div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Tabel pembelian toko">
            <Table.Header>
              <Table.Column isRowHeader>Tanggal</Table.Column>
              <Table.Column>Invoice</Table.Column>
              <Table.Column>Pemasok</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column>Total</Table.Column>
              <Table.Column className="w-[160px]">Aksi</Table.Column>
            </Table.Header>
            <Table.Body>
              {filteredPurchases.length > 0 ? (
                filteredPurchases.map((purchase) => (
                  <Table.Row key={purchase.id}>
                    <Table.Cell>{formatDate(purchase.purchased_at)}</Table.Cell>
                    <Table.Cell>{purchase.invoice_number ?? "-"}</Table.Cell>
                    <Table.Cell>{purchase.supplier_name ?? "-"}</Table.Cell>
                    <Table.Cell>{purchase.status ?? "-"}</Table.Cell>
                    <Table.Cell>{formatRupiah(purchase.total_amount)}</Table.Cell>
                    <Table.Cell>
                      <div className="flex items-center gap-2">
                        <Button onPress={() => startEdit(purchase)} size="sm" variant="outline">
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
                                  <AlertDialog.Heading>Hapus pembelian?</AlertDialog.Heading>
                                </AlertDialog.Header>
                                <AlertDialog.Body>
                                  Catatan pembelian {purchase.invoice_number ?? purchase.supplier_name ?? "ini"} akan dihapus.
                                </AlertDialog.Body>
                                <AlertDialog.Footer>
                                  <Button slot="close" variant="tertiary">
                                    Batal
                                  </Button>
                                  <Button
                                    isPending={pendingDeleteId === purchase.id}
                                    onPress={() => void deletePurchase(purchase.id)}
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
                  <Table.Cell colSpan={6}>
                    {purchasesQuery.isPending ? "Memuat pembelian..." : "Belum ada catatan pembelian untuk toko ini."}
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
