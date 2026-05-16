'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
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
  Clock,
  FileCheck,
  PackageX,
  Images,
  HeartPulse,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

interface Feature {
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
}

const features: Feature[] = [
  { icon: HardDrive, titleKey: '0', descKey: '0' },
  { icon: Search, titleKey: '1', descKey: '1' },
  { icon: Copy, titleKey: '2', descKey: '2' },
  { icon: Zap, titleKey: '3', descKey: '3' },
  { icon: Download, titleKey: '4', descKey: '4' },
  { icon: Trash2, titleKey: '5', descKey: '5' },
  { icon: Globe, titleKey: '6', descKey: '6' },
  { icon: Recycle, titleKey: '7', descKey: '7' },
  { icon: Wifi, titleKey: '8', descKey: '8' },
  { icon: Rocket, titleKey: '9', descKey: '9' },
  { icon: Activity, titleKey: '10', descKey: '10' },
  { icon: FolderOpen, titleKey: '11', descKey: '11' },
  { icon: ShieldX, titleKey: '12', descKey: '12' },
  { icon: TreePine, titleKey: '13', descKey: '13' },
  { icon: Cpu, titleKey: '14', descKey: '14' },
  { icon: Settings2, titleKey: '15', descKey: '15' },
  { icon: Clock, titleKey: '16', descKey: '16' },
  { icon: FileCheck, titleKey: '17', descKey: '17' },
  { icon: PackageX, titleKey: '18', descKey: '18' },
  { icon: Images, titleKey: '19', descKey: '19' },
  { icon: HeartPulse, titleKey: '20', descKey: '20' },
];

export function FeaturesGrid() {
  const t = useTranslations('features');

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

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={cn(
                  'bg-card rounded-2xl p-6 border',
                  'hover:border-brand-500/50 hover:shadow-lg hover:shadow-brand-500/5 hover:-translate-y-1',
                  'transition-all duration-300 group'
                )}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950/50 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-brand-500" />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-foreground mt-4">
                  {t(`items.${feature.titleKey}.title`)}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {t(`items.${feature.descKey}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
