import { cookies } from "next/headers";
import { ApiError, apiCall, clientAddressFrom } from "@/lib/api";
import { gaIdentityFromCookies } from "@/lib/ga-identity";
import { localeHref } from "@/lib/locale-path";
import { POSTHOG_HOST, POSTHOG_KEY } from "@/lib/posthog";
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
  // Uygulamanın cihaz kimliği (kullanım verisi açıkken eklenir): PostHog satın almayı o cihaza bağlar
  const rawDevice = url.searchParams.get("device") || "";
  const deviceId = /^[A-Za-z0-9-]{8,64}$/.test(rawDevice) ? rawDevice : undefined;

  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  // /buy bir yönlendirme: tarayıcıda sayfa açılmadığı için olay sunucudan gider (beklenmez)
  void capturePosthogServer("buy_page_opened", deviceId, {
    client,
    lang: locale,
    signed_in: Boolean(token),
    quantity,
  });
  const back = `/buy?${url.searchParams.toString()}`;
  const toLogin = () =>
    redirectTo(
      `${localeHref(locale, "/login")}?next=${encodeURIComponent(back)}`,
    );

  if (!token) {
    return toLogin();
  }

  // GA4 purchase olayı (API webhook'u yollar) bu ziyaretçinin oturumuna bağlansın
  const ga = gaIdentityFromCookies(store.getAll());

  try {
    const checkout = await apiCall<{ url: string }>("/account/checkout", {
      method: "POST",
      token,
      body: {
        quantity,
        client,
        locale,
        ga_client_id: ga.clientId,
        ga_session_id: ga.sessionId,
        device_id: deviceId,
      },
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

/** Uygulama cihazından geldiyse o cihazın kişisine, yoksa tek seferlik anonim kimliğe yazılır. */
async function capturePosthogServer(
  event: string,
  deviceId: string | undefined,
  properties: Record<string, unknown>,
): Promise<void> {
  try {
    await fetch(`${POSTHOG_HOST}/capture/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: POSTHOG_KEY,
        event,
        distinct_id: deviceId ?? `buy-${crypto.randomUUID()}`,
        properties: {
          ...properties,
          matched_device: Boolean(deviceId),
          $lib: "web-server",
          ...(deviceId ? {} : { $process_person_profile: false }),
        },
      }),
      signal: AbortSignal.timeout(4000),
    });
  } catch {
    // ölçüm satın almayı asla bozmaz
  }
}

function redirectTo(location: string): Response {
  return new Response(null, {
    status: 303,
    headers: { Location: location, "Cache-Control": "no-store" },
  });
}
