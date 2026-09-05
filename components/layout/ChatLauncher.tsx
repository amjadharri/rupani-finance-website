"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui";
import { cn } from "@/lib/utils";
/**
 * PLACEHOLDER — the board uses a dedicated agent headshot that is not among the
 * exported assets. This is a 144px crop of about/how-we-work.jpg framed to the
 * face; swap the import once the real avatar comes out of Figma.
 */
import agentAvatar from "@/assets/images/agent-avatar.jpg";
import { applyFormUrl } from "@/lib/config/site";

/**
 * The Online Agent chat launcher that floats over the hero on the boards.
 *
 * Front end only: neither action opens a chat transport. "Apply Now" and "I
 * have a question" are the two routes the board points at, so they are links.
 *
 * Deliberately not a <dialog>: this is a non-modal popover that must leave the
 * page behind it usable, so it neither traps focus nor raises a shade — unlike
 * [[Modal]], which does both.
 */
export function ChatLauncher({ defaultOpen = true }: { defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 print:hidden">
      {open ? (
        <div
          id="chat-launcher-panel"
          aria-label="Chat with an online agent"
          className={cn(
            "relative w-[min(20rem,calc(100vw-2.5rem))]",
            "rounded-card bg-brand-white shadow-card",
          )}
        >
          <button
            data-tap
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className={cn(
              "absolute -right-3 -top-3 grid h-11 w-11 place-items-center md:h-9 md:w-9",
              "rounded-logo bg-brand-white text-brand-ink shadow-card",
              "transition-colors hover:bg-brand-blue-05",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue",
            )}
          >
            <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>

          {/* brand/red-tint — the one place the navy tint is used as a fill. */}
          <p className="rounded-t-card bg-brand-red-tint px-5 py-5 text-body-s text-brand-ink">
            Hello. Welcome to U.S. Insurance Funding a premium finance specialist is here to help.
          </p>

          <div className="flex flex-col gap-3 p-4">
            <ButtonLink href={applyFormUrl} size="compact" onClick={() => setOpen(false)}>
              Apply Now
            </ButtonLink>
            <ButtonLink
              href="/contact"
              variant="outline"
              size="compact"
              onClick={() => setOpen(false)}
            >
              I have a question
            </ButtonLink>
          </div>
        </div>
      ) : null}

      <button
        data-tap
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="chat-launcher-panel"
        className="flex flex-col items-center gap-2 rounded-card focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-white"
      >
        <span className="relative block">
          <Image
            src={agentAvatar}
            alt=""
            width={72}
            height={72}
            sizes="72px"
            className="h-18 w-18 rounded-logo object-cover ring-4 ring-brand-white"
          />
          <span
            aria-hidden
            className="absolute bottom-1 right-1 block h-3.5 w-3.5 rounded-logo bg-status-online ring-2 ring-brand-white"
          />
        </span>

        <span className="rounded-card bg-brand-red px-3 py-1 text-body-s font-medium text-brand-on-dark">
          Online Agent
        </span>
      </button>
    </div>
  );
}
