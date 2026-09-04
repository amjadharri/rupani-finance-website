import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink, Eyebrow, Heading, Section } from "@/components/ui";
import { ClosingBand, PageHero } from "@/components/sections";
import heroPhoto from "@/assets/images/what-we-finance/hero.jpg";
import { CoverageExplorer } from "./_components";

export const metadata: Metadata = {
  title: "What We Finance",
  description:
    "U.S. Insurance Funding finances premiums across almost every line of business — commercial " +
    "property and casualty, homeowners, professional and cyber, energy and marine, catastrophe " +
    "perils and Excess & Surplus lines.",
};

export default function WhatWeFinancePage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Home", href: "/" }, { label: "What We Finance" }]}
        eyebrow="Coverage we finance"
        title={
          <>
            Lines of Business
            <br />
            We Finance
          </>
        }
        aside={
          <p>
            U.S. Insurance Funding finances premiums across almost every line of business. We know
            every agency and every account is different. Some premium finance companies shy away
            from small premiums we welcome accounts of any size or complexity.
          </p>
        }
        asideRule
      />

      {/* The photograph runs the full width of the board between the hero and
          the portfolio section, so it sits outside the content column. */}
      <Image
        src={heroPhoto}
        alt="Two brokers shaking hands across a table in an office lobby"
        priority
        sizes="100vw"
        placeholder="blur"
        className="h-auto w-full"
      />

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow className="text-brand-blue">Full product &amp; coverage portfolio overview</Eyebrow>
            <Heading level={2} className="mt-6">
              Commercial Insurance
              <br />
              Lines of Business
            </Heading>
          </div>

          <div>
            <p className="max-w-[560px] text-body-m text-brand-ink-2">
              We finance all kinds of Commercial (Excess &amp; Surplus Lines) and Homeowners
              Insurance, and our finance charges are competitive enough that agents and insureds
              notice the difference.
            </p>

            <ButtonLink href="/apply" className="mt-8">
              Let&apos;s Get You Funded
            </ButtonLink>
          </div>
        </div>

        <Eyebrow className="mt-24 text-brand-blue">Coverage business</Eyebrow>
        <CoverageExplorer />
      </Section>

      <ClosingBand
        title="Don't see your category?"
        body="Tell us what you need. If it's not listed here, we'll work to find the right coverage for you."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}
