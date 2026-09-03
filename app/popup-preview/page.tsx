import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout";
import { Eyebrow, Heading, Section } from "@/components/ui";
import { PopupGallery } from "./_components/PopupGallery";

/**
 * A harness for looking at the shade pop-up against real page chrome. It is not
 * part of the site's information architecture — no nav links here, it is out of
 * the sitemap, and it is safe to delete once the pop-up is placed for real.
 */
export const metadata: Metadata = {
  title: "Pop-up preview",
  robots: { index: false, follow: false },
};

export default function PopupPreviewPage() {
  return (
    <>
      <SiteHeader />

      <Section tone="tint">
        <Eyebrow className="text-brand-blue">Preview</Eyebrow>
        <Heading level={1} className="mt-6 max-w-[720px]">
          The shade pop-up
        </Heading>
        <p className="mt-6 max-w-[560px] text-body-l text-brand-ink-2">
          One <code>&lt;dialog&gt;</code>-backed frame in three widths. The shade is brand/ink at
          72%, the card is the elevated Card at Rule 03&apos;s 8px radius, and Escape, focus
          trapping and the click-outside all come from the platform.
        </p>

        <div className="mt-12">
          <PopupGallery />
        </div>
      </Section>
    </>
  );
}
