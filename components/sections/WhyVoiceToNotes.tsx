import Image from "next/image";
import Slide from "@/components/Slide";
import RevealGroup from "@/components/RevealGroup";
import {
  GlobeIcon,
  TargetIcon,
  DatabaseIcon,
  CloudIcon,
  ClockIcon,
  AlertIcon,
  InfoIcon,
  BuildingIcon,
  WifiOffIcon,
  TranslateIcon,
  LightningIcon,
  PhoneIcon,
  InfinityIcon,
  BarChartIcon,
  type IconProps,
} from "@/components/icons";

type Row = {
  Icon: (p: IconProps) => React.ReactElement;
  label: string;
  sub?: string;
};

function ProsConsRow({ Icon, label, sub }: Row) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 ${
        sub ? "py-2.5" : "py-3"
      }`}
    >
      <Icon aria-hidden className="h-5 w-5 shrink-0 text-ink-800" />
      <div>
        <p className="m-0 text-[1rem] font-semibold text-ink-800">{label}</p>
        {sub && <p className="m-0 text-[0.8125rem] text-slate-400">{sub}</p>}
      </div>
    </div>
  );
}

function Chip({ kind, children }: { kind: "pros" | "cons"; children: React.ReactNode }) {
  const cls =
    kind === "pros"
      ? "bg-green-100 text-green-600"
      : "bg-rose-100 text-rose-600";
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-[0.8125rem] font-semibold ${cls}`}
    >
      {children}
    </span>
  );
}

function BizPerspective({
  value,
  children,
}: {
  value: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-rose-100 p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-card">
          <BuildingIcon aria-hidden className="h-5 w-5 text-rose-600" />
        </div>
        <div>
          <p className="m-0 text-[0.875rem] font-medium text-rose-600">
            Business Perspective
          </p>
          <p className="m-0 text-[1.5rem] font-semibold leading-tight text-rose-600">
            {value}
          </p>
        </div>
      </div>
      {children}
    </div>
  );
}

function FeatureCard({
  Icon,
  title,
  sub,
}: {
  Icon: (p: IconProps) => React.ReactElement;
  title: string;
  sub?: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-purple-tint bg-card p-3.5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-100">
        <Icon aria-hidden className="h-6 w-6 text-brand" />
      </div>
      <div>
        <p className="m-0 text-[1rem] font-semibold text-ink-800">{title}</p>
        {sub && (
          <p className="m-0 text-[0.8125rem] leading-snug text-slate-400">
            {sub}
          </p>
        )}
      </div>
    </div>
  );
}

