import { authClient } from "../../auth";
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

type UsersModuleProps = {
  currentUserId: string;
  onOrganizationChange: () => Promise<void>;
  organization: OrganizationDetail;
  userRole: OrganizationRole;
};

const inviteUserSchema = z.object({
  email: z.string().trim().min(1, "Enter an email address.").email("Enter a valid email address."),
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

  return "Team member";
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
      setFormError(error.message ?? "We couldn't create this invite.");
      return;
    }

    reset();
    setSuccessMessage("The invite is ready. It will stay here until the person joins.");
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
      setFormError(error.message ?? "We couldn't change this role.");
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
      setFormError(error.message ?? "We couldn't remove this person.");
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
      setFormError(error.message ?? "We couldn't cancel this invite.");
      return;
    }

    await refreshOrganization();
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">Team</h3>
          <p className="text-sm text-stone-500">
            {canManageMembers
              ? "Invite people to this store and choose what they can manage."
              : "You can view the people in this store, but you can’t make changes."}
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
              Add person
            </Button>
            <Modal.Backdrop>
              <Modal.Container placement="center" size="sm">
                <Modal.Dialog aria-label="Invite someone new">
                  {({ close }) => (
                    <>
                      <Modal.Header>
                        <Modal.Heading>Invite someone</Modal.Heading>
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
                              Email address
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
                                    placeholder="team@yourstore.com"
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
                                Team member
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
                                <Alert.Title>Invite failed</Alert.Title>
                                <Alert.Description>{formError}</Alert.Description>
                              </Alert.Content>
                            </Alert>
                          ) : null}

                          <div className="flex justify-end gap-2">
                            <Button slot="close" type="button" variant="tertiary">
                              Cancel
                            </Button>
                            <Button isPending={pendingActionKey === "invite"} type="submit">
                              Save invite
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
            <Alert.Title>Invite ready</Alert.Title>
            <Alert.Description>{successMessage}</Alert.Description>
          </Alert.Content>
        </Alert>
      ) : null}

      {formError ? (
        <Alert status="danger">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>That didn’t work</Alert.Title>
            <Alert.Description>{formError}</Alert.Description>
          </Alert.Content>
        </Alert>
      ) : null}

      <div className="space-y-3">
        <h4 className="text-sm font-medium text-stone-500">People in this store</h4>
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="Store members">
              <Table.Header>
                <Table.Column isRowHeader>Name</Table.Column>
                <Table.Column>Email</Table.Column>
                <Table.Column>Role</Table.Column>
                <Table.Column>Status</Table.Column>
                <Table.Column>Actions</Table.Column>
              </Table.Header>
              <Table.Body>
                {members.map((member) => {
                  const isCurrentUser = member.userId === currentUserId;
                  const canEditRole = canManageMembers && member.role !== "owner" && !isCurrentUser;

                  return (
                    <Table.Row key={member.id}>
                      <Table.Cell>{member.user.name}</Table.Cell>
                      <Table.Cell>{member.user.email}</Table.Cell>
                      <Table.Cell>{roleLabel(member.role)}</Table.Cell>
                      <Table.Cell>{isCurrentUser ? "Active (you)" : "Active"}</Table.Cell>
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
                                  Make admin
                                </Button>
                              ) : null}
                              {member.role !== "member" ? (
                                <Button
                                  isPending={pendingActionKey === `role:${member.id}:member`}
                                  onPress={() => void handleRoleChange(member.id, "member")}
                                  size="sm"
                                  variant="outline"
                                >
                                  Make team member
                                </Button>
                              ) : null}
                              <Button
                                isPending={pendingActionKey === `remove:${member.id}`}
                                onPress={() => void handleRemoveMember(member.id)}
                                size="sm"
                                variant="danger"
                              >
                                Remove
                              </Button>
                            </>
                          ) : (
                            <span className="text-sm text-stone-400">
                              {member.role === "owner"
                                ? "The owner can’t be changed"
                                : "Only admins can make changes"}
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
        <h4 className="text-sm font-medium text-stone-500">Pending invites</h4>
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="Pending invites">
              <Table.Header>
                <Table.Column isRowHeader>Email</Table.Column>
                <Table.Column>Role</Table.Column>
                <Table.Column>Expires</Table.Column>
                <Table.Column>Status</Table.Column>
                <Table.Column>Actions</Table.Column>
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
                            Cancel invite
                          </Button>
                        ) : (
                          <span className="text-sm text-stone-400">
                            Only admins can make changes
                          </span>
                        )}
                      </Table.Cell>
                    </Table.Row>
                  ))
                ) : (
                  <Table.Row>
                    <Table.Cell>No pending invites</Table.Cell>
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
