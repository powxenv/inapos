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
import { ArrowDownIcon } from "@phosphor-icons/react/dist/csr/ArrowDown";
import { ArrowUpIcon } from "@phosphor-icons/react/dist/csr/ArrowUp";
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/csr/MagnifyingGlass";
import { PencilSimpleIcon } from "@phosphor-icons/react/dist/csr/PencilSimple";
import { PlusIcon } from "@phosphor-icons/react/dist/csr/Plus";
import { TrashIcon } from "@phosphor-icons/react/dist/csr/Trash";
import { WalletIcon } from "@phosphor-icons/react/dist/csr/Wallet";
import { Controller, useForm } from "react-hook-form";
import { useQueries } from "@powersync/tanstack-react-query";
import { z } from "zod";
import { powerSync } from "../../lib/powersync";

type CashModuleProps = {
  storeId: string;
};

type CashEntryRow = {
  amount: number | null;
  entry_type: string | null;
  happened_at: string | null;
  id: string;
  note: string | null;
  title: string | null;
};

type CashSummaryRow = {
  balance: number | null;
  cash_in_today: number | null;
  cash_out_today: number | null;
  transaction_count: number | null;
};

type EditingCashEntry = {
  id: string;
  title: string;
};

const cashEntrySchema = z.object({
  amount: z
    .string()
    .trim()
    .min(1, "Enter an amount.")
    .refine((value) => !Number.isNaN(Number(value)) && Number(value) > 0, {
      message: "Use an amount greater than 0.",
    }),
  entryType: z.enum(["in", "out"]),
  happenedAt: z.string().trim().min(1, "Choose a date."),
  note: z.string().trim().max(200, "Use 200 characters or fewer."),
  title: z.string().trim().min(1, "Enter a short title.").max(120, "Use 120 characters or fewer."),
});

type CashEntryFormValues = z.infer<typeof cashEntrySchema>;

const defaultValues: CashEntryFormValues = {
  amount: "0",
  entryType: "in",
  happenedAt: new Date().toISOString().slice(0, 10),
  note: "",
  title: "",
};

const cashTypeOptions = [
  { id: "in", label: "Cash in" },
  { id: "out", label: "Cash out" },
] as const;

function normalizeText(value: string) {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function formatDate(value: string | null | undefined) {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
  }).format(new Date(value));
}

function formatRupiah(value: number | null | undefined) {
  return new Intl.NumberFormat("id-ID", {
    currency: "IDR",
    maximumFractionDigits: 0,
    style: "currency",
  }).format(value ?? 0);
}

function cashTypeMeta(entryType: string | null) {
  if (entryType === "out") {
    return {
      color: "danger" as const,
      icon: ArrowUpIcon,
      label: "Cash out",
    };
  }

  return {
    color: "success" as const,
    icon: ArrowDownIcon,
    label: "Cash in",
  };
}

