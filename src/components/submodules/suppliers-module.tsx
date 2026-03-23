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
import { StorefrontIcon } from "@phosphor-icons/react/dist/csr/Storefront";
import { TrashIcon } from "@phosphor-icons/react/dist/csr/Trash";
import { Controller, useForm } from "react-hook-form";
import { useQueries } from "@powersync/tanstack-react-query";
import { z } from "zod";
import { powerSync } from "../../lib/powersync";

type SuppliersModuleProps = {
  storeId: string;
};

type SupplierRow = {
  city: string | null;
  id: string;
  name: string | null;
  payment_term: string | null;
  phone: string | null;
};

type EditingSupplier = {
  id: string;
  name: string;
};

const supplierSchema = z.object({
  city: z.string().trim().max(60, "Use 60 characters or fewer."),
  name: z
    .string()
    .trim()
    .min(1, "Enter the supplier name.")
    .max(120, "Use 120 characters or fewer."),
  paymentTerm: z.string().trim().max(30, "Use 30 characters or fewer."),
  phone: z.string().trim().max(30, "Use 30 characters or fewer."),
});

type SupplierFormValues = z.infer<typeof supplierSchema>;

const defaultValues: SupplierFormValues = {
  city: "",
  name: "",
  paymentTerm: "",
  phone: "",
};

const paymentTermOptions = [
  { id: "cash", label: "Cash" },
  { id: "7-hari", label: "7 days" },
  { id: "14-hari", label: "14 days" },
  { id: "30-hari", label: "30 days" },
] as const;

