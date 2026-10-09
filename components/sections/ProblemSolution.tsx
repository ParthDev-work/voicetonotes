import Image from "next/image";
import Slide from "@/components/Slide";
import RevealGroup from "@/components/RevealGroup";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

export default function ProblemSolution() {
  return (
    <section
      id="problem-solution"
      aria-labelledby="problem-solution-heading"
      className="relative bg-bg"
    >
      <h2 id="problem-solution-heading" className="sr-only">
        Problem Statement &amp; Pain Point, and Our Solution
      </h2>

      {/* Desktop */}
      <RevealGroup className="hidden lg:block">
        <Slide h={1022}>
          {/* Card 1: Problem Statement & Pain Point */}
          <div
            data-reveal
            className="card-hover absolute overflow-hidden rounded-[1.5rem] bg-card shadow-card"
            style={{
              left: "2.875rem",
              top: "2.5625rem",
              width: "84.4375rem",
              height: "27.8125rem",
            }}
          >
            <div
              className="absolute inset-y-0 left-0 flex items-center justify-center text-center"
              style={{ width: "36rem" }}
            >
              <p
                className="m-0 text-ink-700"
                style={{ fontSize: "3rem", fontWeight: 400, lineHeight: "3.625rem" }}
              >
                Problem Statement
                <br />
                &amp;
                <br />
                Pain Point
              </p>
            </div>
            <ChevronRightIcon
              aria-hidden
              className="absolute text-ink-700"
              style={{
                left: "33.8125rem",
                top: "50%",
                transform: "translateY(-50%)",
                width: "1.6rem",
                height: "3rem",
              }}
            />
            <div
              className="absolute inset-y-0"
              style={{ left: "36rem", width: "48.4375rem" }}
            >
              <Image
                src="/assets/s2-problem-photo.jpg"
                alt="A man reading a message on his phone"
                fill
                sizes="(min-width: 1024px) 48rem, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Card 2: Solution */}
          <div
            data-reveal
            className="card-hover absolute overflow-hidden rounded-[1.5rem] bg-card shadow-card"
            style={{
              left: "2.875rem",
              top: "33.5rem",
              width: "84.4375rem",
              height: "27.8125rem",
            }}
          >
            <div
              className="absolute inset-y-0 left-0"
              style={{ width: "48.4375rem" }}
            >
              <Image
                src="/assets/s2-solution-photo.jpg"
                alt="Phone on a desk showing the VoiceToNotes Audio Generation screen"
                fill
                sizes="(min-width: 1024px) 48rem, 100vw"
                className="object-cover"
              />
            </div>
            <ChevronLeftIcon
              aria-hidden
              className="absolute text-ink-700"
              style={{
                left: "51.25rem",
                top: "50%",
                transform: "translateY(-50%)",
                width: "1.6rem",
                height: "3rem",
              }}
            />
            <div
              className="absolute inset-y-0 flex items-center justify-center text-center"
              style={{ left: "48.4375rem", width: "36rem" }}
            >
              <p className="m-0 text-ink-700" style={{ fontSize: "3rem", fontWeight: 400 }}>
                Solution
              </p>
            </div>
          </div>
        </Slide>
      </RevealGroup>

      {/* Mobile */}
      <RevealGroup className="lg:hidden">
        <div className="mx-auto flex max-w-[720px] flex-col gap-6 px-5 py-12">
          <div
            data-reveal
            className="overflow-hidden rounded-2xl bg-card shadow-card"
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/assets/s2-problem-photo.jpg"
                alt="A man reading a message on his phone"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="px-6 py-8 text-center">
              <p className="m-0 text-[26px] font-normal leading-tight text-ink-700">
                Problem Statement
                <br />
                &amp;
                <br />
                Pain Point
              </p>
            </div>
          </div>

          <div
            data-reveal
            className="overflow-hidden rounded-2xl bg-card shadow-card"
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/assets/s2-solution-photo.jpg"
                alt="Phone on a desk showing the VoiceToNotes Audio Generation screen"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="px-6 py-8 text-center">
              <p className="m-0 text-[26px] font-normal text-ink-700">
                Solution
              </p>
            </div>
          </div>
        </div>
      </RevealGroup>
    </section>
  );
}
