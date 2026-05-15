'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

import { cn } from '@/lib/utils';
import { DownloadDropdown } from '@/components/download-dropdown';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium',
                  'bg-brand-50 dark:bg-brand-950/50 text-brand-600 border border-brand-200 dark:border-brand-800'
                )}
              >
                {t('badge')}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
            >
              {t('title')}{' '}
              <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
                {t('titleHighlight')}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0"
            >
              {t('subtitle')}
            </motion.p>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <DownloadDropdown variant="primary" />
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex items-center gap-3 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {t('users')}
              </span>
            </motion.div>

            {/* Platform Micro Badge */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-4 text-xs text-muted-foreground"
            >
              {t('platforms')}
            </motion.p>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-1/2 flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-brand-500/20 via-purple-500/15 to-cyan-500/20 blur-3xl rounded-full" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/screenshots/01-overview.png"
                  alt="Disk Mop Overview"
                  width={1280}
                  height={800}
                  className="relative z-10 w-full h-auto"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
