import Link from "next/link";
import { Container } from "@/components/ui";
import { company, footerNav } from "@/lib/config/site";
import { Logo } from "./Logo";

/** 08 / Footer — charcoal-2 fill, four link columns, hairline above the legal row. */
export function SiteFooter() {
  return (
    <footer className="bg-brand-charcoal-2 text-brand-on-dark">
      <Container className="pb-9 pt-16 md:pt-[72px]">
        {/* 40 between the stacked blocks on the 390 board, not 56. */}
        <div data-reveal-stagger className="grid gap-10 md:gap-14 lg:grid-cols-[minmax(0,1fr)_repeat(4,minmax(0,auto))] lg:gap-16">
          <div className="max-w-[340px]">
            <Logo />
            <p className="mt-6 text-body-m text-brand-on-dark-2">{company.tagline}</p>
            <address className="mt-6 not-italic text-body-m text-brand-on-dark-2">
              {company.address.street}
              <br />
              {company.address.city}
            </address>
            <a href={company.phoneHref} className="mt-6 inline-block text-body-m text-brand-on-dark-2 hover:underline">
              {company.phone}
            </a>
          </div>

          {footerNav.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h2 className="text-eyebrow font-medium uppercase tracking-[0.12em] text-brand-on-dark-2">
                {column.heading}
              </h2>
              {/* The board sets a 46 pitch between links (26 tall, 20 apart).
                  Rule 06 already floors each row at 44 on mobile, so the rows
                  butt up rather than adding a gap on top of the tap target —
                  same rhythm as the board, without shrinking the target. */}
              <ul className="mt-5 flex flex-col md:mt-6 md:gap-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      {...(/^https?:\/\//.test(link.href)
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      data-tap
                      className="inline-flex items-center text-body-s text-brand-on-dark hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 border-t border-brand-on-dark/20 pt-8 md:mt-14">
          <div className="flex flex-col gap-2 text-body-s text-brand-on-dark-2 md:flex-row md:items-center md:justify-between">
            <p>&copy; {new Date().getFullYear()} US Insurance Fundings. All Rights Reserved.</p>
            <p>
              Developed by{" "}
              <a
                href={company.developedByHref}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-brand-on-dark"
              >
                {company.developedBy}
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
