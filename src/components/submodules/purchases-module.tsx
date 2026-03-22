import { Button, Input, Table } from "@heroui/react";

export function PurchasesModule() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Belanja Stok</h3>

      <div className="flex flex-wrap items-center gap-3">
        <Input className="max-w-xs" placeholder="Cari pembelian" />
        <Button className="bg-stone-950 text-stone-50">Catat pembelian</Button>
      </div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Tabel pembelian">
            <Table.Header>
              <Table.Column>Tanggal</Table.Column>
              <Table.Column>Pemasok</Table.Column>
              <Table.Column>Total</Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>22 Mar 2026</Table.Cell>
                <Table.Cell>CV Sumber Jaya</Table.Cell>
                <Table.Cell>Rp 850.000</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>21 Mar 2026</Table.Cell>
                <Table.Cell>UD Maju Lancar</Table.Cell>
                <Table.Cell>Rp 1.250.000</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>20 Mar 2026</Table.Cell>
                <Table.Cell>Toko Grosir Kita</Table.Cell>
                <Table.Cell>Rp 620.000</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}
