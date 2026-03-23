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
import { useI18n } from "../../lib/i18n";
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

type SupplierFormValues = {
  city: string;
  name: string;
  paymentTerm: string;
  phone: string;
};

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

function paymentTermLabel(
  value: string | null | undefined,
  text: ReturnType<typeof useI18n>["text"],
) {
  if (!value) {
    return text.common.states.notAdded;
  }

  return (
    {
      cash: text.modules.suppliers.termsOptions.cash,
      "14-hari": text.modules.suppliers.termsOptions.day14,
      "30-hari": text.modules.suppliers.termsOptions.day30,
      "7-hari": text.modules.suppliers.termsOptions.day7,
    }[value] ?? value
  );
}

export function SuppliersModule({ storeId }: SuppliersModuleProps) {
  const { text } = useI18n();
  const supplierSchema = z.object({
    city: z.string().trim().max(60, text.modules.suppliers.validation.cityMax),
    name: z
      .string()
      .trim()
      .min(1, text.modules.suppliers.validation.nameMin)
      .max(120, text.modules.suppliers.validation.nameMax),
    paymentTerm: z.string().trim().max(30, text.modules.suppliers.validation.paymentTermMax),
    phone: z.string().trim().max(30, text.modules.suppliers.validation.phoneMax),
  });
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
      name: supplier.name ?? text.modules.suppliers.title,
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
      setFormError(error instanceof Error ? error.message : text.modules.suppliers.saveError);
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
      setFormError(error instanceof Error ? error.message : text.modules.suppliers.deleteError);
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">{text.modules.suppliers.title}</h3>
        <p className="text-sm text-stone-500">{text.modules.suppliers.description}</p>
      </div>

      {formError ? (
        <Alert status="danger">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>{text.modules.suppliers.thatDidNotWork}</Alert.Title>
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
              aria-label={text.modules.suppliers.searchLabel}
              className="w-full"
              onChange={(event) => setSearch(event.target.value)}
              placeholder={text.modules.suppliers.placeholderSearch}
              value={search}
            />
          </InputGroup>
          <Modal state={modalState}>
            <Button onPress={openCreateModal}>
              <PlusIcon aria-hidden size={16} />
              {text.modules.suppliers.addSupplier}
            </Button>
            <Modal.Backdrop>
              <Modal.Container placement="center" size="lg">
                <Modal.Dialog
                  aria-label={
                    editingSupplier
                      ? text.modules.suppliers.headingEdit(editingSupplier.name)
                      : text.modules.suppliers.headingNew
                  }
                >
                  {({ close }) => (
                    <>
                      <Modal.Header>
                        <Modal.Heading>
                          {editingSupplier
                            ? text.modules.suppliers.headingEdit(editingSupplier.name)
                            : text.modules.suppliers.headingNew}
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
                              {text.modules.suppliers.supplierName}
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
                                    placeholder={text.modules.suppliers.placeholderName}
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
                                {text.modules.suppliers.phoneOptional}
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
                                    placeholder={text.modules.suppliers.placeholderPhone}
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
                                {text.modules.suppliers.cityOptional}
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
                                    placeholder={text.modules.suppliers.placeholderCity}
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
                                {text.modules.suppliers.paymentTermsOptional}
                              </label>
                              <Controller
                                control={control}
                                name="paymentTerm"
                                render={({ field }) => (
                                  <Select
                                    aria-label={text.modules.suppliers.placeholderPaymentTerms}
                                    className="w-full"
                                    id="supplier-payment-term"
                                    onBlur={field.onBlur}
                                    onSelectionChange={(key) =>
                                      field.onChange(typeof key === "string" ? key : "")
                                    }
                                    placeholder={text.modules.suppliers.placeholderPaymentTerms}
                                    selectedKey={field.value || null}
                                  >
                                    <Select.Trigger className="w-full">
                                      <Select.Value />
                                      <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                      <ListBox>
                                        <ListBox.Item id="">
                                          {text.common.states.notAdded}
                                        </ListBox.Item>
                                        {paymentTermOptions.map((option) => (
                                          <ListBox.Item id={option.id} key={option.id}>
                                            {paymentTermLabel(option.id, text)}
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
                              {text.common.actions.cancel}
                            </Button>
                            <Button isPending={isSaving} type="submit">
                              {editingSupplier
                                ? text.common.actions.saveChanges
                                : text.common.actions.saveSupplier}
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
            filteredSuppliers.length,
            suppliers.length,
            text.modules.suppliers.tableCountLabel,
          )}
        </p>
      </div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label={text.modules.suppliers.supplierList}>
            <Table.Header>
              <Table.Column isRowHeader>{text.common.labels.name}</Table.Column>
              <Table.Column>{text.common.labels.phone}</Table.Column>
              <Table.Column>{text.common.labels.city}</Table.Column>
              <Table.Column>{text.common.labels.terms}</Table.Column>
              <Table.Column className="w-[160px]">{text.common.labels.actions}</Table.Column>
            </Table.Header>
            <Table.Body>
              {filteredSuppliers.length > 0 ? (
                filteredSuppliers.map((supplier) => (
                  <Table.Row key={supplier.id}>
                    <Table.Cell>{supplier.name ?? text.common.states.unnamedSupplier}</Table.Cell>
                    <Table.Cell>{supplier.phone ?? text.common.states.notAdded}</Table.Cell>
                    <Table.Cell>{supplier.city ?? text.common.states.notAdded}</Table.Cell>
                    <Table.Cell>{paymentTermLabel(supplier.payment_term, text)}</Table.Cell>
                    <Table.Cell>
                      <div className="flex items-center gap-2">
                        <Button onPress={() => startEdit(supplier)} size="sm" variant="outline">
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
                                    {text.modules.suppliers.deleteTitle}
                                  </AlertDialog.Heading>
                                </AlertDialog.Header>
                                <AlertDialog.Body>
                                  {text.modules.suppliers.deleteBody(
                                    supplier.name ?? text.common.states.unnamedSupplier,
                                  )}
                                </AlertDialog.Body>
                                <AlertDialog.Footer>
                                  <Button slot="close" variant="tertiary">
                                    {text.common.actions.cancel}
                                  </Button>
                                  <Button
                                    isPending={pendingDeleteId === supplier.id}
                                    onPress={() => void deleteSupplier(supplier.id)}
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
                  <Table.Cell colSpan={5}>
                    {suppliersQuery.isPending
                      ? text.modules.suppliers.loading
                      : text.modules.suppliers.empty}
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
