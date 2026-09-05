import type { Metadata } from "next";
import { ButtonLink, Container, Heading } from "@/components/ui";
import { ClosingBand, Media, PageHero } from "@/components/sections";
import retailBrokers from "@/assets/images/who-we-serve/retail-brokers.jpg";
import insuranceCompanies from "@/assets/images/who-we-serve/insurance-companies.jpg";
import { applyFormUrl } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "Premium finance solutions built for retail brokers, managing general agents and insurance " +
    "companies — wherever you sit in the distribution chain.",
};

const partners = [
  { number: "01", title: "Retail Brokers" },
  { number: "02", title: "Managing General Agents" },
  { number: "03", title: "Insurance Companies" },
] as const;

export default function WhoWeServePage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Home", href: "/" }, { label: "Who We Serve" }]}
        eyebrow="Who we serve"
        titleSize="l"
        title="Our premium finance solutions are built to help our partners grow no matter where you sit in the distribution chain"
      >
        <ul data-reveal-stagger className="mt-16 grid gap-8 md:grid-cols-3 md:gap-10">
          {partners.map((partner) => (
            <li key={partner.number} className="border-t border-brand-rule pt-6">
              <p className="text-body-s text-brand-blue">{partner.number}</p>
              <p className="mt-4 text-display-s font-display font-light">{partner.title}</p>
            </li>
          ))}
        </ul>
      </PageHero>

      {/* 01 — text left, photograph right, on white. */}
      <section data-reveal className="bg-surface py-16 md:py-32">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-body-s text-brand-blue">01</p>
            <Heading level={2} className="mt-4">
              Retail Brokers
            </Heading>
            <p className="mt-8 max-w-[560px] text-body-m text-brand-ink-2">
              Close more sales by giving your clients an affordable way to pay for coverage at the
              point of sale. Instead of losing a deal over a large upfront premium, you can offer a
              monthly payment plan on the spot keeping the client, the policy, and the commission
              where they belong.
            </p>
          </div>

          <Media
            src={retailBrokers}
            alt="Three colleagues reviewing a document together across a table"
            sizes="(max-width: 1024px) 100vw, 620px"
          />
        </Container>
      </section>

      {/* 02 — the red band. The white button here carries a red label, not the
          navy one the homepage hero uses. */}
      <section data-reveal className="bg-brand-charcoal py-16 text-brand-on-dark md:py-32">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-body-s text-brand-on-dark-2">02</p>
            <Heading level={2} className="mt-4">
              Managing General Agents
            </Heading>
          </div>

          <div>
            <p className="max-w-[620px] text-body-m text-brand-on-dark-2">
              Finance your entire book through one consistent, dependable partner. Whether you&apos;re
              placing a single account or managing a large program, USIF gives your downstream agents
              a financing option they can rely on every time with the same fast turnaround and
              competitive rates across the board.
            </p>

            <ButtonLink href={applyFormUrl} variant="on-dark-primary" className="mt-8">
              Become An Agent
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* 03 — photograph left, text right, on the blush fill. */}
      <section data-reveal className="bg-brand-blue-05 py-16 md:py-32">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Media
            src={insuranceCompanies}
            alt="A wooden family figurine and house beside a set of keys"
            sizes="(max-width: 1024px) 100vw, 620px"
          />

          <div>
            <p className="text-body-s text-brand-blue">03</p>
            <Heading level={2} className="mt-4">
              Insurance Companies
            </Heading>
            <p className="mt-8 max-w-[560px] text-body-m text-brand-ink-2">
              Offer your policyholders a trusted financing option backed by efficient,
              quick-turnaround service. Partnering with USIF means your insureds get flexible payment
              plans without your company taking on the administrative burden of managing premium
              finance in-house.
            </p>
          </div>
        </Container>
      </section>

      <section data-reveal className="bg-surface py-16 md:py-32">
        <Container>
          <div className="border-t border-brand-rule pt-16">
            <Heading level={1} as="p" className="max-w-[900px]">
              We provide our services anywhere in the United States of America.
            </Heading>
          </div>
        </Container>
      </section>

      <ClosingBand
        layout="split"
        body="No matter which of these lines your client falls under, USIF can put together a financing plan that fits  with affordable monthly payment plans and quick, dependable service. Once a contract is signed, it's processed and funded, with no unnecessary delay. If your agency writes a line of business you don't see listed here, reach out we finance far more than a page can list."
        primaryLabel="Partner with USIF Today"
        primaryHref={applyFormUrl}
        primaryArrow
      />
    </>
  );
}
