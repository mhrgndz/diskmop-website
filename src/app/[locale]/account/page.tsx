import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  CopyKeyButton,
  ReleaseDeviceButton,
  SignOutButton,
} from "@/components/account-actions";
import {
  ApiError,
  apiCall,
  type AccountData,
  type AccountLicense,
} from "@/lib/api";
import { localeHref } from "@/lib/locale-path";
import { getSessionToken } from "@/lib/session";

type Props = { params: Promise<{ locale: string }> };

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("accountTitle"),
    description: t("accountDescription"),
    robots: { index: false, follow: false },
  };
}

export default async function AccountPage({ params }: Props) {
  const { locale } = await params;
  if (!locale) notFound();
  setRequestLocale(locale);

  const token = await getSessionToken();
  const loginPath = `${localeHref(locale, "/login")}?next=${encodeURIComponent(localeHref(locale, "/account"))}`;
  if (!token) redirect(loginPath);

  let data: AccountData;
  try {
    data = await apiCall<AccountData>("/account", { token });
  } catch (error) {
    if (error instanceof ApiError && error.status === 401) {
      redirect(loginPath);
    }
    throw error;
  }

  const { account, licenses, orders } = data;
  const t = await getTranslations({ locale, namespace: "account" });

  return (
    <div className="mx-auto max-w-[840px] px-4 py-12 sm:px-6 sm:py-16">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {t("title")}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {t("signedInAs", { email: account.email })}
          </p>
        </div>
        <SignOutButton locale={locale} label={t("signOut")} />
      </div>

      {/* Lisanslar */}
      <section className="mt-10" aria-labelledby="licenses-title">
        <div className="flex items-center justify-between">
          <h2
            id="licenses-title"
            className="text-lg font-semibold text-foreground"
          >
            {t("licensesTitle")}
          </h2>
          <a
            href={`/buy?lang=${locale}`}
            className="text-xs font-medium text-brand-500 hover:text-brand-600 transition-colors"
          >
            {t("buyMore")}
          </a>
        </div>

        {licenses.length === 0 ? (
          <div className="mt-4 rounded-2xl border border-dashed border-border bg-card p-6 text-center sm:p-8">
            <p className="text-sm text-muted-foreground">
              {t("licensesEmpty")}
            </p>
            <a
              href={`/buy?lang=${locale}`}
              className="mt-4 inline-flex h-10 items-center rounded-xl bg-brand-500 px-4 text-sm font-medium text-white hover:bg-brand-600 transition-colors"
            >
              {t("buyFirst")}
            </a>
          </div>
        ) : (
          <ul className="mt-4 space-y-4">
            {licenses.map((license) => (
              <LicenseCard key={license.id} license={license} t={t} />
            ))}
          </ul>
        )}
      </section>

      {/* Sipariş Geçmişi */}
      <section className="mt-12" aria-labelledby="orders-title">
        <h2 id="orders-title" className="text-lg font-semibold text-foreground">
          {t("ordersTitle")}
        </h2>
        {orders.length === 0 ? (
          <p className="mt-3 text-sm text-muted-foreground">
            {t("ordersEmpty")}
          </p>
        ) : (
          <div className="mt-4 overflow-x-auto rounded-xl border border-border bg-card">
            <table className="w-full min-w-[480px] text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs text-muted-foreground">
                  <th className="px-4 py-3 font-medium">{t("orderDate")}</th>
                  <th className="px-4 py-3 font-medium">{t("orderQty")}</th>
                  <th className="px-4 py-3 font-medium">{t("orderTotal")}</th>
                  <th className="px-4 py-3 font-medium text-end">
                    {t("orderStatus")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-border last:border-b-0 text-foreground"
                  >
                    <td className="px-4 py-3 text-muted-foreground">
                      {new Date(order.paidAt).toLocaleDateString(locale)}
                    </td>
                    <td className="px-4 py-3">{order.quantity}</td>
                    <td className="px-4 py-3 font-mono text-xs">
                      {(order.totalAmount / 100).toFixed(2)}{" "}
                      {order.currency.toUpperCase()}
                    </td>
                    <td className="px-4 py-3 text-end capitalize text-emerald-500 font-medium">
                      {order.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

function LicenseCard({
  license,
  t,
}: {
  license: AccountLicense;
  t: (key: string, values?: Record<string, string | number>) => string;
}) {
  const active = license.status === "active";
  const device = license.devices && license.devices[0];

  return (
    <li className="rounded-2xl border border-border bg-card p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs text-muted-foreground">{t("keyLabel")}</p>
          <p className="mt-1 font-mono text-base font-semibold tracking-wider text-foreground break-all select-all">
            {license.key || `•••••-${license.keyLast5}`}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
              active
                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                : "bg-red-500/10 text-red-500"
            }`}
          >
            {active ? t("statusActive") : t("statusRevoked")}
          </span>
          {license.key && active && (
            <CopyKeyButton
              value={license.key}
              label={t("copy")}
              copiedLabel={t("copied")}
            />
          )}
        </div>
      </div>

      <div className="mt-4 border-t border-border pt-4">
        {device ? (
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs text-muted-foreground">
                {t("activeDevice")}
              </p>
              <p className="text-sm font-medium text-foreground">
                {device.name || t("unnamedDevice")} ({device.platform || "PC"})
              </p>
              <p className="text-xs text-muted-foreground">
                {t("activatedAt", {
                  date: new Date(device.activatedAt).toLocaleDateString(),
                })}
              </p>
            </div>
            <ReleaseDeviceButton
              licenseId={license.id}
              label={t("removeDevice")}
              pendingLabel={t("removingDevice")}
              confirmText={t("removeConfirm")}
              doneText={t("removedDone")}
              errorText={t("removeError")}
            />
          </div>
        ) : (
          <div>
            <p className="text-xs text-muted-foreground">{t("noDevice")}</p>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
              {t("activateHint")}
            </p>
          </div>
        )}
      </div>
    </li>
  );
}
