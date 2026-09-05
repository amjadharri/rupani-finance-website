import { cn } from "@/lib/utils";
import { Container } from "./Container";

/**
 * Section surfaces, taken from the fills on the boards. They alternate rather
 * than sharing one page colour, so every section paints its own background.
 */
type Tone = "white" | "tint" | "blush" | "red" | "deep-red" | "navy" | "band";

const toneClasses: Record<Tone, string> = {
  white: "bg-surface text-brand-ink",
  tint: "bg-surface-tint text-brand-ink",
  blush: "bg-brand-blue-05 text-brand-ink",
  red: "bg-brand-charcoal text-brand-on-dark",
  "deep-red": "bg-brand-charcoal-2 text-brand-on-dark",
  navy: "bg-brand-red text-brand-on-dark",
  band: "bg-brand-grey-band text-brand-ink",
};

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: Tone;
}

/**
 * Desktop sections run 128px top/bottom; mobile 64px (03 / Space).
 *
 * Every section rises into view on scroll — see the motion block in
 * globals.css. The hero is deliberately not a Section, so the first thing a
 * visitor sees is never waiting on an observer.
 */
export function Section({ className, tone = "white", children, ...props }: SectionProps) {
  return (
    <section data-reveal className={cn(toneClasses[tone], "py-16 md:py-32", className)} {...props}>
      <Container>{children}</Container>
    </section>
  );
}
