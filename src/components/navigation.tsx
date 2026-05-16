'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { LanguageSwitcher } from '@/components/language-switcher';
import { ThemeToggle } from '@/components/theme-toggle';
import { DownloadDropdown } from '@/components/download-dropdown';

interface NavLink {
  key: string;
  href: string;
}

export function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();

  const navLinks: NavLink[] = [
    { key: 'features', href: '#features' },
    { key: 'pricing', href: '#pricing' },
    { key: 'faq', href: '#faq' },
    { key: 'blog', href: `/${locale}/blog` },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 transition-shadow duration-300',
          isScrolled && 'shadow-sm'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo */}
            <a href="/" className="flex items-center gap-2.5 shrink-0">
              <Image
                src="/brand/icon.svg"
                alt="Disk Mop"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-bold text-lg text-foreground">
                Disk Mop
              </span>
            </a>

            {/* Center: Nav Links (desktop) */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-lg hover:bg-muted"
                >
                  {t(link.key)}
                </a>
              ))}
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-1.5">
              <div className="hidden sm:flex items-center gap-1.5">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
              <div className="hidden sm:block">
                <DownloadDropdown variant="secondary" />
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
            <div className="flex items-center gap-3 mt-4">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
            <div className="mt-2">
              <DownloadDropdown variant="primary" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
