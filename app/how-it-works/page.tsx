import type { Metadata } from "next";
import { CtaBand } from "@/components/sections";
import { Flexibility, HowItWorksHero, Process, Promise, Rates } from "./_components";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Apply today, get approved, keep moving. Straightforward, competitive premium finance rates " +
    "with payment structures shaped around your client's cash flow.",
};

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorksHero />
      <Process />
      <Rates />
      <Flexibility />
      <Promise />
      <CtaBand
        title="Ready to give your clients the flexibility they deserve and your agency the partner it's earned?"
        body="Get started with USIF today and see the difference a dedicated premium finance partner makes."
        primaryLabel="Get Started with USIF Today"
      />
    </>
  );
}
