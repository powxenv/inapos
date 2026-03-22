import { useMemo, useState } from "react";
import { Alert, Button, Card, InputGroup, ListBox, Select, Table } from "@heroui/react";
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/csr/MagnifyingGlass";
import { MinusIcon } from "@phosphor-icons/react/dist/csr/Minus";
import { PlusIcon } from "@phosphor-icons/react/dist/csr/Plus";
import { ShoppingCartIcon } from "@phosphor-icons/react/dist/csr/ShoppingCart";
import { TrashIcon } from "@phosphor-icons/react/dist/csr/Trash";
import { useQueries } from "@powersync/tanstack-react-query";
import { powerSync } from "../../lib/powersync";

type CashierModuleProps = {
  storeId: string;
};

type CashierProductRow = {
  id: string;
  name: string | null;
  selling_price: number | null;
  sku: string | null;
  stock: number | null;
  unit: string | null;
};

type CustomerOptionRow = {
  id: string;
  name: string | null;
};

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  stock: number | null;
};

const paymentMethodOptions = [
  { id: "cash", label: "Tunai" },
  { id: "transfer", label: "Transfer" },
  { id: "qris", label: "QRIS" },
] as const;

function createReceiptNumber() {
  const stamp = new Date().toISOString().replace(/[-:TZ.]/g, "").slice(2, 12);
  return `TRX-${stamp}`;
}

function formatRupiah(value: number | null | undefined) {
  return new Intl.NumberFormat("id-ID", {
    currency: "IDR",
    maximumFractionDigits: 0,
    style: "currency",
  }).format(value ?? 0);
}

