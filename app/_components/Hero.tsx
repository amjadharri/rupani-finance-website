import { ButtonLink, Container, Eyebrow, Heading } from "@/components/ui";
import { Media } from "@/components/sections";
import { SiteHeader } from "@/components/layout";
import policyReview from "@/assets/images/home/hero-1-policy-review.jpg";
import quotesOnLaptop from "@/assets/images/home/hero-2-quotes-on-laptop.jpg";
import agentWithClients from "@/assets/images/home/hero-3-agent-with-clients.jpg";
import policyDocument from "@/assets/images/home/hero-4-policy-document.jpg";
import signingPaperwork from "@/assets/images/home/hero-5-signing-paperwork.jpg";

const mosaic = [
  { src: policyReview, alt: "An agent reviewing a policy document with a client" },
  { src: quotesOnLaptop, alt: "Quote and account data on a laptop screen" },
  { src: agentWithClients, alt: "An agent meeting a couple at their kitchen table" },
  { src: policyDocument, alt: "An insurance agent policy document" },
  { src: signingPaperwork, alt: "A homeowner signing paperwork with an agent" },
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
          {/* The whole strip sits above the fold on desktop, so none of it is lazy. */}
          {mosaic.map((image) => (
            <li key={image.alt}>
              <Media
                src={image.src}
                alt={image.alt}
                priority
                sizes="(max-width: 768px) 50vw, 250px"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
