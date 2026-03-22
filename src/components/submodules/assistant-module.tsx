import { Button, Card, Input, TextArea } from "@heroui/react";

export function AssistantModule() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Asisten</h3>

      <div className="space-y-3">
        <Input placeholder="Tanya sesuatu tentang toko" />
        <TextArea placeholder="Contoh: barang apa yang perlu saya restok besok?" />
        <div className="flex flex-wrap gap-3">
          <Button className="bg-stone-950 text-stone-50">Kirim</Button>
          <Button className="border border-stone-200 bg-white text-stone-900">
            Ringkas hari ini
          </Button>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-base">Ringkasan harian</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-stone-600">Merangkum penjualan dan pengeluaran hari ini.</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-base">Saran restok</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-stone-600">Memberi saran barang yang perlu dibeli ulang.</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-base">Bantuan penggunaan</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-stone-600">Membantu memahami menu-menu utama aplikasi.</p>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}
