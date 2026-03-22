import { Button, Table } from "@heroui/react";

export function UsersModule() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-semibold">Pengguna</h3>
        <Button className="bg-stone-950 text-stone-50">Tambah pengguna</Button>
      </div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Tabel pengguna">
            <Table.Header>
              <Table.Column>Nama</Table.Column>
              <Table.Column>Peran</Table.Column>
              <Table.Column>Status</Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Abin</Table.Cell>
                <Table.Cell>Pemilik</Table.Cell>
                <Table.Cell>Aktif</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Rina</Table.Cell>
                <Table.Cell>Kasir</Table.Cell>
                <Table.Cell>Aktif</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Dodi</Table.Cell>
                <Table.Cell>Admin</Table.Cell>
                <Table.Cell>Aktif</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}
