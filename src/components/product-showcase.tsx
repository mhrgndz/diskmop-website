'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
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
  FolderOpen,
  ShieldX,
  TreePine,
  Cpu,
  Settings2,
  Eraser,
  FileCheck,
  PackageX,
  Images,
  Activity,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

interface ShowcaseTab {
  id: string;
  icon: LucideIcon;
  nameKey: string;
  descKey: string;
  screenshot: string;
}

// Ekran görüntüleri 1600 px genişlikte WebP (kaynak 1920 px PNG'lerden üretildi,
// 5,5 MB -> 767 KB). next/image yerine doğrudan <img>: dosyalar zaten optimize,
// böylece sekme değişiminde /_next/image gidiş-dönüşü beklenmiyor.
const IMG_W = 1600;
const IMG_H = 860;

const showcaseTabs: ShowcaseTab[] = [
  { id: 'overview', icon: LayoutDashboard, nameKey: '0', descKey: '0', screenshot: '/screenshots/01-overview.webp' },
  { id: 'disk-analysis', icon: HardDrive, nameKey: '1', descKey: '1', screenshot: '/screenshots/02-disk-analyzer.webp' },
  { id: 'large-files', icon: Search, nameKey: '2', descKey: '2', screenshot: '/screenshots/03-large-files.webp' },
  { id: 'duplicates', icon: Copy, nameKey: '3', descKey: '3', screenshot: '/screenshots/04-duplicates.webp' },
  { id: 'speed-up', icon: Zap, nameKey: '4', descKey: '4', screenshot: '/screenshots/05-speed-up.webp' },
  { id: 'downloads', icon: Download, nameKey: '5', descKey: '5', screenshot: '/screenshots/06-downloads.webp' },
  { id: 'cache', icon: Trash2, nameKey: '6', descKey: '6', screenshot: '/screenshots/07-cache.webp' },
  { id: 'browser', icon: Globe, nameKey: '7', descKey: '7', screenshot: '/screenshots/08-browser.webp' },
  { id: 'recycle-bin', icon: Recycle, nameKey: '8', descKey: '8', screenshot: '/screenshots/09-recycle-bin.webp' },
  { id: 'dns-cache', icon: Wifi, nameKey: '9', descKey: '9', screenshot: '/screenshots/10-dns-cache.webp' },
  { id: 'startup', icon: Rocket, nameKey: '10', descKey: '10', screenshot: '/screenshots/11-startup.webp' },
  { id: 'empty-folders', icon: FolderOpen, nameKey: '11', descKey: '11', screenshot: '/screenshots/12-empty-folders.webp' },
  { id: 'file-shredder', icon: ShieldX, nameKey: '12', descKey: '12', screenshot: '/screenshots/13-file-shredder.webp' },
  { id: 'disk-treemap', icon: TreePine, nameKey: '13', descKey: '13', screenshot: '/screenshots/14-disk-treemap.webp' },
  { id: 'ram-cleaner', icon: Cpu, nameKey: '14', descKey: '14', screenshot: '/screenshots/15-ram-cleaner.webp' },
  { id: 'service-manager', icon: Settings2, nameKey: '15', descKey: '15', screenshot: '/screenshots/16-service-manager.webp' },
  // 16. sıra eskiden "Scheduled Cleanup" idi; o ekran UYGULAMADA YOK, ekran
  // görüntüsü de gelmedi. Yerine gerçek bir ekran olan Kaldırma Artıkları kondu.
  { id: 'uninstall-leftovers', icon: Eraser, nameKey: '16', descKey: '16', screenshot: '/screenshots/17-uninstall-leftovers.webp' },
  { id: 'privacy-report', icon: FileCheck, nameKey: '17', descKey: '17', screenshot: '/screenshots/18-privacy-report.webp' },
  { id: 'unused-apps', icon: PackageX, nameKey: '18', descKey: '18', screenshot: '/screenshots/19-unused-apps.webp' },
  { id: 'visual-duplicates', icon: Images, nameKey: '19', descKey: '19', screenshot: '/screenshots/20-visual-duplicates.webp' },
  { id: 'disk-health', icon: Activity, nameKey: '20', descKey: '20', screenshot: '/screenshots/21-disk-health.webp' },
];

export function ProductShowcase() {
  const t = useTranslations('showcase');
  const [activeTab, setActiveTab] = useState(showcaseTabs[0].id);
  const sectionRef = useRef<HTMLElement>(null);

  // Sekme içeriği yalnız aktifken DOM'da durur, yani sekmeye basıldığında görsel
  // o an indirilirdi. Bölüm görünür olunca kalan görselleri boşta zamanda,
  // teker teker önden indiriyoruz: ilk açılışı yavaşlatmaz, geçiş anında olur.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const baglanti = (navigator as { connection?: { saveData?: boolean } }).connection;
    if (baglanti?.saveData) return;

    const gozlemci = new IntersectionObserver(
      (girisler) => {
        if (!girisler.some((g) => g.isIntersecting)) return;
        gozlemci.disconnect();

        const kuyruk = showcaseTabs.slice(1).map((tab) => tab.screenshot);
        const sirala = (fn: () => void) => {
          const ric = (window as { requestIdleCallback?: (cb: () => void, o?: object) => void })
            .requestIdleCallback;
          if (ric) ric(fn, { timeout: 2000 });
          else window.setTimeout(fn, 200);
        };
        const sonraki = () => {
          const src = kuyruk.shift();
          if (!src) return;
          const img = new window.Image();
          img.onload = img.onerror = () => sirala(sonraki);
          img.src = src;
        };
        sirala(sonraki);
      },
      { rootMargin: '300px' }
    );

    gozlemci.observe(el);
    return () => gozlemci.disconnect();
  }, []);

  return (
    <section className="py-24" ref={sectionRef}>
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <TabsList className="flex-wrap h-auto gap-1 p-1.5">
                {showcaseTabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className="gap-2 px-3 py-2"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden sm:inline text-xs">
                        {t(`tabs.${tab.nameKey}.name`)}
                      </span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>

            {showcaseTabs.map((tab, index) => (
              <TabsContent key={tab.id} value={tab.id}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="rounded-2xl border overflow-hidden shadow-2xl max-w-5xl mx-auto">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={tab.screenshot}
                        alt={t(`tabs.${tab.nameKey}.name`)}
                        width={IMG_W}
                        height={IMG_H}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                        fetchPriority={index === 0 ? 'high' : 'auto'}
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="mt-4 text-center text-muted-foreground max-w-lg mx-auto">
                      {t(`tabs.${tab.descKey}.description`)}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
