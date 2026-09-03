import { cn } from "@/lib/utils";

/** R/Eyebrow — Public Sans Medium 16/130%, tracked. */
export function Eyebrow({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-eyebrow font-medium uppercase tracking-[0.12em]", className)}
      {...props}
    />
  );
}
