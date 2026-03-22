import { Button, Input, Table } from "@heroui/react";

export function OrdersModule() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Pesanan</h3>

      <div className="flex flex-wrap items-center gap-3">
        <Input className="max-w-xs" placeholder="Cari pesanan" />
        <Button className="bg-stone-950 text-stone-50">Pesanan baru</Button>
      </div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Tabel pesanan">
            <Table.Header>
              <Table.Column>No. Pesanan</Table.Column>
              <Table.Column>Pelanggan</Table.Column>
              <Table.Column>Status</Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>ORD-0012</Table.Cell>
                <Table.Cell>Ibu Rina</Table.Cell>
                <Table.Cell>Diproses</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>ORD-0013</Table.Cell>
                <Table.Cell>Pak Dodi</Table.Cell>
                <Table.Cell>Siap diambil</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>ORD-0014</Table.Cell>
                <Table.Cell>Toko Berkah</Table.Cell>
                <Table.Cell>Selesai</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}
