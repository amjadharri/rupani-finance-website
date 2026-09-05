import { Eyebrow, Heading, Section, StatTile } from "@/components/ui";

/** Both boards fill the third figure navy — an accent, not the hover state. */
const stats = [
  { value: "1999", label: "serving agents and producers", tone: "card" },
  { value: "25", label: "years of premium financing", tone: "card" },
  { value: "300+", label: "valued agents nationwide", tone: "navy" },
  { value: "USA", label: "services anywhere in the United States", tone: "card" },
] as const;

/** About Us 03 / Track record */
export function TrackRecord() {
  return (
    <Section tone="tint">
      <div data-reveal-stagger className="grid gap-6 md:gap-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow className="text-brand-red">Our track record</Eyebrow>
          <Heading className="mt-5 max-w-[420px] md:mt-6">A network built over twenty-five years</Heading>
        </div>

        <p className="text-body-m text-brand-ink-2 lg:self-center">
          Over the past 25 years, we&apos;ve built a network of more than 300 valued agents and
          reputable insurance carriers nationwide, backed by prompt, error-free service and a modern
          online quotation system that lets agents and insureds manage accounts, accept payments, and
          print notices anytime, from anywhere.
        </p>
      </div>

      <div data-reveal-stagger
        className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatTile
            key={stat.label}
            value={stat.value}
            label={stat.label}
            tone={stat.tone}
          />
        ))}
      </div>
    </Section>
  );
}
