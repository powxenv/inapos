import { useMemo, useState } from "react";
import {
  Alert,
  AlertDialog,
  Button,
  Input,
  InputGroup,
  Modal,
  Table,
  useOverlayState,
} from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/csr/MagnifyingGlass";
import { PencilSimpleIcon } from "@phosphor-icons/react/dist/csr/PencilSimple";
import { PlusIcon } from "@phosphor-icons/react/dist/csr/Plus";
import { TrashIcon } from "@phosphor-icons/react/dist/csr/Trash";
import { UserIcon } from "@phosphor-icons/react/dist/csr/User";
import { Controller, useForm } from "react-hook-form";
import { useQueries } from "@powersync/tanstack-react-query";
import { z } from "zod";
import { powerSync } from "../../lib/powersync";

type CustomersModuleProps = {
  storeId: string;
};

type CustomerRow = {
  address: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  total_spent: number | null;
};

type EditingCustomer = {
  id: string;
  name: string;
};

const customerSchema = z.object({
  address: z.string().trim().max(200, "Use 200 characters or fewer."),
  name: z
    .string()
    .trim()
    .min(1, "Enter the customer name.")
    .max(120, "Use 120 characters or fewer."),
  phone: z.string().trim().max(30, "Use 30 characters or fewer."),
});

type CustomerFormValues = z.infer<typeof customerSchema>;

const defaultValues: CustomerFormValues = {
  address: "",
  name: "",
  phone: "",
};

