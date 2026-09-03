import { cn } from "@/lib/utils";

/**
 * Circular logo lockup — the one place radius 100 is allowed (Rule 03).
 *
 * PLACEHOLDER: the real USIF mark is not in the exported design. Drop the
 * client asset in at the same 56px circle and nothing else needs to move.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      data-logo
      className={cn(
        "grid h-14 w-14 shrink-0 place-items-center rounded-logo",
        "bg-brand-white text-brand-blue ring-1 ring-brand-rule",
        className,
      )}
    >
      <span className="font-display text-[13px] font-semibold tracking-tight">USIF</span>
      <span className="sr-only">U.S. Insurance Funding</span>
    </span>
  );
}
