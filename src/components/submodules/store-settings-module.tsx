import { Button, Input } from "@heroui/react";

export function StoreSettingsModule() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-semibold">Pengaturan Toko</h3>
        <Button className="bg-stone-950 text-stone-50">Simpan</Button>
      </div>

      <div className="space-y-3">
        <div className="grid gap-2 sm:grid-cols-[180px_1fr]">
          <p className="text-sm font-medium text-stone-700">Nama toko</p>
          <Input defaultValue="INAPOS" />
        </div>
        <div className="grid gap-2 sm:grid-cols-[180px_1fr]">
          <p className="text-sm font-medium text-stone-700">Alamat</p>
          <Input defaultValue="Jl. Melati No. 10" />
        </div>
        <div className="grid gap-2 sm:grid-cols-[180px_1fr]">
          <p className="text-sm font-medium text-stone-700">Mata uang</p>
          <Input defaultValue="Rupiah" />
        </div>
        <div className="grid gap-2 sm:grid-cols-[180px_1fr]">
          <p className="text-sm font-medium text-stone-700">Footer struk</p>
          <Input defaultValue="Terima kasih sudah belanja" />
        </div>
      </div>
    </div>
  );
}
