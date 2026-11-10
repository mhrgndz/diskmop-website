"use client";

import { POLICY_LOCALES } from "@/lib/locales";
import { useTranslations, useLocale } from "next-intl";
import { Twitter, Instagram, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { localeHref } from "@/lib/locale-path";
import { BrandMark } from "@/components/brand-mark";
import { OtherApps } from "@/components/other-apps";

interface FooterLink {
  labelKey: string;
  href: string;
}

interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

// Karşılığı olmayan `href: '#'` bağlantılar KALDIRILDI (changelog, hakkımızda,
// kariyer, şartlar, KVKK, yardım merkezi, durum sayfası). Hiçbir yere gitmeyen
// bağlantı hem kullanıcıyı hem tarayıcıyı yanıltır; sayfalar yazıldığında geri
// eklenir. Ayrıca /blog ve /privacy artık localeHref'ten geçiyor — Türkçe
// kullanıcı Blog'a bastığında İngilizce sürüme düşüyordu.
function getProductLinks(locale: string): FooterLink[] {
  return [
    { labelKey: "product.features", href: localeHref(locale, "/#features") },
    { labelKey: "product.pricing", href: localeHref(locale, "/#pricing") },
    { labelKey: "product.faq", href: localeHref(locale, "/#faq") },
    { labelKey: "product.blog", href: localeHref(locale, "/blog") },
    { labelKey: "product.tools", href: localeHref(locale, "/tools") },
    {
      labelKey: "product.calculator",
      href: localeHref(locale, "/tools/disk-space-calculator"),
    },
  ];
}

const companyLinks: FooterLink[] = [
  { labelKey: "company.contact", href: "mailto:diskmopdev@gmail.com" },
];

function getLegalLinks(locale: string): FooterLink[] {
  // Politika yalnız 8 dilde çevrili; diğer dillerde doğrudan İngilizce sürüme.
  const policyLocale = POLICY_LOCALES.includes(locale) ? locale : "en";
  return [
    { labelKey: "legal.privacy", href: localeHref(policyLocale, "/privacy") },
  ];
}

const supportLinks: FooterLink[] = [
  { labelKey: "support.email", href: "mailto:diskmopdev@gmail.com" },
];

// github.com/diskmop 404 veriyor (2026-09-04 doğrulandı) — kaldırıldı.
// Gerçek hesap açılırsa geri konur.
const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/diskmop/",
    icon: Instagram,
  },
  { label: "Twitter", href: "https://twitter.com/diskmop", icon: Twitter },
  { label: "Email", href: "mailto:diskmopdev@gmail.com", icon: Mail },
];

function FooterColumn({
  title,
  links,
  t,
}: {
  title: string;
  links: FooterLink[];
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <div>
      <h3 className="text-white font-semibold text-sm mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => {
          const isInternal =
            link.href.startsWith("/") && !link.href.includes("#");
          return (
            <li key={link.labelKey}>
              {isInternal ? (
                <Link
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {t(link.labelKey)}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {t(link.labelKey)}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const productLinks = getProductLinks(locale);

  return (
    <footer className="mt-24 bg-navy text-gray-400 dark:bg-[#050b14] lg:mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <BrandMark className="h-10 w-10" />
              <span className="text-white font-extrabold text-xl tracking-tight">
                DiskMop
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-2">{t("slogan")}</p>
          </div>

          {/* Link Columns */}
          <FooterColumn title={t("product.title")} links={productLinks} t={t} />
          <FooterColumn title={t("company.title")} links={companyLinks} t={t} />
          <FooterColumn
            title={t("legal.title")}
            links={getLegalLinks(locale)}
            t={t}
          />
          <FooterColumn title={t("support.title")} links={supportLinks} t={t} />
        </div>

        <OtherApps />

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-gray-500">
            <p>{t("copyright")}</p>
            <span className="hidden sm:inline">·</span>
            <a
              href="https://lovasoftware.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Powered by Lova Software
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-500 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
