import type { ReactNode } from "react";

/**
 * Desktop canvas wrapper. Renders a fixed-height (in design pt / 16 = rem)
 * relative container, centred at a max-width of 90rem (1440 design pt).
 * Children are positioned absolutely at their design coordinates.
 * Only rendered >= 1024px; each section supplies its own mobile layout
 * alongside this (hidden below lg).
 */
export default function Slide({
  h,
  className = "",
  children,
}: {
  h: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`canvas relative mx-auto w-full ${className}`}
      style={{ height: `${h / 16}rem` }}
    >
      {children}
    </div>
  );
}
