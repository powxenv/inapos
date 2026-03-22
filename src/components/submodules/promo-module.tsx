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

const promoSchema = z.object({
  description: z.string().trim().max(200, "Deskripsi maksimal 200 karakter."),
  discountType: z.enum(["nominal", "percent"]),
  discountValue: z
    .string()
    .trim()
    .min(1, "Nilai diskon wajib diisi.")
    .refine((value) => !Number.isNaN(Number(value)) && Number(value) >= 0, {
      message: "Nilai diskon harus angka 0 atau lebih.",
    }),
  endAt: z.string().trim(),
  startAt: z.string().trim(),
  status: z.enum(["draft", "active", "scheduled", "expired"]),
  title: z.string().trim().min(1, "Nama promo wajib diisi.").max(120, "Nama promo maksimal 120 karakter."),
});

type PromoFormValues = z.infer<typeof promoSchema>;

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
  { id: "active", label: "Aktif" },
  { id: "scheduled", label: "Terjadwal" },
  { id: "expired", label: "Selesai" },
] as const;

const promoDiscountOptions = [
  { id: "nominal", label: "Potongan nominal" },
  { id: "percent", label: "Potongan persen" },
] as const;

function normalizeText(value: string) {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function formatDateRange(startAt: string | null | undefined, endAt: string | null | undefined) {
  const formatter = new Intl.DateTimeFormat("id-ID", { dateStyle: "medium" });
  const start = startAt ? formatter.format(new Date(startAt)) : "-";
  const end = endAt ? formatter.format(new Date(endAt)) : "-";
  return `${start} - ${end}`;
}

function formatDiscount(type: string | null, value: number | null | undefined) {
  if (type === "percent") {
    return `${value ?? 0}%`;
  }

  return new Intl.NumberFormat("id-ID", {
    currency: "IDR",
    maximumFractionDigits: 0,
    style: "currency",
  }).format(value ?? 0);
}

export function PromoModule({ storeId }: PromoModuleProps) {
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
      title: promo.title ?? "Promo",
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
      setFormError(error instanceof Error ? error.message : "Gagal menyimpan promo.");
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
      setFormError(error instanceof Error ? error.message : "Gagal menghapus promo.");
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">Promo</h3>
        <p className="text-sm text-stone-500">Simpan promo aktif agar tim toko mudah mengecek campaign yang berjalan.</p>
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
              aria-label="Cari promo"
              className="w-full"
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Cari nama promo, status, atau deskripsi"
              value={search}
            />
          </InputGroup>
          <Modal state={modalState}>
            <Button onPress={openCreateModal}>
              <PlusIcon aria-hidden size={16} />
              Promo baru
            </Button>
            <Modal.Backdrop>
              <Modal.Container placement="center" size="lg">
                <Modal.Dialog aria-label={editingPromo ? "Ubah promo" : "Promo baru"}>
                  {({ close }) => (
                    <>
                      <Modal.Header>
                        <Modal.Heading>
                          {editingPromo ? `Ubah promo: ${editingPromo.title}` : "Promo baru"}
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
                            <label className="block text-sm font-medium text-stone-700" htmlFor="promo-title">
                              Nama promo
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
                                    placeholder="Contoh: Diskon kopi sachet"
                                    value={field.value}
                                  />
                                </InputGroup>
                              )}
                            />
                            {formState.errors.title?.message ? (
                              <p className="text-sm text-red-600">{formState.errors.title.message}</p>
                            ) : null}
                          </div>

                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                              <label className="block text-sm font-medium text-stone-700" htmlFor="promo-status">
                                Status
                              </label>
                              <Controller
                                control={control}
                                name="status"
                                render={({ field }) => (
                                  <Select
                                    aria-label="Status promo"
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
                                            {option.label}
                                          </ListBox.Item>
                                        ))}
                                      </ListBox>
                                    </Select.Popover>
                                  </Select>
                                )}
                              />
                            </div>

                            <div className="space-y-2">
                              <label className="block text-sm font-medium text-stone-700" htmlFor="promo-type">
                                Jenis diskon
                              </label>
                              <Controller
                                control={control}
                                name="discountType"
                                render={({ field }) => (
                                  <Select
                                    aria-label="Jenis diskon"
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
                                            {option.label}
                                          </ListBox.Item>
                                        ))}
                                      </ListBox>
                                    </Select.Popover>
                                  </Select>
                                )}
                              />
                            </div>

                            <div className="space-y-2">
                              <label className="block text-sm font-medium text-stone-700" htmlFor="promo-value">
                                Nilai diskon
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
                                <p className="text-sm text-red-600">{formState.errors.discountValue.message}</p>
                              ) : null}
                            </div>

                            <div className="space-y-2">
                              <label className="block text-sm font-medium text-stone-700" htmlFor="promo-start">
                                Mulai (optional)
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
                              <label className="block text-sm font-medium text-stone-700" htmlFor="promo-end">
                                Selesai (optional)
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
                              <label className="block text-sm font-medium text-stone-700" htmlFor="promo-description">
                                Deskripsi (optional)
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
                                    placeholder="Contoh: berlaku untuk kopi sachet ukuran tertentu"
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
                              Batal
                            </Button>
                            <Button isPending={isSaving} type="submit">
                              {editingPromo ? "Simpan perubahan" : "Simpan promo"}
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
          {filteredPromos.length} dari {promos.length} promo
        </p>
      </div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Tabel promo toko">
            <Table.Header>
              <Table.Column isRowHeader>Promo</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column>Diskon</Table.Column>
              <Table.Column>Periode</Table.Column>
              <Table.Column>Deskripsi</Table.Column>
              <Table.Column className="w-[160px]">Aksi</Table.Column>
            </Table.Header>
            <Table.Body>
              {filteredPromos.length > 0 ? (
                filteredPromos.map((promo) => (
                  <Table.Row key={promo.id}>
                    <Table.Cell>{promo.title ?? "-"}</Table.Cell>
                    <Table.Cell>{promo.status ?? "-"}</Table.Cell>
                    <Table.Cell>{formatDiscount(promo.discount_type, promo.discount_value)}</Table.Cell>
                    <Table.Cell>{formatDateRange(promo.start_at, promo.end_at)}</Table.Cell>
                    <Table.Cell>{promo.description ?? "-"}</Table.Cell>
                    <Table.Cell>
                      <div className="flex items-center gap-2">
                        <Button onPress={() => startEdit(promo)} size="sm" variant="outline">
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
                                  <AlertDialog.Heading>Hapus promo?</AlertDialog.Heading>
                                </AlertDialog.Header>
                                <AlertDialog.Body>
                                  {promo.title ?? "Promo ini"} akan dihapus dari daftar promo.
                                </AlertDialog.Body>
                                <AlertDialog.Footer>
                                  <Button slot="close" variant="tertiary">
                                    Batal
                                  </Button>
                                  <Button
                                    isPending={pendingDeleteId === promo.id}
                                    onPress={() => void deletePromo(promo.id)}
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
                    {promosQuery.isPending ? "Memuat promo..." : "Belum ada promo untuk toko ini."}
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
