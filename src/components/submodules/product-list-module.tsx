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
import { PackageIcon } from "@phosphor-icons/react/dist/csr/Package";
import { PencilSimpleIcon } from "@phosphor-icons/react/dist/csr/PencilSimple";
import { PlusIcon } from "@phosphor-icons/react/dist/csr/Plus";
import { TrashIcon } from "@phosphor-icons/react/dist/csr/Trash";
import { Controller, useForm } from "react-hook-form";
import { useQueries } from "@powersync/tanstack-react-query";
import { z } from "zod";
import { useI18n } from "../../lib/i18n";
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

type ProductFormValues = {
  barcode: string;
  category: string;
  costPrice: string;
  name: string;
  sellingPrice: string;
  sku: string;
  unit: string;
};

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
  { id: "sembako", label: "Groceries" },
  { id: "minuman", label: "Drinks" },
  { id: "makanan-ringan", label: "Snacks" },
  { id: "kebersihan", label: "Cleaning" },
  { id: "perawatan-rumah", label: "Home care" },
  { id: "lainnya", label: "Other" },
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

function normalizeText(value: string) {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function productCategoryLabel(
  value: string | null | undefined,
  text: ReturnType<typeof useI18n>["text"],
) {
  if (!value) {
    return text.common.states.noCategory;
  }

  return (
    {
      kebersihan: text.modules.productList.categories.kebersihan,
      lainnya: text.modules.productList.categories.lainnya,
      "makanan-ringan": text.modules.productList.categories.makananRingan,
      minuman: text.modules.productList.categories.minuman,
      "perawatan-rumah": text.modules.productList.categories.perawatanRumah,
      sembako: text.modules.productList.categories.sembako,
    }[value] ?? value
  );
}

function productUnitLabel(
  value: string | null | undefined,
  text: ReturnType<typeof useI18n>["text"],
) {
  if (!value) {
    return text.common.states.noUnit;
  }

  return (
    {
      botol: text.modules.productList.units.botol,
      dus: text.modules.productList.units.dus,
      gram: text.modules.productList.units.gram,
      kg: text.modules.productList.units.kg,
      liter: text.modules.productList.units.liter,
      ml: text.modules.productList.units.ml,
      pack: text.modules.productList.units.pack,
      pcs: text.modules.productList.units.pcs,
      sachet: text.modules.productList.units.sachet,
    }[value] ?? value
  );
}

export function ProductListModule({ storeId }: ProductListModuleProps) {
  const { formatCurrency, text } = useI18n();
  const productSchema = z.object({
    barcode: z.string().trim().max(50, text.modules.productList.validation.barcodeMax),
    category: z.string().trim().max(60, text.modules.productList.validation.categoryMax),
    costPrice: z
      .string()
      .trim()
      .min(1, text.modules.productList.validation.costPrice)
      .refine((value) => !Number.isNaN(Number(value)) && Number(value) >= 0, {
        message: text.modules.productList.validation.minAmount,
      }),
    name: z
      .string()
      .trim()
      .min(1, text.modules.productList.validation.nameMin)
      .max(120, text.modules.productList.validation.nameMax),
    sellingPrice: z
      .string()
      .trim()
      .min(1, text.modules.productList.validation.sellingPrice)
      .refine((value) => !Number.isNaN(Number(value)) && Number(value) >= 0, {
        message: text.modules.productList.validation.minAmount,
      }),
    sku: z.string().trim().max(50, text.modules.productList.validation.skuMax),
    unit: z.string().trim().max(30, text.modules.productList.validation.unitMax),
  });
  const modalState = useOverlayState();
  const [search, setSearch] = useState("");
  const [editingProduct, setEditingProduct] = useState<EditingProduct | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  const { control, formState, handleSubmit, reset } = useForm<ProductFormValues>({
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
      name: product.name ?? text.modules.productList.title,
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
      setFormError(error instanceof Error ? error.message : text.modules.productList.saveError);
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
      setFormError(error instanceof Error ? error.message : text.modules.productList.deleteError);
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">{text.modules.productList.title}</h3>
        <p className="text-sm text-stone-500">{text.modules.productList.description}</p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-1 flex-wrap items-center gap-3">
          <InputGroup className="max-w-md">
            <InputGroup.Prefix className="text-stone-400">
              <MagnifyingGlassIcon aria-hidden size={18} />
            </InputGroup.Prefix>
            <InputGroup.Input
              aria-label={text.modules.productList.searchLabel}
              className="w-full"
              onChange={(event) => setSearch(event.target.value)}
              placeholder={text.modules.productList.placeholderSearch}
              value={search}
            />
          </InputGroup>
          <Modal state={modalState}>
            <Button onPress={openCreateModal}>
              <PlusIcon aria-hidden size={16} />
              {text.modules.productList.addItem}
            </Button>
            <Modal.Backdrop>
              <Modal.Container placement="center" size="lg">
                <Modal.Dialog
                  aria-label={
                    editingProduct
                      ? text.modules.productList.headingEdit(editingProduct.name)
                      : text.modules.productList.headingNew
                  }
                >
                  {({ close }) => (
                    <>
                      <Modal.Header>
                        <Modal.Heading>
                          {editingProduct
                            ? text.modules.productList.headingEdit(editingProduct.name)
                            : text.modules.productList.headingNew}
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
                              {text.modules.productList.itemName}
                            </label>
                            <Controller
                              control={control}
                              name="name"
                              render={({ field, fieldState }) => (
                                <InputGroup className="w-full" isInvalid={fieldState.invalid}>
                                  <InputGroup.Prefix className="text-stone-400">
                                    <PackageIcon aria-hidden size={18} />
                                  </InputGroup.Prefix>
                                  <InputGroup.Input
                                    aria-invalid={fieldState.invalid}
                                    className="w-full"
                                    id="product-name"
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    placeholder={text.modules.productList.placeholderName}
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
                                {text.modules.productList.sellingPrice}
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
                                {text.modules.productList.costPrice}
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
                                {text.modules.productList.unitOptional}
                              </label>
                              <Controller
                                control={control}
                                name="unit"
                                render={({ field }) => (
                                  <Select
                                    aria-label={text.modules.productList.unitOptional}
                                    className="w-full"
                                    id="product-unit"
                                    onBlur={field.onBlur}
                                    onSelectionChange={(key) =>
                                      field.onChange(typeof key === "string" ? key : "")
                                    }
                                    placeholder={text.modules.productList.placeholderUnit}
                                    selectedKey={field.value || null}
                                  >
                                    <Select.Trigger className="w-full">
                                      <Select.Value />
                                      <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                      <ListBox>
                                        <ListBox.Item id="">
                                          {text.common.states.noUnit}
                                        </ListBox.Item>
                                        {productUnitOptions.map((unit) => (
                                          <ListBox.Item id={unit.id} key={unit.id}>
                                            {productUnitLabel(unit.id, text)}
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
                                {text.modules.productList.skuOptional}
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
                                    placeholder={text.modules.productList.placeholderSku}
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
                                {text.modules.productList.barcodeOptional}
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
                                    placeholder={text.modules.productList.placeholderBarcode}
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
                                {text.modules.productList.categoryOptional}
                              </label>
                              <Controller
                                control={control}
                                name="category"
                                render={({ field }) => (
                                  <Select
                                    aria-label={text.modules.productList.categoryOptional}
                                    className="w-full"
                                    id="product-category"
                                    onBlur={field.onBlur}
                                    onSelectionChange={(key) =>
                                      field.onChange(typeof key === "string" ? key : "")
                                    }
                                    placeholder={text.modules.productList.placeholderCategory}
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
                                        {productCategoryOptions.map((category) => (
                                          <ListBox.Item id={category.id} key={category.id}>
                                            {productCategoryLabel(category.id, text)}
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
                                <Alert.Title>{text.modules.productList.thatDidNotWork}</Alert.Title>
                                <Alert.Description>{formError}</Alert.Description>
                              </Alert.Content>
                              <CloseButton aria-label="Close" onPress={() => setFormError(null)} />
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
                              {text.common.actions.cancel}
                            </Button>
                            <Button isPending={isSaving} type="submit">
                              {editingProduct
                                ? text.common.actions.saveChanges
                                : text.common.actions.saveItem}
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
            filteredProducts.length,
            products.length,
            text.modules.productList.tableCountLabel,
          )}
        </p>
      </div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label={text.modules.productList.itemList}>
            <Table.Header>
              <Table.Column isRowHeader>{text.common.labels.name}</Table.Column>
              <Table.Column>{text.common.labels.sku}</Table.Column>
              <Table.Column>{text.common.labels.category}</Table.Column>
              <Table.Column>{text.common.labels.unit}</Table.Column>
              <Table.Column>{text.modules.productList.costPrice}</Table.Column>
              <Table.Column>{text.modules.productList.sellingPrice}</Table.Column>
              <Table.Column>{text.common.labels.status}</Table.Column>
              <Table.Column className="w-[160px]">{text.common.labels.actions}</Table.Column>
            </Table.Header>
            <Table.Body>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Table.Row key={product.id}>
                    <Table.Cell>
                      <div className="space-y-1">
                        <p className="font-medium text-stone-900">
                          {product.name ?? text.common.states.unnamedItem}
                        </p>
                        {product.barcode ? (
                          <p className="text-xs text-stone-500">{product.barcode}</p>
                        ) : null}
                      </div>
                    </Table.Cell>
                    <Table.Cell>{product.sku ?? text.common.states.notAdded}</Table.Cell>
                    <Table.Cell>{productCategoryLabel(product.category, text)}</Table.Cell>
                    <Table.Cell>{productUnitLabel(product.unit, text)}</Table.Cell>
                    <Table.Cell>{formatCurrency(product.cost_price)}</Table.Cell>
                    <Table.Cell>{formatCurrency(product.selling_price)}</Table.Cell>
                    <Table.Cell>
                      {product.is_active === 0
                        ? text.modules.productList.statusHidden
                        : text.modules.productList.statusActive}
                    </Table.Cell>
                    <Table.Cell>
                      <div className="flex items-center gap-2">
                        <Button onPress={() => startEdit(product)} size="sm" variant="outline">
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
                                    {text.modules.productList.deleteTitle}
                                  </AlertDialog.Heading>
                                </AlertDialog.Header>
                                <AlertDialog.Body>
                                  {text.modules.productList.deleteBody(
                                    product.name ?? text.common.states.unnamedItem,
                                  )}
                                </AlertDialog.Body>
                                <AlertDialog.Footer>
                                  <Button slot="close" variant="tertiary">
                                    {text.common.actions.cancel}
                                  </Button>
                                  <Button
                                    isPending={pendingDeleteId === product.id}
                                    onPress={() => void deleteProduct(product.id)}
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
                  <Table.Cell colSpan={8}>
                    {productsQuery.isPending
                      ? text.modules.productList.loading
                      : text.modules.productList.empty}
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
