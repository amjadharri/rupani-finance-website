import { ButtonLink, Eyebrow, Heading, Section } from "@/components/ui";
import { Media } from "@/components/sections";
import welcomeGm from "@/assets/images/about/welcome-gm.jpg";

/** About Us 02 / A welcome from the General Manager. */
export function WelcomeFromGm() {
  return (
    <Section flush="top">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-[72px]">
        <Media
          src={welcomeGm}
          alt="Atif Javaid, General Manager of U.S. Insurance Funding"
          sizes="(max-width: 1024px) 100vw, 600px"
        />

        <div>
          <Eyebrow className="text-brand-blue">A welcome</Eyebrow>
          <Heading className="mt-6">Your Premium Finance Partner</Heading>

          <p className="mt-8 text-body-m text-brand-ink-2">
            Thank you for visiting our website. My name is Atif Javaid, and as the General Manager of
            U.S. Insurance Funding, I want to personally welcome you.
          </p>
          <p className="mt-6 text-body-m text-brand-ink-2">
            Since 1999, we&apos;ve served general agents and producers as a single source for premium
            financing helping agents offer their customers an easy way to pay for insurance through
            affordable monthly payments instead of one lump sum.
          </p>
          <p className="mt-6 text-body-m text-brand-ink-2">
            Our specialty is commercial premiums, and we finance all kinds of coverage: Commercial
            (Excess &amp; Surplus Lines), Homeowners, and personal lines policies. We work with everyone
            from large companies financing a fleet of vehicles to a first-time policyholder no account
            is too small.
          </p>

          <div className="mt-10 border-t border-brand-rule pt-8">
            <p className="text-title-m font-semibold">Atif Javaid</p>
            <p className="mt-1 text-body-m text-brand-ink-2">
              General Manager, U.S. Insurance Funding
            </p>
          </div>

          <ButtonLink href="/become-an-agent" className="mt-8" withArrow>
            Become An Agent
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