function normalizeText(value: string) {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function paymentTermLabel(value: string | null | undefined) {
  if (!value) {
    return "-";
  }

  return paymentTermOptions.find((option) => option.id === value)?.label ?? value;
}

export function SuppliersModule({ storeId }: SuppliersModuleProps) {
  const modalState = useOverlayState();
  const [search, setSearch] = useState("");
  const [editingSupplier, setEditingSupplier] = useState<EditingSupplier | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  const { control, formState, handleSubmit, reset } = useForm<SupplierFormValues>({
    defaultValues,
    resolver: zodResolver(supplierSchema),
  });
  const [suppliersQuery] = useQueries<[SupplierRow]>({
    queries: [
      {
        parameters: [storeId],
        query: `
          SELECT id, name, phone, city, payment_term
          FROM suppliers
          WHERE store_id = ?
          ORDER BY LOWER(COALESCE(name, ''))
        `,
        queryKey: ["suppliers", storeId],
      },
    ],
  });

  const suppliers = suppliersQuery.data ?? [];
  const searchValue = search.trim().toLowerCase();
  const filteredSuppliers = useMemo(() => {
    if (!searchValue) {
      return suppliers;
    }

    return suppliers.filter((supplier) =>
      [supplier.name, supplier.phone, supplier.city, supplier.payment_term]
        .filter((value): value is string => Boolean(value))
        .some((value) => value.toLowerCase().includes(searchValue)),
    );
  }, [searchValue, suppliers]);

  function resetForm() {
    setEditingSupplier(null);
    setFormError(null);
    reset(defaultValues);
  }

  function openCreateModal() {
    resetForm();
    modalState.open();
  }

  function startEdit(supplier: SupplierRow) {
    setEditingSupplier({
      id: supplier.id,
      name: supplier.name ?? "Supplier",
    });
    setFormError(null);
    reset({
      city: supplier.city ?? "",
      name: supplier.name ?? "",
      paymentTerm: supplier.payment_term ?? "",
      phone: supplier.phone ?? "",
    });
    modalState.open();
  }

  async function saveSupplier(values: SupplierFormValues, close: () => void) {
    setFormError(null);
    setIsSaving(true);

    const now = new Date().toISOString();
    const payload = {
      city: normalizeText(values.city),
      name: values.name.trim(),
      payment_term: normalizeText(values.paymentTerm),
      phone: normalizeText(values.phone),
      store_id: storeId,
      updated_at: now,
    };

    try {
      if (editingSupplier) {
        await powerSync.execute(
          `
            UPDATE suppliers
            SET name = ?, phone = ?, city = ?, payment_term = ?, updated_at = ?
            WHERE id = ?
          `,
          [
            payload.name,
            payload.phone,
            payload.city,
            payload.payment_term,
            payload.updated_at,
            editingSupplier.id,
          ],
        );
      } else {
        await powerSync.execute(
          `
            INSERT INTO suppliers (
              id,
              store_id,
              name,
              phone,
              city,
              payment_term,
              updated_at
            )
            VALUES (?, ?, ?, ?, ?, ?, ?)
          `,
          [
            crypto.randomUUID(),
            payload.store_id,
            payload.name,
            payload.phone,
            payload.city,
            payload.payment_term,
            payload.updated_at,
          ],
        );
      }

      setIsSaving(false);
      close();
      resetForm();
    } catch (error) {
      setIsSaving(false);
      setFormError(error instanceof Error ? error.message : "We couldn't save this supplier.");
    }
  }

  async function deleteSupplier(supplierId: string) {
    setFormError(null);
    setPendingDeleteId(supplierId);

    try {
      await powerSync.execute("DELETE FROM suppliers WHERE id = ?", [supplierId]);

      if (editingSupplier?.id === supplierId) {
        resetForm();
      }

      setPendingDeleteId(null);
    } catch (error) {
      setPendingDeleteId(null);
      setFormError(error instanceof Error ? error.message : "We couldn't delete this supplier.");
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">Suppliers</h3>
        <p className="text-sm text-stone-500">
          Keep your main suppliers here so reordering stays simple.
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
              aria-label="Search suppliers"
              className="w-full"
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by name, phone number, city, or payment terms"
              value={search}
            />
          </InputGroup>
          <Modal state={modalState}>
            <Button onPress={openCreateModal}>
              <PlusIcon aria-hidden size={16} />
              Add supplier
            </Button>
            <Modal.Backdrop>
              <Modal.Container placement="center" size="lg">
                <Modal.Dialog aria-label={editingSupplier ? "Edit supplier" : "Add supplier"}>
                  {({ close }) => (
                    <>
                      <Modal.Header>
                        <Modal.Heading>
                          {editingSupplier
                            ? `Edit supplier: ${editingSupplier.name}`
                            : "Add supplier"}
                        </Modal.Heading>
                      </Modal.Header>
                      <Modal.Body>
                        <form
                          className="space-y-4"
                          onSubmit={handleSubmit(async (values) => {
                            await saveSupplier(values, close);
                          })}
                        >
                          <div className="space-y-2">
                            <label
                              className="block text-sm font-medium text-stone-700"
                              htmlFor="supplier-name"
                            >
                              Supplier name
                            </label>
                            <Controller
                              control={control}
                              name="name"
                              render={({ field, fieldState }) => (
                                <InputGroup className="w-full" isInvalid={fieldState.invalid}>
                                  <InputGroup.Prefix className="text-stone-400">
                                    <StorefrontIcon aria-hidden size={18} />
                                  </InputGroup.Prefix>
                                  <InputGroup.Input
                                    aria-invalid={fieldState.invalid}
                                    className="w-full"
                                    id="supplier-name"
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    placeholder="For example: Sumber Jaya"
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
                                htmlFor="supplier-phone"
                              >
                                Phone number (optional)
                              </label>
                              <Controller
                                control={control}
                                name="phone"
                                render={({ field }) => (
                                  <Input
                                    className="w-full"
                                    id="supplier-phone"
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
                                htmlFor="supplier-city"
                              >
                                City (optional)
                              </label>
                              <Controller
                                control={control}
                                name="city"
                                render={({ field }) => (
                                  <Input
                                    className="w-full"
                                    id="supplier-city"
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    placeholder="Bandung"
                                    value={field.value}
                                  />
                                )}
                              />
                              {formState.errors.city?.message ? (
                                <p className="text-sm text-red-600">
                                  {formState.errors.city.message}
                                </p>
                              ) : null}
                            </div>

                            <div className="space-y-2">
                              <label
                                className="block text-sm font-medium text-stone-700"
                                htmlFor="supplier-payment-term"
                              >
                                Payment terms (optional)
                              </label>
                              <Controller
                                control={control}
                                name="paymentTerm"
                                render={({ field }) => (
                                  <Select
                                    aria-label="Choose payment terms"
                                    className="w-full"
                                    id="supplier-payment-term"
                                    onBlur={field.onBlur}
                                    onSelectionChange={(key) =>
                                      field.onChange(typeof key === "string" ? key : "")
                                    }
                                    placeholder="Choose payment terms"
                                    selectedKey={field.value || null}
                                  >
                                    <Select.Trigger className="w-full">
                                      <Select.Value />
                                      <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                      <ListBox>
                                        <ListBox.Item id="">No payment terms</ListBox.Item>
                                        {paymentTermOptions.map((option) => (
                                          <ListBox.Item id={option.id} key={option.id}>
                                            {option.label}
                                          </ListBox.Item>
                                        ))}
                                      </ListBox>
                                    </Select.Popover>
                                  </Select>
                                )}
                              />
                              {formState.errors.paymentTerm?.message ? (
                                <p className="text-sm text-red-600">
                                  {formState.errors.paymentTerm.message}
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
                              {editingSupplier ? "Save changes" : "Save supplier"}
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
          {filteredSuppliers.length} of {suppliers.length} suppliers
        </p>
      </div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Supplier list">
            <Table.Header>
              <Table.Column isRowHeader>Name</Table.Column>
              <Table.Column>Phone</Table.Column>
              <Table.Column>City</Table.Column>
              <Table.Column>Terms</Table.Column>
              <Table.Column className="w-[160px]">Actions</Table.Column>
            </Table.Header>
            <Table.Body>
              {filteredSuppliers.length > 0 ? (
                filteredSuppliers.map((supplier) => (
                  <Table.Row key={supplier.id}>
                    <Table.Cell>{supplier.name ?? "-"}</Table.Cell>
                    <Table.Cell>{supplier.phone ?? "-"}</Table.Cell>
                    <Table.Cell>{supplier.city ?? "-"}</Table.Cell>
                    <Table.Cell>{paymentTermLabel(supplier.payment_term)}</Table.Cell>
                    <Table.Cell>
                      <div className="flex items-center gap-2">
                        <Button onPress={() => startEdit(supplier)} size="sm" variant="outline">
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
                                  <AlertDialog.Heading>Delete this supplier?</AlertDialog.Heading>
                                </AlertDialog.Header>
                                <AlertDialog.Body>
                                  {supplier.name ?? "This supplier"} will be removed from your
                                  supplier list.
                                </AlertDialog.Body>
                                <AlertDialog.Footer>
                                  <Button slot="close" variant="tertiary">
                                    Cancel
                                  </Button>
                                  <Button
                                    isPending={pendingDeleteId === supplier.id}
                                    onPress={() => void deleteSupplier(supplier.id)}
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
                    {suppliersQuery.isPending ? "Loading suppliers..." : "No suppliers yet."}
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
