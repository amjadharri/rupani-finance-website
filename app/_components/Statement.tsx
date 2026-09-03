import { Eyebrow, Section } from "@/components/ui";

/** 02 / Statement — white surface, navy eyebrow, E/Statement type. */
export function Statement() {
  return (
    <Section tone="white">
      <Eyebrow className="text-brand-red">What we do</Eyebrow>
      <p className="mt-10 max-w-[1000px] font-display text-display-l font-light tracking-[-0.01em]">
        USIF provides a unique opportunity to convert your annual insurance premium into affordable
        monthly payments.
      </p>
    </Section>
  );
}
