import Image from "next/image";
import Slide from "@/components/Slide";
import RevealGroup from "@/components/RevealGroup";

type Group = { role: string; names: string[] };

const devTeam: Group[] = [
  { role: "iOS Developers", names: ["Anish Varshney", "Mayank Thapliyal", "Ashmi Singh"] },
  { role: "Android Developers", names: ["Manish Singh", "Vikas Verma"] },
  { role: "Backend Developers", names: ["Jhanvi Nagori", "Kushagra Seth"] },
  { role: "Web Developers", names: ["Vikas Singh", "Lakshay Dawar"] },
  { role: "Machine Learning Engineers", names: ["Pratyush Ranjan", "Aman Sinha"] },
];

const marketing: Group[] = [{ role: "SEO Managers", names: ["Divyanshu Dwivedi"] }];

const productStrategy: Group[] = [
  { role: "Product Managers", names: ["Rimpi Kaur"] },
  { role: "Designers", names: ["Nupur Sharma"] },
];

const management: Group[] = [
  { role: "Project Managers", names: ["Rishita Singh"] },
  { role: "Human Resources Manager", names: ["Naina Agarwal"] },
];

const qa: Group[] = [{ role: "Testers", names: ["Pranav Rai"] }];

function GroupList({ groups }: { groups: Group[] }) {
  return (
    <div className="flex flex-col gap-4">
      {groups.map((g) => (
        <div key={g.role}>
          <p className="m-0 text-[1.15rem] font-medium text-white">{g.role}</p>
          <ul className="m-0 mt-1 list-none p-0">
            {g.names.map((n) => (
              <li
                key={n}
                className="text-[0.95625rem] font-normal text-white/90"
                style={{ marginLeft: "1.4375rem" }}
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

export default function Team() {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="relative bg-black"
    >
      {/* Desktop */}
      <RevealGroup className="hidden lg:block">
        <Slide h={1024}>
          <div
            className="absolute overflow-hidden"
            style={{ left: "29.625rem", top: 0, width: "60.375rem", height: "64rem" }}
          >
            <Image
              src="/assets/s7-team-photo.jpg"
              alt="The VoiceToNotes team posing together in the office"
              fill
              sizes="(min-width: 1024px) 60rem, 100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, #000 0%, #000 22%, transparent 55%)",
              }}
            />
          </div>

          <h2
            id="team-heading"
            data-reveal
            className="absolute m-0 font-semibold text-white"
            style={{ left: "6.0625rem", top: "10.875rem", fontSize: "2.3rem" }}
          >
            The Team
          </h2>

          {/* Founder card */}
          <div
            data-reveal
            className="card-hover absolute overflow-hidden rounded-[1.5rem] bg-card shadow-card"
            style={{
              left: "3.875rem",
              top: "14.4375rem",
              width: "25.3125rem",
              height: "31.625rem",
            }}
          >
            <div className="relative w-full" style={{ height: "13rem" }}>
              <Image
                src="/assets/s7-sandeep.jpg"
                alt="Sandeep Rana"
                fill
                sizes="(min-width: 1024px) 25rem, 100vw"
                className="object-cover"
              />
            </div>
            <div className="px-4 pb-4 pt-3 text-center">
              <p className="m-0 text-[1.6rem] font-semibold text-ink">
                Sandeep Rana
              </p>
              <p className="m-0 mt-1 text-[1rem] text-slate-500">
                CEO &amp; CTO
              </p>
              <ul
                className="m-0 mt-3 list-disc pl-5 text-left text-[1.0625rem] font-medium leading-snug text-ink"
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

          {/* Column 1 */}
          <div
            data-reveal
            className="absolute"
            style={{ left: "38.875rem", top: "10.0625rem", width: "22rem" }}
          >
            <p className="m-0 mb-4 text-[2.3rem] font-semibold text-white">
              Development Team
            </p>
            <GroupList groups={devTeam} />
          </div>
          <div
            data-reveal
            className="absolute"
            style={{ left: "38.875rem", top: "44.3125rem", width: "22rem" }}
          >
            <p className="m-0 mb-4 text-[2.3rem] font-semibold text-white">
              Marketing
            </p>
            <GroupList groups={marketing} />
          </div>

          {/* Column 2 */}
          <div
            data-reveal
            className="absolute"
            style={{ left: "63.875rem", top: "10.625rem", width: "23rem" }}
          >
            <p className="m-0 mb-4 text-[2.3rem] font-semibold text-white">
              Product Strategy
            </p>
            <GroupList groups={productStrategy} />
          </div>
          <div
            data-reveal
            className="absolute"
            style={{ left: "63.875rem", top: "23.9375rem", width: "23rem" }}
          >
            <p className="m-0 mb-4 text-[2.3rem] font-semibold text-white">
              Management
            </p>
            <GroupList groups={management} />
          </div>
          <div
            data-reveal
            className="absolute"
            style={{ left: "63.875rem", top: "37.375rem", width: "23rem" }}
          >
            <p className="m-0 mb-4 text-[2.3rem] font-semibold text-white">
              Quality Assurance
            </p>
            <GroupList groups={qa} />
          </div>
        </Slide>
      </RevealGroup>

      {/* Mobile */}
      <RevealGroup className="lg:hidden">
        <div className="relative">
          <div className="absolute inset-0">
            <Image
              src="/assets/s7-team-photo.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/80" />
          </div>
          <div className="relative mx-auto flex max-w-[720px] flex-col gap-8 px-5 py-12">
            <h2
              data-reveal
              className="m-0 text-[28px] font-semibold text-white"
            >
              The Team
            </h2>

            <div
              data-reveal
              className="overflow-hidden rounded-2xl bg-card shadow-card"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/assets/s7-sandeep.jpg"
                  alt="Sandeep Rana"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <div className="px-5 pb-6 pt-5 text-center">
                <p className="m-0 text-[24px] font-semibold text-ink">
                  Sandeep Rana
                </p>
                <p className="m-0 mt-1 text-[16px] text-slate-500">
                  CEO &amp; CTO
                </p>
                <ul className="m-0 mt-4 list-disc pl-5 text-left text-[15px] font-medium leading-snug text-ink">
                  <li className="mb-2">
                    Developed Scan &amp; Go (Decathlon) and Driver&rsquo;s App
                    (Ola Cabs) from scratch.
                  </li>
                  <li>
                    Helped make my trip&rsquo;s Flights, Commons, GI and
                    Payment gateway improve transaction success rate and
                    Developed it&rsquo;s UPI app.
                  </li>
                </ul>
              </div>
            </div>

            <div data-reveal>
              <p className="m-0 mb-4 text-[22px] font-semibold text-white">
                Development Team
              </p>
              <GroupList groups={devTeam} />
            </div>
            <div data-reveal>
              <p className="m-0 mb-4 text-[22px] font-semibold text-white">
                Marketing
              </p>
              <GroupList groups={marketing} />
            </div>
            <div data-reveal>
              <p className="m-0 mb-4 text-[22px] font-semibold text-white">
                Product Strategy
              </p>
              <GroupList groups={productStrategy} />
            </div>
            <div data-reveal>
              <p className="m-0 mb-4 text-[22px] font-semibold text-white">
                Management
              </p>
              <GroupList groups={management} />
            </div>
            <div data-reveal>
              <p className="m-0 mb-4 text-[22px] font-semibold text-white">
                Quality Assurance
              </p>
              <GroupList groups={qa} />
            </div>
          </div>
        </div>
      </RevealGroup>
    </section>
  );
}
