import { Eyebrow, Section } from "@/components/ui";

/** 02 / Statement — E/Statement type on the page fill. */
export function Statement() {
  return (
    <Section flush="bottom" className="pb-12 md:pb-24">
      <Eyebrow className="text-brand-blue">What we do</Eyebrow>
      <p className="mt-10 max-w-[1000px] font-display text-display-l font-light tracking-[-0.01em]">
        USIF provides a unique opportunity to convert your annual insurance premium into affordable
        monthly payments.
      </p>
    </Section>
  );
}
