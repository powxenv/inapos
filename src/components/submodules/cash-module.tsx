import { Button, Card, Table } from "@heroui/react";

export function CashModule() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-semibold">Kas</h3>
        <div className="flex flex-wrap gap-3">
          <Button className="bg-stone-950 text-stone-50">Buka kas</Button>
          <Button className="border border-stone-200 bg-white text-stone-900">
            Tutup kas
          </Button>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-sm font-medium text-stone-600">
              Saldo awal
            </Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">Rp 500.000</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-sm font-medium text-stone-600">
              Masuk hari ini
            </Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">Rp 1.980.000</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-sm font-medium text-stone-600">
              Keluar hari ini
            </Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">Rp 320.000</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-sm font-medium text-stone-600">
              Saldo akhir
            </Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">Rp 2.160.000</p>
          </Card.Content>
        </Card>
      </div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Tabel kas">
            <Table.Header>
              <Table.Column>Tanggal</Table.Column>
              <Table.Column>Keterangan</Table.Column>
              <Table.Column>Nominal</Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>22 Mar 2026</Table.Cell>
                <Table.Cell>Saldo awal</Table.Cell>
                <Table.Cell>Rp 500.000</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>22 Mar 2026</Table.Cell>
                <Table.Cell>Penjualan tunai</Table.Cell>
                <Table.Cell>Rp 1.980.000</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>22 Mar 2026</Table.Cell>
                <Table.Cell>Setor kas</Table.Cell>
                <Table.Cell>Rp 1.200.000</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}
