import type { Metadata } from "next";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { LoginForm } from "@/components/login-form";
import { localeHref } from "@/lib/locale-path";
import { getSessionToken, safeNextPath } from "@/lib/session";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ next?: string }>;
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

  const { next: rawNext } = await searchParams;
  const next = rawNext ? safeNextPath(rawNext, "") || null : null;

  if (await getSessionToken()) {
    redirect(next || localeHref(locale, "/account"));
  }

  const t = await getTranslations({ locale, namespace: "login" });

  const errors = Object.fromEntries(
    ["invalidEmail", "invalidCode", "tooMany", "mailFailed", "generic"].map(
      (key) => [key, t(`errors.${key}`)],
    ),
  );

  const buying = next?.startsWith("/buy") ?? false;

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 sm:py-24">
      <div className="w-full max-w-[26rem] rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <Image
            src="/brand/icon.svg"
            alt="Disk Mop"
            width={36}
            height={36}
            className="w-9 h-9"
          />
          <span className="font-bold text-lg text-foreground">Disk Mop</span>
        </div>

        <h1 className="mt-5 text-2xl font-bold tracking-tight text-foreground">
          {t("title")}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {buying ? t("buyContext") : t("subtitle")}
        </p>

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
      </div>
    </div>
  );
}
