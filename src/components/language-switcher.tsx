"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Globe, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { LOCALES, LOCALE_LABELS } from "@/lib/locales";
import { useAvailableLocales } from "@/components/available-locales";

const locales = LOCALES.map((code) => ({ code, ...LOCALE_LABELS[code] }));

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = locales.find((l) => l.code === locale) || locales[0];

  // Makale yalnız bazı dillerde varsa, olmayan dile geçince 404 yerine
  // o dilin blog listesine gidilir.
  const available = useAvailableLocales();

  const switchTo = (newLocale: string) => {
    setOpen(false);
    if (available && !available.includes(newLocale)) {
      router.replace("/blog", { locale: newLocale });
      return;
    }
    router.replace(pathname, { locale: newLocale });
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1.5 rounded-lg bg-muted px-2.5 py-1.5 text-xs font-semibold text-foreground hover:bg-muted/80 transition-colors"
        aria-label="Change language"
      >
        <Globe className="h-3.5 w-3.5" />
        {current.flag}
        <ChevronDown
          className={cn("h-3 w-3 transition-transform", open && "rotate-180")}
        />
      </button>

      {open && (
        <div className="absolute end-0 top-full mt-1 w-48 max-h-80 overflow-y-auto rounded-lg border border-border bg-background shadow-lg z-50 py-1">
          {locales.map((l) => (
            <button
              key={l.code}
              onClick={() => switchTo(l.code)}
              className={cn(
                "w-full flex items-center gap-2 px-3 py-2 text-sm text-start transition-colors",
                locale === l.code
                  ? "bg-muted text-foreground font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <span className="text-xs font-semibold w-6">{l.flag}</span>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
