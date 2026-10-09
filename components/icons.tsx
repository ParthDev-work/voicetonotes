import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
} as const;

/* ---------------- Solid / filled icons ---------------- */

export function MicIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M12 15a3.5 3.5 0 0 0 3.5-3.5V6.5a3.5 3.5 0 0 0-7 0v5A3.5 3.5 0 0 0 12 15Z"
        fill="currentColor"
      />
      <path
        d="M6 11a1 1 0 1 0-2 0 8 8 0 0 0 7 7.94V21a1 1 0 1 0 2 0v-2.06A8 8 0 0 0 20 11a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M11 3c.4 2.6 1 4.2 2.1 5.9C14.2 10.5 15.8 11.3 19 12c-3.2.7-4.8 1.5-5.9 3.1C12 16.8 11.4 18.4 11 21c-.4-2.6-1-4.2-2.1-5.9C7.8 13.5 6.2 12.7 3 12c3.2-.7 4.8-1.5 5.9-3.1C10 7.2 10.6 5.6 11 3Z"
        fill="currentColor"
      />
      <path
        d="M18.5 3c.2 1.1.5 1.8.9 2.4.5.6 1.1.9 2.1 1.1-1 .2-1.6.5-2.1 1.1-.4.6-.7 1.3-.9 2.4-.2-1.1-.5-1.8-.9-2.4-.5-.6-1.1-.9-2.1-1.1 1-.2 1.6-.5 2.1-1.1.4-.6.7-1.3.9-2.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PersonSpeakingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="6.5" r="3" fill="currentColor" />
      <path
        d="M3 20a6 6 0 0 1 12 0v1H3v-1Z"
        fill="currentColor"
      />
      <path
        d="M17.5 7.5c1 .9 1.6 2.1 1.6 3.5s-.6 2.6-1.6 3.5M20 5.5c1.8 1.5 2.9 3.6 2.9 5.9 0 2.3-1.1 4.4-2.9 5.9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ---------------- Outline icons ---------------- */

function Outline({
  children,
  ...props
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      {...base}
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

export function PencilIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M4 20h4L18.5 9.5a2.1 2.1 0 0 0-3-3L5 17v3Z" />
      <path d="M14 7l3 3" />
    </Outline>
  );
}

export function GraduationCapIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M2 9l10-4 10 4-10 4-10-4Z" />
      <path d="M6 11v4c0 1.4 2.7 3 6 3s6-1.6 6-3v-4" />
      <path d="M22 9v6" />
    </Outline>
  );
}

export function MagnifierIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M20 20l-4.8-4.8" />
    </Outline>
  );
}

export function DocumentLinesIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M6 2.5h8l4 4V21a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 6 21V2.5Z" />
      <path d="M14 2.5V7h4" />
      <path d="M8.5 12h7M8.5 15.3h7M8.5 18.6h4.5" />
    </Outline>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.5 20.5a7.5 7.5 0 0 1 15 0" />
    </Outline>
  );
}

export function RocketIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M12 2.5c2.8 1.6 4.8 4.8 4.8 8.6 0 2.3-.6 4.2-1.4 5.7H8.6c-.8-1.5-1.4-3.4-1.4-5.7 0-3.8 2-7 4.8-8.6Z" />
      <circle cx="12" cy="10.5" r="1.8" />
      <path d="M8.6 16.8 6 19.5l.8-3.4M15.4 16.8l2.6 2.7-.8-3.4" />
      <path d="M10 20.5s0 1.5 2 1.5 2-1.5 2-1.5" />
    </Outline>
  );
}

export function BarChartIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M5 20V11M12 20V4M19 20v-7" />
    </Outline>
  );
}

export function MedicalCrossIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M12 8v8M8 12h8" />
    </Outline>
  );
}

export function BoxIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" />
      <path d="M4 7l8 4 8-4M12 11v10" />
    </Outline>
  );
}

export function FlaskIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M9.5 2.5h5M10 3v6.2L4.8 18a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3L14 9.2V3" />
      <path d="M7.5 15h9" />
    </Outline>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <rect x="4" y="3" width="12" height="18" />
      <path d="M8 7h4M8 10.5h4M8 14h4M16 11h4v10h-4" />
    </Outline>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M11 19h2" />
    </Outline>
  );
}

export function LightningIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="currentColor" />
    </svg>
  );
}

export function WifiOffIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M3 3l18 18" />
      <path d="M8.5 15.8a5 5 0 0 1 7 0" />
      <path d="M5.3 12.6a9.5 9.5 0 0 1 3-2M15.7 10.6a9.5 9.5 0 0 1 3 2" />
      <path d="M2.3 8.8A14 14 0 0 1 8.8 5.3M12 5c3.8 0 7.3 1.4 10 3.8" />
      <circle cx="12" cy="19" r="1" fill="currentColor" stroke="none" />
    </Outline>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M12 2.5 19.5 5.5V11c0 5-3.2 8.6-7.5 10.5C7.7 19.6 4.5 16 4.5 11V5.5L12 2.5Z" />
    </Outline>
  );
}

