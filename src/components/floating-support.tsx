'use client';

import { Mail } from 'lucide-react';

import { cn } from '@/lib/utils';

export function FloatingSupport() {
  return (
    <a
      href="mailto:mhrgndz171@gmail.com"
      className={cn(
        'fixed bottom-6 right-6 z-40',
        'w-14 h-14 bg-brand-600 text-white rounded-full shadow-lg shadow-brand-600/25',
        'hover:shadow-brand-600/40 hover:scale-110 transition-all',
        'flex items-center justify-center'
      )}
      aria-label="Email Support"
    >
      <Mail className="h-6 w-6" />
    </a>
  );
}
