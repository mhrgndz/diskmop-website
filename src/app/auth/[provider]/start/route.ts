import { cookies } from "next/headers";
import { routing, type Locale } from "@/i18n/routing";
import { getSignInProviders } from "@/lib/api";
import { localeHref } from "@/lib/locale-path";
import {
  authorizationUrl,
  isProvider,
  newOAuthState,
  OAUTH_COOKIE,
} from "@/lib/oauth";
import { safeNextPath } from "@/lib/session";

function isValidLocale(val: string): val is Locale {
  return routing.locales.includes(val as Locale);
}

/** Google/Apple girişini başlatır: durum çerezi (10 dk) + sağlayıcının yetki sayfasına yönlendirme. */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ provider: string }> },
): Promise<Response> {
  const { provider } = await params;
  const url = new URL(request.url);
  const langParam = url.searchParams.get("lang") ?? "en";
  const lang = isValidLocale(langParam) ? langParam : "en";

  if (!isProvider(provider)) {
    return redirect(localeHref(lang, "/login"));
  }

  const providers = await getSignInProviders();
  const clientId =
    provider === "google" ? providers.googleClientId : providers.appleClientId;

  if (!clientId) {
    return redirect(`${localeHref(lang, "/login")}?error=${provider}`);
  }

  const next = safeNextPath(url.searchParams.get("next"), "") || null;
  const value = newOAuthState(provider, next, lang);

  const cookieStore = await cookies();
  cookieStore.set(OAUTH_COOKIE, JSON.stringify(value), {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/auth",
    maxAge: 600,
  });

  return redirect(authorizationUrl(provider, clientId, value));
}

function redirect(location: string): Response {
  return new Response(null, {
    status: 303,
    headers: { Location: location, "Cache-Control": "no-store" },
  });
}
