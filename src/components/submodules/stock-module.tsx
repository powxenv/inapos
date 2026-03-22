import { Button, Card, Chip, Input, Table } from "@heroui/react";

export function StockModule() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Stok</h3>

      <div className="flex flex-wrap items-center gap-3">
        <Input className="max-w-xs" placeholder="Cari stok" />
        <Button className="bg-stone-950 text-stone-50">Sesuaikan stok</Button>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-sm font-medium text-stone-600">
              Total barang
            </Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">186</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="flex items-center justify-between gap-3">
            <Card.Title className="text-sm font-medium text-stone-600">
              Stok menipis
            </Card.Title>
            <Chip color="warning">6</Chip>
          </Card.Header>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="flex items-center justify-between gap-3">
            <Card.Title className="text-sm font-medium text-stone-600">
              Habis
            </Card.Title>
            <Chip color="danger">2</Chip>
          </Card.Header>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header className="flex items-center justify-between gap-3">
            <Card.Title className="text-sm font-medium text-stone-600">
              Aman
            </Card.Title>
            <Chip color="success">178</Chip>
          </Card.Header>
        </Card>
      </div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Tabel stok">
            <Table.Header>
              <Table.Column>Barang</Table.Column>
              <Table.Column>Stok</Table.Column>
              <Table.Column>Keterangan</Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Beras 5kg</Table.Cell>
                <Table.Cell>12</Table.Cell>
                <Table.Cell>Aman</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Minyak goreng 1L</Table.Cell>
                <Table.Cell>4</Table.Cell>
                <Table.Cell>Menipis</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Telur ayam</Table.Cell>
                <Table.Cell>9 rak</Table.Cell>
                <Table.Cell>Baru masuk</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}
