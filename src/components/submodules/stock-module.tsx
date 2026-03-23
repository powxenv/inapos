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

const stockSchema = z.object({
  onHand: z
    .string()
    .trim()
    .min(1, "Enter the current stock.")
    .refine((value) => !Number.isNaN(Number(value)) && Number(value) >= 0, {
      message: "Use 0 or more.",
    }),
  productId: z.string().trim().min(1, "Choose an item."),
  reorderPoint: z
    .string()
    .trim()
    .min(1, "Enter a reorder point.")
    .refine((value) => !Number.isNaN(Number(value)) && Number(value) >= 0, {
      message: "Use 0 or more.",
    }),
});

type StockFormValues = z.infer<typeof stockSchema>;

const defaultValues: StockFormValues = {
  onHand: "0",
  productId: "",
  reorderPoint: "0",
};

function stockStatus(onHand: number, reorderPoint: number) {
  if (onHand <= 0) {
    return {
      color: "danger" as const,
      label: "Out of stock",
    };
  }

  if (onHand <= reorderPoint) {
    return {
      color: "warning" as const,
      label: "Running low",
    };
  }

  return {
    color: "success" as const,
    label: "In stock",
  };
}

function productOptionLabel(product: ProductOptionRow) {
  const name = product.name ?? "Unnamed item";
  return product.sku ? `${name} · ${product.sku}` : name;
}

export function StockModule({ storeId }: StockModuleProps) {
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
      productName: row.product_name ?? "Item",
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
      setFormError(error instanceof Error ? error.message : "We couldn't save this stock update.");
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
      setFormError(error instanceof Error ? error.message : "We couldn't delete this stock entry.");
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">Stock</h3>
        <p className="text-sm text-stone-500">
          Check stock levels and decide when each item should be reordered.
        </p>
      </div>

      {formError ? (
        <Alert status="danger">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>That didn’t work</Alert.Title>
            <Alert.Description>{formError}</Alert.Description>
          </Alert.Content>
        </Alert>
      ) : null}

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-sm font-medium text-stone-600">Tracked items</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">{summary?.tracked_count ?? 0}</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="flex items-center justify-between gap-3">
            <Card.Title className="text-sm font-medium text-stone-600">Running low</Card.Title>
            <Chip color="warning">{summary?.low_count ?? 0}</Chip>
          </Card.Header>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="flex items-center justify-between gap-3">
            <Card.Title className="text-sm font-medium text-stone-600">Out of stock</Card.Title>
            <Chip color="danger">{summary?.empty_count ?? 0}</Chip>
          </Card.Header>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="flex items-center justify-between gap-3">
            <Card.Title className="text-sm font-medium text-stone-600">Looking good</Card.Title>
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
            aria-label="Search stock"
            className="w-full"
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by item name, code, or unit"
            value={search}
          />
        </InputGroup>
        <p className="text-sm text-stone-500">
          {filteredRows.length} of {inventoryRows.length} items
        </p>
      </div>

      <Modal state={modalState}>
        <Button className="hidden" onPress={openCreateModal}>
          Update stock
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="center" size="lg">
            <Modal.Dialog aria-label={editingInventory ? "Edit stock" : "Update stock"}>
              {({ close }) => (
                <>
                  <Modal.Header>
                    <Modal.Heading>
                      {editingInventory
                        ? `Edit stock: ${editingInventory.productName}`
                        : "Update stock"}
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
                            Item
                          </label>
                          <Controller
                            control={control}
                            name="productId"
                            render={({ field, fieldState }) => (
                              <Select
                                aria-invalid={fieldState.invalid}
                                aria-label="Choose an item"
                                className="w-full"
                                id="stock-product-id"
                                isDisabled={Boolean(editingInventory)}
                                onBlur={field.onBlur}
                                onSelectionChange={(key) =>
                                  field.onChange(typeof key === "string" ? key : "")
                                }
                                placeholder="Choose an item"
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
                                        {productOptionLabel(product)}
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
                            Current stock
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
                            Reorder point
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
                          Cancel
                        </Button>
                        <Button isPending={isSaving} type="submit">
                          {editingInventory ? "Save changes" : "Save stock"}
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
          <Table.Content aria-label="Stock list">
            <Table.Header>
              <Table.Column isRowHeader>Item</Table.Column>
              <Table.Column>SKU</Table.Column>
              <Table.Column>Stock</Table.Column>
              <Table.Column>Reorder point</Table.Column>
              <Table.Column>Unit</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column className="w-[160px]">Actions</Table.Column>
            </Table.Header>
            <Table.Body>
              {filteredRows.length > 0 ? (
                filteredRows.map((row) => {
                  const status = stockStatus(row.on_hand ?? 0, row.reorder_point ?? 0);

                  return (
                    <Table.Row key={row.product_id}>
                      <Table.Cell>{row.product_name ?? "-"}</Table.Cell>
                      <Table.Cell>{row.sku ?? "-"}</Table.Cell>
                      <Table.Cell>{row.on_hand ?? 0}</Table.Cell>
                      <Table.Cell>{row.reorder_point ?? 0}</Table.Cell>
                      <Table.Cell>{row.unit ?? "-"}</Table.Cell>
                      <Table.Cell>
                        <Chip color={status.color}>{status.label}</Chip>
                      </Table.Cell>
                      <Table.Cell>
                        <div className="flex items-center gap-2">
                          <Button onPress={() => startEdit(row)} size="sm" variant="outline">
                            <PencilSimpleIcon aria-hidden size={16} />
                            Update stock
                          </Button>
                          {row.inventory_id ? (
                            <AlertDialog>
                              <Button size="sm" variant="tertiary">
                                <TrashIcon aria-hidden size={16} />
                                Delete
                              </Button>
                              <AlertDialog.Backdrop>
                                <AlertDialog.Container placement="center" size="sm">
                                  <AlertDialog.Dialog>
                                    <AlertDialog.Header>
                                      <AlertDialog.Heading>
                                        Delete this stock entry?
                                      </AlertDialog.Heading>
                                    </AlertDialog.Header>
                                    <AlertDialog.Body>
                                      The stock entry for {row.product_name ?? "this item"} will be
                                      removed.
                                    </AlertDialog.Body>
                                    <AlertDialog.Footer>
                                      <Button slot="close" variant="tertiary">
                                        Cancel
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
                                        Delete
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
                    {inventoryQuery.isPending ? "Loading stock..." : "No stock entries yet."}
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