export function CashierModule({ storeId }: CashierModuleProps) {
  const [search, setSearch] = useState("");
  const [selectedCustomerId, setSelectedCustomerId] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("cash");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [productsQuery, customersQuery] = useQueries<[CashierProductRow, CustomerOptionRow]>({
    queries: [
      {
        parameters: [storeId, storeId],
        query: `
          SELECT
            products.id,
            products.name,
            products.sku,
            products.unit,
            products.selling_price,
            inventory_items.on_hand AS stock
          FROM products
          LEFT JOIN inventory_items
            ON inventory_items.product_id = products.id
           AND inventory_items.store_id = ?
          WHERE products.store_id = ?
          ORDER BY LOWER(COALESCE(products.name, ''))
        `,
        queryKey: ["cashier-products", storeId],
      },
      {
        parameters: [storeId],
        query: `
          SELECT id, name
          FROM customers
          WHERE store_id = ?
          ORDER BY LOWER(COALESCE(name, ''))
        `,
        queryKey: ["cashier-customers", storeId],
      },
    ],
  });

  const products = productsQuery.data ?? [];
  const customers = customersQuery.data ?? [];
  const searchValue = search.trim().toLowerCase();
  const filteredProducts = useMemo(() => {
    if (!searchValue) {
      return products;
    }

    return products.filter((product) =>
      [product.name, product.sku, product.unit]
        .filter((value): value is string => Boolean(value))
        .some((value) => value.toLowerCase().includes(searchValue)),
    );
  }, [products, searchValue]);
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  function addToCart(product: CashierProductRow) {
    setCheckoutError(null);
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);
      const nextQuantity = (existingItem?.quantity ?? 0) + 1;

      if (typeof product.stock === "number" && product.stock >= 0 && nextQuantity > product.stock) {
        return currentCart;
      }

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id ? { ...item, quantity: nextQuantity } : item,
        );
      }

      return [
        ...currentCart,
        {
          id: product.id,
          name: product.name ?? "Barang",
          price: product.selling_price ?? 0,
          quantity: 1,
          stock: product.stock,
        },
      ];
    });
  }

  function updateCartQuantity(productId: string, delta: number) {
    setCart((currentCart) =>
      currentCart
        .map((item) => {
          if (item.id !== productId) {
            return item;
          }

          const nextQuantity = item.quantity + delta;

          if (nextQuantity <= 0) {
            return null;
          }

          if (typeof item.stock === "number" && item.stock >= 0 && nextQuantity > item.stock) {
            return item;
          }

          return {
            ...item,
            quantity: nextQuantity,
          };
        })
        .filter((item): item is CartItem => Boolean(item)),
    );
  }

  function removeFromCart(productId: string) {
    setCart((currentCart) => currentCart.filter((item) => item.id !== productId));
  }

  async function submitSale() {
    if (cart.length === 0) {
      setCheckoutError("Tambahkan minimal satu barang ke keranjang.");
      return;
    }

    setCheckoutError(null);
    setIsSubmitting(true);

    const saleId = crypto.randomUUID();
    const now = new Date().toISOString();
    const receiptNumber = createReceiptNumber();

    try {
      await powerSync.writeTransaction(async (tx) => {
        await tx.execute(
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
            saleId,
            storeId,
            receiptNumber,
            selectedCustomerId || null,
            paymentMethod,
            "completed",
            subtotal,
            now,
            now,
          ],
        );

        await Promise.all(
          cart.map((item) =>
            tx.execute(
              `
                INSERT INTO sale_items (
                  id,
                  sale_id,
                  product_id,
                  quantity,
                  unit_price,
                  line_total,
                  updated_at
                )
                VALUES (?, ?, ?, ?, ?, ?, ?)
              `,
              [
                crypto.randomUUID(),
                saleId,
                item.id,
                item.quantity,
                item.price,
                item.price * item.quantity,
                now,
              ],
            ),
          ),
        );

        await Promise.all(
          cart.map((item) =>
            tx.execute(
              `
                UPDATE inventory_items
                SET on_hand = MAX(COALESCE(on_hand, 0) - ?, 0), updated_at = ?
                WHERE store_id = ? AND product_id = ?
              `,
              [item.quantity, now, storeId, item.id],
            ),
          ),
        );

        if (selectedCustomerId) {
          await tx.execute(
            `
              UPDATE customers
              SET total_spent = COALESCE(total_spent, 0) + ?, updated_at = ?
              WHERE id = ?
            `,
            [subtotal, now, selectedCustomerId],
          );
        }
      });

      setCart([]);
      setSelectedCustomerId("");
      setPaymentMethod("cash");
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
      setCheckoutError(error instanceof Error ? error.message : "Gagal menyimpan transaksi.");
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">Kasir</h3>
        <p className="text-sm text-stone-500">Pilih barang, atur qty, lalu simpan transaksi dari satu layar.</p>
      </div>

      {checkoutError ? (
        <Alert status="danger">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>Transaksi belum tersimpan</Alert.Title>
            <Alert.Description>{checkoutError}</Alert.Description>
          </Alert.Content>
        </Alert>
      ) : null}

      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <InputGroup className="max-w-md">
              <InputGroup.Prefix className="text-stone-400">
                <MagnifyingGlassIcon aria-hidden size={18} />
              </InputGroup.Prefix>
              <InputGroup.Input
                aria-label="Cari barang untuk kasir"
                className="w-full"
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Cari barang, SKU, atau satuan"
                value={search}
              />
            </InputGroup>
            <p className="text-sm text-stone-500">{filteredProducts.length} barang tersedia</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Card className="border border-stone-200 shadow-none" key={product.id}>
                  <Card.Header className="space-y-1">
                    <Card.Title className="text-base">{product.name ?? "-"}</Card.Title>
                    <Card.Description className="text-sm text-stone-500">
                      {product.sku ?? "Tanpa SKU"}
                    </Card.Description>
                  </Card.Header>
                  <Card.Content className="space-y-3">
                    <div className="text-sm text-stone-600">
                      <p>{formatRupiah(product.selling_price)}</p>
                      <p>
                        Stok: {product.stock ?? 0} {product.unit ?? ""}
                      </p>
                    </div>
                    <Button
                      fullWidth
                      isDisabled={typeof product.stock === "number" && product.stock <= 0}
                      onPress={() => addToCart(product)}
                      variant="outline"
                    >
                      <PlusIcon aria-hidden size={16} />
                      Tambah
                    </Button>
                  </Card.Content>
                </Card>
              ))
            ) : (
              <Alert>
                <Alert.Indicator />
                <Alert.Content>
                  <Alert.Title>Barang tidak ditemukan</Alert.Title>
                  <Alert.Description>Coba kata kunci lain atau buat barang baru dulu.</Alert.Description>
                </Alert.Content>
              </Alert>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <Card className="border border-stone-200 shadow-none">
            <Card.Header className="space-y-1">
              <Card.Title className="text-base">Keranjang</Card.Title>
              <Card.Description className="text-sm text-stone-500">
                Ringkasan transaksi yang akan disimpan.
              </Card.Description>
            </Card.Header>
            <Card.Content className="space-y-4">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-stone-700" htmlFor="cashier-customer">
                    Pelanggan (optional)
                  </label>
                  <Select
                    aria-label="Pilih pelanggan"
                    className="w-full"
                    id="cashier-customer"
                    onSelectionChange={(key) => setSelectedCustomerId(typeof key === "string" ? key : "")}
                    selectedKey={selectedCustomerId || null}
                  >
                    <Select.Trigger className="w-full">
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="">Tanpa pelanggan</ListBox.Item>
                        {customers.map((customer) => (
                          <ListBox.Item id={customer.id} key={customer.id}>
                            {customer.name ?? "Pelanggan tanpa nama"}
                          </ListBox.Item>
                        ))}
                      </ListBox>
                    </Select.Popover>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-stone-700" htmlFor="cashier-payment">
                    Metode pembayaran
                  </label>
                  <Select
                    aria-label="Pilih pembayaran"
                    className="w-full"
                    id="cashier-payment"
                    onSelectionChange={(key) => setPaymentMethod(typeof key === "string" ? key : "cash")}
                    selectedKey={paymentMethod}
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
                </div>
              </div>

              <Table>
                <Table.ScrollContainer>
                  <Table.Content aria-label="Keranjang kasir">
                    <Table.Header>
                      <Table.Column isRowHeader>Barang</Table.Column>
                      <Table.Column>Qty</Table.Column>
                      <Table.Column>Subtotal</Table.Column>
                      <Table.Column>Aksi</Table.Column>
                    </Table.Header>
                    <Table.Body>
                      {cart.length > 0 ? (
                        cart.map((item) => (
                          <Table.Row key={item.id}>
                            <Table.Cell>{item.name}</Table.Cell>
                            <Table.Cell>{item.quantity}</Table.Cell>
                            <Table.Cell>{formatRupiah(item.price * item.quantity)}</Table.Cell>
                            <Table.Cell>
                              <div className="flex items-center gap-2">
                                <Button onPress={() => updateCartQuantity(item.id, -1)} size="sm" variant="tertiary">
                                  <MinusIcon aria-hidden size={16} />
                                </Button>
                                <Button onPress={() => updateCartQuantity(item.id, 1)} size="sm" variant="outline">
                                  <PlusIcon aria-hidden size={16} />
                                </Button>
                                <Button onPress={() => removeFromCart(item.id)} size="sm" variant="tertiary">
                                  <TrashIcon aria-hidden size={16} />
                                </Button>
                              </div>
                            </Table.Cell>
                          </Table.Row>
                        ))
                      ) : (
                        <Table.Row>
                          <Table.Cell colSpan={4}>Belum ada barang di keranjang.</Table.Cell>
                        </Table.Row>
                      )}
                    </Table.Body>
                  </Table.Content>
                </Table.ScrollContainer>
              </Table>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                <Card className="border border-stone-200 shadow-none">
                  <Card.Header>
                    <Card.Title className="text-sm font-medium text-stone-600">Subtotal</Card.Title>
                  </Card.Header>
                  <Card.Content>
                    <p className="text-xl font-semibold text-stone-950">{formatRupiah(subtotal)}</p>
                  </Card.Content>
                </Card>
                <Card className="border border-stone-200 shadow-none">
                  <Card.Header>
                    <Card.Title className="text-sm font-medium text-stone-600">Item</Card.Title>
                  </Card.Header>
                  <Card.Content>
                    <p className="text-xl font-semibold text-stone-950">{cart.length}</p>
                  </Card.Content>
                </Card>
                <Card className="border border-stone-200 shadow-none">
                  <Card.Header>
                    <Card.Title className="text-sm font-medium text-stone-600">Qty total</Card.Title>
                  </Card.Header>
                  <Card.Content>
                    <p className="text-xl font-semibold text-stone-950">
                      {cart.reduce((total, item) => total + item.quantity, 0)}
                    </p>
                  </Card.Content>
                </Card>
              </div>

              <Button fullWidth isPending={isSubmitting} onPress={() => void submitSale()}>
                <ShoppingCartIcon aria-hidden size={16} />
                Simpan transaksi
              </Button>
            </Card.Content>
          </Card>
        </div>
      </div>
    </div>
  );
}
