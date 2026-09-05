import { cn } from "@/lib/utils";

export interface StatTileProps {
  /** R/Number — Archivo Light 44/100%. */
  value: string;
  label: string;
  tone?: "plain" | "card" | "navy";
  className?: string;
}

export function StatTile({ value, label, tone = "plain", className }: StatTileProps) {
  const isNavy = tone === "navy";

  return (
    <div
      className={cn(
        tone !== "plain" && "rounded-card p-6 md:p-8",
        // Navy is the hover state on the boards, not a permanent fill.
        tone === "card" &&
          "bg-brand-white ring-1 ring-inset ring-brand-rule transition-colors " +
            "hover:bg-brand-red hover:ring-brand-red [&:hover_p]:text-brand-on-dark",
        isNavy && "bg-brand-red text-brand-on-dark",
        className,
      )}
    >
      <p
        className={cn(
          "text-number font-display font-light",
          isNavy ? "text-brand-on-dark" : "text-brand-blue-deep",
        )}
      >
        {value}
      </p>
      <p
        className={cn(
          "mt-2.5 text-[1rem]/[1.375rem] md:mt-2 md:text-body-m",
          isNavy ? "text-brand-on-dark" : "text-brand-ink-2",
        )}
      >
        {label}
      </p>
    </div>
  );
}
