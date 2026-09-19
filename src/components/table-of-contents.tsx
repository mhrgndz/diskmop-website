"use client";

import { useState, useEffect } from "react";
import { List, ChevronDown, ChevronUp } from "lucide-react";

export interface TocItem {
  id: string;
  title: string;
  level?: 2 | 3;
}

interface TableOfContentsProps {
  items: TocItem[];
  title?: string;
}

export function TableOfContents({
  items,
  title = "Table of Contents",
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find visible entries
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0% -60% 0%",
        threshold: [0, 1],
      },
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (!items || items.length === 0) return null;

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90; // offset for fixed navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      history.pushState(null, "", `#${id}`);
      setActiveId(id);
      setIsOpen(false);
    }
  };

  return (
    <nav
      aria-label={title}
      className="my-8 rounded-2xl border border-border/80 bg-card/50 backdrop-blur-sm p-4 sm:p-5 transition-all shadow-sm"
    >
      <div
        className="flex items-center justify-between cursor-pointer sm:cursor-default select-none"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="flex items-center gap-2.5 font-bold text-foreground text-base">
          <div className="p-1.5 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400">
            <List className="h-4 w-4" />
          </div>
          <span>{title}</span>
          <span className="text-xs font-normal text-muted-foreground ml-1">
            ({items.length})
          </span>
        </div>
        <button
          type="button"
          className="sm:hidden text-muted-foreground hover:text-foreground p-1 transition-colors"
          aria-label={isOpen ? "Collapse" : "Expand"}
        >
          {isOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
      </div>

      <div className={`mt-4 sm:block ${isOpen ? "block" : "hidden sm:block"}`}>
        <ul className="space-y-1.5 text-sm border-l-2 border-border/60 pl-3">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li
                key={item.id}
                className={`transition-colors ${
                  item.level === 3 ? "ml-3" : ""
                }`}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => scrollTo(e, item.id)}
                  className={`block py-1 transition-all rounded-md px-2 -ml-2 ${
                    isActive
                      ? "font-semibold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/40 -translate-x-1 pl-3 border-l-2 border-brand-600 dark:border-brand-400"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                  }`}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
