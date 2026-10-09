import Image from "next/image";
import Slide from "@/components/Slide";
import RevealGroup from "@/components/RevealGroup";
import { MicIcon, SparkleIcon, PersonSpeakingIcon } from "@/components/icons";

// Design.pdf §3 — 1440 × 1022
// Columns: L 43→456 (413), M 473→970 (497), R 985→1400 (415)

const featureTiles = [
  {
    Icon: MicIcon,
    title: "Voice-to-Text",
    body: "High-precision transcription",
  },
  {
    Icon: SparkleIcon,
    title: "AI Writing",
    body: "Smart refinement & organization",
  },
  {
    Icon: PersonSpeakingIcon,
    title: "Smart Notes",
    body: "Summarize and organize",
  },
];

export default function SolutionBento() {
  return (
    <section
      id="solution"
      aria-labelledby="solution-heading"
      className="relative bg-bg"
    >
      <h2 id="solution-heading" className="sr-only">
        The VoiceToNotes Solution
      </h2>

      {/* Desktop — absolute positions match Design.pdf */}
      <RevealGroup className="hidden lg:block">
        <Slide h={1022}>
          {/* A — intro */}
          <div
            data-reveal
            className="card-hover absolute overflow-hidden rounded-[1.5rem] bg-card shadow-card"
            style={{
              left: "2.6875rem",
              top: "2.0625rem",
              width: "25.8125rem",
              height: "16.1875rem",
            }}
          >
            <div
              className="absolute"
              style={{ left: "1.75rem", top: "2.875rem", width: "22rem" }}
            >
              <Image
                src="/assets/logo-lockup.png"
                alt="VoiceToNotes"
                width={352}
                height={68}
                className="w-full"
                style={{ height: "auto" }}
              />
            </div>
            <p
              className="absolute m-0 font-normal text-slate-500"
              style={{
                left: "3.25rem",
                top: "8.5rem",
                width: "19.8125rem",
                fontSize: "1.5rem",
                lineHeight: "1.9rem",
              }}
            >
              Turn your voice, ideas, and creativity into powerful notes,
              audios, and videos with AI
            </p>
          </div>

          {/* B — white parent with three inset feature tiles */}
          <div
            data-reveal
            className="card-hover absolute rounded-[1.5rem] bg-card shadow-card"
            style={{
              left: "29.5625rem",
              top: "2.0625rem",
              width: "31.0625rem",
              height: "14.8125rem",
            }}
          >
            {featureTiles.map(({ Icon, title, body }, i) => (
              <div
                key={title}
                className="absolute flex flex-col items-center justify-center rounded-2xl bg-card-muted text-center"
                style={{
                  left: `${1 + i * 10}rem`,
                  top: "0.75rem",
                  width: "9.0625rem",
                  height: "13.25rem",
                }}
              >
                <Icon
                  aria-hidden
                  className="text-ink-700"
                  style={{ width: "3rem", height: "3rem" }}
                />
                <p
                  className="m-0 mt-3 font-semibold text-ink-700"
                  style={{ fontSize: "1.25rem" }}
                >
                  {title}
                </p>
                <p
                  className="m-0 mt-1 px-2 font-normal text-slate-500"
                  style={{ fontSize: "1.0625rem", lineHeight: "1.3rem" }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>

          {/* C — From Notes to Audio & Video */}
          <div
            data-reveal
            className="card-hover absolute overflow-hidden rounded-[1.5rem] shadow-card"
            style={{
              left: "61.5625rem",
              top: "2.0625rem",
              width: "25.9375rem",
              height: "18.9375rem",
            }}
          >
            <Image
              src="/assets/s3-audio-video.jpg"
              alt="From Notes to Audio & Video — transform your ideas into immersive audio and cinematic vibes"
              fill
              sizes="(min-width: 1024px) 26rem, 100vw"
              className="object-cover"
            />
          </div>

          {/* D — empty center card (video/animation missing from PDF export) */}
          <div
            data-reveal
            className="card-hover absolute rounded-[1.5rem] bg-card shadow-card"
            style={{
              left: "29.5625rem",
              top: "18.25rem",
              width: "31.0625rem",
              height: "43.625rem",
            }}
          >
            {/* Design.pdf shows this card empty — likely a video/animation that did not export.
                Drop the real media in here when it is supplied. */}
          </div>

          {/* E — Text-to-Audio */}
          <div
            data-reveal
            className="card-hover absolute overflow-hidden rounded-[1.5rem] bg-card shadow-card"
            style={{
              left: "2.6875rem",
              top: "19.75rem",
              width: "25.8125rem",
              height: "18.9375rem",
            }}
          >
            <p
              className="absolute m-0 font-semibold text-ink-700"
              style={{
                left: "2.625rem",
                top: "1.375rem",
                fontSize: "2rem",
              }}
            >
              Text-to-Audio
            </p>
            <div
              className="absolute"
              style={{
                left: "1.4375rem",
                top: "5rem",
                width: "22.8125rem",
              }}
            >
              <Image
                src="/assets/s3-audio-player.png"
                alt="Audio player bar with playback controls"
                width={730}
                height={202}
                className="w-full"
                style={{ height: "auto" }}
              />
            </div>
            <p
              className="absolute m-0 font-normal text-slate-500"
              style={{
                left: "1.8125rem",
                top: "12.3125rem",
                width: "22rem",
                fontSize: "1.375rem",
                lineHeight: "1.7rem",
              }}
            >
              Convert notes into natural, high-quality audio with multiple
              voices and tones.
            </p>
          </div>

          {/* F — Customizable Parameters */}
          <div
            data-reveal
            className="card-hover absolute overflow-hidden rounded-[1.5rem] bg-card shadow-card"
            style={{
              left: "61.5625rem",
              top: "22.375rem",
              width: "25.9375rem",
              height: "13.3125rem",
            }}
          >
            <p
              className="absolute m-0 font-semibold leading-tight text-ink-700"
              style={{
                left: "2.8125rem",
                top: "2.1875rem",
                fontSize: "2rem",
              }}
            >
              Customizable
              <br />
              Parameters
            </p>
            <p
              className="absolute m-0 font-normal text-slate-500"
              style={{
                left: "2.8125rem",
                top: "7.5rem",
                width: "20rem",
                fontSize: "1.375rem",
                lineHeight: "1.7rem",
              }}
            >
              Control voice, mood, background sounds, style and visual themes.
            </p>
          </div>

          {/* G — Text-to-Video */}
          <div
            data-reveal
            className="card-hover absolute overflow-hidden rounded-[1.5rem] bg-card shadow-card"
            style={{
              left: "2.6875rem",
              top: "40.4375rem",
              width: "25.8125rem",
              height: "21.4375rem",
            }}
          >
            <p
              className="absolute m-0 font-semibold text-ink-700"
              style={{
                left: "2.625rem",
                top: "1.5rem",
                fontSize: "2rem",
              }}
            >
              Text-to-Video
            </p>
            <div
              className="absolute overflow-hidden rounded-xl"
              style={{
                left: "1.6875rem",
                top: "4.25rem",
                width: "22.4375rem",
                height: "12.6875rem",
              }}
            >
              <Image
                src="/assets/s3-video-thumb.jpg"
                alt="Preview of an AI-generated cabin-by-the-lake video"
                fill
                sizes="(min-width: 1024px) 23rem, 100vw"
                className="object-cover"
              />
            </div>
            <p
              className="absolute m-0 font-normal text-slate-500"
              style={{
                left: "1.9375rem",
                top: "14.9375rem",
                width: "22rem",
                fontSize: "1.375rem",
                lineHeight: "1.7rem",
              }}
            >
              Turn your written content into engaging videos with AI-generated
              visuals.
            </p>
          </div>

          {/* H — Cross-Device Sync */}
          <div
            data-reveal
            className="card-hover absolute overflow-hidden rounded-[1.5rem] bg-card shadow-card"
            style={{
              left: "61.5625rem",
              top: "36.75rem",
              width: "25.9375rem",
              height: "11.125rem",
            }}
          >
            <p
              className="absolute m-0 font-semibold text-ink-700"
              style={{
                left: "2.8125rem",
                top: "2.3125rem",
                fontSize: "2rem",
              }}
            >
              Cross-Device Sync
            </p>
            <p
              className="absolute m-0 font-normal text-slate-500"
              style={{
                left: "2.8125rem",
                top: "5.5rem",
                width: "20rem",
                fontSize: "1.375rem",
                lineHeight: "1.7rem",
              }}
            >
              Access and edit your notes, creations anywhere
            </p>
          </div>

          {/* I — Multi-language Support */}
          <div
            data-reveal
            className="card-hover absolute overflow-hidden rounded-[1.5rem] shadow-card"
            style={{
              left: "61.5625rem",
              top: "48.9375rem",
              width: "25.9375rem",
              height: "13.25rem",
            }}
          >
            <Image
              src="/assets/s3-multilang.jpg"
              alt="Multi-language Support — Transcribe, summarize and generate in multiple languages"
              fill
              sizes="(min-width: 1024px) 26rem, 100vw"
              className="object-cover"
            />
          </div>
        </Slide>
      </RevealGroup>

      {/* Mobile — stacked reading order; omit empty card D */}
      <RevealGroup className="lg:hidden">
        <div className="mx-auto flex max-w-[720px] flex-col gap-5 px-5 py-12">
          <div data-reveal className="rounded-2xl bg-card p-6 shadow-card">
            <Image
              src="/assets/logo-lockup.png"
              alt="VoiceToNotes"
              width={352}
              height={68}
              className="w-[220px]"
              style={{ height: "auto" }}
            />
            <p className="m-0 mt-4 text-[16px] text-slate-500">
              Turn your voice, ideas, and creativity into powerful notes,
              audios, and videos with AI
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {featureTiles.map(({ Icon, title, body }) => (
              <div
                key={title}
                data-reveal
                className="flex flex-col items-center rounded-2xl bg-card-muted px-3 py-5 text-center shadow-card"
              >
                <Icon aria-hidden className="h-7 w-7 text-ink-700" />
                <p className="m-0 mt-2 text-[15px] font-semibold text-ink-700">
                  {title}
                </p>
                <p className="m-0 mt-1 text-[13px] text-slate-500">{body}</p>
              </div>
            ))}
          </div>

          <div
            data-reveal
            className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl shadow-card"
          >
            <Image
              src="/assets/s3-audio-video.jpg"
              alt="From Notes to Audio & Video — transform your ideas into immersive audio and cinematic vibes"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div data-reveal className="rounded-2xl bg-card p-6 shadow-card">
            <p className="m-0 text-[22px] font-semibold text-ink-700">
              Text-to-Audio
            </p>
            <Image
              src="/assets/s3-audio-player.png"
              alt="Audio player bar with playback controls"
              width={730}
              height={202}
              className="mt-4 w-full"
              style={{ height: "auto" }}
            />
            <p className="m-0 mt-4 text-[15px] text-slate-500">
              Convert notes into natural, high-quality audio with multiple
              voices and tones.
            </p>
          </div>

          <div data-reveal className="rounded-2xl bg-card p-6 shadow-card">
            <p className="m-0 text-[22px] font-semibold text-ink-700">
              Customizable Parameters
            </p>
            <p className="m-0 mt-3 text-[15px] text-slate-500">
              Control voice, mood, background sounds, style and visual themes.
            </p>
          </div>

          <div data-reveal className="rounded-2xl bg-card p-6 shadow-card">
            <p className="m-0 text-[22px] font-semibold text-ink-700">
              Text-to-Video
            </p>
            <div className="relative mt-4 aspect-[16/9] w-full overflow-hidden rounded-xl">
              <Image
                src="/assets/s3-video-thumb.jpg"
                alt="Preview of an AI-generated cabin-by-the-lake video"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <p className="m-0 mt-4 text-[15px] text-slate-500">
              Turn your written content into engaging videos with AI-generated
              visuals.
            </p>
          </div>

          <div data-reveal className="rounded-2xl bg-card p-6 shadow-card">
            <p className="m-0 text-[22px] font-semibold text-ink-700">
              Cross-Device Sync
            </p>
            <p className="m-0 mt-3 text-[15px] text-slate-500">
              Access and edit your notes, creations anywhere
            </p>
          </div>

          <div
            data-reveal
            className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-card"
          >
            <Image
              src="/assets/s3-multilang.jpg"
              alt="Multi-language Support"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </RevealGroup>
    </section>
  );
}
