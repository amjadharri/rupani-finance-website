import { ButtonLink, Card, CardBody, CardTitle, Container, Eyebrow, Heading, Section } from "@/components/ui";
import { Media, RatesTable } from "@/components/sections";
import ourRates from "@/assets/images/home/our-rates.jpg";

/** 07 / Our rates — rate card, supporting navy note, and a full-width red banner. */
export function OurRates() {
  return (
    <>
      <Section flush="top" className="pb-12 md:pb-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow className="text-brand-blue">Our rates</Eyebrow>
            <Heading className="mt-6">Nine payments</Heading>
          </div>

          <p className="text-body-m text-brand-ink-2 lg:self-center lg:text-right">
            We will be delighted to discuss quotes for the most competitive finance charge / rate.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <RatesTable />

          <div className="flex flex-col gap-6">
            <Card tone="navy">
              <CardTitle className="text-title-m font-sans font-semibold">
                We Will Meet / Beat The Most Competitive Finance Charge.
              </CardTitle>
              <CardBody className="mt-3 text-brand-on-dark-2">
                Our rate (finance charge) is competitive and both Agents &amp; Insured find it very
                attractive.
              </CardBody>
            </Card>

            <Media
              fill
              src={ourRates}
              alt="A fan of US dollar notes"
              sizes="(max-width: 1024px) 100vw, 420px"
              className="min-h-[220px] flex-1"
            />
          </div>
        </div>
      </Section>

      <Container className="pb-16 md:pb-32">
        <div className="flex flex-col gap-8 rounded-card bg-brand-blue px-8 py-10 text-brand-on-dark md:flex-row md:items-center md:justify-between md:px-12">
          <div className="max-w-[640px]">
            <p className="font-display text-display-m font-light">
              We Will Meet / Beat The Most Competitive Finance Charge.
            </p>
            <p className="mt-3 text-body-m text-brand-on-dark-2">
              Our rate (finance charge) is competitive and both Agents &amp; Insured find it very
              attractive.
            </p>
          </div>

          <ButtonLink href="/apply" variant="on-dark" className="shrink-0">
            Let&apos;s Get You Funded
          </ButtonLink>
        </div>
      </Container>
    </>
  );
}
