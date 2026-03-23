import { useMemo, useState } from "react";
import {
  Alert,
  AlertDialog,
  Button,
  Card,
  Chip,
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
import { TrashIcon } from "@phosphor-icons/react/dist/csr/Trash";
import { Controller, useForm } from "react-hook-form";
import { useQueries } from "@powersync/tanstack-react-query";
import { z } from "zod";
import { useI18n } from "../../lib/i18n";
import { powerSync } from "../../lib/powersync";

type StockModuleProps = {
  storeId: string;
};

type InventoryRow = {
  inventory_id: string | null;
  is_active: number | null;
  on_hand: number | null;
  product_id: string;
  product_name: string | null;
  reorder_point: number | null;
  sku: string | null;
  unit: string | null;
};

type ProductOptionRow = {
  id: string;
  name: string | null;
  sku: string | null;
  unit: string | null;
};

type StockMetricRow = {
  empty_count: number | null;
  low_count: number | null;
  tracked_count: number | null;
};

type EditingInventory = {
  inventoryId: string | null;
  productId: string;
  productName: string;
};

type StockFormValues = {
  onHand: string;
  productId: string;
  reorderPoint: string;
};

const defaultValues: StockFormValues = {
  onHand: "0",
  productId: "",
  reorderPoint: "0",
};

function stockStatus(
  onHand: number,
  reorderPoint: number,
  text: ReturnType<typeof useI18n>["text"],
) {
  if (onHand <= 0) {
    return {
      color: "danger" as const,
      label: text.modules.stock.outOfStock,
    };
  }

  if (onHand <= reorderPoint) {
    return {
      color: "warning" as const,
      label: text.modules.stock.runningLow,
    };
  }

  return {
    color: "success" as const,
    label: text.modules.stock.inStock,
  };
}

function productOptionLabel(product: ProductOptionRow, text: ReturnType<typeof useI18n>["text"]) {
  const name = product.name ?? text.common.states.unnamedItem;
  return product.sku ? `${name} · ${product.sku}` : name;
}

export function StockModule({ storeId }: StockModuleProps) {
  const { text } = useI18n();
  const stockSchema = z.object({
    onHand: z
      .string()
      .trim()
      .min(1, text.modules.stock.validation.currentStock)
      .refine((value) => !Number.isNaN(Number(value)) && Number(value) >= 0, {
        message: text.modules.stock.validation.minAmount,
      }),
    productId: z.string().trim().min(1, text.modules.stock.validation.item),
    reorderPoint: z
      .string()
      .trim()
      .min(1, text.modules.stock.validation.reorderPoint)
      .refine((value) => !Number.isNaN(Number(value)) && Number(value) >= 0, {
        message: text.modules.stock.validation.minAmount,
      }),
  });
  const modalState = useOverlayState();
  const [search, setSearch] = useState("");
  const [editingInventory, setEditingInventory] = useState<EditingInventory | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  const { control, formState, handleSubmit, reset } = useForm<StockFormValues>({
    defaultValues,
    resolver: zodResolver(stockSchema),
  });
  const [inventoryQuery, productsQuery, summaryQuery] = useQueries<
    [InventoryRow, ProductOptionRow, StockMetricRow]
  >({
    queries: [
      {
        parameters: [storeId, storeId],
        query: `
          SELECT
            inventory_items.id AS inventory_id,
            products.id AS product_id,
            products.name AS product_name,
            products.sku,
            products.unit,
            products.is_active,
            COALESCE(inventory_items.on_hand, 0) AS on_hand,
            COALESCE(inventory_items.reorder_point, 0) AS reorder_point
          FROM products
          LEFT JOIN inventory_items
            ON inventory_items.product_id = products.id
           AND inventory_items.store_id = ?
          WHERE products.store_id = ?
          ORDER BY LOWER(COALESCE(products.name, ''))
        `,
        queryKey: ["inventory", storeId],
      },
      {
        parameters: [storeId],
        query: `
          SELECT id, name, sku, unit
          FROM products
          WHERE store_id = ?
          ORDER BY LOWER(COALESCE(name, ''))
        `,
        queryKey: ["stock-products", storeId],
      },
      {
        parameters: [storeId, storeId],
        query: `
          SELECT
            COUNT(products.id) AS tracked_count,
            SUM(CASE WHEN COALESCE(inventory_items.on_hand, 0) <= 0 THEN 1 ELSE 0 END) AS empty_count,
            SUM(
              CASE
                WHEN COALESCE(inventory_items.on_hand, 0) > 0
                 AND COALESCE(inventory_items.on_hand, 0) <= COALESCE(inventory_items.reorder_point, 0)
                THEN 1
                ELSE 0
              END
            ) AS low_count
          FROM products
          LEFT JOIN inventory_items
            ON inventory_items.product_id = products.id
           AND inventory_items.store_id = ?
          WHERE products.store_id = ?
        `,
        queryKey: ["stock-summary", storeId],
      },
    ],
  });

  const inventoryRows = inventoryQuery.data ?? [];
  const productOptions = productsQuery.data ?? [];
  const summary = summaryQuery.data?.[0];
  const searchValue = search.trim().toLowerCase();
  const filteredRows = useMemo(() => {
    if (!searchValue) {
      return inventoryRows;
    }

    return inventoryRows.filter((row) =>
      [row.product_name, row.sku, row.unit]
        .filter((value): value is string => Boolean(value))
        .some((value) => value.toLowerCase().includes(searchValue)),
    );
  }, [inventoryRows, searchValue]);
  const availableProducts = useMemo(() => {
    if (editingInventory) {
      return productOptions;
    }

    const trackedProductIds = new Set(
      inventoryRows.filter((row) => row.inventory_id).map((row) => row.product_id),
    );

    return productOptions.filter((product) => !trackedProductIds.has(product.id));
  }, [editingInventory, inventoryRows, productOptions]);

  function resetForm() {
    setEditingInventory(null);
    setFormError(null);
    reset(defaultValues);
  }

  function openCreateModal() {
    resetForm();
    modalState.open();
  }

  function startEdit(row: InventoryRow) {
    setEditingInventory({
      inventoryId: row.inventory_id,
      productId: row.product_id,
      productName: row.product_name ?? text.common.states.unnamedItem,
    });
    setFormError(null);
    reset({
      onHand: String(row.on_hand ?? 0),
      productId: row.product_id,
      reorderPoint: String(row.reorder_point ?? 0),
    });
    modalState.open();
  }

  async function saveInventory(values: StockFormValues, close: () => void) {
    setFormError(null);
    setIsSaving(true);

    const now = new Date().toISOString();

    try {
      if (editingInventory?.inventoryId) {
        await powerSync.execute(
          `
            UPDATE inventory_items
            SET on_hand = ?, reorder_point = ?, updated_at = ?
            WHERE id = ?
          `,
          [Number(values.onHand), Number(values.reorderPoint), now, editingInventory.inventoryId],
        );
      } else {
        await powerSync.execute(
          `
            INSERT INTO inventory_items (
              id,
              store_id,
              product_id,
              on_hand,
              reorder_point,
              updated_at
            )
            VALUES (?, ?, ?, ?, ?, ?)
          `,
          [
            crypto.randomUUID(),
            storeId,
            values.productId,
            Number(values.onHand),
            Number(values.reorderPoint),
            now,
          ],
        );
      }

      setIsSaving(false);
      close();
      resetForm();
    } catch (error) {
      setIsSaving(false);
      setFormError(error instanceof Error ? error.message : text.modules.stock.saveError);
    }
  }

  async function deleteInventory(inventoryId: string) {
    setFormError(null);
    setPendingDeleteId(inventoryId);

    try {
      await powerSync.execute("DELETE FROM inventory_items WHERE id = ?", [inventoryId]);

      if (editingInventory?.inventoryId === inventoryId) {
        resetForm();
      }

      setPendingDeleteId(null);
    } catch (error) {
      setPendingDeleteId(null);
      setFormError(error instanceof Error ? error.message : text.modules.stock.deleteError);
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">{text.modules.stock.title}</h3>
        <p className="text-sm text-stone-500">{text.modules.stock.description}</p>
      </div>

      {formError ? (
        <Alert status="danger">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>{text.modules.stock.thatDidNotWork}</Alert.Title>
            <Alert.Description>{formError}</Alert.Description>
          </Alert.Content>
        </Alert>
      ) : null}

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-sm font-medium text-stone-600">
              {text.modules.stock.trackedItems}
            </Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">{summary?.tracked_count ?? 0}</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="flex items-center justify-between gap-3">
            <Card.Title className="text-sm font-medium text-stone-600">
              {text.modules.stock.runningLow}
            </Card.Title>
            <Chip color="warning">{summary?.low_count ?? 0}</Chip>
          </Card.Header>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="flex items-center justify-between gap-3">
            <Card.Title className="text-sm font-medium text-stone-600">
              {text.modules.stock.outOfStock}
            </Card.Title>
            <Chip color="danger">{summary?.empty_count ?? 0}</Chip>
          </Card.Header>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="flex items-center justify-between gap-3">
            <Card.Title className="text-sm font-medium text-stone-600">
              {text.modules.stock.lookingGood}
            </Card.Title>
            <Chip color="success">
              {(summary?.tracked_count ?? 0) -
                (summary?.low_count ?? 0) -
                (summary?.empty_count ?? 0)}
            </Chip>
          </Card.Header>
        </Card>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <InputGroup className="max-w-md">
          <InputGroup.Prefix className="text-stone-400">
            <MagnifyingGlassIcon aria-hidden size={18} />
          </InputGroup.Prefix>
          <InputGroup.Input
            aria-label={text.modules.stock.searchLabel}
            className="w-full"
            onChange={(event) => setSearch(event.target.value)}
            placeholder={text.modules.stock.placeholderSearch}
            value={search}
          />
        </InputGroup>
        <p className="text-sm text-stone-500">
          {text.common.prompts.ofTotal(
            filteredRows.length,
            inventoryRows.length,
            text.modules.stock.tableCountLabel,
          )}
        </p>
      </div>

      <Modal state={modalState}>
        <Button className="hidden" onPress={openCreateModal}>
          {text.modules.stock.updateStock}
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="center" size="lg">
            <Modal.Dialog
              aria-label={
                editingInventory
                  ? text.modules.stock.headingEdit(editingInventory.productName)
                  : text.modules.stock.headingNew
              }
            >
              {({ close }) => (
                <>
                  <Modal.Header>
                    <Modal.Heading>
                      {editingInventory
                        ? text.modules.stock.headingEdit(editingInventory.productName)
                        : text.modules.stock.headingNew}
                    </Modal.Heading>
                  </Modal.Header>
                  <Modal.Body>
                    <form
                      className="space-y-4"
                      onSubmit={handleSubmit(async (values) => {
                        await saveInventory(values, close);
                      })}
                    >
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            className="block text-sm font-medium text-stone-700"
                            htmlFor="stock-product-id"
                          >
                            {text.modules.stock.item}
                          </label>
                          <Controller
                            control={control}
                            name="productId"
                            render={({ field, fieldState }) => (
                              <Select
                                aria-invalid={fieldState.invalid}
                                aria-label={text.modules.stock.placeholderItem}
                                className="w-full"
                                id="stock-product-id"
                                isDisabled={Boolean(editingInventory)}
                                onBlur={field.onBlur}
                                onSelectionChange={(key) =>
                                  field.onChange(typeof key === "string" ? key : "")
                                }
                                placeholder={text.modules.stock.placeholderItem}
                                selectedKey={field.value || null}
                              >
                                <Select.Trigger className="w-full">
                                  <Select.Value />
                                  <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                  <ListBox>
                                    {availableProducts.map((product) => (
                                      <ListBox.Item id={product.id} key={product.id}>
                                        {productOptionLabel(product, text)}
                                      </ListBox.Item>
                                    ))}
                                  </ListBox>
                                </Select.Popover>
                              </Select>
                            )}
                          />
                          {formState.errors.productId?.message ? (
                            <p className="text-sm text-red-600">
                              {formState.errors.productId.message}
                            </p>
                          ) : null}
                        </div>

                        <div className="space-y-2">
                          <label
                            className="block text-sm font-medium text-stone-700"
                            htmlFor="stock-on-hand"
                          >
                            {text.modules.stock.currentStock}
                          </label>
                          <Controller
                            control={control}
                            name="onHand"
                            render={({ field, fieldState }) => (
                              <Input
                                aria-invalid={fieldState.invalid}
                                className="w-full"
                                id="stock-on-hand"
                                min={0}
                                onBlur={field.onBlur}
                                onChange={field.onChange}
                                placeholder="0"
                                type="number"
                                value={field.value}
                              />
                            )}
                          />
                          {formState.errors.onHand?.message ? (
                            <p className="text-sm text-red-600">
                              {formState.errors.onHand.message}
                            </p>
                          ) : null}
                        </div>

                        <div className="space-y-2">
                          <label
                            className="block text-sm font-medium text-stone-700"
                            htmlFor="stock-reorder-point"
                          >
                            {text.modules.stock.reorderPoint}
                          </label>
                          <Controller
                            control={control}
                            name="reorderPoint"
                            render={({ field, fieldState }) => (
                              <InputGroup className="w-full" isInvalid={fieldState.invalid}>
                                <InputGroup.Input
                                  aria-invalid={fieldState.invalid}
                                  className="w-full"
                                  id="stock-reorder-point"
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
                          {formState.errors.reorderPoint?.message ? (
                            <p className="text-sm text-red-600">
                              {formState.errors.reorderPoint.message}
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
                          {editingInventory
                            ? text.common.actions.saveChanges
                            : text.common.actions.saveStock}
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

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label={text.modules.stock.stockList}>
            <Table.Header>
              <Table.Column isRowHeader>{text.modules.stock.item}</Table.Column>
              <Table.Column>{text.common.labels.sku}</Table.Column>
              <Table.Column>{text.modules.stock.title}</Table.Column>
              <Table.Column>{text.modules.stock.reorderPoint}</Table.Column>
              <Table.Column>{text.common.labels.unit}</Table.Column>
              <Table.Column>{text.common.labels.status}</Table.Column>
              <Table.Column className="w-[160px]">{text.common.labels.actions}</Table.Column>
            </Table.Header>
            <Table.Body>
              {filteredRows.length > 0 ? (
                filteredRows.map((row) => {
                  const status = stockStatus(row.on_hand ?? 0, row.reorder_point ?? 0, text);

                  return (
                    <Table.Row key={row.product_id}>
                      <Table.Cell>{row.product_name ?? text.common.states.unnamedItem}</Table.Cell>
                      <Table.Cell>{row.sku ?? text.common.states.notAdded}</Table.Cell>
                      <Table.Cell>{row.on_hand ?? 0}</Table.Cell>
                      <Table.Cell>{row.reorder_point ?? 0}</Table.Cell>
                      <Table.Cell>{row.unit ?? text.common.states.noUnit}</Table.Cell>
                      <Table.Cell>
                        <Chip color={status.color}>{status.label}</Chip>
                      </Table.Cell>
                      <Table.Cell>
                        <div className="flex items-center gap-2">
                          <Button onPress={() => startEdit(row)} size="sm" variant="outline">
                            <PencilSimpleIcon aria-hidden size={16} />
                            {text.modules.stock.updateStock}
                          </Button>
                          {row.inventory_id ? (
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
                                        {text.modules.stock.deleteTitle}
                                      </AlertDialog.Heading>
                                    </AlertDialog.Header>
                                    <AlertDialog.Body>
                                      {text.modules.stock.deleteBody(
                                        row.product_name ?? text.common.states.unnamedItem,
                                      )}
                                    </AlertDialog.Body>
                                    <AlertDialog.Footer>
                                      <Button slot="close" variant="tertiary">
                                        {text.common.actions.cancel}
                                      </Button>
                                      <Button
                                        isPending={pendingDeleteId === row.inventory_id}
                                        onPress={() => {
                                          if (row.inventory_id) {
                                            void deleteInventory(row.inventory_id);
                                          }
                                        }}
                                        variant="danger"
                                      >
                                        {text.common.actions.delete}
                                      </Button>
                                    </AlertDialog.Footer>
                                  </AlertDialog.Dialog>
                                </AlertDialog.Container>
                              </AlertDialog.Backdrop>
                            </AlertDialog>
                          ) : null}
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  );
                })
              ) : (
                <Table.Row>
                  <Table.Cell colSpan={7}>
                    {inventoryQuery.isPending
                      ? text.modules.stock.loading
                      : text.modules.stock.empty}
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
