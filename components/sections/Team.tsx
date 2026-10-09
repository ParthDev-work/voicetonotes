import Image from "next/image";
import Slide from "@/components/Slide";
import RevealGroup from "@/components/RevealGroup";

// Design.pdf §7 — 1440 × 1024, background #000
// s7-team-photo.jpg already includes the team directory text (PDF export).
// Desktop: show the photo for the roster; HTML only for heading + founder card.
// Mobile: rebuild the roster in HTML over a darkened photo background.

type Group = { role: string; names: string[] };

const devTeam: Group[] = [
  {
    role: "iOS Developers",
    names: ["Anish Varshney", "Mayank Thapliyal", "Ashmi Singh"],
  },
  { role: "Android Developers", names: ["Manish Singh", "Vikas Verma"] },
  { role: "Backend Developers", names: ["Jhanvi Nagori", "Kushagra Seth"] },
  { role: "Web Developers", names: ["Vikas Singh", "Lakshay Dawar"] },
  {
    role: "Machine Learning Engineers",
    names: ["Pratyush Ranjan", "Aman Sinha"],
  },
];

const marketing: Group[] = [
  { role: "SEO Managers", names: ["Divyanshu Dwivedi"] },
];

const productStrategy: Group[] = [
  { role: "Product Managers", names: ["Rimpi Kaur"] },
  { role: "Designers", names: ["Nupur Sharma"] },
];

const management: Group[] = [
  { role: "Project Managers", names: ["Rishita Singh"] },
  { role: "Human Resources Manager", names: ["Naina Agarwal"] },
];

const qa: Group[] = [{ role: "Testers", names: ["Pranav Rai"] }];

