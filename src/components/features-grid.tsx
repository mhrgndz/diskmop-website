'use client';

import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  Gauge,
  HardDrive,
  Search,
  Copy,
  Zap,
  Download,
  Trash2,
  Globe,
  Recycle,
  Wifi,
  Rocket,
  Activity,
  FolderOpen,
  ShieldX,
  TreePine,
  Cpu,
  Settings2,
  FileCheck,
  PackageX,
  Images,
  HeartPulse,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { ExpandableVideo } from '@/components/expandable-video';
import {
  SHOWCASE_VIDEO_W,
  SHOWCASE_VIDEO_H,
  showcaseVideoSrc,
  showcasePosterSrc,
} from '@/components/showcase-video';

interface Feature {
  icon: LucideIcon;
  /** messages: features.items.<itemKey>.{title,description} */
  itemKey: string;
  /** public/videos/<video>/<dil>.mp4 — tanıtım sekmeleriyle aynı dosyalar */
  video: string;
}

// İlk kart öne çıkan (geniş, "Yeni" rozetli): siteye en çok "Windows açılışını
// hızlandırma" aramasıyla geliniyor.
const features: Feature[] = [
  { icon: Gauge, itemKey: '21', video: 'boot-speed' },
  { icon: HardDrive, itemKey: '0', video: 'disk-analysis' },
  { icon: Search, itemKey: '1', video: 'large-files' },
  { icon: Copy, itemKey: '2', video: 'duplicates' },
  { icon: Zap, itemKey: '3', video: 'speed-up' },
  { icon: Download, itemKey: '4', video: 'downloads' },
  { icon: Trash2, itemKey: '5', video: 'cache' },
  { icon: Globe, itemKey: '6', video: 'browser' },
  { icon: Recycle, itemKey: '7', video: 'recycle-bin' },
  { icon: Wifi, itemKey: '8', video: 'dns-cache' },
  { icon: Rocket, itemKey: '9', video: 'startup' },
  // Sistem sağlık puanı Genel Bakış ekranında gösteriliyor.
  { icon: Activity, itemKey: '10', video: 'overview' },
  { icon: FolderOpen, itemKey: '11', video: 'empty-folders' },
  { icon: ShieldX, itemKey: '12', video: 'file-shredder' },
  { icon: TreePine, itemKey: '13', video: 'disk-treemap' },
  { icon: Cpu, itemKey: '14', video: 'ram-cleaner' },
  { icon: Settings2, itemKey: '15', video: 'service-manager' },
  // items.16 "Scheduled Cleanup": uygulamada böyle bir ekran YOK, gösterilecek
  // video da yok — bu yüzden ızgarada değil (metni messages'ta duruyor).
  { icon: FileCheck, itemKey: '17', video: 'privacy-report' },
  { icon: PackageX, itemKey: '18', video: 'unused-apps' },
  { icon: Images, itemKey: '19', video: 'visual-duplicates' },
  { icon: HeartPulse, itemKey: '20', video: 'disk-health' },
];

export function FeaturesGrid() {
  const t = useTranslations('features');
  const locale = useLocale();

  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Features Grid: her kartta o ekranın kısa videosu. Öne çıkan kart en
            başta tam genişlikte şerit (geniş ekranda solda video, sağda metin);
            altındaki 20 kart 4 sütunda 5 tam satır doldurur. */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const featured = index === 0;
            const title = t(`items.${feature.itemKey}.title`);
            return (
              <motion.div
                key={feature.itemKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.05 }}
                className={cn(
                  'bg-card rounded-2xl border overflow-hidden flex flex-col',
                  'hover:border-brand-500/50 hover:shadow-lg hover:shadow-brand-500/5 hover:-translate-y-1',
                  'transition-all duration-300',
                  featured && 'sm:col-span-2 lg:col-span-4 lg:flex-row border-brand-500/40'
                )}
              >
                <div className={cn('border-b', featured && 'lg:w-[62%] lg:shrink-0 lg:border-b-0 lg:border-r')}>
                  <ExpandableVideo
                    lazy
                    src={showcaseVideoSrc(feature.video, locale)}
                    poster={showcasePosterSrc(feature.video, locale)}
                    title={title}
                    width={SHOWCASE_VIDEO_W}
                    height={SHOWCASE_VIDEO_H}
                  />
                </div>

                <div className={cn('flex-1', featured ? 'p-6 sm:p-8 lg:p-10 flex flex-col justify-center' : 'p-5')}>
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        'rounded-xl bg-brand-50 dark:bg-brand-950/50 flex items-center justify-center shrink-0',
                        featured ? 'w-11 h-11' : 'w-9 h-9'
                      )}
                    >
                      <Icon className={cn('text-brand-500', featured ? 'h-6 w-6' : 'h-5 w-5')} />
                    </div>
                    <h3 className={cn('font-semibold text-foreground', featured && 'text-xl sm:text-2xl')}>
                      {title}
                    </h3>
                    {featured && (
                      <span className="ml-auto shrink-0 rounded-full bg-brand-500 px-2.5 py-1 text-xs font-semibold text-white">
                        {t('new')}
                      </span>
                    )}
                  </div>

                  <p
                    className={cn(
                      'text-muted-foreground mt-3 leading-relaxed',
                      featured ? 'text-base sm:text-lg' : 'text-sm'
                    )}
                  >
                    {t(`items.${feature.itemKey}.description`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
