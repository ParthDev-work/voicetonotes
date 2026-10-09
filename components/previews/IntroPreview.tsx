import Image from "next/image";

export default function IntroPreview() {
  return (
    <div className="flex flex-col divide-y divide-slate-200">
      <div className="grid grid-cols-1 items-center gap-6 p-6 sm:grid-cols-2 sm:p-8">
        <div>
          <p className="m-0 text-2xl font-semibold text-ink-700 sm:text-3xl">
            Problem &amp; Pain Point
          </p>
          <p className="m-0 mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
            Writing often gets <strong className="text-ink-700">interrupted</strong> by
            friction. <strong className="text-ink-700">Ideas fade</strong> before
            they&rsquo;re captured, typing breaks the flow of thought, and most
            tools can&rsquo;t smoothly organize, refine, and consume content.
          </p>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
          <Image
            src="/assets/s2-problem-photo.jpg"
            alt="A person checking a message on their phone at night"
            fill
            sizes="(min-width: 640px) 28rem, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 items-center gap-6 p-6 sm:grid-cols-2 sm:p-8">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:order-1">
          <Image
            src="/assets/s2-solution-photo.jpg"
            alt="A phone on a desk showing the VoiceToNotes recording screen"
            fill
            sizes="(min-width: 640px) 28rem, 100vw"
            className="object-cover"
          />
        </div>
        <div className="sm:order-2">
          <p className="m-0 text-2xl font-semibold text-ink-700 sm:text-3xl">
            Solution
          </p>
          <p className="m-0 mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
            On-device ML Model able to transcribe audio into text in real
            time.
          </p>
        </div>
      </div>
    </div>
  );
}
