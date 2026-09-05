import { ButtonLink, Card, CardBody, CardTitle, Container, Eyebrow, Heading } from "@/components/ui";
import { Media } from "@/components/sections";
import howWeDeliver from "@/assets/images/home/how-we-deliver.jpg";
import { applyFormUrl } from "@/lib/config/site";

const capabilities = [
  {
    title: "Access quotes online",
    body: "Instant access to quotes through the unique ONLINE-QUOTATION system, prompt and error free.",
  },
  {
    title: "View customer accounts",
    body: "View your customer accounts, right on your computer anywhere any time.",
  },
  {
    title: "Accept payments",
    body: "EFT / ACH, Credit Card, E-Payment accepted and print notices online.",
  },
  {
    title: "Print notices online",
    body: "Print notices online this will surely save your valuable time and paper work.",
  },
  {
    title: "Expert support",
    body: "Excellent business support from Premium Finance experts, prepared to answer your question immediately and accurately.",
  },
];

/** 05 / How we deliver — on the charcoal (red) band. */
export function HowWeDeliver() {
  return (
    <section data-reveal className="bg-brand-charcoal py-16 text-brand-on-dark md:py-32">
      <Container>
        <div data-reveal-stagger className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow className="text-brand-on-dark-2">Our approach</Eyebrow>
            <Heading className="mt-6 max-w-[460px]">How USIF delivers premium financing</Heading>
          </div>

          <div className="lg:justify-self-end lg:self-center">
            <ButtonLink href={applyFormUrl} variant="on-dark" withArrow>
              Lets Get You Funded
            </ButtonLink>
          </div>
        </div>

        <div data-reveal-stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <Card key={item.title} tone="on-red" interactive className="flex h-full min-h-[220px] flex-col">
              <CardTitle>{item.title}</CardTitle>
              <CardBody className="mt-3 text-brand-on-dark-2">{item.body}</CardBody>
            </Card>
          ))}

          <Media
            fill
            src={howWeDeliver}
            alt="Two people shaking hands over a signed contract"
            sizes="(max-width: 768px) 100vw, 400px"
            className="h-full min-h-[220px]"
          />
        </div>
      </Container>
    </section>
  );
}