export function CashModule({ storeId }: CashModuleProps) {
  const modalState = useOverlayState();
  const [search, setSearch] = useState("");
  const [editingEntry, setEditingEntry] = useState<EditingCashEntry | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  const { control, formState, handleSubmit, reset } = useForm<CashEntryFormValues>({
    defaultValues,
    resolver: zodResolver(cashEntrySchema),
  });
  const [entriesQuery, summaryQuery] = useQueries<[CashEntryRow, CashSummaryRow]>({
    queries: [
      {
        parameters: [storeId],
        query: `
          SELECT id, title, entry_type, amount, happened_at, note
          FROM cash_entries
          WHERE store_id = ?
          ORDER BY COALESCE(happened_at, updated_at) DESC
        `,
        queryKey: ["cash-entries", storeId],
      },
      {
        parameters: [storeId, storeId, storeId],
        query: `
          SELECT
            COALESCE(SUM(CASE WHEN entry_type = 'in' THEN amount ELSE -amount END), 0) AS balance,
            COALESCE(SUM(CASE WHEN entry_type = 'in' AND date(happened_at) = date('now', 'localtime') THEN amount ELSE 0 END), 0) AS cash_in_today,
            COALESCE(SUM(CASE WHEN entry_type = 'out' AND date(happened_at) = date('now', 'localtime') THEN amount ELSE 0 END), 0) AS cash_out_today,
            COUNT(*) AS transaction_count
          FROM cash_entries
          WHERE store_id = ?
        `,
        queryKey: ["cash-summary", storeId],
      },
    ],
  });

  const entries = entriesQuery.data ?? [];
  const summary = summaryQuery.data?.[0];
  const searchValue = search.trim().toLowerCase();
  const filteredEntries = useMemo(() => {
    if (!searchValue) {
      return entries;
    }

    return entries.filter((entry) =>
      [entry.title, entry.note, entry.entry_type]
        .filter((value): value is string => Boolean(value))
        .some((value) => value.toLowerCase().includes(searchValue)),
    );
  }, [entries, searchValue]);

  function resetForm() {
    setEditingEntry(null);
    setFormError(null);
    reset({
      ...defaultValues,
      happenedAt: new Date().toISOString().slice(0, 10),
    });
  }

  function openCreateModal() {
    resetForm();
    modalState.open();
  }

  function startEdit(entry: CashEntryRow) {
    setEditingEntry({
      id: entry.id,
      title: entry.title ?? "Transaksi kas",
    });
    setFormError(null);
    reset({
      amount: String(entry.amount ?? 0),
      entryType: entry.entry_type === "out" ? "out" : "in",
      happenedAt: entry.happened_at ? entry.happened_at.slice(0, 10) : defaultValues.happenedAt,
      note: entry.note ?? "",
      title: entry.title ?? "",
    });
    modalState.open();
  }

  async function saveEntry(values: CashEntryFormValues, close: () => void) {
    setFormError(null);
    setIsSaving(true);

    const now = new Date().toISOString();
    const payload = {
      amount: Number(values.amount),
      entry_type: values.entryType,
      happened_at: new Date(`${values.happenedAt}T00:00:00`).toISOString(),
      note: normalizeText(values.note),
      store_id: storeId,
      title: values.title.trim(),
      updated_at: now,
    };

    try {
      if (editingEntry) {
        await powerSync.execute(
          `
            UPDATE cash_entries
            SET
              title = ?,
              entry_type = ?,
              amount = ?,
              happened_at = ?,
              note = ?,
              updated_at = ?
            WHERE id = ?
          `,
          [
            payload.title,
            payload.entry_type,
            payload.amount,
            payload.happened_at,
            payload.note,
            payload.updated_at,
            editingEntry.id,
          ],
        );
      } else {
        await powerSync.execute(
          `
            INSERT INTO cash_entries (
              id,
              store_id,
              title,
              entry_type,
              amount,
              happened_at,
              note,
              updated_at
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
          `,
          [
            crypto.randomUUID(),
            payload.store_id,
            payload.title,
            payload.entry_type,
            payload.amount,
            payload.happened_at,
            payload.note,
            payload.updated_at,
          ],
        );
      }

      setIsSaving(false);
      close();
      resetForm();
    } catch (error) {
      setIsSaving(false);
      setFormError(error instanceof Error ? error.message : "We couldn't save this cash entry.");
    }
  }

  async function deleteEntry(entryId: string) {
    setFormError(null);
    setPendingDeleteId(entryId);

    try {
      await powerSync.execute("DELETE FROM cash_entries WHERE id = ?", [entryId]);

      if (editingEntry?.id === entryId) {
        resetForm();
      }

      setPendingDeleteId(null);
    } catch (error) {
      setPendingDeleteId(null);
      setFormError(error instanceof Error ? error.message : "We couldn't delete this cash entry.");
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">Cash</h3>
        <p className="text-sm text-stone-500">
          Track money coming in and going out so your cash balance stays clear.
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
            <Card.Title className="text-sm font-medium text-stone-600">Cash balance</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">{formatRupiah(summary?.balance)}</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-sm font-medium text-stone-600">Money in today</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">
              {formatRupiah(summary?.cash_in_today)}
            </p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-sm font-medium text-stone-600">Money out today</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">
              {formatRupiah(summary?.cash_out_today)}
            </p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-sm font-medium text-stone-600">Saved entries</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">
              {summary?.transaction_count ?? 0}
            </p>
          </Card.Content>
        </Card>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-1 flex-wrap items-center gap-3">
          <InputGroup className="max-w-md">
            <InputGroup.Prefix className="text-stone-400">
              <MagnifyingGlassIcon aria-hidden size={18} />
            </InputGroup.Prefix>
            <InputGroup.Input
              aria-label="Search cash entries"
              className="w-full"
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by title or note"
              value={search}
            />
          </InputGroup>
          <Modal state={modalState}>
            <Button onPress={openCreateModal}>
              <PlusIcon aria-hidden size={16} />
              Add entry
            </Button>
            <Modal.Backdrop>
              <Modal.Container placement="center" size="lg">
                <Modal.Dialog aria-label={editingEntry ? "Edit cash entry" : "Add cash entry"}>
                  {({ close }) => (
                    <>
                      <Modal.Header>
                        <Modal.Heading>
                          {editingEntry ? `Edit entry: ${editingEntry.title}` : "Add cash entry"}
                        </Modal.Heading>
                      </Modal.Header>
                      <Modal.Body>
                        <form
                          className="space-y-4"
                          onSubmit={handleSubmit(async (values) => {
                            await saveEntry(values, close);
                          })}
                        >
                          <div className="space-y-2">
                            <label
                              className="block text-sm font-medium text-stone-700"
                              htmlFor="cash-title"
                            >
                              Title
                            </label>
                            <Controller
                              control={control}
                              name="title"
                              render={({ field, fieldState }) => (
                                <InputGroup className="w-full" isInvalid={fieldState.invalid}>
                                  <InputGroup.Prefix className="text-stone-400">
                                    <WalletIcon aria-hidden size={18} />
                                  </InputGroup.Prefix>
                                  <InputGroup.Input
                                    aria-invalid={fieldState.invalid}
                                    className="w-full"
                                    id="cash-title"
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    placeholder="For example: Cash sale"
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
                                htmlFor="cash-type"
                              >
                                Entry type
                              </label>
                              <Controller
                                control={control}
                                name="entryType"
                                render={({ field }) => (
                                  <Select
                                    aria-label="Choose an entry type"
                                    className="w-full"
                                    id="cash-type"
                                    onBlur={field.onBlur}
                                    onSelectionChange={(key) =>
                                      field.onChange(typeof key === "string" ? key : "in")
                                    }
                                    placeholder="Choose a type"
                                    selectedKey={field.value}
                                  >
                                    <Select.Trigger className="w-full">
                                      <Select.Value />
                                      <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                      <ListBox>
                                        {cashTypeOptions.map((option) => (
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
                              <label
                                className="block text-sm font-medium text-stone-700"
                                htmlFor="cash-amount"
                              >
                                Amount
                              </label>
                              <Controller
                                control={control}
                                name="amount"
                                render={({ field, fieldState }) => (
                                  <Input
                                    aria-invalid={fieldState.invalid}
                                    className="w-full"
                                    id="cash-amount"
                                    min={0}
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    placeholder="0"
                                    type="number"
                                    value={field.value}
                                  />
                                )}
                              />
                              {formState.errors.amount?.message ? (
                                <p className="text-sm text-red-600">
                                  {formState.errors.amount.message}
                                </p>
                              ) : null}
                            </div>

                            <div className="space-y-2">
                              <label
                                className="block text-sm font-medium text-stone-700"
                                htmlFor="cash-date"
                              >
                                Date
                              </label>
                              <Controller
                                control={control}
                                name="happenedAt"
                                render={({ field, fieldState }) => (
                                  <Input
                                    aria-invalid={fieldState.invalid}
                                    className="w-full"
                                    id="cash-date"
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    type="date"
                                    value={field.value}
                                  />
                                )}
                              />
                              {formState.errors.happenedAt?.message ? (
                                <p className="text-sm text-red-600">
                                  {formState.errors.happenedAt.message}
                                </p>
                              ) : null}
                            </div>

                            <div className="space-y-2">
                              <label
                                className="block text-sm font-medium text-stone-700"
                                htmlFor="cash-note"
                              >
                                Note (optional)
                              </label>
                              <Controller
                                control={control}
                                name="note"
                                render={({ field }) => (
                                  <Input
                                    className="w-full"
                                    id="cash-note"
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    placeholder="For example: Paid by wholesale customer"
                                    value={field.value}
                                  />
                                )}
                              />
                              {formState.errors.note?.message ? (
                                <p className="text-sm text-red-600">
                                  {formState.errors.note.message}
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
                              {editingEntry ? "Save changes" : "Save entry"}
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
          {filteredEntries.length} of {entries.length} entries
        </p>
      </div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Cash entries">
            <Table.Header>
              <Table.Column isRowHeader>Date</Table.Column>
              <Table.Column>Title</Table.Column>
              <Table.Column>Type</Table.Column>
              <Table.Column>Note</Table.Column>
              <Table.Column>Amount</Table.Column>
              <Table.Column className="w-[160px]">Actions</Table.Column>
            </Table.Header>
            <Table.Body>
              {filteredEntries.length > 0 ? (
                filteredEntries.map((entry) => {
                  const meta = cashTypeMeta(entry.entry_type);
                  const Icon = meta.icon;

                  return (
                    <Table.Row key={entry.id}>
                      <Table.Cell>{formatDate(entry.happened_at)}</Table.Cell>
                      <Table.Cell>{entry.title ?? "-"}</Table.Cell>
                      <Table.Cell>
                        <Chip color={meta.color}>
                          <Icon aria-hidden size={14} />
                          {meta.label}
                        </Chip>
                      </Table.Cell>
                      <Table.Cell>{entry.note ?? "-"}</Table.Cell>
                      <Table.Cell>{formatRupiah(entry.amount)}</Table.Cell>
                      <Table.Cell>
                        <div className="flex items-center gap-2">
                          <Button onPress={() => startEdit(entry)} size="sm" variant="outline">
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
                                    <AlertDialog.Heading>Delete this entry?</AlertDialog.Heading>
                                  </AlertDialog.Header>
                                  <AlertDialog.Body>
                                    {entry.title ?? "This entry"} will be removed from your cash
                                    list.
                                  </AlertDialog.Body>
                                  <AlertDialog.Footer>
                                    <Button slot="close" variant="tertiary">
                                      Cancel
                                    </Button>
                                    <Button
                                      isPending={pendingDeleteId === entry.id}
                                      onPress={() => void deleteEntry(entry.id)}
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
                  );
                })
              ) : (
                <Table.Row>
                  <Table.Cell colSpan={6}>
                    {entriesQuery.isPending ? "Loading cash entries..." : "No cash entries yet."}
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
