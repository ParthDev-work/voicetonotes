"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Wraps a section and applies a staggered fade-up reveal to every
 * descendant carrying a `data-reveal` attribute. With JS disabled,
 * elements are simply visible (see globals.css defaults). The
 * `.reveal-pending` class is only ever added client-side, after mount,
 * so there is no flash-of-hidden-content and no dependency on JS.
 */
export default function RevealGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const els = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (els.length === 0) return;

    els.forEach((el) => el.classList.add("reveal-pending"));

    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = els.indexOf(entry.target as HTMLElement);
          const delay = Math.max(idx, 0) * 60;
          window.setTimeout(() => {
            entry.target.classList.remove("reveal-pending");
          }, delay);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
