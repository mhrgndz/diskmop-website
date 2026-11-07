"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Maximize2, X } from "lucide-react";

interface ExpandableImageProps {
  src: string;
  /** Pencere başlığı ve görselin alternatif metni */
  title: string;
  width: number;
  height: number;
  /** Ekrana yaklaşana kadar indirme (sayfanın alt kısmındaki görseller için) */
  lazy?: boolean;
}

/**
 * Uygulama ekran görüntüsü + tıklayınca büyük pencere. Görsele tıklamak pencereyi
 * açar; klavye için köşede ayrı bir "Büyüt" düğmesi var. Pencere Esc, dış alana
 * tıklama ya da X ile kapanır.
 */
export function ExpandableImage({
  src,
  title,
  width,
  height,
  lazy,
}: ExpandableImageProps) {
  const t = useTranslations("common");
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="group/image relative cursor-zoom-in"
        onClick={() => setOpen(true)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={title}
          width={width}
          height={height}
          loading={lazy ? "lazy" : "eager"}
          decoding="async"
          className="block h-auto w-full bg-[#0b1220]"
        />
        <button
          type="button"
          aria-label={`${t("enlarge")}: ${title}`}
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
          className="absolute end-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity group-hover/image:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white [@media(hover:none)]:opacity-100"
        >
          <Maximize2 className="h-4 w-4" />
        </button>
      </div>

      <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm" />
          {/* Genişlik: ekranın %94'ü, 1400 px ve görselin en-boy oranıyla (1076/759 ≈ 1,42)
              ekran yüksekliğinin %80'ine sığan genişlik — hangisi en küçükse. */}
          <DialogPrimitive.Content
            aria-describedby={undefined}
            className="fixed left-1/2 top-1/2 z-50 w-[min(94vw,1400px,calc(80vh*1.42))] -translate-x-1/2 -translate-y-1/2 focus:outline-none"
          >
            <div className="mb-3 flex items-center gap-4">
              <DialogPrimitive.Title className="text-base font-semibold text-white sm:text-lg">
                {title}
              </DialogPrimitive.Title>
              <DialogPrimitive.Close
                aria-label={t("close")}
                className="ms-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <X className="h-5 w-5" />
              </DialogPrimitive.Close>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={title}
              width={width}
              height={height}
              className="block h-auto w-full rounded-xl bg-black shadow-2xl"
            />
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
}