function normalizeText(value: string) {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function formatRupiah(value: number | null | undefined) {
  return new Intl.NumberFormat("id-ID", {
    currency: "IDR",
    maximumFractionDigits: 0,
    style: "currency",
  }).format(value ?? 0);
}

export function CustomersModule({ storeId }: CustomersModuleProps) {
  const modalState = useOverlayState();
  const [search, setSearch] = useState("");
  const [editingCustomer, setEditingCustomer] = useState<EditingCustomer | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  const { control, formState, handleSubmit, reset } = useForm<CustomerFormValues>({
    defaultValues,
    resolver: zodResolver(customerSchema),
  });
  const [customersQuery] = useQueries<[CustomerRow]>({
    queries: [
      {
        parameters: [storeId],
        query: `
          SELECT id, name, phone, address, total_spent
          FROM customers
          WHERE store_id = ?
          ORDER BY LOWER(COALESCE(name, ''))
        `,
        queryKey: ["customers", storeId],
      },
    ],
  });

  const customers = customersQuery.data ?? [];
  const searchValue = search.trim().toLowerCase();
  const filteredCustomers = useMemo(() => {
    if (!searchValue) {
      return customers;
    }

    return customers.filter((customer) =>
      [customer.name, customer.phone, customer.address]
        .filter((value): value is string => Boolean(value))
        .some((value) => value.toLowerCase().includes(searchValue)),
    );
  }, [customers, searchValue]);

  function resetForm() {
    setEditingCustomer(null);
    setFormError(null);
    reset(defaultValues);
  }

  function openCreateModal() {
    resetForm();
    modalState.open();
  }

  function startEdit(customer: CustomerRow) {
    setEditingCustomer({
      id: customer.id,
      name: customer.name ?? "Customer",
    });
    setFormError(null);
    reset({
      address: customer.address ?? "",
      name: customer.name ?? "",
      phone: customer.phone ?? "",
    });
    modalState.open();
  }

  async function saveCustomer(values: CustomerFormValues, close: () => void) {
    setFormError(null);
    setIsSaving(true);

    const now = new Date().toISOString();
    const payload = {
      address: normalizeText(values.address),
      name: values.name.trim(),
      phone: normalizeText(values.phone),
      store_id: storeId,
      updated_at: now,
    };

    try {
      if (editingCustomer) {
        await powerSync.execute(
          `
            UPDATE customers
            SET name = ?, phone = ?, address = ?, updated_at = ?
            WHERE id = ?
          `,
          [payload.name, payload.phone, payload.address, payload.updated_at, editingCustomer.id],
        );
      } else {
        await powerSync.execute(
          `
            INSERT INTO customers (
              id,
              store_id,
              name,
              phone,
              address,
              updated_at
            )
            VALUES (?, ?, ?, ?, ?, ?)
          `,
          [
            crypto.randomUUID(),
            payload.store_id,
            payload.name,
            payload.phone,
            payload.address,
            payload.updated_at,
          ],
        );
      }

      setIsSaving(false);
      close();
      resetForm();
    } catch (error) {
      setIsSaving(false);
      setFormError(error instanceof Error ? error.message : "We couldn't save this customer.");
    }
  }

  async function deleteCustomer(customerId: string) {
    setFormError(null);
    setPendingDeleteId(customerId);

    try {
      await powerSync.execute("DELETE FROM customers WHERE id = ?", [customerId]);

      if (editingCustomer?.id === customerId) {
        resetForm();
      }

      setPendingDeleteId(null);
    } catch (error) {
      setPendingDeleteId(null);
      setFormError(error instanceof Error ? error.message : "We couldn't delete this customer.");
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">Customers</h3>
        <p className="text-sm text-stone-500">
          Keep your regular customers here so future sales are faster.
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

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-1 flex-wrap items-center gap-3">
          <InputGroup className="max-w-md">
            <InputGroup.Prefix className="text-stone-400">
              <MagnifyingGlassIcon aria-hidden size={18} />
            </InputGroup.Prefix>
            <InputGroup.Input
              aria-label="Search customers"
              className="w-full"
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by name, phone number, or address"
              value={search}
            />
          </InputGroup>
          <Modal state={modalState}>
            <Button onPress={openCreateModal}>
              <PlusIcon aria-hidden size={16} />
              Add customer
            </Button>
            <Modal.Backdrop>
              <Modal.Container placement="center" size="lg">
                <Modal.Dialog aria-label={editingCustomer ? "Edit customer" : "Add customer"}>
                  {({ close }) => (
                    <>
                      <Modal.Header>
                        <Modal.Heading>
                          {editingCustomer
                            ? `Edit customer: ${editingCustomer.name}`
                            : "Add customer"}
                        </Modal.Heading>
                      </Modal.Header>
                      <Modal.Body>
                        <form
                          className="space-y-4"
                          onSubmit={handleSubmit(async (values) => {
                            await saveCustomer(values, close);
                          })}
                        >
                          <div className="space-y-2">
                            <label
                              className="block text-sm font-medium text-stone-700"
                              htmlFor="customer-name"
                            >
                              Customer name
                            </label>
                            <Controller
                              control={control}
                              name="name"
                              render={({ field, fieldState }) => (
                                <InputGroup className="w-full" isInvalid={fieldState.invalid}>
                                  <InputGroup.Prefix className="text-stone-400">
                                    <UserIcon aria-hidden size={18} />
                                  </InputGroup.Prefix>
                                  <InputGroup.Input
                                    aria-invalid={fieldState.invalid}
                                    className="w-full"
                                    id="customer-name"
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    placeholder="For example: Rina"
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
                                htmlFor="customer-phone"
                              >
                                Phone number (optional)
                              </label>
                              <Controller
                                control={control}
                                name="phone"
                                render={({ field }) => (
                                  <Input
                                    className="w-full"
                                    id="customer-phone"
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    placeholder="+62..."
                                    value={field.value}
                                  />
                                )}
                              />
                              {formState.errors.phone?.message ? (
                                <p className="text-sm text-red-600">
                                  {formState.errors.phone.message}
                                </p>
                              ) : null}
                            </div>

                            <div className="space-y-2">
                              <label
                                className="block text-sm font-medium text-stone-700"
                                htmlFor="customer-address"
                              >
                                Address (optional)
                              </label>
                              <Controller
                                control={control}
                                name="address"
                                render={({ field }) => (
                                  <Input
                                    className="w-full"
                                    id="customer-address"
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    placeholder="For example: 8 Melati Street"
                                    value={field.value}
                                  />
                                )}
                              />
                              {formState.errors.address?.message ? (
                                <p className="text-sm text-red-600">
                                  {formState.errors.address.message}
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
                              {editingCustomer ? "Save changes" : "Save customer"}
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
          {filteredCustomers.length} of {customers.length} customers
        </p>
      </div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Customer list">
            <Table.Header>
              <Table.Column isRowHeader>Name</Table.Column>
              <Table.Column>Phone</Table.Column>
              <Table.Column>Address</Table.Column>
              <Table.Column>Total spent</Table.Column>
              <Table.Column className="w-[160px]">Actions</Table.Column>
            </Table.Header>
            <Table.Body>
              {filteredCustomers.length > 0 ? (
                filteredCustomers.map((customer) => (
                  <Table.Row key={customer.id}>
                    <Table.Cell>{customer.name ?? "-"}</Table.Cell>
                    <Table.Cell>{customer.phone ?? "-"}</Table.Cell>
                    <Table.Cell>{customer.address ?? "-"}</Table.Cell>
                    <Table.Cell>{formatRupiah(customer.total_spent)}</Table.Cell>
                    <Table.Cell>
                      <div className="flex items-center gap-2">
                        <Button onPress={() => startEdit(customer)} size="sm" variant="outline">
                          <PencilSimpleIcon aria-hidden size={16} />
                          Edit
                        </Button>
                        <AlertDialog>
                          <Button size="sm" variant="tertiary">
                            <TrashIcon aria-hidden size={16} />
                            Delete
                          </Button>
                          <AlertDialog.Backdrop>
                            <AlertDialog.Container placement="center" size="sm">
                              <AlertDialog.Dialog>
                                <AlertDialog.Header>
                                  <AlertDialog.Heading>Delete this customer?</AlertDialog.Heading>
                                </AlertDialog.Header>
                                <AlertDialog.Body>
                                  {customer.name ?? "This customer"} will be removed from your
                                  customer list.
                                </AlertDialog.Body>
                                <AlertDialog.Footer>
                                  <Button slot="close" variant="tertiary">
                                    Cancel
                                  </Button>
                                  <Button
                                    isPending={pendingDeleteId === customer.id}
                                    onPress={() => void deleteCustomer(customer.id)}
                                    variant="danger"
                                  >
                                    Delete
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
                    {customersQuery.isPending ? "Loading customers..." : "No customers yet."}
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
