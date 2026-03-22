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
import { PackageIcon } from "@phosphor-icons/react/dist/csr/Package";
import { PencilSimpleIcon } from "@phosphor-icons/react/dist/csr/PencilSimple";
import { PlusIcon } from "@phosphor-icons/react/dist/csr/Plus";
import { TrashIcon } from "@phosphor-icons/react/dist/csr/Trash";
import { Controller, useForm } from "react-hook-form";
import { useQueries } from "@powersync/tanstack-react-query";
import { z } from "zod";
import { powerSync } from "../../lib/powersync";

type ProductListModuleProps = {
  storeId: string;
};

type ProductRow = {
  barcode: string | null;
  category: string | null;
  cost_price: number | null;
  id: string;
  is_active: number | null;
  name: string | null;
  selling_price: number | null;
  sku: string | null;
  unit: string | null;
};

const productSchema = z.object({
  barcode: z.string().trim().max(50, "Barcode maksimal 50 karakter."),
  category: z.string().trim().max(60, "Kategori maksimal 60 karakter."),
  costPrice: z
    .string()
    .trim()
    .min(1, "Harga modal wajib diisi.")
    .refine((value) => !Number.isNaN(Number(value)) && Number(value) >= 0, {
      message: "Harga modal harus angka 0 atau lebih.",
    }),
  name: z
    .string()
    .trim()
    .min(1, "Nama barang wajib diisi.")
    .max(120, "Nama barang maksimal 120 karakter."),
  sellingPrice: z
    .string()
    .trim()
    .min(1, "Harga jual wajib diisi.")
    .refine((value) => !Number.isNaN(Number(value)) && Number(value) >= 0, {
      message: "Harga jual harus angka 0 atau lebih.",
    }),
  sku: z.string().trim().max(50, "SKU maksimal 50 karakter."),
  unit: z.string().trim().max(30, "Satuan maksimal 30 karakter."),
});

type ProductFormValues = z.infer<typeof productSchema>;

type EditingProduct = {
  id: string;
  name: string;
};

const defaultValues: ProductFormValues = {
  barcode: "",
  category: "",
  costPrice: "0",
  name: "",
  sellingPrice: "0",
  sku: "",
  unit: "",
};

const productCategoryOptions = [
  { id: "sembako", label: "Sembako" },
  { id: "minuman", label: "Minuman" },
  { id: "makanan-ringan", label: "Makanan ringan" },
  { id: "kebersihan", label: "Kebersihan" },
  { id: "perawatan-rumah", label: "Perawatan rumah" },
  { id: "lainnya", label: "Lainnya" },
] as const;

const productUnitOptions = [
  { id: "pcs", label: "pcs" },
  { id: "pack", label: "pack" },
  { id: "dus", label: "dus" },
  { id: "kg", label: "kg" },
  { id: "gram", label: "gram" },
  { id: "liter", label: "liter" },
  { id: "ml", label: "ml" },
  { id: "botol", label: "botol" },
  { id: "sachet", label: "sachet" },
] as const;

function formatRupiah(value: number | null | undefined) {
  return new Intl.NumberFormat("id-ID", {
    currency: "IDR",
    maximumFractionDigits: 0,
    style: "currency",
  }).format(value ?? 0);
}

