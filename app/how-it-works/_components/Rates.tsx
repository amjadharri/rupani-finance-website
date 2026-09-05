import { Card, CardBody, Container, Eyebrow, Heading } from "@/components/ui";
import { RatesTable } from "@/components/sections";
import { standardDownpayment } from "@/lib/content/rates";

/** How It Works 03 / Rates — on the charcoal band, with the downpayment card. */
export function Rates() {
  return (
    <section data-reveal id="rates" className="bg-brand-charcoal py-16 text-brand-on-dark md:py-32">
      <Container>
        <Eyebrow className="text-brand-on-dark-2">Rates</Eyebrow>
        <Heading className="mt-8 max-w-[420px]">Straightforward, competitive rates</Heading>

        <div data-reveal-stagger className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.5fr]">
          <Card tone="navy" className="flex flex-col">
            <p className="text-eyebrow font-medium uppercase tracking-[0.12em] text-brand-on-dark-2">
              Standard downpayment
            </p>
            <p className="mt-4 font-display text-display-l font-light">{standardDownpayment}</p>
            <CardBody className="mt-6 text-brand-on-dark-2">
              Competitive, transparent, and never a surprise buried in fine print. You&apos;ll know
              exactly what your client is paying from day one, with no hidden fees and no fine-print
              escalations.
            </CardBody>
          </Card>

          <RatesTable
            tone="on-red"
            caption="We also offer tiered rates based on the amount financed"
          />
        </div>

        <p className="mt-12 max-w-[640px] text-body-m text-brand-on-dark-2">
          We will be delighted to discuss quotes for the most competitive finance charge / rate. Rates
          and terms may vary based on premium size and line of business contact USIF for a customized
          quote.
        </p>
      </Container>
    </section>
  );
}
