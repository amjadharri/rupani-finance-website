import { cn } from "@/lib/utils";

type Level = 1 | 2 | 3;

/**
 * Section headings step down on the 390 board: it draws them at Archivo Light
 * 23/28, which is what display-m resolves to at that width, where display-l is
 * 27/31. The desktop boards keep display-l, so the step is a breakpoint rather
 * than a change to either token.
 */
const levelClasses: Record<Level, string> = {
  1: "text-display-xl",
  2: "text-display-m md:text-display-l",
  3: "text-display-m",
};

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: Level;
  as?: "h1" | "h2" | "h3" | "p";
}

/** Archivo Light display type. Rule 01: only Archivo and Public Sans. */
export function Heading({ level = 2, as, className, ...props }: HeadingProps) {
  const Tag = as ?? (`h${level}` as const);

  return (
    <Tag
      className={cn("font-display font-light tracking-[-0.01em]", levelClasses[level], className)}
      {...props}
    />
  );
}
