import { useMemo, useState } from "react";
import { Alert, Button, InputGroup, Modal, Table } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/csr/EnvelopeSimple";
import { ShieldCheckIcon } from "@phosphor-icons/react/dist/csr/ShieldCheck";
import { UserIcon } from "@phosphor-icons/react/dist/csr/User";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import {
  type OrganizationDetail,
  type OrganizationRole,
  isOrganizationAdmin,
} from "../../lib/organization";
import { neon } from "../../lib/powersync";

type UsersModuleProps = {
  currentUserId: string;
  onOrganizationChange: () => Promise<void>;
  organization: OrganizationDetail;
  userRole: OrganizationRole;
};

type OrganizationMembersAuth = typeof neon.auth & {
  organization: {
    cancelInvitation: (input: { invitationId: string }) => Promise<{
      error?: { message?: string } | null;
    }>;
    inviteMember: (input: {
      email: string;
      role: OrganizationRole;
      organizationId?: string;
      resend?: boolean;
    }) => Promise<{
      data?: { id?: string | null } | null;
      error?: { message?: string } | null;
    }>;
    removeMember: (input: {
      memberIdOrEmail: string;
      organizationId?: string;
    }) => Promise<{
      error?: { message?: string } | null;
    }>;
    updateMemberRole: (input: {
      memberId: string;
      role: OrganizationRole;
      organizationId?: string;
    }) => Promise<{
      error?: { message?: string } | null;
    }>;
  };
};

const organizationAuth = neon.auth as OrganizationMembersAuth;

const inviteUserSchema = z.object({
  email: z.string().trim().min(1, "Email wajib diisi.").email("Format email tidak valid."),
  role: z.enum(["admin", "member"]),
});

type InviteUserFormValues = z.infer<typeof inviteUserSchema>;

function roleLabel(role: OrganizationRole) {
  if (role === "owner") {
    return "Owner";
  }

  if (role === "admin") {
    return "Admin";
  }

  return "Member";
}

