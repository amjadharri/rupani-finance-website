import Link from "next/link";
import { Container, Eyebrow, Heading } from "@/components/ui";
import { Media } from "@/components/sections";
import aboutHero from "@/assets/images/about/hero.jpg";
import { SiteHeader } from "@/components/layout";

const facts = [
  { label: "Established", value: "1999" },
  { label: "Based in", value: "Houston, Texas" },
  { label: "Coverage", value: "Nationwide" },
];

/** About Us 01 / Hero — light navigation on the page fill, offset red block behind the photo. */
export function AboutHero() {
  return (
    <section className="bg-surface-tint">
      <SiteHeader tone="light" />

      <Container className="pb-16 pt-10 md:pb-32">
        <nav aria-label="Breadcrumb" className="text-body-s text-brand-ink-2">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="px-2" aria-hidden>
            /
          </span>
          <span aria-current="page" className="text-brand-ink">
            About Us
          </span>
        </nav>

        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow className="text-brand-red">About Us</Eyebrow>
            <Heading level={1} className="mt-6">
              About U.S.
              <br />
              Insurance Funding
            </Heading>
            <p className="mt-8 max-w-[540px] text-body-m text-brand-ink-2">
              An established premium finance company with an excellent reputation across the insurance
              financing market serving general agents and producers as a single source for premium
              financing.
            </p>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-brand-rule pt-8">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-body-s text-brand-ink-2">{fact.label}</dt>
                  <dd className="mt-2 text-display-s font-display font-light">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative lg:pl-12 lg:pt-12">
            <div
              aria-hidden
              className="absolute left-0 top-0 hidden h-[190px] w-[190px] rounded-card bg-brand-blue lg:block"
            />
            <Media
              src={aboutHero}
              alt="Two USIF advisers in conversation across a desk"
              priority
              sizes="(max-width: 1024px) 100vw, 480px"
              className="relative"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
