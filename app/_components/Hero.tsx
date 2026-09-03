import { ButtonLink, Container, Eyebrow, Heading } from "@/components/ui";
import { MediaFrame } from "@/components/sections";
import { SiteHeader } from "@/components/layout";

const stripImages = [
  "Adviser reviewing a policy document",
  "Analytics dashboard on a laptop",
  "Agent meeting a family",
  "Insurance agent policy paperwork",
  "Two colleagues reviewing paperwork",
];

/** 01 / Hero — the navigation sits inside the hero on the deep red fill. */
export function Hero() {
  return (
    <section className="bg-brand-blue-deep text-brand-on-dark">
      <SiteHeader tone="dark" />

      <Container className="pb-9 pt-16 md:pt-20">
        <Eyebrow className="text-brand-on-dark-2">Welcome to U.S. Insurance Funding</Eyebrow>

        <Heading level={1} className="mt-6 max-w-[720px] text-balance">
          A Premium
          <br />
          Finance Company
        </Heading>

        <p className="mt-8 max-w-[560px] text-body-m text-brand-on-dark-2">
          An established premium finance company, offering flexible premium finance solutions with
          very competitive APR for all kinds of Commercial policies, homeowners policies, excess &amp;
          surplus lines.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/apply" variant="on-dark" withArrow>
            Apply Now
          </ButtonLink>
          <ButtonLink href="/apply" variant="outline-on-dark">
            Lets Get You Funded
          </ButtonLink>
        </div>

        <ul className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-5">
          {stripImages.map((label) => (
            <li key={label}>
              <MediaFrame ratio="1 / 1.15" label={label} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
