import { cookies } from "next/headers";

export const SESSION_COOKIE = "dm_session";
export const SIGNED_IN_COOKIE = "dm_signed_in";

export async function getSessionToken(): Promise<string | undefined> {
  const store = await cookies();
  return store.get(SESSION_COOKIE)?.value;
}

export async function setSession(
  token: string,
  expiresAt?: string,
): Promise<void> {
  const store = await cookies();
  const expires = expiresAt
    ? new Date(expiresAt)
    : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
  const secure = process.env.NODE_ENV === "production";
  store.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure,
    sameSite: "lax",
    path: "/",
    expires,
  });
  store.set(SIGNED_IN_COOKIE, "1", {
    httpOnly: false,
    secure,
    sameSite: "lax",
    path: "/",
    expires,
  });
}

export async function clearSession(): Promise<void> {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
  store.delete(SIGNED_IN_COOKIE);
}

export function safeNextPath(
  next: string | null | undefined,
  fallback: string,
): string {
  if (
    !next ||
    !next.startsWith("/") ||
    next.startsWith("//") ||
    next.startsWith("/\\")
  )
    return fallback;
  return next;
}
