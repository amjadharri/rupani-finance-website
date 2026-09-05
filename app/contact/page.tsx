import type { Metadata } from "next";
import { Container, Eyebrow, Heading } from "@/components/ui";
import { ClosingBand, PageHero } from "@/components/sections";
import { company } from "@/lib/config/site";
import { ContactForm } from "./_components";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Speak to the U.S. Insurance Funding team about premium finance solutions, or request a call " +
    "back and we will be in touch.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        eyebrow="Contact us"
        title="Ready to get started with U.S. Insurance Funding?"
        lede={
          <p>Contact us today to learn more about our premium finance solutions or to get a quote.</p>
        }
      />

      <section data-reveal className="bg-surface py-16 md:py-32">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow className="text-brand-blue">Get in touch</Eyebrow>
            <Heading level={2} className="mt-6">
              Speak to the team
            </Heading>

            <dl className="mt-12 max-w-[490px]">
              <div className="border-b border-brand-rule pb-6">
                <dt className="text-body-s font-medium text-brand-ink-2">Phone</dt>
                <dd className="mt-2 text-title-m">
                  <a href={company.phoneHref} className="hover:underline">
                    {company.phone}
                  </a>
                </dd>
              </div>

              <div className="border-b border-brand-rule pb-6 pt-6">
                <dt className="text-body-s font-medium text-brand-ink-2">Address</dt>
                <dd className="mt-2 text-title-m">
                  {company.address.street}
                  <br />
                  {company.address.city}
                </dd>
              </div>
            </dl>
          </div>

          <ContactForm />
        </Container>
      </section>

      <ClosingBand title="We look forward to partnering with you." />
    </>
  );
}
