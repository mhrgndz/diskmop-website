export interface Account {
  id: string;
  email: string;
}

export interface AccountDevice {
  id: string;
  name: string | null;
  platform: string;
  appVersion: string;
  activatedAt: string;
  lastSeenAt: string;
}

export interface AccountLicense {
  id: string;
  key: string | null;
  keyLast5: string;
  status: "active" | "revoked";
  maxActivations: number;
  createdAt: string;
  orderId: string | null;
  devices: AccountDevice[];
}

export interface AccountOrder {
  id: string;
  quantity: number;
  currency: string;
  totalAmount: number;
  status: "paid" | "refunded" | "partially_refunded";
  paidAt: string;
}

export interface AccountData {
  account: Account;
  licenses: AccountLicense[];
  orders: AccountOrder[];
}

export class ApiError extends Error {
  constructor(
    readonly status: number,
    readonly code: string,
  ) {
    super(code);
  }
}

export function apiBaseUrl(): string {
  return (
    process.env.DISKMOP_API_URL?.replace(/\/+$/, "") ||
    "https://api.diskmop.com"
  );
}

interface ApiCallOptions {
  method?: "GET" | "POST" | "PATCH" | "DELETE";
  body?: unknown;
  token?: string;
  clientIp?: string;
  userAgent?: string;
}

export async function apiCall<T>(
  path: string,
  options: ApiCallOptions = {},
): Promise<T> {
  const headers = new Headers({ Accept: "application/json" });
  if (options.body !== undefined)
    headers.set("Content-Type", "application/json");
  if (options.token) headers.set("Authorization", `Bearer ${options.token}`);
  if (options.userAgent)
    headers.set("User-Agent", options.userAgent.slice(0, 300));
  if (options.clientIp) headers.set("x-forwarded-for", options.clientIp);

  let response: Response;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const fullPath = normalizedPath.startsWith("/api")
    ? normalizedPath
    : `/api${normalizedPath}`;

  try {
    response = await fetch(`${apiBaseUrl()}${fullPath}`, {
      method: options.method ?? "GET",
      headers,
      body:
        options.body === undefined ? undefined : JSON.stringify(options.body),
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });
  } catch {
    throw new ApiError(503, "SERVICE_UNAVAILABLE");
  }

  const json = (await response.json().catch(() => undefined)) as
    (T & { error?: string }) | undefined;

  if (!response.ok) {
    throw new ApiError(response.status, json?.error || "INTERNAL_ERROR");
  }

  return json as T;
}

export function clientAddressFrom(headers: Headers): string | undefined {
  const forwarded = headers.get("x-forwarded-for")?.split(",").at(-1)?.trim();
  return forwarded || headers.get("x-real-ip")?.trim() || undefined;
}

export interface SignInProviders {
  email: boolean;
  google: boolean;
  apple: boolean;
  googleClientId?: string | null;
  appleClientId?: string | null;
}

export async function getSignInProviders(): Promise<SignInProviders> {
  try {
    return await apiCall<SignInProviders>("/sign-in/providers");
  } catch {
    return {
      email: true,
      google: false,
      apple: false,
      googleClientId: null,
      appleClientId: null,
    };
  }
}
