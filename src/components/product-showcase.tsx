'use client';

import { useEffect, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
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
  Gauge,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ShowcaseVideo } from '@/components/showcase-video';

interface ShowcaseTab {
  /** public/videos/<id>/<dil>.mp4 + <dil>.webp kapak */
  id: string;
  icon: LucideIcon;
  nameKey: string;
  descKey: string;
}

// Tanıtım videoları uygulamadan demo veriyle, 8 dilde kaydedildi (1280×688).
// Eskiden burada ekran görüntüleri vardı; onlarda gerçek bir bilgisayarın
// dosya adları görünüyordu. Demo modu: diskmop-app src/main/demo
// (DISKMOP_DEMO=1 npm run dev).
const VIDEO_W = 1280;
const VIDEO_H = 688;

const videoSrc = (id: string, locale: string) => `/videos/${id}/${locale}.mp4`;
const posterSrc = (id: string, locale: string) => `/videos/${id}/${locale}.webp`;

const showcaseTabs: ShowcaseTab[] = [
  { id: 'boot-speed', icon: Gauge, nameKey: '21', descKey: '21' },
  { id: 'overview', icon: LayoutDashboard, nameKey: '0', descKey: '0' },
  { id: 'disk-analysis', icon: HardDrive, nameKey: '1', descKey: '1' },
  { id: 'large-files', icon: Search, nameKey: '2', descKey: '2' },
  { id: 'duplicates', icon: Copy, nameKey: '3', descKey: '3' },
  { id: 'speed-up', icon: Zap, nameKey: '4', descKey: '4' },
  { id: 'downloads', icon: Download, nameKey: '5', descKey: '5' },
  { id: 'cache', icon: Trash2, nameKey: '6', descKey: '6' },
  { id: 'browser', icon: Globe, nameKey: '7', descKey: '7' },
  { id: 'recycle-bin', icon: Recycle, nameKey: '8', descKey: '8' },
  { id: 'dns-cache', icon: Wifi, nameKey: '9', descKey: '9' },
  { id: 'startup', icon: Rocket, nameKey: '10', descKey: '10' },
  { id: 'empty-folders', icon: FolderOpen, nameKey: '11', descKey: '11' },
  { id: 'file-shredder', icon: ShieldX, nameKey: '12', descKey: '12' },
  { id: 'disk-treemap', icon: TreePine, nameKey: '13', descKey: '13' },
  { id: 'ram-cleaner', icon: Cpu, nameKey: '14', descKey: '14' },
  { id: 'service-manager', icon: Settings2, nameKey: '15', descKey: '15' },
  // 16. sıra eskiden "Scheduled Cleanup" idi; o ekran UYGULAMADA YOK.
  // Yerine gerçek bir ekran olan Kaldırma Artıkları kondu.
  { id: 'uninstall-leftovers', icon: Eraser, nameKey: '16', descKey: '16' },
  { id: 'privacy-report', icon: FileCheck, nameKey: '17', descKey: '17' },
  { id: 'unused-apps', icon: PackageX, nameKey: '18', descKey: '18' },
  { id: 'visual-duplicates', icon: Images, nameKey: '19', descKey: '19' },
  { id: 'disk-health', icon: Activity, nameKey: '20', descKey: '20' },
];

export function ProductShowcase() {
  const t = useTranslations('showcase');
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState(showcaseTabs[0].id);
  const sectionRef = useRef<HTMLElement>(null);

  // Sekme içeriği yalnız aktifken DOM'da durur. Bölüm görünür olunca diğer
  // sekmelerin KAPAKLARINI boşta zamanda, teker teker önden indiriyoruz: sekmeye
  // basınca kapak anında görünür. Videonun kendisi ancak sekme açılıp ekrana
  // gelince yüklenir (ShowcaseVideo, preload="none").
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const baglanti = (navigator as { connection?: { saveData?: boolean } }).connection;
    if (baglanti?.saveData) return;

    const gozlemci = new IntersectionObserver(
      (girisler) => {
        if (!girisler.some((g) => g.isIntersecting)) return;
        gozlemci.disconnect();

        const kuyruk = showcaseTabs.slice(1).map((tab) => posterSrc(tab.id, locale));
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
  }, [locale]);

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

            {showcaseTabs.map((tab) => (
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
                      <ShowcaseVideo
                        src={videoSrc(tab.id, locale)}
                        poster={posterSrc(tab.id, locale)}
                        label={t(`tabs.${tab.nameKey}.name`)}
                        width={VIDEO_W}
                        height={VIDEO_H}
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
