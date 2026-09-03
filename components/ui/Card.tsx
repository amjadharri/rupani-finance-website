import { cn } from "@/lib/utils";

type CardTone = "surface" | "navy" | "on-red" | "elevated";

const toneClasses: Record<CardTone, string> = {
  surface: "bg-brand-white border border-brand-rule text-brand-ink",
  navy: "bg-brand-red border border-brand-red text-brand-on-dark",
  "on-red": "bg-transparent border border-brand-on-dark/25 text-brand-on-dark",
  elevated: "bg-brand-white border border-brand-rule text-brand-ink shadow-card",
};

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: CardTone;
}

export function Card({ className, tone = "surface", ...props }: CardProps) {
  return (
    <div
      className={cn("rounded-card p-6 md:p-8", toneClasses[tone], className)}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-display-s font-display font-light", className)} {...props} />;
}

export function CardBody({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-body-m", className)} {...props} />;
}