export default function WhyVoiceToNotes() {
  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className="relative bg-bg"
    >
      {/* Desktop */}
      <RevealGroup className="hidden lg:block">
        <Slide h={1159}>
          <h2
            id="why-heading"
            data-reveal
            className="absolute m-0 font-bold text-ink-900"
            style={{ left: "3.625rem", top: "5rem", fontSize: "2.5rem" }}
          >
            Why VoiceToNotes.ai?
          </h2>
          <p
            data-reveal
            className="absolute m-0 text-slate-500"
            style={{ left: "3.625rem", top: "8.5rem", fontSize: "1.125rem" }}
          >
            The best of accuracy, privacy, and real-time — without the
            trade-offs.
          </p>

          {/* Column 1 — Google */}
          <div
            data-reveal
            className="card-hover absolute rounded-[1.5rem] bg-card-muted"
            style={{
              left: "3.625rem",
              top: "12.0625rem",
              width: "26.25rem",
              height: "52.625rem",
            }}
          >
            <div className="px-7 pt-8 text-center">
              <p className="m-0 text-[2.75rem] font-semibold text-ink">
                Google
              </p>
              <p className="m-0 mt-3 text-[1.125rem] text-slate-500">
                Mono Lingual models
              </p>
            </div>
            <div
              className="absolute rounded-[1.5rem] bg-card p-6"
              style={{ left: 0, top: "13.0625rem", width: "26.25rem" }}
            >
              <p className="m-0 mb-3">
                <Chip kind="pros">Pros</Chip>
              </p>
              <div className="flex flex-col gap-2.5">
                <ProsConsRow Icon={GlobeIcon} label="Small model size" />
                <ProsConsRow Icon={TargetIcon} label="Higher Accuracy" />
                <ProsConsRow Icon={TargetIcon} label="Real-Time" />
              </div>
              <p className="m-0 mb-3 mt-5">
                <Chip kind="cons">Cons</Chip>
              </p>
              <div className="flex flex-col gap-2.5">
                <ProsConsRow
                  Icon={DatabaseIcon}
                  label="Large model size"
                  sub="In GBs, can't run on device"
                />
              </div>
              <div className="mt-5">
                <BizPerspective value="No Cost" />
              </div>
            </div>
          </div>

          {/* Column 2 — Flow */}
          <div
            data-reveal
            className="card-hover absolute rounded-[1.5rem] bg-card-muted"
            style={{
              left: "31.875rem",
              top: "12.0625rem",
              width: "26.25rem",
              height: "58.6875rem",
            }}
          >
            <div className="px-7 pt-8 text-center">
              <p className="m-0 flex items-center justify-center gap-2 text-[2.75rem] font-bold text-ink">
                <BarChartIcon aria-hidden className="h-8 w-8" />
                Flow
              </p>
              <p className="m-0 mt-3 text-[1.125rem] text-slate-500">
                Multi Lingual models
              </p>
            </div>
            <div
              className="absolute rounded-[1.5rem] bg-card p-6"
              style={{ left: 0, top: "13.0625rem", width: "26.25rem" }}
            >
              <p className="m-0 mb-3">
                <Chip kind="pros">Pros</Chip>
              </p>
              <div className="flex flex-col gap-2.5">
                <ProsConsRow
                  Icon={GlobeIcon}
                  label="Supports all listed languages"
                />
                <ProsConsRow Icon={TargetIcon} label="Good accuracy" />
              </div>
              <p className="m-0 mb-3 mt-5">
                <Chip kind="cons">Cons</Chip>
              </p>
              <div className="flex flex-col gap-2.5">
                <ProsConsRow
                  Icon={DatabaseIcon}
                  label="Large model size"
                  sub="In GBs, can't run on device"
                />
                <ProsConsRow
                  Icon={CloudIcon}
                  label="Requires network"
                  sub="Record and upload"
                />
                <ProsConsRow
                  Icon={ClockIcon}
                  label="Higher latency"
                  sub="Not real-time"
                />
                <ProsConsRow Icon={AlertIcon} label="Data leak risk" />
              </div>
              <div className="mt-5">
                <BizPerspective value="Cost involved">
                  <p className="m-0 mt-3 text-[1rem] font-medium text-rose-600">
                    Lack in compliances (HIPPA).
                  </p>
                  <div className="mt-3 flex items-start gap-2">
                    <InfoIcon aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                    <p className="m-0 text-[0.8125rem] leading-snug text-slate-500">
                      In case of HIPPA, they are bound to inform customers if
                      data has been leaked. Wispr cannot guarantee 100% data
                      security for all users.
                    </p>
                  </div>
                </BizPerspective>
              </div>
            </div>
          </div>

          {/* Column 3 — VoiceToNotes */}
          <div
            data-reveal
            className="card-hover absolute rounded-[1.5rem] bg-card-muted"
            style={{
              left: "60.125rem",
              top: "12.0625rem",
              width: "26.25rem",
              height: "57.4375rem",
            }}
          >
            <div className="px-7 pt-8 text-center">
              <Image
                src="/assets/logo-lockup.png"
                alt="VoiceToNotes"
                width={352}
                height={79}
                className="mx-auto w-[13rem]" style={{ height: "auto" }}
              />
              <p className="m-0 mt-3 text-[1.125rem] text-slate-500">
                Best of both worlds
              </p>
            </div>
            <div
              className="absolute rounded-[1.5rem] bg-card p-6"
              style={{ left: 0, top: "13.0625rem", width: "26.25rem" }}
            >
              <div className="flex flex-col gap-3">
                <FeatureCard
                  Icon={WifiOffIcon}
                  title="No network required"
                  sub="Works completely offline"
                />
                <FeatureCard
                  Icon={TranslateIcon}
                  title="Bilingual models"
                  sub={<>EN-JP, EN-HI, EN-FR<br />Most of the audience is bilingual.</>}
                />
                <FeatureCard
                  Icon={LightningIcon}
                  title="Real-time & Streaming"
                  sub="Extremely low latency"
                />
                <FeatureCard
                  Icon={PhoneIcon}
                  title="On-device"
                  sub="No internet required"
                />
                <FeatureCard
                  Icon={InfinityIcon}
                  title="Unlimited"
                  sub="No computation/service cost from company side"
                />
              </div>
              <div className="mt-4">
                <BizPerspective value="No cost">
                  <p className="m-0 mt-3 text-[0.8125rem] leading-snug text-rose-600/80">
                    No computation/service involved, on-device, offline,
                    real-time and unlimited.
                  </p>
                </BizPerspective>
              </div>
            </div>
          </div>
        </Slide>
      </RevealGroup>

      {/* Mobile */}
      <RevealGroup className="lg:hidden">
        <div className="mx-auto flex max-w-[720px] flex-col gap-10 px-5 py-12">
          <div>
            <h2 className="m-0 text-[26px] font-bold text-ink-900">
              Why VoiceToNotes.ai?
            </h2>
            <p className="m-0 mt-2 text-[15px] text-slate-500">
              The best of accuracy, privacy, and real-time — without the
              trade-offs.
            </p>
          </div>

          <div data-reveal className="rounded-2xl bg-card-muted p-5">
            <div className="text-center">
              <p className="m-0 text-[36px] font-semibold text-ink">Google</p>
              <p className="m-0 mt-2 text-[15px] text-slate-500">
                Mono Lingual models
              </p>
            </div>
            <div className="mt-5 rounded-2xl bg-card p-5">
              <p className="m-0 mb-3">
                <Chip kind="pros">Pros</Chip>
              </p>
              <div className="flex flex-col gap-2.5">
                <ProsConsRow Icon={GlobeIcon} label="Small model size" />
                <ProsConsRow Icon={TargetIcon} label="Higher Accuracy" />
                <ProsConsRow Icon={TargetIcon} label="Real-Time" />
              </div>
              <p className="m-0 mb-3 mt-5">
                <Chip kind="cons">Cons</Chip>
              </p>
              <ProsConsRow
                Icon={DatabaseIcon}
                label="Large model size"
                sub="In GBs, can't run on device"
              />
              <div className="mt-5">
                <BizPerspective value="No Cost" />
              </div>
            </div>
          </div>

          <div data-reveal className="rounded-2xl bg-card-muted p-5">
            <div className="text-center">
              <p className="m-0 flex items-center justify-center gap-2 text-[36px] font-bold text-ink">
                <BarChartIcon aria-hidden className="h-7 w-7" />
                Flow
              </p>
              <p className="m-0 mt-2 text-[15px] text-slate-500">
                Multi Lingual models
              </p>
            </div>
            <div className="mt-5 rounded-2xl bg-card p-5">
              <p className="m-0 mb-3">
                <Chip kind="pros">Pros</Chip>
              </p>
              <div className="flex flex-col gap-2.5">
                <ProsConsRow
                  Icon={GlobeIcon}
                  label="Supports all listed languages"
                />
                <ProsConsRow Icon={TargetIcon} label="Good accuracy" />
              </div>
              <p className="m-0 mb-3 mt-5">
                <Chip kind="cons">Cons</Chip>
              </p>
              <div className="flex flex-col gap-2.5">
                <ProsConsRow
                  Icon={DatabaseIcon}
                  label="Large model size"
                  sub="In GBs, can't run on device"
                />
                <ProsConsRow
                  Icon={CloudIcon}
                  label="Requires network"
                  sub="Record and upload"
                />
                <ProsConsRow
                  Icon={ClockIcon}
                  label="Higher latency"
                  sub="Not real-time"
                />
                <ProsConsRow Icon={AlertIcon} label="Data leak risk" />
              </div>
              <div className="mt-5">
                <BizPerspective value="Cost involved">
                  <p className="m-0 mt-3 text-[1rem] font-medium text-rose-600">
                    Lack in compliances (HIPPA).
                  </p>
                  <div className="mt-3 flex items-start gap-2">
                    <InfoIcon aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                    <p className="m-0 text-[13px] leading-snug text-slate-500">
                      In case of HIPPA, they are bound to inform customers if
                      data has been leaked. Wispr cannot guarantee 100% data
                      security for all users.
                    </p>
                  </div>
                </BizPerspective>
              </div>
            </div>
          </div>

          <div data-reveal className="rounded-2xl bg-card-muted p-5">
            <div className="text-center">
              <Image
                src="/assets/logo-lockup.png"
                alt="VoiceToNotes"
                width={352}
                height={79}
                className="mx-auto w-[180px]" style={{ height: "auto" }}
              />
              <p className="m-0 mt-2 text-[15px] text-slate-500">
                Best of both worlds
              </p>
            </div>
            <div className="mt-5 flex flex-col gap-3 rounded-2xl bg-card p-5">
              <FeatureCard
                Icon={WifiOffIcon}
                title="No network required"
                sub="Works completely offline"
              />
              <FeatureCard
                Icon={TranslateIcon}
                title="Bilingual models"
                sub={<>EN-JP, EN-HI, EN-FR<br />Most of the audience is bilingual.</>}
              />
              <FeatureCard
                Icon={LightningIcon}
                title="Real-time & Streaming"
                sub="Extremely low latency"
              />
              <FeatureCard
                Icon={PhoneIcon}
                title="On-device"
                sub="No internet required"
              />
              <FeatureCard
                Icon={InfinityIcon}
                title="Unlimited"
                sub="No computation/service cost from company side"
              />
              <BizPerspective value="No cost">
                <p className="m-0 mt-3 text-[13px] leading-snug text-rose-600/80">
                  No computation/service involved, on-device, offline,
                  real-time and unlimited.
                </p>
              </BizPerspective>
            </div>
          </div>
        </div>
      </RevealGroup>
    </section>
  );
}
