"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container, ButtonLink } from "@/components/ui";
import { primaryNav, applyFormUrl } from "@/lib/config/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

type HeaderTone = "light" | "dark";

/**
 * From the Navigation board. Two tones: light (on page or grey-band) and dark
 * (on the red hero or navy hero). Dropdowns open on hover and on focus.
 */
export function SiteHeader({ tone = "light" }: { tone?: HeaderTone }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDark = tone === "dark";

  // Escape closes an open menu — the trigger itself always opens rather than
  // toggling, so that hovering and then clicking does not close it again.
  useEffect(() => {
    if (!openMenu) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openMenu]);

  const linkColour = isDark ? "text-brand-on-dark" : "text-brand-ink";
  const mutedColour = isDark ? "text-brand-on-dark-2" : "text-brand-ink-2";

  return (
    <header className={cn(isDark ? "border-b border-brand-on-dark/15" : "border-b border-brand-rule")}>
      <Container className="flex h-[104px] items-center justify-between gap-6">
        <Link href="/" aria-label="U.S. Insurance Funding — home">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {primaryNav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.children ? item.label : null)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              {item.children ? (
                <>
                  <button
                    type="button"
                    aria-expanded={openMenu === item.label}
                    aria-haspopup="true"
                    onFocus={() => setOpenMenu(item.label)}
                    onClick={() => setOpenMenu(item.label)}
                    className={cn("flex items-center gap-1.5 text-nav font-medium", mutedColour)}
                  >
                    {item.label}
                    <svg aria-hidden viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="m4 6 4 4 4-4" />
                    </svg>
                  </button>

                  {openMenu === item.label ? (
                    <div
                      className={cn(
                        "absolute left-0 top-full z-20 min-w-[228px] rounded-card",
                        "border border-brand-rule bg-brand-white py-3 shadow-card",
                      )}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpenMenu(null)}
                          className="block px-6 py-3 text-nav text-brand-ink hover:bg-brand-blue-05"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </>
              ) : (
                <Link href={item.href} className={cn("text-nav font-medium", linkColour)}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <Link
            href={applyFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("hidden text-nav font-medium lg:block", linkColour)}
          >
            Become an Agent
          </Link>
          <ButtonLink href={applyFormUrl} variant={isDark ? "on-dark" : "primary"}>
            Let&apos;s Get You Funded
          </ButtonLink>
        </div>

        <button
          data-tap
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn("lg:hidden", linkColour)}
        >
          <svg aria-hidden viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen ? <path d="m5 5 14 14M19 5 5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>

      {mobileOpen ? (
        <div id="mobile-nav" className="border-t border-brand-rule bg-brand-white lg:hidden">
          <Container className="flex flex-col py-4">
            {primaryNav.map((item) => (
              <div key={item.label} className="border-b border-brand-rule last:border-0">
                <Link href={item.href} data-tap className="flex items-center py-3 text-nav text-brand-ink">
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="pb-3 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        data-tap
                        className="flex items-center py-2 text-body-s text-brand-ink-2"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}

            <ButtonLink href={applyFormUrl} className="mt-4">
              Let&apos;s Get You Funded
            </ButtonLink>
            <Link
              href={applyFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-tap
              className="flex items-center py-3 text-nav text-brand-ink"
            >
              Become an Agent
            </Link>
            <Link href="/login" data-tap className="flex items-center py-3 text-nav text-brand-ink">
              Agent Login
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
