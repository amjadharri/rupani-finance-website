import type { Metadata } from "next";
import { Container, Eyebrow, Heading } from "@/components/ui";
import { ClosingBand, PageHero } from "@/components/sections";
import { BlogBrowser } from "./_components";
import { applyFormUrl } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Insights, tips and updates from the premium finance industry — market trends and practical " +
    "advice for agents, brokers and insurance professionals.",
};

export default function BlogsPage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Home", href: "/" }, { label: "Resources" }]}
        eyebrow="Resources"
        titleSize="l"
        title={
          <>
            Welcome to the U.S. Insurance Funding Resources
            <br />
            Center.
          </>
        }
        aside={
          <p>
            We have designed this section to serve as your go-to destination for industry insights,
            agent connections, and real-world feedback from our valued partners.
          </p>
        }
        asideRule
        lede={
          <p className="max-w-[560px]">
            Here you&apos;ll find valuable information, tools, and connections to help you and your
            clients make the most of premium financing.
          </p>
        }
      />

      <section className="bg-surface py-16 md:py-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow className="text-brand-blue">Insights</Eyebrow>
              <Heading level={2} className="mt-6">
                Blogs
              </Heading>
            </div>

            <p className="max-w-[660px] text-body-m text-brand-ink-2 lg:pt-2">
              Stay informed with the latest insights, tips, and updates from the premium finance
              industry. Our blog covers topics that matter to agents, brokers, and insurance
              professionals from market trends to practical advice on growing your agency.
            </p>
          </div>

          <div className="mt-12">
            <BlogBrowser />
          </div>
        </Container>
      </section>

      <ClosingBand
        title="Contact USIF to connect with an agent in your area or to learn more about becoming a partner agent."
        primaryLabel="Become an Agent"
        primaryHref={applyFormUrl}
        secondaryLabel="Contact"
        secondaryHref="/contact"
      />
    </>
  );
}
