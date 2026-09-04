import Link from "next/link";
import { Container } from "@/components/ui";
import { company } from "@/lib/config/site";

/** 00 / Utility bar — 46px tall, grey-band fill, hairline underneath. */
export function UtilityBar() {
  return (
    <div data-utility-bar className="border-b border-brand-rule bg-brand-grey-band">
      <Container className="flex h-[45px] items-center justify-between">
        <a href={company.phoneHref} className="text-body-s text-brand-ink hover:underline">
          {company.phone}
        </a>

        <Link href="/login" className="flex items-center gap-2 text-body-s text-brand-ink">
          <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" />
          </svg>
          <span className="underline underline-offset-4">Agent Login</span>
        </Link>
      </Container>
    </div>
  );
}
