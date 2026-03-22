import { Button, Input, Table } from "@heroui/react";

export function ExpensesModule() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Pengeluaran</h3>

      <div className="flex flex-wrap items-center gap-3">
        <Input className="max-w-xs" placeholder="Cari pengeluaran" />
        <Button className="bg-stone-950 text-stone-50">Tambah pengeluaran</Button>
      </div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Tabel pengeluaran">
            <Table.Header>
              <Table.Column>Tanggal</Table.Column>
              <Table.Column>Keperluan</Table.Column>
              <Table.Column>Nominal</Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>22 Mar 2026</Table.Cell>
                <Table.Cell>Listrik</Table.Cell>
                <Table.Cell>Rp 150.000</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>22 Mar 2026</Table.Cell>
                <Table.Cell>Transport ambil barang</Table.Cell>
                <Table.Cell>Rp 40.000</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>21 Mar 2026</Table.Cell>
                <Table.Cell>Kantong plastik</Table.Cell>
                <Table.Cell>Rp 85.000</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}
