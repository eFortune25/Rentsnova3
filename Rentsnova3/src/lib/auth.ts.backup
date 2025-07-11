import NextAuth from "next-auth";
import { authConfig } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import type { Session } from "next-auth";

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);

export async function getSession(): Promise<Session | null> {
  return await auth();
}

export async function getCurrentUser() {
  const session = await getSession();
  return session?.user ?? null;
}

export async function requireAuth() {
  const session = await getSession();
  if (!session?.user) {
    redirect("/auth/signin");
  }
  return session;
}

export async function requireRole(allowedRoles: Array<"TENANT" | "LANDLORD" | "AGENT" | "ADMIN">) {
  const session = await requireAuth();

  if (!allowedRoles.includes(session.user.role)) {
    redirect("/auth/unauthorized");
  }

  return session;
}

export async function requireProfileCompleted() {
  const session = await requireAuth();

  if (!session.user.profileCompleted) {
    redirect("/onboarding/profile");
  }

  return session;
}

export async function requireEmailVerified() {
  const session = await requireAuth();

  if (!session.user.emailVerified) {
    redirect("/auth/verify-email");
  }

  return session;
}

export async function requireActiveUser() {
  const session = await requireAuth();

  if (!session.user.isActive) {
    redirect("/auth/account-suspended");
  }

  return session;
}

// Check permissions for specific actions
export function canManageProperty(session: Session, propertyOwnerId: string): boolean {
  if (session.user.role === "ADMIN") return true;
  if (session.user.role === "LANDLORD" && session.user.id === propertyOwnerId) return true;
  return false;
}

export function canViewApplications(session: Session, propertyOwnerId: string): boolean {
  if (session.user.role === "ADMIN") return true;
  if (session.user.role === "LANDLORD" && session.user.id === propertyOwnerId) return true;
  if (session.user.role === "AGENT") return true; // Agents can view applications they manage
  return false;
}

export function canApplyToProperty(session: Session): boolean {
  return session.user.role === "TENANT" && session.user.profileCompleted;
}

export function canRequestTour(session: Session): boolean {
  return session.user.role === "TENANT" && !!session.user.emailVerified;
}

// Utility functions for role checking
export function isTenant(session: Session): boolean {
  return session.user.role === "TENANT";
}

export function isLandlord(session: Session): boolean {
  return session.user.role === "LANDLORD";
}

export function isAgent(session: Session): boolean {
  return session.user.role === "AGENT";
}

export function isAdmin(session: Session): boolean {
  return session.user.role === "ADMIN";
}

// Dashboard redirect logic
export function getDashboardUrl(role: string): string {
  switch (role) {
    case "TENANT":
      return "/dashboard/tenant";
    case "LANDLORD":
      return "/dashboard/landlord";
    case "AGENT":
      return "/dashboard/agent";
    case "ADMIN":
      return "/dashboard/admin";
    default:
      return "/";
  }
}