export function XIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M5 5l14 14M19 5 5 19" />
    </Outline>
  );
}

export function TrendingUpIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M3 17l6-6 4 4 8-9" />
      <path d="M15 6h6v6" />
    </Outline>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </Outline>
  );
}

export function TargetIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </Outline>
  );
}

export function DatabaseIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <ellipse cx="12" cy="5.5" rx="7.5" ry="3" />
      <path d="M4.5 5.5V18c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V5.5" />
      <path d="M4.5 11.8c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3" />
    </Outline>
  );
}

export function CloudIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M7 18.5a4.5 4.5 0 0 1-.5-9 5.5 5.5 0 0 1 10.6-1.8A4 4 0 0 1 17 18.5H7Z" />
    </Outline>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </Outline>
  );
}

export function AlertIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v5" />
      <circle cx="12" cy="16" r="1" fill="currentColor" stroke="none" />
    </Outline>
  );
}

export function CrownIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M3 8l4 3 5-6 5 6 4-3-1.7 9.5a1 1 0 0 1-1 .83H5.7a1 1 0 0 1-1-.83L3 8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CrownOutlineIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M3 8l4 3 5-6 5 6 4-3-1.7 9.5a1 1 0 0 1-1 .83H5.7a1 1 0 0 1-1-.83L3 8Z" />
    </Outline>
  );
}

export function CoinIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <circle cx="10" cy="14" r="7.5" />
      <path d="M10 10.8v6.4M12.4 11.8a2 2 0 0 0-2-1 1.8 1.8 0 0 0 0 3.6 1.8 1.8 0 0 1 0 3.6 2 2 0 0 1-2-1" />
      <path d="M15 4.5c2.5.6 4.5 2.7 5 5.3" />
    </Outline>
  );
}

export function InfinityIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M7 9a4.5 4.5 0 0 0 0 9c2.5 0 4-2.2 5-4.5s2.5-4.5 5-4.5a4.5 4.5 0 0 1 0 9c-2.5 0-4-2.2-5-4.5S9.5 9 7 9Z" />
    </Outline>
  );
}

export function TranslateIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M3 5.5h9M7.5 3v2.5M4.8 5.5c.4 3 2.2 5.4 5.2 7M10.5 5.5c-.8 3.4-3 6.3-7 8.2" />
      <path d="M13.5 21 17.5 11l4 10M14.8 17.5h5.4" />
    </Outline>
  );
}

export function ChipIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <rect x="10" y="10" width="4" height="4" />
      <path d="M9 2v3M12 2v3M15 2v3M9 19v3M12 19v3M15 19v3M2 9h3M2 12h3M2 15h3M19 9h3M19 12h3M19 15h3" />
    </Outline>
  );
}

export function CubeIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" />
      <path d="M4 7l8 4 8-4M12 11v10" />
    </Outline>
  );
}

export function NotePenIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M6 2.5h8l4 4V21a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 6 21V2.5Z" />
      <path d="M8.5 11h3M8.5 14.2h3.5" />
      <path d="M17.3 13.3l2.4 2.4-4.4 4.4-2.6.3.3-2.6 4.3-4.5Z" />
    </Outline>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" />
    </svg>
  );
}

export function PauseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="6.5" y="5" width="3.6" height="14" rx="1" fill="currentColor" />
      <rect x="13.9" y="5" width="3.6" height="14" rx="1" fill="currentColor" />
    </svg>
  );
}

export function Skip5BackIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M4 10a8 8 0 1 1 1.4 6.2" />
      <path d="M4 5v5h5" />
      <text
        x="12"
        y="15.5"
        fontSize="6.5"
        fontWeight={600}
        fill="currentColor"
        stroke="none"
        textAnchor="middle"
      >
        5
      </text>
    </Outline>
  );
}

export function Skip5FwdIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M20 10a8 8 0 1 0-1.4 6.2" />
      <path d="M20 5v5h-5" />
      <text
        x="12"
        y="15.5"
        fontSize="6.5"
        fontWeight={600}
        fill="currentColor"
        stroke="none"
        textAnchor="middle"
      >
        5
      </text>
    </Outline>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <Outline strokeWidth={2.2} {...props}>
      <path d="M9 4.5 16.5 12 9 19.5" />
    </Outline>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <Outline strokeWidth={2.2} {...props}>
      <path d="M15 4.5 7.5 12 15 19.5" />
    </Outline>
  );
}

export function InfoIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5.5" />
      <circle cx="12" cy="7.8" r="1" fill="currentColor" stroke="none" />
    </Outline>
  );
}
