import { cookies } from "next/headers";
import { ApiError, apiCall, clientAddressFrom } from "@/lib/api";
import { localeHref } from "@/lib/locale-path";
import { SESSION_COOKIE, SIGNED_IN_COOKIE } from "@/lib/session";

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const locale = url.searchParams.get("lang") || "en";
  const quantity = Math.min(
    10,
    Math.max(
      1,
      Number.parseInt(url.searchParams.get("quantity") || "1", 10) || 1,
    ),
  );
  const client = url.searchParams.get("client") === "app" ? "app" : "web";

  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  const back = `/buy?${url.searchParams.toString()}`;
  const toLogin = () =>
    redirectTo(
      `${localeHref(locale, "/login")}?next=${encodeURIComponent(back)}`,
    );

  if (!token) {
    return toLogin();
  }

  try {
    const checkout = await apiCall<{ url: string }>("/account/checkout", {
      method: "POST",
      token,
      body: { quantity, client, locale },
      clientIp: clientAddressFrom(request.headers),
      userAgent: request.headers.get("user-agent") || undefined,
    });
    return redirectTo(checkout.url);
  } catch (error) {
    if (error instanceof ApiError && error.status === 401) {
      store.delete(SESSION_COOKIE);
      store.delete(SIGNED_IN_COOKIE);
      return toLogin();
    }
    // Hata durumunda ana sayfadaki fiyat bölümüne dön
    return redirectTo(localeHref(locale, "/#pricing"));
  }
}

function redirectTo(location: string): Response {
  return new Response(null, {
    status: 303,
    headers: { Location: location, "Cache-Control": "no-store" },
  });
}
