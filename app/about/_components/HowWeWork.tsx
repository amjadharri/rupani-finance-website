import { Chip, Eyebrow, Heading, Section } from "@/components/ui";
import { Media } from "@/components/sections";
import howWeWork from "@/assets/images/about/how-we-work.jpg";

const values = ["Honesty", "Dependability", "Courtesy"];

/** About Us 05 / How we work */
export function HowWeWork() {
  return (
    <Section tone="white">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-[72px]">
        <div>
          <Eyebrow className="text-brand-red">How we work</Eyebrow>
          <Heading className="mt-6 max-w-[420px]">
            A consultant to your agency not just a lender
          </Heading>

          <p className="mt-8 text-body-m text-brand-ink-2">
            We believe in honesty, dependability, and courtesy in every interaction. Our team works as
            a consultant to your agency not just a lender taking the time to understand the coverage
            you finance, the premium size, and the right technology fit for your business.
          </p>
          <p className="mt-6 text-body-m text-brand-ink-2">
            That partnership approach is what has allowed us to grow a loyal following of agents and
            general agents who refer their clients to us again and again.
          </p>

          <ul className="mt-10 flex flex-wrap gap-4">
            {values.map((value) => (
              <li key={value}>
                <Chip>{value}</Chip>
              </li>
            ))}
          </ul>
        </div>

        <Media
          src={howWeWork}
          alt="Two colleagues working through an account together"
          sizes="(max-width: 1024px) 100vw, 520px"
          className="lg:self-center"
        />
      </div>
    </Section>
  );
}
