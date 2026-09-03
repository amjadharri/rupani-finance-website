import { Eyebrow, Heading, Section, StatTile } from "@/components/ui";
import { Media } from "@/components/sections";
import whoWeAre from "@/assets/images/home/who-we-are.jpg";

const stats = [
  { value: "25", label: "years" },
  { value: "300+", label: "valued agents" },
  { value: "9", label: "payments" },
];

/** 03 / Who we are */
export function WhoWeAre() {
  return (
    <Section tone="white">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-[72px]">
        <Media
          src={whoWeAre}
          alt="Atif Javaid, General Manager of U.S. Insurance Funding"
          sizes="(max-width: 1024px) 100vw, 600px"
        />

        <div>
          <Eyebrow className="text-brand-red">Who we are</Eyebrow>

          <Heading className="mt-6 max-w-[420px]">
            Your single source for premium financing
          </Heading>

          <p className="mt-8 text-body-m text-brand-ink-2">
            U.S. Insurance Funding (USIF) is an established premium finance company, having excellent
            reputation and well known in the insurance financing market, by offering flexible premium
            finance solutions.
          </p>

          <p className="mt-6 text-body-m text-brand-ink-2">
            We have been serving General Agents and Producers since early nineties. As Premium Finance
            Specialists, we can help your customers by paying their insurance premiums through
            financing. Our specialty is commercial premiums from large companies with a fleet of
            vehicles to the first time car buyer.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-brand-rule pt-8">
            {stats.map((stat) => (
              <StatTile key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
