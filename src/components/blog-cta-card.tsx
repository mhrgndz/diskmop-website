"use client";

import { useTranslations } from "next-intl";
import {
  Download,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Monitor,
  Laptop,
  Smartphone,
  ChevronDown,
} from "lucide-react";
import { useOSDetection, type OSType } from "@/hooks/use-os-detection";
import { STORE_URLS } from "@/lib/app-version";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface BlogCtaCardProps {
  variant?: "inline" | "bottom";
  customTitle?: string;
  customSubtitle?: string;
}

export function BlogCtaCard({
  variant = "inline",
  customTitle,
  customSubtitle,
}: BlogCtaCardProps) {
  const t = useTranslations("blog");
  const detectedOS = useOSDetection();

  // Hedef OS yapılandırması
  let primaryLabel = "Windows";
  let primaryHref = "https://api.diskmop.com/download/windows";
  let primarySublabel = "Windows 10 / 11";
  let isStore = false;
  let PrimaryIcon = Monitor;

  if (detectedOS === "mac") {
    primaryLabel = "macOS";
    primaryHref = "https://api.diskmop.com/download/mac";
    primarySublabel = "macOS 11+ (Apple Silicon / Intel)";
    PrimaryIcon = Laptop;
  } else if (detectedOS === "android") {
    primaryLabel = "Android";
    primaryHref = STORE_URLS.android;
    primarySublabel = "Google Play";
    PrimaryIcon = Smartphone;
    isStore = true;
  } else if (detectedOS === "ios") {
    primaryLabel = "iPhone";
    primaryHref = STORE_URLS.ios;
    primarySublabel = "App Store";
    PrimaryIcon = Smartphone;
    isStore = true;
  }

  const otherPlatforms = [
    {
      label: "Windows",
      sub: ".exe (Win 10/11)",
      href: "https://api.diskmop.com/download/windows",
      icon: Monitor,
      show: detectedOS !== "windows",
    },
    {
      label: "macOS (Apple Silicon)",
      sub: ".dmg",
      href: "https://api.diskmop.com/download/mac",
      icon: Laptop,
      show: detectedOS !== "mac",
    },
    {
      label: "macOS (Intel)",
      sub: ".dmg",
      href: "https://api.diskmop.com/download/mac-intel",
      icon: Laptop,
      show: detectedOS === "mac",
    },
    {
      label: "Android",
      sub: "Google Play",
      href: STORE_URLS.android,
      icon: Smartphone,
      show: detectedOS !== "android",
      store: true,
    },
    {
      label: "iPhone",
      sub: "App Store",
      href: STORE_URLS.ios,
      icon: Smartphone,
      show: detectedOS !== "ios",
      store: true,
    },
  ].filter((p) => p.show);

  if (variant === "bottom") {
    return (
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-gray-900 to-gray-950 p-8 sm:p-12 text-center text-white border border-gray-800 shadow-2xl">
          {/* Arka plan parlama efekti */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-5">
              <Sparkles className="h-3.5 w-3.5" />
              {t("inlineCtaBadge")}
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight leading-snug">
              {customTitle || t("inlineCtaTitle")}
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
              {customSubtitle || t("inlineCtaSubtitle")}
            </p>

            {/* İndirme Butonu & Diğer Platformlar */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href={primaryHref}
                target={isStore ? "_blank" : undefined}
                rel={isStore ? "noopener noreferrer" : undefined}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-600 hover:bg-brand-500 active:bg-brand-700 text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg shadow-brand-600/30 transition-all hover:scale-[1.02]"
              >
                <Download className="h-5 w-5" />
                <span>{t("downloadFor", { os: primaryLabel })}</span>
              </a>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-white px-4 py-3 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                    <span>{primarySublabel}</span>
                    <ChevronDown className="h-4 w-4 opacity-70" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  className="w-64 bg-gray-900 border-gray-800 text-white"
                >
                  {otherPlatforms.map((p) => {
                    const Icon = p.icon;
                    return (
                      <DropdownMenuItem key={p.label} asChild>
                        <a
                          href={p.href}
                          target={p.store ? "_blank" : undefined}
                          rel={p.store ? "noopener noreferrer" : undefined}
                          className="flex items-center gap-3 px-3 py-2.5 text-xs hover:bg-gray-800 cursor-pointer"
                        >
                          <Icon className="h-4 w-4 text-gray-400" />
                          <div className="flex flex-col">
                            <span className="font-medium text-white">
                              {p.label}
                            </span>
                            <span className="text-[11px] text-gray-400">
                              {p.sub}
                            </span>
                          </div>
                        </a>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Güven Rozetleri */}
            <div className="pt-6 border-t border-gray-800/80 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                {t("trustFreeDeletions")}
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-brand-400" />
                {t("trustSafe")}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                {t("trustNoCard")}
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Inline Variant (Erken Dönüşüm)
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div className="rounded-2xl border-2 border-brand-500/30 bg-gradient-to-br from-brand-50/50 via-card to-brand-100/30 dark:from-brand-950/40 dark:via-card dark:to-brand-900/20 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-2.5 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 dark:bg-brand-500/20 border border-brand-500/30 text-brand-600 dark:text-brand-400 text-xs font-semibold tracking-wide">
              <Sparkles className="h-3.5 w-3.5" />
              {t("inlineCtaBadge")}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
              {customTitle || t("inlineCtaTitle")}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {customSubtitle || t("inlineCtaSubtitle")}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground font-medium">
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5" />
                {t("trustFreeDeletions")}
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-brand-500" />
                {t("trustSafe")}
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                {t("trustNoCard")}
              </span>
            </div>
          </div>

          {/* Aksiyon Alanı */}
          <div className="flex flex-col sm:flex-row lg:flex-col shrink-0 items-stretch sm:items-center lg:items-end gap-2.5">
            <a
              href={primaryHref}
              target={isStore ? "_blank" : undefined}
              rel={isStore ? "noopener noreferrer" : undefined}
              className="inline-flex items-center justify-center gap-2.5 bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md shadow-brand-600/20 transition-all hover:scale-[1.02]"
            >
              <Download className="h-4 w-4" />
              <span>{t("downloadFor", { os: primaryLabel })}</span>
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="inline-flex items-center justify-center gap-1.5 text-xs text-muted-foreground hover:text-foreground py-1 px-2 transition-colors">
                  <span>{primarySublabel}</span>
                  <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {otherPlatforms.map((p) => {
                  const Icon = p.icon;
                  return (
                    <DropdownMenuItem key={p.label} asChild>
                      <a
                        href={p.href}
                        target={p.store ? "_blank" : undefined}
                        rel={p.store ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-2.5 px-3 py-2 text-xs cursor-pointer"
                      >
                        <Icon className="h-4 w-4 text-muted-foreground" />
                        <div className="flex flex-col">
                          <span className="font-medium text-foreground">
                            {p.label}
                          </span>
                          <span className="text-[10px] text-muted-foreground">
                            {p.sub}
                          </span>
                        </div>
                      </a>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </section>
  );
}
