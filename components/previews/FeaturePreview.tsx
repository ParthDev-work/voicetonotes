import Image from "next/image";
import {
  MicIcon,
  VideoCameraIcon,
  SlidersIcon,
  DownloadIcon,
} from "@/components/icons";

const rows = [
  {
    Icon: MicIcon,
    title: "AI Audio Generation",
    body: "Convert notes into natural, high-quality audio with multiple voices and tones.",
  },
  {
    Icon: VideoCameraIcon,
    title: "AI Video Generation",
    body: "Turn your written content into engaging videos with AI-generated visuals.",
  },
  {
    Icon: SlidersIcon,
    title: "Customizable Parameters",
    body: "Control voice, mood, background sounds, style and visual themes.",
  },
  {
    Icon: DownloadIcon,
    title: "Export & Share",
    body: "Download or share your creations across devices and platforms.",
  },
];

export default function FeaturePreview() {
  return (
    <div className="grid grid-cols-1 gap-8 p-6 sm:grid-cols-2 sm:p-8">
      <div>
        <p className="m-0 text-sm font-semibold uppercase tracking-wide text-brand">
          New
        </p>
        <p className="m-0 mt-1 text-2xl font-semibold text-ink-700 sm:text-3xl">
          Audio &amp; Video Generation
        </p>

        <div className="mt-6 flex flex-col gap-5">
          {rows.map(({ Icon, title, body }) => (
            <div key={title} className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-card-muted">
                <Icon aria-hidden className="h-5 w-5 text-ink-700" />
              </span>
              <div>
                <p className="m-0 font-semibold text-ink-700">{title}</p>
                <p className="m-0 mt-1 text-sm text-slate-500">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:aspect-auto">
        <Image
          src="/assets/s5-phones.jpg"
          alt="VoiceToNotes app showing a generated audio narration playing back"
          fill
          sizes="(min-width: 640px) 28rem, 100vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
