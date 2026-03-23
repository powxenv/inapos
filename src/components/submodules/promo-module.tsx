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
import { TagIcon } from "@phosphor-icons/react/dist/csr/Tag";
import { TrashIcon } from "@phosphor-icons/react/dist/csr/Trash";
import { Controller, useForm } from "react-hook-form";
import { useQueries } from "@powersync/tanstack-react-query";
import { z } from "zod";
import { useI18n } from "../../lib/i18n";
import { powerSync } from "../../lib/powersync";

type PromoModuleProps = {
  storeId: string;
};

type PromoRow = {
  description: string | null;
  discount_type: string | null;
  discount_value: number | null;
  end_at: string | null;
  id: string;
  start_at: string | null;
  status: string | null;
  title: string | null;
};

type EditingPromo = {
  id: string;
  title: string;
};

type PromoFormValues = {
  description: string;
  discountType: "nominal" | "percent";
  discountValue: string;
  endAt: string;
  startAt: string;
  status: "draft" | "active" | "scheduled" | "expired";
  title: string;
};

const defaultValues: PromoFormValues = {
  description: "",
  discountType: "nominal",
  discountValue: "0",
  endAt: "",
  startAt: "",
  status: "draft",
  title: "",
};

const promoStatusOptions = [
  { id: "draft", label: "Draft" },
  { id: "active", label: "Live" },
  { id: "scheduled", label: "Scheduled" },
  { id: "expired", label: "Ended" },
] as const;

const promoDiscountOptions = [
  { id: "nominal", label: "Amount off" },
  { id: "percent", label: "Percent off" },
] as const;

