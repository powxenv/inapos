import { authClient } from "../auth";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "./i18n";

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

type AuthLikeError = {
  message?: string;
  status?: number | string;
  statusCode?: number | string;
};

const MAX_TRANSIENT_AUTH_RECOVERY_ATTEMPTS = 3;

function getErrorCode(value: number | string | undefined) {
  if (typeof value === "number") {
    return value;
  }

  if (typeof value === "string") {
    const normalizedValue = value.trim().toLowerCase();

    if (normalizedValue === "unauthorized") {
      return 401;
    }

    const parsedValue = Number(normalizedValue);
    return Number.isFinite(parsedValue) ? parsedValue : null;
  }

  return null;
}

function isAuthLikeError(error: unknown): error is AuthLikeError {
  return typeof error === "object" && error !== null;
}

function isUnauthorizedError(error: unknown) {
  if (!isAuthLikeError(error)) {
    return false;
  }

  const status = getErrorCode(error.status);
  const statusCode = getErrorCode(error.statusCode);
  const normalizedMessage = error.message?.trim().toLowerCase();

  return (
    status === 401 ||
    statusCode === 401 ||
    normalizedMessage === "http 401" ||
    normalizedMessage === "unauthorized"
  );
}

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
  const { text } = useI18n();
  const session = authClient.useSession();
  const activeOrganization = authClient.useActiveOrganization();
  const organizations = authClient.useListOrganizations();
  const activationAttemptRef = useRef<string | null>(null);
  const transientRecoveryAttemptsRef = useRef(0);
  const hadSessionRef = useRef(false);
  const [activationErrorMessage, setActivationErrorMessage] = useState<string | null>(null);
  const [isActivating, setIsActivating] = useState(false);
  const [isRecoveringAccess, setIsRecoveringAccess] = useState(false);
  const hasSession = Boolean(session.data?.session && session.data.user);
  const organizationAccessError = organizations.error ?? activeOrganization.error ?? null;
  const canRecoverUnauthorizedAccess =
    hasSession &&
    isUnauthorizedError(organizationAccessError) &&
    transientRecoveryAttemptsRef.current < MAX_TRANSIENT_AUTH_RECOVERY_ATTEMPTS;

  useEffect(() => {
    if (hasSession) {
      if (!hadSessionRef.current) {
        transientRecoveryAttemptsRef.current = 0;
        activationAttemptRef.current = null;
        setActivationErrorMessage(null);
      }

      hadSessionRef.current = true;
      return;
    }

    hadSessionRef.current = false;
    transientRecoveryAttemptsRef.current = 0;
    activationAttemptRef.current = null;
    setActivationErrorMessage(null);
    setIsActivating(false);
    setIsRecoveringAccess(false);
  }, [hasSession]);

  useEffect(() => {
    if (!canRecoverUnauthorizedAccess || isRecoveringAccess) {
      return;
    }

    setIsRecoveringAccess(true);

    const timerId = window.setTimeout(
      () => {
        transientRecoveryAttemptsRef.current += 1;

        void Promise.all([
          session.refetch(),
          activeOrganization.refetch(),
          organizations.refetch(),
        ]).finally(() => {
          setIsRecoveringAccess(false);
        });
      },
      150 * (transientRecoveryAttemptsRef.current + 1),
    );

    return () => {
      window.clearTimeout(timerId);
    };
  }, [
    activeOrganization,
    canRecoverUnauthorizedAccess,
    isRecoveringAccess,
    organizations,
    session,
  ]);

  useEffect(() => {
    if (session.isPending || !hasSession) {
      return;
    }

    if (organizations.isPending || activeOrganization.isPending || isRecoveringAccess) {
      return;
    }

    if (
      activeOrganization.data &&
      (!requestedOrganizationSlug || activeOrganization.data.slug === requestedOrganizationSlug)
    ) {
      activationAttemptRef.current = null;
      transientRecoveryAttemptsRef.current = 0;
      setActivationErrorMessage(null);
      setIsActivating(false);
      setIsRecoveringAccess(false);
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
          setActivationErrorMessage(error.message ?? text.organizationGate.couldNotOpenStore);
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
          error instanceof Error ? error.message : text.organizationGate.couldNotOpenStore,
        );
        setIsActivating(false);
      });
  }, [
    activeOrganization,
    hasSession,
    isRecoveringAccess,
    organizations,
    session,
    activeOrganization.data,
    activeOrganization.isPending,
    organizations.data,
    organizations.isPending,
    requestedOrganizationSlug,
    session.isPending,
  ]);

  const retry = async () => {
    activationAttemptRef.current = null;
    transientRecoveryAttemptsRef.current = 0;
    setActivationErrorMessage(null);
    setIsRecoveringAccess(false);
    await Promise.all([session.refetch(), activeOrganization.refetch(), organizations.refetch()]);
  };

  if (
    session.isPending ||
    organizations.isPending ||
    activeOrganization.isPending ||
    isRecoveringAccess ||
    canRecoverUnauthorizedAccess
  ) {
    return {
      status: "loading",
      message: text.organizationGate.checkingStoreAccess,
    };
  }

  if (!hasSession) {
    return {
      status: "signed-out",
    };
  }

  const currentUser = session.data?.user;

  if (!currentUser) {
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
        text.organizationGate.couldNotLoadStore,
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
      message: text.organizationGate.storeNotFound,
      retry,
    };
  }

  if (activeOrganization.data) {
    return {
      status: "ready",
      user: currentUser,
      organization: activeOrganization.data,
      organizations: organizations.data ?? [],
      refresh: retry,
    };
  }

  if ((organizations.data?.length ?? 0) > 0 || isActivating) {
    return {
      status: "activating",
      message: text.organizationGate.openingStore,
    };
  }

  return {
    status: "needs-organization",
    user: currentUser,
  };
}
