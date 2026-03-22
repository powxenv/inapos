import { Button, Card, Input, Table } from "@heroui/react";

export function CashierModule() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Kasir</h3>

      <div className="flex flex-wrap items-center gap-3">
        <Input className="max-w-xs" placeholder="Cari barang" />
        <Button className="bg-stone-950 text-stone-50">Transaksi baru</Button>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-sm font-medium text-stone-600">
              Subtotal
            </Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">Rp 129.500</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-sm font-medium text-stone-600">
              Diskon
            </Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">Rp 5.000</p>
          </Card.Content>
        </Card>
        <Card className="border border-stone-200 shadow-none">
          <Card.Header>
            <Card.Title className="text-sm font-medium text-stone-600">
              Total bayar
            </Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xl font-semibold text-stone-950">Rp 124.500</p>
          </Card.Content>
        </Card>
      </div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Tabel kasir">
            <Table.Header>
              <Table.Column>Barang</Table.Column>
              <Table.Column>Qty</Table.Column>
              <Table.Column>Subtotal</Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Beras 5kg</Table.Cell>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>Rp 78.000</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Minyak goreng 1L</Table.Cell>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>Rp 34.000</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Mie instan</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>Rp 17.500</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}
