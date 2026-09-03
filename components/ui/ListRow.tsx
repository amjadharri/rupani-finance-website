import { cn } from "@/lib/utils";

export interface ListRowProps {
  index?: string;
  title: string;
  body: string;
  /** The "We meet or beat" row in About Us is called out with a tinted panel. */
  highlighted?: boolean;
  tone?: "on-page" | "on-red";
  className?: string;
}

/** From List row / coverage in 04 / Components. */
export function ListRow({
  index,
  title,
  body,
  highlighted = false,
  tone = "on-page",
  className,
}: ListRowProps) {
  const onRed = tone === "on-red";

  return (
    <div
      className={cn(
        "grid gap-2 py-8 md:grid-cols-[4rem_1fr_1fr] md:gap-8",
        highlighted
          ? "rounded-card bg-brand-red-tint px-6 text-brand-ink md:px-8"
          : "border-t",
        !highlighted && (onRed ? "border-brand-on-dark/25" : "border-brand-rule"),
        className,
      )}
    >
      {index ? (
        <p
          className={cn(
            "text-display-s font-display font-light",
            highlighted ? "text-brand-ink-2" : onRed ? "text-brand-on-dark-2" : "text-brand-ink-2",
          )}
        >
          {index}
        </p>
      ) : null}

      <h3 className="text-display-s font-display font-light">{title}</h3>

      <p
        className={cn(
          "text-body-m",
          highlighted ? "text-brand-ink-2" : onRed ? "text-brand-on-dark-2" : "text-brand-ink-2",
        )}
      >
        {body}
      </p>
    </div>
  );
}
