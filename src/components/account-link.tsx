"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { User } from "lucide-react";
import { localeHref } from "@/lib/locale-path";

export function AccountLink({
  locale,
  signInLabel,
  accountLabel,
  variant = "header",
}: {
  locale: string;
  signInLabel: string;
  accountLabel: string;
  variant?: "header" | "mobile";
}) {
  const pathname = usePathname();
  const [signedIn, setSignedIn] = useState<boolean | null>(null);

  useEffect(() => {
    setSignedIn(
      document.cookie.split("; ").some((item) => item === "dm_signed_in=1"),
    );
  }, [pathname]);

  if (variant === "mobile") {
    return (
      <a
        href={localeHref(locale, signedIn ? "/account" : "/login")}
        className="flex items-center gap-2 text-lg font-medium text-foreground hover:text-brand-500 transition-colors"
      >
        <User className="w-5 h-5" />
        <span>{signedIn ? accountLabel : signInLabel}</span>
      </a>
    );
  }

  if (signedIn === null) {
    return <span className="hidden h-9 w-20 sm:block" aria-hidden />;
  }

  if (!signedIn) {
    return (
      <a
        href={localeHref(locale, "/login")}
        className="hidden sm:inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-lg hover:bg-muted"
      >
        {signInLabel}
      </a>
    );
  }

  return (
    <a
      href={localeHref(locale, "/account")}
      className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 dark:text-brand-400 bg-brand-500/10 px-3 py-1.5 rounded-lg hover:bg-brand-500/15 transition-colors"
    >
      <User className="w-4 h-4" />
      <span>{accountLabel}</span>
    </a>
  );
}
