import React from "react";
import Link from "next/link";
import { localeHref } from "@/lib/locale-path";
import { getArticle } from "@/content/articles";

/**
 * Yeni dillerde (ar he id ko pl ro ru th vi zh-Hans) yalnız bazı makaleler var.
 * O dilde olmayan bir makaleye giden iç bağlantı 404 verirdi; düz metne düşer.
 */
function isLinkable(href: string, locale: string): boolean {
  const match = href.match(/^\/blog\/([^/#?]+)/);
  if (!match) return true;
  const article = getArticle(match[1]);
  return !article || Boolean(article.content[locale]);
}

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

      if (isInternal && !isLinkable(href, locale)) {
        parts.push(label);
      } else if (isInternal) {
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
