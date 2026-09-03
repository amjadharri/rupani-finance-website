import { cn } from "@/lib/utils";
import { Container } from "./Container";

type Tone = "page" | "red" | "deep-red" | "navy" | "band";

const toneClasses: Record<Tone, string> = {
  page: "bg-brand-blue-05 text-brand-ink",
  red: "bg-brand-charcoal text-brand-on-dark",
  "deep-red": "bg-brand-charcoal-2 text-brand-on-dark",
  navy: "bg-brand-red text-brand-on-dark",
  band: "bg-brand-grey-band text-brand-ink",
};

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: Tone;
  /** Suppress the default vertical rhythm when a section stacks flush against its neighbour. */
  flush?: "top" | "bottom" | "both";
}

/** Desktop sections run 128px top/bottom; mobile 64px. */
export function Section({
  className,
  tone = "page",
  flush,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        toneClasses[tone],
        flush !== "top" && flush !== "both" && "pt-16 md:pt-32",
        flush !== "bottom" && flush !== "both" && "pb-16 md:pb-32",
        className,
      )}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
}
