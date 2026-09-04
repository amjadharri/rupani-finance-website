import type { Metadata } from "next";
import { ButtonLink, Container, Eyebrow, Heading } from "@/components/ui";
import { ClosingBand, Media, PageHero } from "@/components/sections";
import { clientQuotes, whyChooseUsifStatements } from "@/lib/content/testimonials";
import corporateStrength from "@/assets/images/why-choose-usif/corporate-strength.jpg";

export const metadata: Metadata = {
  title: "Why Choose USIF",
  description:
    "All 50 states, over 25 years of experience, a network of more than 300 agents, competitive " +
    "finance charges and flexible payment schedules — why agencies choose U.S. Insurance Funding.",
};

/** 01 / Hero — the two-column checklist under the page title. */
const reasons = [
  "We serve all 50 states",
  "Over 25 years of industry experience",
  "Network of 300+ valued agents and reputable carriers",
  "Competitive 25% Down Payment transparent, with no hidden fees",
  "We'll meet or beat the most competitive finance charge you've been quoted",
  "Fast, friction-free processing contracts funded the moment they're signed",
  "Every line, every size Commercial, Homeowners, Excess & Surplus, no account too small",
  "Flexible payment schedules monthly, quarterly, annual, or seasonal",
  "EFT/ACH, Credit Card & E-Payment accepted with online notices, anytime",
  "We provide our services anywhere in the United States of America",
];

function Check() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue"
    >
      <path d="m4 12 5.5 5.5L20 6.5" />
    </svg>
  );
}

export default function WhyChooseUsifPage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Home", href: "/" }, { label: "Why Choose USIF" }]}
        eyebrow="Why choose USIF"
        title="Why Choose USIF?"
      >
        <ul className="mt-16 grid gap-x-16 sm:grid-cols-2">
          {reasons.map((reason) => (
            <li
              key={reason}
              className="flex items-start gap-4 border-t border-brand-rule py-5 text-body-m"
            >
              <Check />
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </PageHero>

      <section className="bg-surface py-16 md:py-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow className="text-brand-blue">In their words</Eyebrow>
              <Heading level={2} className="mt-6">
                What Our Clients Say
              </Heading>
            </div>

            <p className="max-w-[620px] text-body-m text-brand-ink-2 lg:pt-2">
              At USIF, our reputation is built on the relationships we&apos;ve cultivated over more
              than 25 years. Here&apos;s what some of our valued partners have to say about working
              with us:
            </p>
          </div>

          {clientQuotes.map((client) => (
            <figure
              key={client.name}
              className="mt-12 rounded-card border border-brand-rule bg-brand-blue-05 p-10 md:p-14"
            >
              <blockquote className="max-w-[900px] font-display text-display-m font-light">
                &ldquo;{client.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 text-body-s font-semibold text-brand-ink">
                {client.name}
              </figcaption>
            </figure>
          ))}

          <div className="mt-16 grid gap-x-16 gap-y-12 border-t border-brand-rule pt-16 md:grid-cols-2">
            {whyChooseUsifStatements.map((statement) => (
              <p key={statement.id} className="text-body-m text-brand-ink-2">
                {statement.text}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-blue-05 py-16 md:py-32">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Media
            src={corporateStrength}
            alt="Two USIF colleagues going through paperwork in a meeting room"
            sizes="(max-width: 1024px) 100vw, 520px"
          />

          <div>
            <Eyebrow className="text-brand-blue">Corporate strength</Eyebrow>
            <Heading level={2} className="mt-6">
              Corporate Strength &amp; Stability
            </Heading>

            <p className="mt-8 text-body-m text-brand-ink-2">
              U.S. Insurance Funding has distinguished itself by meeting the needs of agencies just
              like yours. We have the unique ability to understand the individual needs of each agent
              and broker. Some premium finance companies discourage the financing of small premiums;
              we welcome all accounts regardless of size and financial strength.
            </p>

            <p className="mt-6 text-body-m text-brand-ink-2">
              Our approach makes a difference in projecting your business image as well as increasing
              profit with mutual business relationship. We work together as a consultant. We keep in
              mind the types of coverage you finance, the premium size and above all the technologies
              needed in order to make perfect fit for your agency. We offer unique services with open
              options in order to accommodate you and the insured.
            </p>

            <ButtonLink href="/apply" className="mt-8">
              Let&apos;s Get You Funded
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="bg-brand-charcoal py-16 text-brand-on-dark md:py-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow className="text-brand-red-on-dark">At the forefront</Eyebrow>
              <Heading level={2} className="mt-6">
                Industry Leadership
              </Heading>

              <ButtonLink
                href="/become-an-agent"
                variant="on-dark-primary"
                className="mt-8"
              >
                Become An Agent
              </ButtonLink>
            </div>

            <p className="max-w-[620px] text-body-m text-brand-on-dark-2 lg:pt-2">
              As the premium finance market continues to evolve, USIF remains at the forefront. With
              over 25 years of experience, a network of more than 300 agents, and a modern online
              quotation system that lets agents and insureds manage accounts, accept payments, and
              print notices anytime, anywhere, we are uniquely positioned to serve the needs of
              today&apos;s insurance professionals.
            </p>
          </div>

          <div className="mt-16 grid gap-x-16 gap-y-10 border-t border-brand-on-dark/25 pt-12 md:grid-cols-2">
            <p className="text-body-m text-brand-on-dark-2">
              The premium finance market is projected to grow from{" "}
              <strong className="font-semibold text-brand-on-dark">USD 16.26 Billion</strong> in 2025
              to <strong className="font-semibold text-brand-on-dark">USD 25.10 Billion</strong> by
              2034, exhibiting a compound annual growth rate of{" "}
              <strong className="font-semibold text-brand-on-dark">4.94%</strong> during the forecast
              period. USIF is ready to help you capture this growth.
            </p>

            <p className="text-body-m text-brand-on-dark-2">
              We Finance All Kinds of Commercial (Excess &amp; Surplus Lines) and Homeowners
              Insurance. Our rate (finance charge) is competitive and both Agents &amp; Insured find
              it very attractive. We make it easy for your customers to afford the insurance they
              need through affordable monthly payment plans.
            </p>
          </div>
        </Container>
      </section>

      <ClosingBand
        tone="white"
        title="Ready to partner with a premium finance company that serves your state and supports your growth?"
        primaryLabel="Partner with USIF Today"
        primaryHref="/apply"
        primaryArrow
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
