import { ButtonLink, Eyebrow, Heading, Section } from "@/components/ui";
import { MediaFrame } from "@/components/sections";

const audiences = [
  {
    title: "Retail Broker",
    body: "Some premium finance companies discourage the financing of small premiums; we welcome all the accounts apart of size and financial strength.",
  },
  {
    title: "Managing General Agent",
    body: "Our company can be your single source for premium financing, with plans structured monthly, quarterly or annually.",
  },
  {
    title: "Insurance Company",
    body: "Our efficiency lies in quick service. Once contract is signed, it is processed and funded.",
  },
];

/** 06 / Who we serve */
export function WhoWeServe() {
  return (
    <Section flush="top">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-[72px]">
        <div>
          <Eyebrow className="text-brand-blue">Who we serve</Eyebrow>
          <Heading className="mt-6 max-w-[340px]">Built around your agency</Heading>

          <dl className="mt-12">
            {audiences.map((audience) => (
              <div key={audience.title} className="border-t border-brand-rule py-8">
                <dt className="text-display-s font-display font-light">{audience.title}</dt>
                <dd className="mt-3 text-body-m text-brand-ink-2">{audience.body}</dd>
              </div>
            ))}
          </dl>

          <ButtonLink href="/become-an-agent" withArrow>
            Become An Agent
          </ButtonLink>
        </div>

        <MediaFrame
          ratio="1 / 1.05"
          label="An agent reviewing documents on a clipboard"
          className="lg:self-center"
        />
      </div>
    </Section>
  );
}
