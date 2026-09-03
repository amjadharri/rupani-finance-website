import { cn } from "@/lib/utils";

/** Placeholder block sized like the content it replaces, so swapping in real data does not shift layout. */
export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden
      className={cn("animate-pulse rounded-md bg-slate-200", className)}
      {...props}
    />
  );
}
