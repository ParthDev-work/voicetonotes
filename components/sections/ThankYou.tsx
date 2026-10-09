import Image from "next/image";
import Slide from "@/components/Slide";
import RevealGroup from "@/components/RevealGroup";

export default function ThankYou() {
  return (
    <section
      id="thank-you"
      aria-labelledby="thank-you-heading"
      className="relative bg-bg"
    >
      {/* Desktop */}
      <RevealGroup className="hidden lg:block">
        <Slide h={1024}>
          <div
            data-reveal
            className="card-hover absolute overflow-hidden rounded-[1.5rem]"
            style={{
              left: "2.875rem",
              top: "7.4375rem",
              width: "47.9375rem",
              height: "48.375rem",
            }}
          >
            <Image
              src="/assets/s8-phone-photo.jpg"
              alt="Phone resting on a concrete surface"
              fill
              sizes="(min-width: 1024px) 48rem, 100vw"
              className="object-cover"
            />
          </div>

          <h2
            id="thank-you-heading"
            data-reveal
            className="absolute m-0 text-center font-semibold text-ink-700"
            style={{
              left: "56.9375rem",
              top: "17.1875rem",
              width: "26.875rem",
              fontSize: "2.375rem",
            }}
          >
            Thank You!
          </h2>
          <p
            data-reveal
            className="absolute m-0 text-center text-ink-700"
            style={{
              left: "56.9375rem",
              top: "20.6875rem",
              width: "26.875rem",
              fontSize: "1.5rem",
              lineHeight: "1.9rem",
            }}
          >
            This slide was created using the VoiceToNotes platform.
          </p>

          <div
            data-reveal
            className="absolute"
            style={{ left: "56.9375rem", top: "33.625rem", width: "26.875rem" }}
          >
            <Image
              src="/assets/wordmark.png"
              alt="VoiceToNotes"
              width={430}
              height={68}
              className="w-full" style={{ height: "auto" }}
            />
          </div>
          <p
            data-reveal
            className="absolute m-0 text-ink-700"
            style={{ left: "60.4375rem", top: "38.8125rem", fontSize: "1.375rem" }}
          >
            Stop Typing, Start Speaking.
          </p>

          <div
            data-reveal
            className="absolute text-right text-ink-700"
            style={{
              right: "3.1875rem",
              top: "45.875rem",
              fontSize: "1.375rem",
              lineHeight: "1.95rem",
            }}
          >
            <p className="m-0">Contact Information</p>
            <p className="m-0">
              Website:{" "}
              <a
                href="https://voicetonotes.ai"
                className="focus-ring hover:underline"
              >
                VoiceToNotes.ai
              </a>
            </p>
            <p className="m-0">
              Email:{" "}
              <a
                href="mailto:admin@voicetonotes.ai"
                className="focus-ring hover:underline"
              >
                admin@voicetonotes.ai
              </a>
            </p>
          </div>
        </Slide>
      </RevealGroup>

      {/* Mobile */}
      <RevealGroup className="lg:hidden">
        <div className="mx-auto flex max-w-[720px] flex-col items-center gap-6 px-5 py-12 text-center">
          <div
            data-reveal
            className="relative aspect-[767/774] w-full max-w-[420px] overflow-hidden rounded-2xl"
          >
            <Image
              src="/assets/s8-phone-photo.jpg"
              alt="Phone resting on a concrete surface"
              fill
              sizes="420px"
              className="object-cover"
            />
          </div>

          <h2 data-reveal className="m-0 text-[28px] font-semibold text-ink-700">
            Thank You!
          </h2>
          <p data-reveal className="m-0 text-[17px] text-ink-700">
            This slide was created using the VoiceToNotes platform.
          </p>

          <div data-reveal className="w-full max-w-[300px]">
            <Image
              src="/assets/wordmark.png"
              alt="VoiceToNotes"
              width={430}
              height={68}
              className="w-full" style={{ height: "auto" }}
            />
          </div>
          <p data-reveal className="m-0 text-[16px] text-ink-700">
            Stop Typing, Start Speaking.
          </p>

          <div
            data-reveal
            className="text-[16px] leading-relaxed text-ink-700"
          >
            <p className="m-0">Contact Information</p>
            <p className="m-0">
              Website:{" "}
              <a
                href="https://voicetonotes.ai"
                className="focus-ring hover:underline"
              >
                VoiceToNotes.ai
              </a>
            </p>
            <p className="m-0">
              Email:{" "}
              <a
                href="mailto:admin@voicetonotes.ai"
                className="focus-ring hover:underline"
              >
                admin@voicetonotes.ai
              </a>
            </p>
          </div>
        </div>
      </RevealGroup>
    </section>
  );
}
