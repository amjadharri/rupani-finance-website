import type { Metadata } from "next";
import { ButtonLink, Container, Eyebrow, Heading } from "@/components/ui";
import { ClosingBand, PageHero } from "@/components/sections";
import { clientQuotes, howWeWork } from "@/lib/content/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Our reputation is built on relationships. Here is what USIF's valued partners and clients " +
    "say about working with us.",
};

function Stars() {
  return (
    <p aria-label="Five out of five stars" className="flex gap-1 text-brand-blue">
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} aria-hidden className="text-xl leading-none">
          ★
        </span>
      ))}
    </p>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Home", href: "/" }, { label: "Testimonials" }]}
        eyebrow="Testimonials"
        title="Our reputation is built on relationships."
        lede={
          <p className="max-w-[780px]">
            At U.S. Insurance Funding, our reputation is built on the relationships we&apos;ve
            cultivated over more than 25 years. We take pride in the positive feedback we receive
            from our valued partners and clients. Here&apos;s what they have to say about working
            with us.
          </p>
        }
      />

      <section className="bg-surface py-16 md:py-32">
        <Container>
          <Eyebrow className="text-brand-blue">Client voices</Eyebrow>
          <Heading level={2} className="mt-6">
            What Our Clients Say
          </Heading>

          <div className="mt-12 flex flex-col gap-8">
            {clientQuotes.map((client) => (
              <figure key={client.name} className="rounded-card bg-brand-blue-05 p-10 md:p-14">
                <blockquote className="max-w-[1000px] font-display text-display-m font-light">
                  {client.quote}
                </blockquote>
                <figcaption className="mt-8">
                  <span className="text-body-s font-semibold text-brand-ink">
                    &mdash; {client.name}
                  </span>
                  <span className="mt-1 block text-body-s text-brand-ink-2">{client.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* USIF describing itself. The board is explicit that these are not
          client quotations, so they are cards and not blockquotes. */}
      <section className="bg-brand-blue-05 py-16 md:py-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow className="text-brand-blue">In USIF&rsquo;s own words</Eyebrow>
              <Heading level={2} className="mt-6">
                How we work
              </Heading>
            </div>

            <p className="max-w-[620px] text-body-m text-brand-ink-2 lg:pt-2">
              These statements are USIF&rsquo;s own description of how the company works not client
              quotations.
            </p>
          </div>

          <ul className="mt-12 grid gap-8 md:grid-cols-2">
            {howWeWork.map((statement) => (
              <li
                key={statement.id}
                className="rounded-card border border-brand-rule bg-brand-white p-8"
              >
                <span aria-hidden className="block h-0.5 w-8 bg-brand-blue" />
                <p className="mt-6 text-body-m text-brand-ink-2">{statement.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ClosingBand
        title="Ready to experience the USIF difference?"
        primaryLabel="Partner with USIF Today"
        primaryHref="/apply"
        primaryArrow
        secondaryLabel="Contact"
        secondaryHref="/contact"
      />

      <section className="bg-surface py-16 md:py-32">
        <Container>
          <Eyebrow className="text-brand-blue">Share your experience</Eyebrow>
          <Heading level={2} className="mt-6">
            Tell other agents how we did
          </Heading>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-card border border-brand-rule bg-brand-white p-8 md:p-10">
              <Stars />
              <h3 className="mt-6 text-title-m font-semibold">Review us on Google</h3>
              <p className="mt-4 text-body-m text-brand-ink-2">
                Have you had a positive experience with U.S. Insurance Funding? We&apos;d love to
                hear from you. Share your story and help other agents and clients discover the
                benefits of working with us.
              </p>

              {/*
                PLACEHOLDER: the USIF Google Business Profile review URL. The
                board specifies the destination but not the address.
              */}
              <ButtonLink
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8"
                withArrow
              >
                Write a Google review
              </ButtonLink>

              <p className="mt-6 text-body-s text-brand-ink-2">
                Opens the USIF Google Business Profile in a new tab. The reviewer signs in with their
                own Google account and their review publishes publicly — USIF cannot edit or filter
                it.
              </p>
            </div>

            <div className="rounded-card bg-brand-blue-05 p-8 md:p-10">
              <h3 className="text-title-m font-semibold">Submit Your Testimonial</h3>
              <p className="mt-4 text-body-m text-brand-ink-2">
                Prefer to send it to us directly? Write to the team and we&apos;ll ask before
                publishing anything on this page.
              </p>

              {/*
                PLACEHOLDER, and drawn as one on the board: a dashed outline
                labelled "[Submit Your Testimonial]" over the note "Form fields
                to be defined with the USIF team." Kept as a placeholder rather
                than invented, so the gap stays visible.
              */}
              <p className="mt-8 rounded-card border border-dashed border-brand-blue px-6 py-4 text-body-m font-semibold text-brand-blue">
                [Submit Your Testimonial]
              </p>

              <p className="mt-4 text-body-s text-brand-ink-2">
                Form fields to be defined with the USIF team.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
