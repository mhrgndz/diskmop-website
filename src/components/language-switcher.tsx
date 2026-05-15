'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

import { cn } from '@/lib/utils';

const locales = [
  { code: 'tr', label: 'TR' },
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
] as const;

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="inline-flex items-center gap-0.5 rounded-lg bg-muted p-0.5">
      {locales.map((l) => (
        <button
          key={l.code}
          onClick={() => switchTo(l.code)}
          className={cn(
            'rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors',
            locale === l.code
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          )}
          aria-label={`Switch to ${l.label}`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
