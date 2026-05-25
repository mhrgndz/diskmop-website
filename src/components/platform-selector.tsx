'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Monitor, Laptop, Download, ShieldCheck, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { useOSDetection, type OSType } from '@/hooks/use-os-detection';
import { useAppInfo } from '@/hooks/use-app-info';
import { Button } from '@/components/ui/button';

interface PlatformCard {
  key: 'windows' | 'mac';
  matchOS: OSType;
  icon: LucideIcon;
  name: string;
  ext: string;
  systemReq: string;
  href: string;
  signed?: boolean;
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
];

function formatCount(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return n.toString();
}

export function PlatformSelector() {
  const t = useTranslations('platformSelector');
  const detectedOS = useOSDetection();
  const { version, downloads, windowsSize, macSize } = useAppInfo();

  const getSize = (key: string) => (key === 'windows' ? windowsSize : macSize) || '~80 MB';
  const getCount = (key: string) => (key === 'windows' ? downloads.windows : downloads.mac);

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            const isHighlighted = detectedOS === platform.matchOS;
            const count = getCount(platform.key);

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
                  {version || 'v1.0.0'} &bull; {getSize(platform.key)} &bull;{' '}
                  {platform.ext}
                </p>

                {count > 0 && (
                  <div className="flex items-center justify-center gap-1.5 mt-2 text-muted-foreground">
                    <Users className="h-3.5 w-3.5" />
                    <span className="text-xs font-medium">
                      {formatCount(count)} {t('downloads')}
                    </span>
                  </div>
                )}

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
                    <a href={platform.href}>
                      <Download className="h-4 w-4" />
                      {t(`${platform.key}.download`)}
                    </a>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {downloads.total > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-sm text-muted-foreground mt-8"
          >
            {formatCount(downloads.total)}+ {t('totalDownloads')}
          </motion.p>
        )}
      </div>
    </section>
  );
}