function GroupBlock({
  groups,
  roleSize = "16px",
  nameSize = "14px",
}: {
  groups: Group[];
  roleSize?: string;
  nameSize?: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      {groups.map((g) => (
        <div key={g.role}>
          <p
            className="m-0 font-medium text-white"
            style={{ fontSize: roleSize }}
          >
            {g.role}
          </p>
          <ul className="m-0 mt-1 list-none p-0">
            {g.names.map((n) => (
              <li
                key={n}
                className="pl-3 font-normal text-white"
                style={{ fontSize: nameSize }}
              >
                · {n}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function SrOnlyRoster() {
  return (
    <div className="sr-only">
      <h3>Development Team</h3>
      {devTeam.map((g) => (
        <p key={g.role}>
          {g.role}: {g.names.join(", ")}
        </p>
      ))}
      <h3>Marketing</h3>
      {marketing.map((g) => (
        <p key={g.role}>
          {g.role}: {g.names.join(", ")}
        </p>
      ))}
      <h3>Product Strategy</h3>
      {productStrategy.map((g) => (
        <p key={g.role}>
          {g.role}: {g.names.join(", ")}
        </p>
      ))}
      <h3>Management</h3>
      {management.map((g) => (
        <p key={g.role}>
          {g.role}: {g.names.join(", ")}
        </p>
      ))}
      <h3>Quality Assurance</h3>
      {qa.map((g) => (
        <p key={g.role}>
          {g.role}: {g.names.join(", ")}
        </p>
      ))}
    </div>
  );
}

export default function Team() {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="relative bg-black"
    >
      {/* Desktop */}
      <RevealGroup className="hidden lg:block">
        <Slide h={1024} className="bg-black">
          {/* Team photo (roster text is baked into this asset) */}
          <div
            className="absolute inset-y-0 right-0 overflow-hidden"
            style={{ left: "29.625rem" }}
          >
            <Image
              src="/assets/s7-team-photo.jpg"
              alt="VoiceToNotes team directory over a group photo"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover object-left"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, #000 0%, #000 8%, transparent 28%)",
              }}
            />
          </div>

          <h2
            id="team-heading"
            data-reveal
            className="absolute m-0 font-semibold text-white"
            style={{
              left: "6.0625rem",
              top: "10.875rem",
              fontSize: "2.3rem",
            }}
          >
            The Team
          </h2>

          <SrOnlyRoster />

          {/* Founder card */}
          <div
            data-reveal
            className="card-hover absolute overflow-hidden rounded-[1.5rem] bg-white shadow-card"
            style={{
              left: "3.875rem",
              top: "14.75rem",
              width: "25.3125rem",
              height: "38.125rem",
            }}
          >
            <div
              className="absolute left-0 right-0 top-0 overflow-hidden"
              style={{ height: "19.5625rem" }}
            >
              <Image
                src="/assets/s7-sandeep.jpg"
                alt="Sandeep Rana"
                fill
                sizes="26rem"
                className="object-cover object-top"
              />
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 bg-white px-5 pb-5 pt-3 text-center"
              style={{ top: "19.5625rem" }}
            >
              <p
                className="m-0 font-semibold text-ink"
                style={{ fontSize: "2.10625rem" }}
              >
                Sandeep Rana
              </p>
              <p
                className="m-0 mt-1 font-normal text-slate-500"
                style={{ fontSize: "1.15rem" }}
              >
                CEO &amp; CTO
              </p>
              <ul
                className="m-0 mt-3 list-disc pl-5 text-left font-medium leading-snug text-ink"
                style={{ fontSize: "1.15rem" }}
              >
                <li className="mb-2">
                  Developed Scan &amp; Go (Decathlon) and Driver&rsquo;s App
                  (Ola Cabs) from scratch.
                </li>
                <li>
                  Helped make my trip&rsquo;s Flights, Commons, GI and Payment
                  gateway improve transaction success rate and Developed
                  it&rsquo;s UPI app.
                </li>
              </ul>
            </div>
          </div>
        </Slide>
      </RevealGroup>

      {/* Mobile */}
      <RevealGroup className="lg:hidden">
        <div
          className="relative overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.82), rgba(0,0,0,0.92)), url(/assets/s7-team-photo.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto flex max-w-[720px] flex-col gap-10 px-5 py-12">
            <h2
              data-reveal
              className="m-0 text-[28px] font-semibold text-white"
            >
              The Team
            </h2>

            <div
              data-reveal
              className="overflow-hidden rounded-2xl bg-white shadow-card"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/assets/s7-sandeep.jpg"
                  alt="Sandeep Rana"
                  fill
                  sizes="100vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="px-5 pb-5 pt-4 text-center">
                <p className="m-0 text-[22px] font-semibold text-ink">
                  Sandeep Rana
                </p>
                <p className="m-0 mt-1 text-[15px] text-slate-500">
                  CEO &amp; CTO
                </p>
                <ul className="m-0 mt-3 list-disc pl-5 text-left text-[15px] font-medium leading-snug text-ink">
                  <li className="mb-2">
                    Developed Scan &amp; Go (Decathlon) and Driver&rsquo;s App
                    (Ola Cabs) from scratch.
                  </li>
                  <li>
                    Helped make my trip&rsquo;s Flights, Commons, GI and Payment
                    gateway improve transaction success rate and Developed
                    it&rsquo;s UPI app.
                  </li>
                </ul>
              </div>
            </div>

            <div data-reveal>
              <p className="m-0 mb-4 text-[24px] font-semibold text-white">
                Development Team
              </p>
              <GroupBlock groups={devTeam} />
            </div>
            <div data-reveal>
              <p className="m-0 mb-4 text-[24px] font-semibold text-white">
                Marketing
              </p>
              <GroupBlock groups={marketing} />
            </div>
            <div data-reveal>
              <p className="m-0 mb-4 text-[24px] font-semibold text-white">
                Product Strategy
              </p>
              <GroupBlock groups={productStrategy} />
            </div>
            <div data-reveal>
              <p className="m-0 mb-4 text-[24px] font-semibold text-white">
                Management
              </p>
              <GroupBlock groups={management} />
            </div>
            <div data-reveal>
              <p className="m-0 mb-4 text-[24px] font-semibold text-white">
                Quality Assurance
              </p>
              <GroupBlock groups={qa} />
            </div>
          </div>
        </div>
      </RevealGroup>
    </section>
  );
}
