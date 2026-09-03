import { Eyebrow, Heading, Section } from "@/components/ui";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Submit the application",
    body: "Submit your application through our online quotation system, and we'll take it from there.",
  },
  {
    number: "02",
    title: "We verify with you",
    body: "We verify policy details directly with you, the agent, so your client never has to jump through hoops of their own.",
  },
  {
    number: "03",
    title: "Signed, funded, protected",
    body: "Just a signed agreement, a funded contract, and a policy that's protected.",
    accent: true,
  },
];

/** How It Works 02 / Apply. Approve. Keep moving. */
export function Process() {
  return (
    <Section tone="white">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow className="text-brand-red">The process</Eyebrow>
          <Heading className="mt-6 max-w-[460px]">Apply today. Get approved. Keep moving.</Heading>
        </div>

        <p className="text-body-m text-brand-ink-2 lg:self-center">
          When your client needs to bind a policy, the last thing your agency needs is a financing
          bottleneck. No separate approval gauntlet. No unnecessary delay.
        </p>
      </div>

      <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        {steps.map((step) => (
          <li
            key={step.number}
            className={cn("border-t-2 pt-8", step.accent ? "border-brand-red" : "border-brand-rule")}
          >
            <p className="font-display text-number font-light text-brand-ink">{step.number}</p>
            <h3 className="mt-6 text-title-m font-semibold">{step.title}</h3>
            <p className="mt-4 text-body-m text-brand-ink-2">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
