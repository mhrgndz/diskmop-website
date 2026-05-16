'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Monitor, Laptop, Download } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { useOSDetection, type OSType } from '@/hooks/use-os-detection';
import { Button } from '@/components/ui/button';

interface PlatformCard {
  key: 'windows' | 'mac';
  matchOS: OSType;
  icon: LucideIcon;
  name: string;
  version: string;
  size: string;
  ext: string;
  systemReq: string;
  href: string;
}

const platforms: PlatformCard[] = [
  {
    key: 'windows',
    matchOS: 'windows',
    icon: Monitor,
    name: 'Windows',
    version: 'v1.1.0',
    size: '~80 MB',
    ext: '.exe',
    systemReq: 'Windows 10/11 (64-bit)',
    href: 'https://github.com/mhrgndz/diskmop-releases/releases/download/v1.1.0/DiskMop-Setup-1.1.0.exe',
  },
  {
    key: 'mac',
    matchOS: 'mac',
    icon: Laptop,
    name: 'macOS',
    version: 'v1.1.0',
    size: '~175 MB',
    ext: '.dmg',
    systemReq: 'macOS 12+ (Apple Silicon & Intel)',
    href: 'https://github.com/mhrgndz/diskmop-releases/releases/download/v1.1.0/DiskMop-1.1.0.dmg',
  },
];

export function PlatformSelector() {
  const t = useTranslations('platformSelector');
  const detectedOS = useOSDetection();

  return (
    <section id="platforms" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
                {/* Recommended Badge */}
                {isHighlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-brand-600 px-3 py-1 text-xs font-medium text-white shadow-sm">
                      {t(`${platform.key}.recommended`)}
                    </span>
                  </div>
                )}

                {/* Icon */}
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

                {/* Platform Name */}
                <h3 className="text-xl font-semibold text-foreground text-center">
                  {platform.name}
                </h3>

                {/* Version Info */}
                <p className="text-sm text-muted-foreground text-center mt-1">
                  {platform.version} &bull; {platform.size} &bull;{' '}
                  {platform.ext}
                </p>

                {/* System Requirements */}
                <p className="text-xs text-muted-foreground text-center mt-3 bg-muted rounded-lg px-3 py-2">
                  {platform.systemReq}
                </p>

                {/* Download Button */}
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
      </div>
    </section>
  );
}
