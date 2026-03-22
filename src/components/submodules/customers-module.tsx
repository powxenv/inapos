import { Button, Card, Input } from "@heroui/react";

export function CustomersModule() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Pelanggan</h3>

      <div className="flex flex-wrap items-center gap-3">
        <Input className="max-w-xs" placeholder="Cari pelanggan" />
        <Button className="bg-stone-950 text-stone-50">Tambah pelanggan</Button>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="space-y-1">
            <Card.Title className="text-base">Ibu Rina</Card.Title>
            <Card.Description className="text-xs uppercase tracking-wide text-stone-500">
              0812-xxxx-001
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-stone-600">
              Pelanggan tetap, sering belanja kebutuhan dapur.
            </p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="space-y-1">
            <Card.Title className="text-base">Pak Dodi</Card.Title>
            <Card.Description className="text-xs uppercase tracking-wide text-stone-500">
              0812-xxxx-002
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-stone-600">
              Sering beli grosir untuk warung kecil.
            </p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="space-y-1">
            <Card.Title className="text-base">Bu Maya</Card.Title>
            <Card.Description className="text-xs uppercase tracking-wide text-stone-500">
              0812-xxxx-003
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-stone-600">Sering bayar via transfer.</p>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}
