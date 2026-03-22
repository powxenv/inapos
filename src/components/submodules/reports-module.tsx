import { Button, Card } from "@heroui/react";

export function ReportsModule() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-semibold">Laporan</h3>
        <div className="flex flex-wrap gap-3">
          <Button className="bg-stone-950 text-stone-50">Buat laporan</Button>
          <Button className="border border-stone-200 bg-white text-stone-900">Cetak</Button>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-base">Laporan penjualan</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-stone-600">Rekap penjualan per hari, minggu, atau bulan.</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-base">Laporan stok</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-stone-600">Melihat stok masuk, keluar, dan stok menipis.</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-base">Laporan pengeluaran</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-stone-600">Melihat pengeluaran operasional toko.</p>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}
