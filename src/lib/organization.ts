import { authClient } from "../auth";
import { useEffect, useRef, useState } from "react";

type SessionHookResult = ReturnType<typeof authClient.useSession>;
type AuthUser = NonNullable<SessionHookResult["data"]>["user"];
export type OrganizationRole = "admin" | "member" | "owner";
type OrganizationSummary = {
  id: string;
  name: string;
  slug: string;
  createdAt: Date;
  logo?: string | null;
  metadata?: unknown;
};

export type OrganizationDetail = OrganizationSummary & {
  members: Array<{
    id: string;
    organizationId: string;
    role: OrganizationRole;
    createdAt: Date;
    userId: string;
    user: {
      id: string;
      email: string;
      name: string;
      image?: string;
    };
  }>;
  invitations: Array<{
    id: string;
    organizationId: string;
    email: string;
    role: OrganizationRole;
    status: string;
    inviterId: string;
    expiresAt: Date;
    createdAt: Date;
  }>;
};

type OrganizationGateState =
  | {
      status: "loading" | "activating";
      message?: string;
    }
  | {
      status: "signed-out";
    }
  | {
      status: "error";
      message: string;
      retry: () => Promise<void>;
    }
  | {
      status: "needs-organization";
      user: AuthUser;
    }
  | {
      status: "ready";
      user: AuthUser;
      organization: OrganizationDetail;
      organizations: OrganizationSummary[];
      refresh: () => Promise<void>;
    };

export function getOrganizationMember(organization: OrganizationDetail, userId: string) {
  return organization.members.find((member) => member.userId === userId) ?? null;
}

export function isOrganizationAdmin(role: OrganizationRole | null | undefined) {
  return role === "owner" || role === "admin";
}

export function slugifyOrganizationName(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 32);
}

export function createRandomOrganizationSlug(name: string) {
  const base = slugifyOrganizationName(name) || "store";
  const randomPart = Math.random().toString(36).slice(2, 8);

  return `${base}-${randomPart}`.slice(0, 48);
}

export function useOrganizationGate(requestedOrganizationSlug?: string): OrganizationGateState {
  const session = authClient.useSession();
  const activeOrganization = authClient.useActiveOrganization();
  const organizations = authClient.useListOrganizations();
  const activationAttemptRef = useRef<string | null>(null);
  const [activationErrorMessage, setActivationErrorMessage] = useState<string | null>(null);
  const [isActivating, setIsActivating] = useState(false);

  useEffect(() => {
    if (session.isPending || !session.data?.session) {
      return;
    }

    if (organizations.isPending || activeOrganization.isPending) {
      return;
    }

    if (
      activeOrganization.data &&
      (!requestedOrganizationSlug || activeOrganization.data.slug === requestedOrganizationSlug)
    ) {
      activationAttemptRef.current = null;
      setActivationErrorMessage(null);
      setIsActivating(false);
      return;
    }

    const targetOrganization = requestedOrganizationSlug
      ? organizations.data?.find((organization) => organization.slug === requestedOrganizationSlug)
      : organizations.data?.[0];

    if (!targetOrganization) {
      setIsActivating(false);
      return;
    }

    if (activationAttemptRef.current === targetOrganization.id) {
      return;
    }

    activationAttemptRef.current = targetOrganization.id;
    setActivationErrorMessage(null);
    setIsActivating(true);

    void authClient.organization
      .setActive({
        organizationId: targetOrganization.id,
      })
      .then(async ({ error }: { error?: { message?: string } | null }) => {
        if (error) {
          activationAttemptRef.current = null;
          setActivationErrorMessage(error.message ?? "We couldn't open this store.");
          setIsActivating(false);
          return;
        }

        await Promise.all([
          session.refetch(),
          activeOrganization.refetch(),
          organizations.refetch(),
        ]);

        setIsActivating(false);
      })
      .catch((error: unknown) => {
        activationAttemptRef.current = null;
        setActivationErrorMessage(
          error instanceof Error ? error.message : "We couldn't open this store.",
        );
        setIsActivating(false);
      });
  }, [
    activeOrganization,
    organizations,
    session,
    activeOrganization.data,
    activeOrganization.isPending,
    organizations.data,
    organizations.isPending,
    requestedOrganizationSlug,
    session.data?.session,
    session.isPending,
  ]);

  const retry = async () => {
    activationAttemptRef.current = null;
    setActivationErrorMessage(null);
    await Promise.all([session.refetch(), activeOrganization.refetch(), organizations.refetch()]);
  };

  if (session.isPending || organizations.isPending || activeOrganization.isPending) {
    return {
      status: "loading",
      message: "Checking your store access...",
    };
  }

  if (!session.data?.session || !session.data.user) {
    return {
      status: "signed-out",
    };
  }

  if (session.error || organizations.error || activeOrganization.error) {
    return {
      status: "error",
      message:
        session.error?.message ??
        organizations.error?.message ??
        activeOrganization.error?.message ??
        "We couldn't load your store details.",
      retry,
    };
  }

  if (activationErrorMessage) {
    return {
      status: "error",
      message: activationErrorMessage,
      retry,
    };
  }

  if (
    requestedOrganizationSlug &&
    !(organizations.data ?? []).some(
      (organization) => organization.slug === requestedOrganizationSlug,
    )
  ) {
    return {
      status: "error",
      message: "This store couldn't be found, or you don't have access to it.",
      retry,
    };
  }

  if (activeOrganization.data) {
    return {
      status: "ready",
      user: session.data.user,
      organization: activeOrganization.data,
      organizations: organizations.data ?? [],
      refresh: retry,
    };
  }

  if ((organizations.data?.length ?? 0) > 0 || isActivating) {
    return {
      status: "activating",
      message: "Opening your store...",
    };
  }

  return {
    status: "needs-organization",
    user: session.data.user,
  };
}
