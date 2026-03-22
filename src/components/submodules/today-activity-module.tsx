import { Table } from "@heroui/react";

export function TodayActivityModule() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Aktivitas Hari Ini</h3>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Tabel aktivitas hari ini">
            <Table.Header>
              <Table.Column>Waktu</Table.Column>
              <Table.Column>Aktivitas</Table.Column>
              <Table.Column>Keterangan</Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>08:15</Table.Cell>
                <Table.Cell>Transaksi</Table.Cell>
                <Table.Cell>Penjualan pertama hari ini</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>10:20</Table.Cell>
                <Table.Cell>Belanja stok</Table.Cell>
                <Table.Cell>Menerima telur dan minyak</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>12:05</Table.Cell>
                <Table.Cell>Promo</Table.Cell>
                <Table.Cell>Diskon mie instan aktif</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}
