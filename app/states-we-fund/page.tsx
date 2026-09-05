import type { Metadata } from "next";
import { Container, Eyebrow, Heading } from "@/components/ui";
import { ClosingBand, PageHero } from "@/components/sections";
import { TILE_COLUMNS, states, statesAlphabetical } from "@/lib/content/states";
import { applyFormUrl } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "States We Fund",
  description:
    "U.S. Insurance Funding provides premium finance solutions across all 50 states, from the " +
    "commercial hubs of New York and California to the growing markets of Texas and Florida.",
};

export default function StatesWeFundPage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Home", href: "/" }, { label: "States We Fund" }]}
        eyebrow="States we fund"
        title={
          <>
            We provide our services anywhere in the
            <br />
            United States of America.
          </>
        }
        lede={
          <p className="max-w-[760px]">
            U.S. Insurance Funding provides premium finance solutions across all 50 states. From the
            bustling commercial hubs of New York and California to the growing markets of Texas and
            Florida, we are here to help agents and their clients access the coverage they need
            wherever they are.
          </p>
        }
      />

      <section className="bg-surface py-16 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div>
              <Eyebrow className="text-brand-blue">Coverage nationwide</Eyebrow>
              <Heading level={2} className="mt-6">
                All 50 States
              </Heading>
            </div>

            {/*
              The tile map. Each state sits at the row and column the board
              places it at, so it is a grid rather than a projection.

              Eleven columns of two-letter tiles cannot hold 16px type at 390,
              and Rule 02's floor outranks the drawn size — so the map keeps its
              type and scrolls inside its own box on small screens instead. The
              page itself never scrolls sideways, and every state is repeated at
              full name in the list underneath.
            */}
            <div className="-mx-5 overflow-x-auto px-5 md:mx-0 md:px-0">
              <ul
                aria-label="States we fund, arranged as a map"
                className="grid w-[560px] max-w-none gap-2.5"
                style={{ gridTemplateColumns: `repeat(${TILE_COLUMNS}, minmax(0, 1fr))` }}
              >
                {states.map((state) => (
                  <li
                    key={state.abbr}
                    style={{ gridRow: state.row, gridColumn: state.column }}
                    className="flex aspect-square items-center justify-center rounded-card bg-brand-blue-05 text-body-s font-medium text-brand-ink"
                  >
                    <abbr title={state.name} className="no-underline">
                      {state.abbr}
                    </abbr>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ul className="mt-16 grid gap-4 border-t border-brand-rule pt-16 sm:grid-cols-2 lg:grid-cols-5">
            {statesAlphabetical.map((state) => (
              <li
                key={state.abbr}
                className="rounded-card border border-brand-rule bg-brand-blue-05 px-5 py-4 text-body-m"
              >
                {state.name}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-brand-blue-05 py-16 md:py-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow className="text-brand-blue">Nationwide network</Eyebrow>
              <Heading level={2} className="mt-6">
                Our National Reach
              </Heading>
            </div>

            <p className="max-w-[620px] text-body-m text-brand-ink-2 lg:pt-2">
              We are proud to serve a growing network of over 300 valued agents and reputable
              insurance carriers nationwide. Whether you are a retail broker in a small town or a
              managing general agent operating across multiple states, USIF is your single source for
              premium financing.
            </p>
          </div>

          <p className="mt-12 max-w-[980px] border-t border-brand-rule pt-12 text-body-m text-brand-ink-2">
            The U.S. insurance premium finance market is estimated to generate approximately{" "}
            <strong className="font-semibold text-brand-blue">$60 billion</strong> in annual loan
            originations and is projected to grow at a compound annual rate of{" "}
            <strong className="font-semibold text-brand-blue">roughly 10%</strong>, driven by
            continued expansion of the excess and surplus (E&amp;S) insurance market.
          </p>
        </Container>
      </section>

      <ClosingBand
        title="As a key player in this expanding market, USIF is positioned to support your agency's growth with competitive rates, fast processing, and flexible payment solutions no matter where you are located."
        primaryLabel="Let's Get You Funded"
        primaryHref={applyFormUrl}
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
