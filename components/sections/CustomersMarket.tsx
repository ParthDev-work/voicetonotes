import Image from "next/image";
import Slide from "@/components/Slide";
import RevealGroup from "@/components/RevealGroup";
import {
  PencilIcon,
  GraduationCapIcon,
  MagnifierIcon,
  DocumentLinesIcon,
  UserIcon,
  RocketIcon,
  BarChartIcon,
  MedicalCrossIcon,
  BoxIcon,
  FlaskIcon,
  BuildingIcon,
  PhoneIcon,
  LightningIcon,
  WifiOffIcon,
  ShieldIcon,
  XIcon,
  TrendingUpIcon,
} from "@/components/icons";

const customerTiles = [
  { Icon: PencilIcon, label: "Writers" },
  { Icon: GraduationCapIcon, label: "Students" },
  { Icon: MagnifierIcon, label: "Researchers" },
  { Icon: DocumentLinesIcon, label: "Journal Keepers" },
  { Icon: UserIcon, label: "Content Creators" },
  { Icon: RocketIcon, label: "Entrepreneurs" },
];

const industries = [
  { Icon: GraduationCapIcon, title: "EdTech Companies", sub: "Lecture transcription" },
  { Icon: MedicalCrossIcon, title: "Healthcare Platforms", sub: "Medical terminology transcription" },
  { Icon: BoxIcon, title: "Productivity SaaS", sub: "SDK integration" },
  { Icon: FlaskIcon, title: "Research Organizations", sub: "Voice documentation" },
  { Icon: BuildingIcon, title: "Enterprise Teams", sub: "Internal knowledge capture" },
];

const sdkTiles = [
  { Icon: PhoneIcon, label: "On-device\ntranscription" },
  { Icon: LightningIcon, label: "Low\nlatency" },
  { Icon: WifiOffIcon, label: "Offline\ncapable" },
  { Icon: ShieldIcon, label: "Privacy-\nfocused" },
  { Icon: XIcon, label: "Medical\nterminology" },
  { Icon: TrendingUpIcon, label: "Unlimited\nscalability" },
];

const marketTiles = [
  {
    value: "$170B – $330B+",
    title: "Total Addressable Market (TAM)",
    sub: "Global Productivity & AI Software Market",
  },
  {
    value: "$2.8B – $5.6B+",
    title: "Serviceable Available Market (SAM)",
    sub: "AI Writing, Note-Taking & Creator Productivity Segment",
  },
  {
    value: "$1B+",
    title: "Serviceable Obtainable Market (SOM)",
    sub: "Early AI Voice Productivity Market",
  },
];

function Ring({ value }: { value: string }) {
  return (
    <div
      className="relative flex shrink-0 items-center justify-center rounded-full"
      style={{
        width: "7.25rem",
        height: "7.25rem",
        background: "conic-gradient(from 180deg, #FF7A18, #FF0D4A, #FF7A18)",
        padding: "0.625rem",
      }}
    >
      <div className="flex h-full w-full items-center justify-center rounded-full bg-card-muted text-center">
        <span className="text-[1.1875rem] font-bold leading-tight text-ink">
          {value}
        </span>
      </div>
    </div>
  );
}

