import { authClient } from "../../auth";
import { useMemo, useState } from "react";
import { Alert, Button, CloseButton, InputGroup, Modal, Table } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/csr/EnvelopeSimple";
import { ShieldCheckIcon } from "@phosphor-icons/react/dist/csr/ShieldCheck";
import { UserIcon } from "@phosphor-icons/react/dist/csr/User";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { useI18n } from "../../lib/i18n";
import {
  type OrganizationDetail,
  type OrganizationRole,
  isOrganizationAdmin,
} from "../../lib/organization";

type UsersModuleProps = {
  currentUserId: string;
  onOrganizationChange: () => Promise<void>;
  organization: OrganizationDetail;
  userRole: OrganizationRole;
};

type InviteUserFormValues = {
  email: string;
  role: "admin" | "member";
};

function roleLabel(role: OrganizationRole, text: ReturnType<typeof useI18n>["text"]) {
  if (role === "owner") {
    return text.modules.users.roleOwner;
  }

  if (role === "admin") {
    return text.modules.users.admin;
  }

  return text.modules.users.roleMember;
}

export function UsersModule({
  currentUserId,
  onOrganizationChange,
  organization,
  userRole,
}: UsersModuleProps) {
  const { formatDate, text } = useI18n();
  const inviteUserSchema = z.object({
    email: z
      .string()
      .trim()
      .min(1, text.modules.users.emailLabel)
      .email(
        text.auth.signIn.emailLabel === "Email address"
          ? text.auth.signIn.schema.email
          : text.auth.signIn.schema.email,
      ),
    role: z.enum(["admin", "member"]),
  });
  const canManageMembers = isOrganizationAdmin(userRole);
  const [formError, setFormError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [pendingActionKey, setPendingActionKey] = useState<string | null>(null);
  const { control, formState, handleSubmit, reset, setValue, watch } =
    useForm<InviteUserFormValues>({
      defaultValues: {
        email: "",
        role: "member",
      },
      resolver: zodResolver(inviteUserSchema),
    });
  const inviteRole = watch("role");
  const members = useMemo(
    () =>
      [...organization.members].sort((left, right) => (left.createdAt > right.createdAt ? 1 : -1)),
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
    const { error } = await authClient.organization.inviteMember({
      email: values.email.trim().toLowerCase(),
      organizationId: organization.id,
      resend: true,
      role: values.role,
    });

    if (error) {
      setPendingActionKey(null);
      setFormError(error.message ?? text.modules.users.inviteErrorDescription);
      return;
    }

    reset();
    setSuccessMessage(text.modules.users.inviteReadyDescription);
    close();
    await refreshOrganization();
  }

  async function handleRoleChange(memberId: string, role: OrganizationRole) {
    setFormError(null);
    setSuccessMessage(null);
    setPendingActionKey(`role:${memberId}:${role}`);

    const { error } = await authClient.organization.updateMemberRole({
      memberId,
      organizationId: organization.id,
      role,
    });

    if (error) {
      setPendingActionKey(null);
      setFormError(error.message ?? text.modules.users.updateRoleError);
      return;
    }

    await refreshOrganization();
  }

  async function handleRemoveMember(memberIdOrEmail: string) {
    setFormError(null);
    setSuccessMessage(null);
    setPendingActionKey(`remove:${memberIdOrEmail}`);

    const { error } = await authClient.organization.removeMember({
      memberIdOrEmail,
      organizationId: organization.id,
    });

    if (error) {
      setPendingActionKey(null);
      setFormError(error.message ?? text.modules.users.removePersonError);
      return;
    }

    await refreshOrganization();
  }

  async function handleCancelInvitation(invitationId: string) {
    setFormError(null);
    setSuccessMessage(null);
    setPendingActionKey(`invitation:${invitationId}`);

    const { error } = await authClient.organization.cancelInvitation({
      invitationId,
    });

    if (error) {
      setPendingActionKey(null);
      setFormError(error.message ?? text.modules.users.cancelInviteError);
      return;
    }

    await refreshOrganization();
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">{text.modules.users.title}</h3>
          <p className="text-sm text-stone-500">
            {canManageMembers ? text.modules.users.bodyCanManage : text.modules.users.bodyReadOnly}
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
              {text.modules.users.addPerson}
            </Button>
            <Modal.Backdrop>
              <Modal.Container placement="center" size="sm">
                <Modal.Dialog aria-label={text.modules.users.inviteSomeoneNew}>
                  {({ close }) => (
                    <>
                      <Modal.Header>
                        <Modal.Heading>{text.modules.users.inviteSomeone}</Modal.Heading>
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
                              {text.modules.users.emailLabel}
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
                                    placeholder={text.modules.users.emailPlaceholder}
                                    type="email"
                                    value={field.value}
                                  />
                                </InputGroup>
                              )}
                            />
                            {formState.errors.email?.message ? (
                              <p className="text-sm text-red-600">
                                {formState.errors.email.message}
                              </p>
                            ) : null}
                          </div>

                          <div className="space-y-2">
                            <p className="text-sm font-medium text-stone-700">Role</p>
                            <div className="flex gap-2">
                              <Button
                                onPress={() => setValue("role", "member")}
                                type="button"
                                variant={inviteRole === "member" ? "primary" : "outline"}
                              >
                                <UserIcon aria-hidden size={16} />
                                {text.modules.users.roleMember}
                              </Button>
                              <Button
                                onPress={() => setValue("role", "admin")}
                                type="button"
                                variant={inviteRole === "admin" ? "primary" : "outline"}
                              >
                                <ShieldCheckIcon aria-hidden size={16} />
                                {text.modules.users.admin}
                              </Button>
                            </div>
                          </div>

                          {formError ? (
                            <Alert status="danger">
                              <Alert.Indicator />
                              <Alert.Content>
                                <Alert.Title>{text.modules.users.inviteErrorTitle}</Alert.Title>
                                <Alert.Description>{formError}</Alert.Description>
                              </Alert.Content>
                              <CloseButton aria-label="Close" onPress={() => setFormError(null)} />
                            </Alert>
                          ) : null}

                          <div className="flex justify-end gap-2">
                            <Button slot="close" type="button" variant="tertiary">
                              {text.common.actions.cancel}
                            </Button>
                            <Button isPending={pendingActionKey === "invite"} type="submit">
                              {text.modules.users.saveInvite}
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
            <Alert.Title>{text.modules.users.inviteReady}</Alert.Title>
            <Alert.Description>{successMessage}</Alert.Description>
          </Alert.Content>
          <CloseButton aria-label="Close" onPress={() => setSuccessMessage(null)} />
        </Alert>
      ) : null}

      {formError ? (
        <Alert status="danger">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>{text.modules.users.thatDidNotWork}</Alert.Title>
            <Alert.Description>{formError}</Alert.Description>
          </Alert.Content>
          <CloseButton aria-label="Close" onPress={() => setFormError(null)} />
        </Alert>
      ) : null}

      <div className="space-y-3">
        <h4 className="text-sm font-medium text-stone-500">{text.modules.users.peopleInStore}</h4>
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label={text.modules.users.tableMembers}>
              <Table.Header>
                <Table.Column isRowHeader>{text.common.labels.name}</Table.Column>
                <Table.Column>{text.common.labels.email}</Table.Column>
                <Table.Column>{text.common.labels.role}</Table.Column>
                <Table.Column>{text.modules.users.status}</Table.Column>
                <Table.Column>{text.common.labels.actions}</Table.Column>
              </Table.Header>
              <Table.Body>
                {members.map((member) => {
                  const isCurrentUser = member.userId === currentUserId;
                  const canEditRole = canManageMembers && member.role !== "owner" && !isCurrentUser;

                  return (
                    <Table.Row key={member.id}>
                      <Table.Cell>{member.user.name}</Table.Cell>
                      <Table.Cell>{member.user.email}</Table.Cell>
                      <Table.Cell>{roleLabel(member.role, text)}</Table.Cell>
                      <Table.Cell>
                        {isCurrentUser ? text.common.states.activeYou : text.common.states.active}
                      </Table.Cell>
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
                                  {text.modules.users.makeAdmin}
                                </Button>
                              ) : null}
                              {member.role !== "member" ? (
                                <Button
                                  isPending={pendingActionKey === `role:${member.id}:member`}
                                  onPress={() => void handleRoleChange(member.id, "member")}
                                  size="sm"
                                  variant="outline"
                                >
                                  {text.modules.users.makeMember}
                                </Button>
                              ) : null}
                              <Button
                                isPending={pendingActionKey === `remove:${member.id}`}
                                onPress={() => void handleRemoveMember(member.id)}
                                size="sm"
                                variant="danger"
                              >
                                {text.common.actions.remove}
                              </Button>
                            </>
                          ) : (
                            <span className="text-sm text-stone-400">
                              {member.role === "owner"
                                ? text.modules.users.ownerLocked
                                : text.modules.users.adminsOnly}
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
        <h4 className="text-sm font-medium text-stone-500">{text.modules.users.pendingInvites}</h4>
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label={text.modules.users.tableInvites}>
              <Table.Header>
                <Table.Column isRowHeader>{text.common.labels.email}</Table.Column>
                <Table.Column>{text.common.labels.role}</Table.Column>
                <Table.Column>{text.common.labels.expires}</Table.Column>
                <Table.Column>{text.modules.users.status}</Table.Column>
                <Table.Column>{text.common.labels.actions}</Table.Column>
              </Table.Header>
              <Table.Body>
                {invitations.length > 0 ? (
                  invitations.map((invitation) => (
                    <Table.Row key={invitation.id}>
                      <Table.Cell>{invitation.email}</Table.Cell>
                      <Table.Cell>{roleLabel(invitation.role, text)}</Table.Cell>
                      <Table.Cell>
                        {formatDate(invitation.expiresAt, {
                          dateStyle: "medium",
                          timeStyle: "short",
                        })}
                      </Table.Cell>
                      <Table.Cell>{invitation.status}</Table.Cell>
                      <Table.Cell>
                        {canManageMembers ? (
                          <Button
                            isPending={pendingActionKey === `invitation:${invitation.id}`}
                            onPress={() => void handleCancelInvitation(invitation.id)}
                            size="sm"
                            variant="outline"
                          >
                            {text.modules.users.cancelInvite}
                          </Button>
                        ) : (
                          <span className="text-sm text-stone-400">
                            {text.modules.users.adminsOnly}
                          </span>
                        )}
                      </Table.Cell>
                    </Table.Row>
                  ))
                ) : (
                  <Table.Row>
                    <Table.Cell>{text.modules.users.emptyInvites}</Table.Cell>
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
