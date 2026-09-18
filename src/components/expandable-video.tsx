'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Maximize2, X } from 'lucide-react';

import { ShowcaseVideo } from '@/components/showcase-video';

interface ExpandableVideoProps {
  src: string;
  poster: string;
  /** Pencere başlığı ve erişilebilir ad */
  title: string;
  width: number;
  height: number;
  lazy?: boolean;
}

/**
 * Tanıtım videosu + tıklayınca büyük pencere. Videonun üstüne tıklamak
 * pencereyi açar; klavye için köşede ayrı bir "Büyüt" düğmesi var (denetimli
 * `<video>` bir `<button>`un içine konamaz — geçersiz HTML olurdu).
 * Pencere Esc, dış alana tıklama ya da X ile kapanır.
 */
export function ExpandableVideo({ src, poster, title, width, height, lazy }: ExpandableVideoProps) {
  const t = useTranslations('common');
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="group/video relative cursor-zoom-in" onClick={() => setOpen(true)}>
        <ShowcaseVideo src={src} poster={poster} label={title} width={width} height={height} lazy={lazy} />
        <button
          type="button"
          aria-label={`${t('enlarge')}: ${title}`}
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity group-hover/video:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white [@media(hover:none)]:opacity-100"
        >
          <Maximize2 className="h-4 w-4" />
        </button>
      </div>

      <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm" />
          {/* Genişlik üç sınırın en küçüğü: ekranın %94'ü, 1600 px ve videonun
              en-boy oranıyla (1280/688 ≈ 1,86) ekran yüksekliğinin %80'ine sığan genişlik. */}
          <DialogPrimitive.Content
            aria-describedby={undefined}
            className="fixed left-1/2 top-1/2 z-50 w-[min(94vw,1600px,calc(80vh*1.86))] -translate-x-1/2 -translate-y-1/2 focus:outline-none"
          >
            <div className="mb-3 flex items-center gap-4">
              <DialogPrimitive.Title className="text-base font-semibold text-white sm:text-lg">
                {title}
              </DialogPrimitive.Title>
              <DialogPrimitive.Close
                aria-label={t('close')}
                className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <X className="h-5 w-5" />
              </DialogPrimitive.Close>
            </div>
            <video
              src={src}
              poster={poster}
              width={width}
              height={height}
              aria-label={title}
              className="block h-auto w-full rounded-xl bg-black shadow-2xl"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
}
