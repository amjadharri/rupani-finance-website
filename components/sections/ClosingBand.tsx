import { ButtonLink, Container } from "@/components/ui";
import { cn } from "@/lib/utils";

export interface ClosingBandProps {
  title?: React.ReactNode;
  body?: React.ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  /** Only "Partner with USIF Today" carries the arrow on the boards. */
  primaryArrow?: boolean;
  secondaryLabel?: string;
  secondaryHref?: string;
  /**
   * The band is drawn on brand/charcoal on most boards and on plain white at
   * the foot of Why Choose USIF.
   */
  tone?: "red" | "white";
  /**
   * Who We Serve sets its paragraph and its button side by side instead of
   * stacking them under a headline.
   */
  layout?: "stacked" | "split";
}

/**
 * The closing band the interior boards end on: a left-aligned statement with an
 * optional navy button and text link.
 *
 * Distinct from CtaBand, which is the homepage and About Us band — that one is
 * centred, uses the page-title size and always has two actions. This one is
 * left-aligned and everything but the surface is optional: FAQs and Contact Us
 * end on the statement alone, Who We Serve has no headline at all.
 */
export function ClosingBand({
  title,
  body,
  primaryLabel,
  primaryHref,
  primaryArrow = false,
  secondaryLabel,
  secondaryHref,
  tone = "red",
  layout = "stacked",
}: ClosingBandProps) {
  const onRed = tone === "red";
  const split = layout === "split";

  const copy = (
    <>
      {title ? (
        <h2 className="max-w-[960px] font-display text-display-l font-light tracking-[-0.01em]">
          {title}
        </h2>
      ) : null}

      {body ? (
        <div
          className={cn(
            "max-w-[720px] text-body-m",
            title ? "mt-6" : undefined,
            onRed ? "text-brand-on-dark-2" : "text-brand-ink-2",
          )}
        >
          {body}
        </div>
      ) : null}
    </>
  );

  const actions =
    primaryLabel && primaryHref ? (
      <div className={cn("flex flex-wrap items-center gap-8", !split && "mt-10")}>
        <ButtonLink href={primaryHref} variant="navy" withArrow={primaryArrow}>
          {primaryLabel}
        </ButtonLink>

        {secondaryLabel && secondaryHref ? (
          <ButtonLink href={secondaryHref} variant="link">
            {secondaryLabel}
          </ButtonLink>
        ) : null}
      </div>
    ) : null;

  return (
    <section data-reveal
      className={cn(
        "py-16 md:py-32",
        onRed ? "bg-brand-charcoal text-brand-on-dark" : "bg-surface text-brand-ink",
      )}
    >
      <Container>
        {split ? (
          <div data-reveal-stagger className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>{copy}</div>
            {actions ? <div className="lg:pt-1">{actions}</div> : null}
          </div>
        ) : (
          <>
            {copy}
            {actions}
          </>
        )}
      </Container>
    </section>
  );
}
