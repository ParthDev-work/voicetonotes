import Image from "next/image";
import Slide from "@/components/Slide";

// Figma / Design.pdf §1 — 1440 × 1023 pt
// logo: left 66, top 58, w 112
// photo: left 335, top 0, w 1105, h 872
// "Pitch Deck": left 105, top 635, 48pt
// wordmark: left 105, top 759, w 561
// tagline: left 105, top 851, 34pt

export default function Cover() {
  return (
    <section
      id="cover"
      aria-labelledby="cover-heading"
      className="relative bg-bg overflow-hidden"
    >
      <h1 id="cover-heading" className="sr-only">
        VoiceToNotes — Stop Typing, Start Speaking.
      </h1>

      {/* ─── Desktop (≥ 1024 px) ─── */}
      <div className="hidden lg:block">
        <Slide h={1023}>
          <div
            className="absolute z-10"
            style={{ left: "4.125rem", top: "3.625rem", width: "7rem" }}
          >
            <Image
              src="/assets/logo-mark.png"
              alt=""
              width={224}
              height={264}
              className="w-full"
              style={{ height: "auto" }}
              priority
            />
          </div>

          <div
            className="absolute overflow-hidden"
            style={{
              left: "20.9375rem",
              top: 0,
              width: "69.0625rem",
              height: "54.5rem",
            }}
          >
            <Image
              src="/assets/hero-devices.jpg"
              alt="VoiceToNotes app shown across laptop, phone, and watch"
              fill
              sizes="(min-width: 1024px) 80vw, 100vw"
              className="object-cover object-left"
              priority
            />
          </div>

          <p
            className="absolute m-0 font-normal text-ink-700"
            style={{
              left: "6.5625rem",
              top: "39.6875rem",
              fontSize: "3rem",
            }}
          >
            Pitch Deck
          </p>

          <div
            className="absolute"
            style={{
              left: "6.5625rem",
              top: "47.4375rem",
              width: "35.0625rem",
            }}
          >
            <Image
              src="/assets/wordmark.png"
              alt="VoiceToNotes"
              width={561}
              height={103}
              className="w-full"
              style={{ height: "auto" }}
              priority
            />
          </div>

          <p
            className="absolute m-0 font-normal text-ink-700"
            style={{
              left: "6.5625rem",
              top: "53.1875rem",
              fontSize: "2.125rem",
            }}
          >
            Stop Typing, Start Speaking.
          </p>
        </Slide>
      </div>

      {/* ─── Mobile (< 1024 px) ─── */}
      <div className="lg:hidden mx-auto flex max-w-[720px] flex-col px-5 py-10">
        <div className="mb-5 w-[3.5rem]">
          <Image
            src="/assets/logo-mark.png"
            alt=""
            width={224}
            height={264}
            className="w-full"
            style={{ height: "auto" }}
            priority
          />
        </div>
        <p className="m-0 text-[1.5rem] font-normal text-ink-700">Pitch Deck</p>
        <div className="mt-3 w-[85%] max-w-[300px]">
          <Image
            src="/assets/wordmark.png"
            alt="VoiceToNotes"
            width={561}
            height={103}
            className="w-full"
            style={{ height: "auto" }}
            priority
          />
        </div>
        <p className="m-0 mt-3 text-[1.1rem] font-normal text-ink-700">
          Stop Typing, Start Speaking.
        </p>
        <div className="relative mt-8 aspect-[1105/872] w-full overflow-hidden">
          <Image
            src="/assets/hero-devices.jpg"
            alt="VoiceToNotes app shown across laptop, phone, and watch"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
}