function normalizeText(value: string) {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

export function ProductListModule({ storeId }: ProductListModuleProps) {
  const modalState = useOverlayState();
  const [search, setSearch] = useState("");
  const [editingProduct, setEditingProduct] = useState<EditingProduct | null>(
    null,
  );
  const [formError, setFormError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  const { control, formState, handleSubmit, reset } =
    useForm<ProductFormValues>({
      defaultValues,
      resolver: zodResolver(productSchema),
    });
  const [productsQuery] = useQueries<[ProductRow]>({
    queries: [
      {
        parameters: [storeId],
        query: `
          SELECT
            id,
            name,
            sku,
            barcode,
            category,
            unit,
            cost_price,
            selling_price,
            is_active
          FROM products
          WHERE store_id = ?
          ORDER BY LOWER(COALESCE(name, ''))
        `,
        queryKey: ["products", storeId],
      },
    ],
  });

  const products = productsQuery.data ?? [];
  const searchValue = search.trim().toLowerCase();
  const filteredProducts = useMemo(() => {
    if (!searchValue) {
      return products;
    }

    return products.filter((product) =>
      [product.name, product.sku, product.barcode, product.category]
        .filter((value): value is string => Boolean(value))
        .some((value) => value.toLowerCase().includes(searchValue)),
    );
  }, [products, searchValue]);

  function resetForm() {
    setEditingProduct(null);
    setFormError(null);
    reset(defaultValues);
  }

  function openCreateModal() {
    resetForm();
    modalState.open();
  }

  function startEdit(product: ProductRow) {
    setEditingProduct({
      id: product.id,
      name: product.name ?? "Barang",
    });
    setFormError(null);
    reset({
      barcode: product.barcode ?? "",
      category: product.category ?? "",
      costPrice: String(product.cost_price ?? 0),
      name: product.name ?? "",
      sellingPrice: String(product.selling_price ?? 0),
      sku: product.sku ?? "",
      unit: product.unit ?? "",
    });
    modalState.open();
  }

  async function saveProduct(values: ProductFormValues, close: () => void) {
    setFormError(null);
    setIsSaving(true);

    const now = new Date().toISOString();
    const payload = {
      barcode: normalizeText(values.barcode),
      category: normalizeText(values.category),
      cost_price: Number(values.costPrice),
      is_active: 1,
      name: values.name.trim(),
      selling_price: Number(values.sellingPrice),
      sku: normalizeText(values.sku),
      store_id: storeId,
      unit: normalizeText(values.unit),
      updated_at: now,
    };

    try {
      if (editingProduct) {
        await powerSync.execute(
          `
            UPDATE products
            SET
              name = ?,
              sku = ?,
              barcode = ?,
              category = ?,
              unit = ?,
              cost_price = ?,
              selling_price = ?,
              is_active = ?,
              updated_at = ?
            WHERE id = ?
          `,
          [
            payload.name,
            payload.sku,
            payload.barcode,
            payload.category,
            payload.unit,
            payload.cost_price,
            payload.selling_price,
            payload.is_active,
            payload.updated_at,
            editingProduct.id,
          ],
        );
      } else {
        await powerSync.execute(
          `
            INSERT INTO products (
              id,
              store_id,
              sku,
              barcode,
              name,
              category,
              unit,
              cost_price,
              selling_price,
              is_active,
              updated_at
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `,
          [
            crypto.randomUUID(),
            payload.store_id,
            payload.sku,
            payload.barcode,
            payload.name,
            payload.category,
            payload.unit,
            payload.cost_price,
            payload.selling_price,
            payload.is_active,
            payload.updated_at,
          ],
        );
      }

      setIsSaving(false);
      close();
      resetForm();
    } catch (error) {
      setIsSaving(false);
      setFormError(
        error instanceof Error ? error.message : "Gagal menyimpan barang.",
      );
    }
  }

  async function deleteProduct(productId: string) {
    setFormError(null);
    setPendingDeleteId(productId);

    try {
      await powerSync.execute("DELETE FROM products WHERE id = ?", [productId]);

      if (editingProduct?.id === productId) {
        resetForm();
      }

      setPendingDeleteId(null);
    } catch (error) {
      setPendingDeleteId(null);
      setFormError(
        error instanceof Error ? error.message : "Gagal menghapus barang.",
      );
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">Daftar barang</h3>
        <p className="text-sm text-stone-500">
          Tambah, ubah, dan hapus barang dari SQLite PowerSync untuk toko ini.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-1 flex-wrap items-center gap-3">
          <InputGroup className="max-w-md">
            <InputGroup.Prefix className="text-stone-400">
              <MagnifyingGlassIcon aria-hidden size={18} />
            </InputGroup.Prefix>
            <InputGroup.Input
              aria-label="Cari barang"
              className="w-full"
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Cari nama, SKU, barcode, atau kategori"
              value={search}
            />
          </InputGroup>
          <Modal state={modalState}>
            <Button onPress={openCreateModal}>
              <PlusIcon aria-hidden size={16} />
              Tambah barang
            </Button>
            <Modal.Backdrop>
              <Modal.Container placement="center" size="lg">
                <Modal.Dialog
                  aria-label={editingProduct ? "Ubah barang" : "Tambah barang"}
                >
                  {({ close }) => (
                    <>
                      <Modal.Header>
                        <Modal.Heading>
                          {editingProduct
                            ? `Ubah barang: ${editingProduct.name}`
                            : "Tambah barang"}
                        </Modal.Heading>
                      </Modal.Header>
                      <Modal.Body>
                        <form
                          className="space-y-4"
                          onSubmit={handleSubmit(async (values) => {
                            await saveProduct(values, close);
                          })}
                        >
                          <div className="space-y-2">
                            <label
                              className="block text-sm font-medium text-stone-700"
                              htmlFor="product-name"
                            >
                              Nama barang
                            </label>
                            <Controller
                              control={control}
                              name="name"
                              render={({ field, fieldState }) => (
                                <InputGroup
                                  className="w-full"
                                  isInvalid={fieldState.invalid}
                                >
                                  <InputGroup.Prefix className="text-stone-400">
                                    <PackageIcon aria-hidden size={18} />
                                  </InputGroup.Prefix>
                                  <InputGroup.Input
                                    aria-invalid={fieldState.invalid}
                                    className="w-full"
                                    id="product-name"
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    placeholder="Contoh: Beras 5kg"
                                    value={field.value}
                                  />
                                </InputGroup>
                              )}
                            />
                            {formState.errors.name?.message ? (
                              <p className="text-sm text-red-600">
                                {formState.errors.name.message}
                              </p>
                            ) : null}
                          </div>

                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                              <label
                                className="block text-sm font-medium text-stone-700"
                                htmlFor="product-selling-price"
                              >
                                Harga jual
                              </label>
                              <Controller
                                control={control}
                                name="sellingPrice"
                                render={({ field, fieldState }) => (
                                  <Input
                                    aria-invalid={fieldState.invalid}
                                    className="w-full"
                                    id="product-selling-price"
                                    min={0}
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    placeholder="0"
                                    type="number"
                                    value={field.value}
                                  />
                                )}
                              />
                              {formState.errors.sellingPrice?.message ? (
                                <p className="text-sm text-red-600">
                                  {formState.errors.sellingPrice.message}
                                </p>
                              ) : null}
                            </div>

                            <div className="space-y-2">
                              <label
                                className="block text-sm font-medium text-stone-700"
                                htmlFor="product-cost-price"
                              >
                                Harga modal
                              </label>
                              <Controller
                                control={control}
                                name="costPrice"
                                render={({ field, fieldState }) => (
                                  <Input
                                    aria-invalid={fieldState.invalid}
                                    className="w-full"
                                    id="product-cost-price"
                                    min={0}
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    placeholder="0"
                                    type="number"
                                    value={field.value}
                                  />
                                )}
                              />
                              {formState.errors.costPrice?.message ? (
                                <p className="text-sm text-red-600">
                                  {formState.errors.costPrice.message}
                                </p>
                              ) : null}
                            </div>

                            <div className="space-y-2">
                              <label
                                className="block text-sm font-medium text-stone-700"
                                htmlFor="product-unit"
                              >
                                Satuan (optional)
                              </label>
                              <Controller
                                control={control}
                                name="unit"
                                render={({ field }) => (
                                  <Select
                                    aria-label="Satuan barang"
                                    className="w-full"
                                    id="product-unit"
                                    onBlur={field.onBlur}
                                    onSelectionChange={(key) =>
                                      field.onChange(typeof key === "string" ? key : "")
                                    }
                                    placeholder="Pilih satuan"
                                    selectedKey={field.value || null}
                                  >
                                    <Select.Trigger className="w-full">
                                      <Select.Value />
                                      <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                      <ListBox>
                                        <ListBox.Item id="">Tanpa satuan</ListBox.Item>
                                        {productUnitOptions.map((unit) => (
                                          <ListBox.Item id={unit.id} key={unit.id}>
                                            {unit.label}
                                          </ListBox.Item>
                                        ))}
                                      </ListBox>
                                    </Select.Popover>
                                  </Select>
                                )}
                              />
                              {formState.errors.unit?.message ? (
                                <p className="text-sm text-red-600">
                                  {formState.errors.unit.message}
                                </p>
                              ) : null}
                            </div>

                            <div className="space-y-2">
                              <label
                                className="block text-sm font-medium text-stone-700"
                                htmlFor="product-sku"
                              >
                                SKU (optional)
                              </label>
                              <Controller
                                control={control}
                                name="sku"
                                render={({ field }) => (
                                  <Input
                                    className="w-full"
                                    id="product-sku"
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    placeholder="SKU-001"
                                    value={field.value}
                                  />
                                )}
                              />
                              {formState.errors.sku?.message ? (
                                <p className="text-sm text-red-600">
                                  {formState.errors.sku.message}
                                </p>
                              ) : null}
                            </div>

                            <div className="space-y-2">
                              <label
                                className="block text-sm font-medium text-stone-700"
                                htmlFor="product-barcode"
                              >
                                Barcode (optional)
                              </label>
                              <Controller
                                control={control}
                                name="barcode"
                                render={({ field }) => (
                                  <Input
                                    className="w-full"
                                    id="product-barcode"
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    placeholder="899..."
                                    value={field.value}
                                  />
                                )}
                              />
                              {formState.errors.barcode?.message ? (
                                <p className="text-sm text-red-600">
                                  {formState.errors.barcode.message}
                                </p>
                              ) : null}
                            </div>

                            <div className="space-y-2">
                              <label
                                className="block text-sm font-medium text-stone-700"
                                htmlFor="product-category"
                              >
                                Kategori (optional)
                              </label>
                              <Controller
                                control={control}
                                name="category"
                                render={({ field }) => (
                                  <Select
                                    aria-label="Kategori barang"
                                    className="w-full"
                                    id="product-category"
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
                                        {productCategoryOptions.map((category) => (
                                          <ListBox.Item id={category.id} key={category.id}>
                                            {category.label}
                                          </ListBox.Item>
                                        ))}
                                      </ListBox>
                                    </Select.Popover>
                                  </Select>
                                )}
                              />
                              {formState.errors.category?.message ? (
                                <p className="text-sm text-red-600">
                                  {formState.errors.category.message}
                                </p>
                              ) : null}
                            </div>
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
                              {editingProduct
                                ? "Simpan perubahan"
                                : "Simpan barang"}
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
          {filteredProducts.length} dari {products.length} barang
        </p>
      </div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Daftar barang toko">
            <Table.Header>
              <Table.Column isRowHeader>Nama</Table.Column>
              <Table.Column>SKU</Table.Column>
              <Table.Column>Kategori</Table.Column>
              <Table.Column>Satuan</Table.Column>
              <Table.Column>Harga modal</Table.Column>
              <Table.Column>Harga jual</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column className="w-[160px]">Aksi</Table.Column>
            </Table.Header>
            <Table.Body>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Table.Row key={product.id}>
                    <Table.Cell>
                      <div className="space-y-1">
                        <p className="font-medium text-stone-900">
                          {product.name ?? "-"}
                        </p>
                        {product.barcode ? (
                          <p className="text-xs text-stone-500">
                            {product.barcode}
                          </p>
                        ) : null}
                      </div>
                    </Table.Cell>
                    <Table.Cell>{product.sku ?? "-"}</Table.Cell>
                    <Table.Cell>{product.category ?? "-"}</Table.Cell>
                    <Table.Cell>{product.unit ?? "-"}</Table.Cell>
                    <Table.Cell>{formatRupiah(product.cost_price)}</Table.Cell>
                    <Table.Cell>
                      {formatRupiah(product.selling_price)}
                    </Table.Cell>
                    <Table.Cell>
                      {product.is_active === 0 ? "Nonaktif" : "Aktif"}
                    </Table.Cell>
                    <Table.Cell>
                      <div className="flex items-center gap-2">
                        <Button
                          onPress={() => startEdit(product)}
                          size="sm"
                          variant="outline"
                        >
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
                                  <AlertDialog.Heading>Hapus barang?</AlertDialog.Heading>
                                </AlertDialog.Header>
                                <AlertDialog.Body>
                                  {product.name ?? "Barang"} akan dihapus dari daftar barang untuk
                                  toko ini.
                                </AlertDialog.Body>
                                <AlertDialog.Footer>
                                  <Button slot="close" variant="tertiary">
                                    Batal
                                  </Button>
                                  <Button
                                    isPending={pendingDeleteId === product.id}
                                    onPress={() => void deleteProduct(product.id)}
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
                  <Table.Cell colSpan={8}>
                    {productsQuery.isPending
                      ? "Memuat daftar barang..."
                      : "Belum ada barang untuk toko ini."}
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
