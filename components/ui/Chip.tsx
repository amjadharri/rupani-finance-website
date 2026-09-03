import { cn } from "@/lib/utils";

/** From Chip / Honesty in 04 / Components. */
export function Chip({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-card border border-brand-rule",
        "bg-brand-white px-5 py-3 text-body-m text-brand-ink",
        className,
      )}
      {...props}
    />
  );
}
