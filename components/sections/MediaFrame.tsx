import { cn } from "@/lib/utils";

/**
 * Stand-in for the photography on the boards.
 *
 * PLACEHOLDER: the design uses greyscale editorial photography that is not in
 * the exported file. This holds the exact aspect ratio and radius so swapping in
 * a next/image with the same ratio changes no layout.
 */
export function MediaFrame({
  ratio = "4 / 3",
  label,
  className,
}: {
  ratio?: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      style={{ aspectRatio: ratio }}
      className={cn(
        // Rule 04: bound to tokens so the block follows a mode swap like everything else.
        "w-full overflow-hidden rounded-card bg-brand-rule",
        className,
      )}
    />
  );
}
