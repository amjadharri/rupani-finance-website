import { ButtonLink, Container } from "@/components/ui";
import { applyFormUrl } from "@/lib/config/site";

export interface CtaBandProps {
  title: string;
  body: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

/**
 * 10 / You Ring We Spring. Appears on the homepage and About Us with the same
 * shape and different copy, so it is shared rather than duplicated per route.
 */
export function CtaBand({
  title,
  body,
  primaryLabel = "Let's Get You Funded",
  primaryHref = applyFormUrl,
  secondaryLabel = "Contact Us",
  secondaryHref = "/contact",
}: CtaBandProps) {
  return (
    <section data-reveal className="bg-brand-charcoal py-16 text-brand-on-dark md:py-32">
      <Container className="flex flex-col items-center gap-7 text-center">
        {/* R/Display/XL — the band headline is the page-title size on the boards. */}
        <h2 className="max-w-[1000px] font-display text-display-xl font-light tracking-[-0.01em]">
          {title}
        </h2>
        <p className="max-w-[640px] text-body-l text-brand-on-dark-2">{body}</p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <ButtonLink href={primaryHref} variant="navy" withArrow>
            {primaryLabel}
          </ButtonLink>
          <ButtonLink href={secondaryHref} variant="link">
            {secondaryLabel}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
