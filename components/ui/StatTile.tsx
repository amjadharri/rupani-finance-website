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
        tone !== "plain" && "rounded-card border p-6 md:p-8",
        // Navy is the hover state on the boards, not a permanent fill.
        tone === "card" &&
          "border-brand-rule bg-brand-white transition-colors hover:border-brand-red " +
            "hover:bg-brand-red [&:hover_p]:text-brand-on-dark",
        isNavy && "border-brand-red bg-brand-red text-brand-on-dark",
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
      <p className={cn("mt-2 text-body-m", isNavy ? "text-brand-on-dark" : "text-brand-ink-2")}>
        {label}
      </p>
    </div>
  );
}
