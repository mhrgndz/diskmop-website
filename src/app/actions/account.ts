"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { ApiError, apiCall, clientAddressFrom } from "@/lib/api";
import { localeHref } from "@/lib/locale-path";
import {
  clearSession,
  getSessionToken,
  safeNextPath,
  setSession,
} from "@/lib/session";

export type ActionResult = { ok: true } | { ok: false; error: string };

async function requestContext() {
  const list = await headers();
  return {
    clientIp: clientAddressFrom(list),
    userAgent: list.get("user-agent") ?? undefined,
  };
}

function signInError(error: unknown): string {
  if (!(error instanceof ApiError)) return "generic";
  switch (error.code) {
    case "invalid_email":
      return "invalidEmail";
    case "invalid_or_expired_code":
      return "invalidCode";
    case "rate_limited":
    case "too_many_attempts":
      return "tooMany";
    case "send_failed":
      return "mailFailed";
    default:
      return "generic";
  }
}

export async function requestSignInCode(
  email: string,
  locale: string,
): Promise<ActionResult> {
  const context = await requestContext();
  try {
    await apiCall("/sign-in/code", {
      method: "POST",
      body: { email: email.trim(), locale },
      ...context,
    });
    return { ok: true };
  } catch (error) {
    return { ok: false, error: signInError(error) };
  }
}

export async function verifySignInCode(
  email: string,
  code: string,
  locale: string,
  next: string | null,
): Promise<ActionResult> {
  const context = await requestContext();
  let result: {
    ok: boolean;
    token: string;
    account: { id: string; email: string };
  };
  try {
    result = await apiCall<{
      ok: boolean;
      token: string;
      account: { id: string; email: string };
    }>("/sign-in/verify", {
      method: "POST",
      body: { email: email.trim(), code: code.trim(), locale },
      ...context,
    });
  } catch (error) {
    return { ok: false, error: signInError(error) };
  }

  await setSession(result.token);
  redirect(safeNextPath(next, localeHref(locale, "/account")));
}

export async function signOut(locale: string): Promise<void> {
  const token = await getSessionToken();
  if (token) {
    try {
      await apiCall("/account/sign-out", { method: "POST", token });
    } catch {
      // Oturum zaten düşmüş olabilir
    }
  }
  await clearSession();
  redirect(localeHref(locale, "/"));
}

export async function releaseLicenseDevice(
  licenseId: string,
): Promise<ActionResult> {
  const token = await getSessionToken();
  if (!token) return { ok: false, error: "signedOut" };
  try {
    await apiCall("/account/licenses/release", {
      method: "POST",
      token,
      body: { licenseId },
    });
    return { ok: true };
  } catch (error) {
    if (error instanceof ApiError && error.status === 401) await clearSession();
    return { ok: false, error: "generic" };
  }
}
