'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  HardDrive,
  Search,
  Copy,
  Download,
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

const showcaseTabs: ShowcaseTab[] = [
  {
    id: 'overview',
    icon: LayoutDashboard,
    nameKey: '0',
    descKey: '0',
    screenshot: '/screenshots/01-overview.png',
  },
  {
    id: 'disk-analysis',
    icon: HardDrive,
    nameKey: '1',
    descKey: '1',
    screenshot: '/screenshots/02-disk-analyzer.png',
  },
  {
    id: 'large-files',
    icon: Search,
    nameKey: '2',
    descKey: '2',
    screenshot: '/screenshots/03-large-files.png',
  },
  {
    id: 'duplicates',
    icon: Copy,
    nameKey: '3',
    descKey: '3',
    screenshot: '/screenshots/04-duplicates.png',
  },
  {
    id: 'downloads',
    icon: Download,
    nameKey: '4',
    descKey: '4',
    screenshot: '/screenshots/05-downloads.png',
  },
];

export function ProductShowcase() {
  const t = useTranslations('showcase');
  const [activeTab, setActiveTab] = useState(showcaseTabs[0].id);

  return (
    <section className="py-24">
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
                      className="gap-2 px-4 py-2"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden sm:inline">
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
                      <Image
                        src={tab.screenshot}
                        alt={t(`tabs.${tab.nameKey}.name`)}
                        width={1280}
                        height={800}
                        className="w-full h-auto"
                        quality={90}
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
