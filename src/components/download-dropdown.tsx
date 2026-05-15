'use client';

import { Monitor, Laptop, ChevronDown, Download } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { cn } from '@/lib/utils';
import { useOSDetection } from '@/hooks/use-os-detection';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

interface DownloadDropdownProps {
  variant?: 'primary' | 'secondary';
  className?: string;
}

interface DownloadOption {
  os: 'windows' | 'mac';
  label: string;
  sublabel?: string;
  href: string;
  size: string;
  icon: typeof Monitor;
}

const downloadOptions: DownloadOption[] = [
  {
    os: 'windows',
    label: 'Windows',
    sublabel: '.exe',
    href: '/downloads/diskmop-setup-windows.exe',
    size: '15 MB',
    icon: Monitor,
  },
  {
    os: 'mac',
    label: 'macOS',
    sublabel: 'Apple Silicon',
    href: '/downloads/diskmop-mac-arm64.dmg',
    size: '15 MB',
    icon: Laptop,
  },
  {
    os: 'mac',
    label: 'macOS',
    sublabel: 'Intel',
    href: '/downloads/diskmop-mac-x64.dmg',
    size: '15 MB',
    icon: Laptop,
  },
];

export function DownloadDropdown({
  variant = 'primary',
  className,
}: DownloadDropdownProps) {
  const t = useTranslations('common');
  const detectedOS = useOSDetection();

  const isRecommended = (option: DownloadOption): boolean => {
    if (detectedOS === 'unknown') return false;
    return option.os === detectedOS;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
            variant === 'primary' &&
              'h-12 bg-brand-600 px-6 text-base text-white shadow-lg hover:bg-brand-700 active:bg-brand-800',
            variant === 'secondary' &&
              'h-10 border border-border bg-background px-4 text-sm hover:bg-muted',
            className
          )}
        >
          <Download className="h-4 w-4" />
          {t('download')}
          <ChevronDown className="h-4 w-4 opacity-60" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-72">
        {downloadOptions.map((option, index) => {
          const Icon = option.icon;
          const recommended = isRecommended(option);

          return (
            <div key={option.href}>
              {index === 1 && <DropdownMenuSeparator />}
              <DropdownMenuItem asChild>
                <a
                  href={option.href}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5',
                    recommended && 'bg-brand-50 dark:bg-brand-950'
                  )}
                >
                  <Icon className="h-5 w-5 shrink-0 text-muted-foreground" />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">
                        {option.label}
                      </span>
                      {option.sublabel && (
                        <span className="text-xs text-muted-foreground">
                          {option.sublabel}
                        </span>
                      )}
                      {recommended && (
                        <Badge variant="default" className="ml-auto text-[10px] px-1.5 py-0">
                          {t('recommended')}
                        </Badge>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {option.size}
                    </span>
                  </div>
                </a>
              </DropdownMenuItem>
            </div>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
