"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { localeHref } from "@/lib/locale-path";
import { BrandMark } from "@/components/brand-mark";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { DownloadDropdown } from "@/components/download-dropdown";
import { AccountLink } from "@/components/account-link";

interface NavLink {
  key: string;
  href: string;
}

export function Navigation() {
  const t = useTranslations("nav");
  const locale = useLocale();

  const navLinks: NavLink[] = [
    { key: "features", href: localeHref(locale, "/#features") },
    { key: "pricing", href: localeHref(locale, "/#pricing") },
    { key: "faq", href: localeHref(locale, "/#faq") },
    { key: "blog", href: localeHref(locale, "/blog") },
    { key: "tools", href: localeHref(locale, "/tools") },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-50 bg-[color-mix(in_srgb,var(--background)_88%,transparent)] backdrop-blur-xl border-b border-border transition-shadow duration-300",
          isScrolled && "shadow-sm",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo */}
            <a
              href={localeHref(locale, "/")}
              className="flex items-center gap-2.5 shrink-0"
              aria-label="DiskMop"
            >
              <BrandMark className="h-9 w-9" />
              <span className="font-extrabold text-[22px] tracking-tight text-foreground">
                DiskMop
              </span>
            </a>

            {/* Center: Nav Links (desktop) */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="text-[15px] font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-lg hover:bg-muted"
                >
                  {t(link.key)}
                </a>
              ))}
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-1.5">
              <AccountLink
                locale={locale}
                signInLabel={t("signIn")}
                accountLabel={t("account")}
                variant="header"
              />
              <div className="hidden sm:flex items-center gap-1.5">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
              <div className="hidden sm:block">
                <DownloadDropdown variant="secondary" location="nav" />
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-muted transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-6">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={closeMobileMenu}
                className="text-2xl font-medium text-foreground hover:text-brand-600 transition-colors"
              >
                {t(link.key)}
              </a>
            ))}
            <AccountLink
              locale={locale}
              signInLabel={t("signIn")}
              accountLabel={t("account")}
              variant="mobile"
            />
            <div className="flex items-center gap-3 mt-4">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
            <div className="mt-2">
              <DownloadDropdown variant="primary" location="nav_mobile" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
