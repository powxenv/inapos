import { Button, Input, Table } from "@heroui/react";

export function ProductListModule() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Daftar Barang</h3>

      <div className="flex flex-wrap items-center gap-3">
        <Input className="max-w-xs" placeholder="Cari barang" />
        <Button className="bg-stone-950 text-stone-50">Tambah barang</Button>
      </div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Tabel daftar barang">
            <Table.Header>
              <Table.Column>Nama Barang</Table.Column>
              <Table.Column>Harga Jual</Table.Column>
              <Table.Column>Modal</Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Gula pasir 1kg</Table.Cell>
                <Table.Cell>Rp 18.000</Table.Cell>
                <Table.Cell>Rp 15.500</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Kopi sachet</Table.Cell>
                <Table.Cell>Rp 2.500</Table.Cell>
                <Table.Cell>Rp 1.900</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Sabun mandi</Table.Cell>
                <Table.Cell>Rp 4.500</Table.Cell>
                <Table.Cell>Rp 3.700</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}
