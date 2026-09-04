import { Breadcrumb, Container, Eyebrow, Heading, type Crumb } from "@/components/ui";
import { SiteHeader } from "@/components/layout";
import { cn } from "@/lib/utils";

export interface PageHeroProps {
  trail: Crumb[];
  eyebrow: string;
  title: React.ReactNode;
  /** Body copy under the title. */
  lede?: React.ReactNode;
  /**
   * Copy set to the right of the title instead of under it — What We Finance
   * and Blogs both split the hero into two columns.
   */
  aside?: React.ReactNode;
  /** A rule above the aside, as drawn on What We Finance and Blogs. */
  asideRule?: boolean;
  /**
   * Most interior heroes set the title at R/Display/XL. Who We Serve and Blogs
   * step down to Display/L — measured off the boards, where their capitals run
   * 28px against the 40px of the others.
   */
  titleSize?: "xl" | "l";
  children?: React.ReactNode;
  className?: string;
}

/**
 * 01 / Hero as every interior board draws it: the blush fill (brand/blue-05),
 * light navigation sitting on that same fill, breadcrumb, red eyebrow and the
 * page title.
 *
 * The fill is the one thing to leave alone here. The boards alternate section
 * surfaces rather than sharing a single page colour, and each interior hero is
 * measured at #fdedee — not the warmer #FCF3F3 that About Us uses.
 */
export function PageHero({
  trail,
  eyebrow,
  title,
  lede,
  aside,
  asideRule = false,
  titleSize = "xl",
  children,
  className,
}: PageHeroProps) {
  return (
    <section data-hero="blush" className={cn("bg-brand-blue-05", className)}>
      <SiteHeader tone="light" />

      <Container className="pb-16 pt-10 md:pb-32">
        <Breadcrumb trail={trail} />

        <div className={cn("mt-10", aside ? "grid gap-10 lg:grid-cols-2 lg:gap-16" : undefined)}>
          <div>
            <Eyebrow className="text-brand-blue">{eyebrow}</Eyebrow>
            <Heading level={titleSize === "l" ? 2 : 1} as="h1" className="mt-6">
              {title}
            </Heading>
            {lede ? (
              <div className="mt-8 max-w-[720px] text-body-m text-brand-ink-2">{lede}</div>
            ) : null}
          </div>

          {aside ? (
            <div
              className={cn(
                "text-body-m text-brand-ink-2 lg:pt-2",
                asideRule && "border-t border-brand-rule pt-8 lg:pt-8",
              )}
            >
              {aside}
            </div>
          ) : null}
        </div>

        {children}
      </Container>
    </section>
  );
}
