import { createHash, randomBytes } from "node:crypto";
import { SITE_URL } from "@/lib/seo";

export type Provider = "google" | "apple";

export const OAUTH_COOKIE = "dm_oauth";

export interface OAuthState {
  provider: Provider;
  state: string;
  nonce: string;
  verifier: string;
  next: string | null;
  lang: string;
}

export function isProvider(value: string): value is Provider {
  return value === "google" || value === "apple";
}

export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/+$/, "");
  }
  if (process.env.NODE_ENV !== "production") {
    return "http://localhost:3000";
  }
  return SITE_URL;
}

export function redirectUri(provider: Provider): string {
  return `${getSiteUrl()}/auth/${provider}/callback`;
}

export function newOAuthState(
  provider: Provider,
  next: string | null,
  lang: string,
): OAuthState {
  return {
    provider,
    state: randomBytes(24).toString("base64url"),
    nonce: randomBytes(24).toString("base64url"),
    verifier: randomBytes(48).toString("base64url"),
    next,
    lang,
  };
}

export function authorizationUrl(
  provider: Provider,
  clientId: string,
  value: OAuthState,
): string {
  if (provider === "google") {
    const challenge = createHash("sha256")
      .update(value.verifier)
      .digest("base64url");
    const params = new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUri(provider),
      response_type: "code",
      scope: "openid email profile",
      state: value.state,
      nonce: value.nonce,
      code_challenge: challenge,
      code_challenge_method: "S256",
      prompt: "select_account",
    });
    return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
  }

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri(provider),
    response_type: "code",
    scope: "name email",
    response_mode: "form_post",
    state: value.state,
    nonce: value.nonce,
  });
  return `https://appleid.apple.com/auth/authorize?${params.toString()}`;
}
