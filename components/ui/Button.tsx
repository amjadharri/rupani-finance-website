import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "navy"
  | "outline"
  | "on-dark"
  | "on-dark-primary"
  | "outline-on-dark"
  | "link";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brand-blue text-brand-on-dark hover:bg-brand-blue-deep",
  navy: "bg-brand-red text-brand-on-dark hover:opacity-90",
  // Navy rule on white — the secondary action in the chat launcher.
  outline:
    "border border-brand-red bg-brand-white text-brand-red hover:bg-brand-red hover:text-brand-on-dark",
  // White pill with navy label — measured off the hero and the red bands.
  "on-dark": "bg-brand-white text-brand-red hover:bg-brand-on-dark-2",
  // White pill with a red label. The interior boards use this one on their red
  // bands ("Become An Agent"); the label samples #d01c24, brand/blue, not the
  // navy of the hero's white buttons. Both exist in the file — do not merge.
  "on-dark-primary": "bg-brand-white text-brand-blue hover:bg-brand-on-dark-2",
  "outline-on-dark":
    "border border-brand-on-dark text-brand-on-dark hover:bg-brand-on-dark hover:text-brand-red",
  link: "underline underline-offset-4 hover:opacity-80",
};

export type ButtonSize = "default" | "compact";

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-semibold transition-colors " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current " +
  "disabled:pointer-events-none disabled:opacity-50";

/**
 * Size lives here rather than in a caller's className: `cn` only joins strings,
 * so an override like "py-2" would win or lose by stylesheet order, not by
 * intent. Compact is the chat launcher's pair of buttons.
 *
 * Rule 03: 8px radius on every button. Rule 06: 44px minimum tap target.
 */
const sizeText: Record<ButtonSize, string> = {
  // The mobile board sets E/Label/M at 16/22; the desktop board at 18/22.
  default: "text-[1rem]/[1.375rem] lg:text-label-m",
  compact: "text-body-s",
};

const sizeBox: Record<ButtonSize, string> = {
  // 26/15 padding on the 390 board (52 tall), 24/14 on 1440.
  default: "rounded-card px-[26px] py-[15px] min-h-13 lg:px-6 lg:py-3.5 lg:min-h-11",
  compact: "rounded-card px-5 py-2 min-h-11",
};

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
  size?: ButtonSize;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

/** An off-site destination opens in a new tab; noopener keeps it off window. */
function externalProps(href: unknown) {
  const isExternal = typeof href === "string" && /^https?:\/\//.test(href);
  return isExternal ? { target: "_blank" as const, rel: "noopener noreferrer" } : {};
}

export type ButtonLinkProps = CommonProps &
  Omit<React.ComponentProps<typeof Link>, "className" | "children">;

export function ButtonLink({
  variant = "primary",
  size = "default",
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
        sizeText[size],
        variant !== "link" && sizeBox[size],
        variantClasses[variant],
        className,
      )}
      {...externalProps(props.href)}
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
  size = "default",
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
        sizeText[size],
        variant !== "link" && sizeBox[size],
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {content(children, withArrow)}
    </button>
  );
}