function normalizeText(value: string) {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function formatDateRange(
  startAt: string | null | undefined,
  endAt: string | null | undefined,
  locale: string,
) {
  const formatter = new Intl.DateTimeFormat(locale, { dateStyle: "medium" });
  const start = startAt ? formatter.format(new Date(startAt)) : "-";
  const end = endAt ? formatter.format(new Date(endAt)) : "-";
  return `${start} - ${end}`;
}

function formatDiscount(
  type: string | null,
  value: number | null | undefined,
  formatCurrency: ReturnType<typeof useI18n>["formatCurrency"],
) {
  if (type === "percent") {
    return `${value ?? 0}%`;
  }

  return formatCurrency(value);
}

function promoStatusLabel(
  value: string | null | undefined,
  text: ReturnType<typeof useI18n>["text"],
) {
  if (!value) {
    return text.common.states.notAdded;
  }

  return (
    {
      active: text.modules.promo.statusOptions.active,
      draft: text.modules.promo.statusOptions.draft,
      expired: text.modules.promo.statusOptions.expired,
      scheduled: text.modules.promo.statusOptions.scheduled,
    }[value] ?? value
  );
}

export function PromoModule({ storeId }: PromoModuleProps) {
  const { formatCurrency, locale, text } = useI18n();
  const promoSchema = z.object({
    description: z.string().trim().max(200, text.modules.promo.validation.descriptionMax),
    discountType: z.enum(["nominal", "percent"]),
    discountValue: z
      .string()
      .trim()
      .min(1, text.modules.promo.validation.discountValue)
      .refine((value) => !Number.isNaN(Number(value)) && Number(value) >= 0, {
        message: text.modules.promo.validation.discountValueMin,
      }),
    endAt: z.string().trim(),
    startAt: z.string().trim(),
    status: z.enum(["draft", "active", "scheduled", "expired"]),
    title: z
      .string()
      .trim()
      .min(1, text.modules.promo.validation.titleMin)
      .max(120, text.modules.promo.validation.titleMax),
  });
  const modalState = useOverlayState();
  const [search, setSearch] = useState("");
  const [editingPromo, setEditingPromo] = useState<EditingPromo | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  const { control, formState, handleSubmit, reset } = useForm<PromoFormValues>({
    defaultValues,
    resolver: zodResolver(promoSchema),
  });
  const [promosQuery] = useQueries<[PromoRow]>({
    queries: [
      {
        parameters: [storeId],
        query: `
          SELECT id, title, status, discount_type, discount_value, start_at, end_at, description
          FROM promotions
          WHERE store_id = ?
          ORDER BY LOWER(COALESCE(title, ''))
        `,
        queryKey: ["promotions", storeId],
      },
    ],
  });

  const promos = promosQuery.data ?? [];
  const searchValue = search.trim().toLowerCase();
  const filteredPromos = useMemo(() => {
    if (!searchValue) {
      return promos;
    }

    return promos.filter((promo) =>
      [promo.title, promo.status, promo.description]
        .filter((value): value is string => Boolean(value))
        .some((value) => value.toLowerCase().includes(searchValue)),
    );
  }, [promos, searchValue]);

  function resetForm() {
    setEditingPromo(null);
    setFormError(null);
    reset(defaultValues);
  }

  function openCreateModal() {
    resetForm();
    modalState.open();
  }

  function startEdit(promo: PromoRow) {
    setEditingPromo({
      id: promo.id,
      title: promo.title ?? text.modules.promo.title,
    });
    setFormError(null);
    reset({
      description: promo.description ?? "",
      discountType: promo.discount_type === "percent" ? "percent" : "nominal",
      discountValue: String(promo.discount_value ?? 0),
      endAt: promo.end_at ? promo.end_at.slice(0, 10) : "",
      startAt: promo.start_at ? promo.start_at.slice(0, 10) : "",
      status:
        promo.status === "active" || promo.status === "scheduled" || promo.status === "expired"
          ? promo.status
          : "draft",
      title: promo.title ?? "",
    });
    modalState.open();
  }

  async function savePromo(values: PromoFormValues, close: () => void) {
    setFormError(null);
    setIsSaving(true);

    const now = new Date().toISOString();
    const payload = {
      description: normalizeText(values.description),
      discount_type: values.discountType,
      discount_value: Number(values.discountValue),
      end_at: values.endAt ? new Date(`${values.endAt}T00:00:00`).toISOString() : null,
      start_at: values.startAt ? new Date(`${values.startAt}T00:00:00`).toISOString() : null,
      status: values.status,
      store_id: storeId,
      title: values.title.trim(),
      updated_at: now,
    };

    try {
      if (editingPromo) {
        await powerSync.execute(
          `
            UPDATE promotions
            SET
              title = ?,
              status = ?,
              discount_type = ?,
              discount_value = ?,
              start_at = ?,
              end_at = ?,
              description = ?,
              updated_at = ?
            WHERE id = ?
          `,
          [
            payload.title,
            payload.status,
            payload.discount_type,
            payload.discount_value,
            payload.start_at,
            payload.end_at,
            payload.description,
            payload.updated_at,
            editingPromo.id,
          ],
        );
      } else {
        await powerSync.execute(
          `
            INSERT INTO promotions (
              id,
              store_id,
              title,
              status,
              discount_type,
              discount_value,
              start_at,
              end_at,
              description,
              updated_at
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `,
          [
            crypto.randomUUID(),
            payload.store_id,
            payload.title,
            payload.status,
            payload.discount_type,
            payload.discount_value,
            payload.start_at,
            payload.end_at,
            payload.description,
            payload.updated_at,
          ],
        );
      }

      setIsSaving(false);
      close();
      resetForm();
    } catch (error) {
      setIsSaving(false);
      setFormError(error instanceof Error ? error.message : text.modules.promo.saveError);
    }
  }

  async function deletePromo(promoId: string) {
    setFormError(null);
    setPendingDeleteId(promoId);

    try {
      await powerSync.execute("DELETE FROM promotions WHERE id = ?", [promoId]);

      if (editingPromo?.id === promoId) {
        resetForm();
      }

      setPendingDeleteId(null);
    } catch (error) {
      setPendingDeleteId(null);
      setFormError(error instanceof Error ? error.message : text.modules.promo.deleteError);
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">{text.modules.promo.title}</h3>
        <p className="text-sm text-stone-500">{text.modules.promo.description}</p>
      </div>

      {formError ? (
        <Alert status="danger">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>{text.modules.promo.thatDidNotWork}</Alert.Title>
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
              aria-label={text.modules.promo.searchLabel}
              className="w-full"
              onChange={(event) => setSearch(event.target.value)}
              placeholder={text.modules.promo.placeholderSearch}
              value={search}
            />
          </InputGroup>
          <Modal state={modalState}>
            <Button onPress={openCreateModal}>
              <PlusIcon aria-hidden size={16} />
              {text.common.actions.newOffer}
            </Button>
            <Modal.Backdrop>
              <Modal.Container placement="center" size="lg">
                <Modal.Dialog
                  aria-label={
                    editingPromo
                      ? text.modules.promo.headingEdit(editingPromo.title)
                      : text.modules.promo.headingNew
                  }
                >
                  {({ close }) => (
                    <>
                      <Modal.Header>
                        <Modal.Heading>
                          {editingPromo
                            ? text.modules.promo.headingEdit(editingPromo.title)
                            : text.modules.promo.headingNew}
                        </Modal.Heading>
                      </Modal.Header>
                      <Modal.Body>
                        <form
                          className="space-y-4"
                          onSubmit={handleSubmit(async (values) => {
                            await savePromo(values, close);
                          })}
                        >
                          <div className="space-y-2">
                            <label
                              className="block text-sm font-medium text-stone-700"
                              htmlFor="promo-title"
                            >
                              {text.modules.promo.offerName}
                            </label>
                            <Controller
                              control={control}
                              name="title"
                              render={({ field, fieldState }) => (
                                <InputGroup className="w-full" isInvalid={fieldState.invalid}>
                                  <InputGroup.Prefix className="text-stone-400">
                                    <TagIcon aria-hidden size={18} />
                                  </InputGroup.Prefix>
                                  <InputGroup.Input
                                    aria-invalid={fieldState.invalid}
                                    className="w-full"
                                    id="promo-title"
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    placeholder={text.modules.promo.placeholderTitle}
                                    value={field.value}
                                  />
                                </InputGroup>
                              )}
                            />
                            {formState.errors.title?.message ? (
                              <p className="text-sm text-red-600">
                                {formState.errors.title.message}
                              </p>
                            ) : null}
                          </div>

                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                              <label
                                className="block text-sm font-medium text-stone-700"
                                htmlFor="promo-status"
                              >
                                {text.common.labels.status}
                              </label>
                              <Controller
                                control={control}
                                name="status"
                                render={({ field }) => (
                                  <Select
                                    aria-label={text.common.labels.status}
                                    className="w-full"
                                    id="promo-status"
                                    onBlur={field.onBlur}
                                    onSelectionChange={(key) =>
                                      field.onChange(typeof key === "string" ? key : "draft")
                                    }
                                    selectedKey={field.value}
                                  >
                                    <Select.Trigger className="w-full">
                                      <Select.Value />
                                      <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                      <ListBox>
                                        {promoStatusOptions.map((option) => (
                                          <ListBox.Item id={option.id} key={option.id}>
                                            {promoStatusLabel(option.id, text)}
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
                                htmlFor="promo-type"
                              >
                                {text.modules.promo.discountType}
                              </label>
                              <Controller
                                control={control}
                                name="discountType"
                                render={({ field }) => (
                                  <Select
                                    aria-label={text.modules.promo.discountType}
                                    className="w-full"
                                    id="promo-type"
                                    onBlur={field.onBlur}
                                    onSelectionChange={(key) =>
                                      field.onChange(typeof key === "string" ? key : "nominal")
                                    }
                                    selectedKey={field.value}
                                  >
                                    <Select.Trigger className="w-full">
                                      <Select.Value />
                                      <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                      <ListBox>
                                        {promoDiscountOptions.map((option) => (
                                          <ListBox.Item id={option.id} key={option.id}>
                                            {option.id === "percent"
                                              ? text.modules.promo.discountTypes.percent
                                              : text.modules.promo.discountTypes.nominal}
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
                                htmlFor="promo-value"
                              >
                                {text.modules.promo.discountValue}
                              </label>
                              <Controller
                                control={control}
                                name="discountValue"
                                render={({ field, fieldState }) => (
                                  <Input
                                    aria-invalid={fieldState.invalid}
                                    className="w-full"
                                    id="promo-value"
                                    min={0}
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    placeholder="0"
                                    type="number"
                                    value={field.value}
                                  />
                                )}
                              />
                              {formState.errors.discountValue?.message ? (
                                <p className="text-sm text-red-600">
                                  {formState.errors.discountValue.message}
                                </p>
                              ) : null}
                            </div>

                            <div className="space-y-2">
                              <label
                                className="block text-sm font-medium text-stone-700"
                                htmlFor="promo-start"
                              >
                                {text.modules.promo.startsOnOptional}
                              </label>
                              <Controller
                                control={control}
                                name="startAt"
                                render={({ field }) => (
                                  <Input
                                    className="w-full"
                                    id="promo-start"
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    type="date"
                                    value={field.value}
                                  />
                                )}
                              />
                            </div>

                            <div className="space-y-2">
                              <label
                                className="block text-sm font-medium text-stone-700"
                                htmlFor="promo-end"
                              >
                                {text.modules.promo.endsOnOptional}
                              </label>
                              <Controller
                                control={control}
                                name="endAt"
                                render={({ field }) => (
                                  <Input
                                    className="w-full"
                                    id="promo-end"
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    type="date"
                                    value={field.value}
                                  />
                                )}
                              />
                            </div>

                            <div className="space-y-2 sm:col-span-2">
                              <label
                                className="block text-sm font-medium text-stone-700"
                                htmlFor="promo-description"
                              >
                                {text.modules.promo.detailsOptional}
                              </label>
                              <Controller
                                control={control}
                                name="description"
                                render={({ field }) => (
                                  <Input
                                    className="w-full"
                                    id="promo-description"
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    placeholder={text.modules.promo.placeholderDescription}
                                    value={field.value}
                                  />
                                )}
                              />
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
                              {editingPromo
                                ? text.common.actions.saveChanges
                                : text.common.actions.saveOffer}
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
            filteredPromos.length,
            promos.length,
            text.modules.promo.tableCountLabel,
          )}
        </p>
      </div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label={text.modules.promo.offerList}>
            <Table.Header>
              <Table.Column isRowHeader>{text.modules.promo.offerName}</Table.Column>
              <Table.Column>{text.common.labels.status}</Table.Column>
              <Table.Column>{text.common.labels.discount}</Table.Column>
              <Table.Column>{text.common.labels.date}</Table.Column>
              <Table.Column>{text.common.labels.details}</Table.Column>
              <Table.Column className="w-[160px]">{text.common.labels.actions}</Table.Column>
            </Table.Header>
            <Table.Body>
              {filteredPromos.length > 0 ? (
                filteredPromos.map((promo) => (
                  <Table.Row key={promo.id}>
                    <Table.Cell>{promo.title ?? text.modules.promo.title}</Table.Cell>
                    <Table.Cell>{promoStatusLabel(promo.status, text)}</Table.Cell>
                    <Table.Cell>
                      {formatDiscount(promo.discount_type, promo.discount_value, formatCurrency)}
                    </Table.Cell>
                    <Table.Cell>{formatDateRange(promo.start_at, promo.end_at, locale)}</Table.Cell>
                    <Table.Cell>{promo.description ?? text.common.states.notAdded}</Table.Cell>
                    <Table.Cell>
                      <div className="flex items-center gap-2">
                        <Button onPress={() => startEdit(promo)} size="sm" variant="outline">
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
                                    {text.modules.promo.deleteTitle}
                                  </AlertDialog.Heading>
                                </AlertDialog.Header>
                                <AlertDialog.Body>
                                  {text.modules.promo.deleteBody(
                                    promo.title ?? text.modules.promo.title,
                                  )}
                                </AlertDialog.Body>
                                <AlertDialog.Footer>
                                  <Button slot="close" variant="tertiary">
                                    {text.common.actions.cancel}
                                  </Button>
                                  <Button
                                    isPending={pendingDeleteId === promo.id}
                                    onPress={() => void deletePromo(promo.id)}
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
                  <Table.Cell colSpan={6}>
                    {promosQuery.isPending ? text.modules.promo.loading : text.modules.promo.empty}
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