export default function CustomersMarket() {
  return (
    <section
      id="customers-market"
      aria-labelledby="customers-market-heading"
      className="relative bg-bg"
    >
      {/* Desktop */}
      <RevealGroup className="hidden lg:block">
        <Slide h={997}>
          <h2
            id="customers-market-heading"
            data-reveal
            className="absolute m-0 font-bold"
            style={{ left: "3.9375rem", top: "4.6875rem" }}
          >
            <span
              className="block text-ink"
              style={{ fontSize: "2.25rem", lineHeight: "2.6rem" }}
            >
              Core &amp; Targeted
            </span>
            <span
              className="block text-brand"
              style={{ fontSize: "2.1875rem", lineHeight: "2.6rem" }}
            >
              Customers
            </span>
          </h2>

          {/* Customers card */}
          <div
            data-reveal
            className="card-hover absolute rounded-[1.5rem] bg-card shadow-card"
            style={{
              left: "2.3125rem",
              top: "10.8125rem",
              width: "27rem",
              height: "32.25rem",
            }}
          >
            {customerTiles.map(({ Icon, label }, i) => {
              const col = i % 3;
              const row = Math.floor(i / 3);
              const left = [1.1875, 9.6875, 18.1875][col];
              const top = [1.4375, 11][row];
              return (
                <div
                  key={label}
                  className="absolute flex flex-col items-center justify-center rounded-2xl bg-card-muted text-center"
                  style={{
                    left: `${left}rem`,
                    top: `${top}rem`,
                    width: "7.625rem",
                    height: "8.5rem",
                  }}
                >
                  <Icon aria-hidden className="h-8 w-8 text-ink-700" />
                  <p className="m-0 mt-3 px-1 text-[0.8125rem] font-medium text-ink-700">
                    {label}
                  </p>
                </div>
              );
            })}

            <div
              className="absolute border-t border-slate-100"
              style={{ left: "1.1875rem", top: "20.5rem", width: "24.625rem" }}
            />

            <div
              className="absolute flex items-center justify-center rounded-2xl bg-card-muted"
              style={{
                left: "1.875rem",
                top: "24.125rem",
                width: "4.25rem",
                height: "4.25rem",
              }}
            >
              <BarChartIcon aria-hidden className="h-7 w-7 text-ink-700" />
            </div>
            <p
              className="absolute m-0 font-semibold text-ink"
              style={{
                left: "7.3125rem",
                top: "24.5rem",
                width: "17rem",
                fontSize: "1.125rem",
                lineHeight: "1.5rem",
              }}
            >
              Productivity-focused users
            </p>
          </div>

          {/* Phones image */}
          <div
            data-reveal
            className="absolute"
            style={{
              left: "29.375rem",
              top: "1.9375rem",
              width: "30.625rem",
              height: "41.875rem",
            }}
          >
            <Image
              src="/assets/s5-phones.jpg"
              alt="Two phones showing the VoiceToNotes transcript and audio player screens"
              fill
              sizes="(min-width: 1024px) 31rem, 100vw"
              className="object-contain"
            />
          </div>

          {/* Key Industries card */}
          <div
            data-reveal
            className="card-hover absolute rounded-[1.5rem] bg-card shadow-card"
            style={{
              left: "60.0625rem",
              top: "3.9375rem",
              width: "28rem",
              height: "39.125rem",
            }}
          >
            <h3
              className="absolute m-0 font-semibold text-ink"
              style={{ left: "1.25rem", top: "1.1875rem", fontSize: "1.375rem" }}
            >
              Key Industries
            </h3>

            {industries.map(({ Icon, title, sub }, i) => {
              const top = [4.25, 8.8125, 13.375, 17.9375, 22.5][i];
              return (
                <div
                  key={title}
                  className="absolute"
                  style={{ left: "0rem", top: `${top}rem` }}
                >
                  <div
                    className="absolute flex items-center justify-center rounded-2xl bg-card-muted"
                    style={{ left: "1.25rem", width: "3.25rem", height: "3.25rem" }}
                  >
                    <Icon aria-hidden className="h-6 w-6 text-ink-700" />
                  </div>
                  <div style={{ marginLeft: "5.375rem", width: "20.5rem" }}>
                    <p className="m-0 text-[0.9375rem] font-semibold text-ink">
                      {title}
                    </p>
                    <p className="m-0 text-[0.875rem] text-slate-500">{sub}</p>
                  </div>
                </div>
              );
            })}

            <div
              className="absolute border-t border-slate-100"
              style={{ left: "1.25rem", top: "27rem", width: "25.5rem" }}
            />

            <h4
              className="absolute m-0 font-semibold text-ink"
              style={{ left: "1.25rem", top: "28.1875rem", fontSize: "1.125rem" }}
            >
              SDK Positioning
            </h4>

            {sdkTiles.map(({ Icon, label }, i) => {
              const left = [1.5625, 5.875, 10.1875, 14.5625, 18.875, 23.1875][i];
              return (
                <div
                  key={label}
                  className="absolute flex flex-col items-center text-center"
                  style={{ left: `${left}rem`, top: "31.25rem", width: "3.4375rem" }}
                >
                  <div className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-2xl bg-card-muted">
                    <Icon aria-hidden className="h-5 w-5 text-ink-700" />
                  </div>
                  <p className="m-0 mt-2 whitespace-pre-line text-[0.58125rem] font-medium leading-tight text-ink-700">
                    {label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Market card */}
          <div
            data-reveal
            className="card-hover absolute rounded-[1.5rem] bg-card shadow-card"
            style={{
              left: "2.3125rem",
              top: "44.4375rem",
              width: "85.75rem",
              height: "14.75rem",
            }}
          >
            <h3
              className="absolute m-0 font-semibold text-ink"
              style={{ left: "1.25rem", top: "0.6875rem", fontSize: "1.375rem" }}
            >
              Market Analysis &amp; Scope
            </h3>
            <p
              className="absolute m-0 text-slate-500"
              style={{ left: "1.25rem", top: "2.25rem", width: "40rem", fontSize: "1rem" }}
            >
              Large and growing opportunity for AI-powered productivity and
              voice-first computing.
            </p>

            <div
              className="absolute flex items-center gap-2 rounded-full bg-card-muted px-5"
              style={{ left: "68.25rem", top: "1.25rem", width: "16.25rem", height: "3rem" }}
            >
              <BarChartIcon aria-hidden className="h-5 w-5 shrink-0 text-ink-700" />
              <span className="text-[0.78125rem] font-medium text-ink-700">
                Rapid growth in AI voice tools
              </span>
            </div>

            {marketTiles.map((tile, i) => {
              const left = [1.25, 29.375, 57.5][i];
              return (
                <div
                  key={tile.title}
                  className="absolute flex items-center gap-5 rounded-2xl bg-card-muted px-5"
                  style={{
                    left: `${left}rem`,
                    top: "5.4375rem",
                    width: "27rem",
                    height: "8.6875rem",
                  }}
                >
                  <Ring value={tile.value} />
                  <div>
                    <p className="m-0 text-[0.8375rem] font-semibold leading-snug text-ink">
                      {tile.title}
                    </p>
                    <p className="m-0 mt-1 text-[0.9375rem] leading-snug text-muted">
                      {tile.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Slide>
      </RevealGroup>

      {/* Mobile */}
      <RevealGroup className="lg:hidden">
        <div className="mx-auto flex max-w-[720px] flex-col gap-5 px-5 py-12">
          <h2 data-reveal className="m-0 font-bold">
            <span className="block text-[26px] text-ink">
              Core &amp; Targeted
            </span>
            <span className="block text-[26px] text-brand">Customers</span>
          </h2>

          <div data-reveal className="rounded-2xl bg-card p-5 shadow-card">
            <div className="grid grid-cols-2 gap-3 min-[480px]:grid-cols-3">
              {customerTiles.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center rounded-2xl bg-card-muted py-5 text-center"
                >
                  <Icon aria-hidden className="h-7 w-7 text-ink-700" />
                  <p className="m-0 mt-2 text-[12px] font-medium text-ink-700">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <div className="my-5 border-t border-slate-100" />
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-card-muted">
                <BarChartIcon aria-hidden className="h-7 w-7 text-ink-700" />
              </div>
              <p className="m-0 text-[16px] font-semibold text-ink">
                Productivity-focused users
              </p>
            </div>
          </div>

          <div
            data-reveal
            className="relative mx-auto aspect-[490/670] w-full max-w-[320px]"
          >
            <Image
              src="/assets/s5-phones.jpg"
              alt="Two phones showing the VoiceToNotes transcript and audio player screens"
              fill
              sizes="320px"
              className="object-contain"
            />
          </div>

          <div data-reveal className="rounded-2xl bg-card p-5 shadow-card">
            <h3 className="m-0 text-[20px] font-semibold text-ink">
              Key Industries
            </h3>
            <div className="mt-4 flex flex-col gap-4">
              {industries.map(({ Icon, title, sub }) => (
                <div key={title} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-card-muted">
                    <Icon aria-hidden className="h-6 w-6 text-ink-700" />
                  </div>
                  <div>
                    <p className="m-0 text-[15px] font-semibold text-ink">
                      {title}
                    </p>
                    <p className="m-0 text-[13px] text-slate-500">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="my-5 border-t border-slate-100" />
            <h4 className="m-0 text-[17px] font-semibold text-ink">
              SDK Positioning
            </h4>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {sdkTiles.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-card-muted">
                    <Icon aria-hidden className="h-5 w-5 text-ink-700" />
                  </div>
                  <p className="m-0 mt-2 whitespace-pre-line text-[10px] font-medium leading-tight text-ink-700">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div data-reveal className="rounded-2xl bg-card p-5 shadow-card">
            <h3 className="m-0 text-[20px] font-semibold text-ink">
              Market Analysis &amp; Scope
            </h3>
            <p className="m-0 mt-2 text-[14px] text-slate-500">
              Large and growing opportunity for AI-powered productivity and
              voice-first computing.
            </p>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-card-muted px-4 py-2">
              <BarChartIcon aria-hidden className="h-4 w-4 text-ink-700" />
              <span className="text-[12px] font-medium text-ink-700">
                Rapid growth in AI voice tools
              </span>
            </div>
            <div className="mt-4 flex flex-col gap-3">
              {marketTiles.map((tile) => (
                <div
                  key={tile.title}
                  className="flex flex-col items-center gap-3 rounded-2xl bg-card-muted p-5 text-center sm:flex-row sm:text-left"
                >
                  <Ring value={tile.value} />
                  <div>
                    <p className="m-0 text-[14px] font-semibold text-ink">
                      {tile.title}
                    </p>
                    <p className="m-0 mt-1 text-[13px] text-muted">
                      {tile.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealGroup>
    </section>
  );
}
