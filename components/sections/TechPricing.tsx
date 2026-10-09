import Image from "next/image";
import Slide from "@/components/Slide";
import RevealGroup from "@/components/RevealGroup";
import { CoinIcon, CrownIcon, CrownOutlineIcon, UserIcon } from "@/components/icons";

const techCards = [
  {
    src: "/assets/s4-tech-1-speech.jpg",
    lines: ["Speech", "Recognition"],
    logo: true,
    rect: { left: 2.25, top: 9.625, width: 16.1875, height: 13.3125 },
  },
  {
    src: "/assets/s4-tech-2-ai.jpg",
    lines: ["AI", "Processing"],
    rect: { left: 18.4375, top: 9.625, width: 15, height: 13.3125 },
  },
  {
    src: "/assets/s4-tech-3-modular.jpg",
    lines: ["Modular", "AI Workflows"],
    rect: { left: 34.0625, top: 9.625, width: 17.4375, height: 13.1875 },
  },
  {
    src: "/assets/s4-tech-4-note.jpg",
    lines: ["Note", "Structuring"],
    rect: { left: 2.875, top: 23.75, width: 14.5625, height: 13.375 },
  },
  {
    src: "/assets/s4-tech-5-cloud.jpg",
    lines: ["Cloud", "Sync"],
    rect: { left: 18.125, top: 23.75, width: 15.3125, height: 13.375 },
  },
  {
    src: "/assets/s4-tech-6-ondevice.jpg",
    lines: ["On-device ML", "Trancription"],
    rect: { left: 34.0625, top: 23.8125, width: 17.4375, height: 13.125 },
  },
];

const creditTiles = [
  { credits: "562,500", price: "$9.99" },
  { credits: "1,140,000", price: "$19.99" },
  { credits: "2,325,000", price: "$39.99" },
  { credits: "4,762,000", price: "$79.99" },
];

