import { Button, Card } from "@heroui/react";

export function DevicesSyncModule() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-semibold">Perangkat & Sinkronisasi</h3>
        <Button className="bg-stone-950 text-stone-50">Sinkronkan</Button>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="space-y-1">
            <Card.Title className="text-base">Kasir Depan</Card.Title>
            <Card.Description className="text-xs uppercase tracking-wide text-stone-500">
              Online
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-stone-600">
              Perangkat utama untuk transaksi.
            </p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="space-y-1">
            <Card.Title className="text-base">Printer Struk</Card.Title>
            <Card.Description className="text-xs uppercase tracking-wide text-stone-500">
              Terhubung
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-stone-600">Terhubung ke meja kasir.</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="space-y-1">
            <Card.Title className="text-base">Tablet Pemilik</Card.Title>
            <Card.Description className="text-xs uppercase tracking-wide text-stone-500">
              Sinkron
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-stone-600">
              Digunakan untuk melihat ringkasan toko.
            </p>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}
