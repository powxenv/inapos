import { useEffect, useMemo, useState } from "react";
import { Alert, Button, Card, Input, ListBox, Select, TextArea } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useQueries } from "@powersync/tanstack-react-query";
import { z } from "zod";
import { DEFAULT_CURRENCY, SUPPORTED_CURRENCIES, type Currency, useI18n } from "../../lib/i18n";
import { powerSync } from "../../lib/powersync";

type StoreSettingsModuleProps = {
  storeId: string;
  storeName: string;
};

type StoreDetailsRow = {
  address: string | null;
  currency_code: string | null;
  id: string;
  phone: string | null;
  receipt_note: string | null;
  store_name: string | null;
  updated_at: string | null;
};

type StoreSettingsFormValues = {
  address: string;
  currencyCode: Currency;
  phone: string;
  receiptNote: string;
  storeName: string;
};

function normalizeText(value: string): string | null {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function createDefaultValues(
  fallbackStoreName: string,
  text: ReturnType<typeof useI18n>["text"],
): StoreSettingsFormValues {
  return {
    address: text.modules.storeSettings.defaults.address,
    currencyCode: DEFAULT_CURRENCY,
    phone: text.modules.storeSettings.defaults.phone,
    receiptNote: text.modules.storeSettings.defaults.note,
    storeName: fallbackStoreName.trim() || text.modules.storeSettings.defaults.storeName,
  };
}

function isCurrency(value: string | null | undefined): value is Currency {
  return typeof value === "string" && SUPPORTED_CURRENCIES.includes(value as Currency);
}

export function StoreSettingsModule({ storeId, storeName }: StoreSettingsModuleProps) {
  const { text } = useI18n();
  const [formError, setFormError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const storeSettingsSchema = z.object({
    address: z.string().trim().max(240, "Gunakan maksimal 240 karakter."),
    currencyCode: z.enum(SUPPORTED_CURRENCIES),
    phone: z.string().trim().max(30, "Gunakan maksimal 30 karakter."),
    receiptNote: z.string().trim().max(240, "Gunakan maksimal 240 karakter."),
    storeName: z
      .string()
      .trim()
      .min(2, "Nama toko minimal 2 karakter.")
      .max(120, "Nama toko maksimal 120 karakter."),
  });
  const defaultValues = useMemo(
    () => createDefaultValues(storeName, text),
    [storeName, text],
  );
  const { control, formState, handleSubmit, reset } = useForm<StoreSettingsFormValues>({
    defaultValues,
    resolver: zodResolver(storeSettingsSchema),
  });
  const [storeDetailsQuery] = useQueries<[StoreDetailsRow]>({
    queries: [
      {
        parameters: [storeId],
        query: `
          SELECT id, store_name, phone, address, receipt_note, currency_code, updated_at
          FROM stores
          WHERE store_id = ?
          LIMIT 1
        `,
        queryKey: ["store-details", storeId],
      },
    ],
  });
  const storeDetails = storeDetailsQuery.data?.[0] ?? null;

  useEffect(() => {
    if (storeDetails) {
      reset({
        address: storeDetails.address ?? defaultValues.address,
        currencyCode: isCurrency(storeDetails.currency_code)
          ? storeDetails.currency_code
          : defaultValues.currencyCode,
        phone: storeDetails.phone ?? defaultValues.phone,
        receiptNote: storeDetails.receipt_note ?? defaultValues.receiptNote,
        storeName: storeDetails.store_name ?? defaultValues.storeName,
      });
      return;
    }

    reset(defaultValues);
  }, [defaultValues, reset, storeDetails]);

  async function saveStoreDetails(values: StoreSettingsFormValues) {
    setFormError(null);
    setIsSaving(true);

    const now = new Date().toISOString();
    const payload = {
      address: normalizeText(values.address),
      currency_code: values.currencyCode,
      phone: normalizeText(values.phone),
      receipt_note: normalizeText(values.receiptNote),
      store_id: storeId,
      store_name: values.storeName.trim(),
      updated_at: now,
    };

    try {
      if (storeDetails) {
        await powerSync.execute(
          `
            UPDATE stores
            SET store_name = ?, phone = ?, address = ?, receipt_note = ?, currency_code = ?, updated_at = ?
            WHERE id = ?
          `,
          [
            payload.store_name,
            payload.phone,
            payload.address,
            payload.receipt_note,
            payload.currency_code,
            payload.updated_at,
            storeDetails.id,
          ],
        );
      } else {
        await powerSync.execute(
          `
            INSERT INTO stores (
              id,
              store_id,
              store_name,
              phone,
              address,
              receipt_note,
              currency_code,
              updated_at
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
          `,
          [
            crypto.randomUUID(),
            payload.store_id,
            payload.store_name,
            payload.phone,
            payload.address,
            payload.receipt_note,
            payload.currency_code,
            payload.updated_at,
          ],
        );
      }
    } catch (error) {
      setFormError(
        error instanceof Error ? error.message : "Kami belum bisa menyimpan detail toko.",
      );
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <div className="space-y-4">
      {formError ? (
        <Alert status="danger">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>Detail toko belum tersimpan</Alert.Title>
            <Alert.Description>{formError}</Alert.Description>
          </Alert.Content>
        </Alert>
      ) : null}

      <Card className="border border-stone-200 bg-stone-50 shadow-none">
        <Card.Content className="p-4">
          <form className="space-y-4" onSubmit={handleSubmit(saveStoreDetails)}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-semibold">{text.modules.storeSettings.title}</h3>
              <Button isPending={isSaving} type="submit">
                {text.common.actions.save}
              </Button>
            </div>

            <div className="space-y-3">
              <div className="grid gap-2 sm:grid-cols-[180px_1fr] sm:items-start">
                <p className="pt-2 text-sm font-medium text-stone-700">
                  {text.modules.storeSettings.storeName}
                </p>
                <div className="space-y-2">
                  <Controller
                    control={control}
                    name="storeName"
                    render={({ field }) => (
                      <Input
                        className="w-full"
                        onBlur={field.onBlur}
                        onChange={field.onChange}
                        value={field.value}
                      />
                    )}
                  />
                  {formState.errors.storeName?.message ? (
                    <p className="text-sm text-red-600">{formState.errors.storeName.message}</p>
                  ) : null}
                </div>
              </div>

              <div className="grid gap-2 sm:grid-cols-[180px_1fr] sm:items-start">
                <p className="pt-2 text-sm font-medium text-stone-700">
                  {text.modules.storeSettings.phone}
                </p>
                <div className="space-y-2">
                  <Controller
                    control={control}
                    name="phone"
                    render={({ field }) => (
                      <Input
                        className="w-full"
                        onBlur={field.onBlur}
                        onChange={field.onChange}
                        placeholder={text.modules.storeSettings.defaults.phone}
                        value={field.value}
                      />
                    )}
                  />
                  {formState.errors.phone?.message ? (
                    <p className="text-sm text-red-600">{formState.errors.phone.message}</p>
                  ) : null}
                </div>
              </div>

              <div className="grid gap-2 sm:grid-cols-[180px_1fr] sm:items-start">
                <p className="pt-2 text-sm font-medium text-stone-700">
                  {text.modules.storeSettings.currency}
                </p>
                <div className="space-y-2">
                  <Controller
                    control={control}
                    name="currencyCode"
                    render={({ field }) => (
                      <Select
                        aria-label={text.modules.storeSettings.currency}
                        className="w-full"
                        selectedKey={field.value}
                        onSelectionChange={(key) => {
                          if (typeof key === "string" && isCurrency(key)) {
                            field.onChange(key);
                          }
                        }}
                      >
                        <Select.Trigger className="w-full">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                          <ListBox>
                            {SUPPORTED_CURRENCIES.map((currencyCode) => (
                              <ListBox.Item
                                id={currencyCode}
                                key={currencyCode}
                                textValue={text.common.currencyNames[currencyCode]}
                              >
                                {text.common.currencyNames[currencyCode]}
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                            ))}
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    )}
                  />
                  {formState.errors.currencyCode?.message ? (
                    <p className="text-sm text-red-600">{formState.errors.currencyCode.message}</p>
                  ) : null}
                </div>
              </div>

              <div className="grid gap-2 sm:grid-cols-[180px_1fr] sm:items-start">
                <p className="pt-2 text-sm font-medium text-stone-700">
                  {text.modules.storeSettings.address}
                </p>
                <div className="space-y-2">
                  <Controller
                    control={control}
                    name="address"
                    render={({ field }) => (
                      <TextArea
                        className="w-full"
                        onBlur={field.onBlur}
                        onChange={field.onChange}
                        rows={3}
                        value={field.value}
                        variant="secondary"
                      />
                    )}
                  />
                  {formState.errors.address?.message ? (
                    <p className="text-sm text-red-600">{formState.errors.address.message}</p>
                  ) : null}
                </div>
              </div>

              <div className="grid gap-2 sm:grid-cols-[180px_1fr] sm:items-start">
                <p className="pt-2 text-sm font-medium text-stone-700">
                  {text.modules.storeSettings.receiptNote}
                </p>
                <div className="space-y-2">
                  <Controller
                    control={control}
                    name="receiptNote"
                    render={({ field }) => (
                      <TextArea
                        className="w-full"
                        onBlur={field.onBlur}
                        onChange={field.onChange}
                        rows={3}
                        value={field.value}
                        variant="secondary"
                      />
                    )}
                  />
                  {formState.errors.receiptNote?.message ? (
                    <p className="text-sm text-red-600">{formState.errors.receiptNote.message}</p>
                  ) : null}
                </div>
              </div>
            </div>
          </form>
        </Card.Content>
      </Card>
    </div>
  );
}
