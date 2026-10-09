import Image from "next/image";
import Slide from "@/components/Slide";
import RevealGroup from "@/components/RevealGroup";

export default function Cover() {
  return (
    <section
      id="cover"
      aria-labelledby="cover-heading"
      className="relative bg-bg"
    >
      <h1 id="cover-heading" className="sr-only">
        VoiceToNotes — Stop Typing, Start Speaking.
      </h1>

      {/* Desktop / tablet canvas, 1024px+ */}
      <RevealGroup className="hidden lg:block">
        <Slide h={1023}>
          <div
            data-reveal
            className="absolute overflow-hidden"
            style={{
              left: "20.9375rem",
              top: "0rem",
              width: "69.0625rem",
              height: "54.5rem",
            }}
          >
            <Image
              src="/assets/hero-devices.jpg"
              alt="VoiceToNotes app shown across laptop, phone, and watch"
              fill
              sizes="(min-width: 1024px) 69rem, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div
            data-reveal
            className="absolute"
            style={{ left: "4.125rem", top: "3.625rem", width: "7rem" }}
          >
            <Image
              src="/assets/logo-mark.png"
              alt=""
              width={224}
              height={264}
              className="w-full" style={{ height: "auto" }}
              priority
            />
          </div>

          <p
            data-reveal
            className="absolute m-0 text-ink-700"
            style={{
              left: "6.5625rem",
              top: "39.6875rem",
              fontSize: "3rem",
              fontWeight: 400,
            }}
          >
            Pitch Deck
          </p>

          <div
            data-reveal
            className="absolute"
            style={{ left: "6.5625rem", top: "47.4375rem", width: "35.0625rem" }}
          >
            <Image
              src="/assets/wordmark.png"
              alt=""
              width={561}
              height={103}
              className="w-full" style={{ height: "auto" }}
              priority
            />
          </div>

          <p
            data-reveal
            className="absolute m-0 text-ink-700"
            style={{
              left: "6.5625rem",
              top: "53.1875rem",
              fontSize: "2.125rem",
              fontWeight: 400,
            }}
          >
            Stop Typing, Start Speaking.
          </p>
        </Slide>
      </RevealGroup>

      {/* Mobile / tablet-below-1024 flow layout */}
      <RevealGroup className="lg:hidden">
        <div className="mx-auto flex max-w-[720px] flex-col items-start gap-6 px-5 pb-12 pt-10">
          <div data-reveal className="w-20">
            <Image
              src="/assets/logo-mark.png"
              alt=""
              width={224}
              height={264}
              className="w-full" style={{ height: "auto" }}
              priority
            />
          </div>
          <p
            data-reveal
            className="m-0 text-[28px] font-normal text-ink-700"
          >
            Pitch Deck
          </p>
          <div data-reveal className="w-[85%] max-w-[340px]">
            <Image
              src="/assets/wordmark.png"
              alt=""
              width={561}
              height={103}
              className="w-full" style={{ height: "auto" }}
              priority
            />
          </div>
          <p data-reveal className="m-0 text-[19px] font-normal text-ink-700">
            Stop Typing, Start Speaking.
          </p>
          <div
            data-reveal
            className="relative mt-2 h-[260px] w-full overflow-hidden rounded-2xl sm:h-[360px]"
          >
            <Image
              src="/assets/hero-devices.jpg"
              alt="VoiceToNotes app shown across laptop, phone, and watch"
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
