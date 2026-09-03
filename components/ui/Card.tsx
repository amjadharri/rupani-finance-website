import { cn } from "@/lib/utils";

type CardTone = "surface" | "on-red" | "navy" | "elevated";

const toneClasses: Record<CardTone, string> = {
  surface: "bg-brand-white border border-brand-rule text-brand-ink",
  "on-red": "bg-transparent border border-brand-on-dark/30 text-brand-on-dark",
  // A few cards are navy by design rather than on hover — the rate promise and
  // the standard-downpayment card.
  navy: "bg-brand-red border border-brand-red text-brand-on-dark",
  elevated: "bg-brand-white border border-brand-rule text-brand-ink shadow-card",
};

/** Navy is the hover state on the boards, not a fill some cards happen to have. */
const hoverClasses: Record<CardTone, string> = {
  surface:
    "transition-colors hover:border-brand-red hover:bg-brand-red hover:text-brand-on-dark " +
    "[&:hover_*]:text-brand-on-dark",
  "on-red":
    "transition-colors hover:border-brand-red hover:bg-brand-red " +
    "[&:hover_*]:text-brand-on-dark",
  navy: "",
  elevated: "",
};

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: CardTone;
  /** Opt out of the navy hover for cards that are not interactive. */
  interactive?: boolean;
}

export function Card({ className, tone = "surface", interactive = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card p-6 md:p-8",
        toneClasses[tone],
        interactive && hoverClasses[tone],
        className,
      )}
      {...props}
    />
  );
}

/** R/Display/M — Archivo Light 30/120%, the system's "card titles" style. */
export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("font-display text-display-m font-light", className)} {...props} />
  );
}

export function CardBody({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-body-m", className)} {...props} />;
}
