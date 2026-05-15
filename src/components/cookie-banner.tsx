'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';

export function CookieBanner() {
  const t = useTranslations('cookie');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent) return;

    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  function handleAccept() {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  }

  function handleReject() {
    localStorage.setItem('cookie-consent', 'rejected');
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Text */}
            <p className="text-sm text-foreground">
              {t('text')}{' '}
              <a
                href="#"
                className="text-brand-600 hover:text-brand-700 underline underline-offset-2"
              >
                {t('privacy')}
              </a>
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleReject}
                className="border border-border bg-background hover:bg-muted text-foreground rounded-lg px-4 py-2 text-sm font-medium transition-colors"
              >
                {t('reject')}
              </button>
              <button
                onClick={handleAccept}
                className="bg-brand-600 hover:bg-brand-700 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors"
              >
                {t('accept')}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
