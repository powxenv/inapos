import { Button, Input } from "@heroui/react";

export function StoreSettingsModule() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-semibold">Store details</h3>
        <Button className="bg-stone-950 text-stone-50">Save</Button>
      </div>

      <div className="space-y-3">
        <div className="grid gap-2 sm:grid-cols-[180px_1fr]">
          <p className="text-sm font-medium text-stone-700">Store name</p>
          <Input defaultValue="INAPOS" />
        </div>
        <div className="grid gap-2 sm:grid-cols-[180px_1fr]">
          <p className="text-sm font-medium text-stone-700">Address</p>
          <Input defaultValue="10 Melati Street" />
        </div>
        <div className="grid gap-2 sm:grid-cols-[180px_1fr]">
          <p className="text-sm font-medium text-stone-700">Currency</p>
          <Input defaultValue="Indonesian rupiah" />
        </div>
        <div className="grid gap-2 sm:grid-cols-[180px_1fr]">
          <p className="text-sm font-medium text-stone-700">Receipt note</p>
          <Input defaultValue="Thank you for shopping with us" />
        </div>
      </div>
    </div>
  );
}
