import Link from "next/link";
import { Chip, Eyebrow, Heading, NoteStrip, Section } from "@/components/ui";
import { Media } from "@/components/sections";
import flexibility from "@/assets/images/how-it-works/flexibility.jpg";

const groups = [
  {
    title: "We finance it all",
    body: "From basic liability to total enterprise protection.",
    chips: ["Commercial", "Homeowners", "Excess & Surplus Lines"],
    link: { label: "See Businesses We Finance", href: "/what-we-finance" },
  },
  {
    title: "Payment structures",
    body: "Shaped around your client's real cash flow instead of a rigid template.",
    chips: ["Monthly", "Quarterly", "Annually", "Seasonally"],
    link: { label: "See States We Fund", href: "/states-we-fund" },
  },
];

/** How It Works 04 / Flexibility */
export function Flexibility() {
  return (
    <Section id="flexibility">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow className="text-brand-blue">Flexibility</Eyebrow>
          <Heading className="mt-6 max-w-[420px]">Flexibility that fits your book of business</Heading>
        </div>

        <p className="text-body-m text-brand-ink-2 lg:self-center">
          And we welcome the accounts other finance companies won&apos;t touch. No premium is too small
          to matter to us because it matters to you.
        </p>
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-[72px]">
        <div className="flex flex-col gap-10">
          {groups.map((group) => (
            <div key={group.title} className="border-t border-brand-rule pt-8">
              <h3 className="text-title-m font-semibold">{group.title}</h3>
              <p className="mt-3 text-body-m text-brand-ink-2">{group.body}</p>

              <ul className="mt-6 flex flex-wrap gap-4">
                {group.chips.map((chip) => (
                  <li key={chip}>
                    <Chip>{chip}</Chip>
                  </li>
                ))}
              </ul>

              <Link
                href={group.link.href}
                data-tap
                className="mt-6 inline-flex items-center text-body-m text-brand-blue underline underline-offset-4"
              >
                {group.link.label}
              </Link>
            </div>
          ))}

          <NoteStrip>We provide our services anywhere in the United States of America.</NoteStrip>
        </div>

        <Media
          src={flexibility}
          alt="An agent and a client shaking hands across a desk"
          sizes="(max-width: 1024px) 100vw, 520px"
          className="lg:self-center"
        />
      </div>
    </Section>
  );
}
