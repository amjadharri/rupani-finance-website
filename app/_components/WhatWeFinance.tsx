import { ButtonLink, Card, CardBody, CardTitle, Eyebrow, Heading, Section } from "@/components/ui";
import { Media } from "@/components/sections";
import whatWeFinance from "@/assets/images/home/what-we-finance.jpg";
import { PolicyIcon } from "./PolicyIcon";

interface FinanceCard {
  number: string;
  title: string;
  body: string;
}

const cards: FinanceCard[] = [
  {
    number: "01",
    title: "Commercial policies",
    body: "Our specialty is commercial premiums we can offer all your customers our service.",
  },
  {
    number: "02",
    title: "Homeowners policies",
    body: "We make it easy for your customers to afford the insurance they need through affordable monthly payment plans.",
  },
  {
    number: "03",
    title: "Excess & surplus lines",
    body: "We offer very competitive APR and affordable financing options for all kinds of policies.",
  },
  {
    number: "05",
    title: "Any amount",
    body: "Our financing programmes are specially designed to meet all types of requirements for any amount.",
  },
  {
    number: "04",
    title: "Seasonal cash flow",
    body: "Payment plans can be structured monthly, quarterly, annually, or to match your seasonal cash flow.",
  },
];

/** 04 / What we finance — five cards plus a photo tile in a three-column grid. */
export function WhatWeFinance() {
  return (
    <Section tone="blush">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow className="text-brand-blue-deep">What we finance</Eyebrow>
          <Heading className="mt-6 max-w-[420px]">Cover for every kind of policy</Heading>
        </div>

        <div>
          <p className="text-body-m text-brand-ink-2">
            We finance all kinds of Commercial (Excess &amp; Surplus Line) &amp; Homeowners Insurance.
            Our financing programmes are specially designed to meet all types of requirements for any
            amount.
          </p>
          <ButtonLink href="/apply" className="mt-8" withArrow>
            Let&apos;s Get You Funded
          </ButtonLink>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.slice(0, 2).map((card) => (
          <FinanceTile key={card.number} card={card} />
        ))}

        <Media
          fill
          src={whatWeFinance}
          alt="A family sheltering under a roof shape"
          sizes="(max-width: 768px) 100vw, 400px"
          className="h-full min-h-[300px]"
        />

        {cards.slice(2).map((card) => (
          <FinanceTile key={card.number} card={card} />
        ))}
      </div>
    </Section>
  );
}

function FinanceTile({ card }: { card: FinanceCard }) {
  return (
    <Card interactive className="flex h-full min-h-[300px] flex-col">
      <div className="flex items-start justify-between">
        <PolicyIcon className="text-brand-blue-deep" />
        <span className="text-body-m text-brand-ink-2">{card.number}</span>
      </div>

      <CardTitle className="mt-auto pt-10">{card.title}</CardTitle>
      <CardBody className="mt-3 text-brand-ink-2">{card.body}</CardBody>
    </Card>
  );
}
