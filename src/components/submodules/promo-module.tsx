import { Button, Card } from "@heroui/react";

export function PromoModule() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-semibold">Promo</h3>
        <Button className="bg-stone-950 text-stone-50">Promo baru</Button>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="space-y-1">
            <Card.Title className="text-base">Diskon kopi sachet</Card.Title>
            <Card.Description className="text-xs uppercase tracking-wide text-stone-500">
              Aktif
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-stone-600">Harga promo berlaku 1-7 April.</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="space-y-1">
            <Card.Title className="text-base">Paket hemat sarapan</Card.Title>
            <Card.Description className="text-xs uppercase tracking-wide text-stone-500">
              Aktif
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-stone-600">Berlaku setiap pagi untuk roti dan kopi.</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="space-y-1">
            <Card.Title className="text-base">Harga grosir mie</Card.Title>
            <Card.Description className="text-xs uppercase tracking-wide text-stone-500">
              Jadwal
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-stone-600">Khusus pembelian dalam jumlah banyak.</p>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}
