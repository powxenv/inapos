import { Button, Card, Input } from "@heroui/react";

export function SuppliersModule() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Pemasok</h3>

      <div className="flex flex-wrap items-center gap-3">
        <Input className="max-w-xs" placeholder="Cari pemasok" />
        <Button className="bg-stone-950 text-stone-50">Tambah pemasok</Button>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="space-y-1">
            <Card.Title className="text-base">CV Sumber Jaya</Card.Title>
            <Card.Description className="text-xs uppercase tracking-wide text-stone-500">
              0813-xxxx-111
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-stone-600">Pemasok sembako utama.</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="space-y-1">
            <Card.Title className="text-base">UD Maju Lancar</Card.Title>
            <Card.Description className="text-xs uppercase tracking-wide text-stone-500">
              0813-xxxx-222
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-stone-600">Pemasok minuman dan snack.</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="space-y-1">
            <Card.Title className="text-base">Toko Grosir Kita</Card.Title>
            <Card.Description className="text-xs uppercase tracking-wide text-stone-500">
              0813-xxxx-333
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-stone-600">
              Pemasok kebutuhan harian toko.
            </p>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}
