import { Container, Eyebrow, Heading } from "@/components/ui";
import { SiteHeader } from "@/components/layout";

/** How It Works 01 / Hero — navy fill with the dark navigation. */
export function HowItWorksHero() {
  return (
    <section className="bg-brand-red text-brand-on-dark">
      <SiteHeader tone="dark" />

      <Container className="pb-16 pt-20 md:pb-32 md:pt-32">
        <Eyebrow className="text-brand-red-on-dark">How it works</Eyebrow>

        <Heading level={1} className="mt-6 max-w-[720px]">
          Financing that works
          <br />
          as hard as you do
        </Heading>

        <p className="mt-8 max-w-[600px] text-body-m text-brand-on-dark-2">
          At U.S. Insurance Funding, we don&apos;t just finance premiums we finance possibility. Every
          policy you write represents a client who trusts you to protect what matters most. We make
          sure that trust never has to compete with a cash flow problem.
        </p>
      </Container>
    </section>
  );
}
