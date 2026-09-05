import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { ClosingBand, PageHero } from "@/components/sections";
import { faqs } from "@/lib/content/faqs";
import { FaqList } from "./_components";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to the questions agents and insureds ask most often about how premium financing " +
    "works, what U.S. Insurance Funding finances, and what it costs.",
};

/** Rich results for the question list, built from the same content the page renders. */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FaqsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        trail={[{ label: "Home", href: "/" }, { label: "FAQs" }]}
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        lede={
          <p className="max-w-[620px]">
            Fourteen questions agents and insureds ask most often — about how premium financing
            works, what USIF finances, and what it costs.
          </p>
        }
      />

      <section data-reveal className="bg-surface py-16 md:py-32">
        <Container>
          <FaqList />
        </Container>
      </section>

      <ClosingBand title="Still have a question?" />
    </>
  );
}
