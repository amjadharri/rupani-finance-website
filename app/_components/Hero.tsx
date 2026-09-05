import { ButtonLink, Container, Eyebrow, Heading } from "@/components/ui";
import { Media } from "@/components/sections";
import { SiteHeader } from "@/components/layout";
import policyReview from "@/assets/images/home/hero-1-policy-review.jpg";
import quotesOnLaptop from "@/assets/images/home/hero-2-quotes-on-laptop.jpg";
import agentWithClients from "@/assets/images/home/hero-3-agent-with-clients.jpg";
import policyDocument from "@/assets/images/home/hero-4-policy-document.jpg";
import signingPaperwork from "@/assets/images/home/hero-5-signing-paperwork.jpg";
import { applyFormUrl } from "@/lib/config/site";

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
    <section className="overflow-x-clip bg-brand-blue-deep text-brand-on-dark">
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

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <ButtonLink href={applyFormUrl} variant="on-dark" withArrow className="w-full sm:w-auto">
            Apply Now
          </ButtonLink>
          <ButtonLink href={applyFormUrl} variant="outline-on-dark" className="w-full sm:w-auto">
            Lets Get You Funded
          </ButtonLink>
        </div>

        {/* The 390 board draws the mosaic as a 788-wide strip centred at x=-199,
            so it bleeds past both edges rather than wrapping: five 148x210
            tiles with a 12px gap. From md it becomes the contained 5-up row. */}
        <ul
          className={
            // Centred on the column, not left-aligned in it: the board puts the
            // strip at x=-199 on a 390 board, i.e. 788 centred on the 350
            // content column, bleeding equally past both edges.
            "mt-16 relative left-1/2 -translate-x-1/2 flex w-[788px] max-w-none gap-3 " +
            "md:left-auto md:translate-x-0 md:grid md:w-auto md:grid-cols-5 md:gap-5"
          }
        >
          {/* The whole strip sits above the fold on desktop, so none of it is lazy. */}
          {mosaic.map((image) => (
            <li key={image.alt} className="w-[148px] shrink-0 md:w-auto">
              <Media
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(max-width: 768px) 148px, 250px"
                className="h-[210px] md:h-auto md:aspect-[148/210]"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
