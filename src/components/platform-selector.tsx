'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Monitor, Laptop, Smartphone, Download, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { useOSDetection, type OSType } from '@/hooks/use-os-detection';
import { useAppInfo } from '@/hooks/use-app-info';
import { APP_VERSIONS } from '@/lib/app-version';
import { Button } from '@/components/ui/button';

interface PlatformCard {
  key: 'windows' | 'mac' | 'android';
  matchOS: OSType;
  icon: LucideIcon;
  name: string;
  ext: string;
  systemReq: string;
  href: string;
  signed?: boolean;
  store?: boolean;
}

const platforms: PlatformCard[] = [
  {
    key: 'windows',
    matchOS: 'windows',
    icon: Monitor,
    name: 'Windows',
    ext: '.exe',
    systemReq: 'Windows 10/11 (64-bit)',
    href: 'https://api.diskmop.com/download/windows',
    signed: true,
  },
  {
    key: 'mac',
    matchOS: 'mac',
    icon: Laptop,
    name: 'macOS',
    ext: '.dmg',
    systemReq: 'macOS 12+ (Apple Silicon & Intel)',
    href: 'https://api.diskmop.com/download/mac',
    signed: true,
  },
  {
    key: 'android',
    matchOS: 'android',
    icon: Smartphone,
    name: 'Android',
    ext: '',
    systemReq: 'Android 8.0+',
    href: 'https://play.google.com/store/apps/details?id=com.diskmop.android',
    store: true,
  },
];

// Canlı indirme sayaçları KAPALI (kullanıcı kararı, 2026-09-04). API'den gelen
// downloadCounts artık gösterilmiyor; useAppInfo yalnız sürüm ve dosya boyutu için.
export function PlatformSelector() {
  const t = useTranslations('platformSelector');
  const detectedOS = useOSDetection();
  const { version, windowsSize, macSize } = useAppInfo();

  const getSize = (key: string) => (key === 'windows' ? windowsSize : macSize) || '~80 MB';

  /**
   * Sürüm SUNUCUDA basılır. Eskiden burada sabit "v1.0.0" yedeği vardı ve
   * JavaScript çalıştırmayan okuyucular (arama motoru ilk taraması, ChatGPT,
   * Perplexity) ürünü ilk sürümünde sanıyordu. Canlı API yanıtı geldiğinde
   * yalnızca Windows sürümü güncellenir — macOS ayrı bir sürümde ilerliyor.
   */
  const getVersion = (key: string) => {
    if (key === 'windows') return version || `v${APP_VERSIONS.windows}`;
    if (key === 'mac') return `v${APP_VERSIONS.mac}`;
    return `v${APP_VERSIONS.android}`;
  };

  return (
    <section id="platforms" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            const isHighlighted = detectedOS === platform.matchOS;

            return (
              <motion.div
                key={platform.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  'relative bg-card rounded-2xl p-8 border-2 transition-all duration-300',
                  isHighlighted
                    ? 'border-brand-500 shadow-lg shadow-brand-500/10'
                    : 'border-border hover:border-brand-500/50 hover:shadow-lg'
                )}
              >
                {isHighlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-brand-600 px-3 py-1 text-xs font-medium text-white shadow-sm">
                      {t(`${platform.key}.recommended`)}
                    </span>
                  </div>
                )}

                <div className="flex justify-center mb-4">
                  <div
                    className={cn(
                      'w-16 h-16 rounded-2xl flex items-center justify-center',
                      isHighlighted
                        ? 'bg-brand-100 dark:bg-brand-950'
                        : 'bg-muted'
                    )}
                  >
                    <Icon
                      className={cn(
                        'h-8 w-8',
                        isHighlighted
                          ? 'text-brand-600'
                          : 'text-muted-foreground'
                      )}
                    />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground text-center">
                  {platform.name}
                </h3>

                <p className="text-sm text-muted-foreground text-center mt-1">
                  {platform.store ? (
                    `Google Play · v${APP_VERSIONS.android}`
                  ) : (
                    <>
                      {getVersion(platform.key)} &bull; {getSize(platform.key)} &bull;{' '}
                      {platform.ext}
                    </>
                  )}
                </p>

                {platform.signed && (
                  <div className="flex items-center justify-center gap-1.5 mt-3 text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="h-4 w-4" />
                    <span className="text-xs font-semibold">
                      {t(`${platform.key}.signed`)}
                    </span>
                  </div>
                )}

                <p className="text-xs text-muted-foreground text-center mt-3 bg-muted rounded-lg px-3 py-2">
                  {platform.systemReq}
                </p>

                {platform.signed && (
                  <p className="text-[11px] text-muted-foreground text-center mt-2">
                    {t(`${platform.key}.signedNote`)}
                  </p>
                )}

                <div className="mt-6 flex justify-center">
                  <Button
                    asChild
                    variant={isHighlighted ? 'default' : 'outline'}
                    size="lg"
                    className="w-full gap-2"
                  >
                    <a
                      href={platform.href}
                      target={platform.store ? '_blank' : undefined}
                      rel={platform.store ? 'noopener noreferrer' : undefined}
                    >
                      <Download className="h-4 w-4" />
                      {t(`${platform.key}.download`)}
                    </a>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