function formatInvitationExpiry(value: Date) {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function UsersModule({
  currentUserId,
  onOrganizationChange,
  organization,
  userRole,
}: UsersModuleProps) {
  const canManageMembers = isOrganizationAdmin(userRole);
  const [formError, setFormError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [pendingActionKey, setPendingActionKey] = useState<string | null>(null);
  const { control, formState, handleSubmit, reset, setValue, watch } = useForm<InviteUserFormValues>({
    defaultValues: {
      email: "",
      role: "member",
    },
    resolver: zodResolver(inviteUserSchema),
  });
  const inviteRole = watch("role");
  const members = useMemo(
    () => [...organization.members].sort((left, right) => left.createdAt > right.createdAt ? 1 : -1),
    [organization.members],
  );
  const invitations = useMemo(
    () =>
      [...organization.invitations]
        .filter((invitation) => invitation.status === "pending")
        .sort((left, right) => (left.createdAt < right.createdAt ? 1 : -1)),
    [organization.invitations],
  );

  async function refreshOrganization() {
    setPendingActionKey(null);
    await onOrganizationChange();
  }

  async function handleInvite(values: InviteUserFormValues, close: () => void) {
    setFormError(null);
    setSuccessMessage(null);

    setPendingActionKey("invite");
    const { error } = await organizationAuth.organization.inviteMember({
      email: values.email.trim().toLowerCase(),
      organizationId: organization.id,
      resend: true,
      role: values.role,
    });

    if (error) {
      setPendingActionKey(null);
      setFormError(error.message ?? "Gagal mengirim undangan.");
      return;
    }

    reset();
    setSuccessMessage(
      "Undangan tersimpan. Neon Auth beta belum mengirim email otomatis, jadi status undangan muncul di daftar pending.",
    );
    close();
    await refreshOrganization();
  }

  async function handleRoleChange(memberId: string, role: OrganizationRole) {
    setFormError(null);
    setSuccessMessage(null);
    setPendingActionKey(`role:${memberId}:${role}`);

    const { error } = await organizationAuth.organization.updateMemberRole({
      memberId,
      organizationId: organization.id,
      role,
    });

    if (error) {
      setPendingActionKey(null);
      setFormError(error.message ?? "Gagal mengubah peran anggota.");
      return;
    }

    await refreshOrganization();
  }

  async function handleRemoveMember(memberIdOrEmail: string) {
    setFormError(null);
    setSuccessMessage(null);
    setPendingActionKey(`remove:${memberIdOrEmail}`);

    const { error } = await organizationAuth.organization.removeMember({
      memberIdOrEmail,
      organizationId: organization.id,
    });

    if (error) {
      setPendingActionKey(null);
      setFormError(error.message ?? "Gagal mengeluarkan anggota.");
      return;
    }

    await refreshOrganization();
  }

  async function handleCancelInvitation(invitationId: string) {
    setFormError(null);
    setSuccessMessage(null);
    setPendingActionKey(`invitation:${invitationId}`);

    const { error } = await organizationAuth.organization.cancelInvitation({
      invitationId,
    });

    if (error) {
      setPendingActionKey(null);
      setFormError(error.message ?? "Gagal membatalkan undangan.");
      return;
    }

    await refreshOrganization();
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">Pengguna</h3>
          <p className="text-sm text-stone-500">
            {canManageMembers
              ? "Undang admin atau member baru, lalu atur peran pengguna toko ini."
              : "Anda hanya dapat melihat daftar anggota toko ini."}
          </p>
        </div>
        {canManageMembers ? (
          <Modal>
            <Button
              onPress={() => {
                setFormError(null);
                setSuccessMessage(null);
                reset();
              }}
            >
              Tambah pengguna
            </Button>
            <Modal.Backdrop>
              <Modal.Container placement="center" size="sm">
                <Modal.Dialog aria-label="Undang pengguna baru">
                  {({ close }) => (
                    <>
                      <Modal.Header>
                        <Modal.Heading>Undang pengguna</Modal.Heading>
                      </Modal.Header>
                      <Modal.Body>
                        <form
                          className="space-y-4"
                          onSubmit={handleSubmit(async (values) => {
                            await handleInvite(values, close);
                          })}
                        >
                          <div className="space-y-2">
                            <label
                              className="block text-sm font-medium text-stone-700"
                              htmlFor="invite-user-email"
                            >
                              Email pengguna
                            </label>
                            <Controller
                              control={control}
                              name="email"
                              render={({ field, fieldState }) => (
                                <InputGroup
                                  className="w-full"
                                  isInvalid={fieldState.invalid || Boolean(formError)}
                                >
                                  <InputGroup.Prefix className="text-stone-400">
                                    <EnvelopeSimpleIcon aria-hidden size={18} />
                                  </InputGroup.Prefix>
                                  <InputGroup.Input
                                    aria-invalid={fieldState.invalid || Boolean(formError)}
                                    id="invite-user-email"
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    placeholder="pegawai@contoh.com"
                                    type="email"
                                    value={field.value}
                                  />
                                </InputGroup>
                              )}
                            />
                            {formState.errors.email?.message ? (
                              <p className="text-sm text-red-600">{formState.errors.email.message}</p>
                            ) : null}
                          </div>

                          <div className="space-y-2">
                            <p className="text-sm font-medium text-stone-700">Peran</p>
                            <div className="flex gap-2">
                              <Button
                                onPress={() => setValue("role", "member")}
                                type="button"
                                variant={inviteRole === "member" ? "primary" : "outline"}
                              >
                                <UserIcon aria-hidden size={16} />
                                Member
                              </Button>
                              <Button
                                onPress={() => setValue("role", "admin")}
                                type="button"
                                variant={inviteRole === "admin" ? "primary" : "outline"}
                              >
                                <ShieldCheckIcon aria-hidden size={16} />
                                Admin
                              </Button>
                            </div>
                          </div>

                          {formError ? (
                            <Alert status="danger">
                              <Alert.Indicator />
                              <Alert.Content>
                                <Alert.Title>Undangan gagal</Alert.Title>
                                <Alert.Description>{formError}</Alert.Description>
                              </Alert.Content>
                            </Alert>
                          ) : null}

                          <div className="flex justify-end gap-2">
                            <Button slot="close" type="button" variant="tertiary">
                              Batal
                            </Button>
                            <Button isPending={pendingActionKey === "invite"} type="submit">
                              Kirim undangan
                            </Button>
                          </div>
                        </form>
                      </Modal.Body>
                    </>
                  )}
                </Modal.Dialog>
              </Modal.Container>
            </Modal.Backdrop>
          </Modal>
        ) : null}
      </div>

      {successMessage ? (
        <Alert>
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>Undangan dibuat</Alert.Title>
            <Alert.Description>{successMessage}</Alert.Description>
          </Alert.Content>
        </Alert>
      ) : null}

      {formError ? (
        <Alert status="danger">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>Aksi tidak berhasil</Alert.Title>
            <Alert.Description>{formError}</Alert.Description>
          </Alert.Content>
        </Alert>
      ) : null}

      <div className="space-y-3">
        <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-stone-500">
          Anggota toko
        </h4>
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="Daftar anggota toko">
              <Table.Header>
                <Table.Column isRowHeader>Nama</Table.Column>
                <Table.Column>Email</Table.Column>
                <Table.Column>Peran</Table.Column>
                <Table.Column>Status</Table.Column>
                <Table.Column>Aksi</Table.Column>
              </Table.Header>
              <Table.Body>
                {members.map((member) => {
                  const isCurrentUser = member.userId === currentUserId;
                  const canEditRole =
                    canManageMembers &&
                    member.role !== "owner" &&
                    !isCurrentUser;

                  return (
                    <Table.Row key={member.id}>
                      <Table.Cell>{member.user.name}</Table.Cell>
                      <Table.Cell>{member.user.email}</Table.Cell>
                      <Table.Cell>{roleLabel(member.role)}</Table.Cell>
                      <Table.Cell>{isCurrentUser ? "Aktif (Anda)" : "Aktif"}</Table.Cell>
                      <Table.Cell>
                        <div className="flex flex-wrap gap-2">
                          {canEditRole ? (
                            <>
                              {member.role !== "admin" ? (
                                <Button
                                  isPending={pendingActionKey === `role:${member.id}:admin`}
                                  onPress={() => void handleRoleChange(member.id, "admin")}
                                  size="sm"
                                  variant="outline"
                                >
                                  Jadikan admin
                                </Button>
                              ) : null}
                              {member.role !== "member" ? (
                                <Button
                                  isPending={pendingActionKey === `role:${member.id}:member`}
                                  onPress={() => void handleRoleChange(member.id, "member")}
                                  size="sm"
                                  variant="outline"
                                >
                                  Jadikan member
                                </Button>
                              ) : null}
                              <Button
                                isPending={pendingActionKey === `remove:${member.id}`}
                                onPress={() => void handleRemoveMember(member.id)}
                                size="sm"
                                variant="danger"
                              >
                                Keluarkan
                              </Button>
                            </>
                          ) : (
                            <span className="text-sm text-stone-400">
                              {member.role === "owner"
                                ? "Owner tidak dapat diubah"
                                : "Hanya admin yang dapat mengelola"}
                            </span>
                          )}
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-stone-500">
          Undangan pending
        </h4>
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="Daftar undangan pengguna">
              <Table.Header>
                <Table.Column isRowHeader>Email</Table.Column>
                <Table.Column>Peran</Table.Column>
                <Table.Column>Kedaluwarsa</Table.Column>
                <Table.Column>Status</Table.Column>
                <Table.Column>Aksi</Table.Column>
              </Table.Header>
              <Table.Body>
                {invitations.length > 0 ? (
                  invitations.map((invitation) => (
                    <Table.Row key={invitation.id}>
                      <Table.Cell>{invitation.email}</Table.Cell>
                      <Table.Cell>{roleLabel(invitation.role)}</Table.Cell>
                      <Table.Cell>{formatInvitationExpiry(invitation.expiresAt)}</Table.Cell>
                      <Table.Cell>{invitation.status}</Table.Cell>
                      <Table.Cell>
                        {canManageMembers ? (
                          <Button
                            isPending={pendingActionKey === `invitation:${invitation.id}`}
                            onPress={() => void handleCancelInvitation(invitation.id)}
                            size="sm"
                            variant="outline"
                          >
                            Batalkan
                          </Button>
                        ) : (
                          <span className="text-sm text-stone-400">Hanya admin yang dapat mengelola</span>
                        )}
                      </Table.Cell>
                    </Table.Row>
                  ))
                ) : (
                  <Table.Row>
                    <Table.Cell>Tidak ada undangan pending</Table.Cell>
                    <Table.Cell>-</Table.Cell>
                    <Table.Cell>-</Table.Cell>
                    <Table.Cell>-</Table.Cell>
                    <Table.Cell>-</Table.Cell>
                  </Table.Row>
                )}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </div>
  );
}
