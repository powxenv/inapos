import { Card } from "@heroui/react";

export function AlertsModule() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Peringatan</h3>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="space-y-1">
            <Card.Title className="text-base">Minyak goreng hampir habis</Card.Title>
            <Card.Description className="text-xs uppercase tracking-wide text-stone-500">
              Stok
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-stone-600">Stok tinggal 4 botol dan perlu dibeli ulang.</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="space-y-1">
            <Card.Title className="text-base">Printer kasir belum tersambung</Card.Title>
            <Card.Description className="text-xs uppercase tracking-wide text-stone-500">
              Perangkat
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-stone-600">Cek koneksi printer struk di meja kasir.</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="space-y-1">
            <Card.Title className="text-base">Ada transaksi tertunda</Card.Title>
            <Card.Description className="text-xs uppercase tracking-wide text-stone-500">
              Kasir
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-stone-600">Satu transaksi belum selesai diproses.</p>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}
