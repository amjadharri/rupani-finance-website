import { Card, Eyebrow, Heading, Section } from "@/components/ui";

const promises = [
  "Budget-friendly financing rates, with no hidden fees",
  "We'll meet or beat the most competitive finance charge you've been quoted",
  "Fast, friction-free processing contracts funded the moment they're signed",
  "Every line, every size Commercial, Homeowners, Excess & Surplus, no account too small",
  "Flexible payment schedules monthly, quarterly, annual, or seasonal",
  "EFT / ACH, Credit Card & E-Payment accepted with online notices, anytime",
];

function CheckMark() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="mt-0.5 h-6 w-6 shrink-0 text-brand-red"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m4 12.5 5.5 5.5L20 6.5" />
    </svg>
  );
}

/** How It Works 05 / The USIF promise to agents */
export function Promise() {
  return (
    <Section flush="top">
      <Eyebrow className="text-brand-blue">The promise</Eyebrow>
      <Heading className="mt-8">The USIF promise to agents</Heading>

      <ul className="mt-12 grid gap-6 md:grid-cols-2">
        {promises.map((promise) => (
          <li key={promise}>
            <Card className="flex h-full items-start gap-4 p-6 md:p-8">
              <CheckMark />
              <span className="text-body-m">{promise}</span>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
