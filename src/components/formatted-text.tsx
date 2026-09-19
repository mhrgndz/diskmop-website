import React from "react";
import Link from "next/link";
import { localeHref } from "@/lib/locale-path";

interface FormattedTextProps {
  text: string;
  locale: string;
}

/**
 * Paragraflar içerisindeki Markdown linklerini [Bağlantı Metni](/blog/slug)
 * ve **kalın** vurguları Next.js Link ve Tailwind stillerine dönüştürür.
 * Çoklu dil desteğine (localeHref) tam uyumludur.
 */
export function FormattedText({ text, locale }: FormattedTextProps) {
  if (!text) return null;

  // Hızlı yol: Markdown biçimlendirmesi yoksa doğrudan metni döndür
  if (!text.includes("[") && !text.includes("**")) {
    return <>{text}</>;
  }

  const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    // Eşleşmeden önceki düz metni ekle
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    if (match[1] && match[2]) {
      // Link eşleşmesi: [label](href)
      const label = match[1];
      const href = match[2];
      const isInternal = href.startsWith("/");

      if (isInternal) {
        parts.push(
          <Link
            key={match.index}
            href={localeHref(locale, href)}
            className="text-brand-600 dark:text-brand-400 font-medium underline underline-offset-2 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
          >
            {label}
          </Link>,
        );
      } else {
        parts.push(
          <a
            key={match.index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 dark:text-brand-400 font-medium underline underline-offset-2 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
          >
            {label}
          </a>,
        );
      }
    } else if (match[3]) {
      // Kalın metin: **metin**
      parts.push(
        <strong key={match.index} className="font-semibold text-foreground">
          {match[3]}
        </strong>,
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return <>{parts}</>;
}
