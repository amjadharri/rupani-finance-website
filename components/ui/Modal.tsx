"use client";

import { useEffect, useId, useRef } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";
import { Heading } from "./Heading";

/**
 * Card widths lifted off the boards: the Get a Quote card is 720, the narrower
 * notices sit at 440. Nothing in the file is wider than the quote card.
 */
const sizeClasses = {
  s: "max-w-[440px]",
  m: "max-w-[560px]",
  l: "max-w-[720px]",
} as const;

export type ModalSize = keyof typeof sizeClasses;

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  eyebrow?: string;
  description?: string;
  size?: ModalSize;
  /** The quote card on the boards is centred, so that is the default. */
  align?: "center" | "start";
  children?: React.ReactNode;
  className?: string;
}

/**
 * The shade pop-up. Built on <dialog> so focus trapping, Escape, the top layer
 * and inertness behind the shade come from the platform rather than from a
 * hand-rolled overlay; the shade itself is styled in globals.css because
 * ::backdrop cannot be reached from a class on the element.
 *
 * The card is the elevated Card from 04 / Components at Rule 03's 8px radius:
 * white surface, hairline rule, shadow/card — the same frame 08 / Get a Quote
 * floats over its dark band.
 */
export function Modal({
  open,
  onClose,
  title,
  eyebrow,
  description,
  size = "m",
  align = "center",
  children,
  className,
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  const centred = align === "center";

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  /**
   * A click that lands on the dialog element itself rather than on the card
   * inside it is a click on the shade — the element fills the viewport while
   * the top layer is up.
   */
  function onBackdropClick(event: React.MouseEvent<HTMLDialogElement>) {
    if (event.target === dialogRef.current) onClose();
  }

  return (
    <dialog
      data-modal
      ref={dialogRef}
      onClose={onClose}
      onClick={onBackdropClick}
      aria-labelledby={titleId}
      aria-describedby={description ? descriptionId : undefined}
      className={cn(
        // 20px gutters on mobile, matching the content column.
        "m-auto w-[calc(100%-2.5rem)] p-0",
        "max-h-[calc(100dvh-4rem)] overflow-y-auto",
        "rounded-card border border-brand-rule bg-brand-white text-brand-ink shadow-card",
        sizeClasses[size],
        className,
      )}
    >
      <div className={cn("relative p-6 md:p-10", centred && "text-center")}>
        <button
          data-tap
          type="button"
          onClick={onClose}
          aria-label="Close"
          className={cn(
            "absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-card",
            "text-brand-ink-2 transition-colors hover:bg-brand-blue-05 hover:text-brand-ink",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue",
          )}
        >
          <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>

        {eyebrow ? <Eyebrow className="text-brand-blue">{eyebrow}</Eyebrow> : null}

        <Heading id={titleId} level={3} as="h2" className={cn(eyebrow && "mt-3", centred ? "px-10" : "pr-10")}>
          {title}
        </Heading>

        {description ? (
          <p
            id={descriptionId}
            className={cn(
              "mt-4 max-w-[480px] text-body-m text-brand-ink-2",
              centred && "mx-auto",
            )}
          >
            {description}
          </p>
        ) : null}

        {children ? <div className={cn("mt-8", centred && "text-left")}>{children}</div> : null}
      </div>
    </dialog>
  );
}
