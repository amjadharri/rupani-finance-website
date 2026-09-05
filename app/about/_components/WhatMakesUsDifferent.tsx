import { Container, Eyebrow, Heading, ListRow } from "@/components/ui";

const differences = [
  {
    index: "01",
    title: "Budget-friendly Financing",
    body: "We're known for offering some of the most Budget-friendly financing and finance charges in the industry.",
  },
  {
    index: "02",
    title: "Terms that fit cash flow",
    body: "Down payments and terms structured to fit each client's cash flow monthly, quarterly, annual, or seasonal.",
  },
  {
    index: "03",
    title: "We meet or beat",
    body: "We'll meet or beat the most competitive finance charge you've been quoted elsewhere.",
    highlighted: true,
  },
  {
    index: "04",
    title: "Every size welcome",
    body: "We welcome accounts of every size, including the small premiums many finance companies turn away.",
  },
  {
    index: "05",
    title: "A modern online system",
    body: "Agents and insureds manage accounts, accept payments, and print notices anytime, from anywhere.",
  },
];

/** About Us 04 / What makes USIF different — on the charcoal band. */
export function WhatMakesUsDifferent() {
  return (
    <section data-reveal className="bg-brand-charcoal py-16 text-brand-on-dark md:py-32">
      <Container>
        <div data-reveal-stagger className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow className="text-brand-on-dark-2">The difference</Eyebrow>
            <Heading className="mt-6 max-w-[380px]">What makes USIF different</Heading>
          </div>

          <p className="text-body-m text-brand-on-dark-2 lg:self-center">
            Five things agents tell us they notice first on rates, on terms, and on the accounts other
            finance companies turn away.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-2">
          {differences.map((item) => (
            <ListRow key={item.index} tone="on-red" {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
