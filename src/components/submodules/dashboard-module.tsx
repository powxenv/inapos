import { Card, Chip, Table } from "@heroui/react";

export function DashboardModule() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Dasbor</h3>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-sm font-medium text-stone-600">
              Penjualan hari ini
            </Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">Rp 2.450.000</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-sm font-medium text-stone-600">
              Transaksi
            </Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">73</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="flex items-center justify-between gap-3">
            <Card.Title className="text-sm font-medium text-stone-600">
              Stok menipis
            </Card.Title>
            <Chip color="warning">6 barang</Chip>
          </Card.Header>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="flex items-center justify-between gap-3">
            <Card.Title className="text-sm font-medium text-stone-600">
              Sinkronisasi
            </Card.Title>
            <Chip color="success">Aktif</Chip>
          </Card.Header>
        </Card>
      </div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Tabel dasbor">
            <Table.Header>
              <Table.Column>Item</Table.Column>
              <Table.Column>Nilai</Table.Column>
              <Table.Column>Status</Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Penjualan tunai</Table.Cell>
                <Table.Cell>Rp 1.980.000</Table.Cell>
                <Table.Cell>Normal</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Penjualan QRIS</Table.Cell>
                <Table.Cell>Rp 470.000</Table.Cell>
                <Table.Cell>Normal</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Pelanggan aktif</Table.Cell>
                <Table.Cell>28</Table.Cell>
                <Table.Cell>Ramai</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}
