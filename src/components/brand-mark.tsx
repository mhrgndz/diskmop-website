import { cn } from "@/lib/utils";

/**
 * DiskMop işareti ("Storage stack"): depolama silindiri, temiz kapağı ve üstünde
 * kabarcıklı sünger. Aynı çizim public/brand/icon.svg'de de var; birini
 * değiştirirsen ikisini birlikte değiştir.
 */
export function BrandMark({
  className,
  title,
}: {
  className?: string;
  /** Verilirse işaret ekran okuyucuya bu adla okunur; verilmezse süs sayılır. */
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("shrink-0", className)}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <path d="M14 30V47A18 7 0 0 0 50 47V30Z" fill="#1D4ED8" />
      <path
        d="M14 38.5A18 7 0 0 0 50 38.5"
        fill="none"
        stroke="#FFFFFF"
        strokeOpacity=".38"
        strokeWidth="1.6"
      />
      <ellipse cx="32" cy="30" rx="18" ry="7" fill="#14B8A6" />
      <circle cx="43" cy="49" r="1.6" fill="#FFFFFF" />
      <g transform="rotate(-10 33 18)">
        <rect
          x="19"
          y="10"
          width="28"
          height="15"
          rx="5"
          fill="#5EEAD4"
          stroke="#0B1B33"
          strokeWidth="2.2"
        />
        <g fill="#0E9F8E">
          <circle cx="26" cy="16" r="1.6" />
          <circle cx="33" cy="20" r="1.3" />
          <circle cx="40" cy="15.5" r="1.7" />
        </g>
      </g>
      <g fill="#FFFFFF" stroke="#14B8A6" strokeWidth="1.4">
        <circle cx="11" cy="20" r="3.2" />
        <circle cx="54" cy="19" r="2.8" />
        <circle cx="57" cy="28" r="1.8" />
      </g>
    </svg>
  );
}
