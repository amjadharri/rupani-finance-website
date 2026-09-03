import { cn } from "@/lib/utils";

/** From Note in 04 / Components. */
export function NoteStrip({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-card border border-brand-red bg-brand-white px-6 py-5 text-body-m",
        className,
      )}
      {...props}
    />
  );
}
