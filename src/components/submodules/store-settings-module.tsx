import { Button, Input } from "@heroui/react";
import { useI18n } from "../../lib/i18n";

export function StoreSettingsModule() {
  const { text } = useI18n();

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-semibold">{text.modules.storeSettings.title}</h3>
        <Button className="bg-stone-950 text-stone-50">{text.common.actions.save}</Button>
      </div>

      <div className="space-y-3">
        <div className="grid gap-2 sm:grid-cols-[180px_1fr]">
          <p className="text-sm font-medium text-stone-700">
            {text.modules.storeSettings.storeName}
          </p>
          <Input defaultValue={text.modules.storeSettings.defaults.storeName} />
        </div>
        <div className="grid gap-2 sm:grid-cols-[180px_1fr]">
          <p className="text-sm font-medium text-stone-700">{text.modules.storeSettings.address}</p>
          <Input defaultValue={text.modules.storeSettings.defaults.address} />
        </div>
        <div className="grid gap-2 sm:grid-cols-[180px_1fr]">
          <p className="text-sm font-medium text-stone-700">
            {text.modules.storeSettings.currency}
          </p>
          <Input defaultValue={text.modules.storeSettings.defaults.currency} />
        </div>
        <div className="grid gap-2 sm:grid-cols-[180px_1fr]">
          <p className="text-sm font-medium text-stone-700">
            {text.modules.storeSettings.receiptNote}
          </p>
          <Input defaultValue={text.modules.storeSettings.defaults.note} />
        </div>
      </div>
    </div>
  );
}
