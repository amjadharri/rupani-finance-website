import Link from "next/link";
import { cn } from "@/lib/utils";

export interface Crumb {
  label: string;
  href?: string;
}

/**
 * The trail every interior board carries directly under the navigation. The
 * last crumb is the current page and is never a link.
 */
export function Breadcrumb({ trail, className }: { trail: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-body-s text-brand-ink-2", className)}>
      <ol className="flex flex-wrap items-center">
        {trail.map((crumb, index) => {
          const isLast = index === trail.length - 1;

          return (
            <li key={crumb.label} className="flex items-center">
              {crumb.href && !isLast ? (
                <Link href={crumb.href} className="hover:underline">
                  {crumb.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className="text-brand-ink">
                  {crumb.label}
                </span>
              )}

              {isLast ? null : (
                <span className="px-2" aria-hidden>
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
