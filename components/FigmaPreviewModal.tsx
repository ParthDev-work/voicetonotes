"use client";

import { useEffect } from "react";

export default function FigmaPreviewModal({
  figmaUrl,
  title,
  onClose,
}: {
  figmaUrl: string;
  title: string;
  onClose: () => void;
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

  const embedSrc = `https://www.figma.com/embed?embed_host=voicetonotes-site&url=${encodeURIComponent(
    figmaUrl
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative flex h-full max-h-[48rem] w-full max-w-[72rem] flex-col overflow-hidden rounded-2xl bg-card shadow-card-hover"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-slate-200 px-5 py-3">
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
        <iframe
          src={embedSrc}
          title={title}
          className="h-full w-full flex-1 border-0"
          allowFullScreen
        />
      </div>
    </div>
  );
}
