import { Accordion, Eyebrow, Heading, Section, type AccordionItem } from "@/components/ui";

const advantages: AccordionItem[] = [
  {
    title: "Answers, immediately",
    body: "Every staff member at US insurance funding is a dedicated professional, who is always prepared to answer your question immediately and accurately.",
  },
  {
    title: "Flexible, innovative plans",
    body: "Payment plans are structured around your client's cash flow monthly, quarterly, annually, or seasonally.",
  },
  {
    title: "We work as a consultant",
    body: "Our team takes the time to understand the coverage you finance, the premium size, and the right technology fit for your business.",
  },
  {
    title: "No worry of cancellation",
    body: "Contracts are processed and funded quickly once signed, so coverage stays in force.",
  },
  {
    title: "Quick service",
    body: "Our efficiency lies in quick service. Once a contract is signed, it is processed and funded.",
  },
];

/** 09 / Advantages */
export function Advantages() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-[72px]">
        <div>
          <Eyebrow className="text-brand-blue">Advantages by using USIF services</Eyebrow>
          <Heading className="mt-6 max-w-[380px]">Uncompromising personalized service</Heading>
          <p className="mt-8 max-w-[420px] text-body-m text-brand-ink-2">
            Our approach makes difference in projecting your business image as well as increasing
            profit with mutual business relationship.
          </p>
        </div>

        <Accordion items={advantages} />
      </div>
    </Section>
  );
}
