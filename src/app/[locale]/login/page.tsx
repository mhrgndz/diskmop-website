import type { Metadata } from "next";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { LoginForm } from "@/components/login-form";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { getSignInProviders } from "@/lib/api";
import { localeHref } from "@/lib/locale-path";
import { getSessionToken, safeNextPath } from "@/lib/session";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ next?: string; error?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("loginTitle"),
    description: t("loginDescription"),
    robots: { index: false, follow: false },
  };
}

export default async function LoginPage({ params, searchParams }: Props) {
  const { locale } = await params;
  if (!locale) notFound();
  setRequestLocale(locale);

  const { next: rawNext, error: providerError } = await searchParams;
  const next = rawNext ? safeNextPath(rawNext, "") || null : null;

  if (await getSessionToken()) {
    redirect(next || localeHref(locale, "/account"));
  }

  const t = await getTranslations({ locale, namespace: "login" });
  const providers = await getSignInProviders();

  const errors = Object.fromEntries(
    ["invalidEmail", "invalidCode", "tooMany", "mailFailed", "generic"].map(
      (key) => [key, t(`errors.${key}`)],
    ),
  );

  const buying = next?.startsWith("/buy") ?? false;
  const providerHref = (provider: "google" | "apple") =>
    `/auth/${provider}/start?${new URLSearchParams({
      lang: locale,
      ...(next ? { next } : {}),
    }).toString()}`;

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 sm:py-24">
      <div className="w-full max-w-[26rem] rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <div className="flex items-center justify-between">
          <a
            href={localeHref(locale, "/")}
            className="flex items-center gap-3 transition-opacity hover:opacity-85"
          >
            <Image
              src="/brand/icon.svg"
              alt="Disk Mop"
              width={36}
              height={36}
              className="w-9 h-9"
            />
            <span className="font-bold text-lg text-foreground">Disk Mop</span>
          </a>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>

        <h1 className="mt-5 text-2xl font-bold tracking-tight text-foreground">
          {t("title")}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {buying ? t("buyContext") : t("subtitle")}
        </p>

        {providerError && (
          <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 px-3.5 py-2.5 text-sm text-red-600 dark:text-red-400">
            {t("errors.provider", {
              provider: providerError === "apple" ? "Apple" : "Google",
            })}
          </div>
        )}

        <div className="mt-6">
          <LoginForm
            locale={locale}
            next={next}
            labels={{
              emailLabel: t("emailLabel"),
              emailPlaceholder: t("emailPlaceholder"),
              sendCode: t("sendCode"),
              sending: t("sending"),
              codeTitle: t("codeTitle"),
              codeSent: t("codeSent"),
              codeLabel: t("codeLabel"),
              verify: t("verify"),
              verifying: t("verifying"),
              resend: t("resend"),
              resent: t("resent"),
              otherEmail: t("otherEmail"),
              errors,
            }}
          />
        </div>

        {(providers.google || providers.apple) && (
          <>
            <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="h-px flex-1 bg-border" />
              {t("or")}
              <span className="h-px flex-1 bg-border" />
            </div>

            <div className="space-y-2.5">
              {providers.google && (
                <a
                  href={providerHref("google")}
                  className="flex h-11 items-center justify-center gap-2.5 rounded-xl border border-border bg-background text-[15px] font-medium text-foreground hover:bg-muted/50 transition-colors shadow-sm"
                >
                  <GoogleMark />
                  {t("google")}
                </a>
              )}

              {providers.apple && (
                <a
                  href={providerHref("apple")}
                  className="flex h-11 items-center justify-center gap-2.5 rounded-xl bg-foreground text-[15px] font-medium text-background hover:opacity-90 transition-opacity shadow-sm"
                >
                  <AppleMark />
                  {t("apple")}
                </a>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden className="w-[18px] h-[18px]">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.3-.4-3.5z"
      />
    </svg>
  );
}

function AppleMark() {
  return (
    <svg
      viewBox="0 0 384 512"
      aria-hidden
      className="w-4 h-4 -mt-0.5"
      fill="currentColor"
    >
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.3 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.3zM250.8 113.8c21.2-26.6 27.6-58.4 24.3-90.8-25.9 1-61.8 17.4-83.3 43.1-23 27.3-30.6 60-26.9 91.9 28.5 2.1 61.2-13 85.9-44.2z" />
    </svg>
  );
}
