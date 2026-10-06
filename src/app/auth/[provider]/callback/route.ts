import { cookies, headers } from "next/headers";
import { routing, type Locale } from "@/i18n/routing";
import { apiCall, clientAddressFrom } from "@/lib/api";
import { localeHref } from "@/lib/locale-path";
import {
  isProvider,
  OAUTH_COOKIE,
  redirectUri,
  type OAuthState,
  type Provider,
} from "@/lib/oauth";
import { safeNextPath, setSession } from "@/lib/session";

function isValidLocale(val: string): val is Locale {
  return routing.locales.includes(val as Locale);
}

/**
 * Sağlayıcı dönüşü: Google GET (?code&state), Apple POST (form_post).
 * Durum çerezle eşleşmezse giriş sayfasına hata ile dönülür.
 * Kod API'de doğrulanır, oturum çerezi yazılır ve `next`e (yoksa /account) yönlendirilir.
 */
export async function GET(
  request: Request,
  context: { params: Promise<{ provider: string }> },
): Promise<Response> {
  const url = new URL(request.url);
  return finish(
    context,
    url.searchParams.get("code"),
    url.searchParams.get("state"),
  );
}

export async function POST(
  request: Request,
  context: { params: Promise<{ provider: string }> },
): Promise<Response> {
  const form = await request.formData();
  return finish(
    context,
    stringOf(form.get("code")),
    stringOf(form.get("state")),
  );
}

async function finish(
  context: { params: Promise<{ provider: string }> },
  code: string | null,
  state: string | null,
): Promise<Response> {
  const { provider } = await context.params;
  const store = await cookies();
  const saved = parseState(store.get(OAUTH_COOKIE)?.value);
  store.delete({ name: OAUTH_COOKIE, path: "/auth" });

  const lang: Locale = saved && isValidLocale(saved.lang) ? saved.lang : "en";
  const fail = () =>
    redirect(
      `${localeHref(lang, "/login")}?error=${isProvider(provider) ? provider : "google"}`,
    );

  if (
    !isProvider(provider) ||
    !saved ||
    saved.provider !== provider ||
    !code ||
    !state ||
    state !== saved.state
  ) {
    return fail();
  }

  const headerList = await headers();
  try {
    const result = await apiCall<{ token: string; expiresAt: string }>(
      `/sign-in/oauth/${provider}`,
      {
        method: "POST",
        body: {
          code,
          redirectUri: redirectUri(provider as Provider),
          ...(provider === "google" ? { codeVerifier: saved.verifier } : {}),
          nonce: saved.nonce,
          locale: lang,
          client: "web",
        },
        clientIp: clientAddressFrom(headerList),
        userAgent: headerList.get("user-agent") ?? undefined,
      },
    );
    await setSession(result.token, result.expiresAt);
  } catch {
    return fail();
  }

  return redirect(safeNextPath(saved.next, localeHref(lang, "/account")));
}

function parseState(raw: string | undefined): OAuthState | null {
  if (!raw) return null;
  try {
    const value = JSON.parse(raw) as OAuthState;
    return typeof value.state === "string" && typeof value.nonce === "string"
      ? value
      : null;
  } catch {
    return null;
  }
}

function stringOf(value: FormDataEntryValue | null): string | null {
  return typeof value === "string" ? value : null;
}

function redirect(location: string): Response {
  return new Response(null, {
    status: 303,
    headers: { Location: location, "Cache-Control": "no-store" },
  });
}
