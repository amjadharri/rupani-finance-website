import { cn } from "@/lib/utils";

/**
 * 1280px content column: a 1440 max width with 80px desktop gutters, 20px on
 * mobile (390 → 350), per 03 / Space, radius, elevation.
 */
export function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-container
      className={cn("mx-auto w-full max-w-[1440px] px-5 md:px-20", className)}
      {...props}
    />
  );
}