export default function TechPricing() {
  return (
    <section
      id="tech-pricing"
      aria-labelledby="tech-pricing-heading"
      className="relative bg-bg"
    >
      {/* Desktop */}
      <RevealGroup className="hidden lg:block">
        <Slide h={1022}>
          <h2
            id="tech-pricing-heading"
            data-reveal
            className="absolute m-0 font-bold text-ink"
            style={{ left: "3.4375rem", top: "4.6875rem", fontSize: "2.375rem" }}
          >
            Technology Stack
          </h2>

          {techCards.map((card) => (
            <div
              key={card.src}
              data-reveal
              className="card-hover absolute overflow-hidden rounded-2xl"
              style={{
                left: `${card.rect.left}rem`,
                top: `${card.rect.top}rem`,
                width: `${card.rect.width}rem`,
                height: `${card.rect.height}rem`,
              }}
            >
              <Image
                src={card.src}
                alt=""
                fill
                sizes="(min-width: 1024px) 17rem, 100vw"
                className="object-cover"
              />
              <div className="absolute left-[1.375rem] top-[1.375rem]">
                {card.logo && (
                  <Image
                    src="/assets/logo-mark.png"
                    alt=""
                    width={112}
                    height={132}
                    className="mb-2 h-[1.75rem] w-auto"
                  />
                )}
                <p
                  className="m-0 font-semibold leading-tight text-ink-700"
                  style={{ fontSize: "1.875rem" }}
                >
                  {card.lines[0]}
                  <br />
                  {card.lines[1]}
                </p>
              </div>
            </div>
          ))}

          {/* Laptop mockup */}
          <div
            data-reveal
            className="card-hover absolute overflow-hidden rounded-[1.5rem] bg-card shadow-card"
            style={{
              left: "53.5rem",
              top: "9.625rem",
              width: "33.875rem",
              height: "27.5rem",
            }}
          >
            <Image
              src="/assets/s4-laptop.jpg"
              alt="MacBook showing the VoiceToNotes app dashboard"
              fill
              sizes="(min-width: 1024px) 34rem, 100vw"
              className="object-cover"
            />
          </div>

          {/* Pricing card */}
          <div
            data-reveal
            className="card-hover absolute rounded-[1.5rem] bg-card shadow-card"
            style={{
              left: "2.875rem",
              top: "39.25rem",
              width: "42.6875rem",
              height: "21.125rem",
            }}
          >
            <h3
              className="absolute m-0 font-semibold text-ink-700"
              style={{ left: "1.3125rem", top: "3.625rem", fontSize: "2rem" }}
            >
              Pricing
            </h3>

            <div
              className="absolute flex flex-col items-start rounded-2xl border border-slate-200 bg-card px-5 py-6"
              style={{
                left: "0.6875rem",
                top: "6.6875rem",
                width: "12.8125rem",
                height: "11.5625rem",
              }}
            >
              <UserIcon aria-hidden className="h-7 w-7 text-ink-700" />
              <p className="m-0 mt-4 text-[1.625rem] font-medium text-ink-700">
                Free Plan
              </p>
              <p className="m-0 mt-1 text-[2.25rem] font-bold text-ink-700">
                $ 0
              </p>
            </div>

            <div
              className="absolute flex flex-col items-start rounded-2xl bg-pink-tile px-5 py-6"
              style={{
                left: "14.125rem",
                top: "6.6875rem",
                width: "14rem",
                height: "11.5625rem",
              }}
            >
              <CrownIcon aria-hidden className="h-7 w-7 text-brand" />
              <p className="m-0 mt-4 text-[1.625rem] font-medium text-ink-700">
                Monthly Pro
              </p>
              <p className="-mx-3 m-0 mt-1 whitespace-nowrap text-[2.25rem] font-bold text-ink-700">
                $ 1.49
                <span className="text-[1.75rem] font-medium">/ month</span>
              </p>
            </div>

            <div
              className="absolute flex flex-col items-start rounded-2xl border border-slate-200 bg-card px-5 py-6"
              style={{
                left: "28.6875rem",
                top: "6.6875rem",
                width: "13rem",
                height: "11.5625rem",
              }}
            >
              <CrownOutlineIcon aria-hidden className="h-7 w-7 text-ink-700" />
              <p className="m-0 mt-4 text-[1.625rem] font-medium text-ink-700">
                Yearly Pro
              </p>
              <p className="-mx-3 m-0 mt-1 whitespace-nowrap text-[2.25rem] font-bold text-ink-700">
                $ 12.99
                <span className="text-[1.75rem] font-medium">/ year</span>
              </p>
            </div>
          </div>

          {/* Credits card */}
          <div
            data-reveal
            className="card-hover absolute rounded-[1.5rem] bg-card shadow-card"
            style={{
              left: "46.375rem",
              top: "39.25rem",
              width: "41rem",
              height: "21.125rem",
            }}
          >
            <h3
              className="absolute m-0 font-semibold text-ink-700"
              style={{ left: "1.5rem", top: "3.1875rem", fontSize: "2rem" }}
            >
              Audio /Video Generation Credits
            </h3>

            {creditTiles.map((tile, i) => (
              <div
                key={tile.credits}
                className="absolute flex flex-col items-start rounded-2xl bg-black px-4 py-5"
                style={{
                  left: `${[1.125, 10.875, 20.75, 30.625][i]}rem`,
                  top: "6.8125rem",
                  width: "9rem",
                  height: "11.5625rem",
                }}
              >
                <CoinIcon aria-hidden className="h-6 w-6 text-white" />
                <p className="m-0 mt-4 text-[1.25rem] font-semibold text-white">
                  {tile.credits}
                </p>
                <p className="m-0 text-[1rem] text-white/70">Credits</p>
                <p className="m-0 mt-auto text-[1.875rem] font-bold text-white">
                  {tile.price}
                </p>
              </div>
            ))}
          </div>
        </Slide>
      </RevealGroup>

      {/* Mobile */}
      <RevealGroup className="lg:hidden">
        <div className="mx-auto flex max-w-[720px] flex-col gap-5 px-5 py-12">
          <h2
            data-reveal
            className="m-0 text-[28px] font-bold text-ink"
          >
            Technology Stack
          </h2>

          <div className="grid grid-cols-2 gap-3 min-[480px]:grid-cols-2">
            {techCards.map((card) => (
              <div
                key={card.src}
                data-reveal
                className="relative aspect-square overflow-hidden rounded-2xl"
              >
                <Image
                  src={card.src}
                  alt=""
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
                <div className="absolute left-3 top-3">
                  {card.logo && (
                    <Image
                      src="/assets/logo-mark.png"
                      alt=""
                      width={112}
                      height={132}
                      className="mb-1 h-5 w-auto"
                    />
                  )}
                  <p className="m-0 text-[15px] font-semibold leading-tight text-ink-700">
                    {card.lines[0]}
                    <br />
                    {card.lines[1]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            data-reveal
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-card shadow-card"
          >
            <Image
              src="/assets/s4-laptop.jpg"
              alt="MacBook showing the VoiceToNotes app dashboard"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* Pricing */}
          <div data-reveal className="rounded-2xl bg-card p-6 shadow-card">
            <h3 className="m-0 text-[22px] font-semibold text-ink-700">
              Pricing
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-3 min-[480px]:grid-cols-3">
              <div className="flex flex-col items-start rounded-2xl border border-slate-200 bg-card p-4">
                <UserIcon aria-hidden className="h-6 w-6 text-ink-700" />
                <p className="m-0 mt-3 text-[16px] font-medium text-ink-700">
                  Free Plan
                </p>
                <p className="m-0 text-[22px] font-bold text-ink-700">$ 0</p>
              </div>
              <div className="flex flex-col items-start rounded-2xl bg-pink-tile p-4">
                <CrownIcon aria-hidden className="h-6 w-6 text-brand" />
                <p className="m-0 mt-3 text-[16px] font-medium text-ink-700">
                  Monthly Pro
                </p>
                <p className="m-0 text-[22px] font-bold text-ink-700">
                  $ 1.49 <span className="text-[16px] font-medium">/ month</span>
                </p>
              </div>
              <div className="flex flex-col items-start rounded-2xl border border-slate-200 bg-card p-4">
                <CrownOutlineIcon aria-hidden className="h-6 w-6 text-ink-700" />
                <p className="m-0 mt-3 text-[16px] font-medium text-ink-700">
                  Yearly Pro
                </p>
                <p className="m-0 text-[22px] font-bold text-ink-700">
                  $ 12.99 <span className="text-[16px] font-medium">/ year</span>
                </p>
              </div>
            </div>
          </div>

          {/* Credits */}
          <div data-reveal className="rounded-2xl bg-card p-6 shadow-card">
            <h3 className="m-0 text-[20px] font-semibold text-ink-700">
              Audio /Video Generation Credits
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {creditTiles.map((tile) => (
                <div
                  key={tile.credits}
                  className="flex flex-col items-start rounded-2xl bg-black p-4"
                >
                  <CoinIcon aria-hidden className="h-5 w-5 text-white" />
                  <p className="m-0 mt-3 text-[15px] font-semibold text-white">
                    {tile.credits}
                  </p>
                  <p className="m-0 text-[12px] text-white/70">Credits</p>
                  <p className="m-0 mt-2 text-[20px] font-bold text-white">
                    {tile.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealGroup>
    </section>
  );
}
