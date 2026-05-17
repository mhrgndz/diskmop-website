'use client';

import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Twitter, Github, Mail } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface FooterLink {
  labelKey: string;
  href: string;
}

interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

function getProductLinks(locale: string): FooterLink[] {
  return [
    { labelKey: 'product.features', href: '#features' },
    { labelKey: 'product.pricing', href: '#pricing' },
    { labelKey: 'product.faq', href: '#faq' },
    { labelKey: 'product.blog', href: `/${locale}/blog` },
    { labelKey: 'product.changelog', href: '#' },
  ];
}

const companyLinks: FooterLink[] = [
  { labelKey: 'company.about', href: '#' },
  { labelKey: 'company.contact', href: '#' },
  { labelKey: 'company.careers', href: '#' },
];

const legalLinks: FooterLink[] = [
  { labelKey: 'legal.privacy', href: '#' },
  { labelKey: 'legal.terms', href: '#' },
  { labelKey: 'legal.kvkk', href: '#' },
];

const supportLinks: FooterLink[] = [
  { labelKey: 'support.helpCenter', href: '#' },
  { labelKey: 'support.email', href: 'mailto:info@lovasoftware.com' },
  { labelKey: 'support.status', href: '#' },
];

const socialLinks: SocialLink[] = [
  { label: 'Twitter', href: 'https://twitter.com/diskmop', icon: Twitter },
  { label: 'GitHub', href: 'https://github.com/diskmop', icon: Github },
  { label: 'Email', href: 'mailto:info@lovasoftware.com', icon: Mail },
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
        {links.map((link) => (
          <li key={link.labelKey}>
            <a
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {t(link.labelKey)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const productLinks = getProductLinks(locale);

  return (
    <footer className="bg-gray-950 dark:bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/brand/icon.svg"
                alt="Disk Mop"
                width={40}
                height={40}
              />
              <span className="text-white font-bold text-lg">Disk Mop</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">{t('slogan')}</p>
          </div>

          {/* Link Columns */}
          <FooterColumn
            title={t('product.title')}
            links={productLinks}
            t={t}
          />
          <FooterColumn
            title={t('company.title')}
            links={companyLinks}
            t={t}
          />
          <FooterColumn
            title={t('legal.title')}
            links={legalLinks}
            t={t}
          />
          <FooterColumn
            title={t('support.title')}
            links={supportLinks}
            t={t}
          />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-gray-500">
            <p>{t('copyright')}</p>
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
