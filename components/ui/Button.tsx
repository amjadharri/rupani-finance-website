import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "navy" | "on-dark" | "outline-on-dark" | "link";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brand-blue text-brand-on-dark hover:bg-brand-blue-deep",
  navy: "bg-brand-red text-brand-on-dark hover:opacity-90",
  "on-dark": "bg-brand-white text-brand-blue hover:bg-brand-on-dark-2",
  "outline-on-dark":
    "border border-brand-on-dark text-brand-on-dark hover:bg-brand-on-dark hover:text-brand-blue",
  link: "underline underline-offset-4 hover:opacity-80",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 text-label-m font-semibold transition-colors " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current " +
  "disabled:pointer-events-none disabled:opacity-50";

/* Rule 03: 8px radius on every button. Rule 06: 44px minimum tap target. */
const solidClasses = "rounded-card px-6 py-3.5 min-h-11";

function content(children: React.ReactNode, withArrow?: boolean) {
  return (
    <>
      {children}
      {withArrow ? <span aria-hidden>&#9656;</span> : null}
    </>
  );
}

interface CommonProps {
  variant?: ButtonVariant;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

export type ButtonLinkProps = CommonProps &
  Omit<React.ComponentProps<typeof Link>, "className" | "children">;

export function ButtonLink({
  variant = "primary",
  withArrow,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      data-tap
      className={cn(
        baseClasses,
        variant !== "link" && solidClasses,
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {content(children, withArrow)}
    </Link>
  );
}

export type ButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button({
  variant = "primary",
  withArrow,
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      data-tap
      type={type}
      className={cn(
        baseClasses,
        variant !== "link" && solidClasses,
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {content(children, withArrow)}
    </button>
  );
}
