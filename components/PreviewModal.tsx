"use client";

import { useEffect, type ReactNode } from "react";

export default function PreviewModal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[44rem] w-full max-w-[64rem] flex-col overflow-hidden rounded-[1.5rem] bg-card shadow-card-hover"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-slate-200 px-6 py-4">
          <p className="m-0 font-semibold text-ink-700">{title}</p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="focus-ring flex h-8 w-8 items-center justify-center rounded-full text-ink-700 hover:bg-card-muted"
          >
            ✕
          </button>
        </div>
        <div className="overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
