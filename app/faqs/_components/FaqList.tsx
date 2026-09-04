"use client";

import { useState } from "react";
import { faqs } from "@/lib/content/faqs";
import { cn } from "@/lib/utils";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={cn("h-5 w-5 shrink-0 transition-transform", open && "rotate-180")}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/**
 * FAQs 02 — numbered rows separated by rules, each opening in place.
 *
 * Not the Accordion primitive: that one is the homepage's Advantages panel,
 * where the open row takes the charcoal fill and only one row opens at a time.
 * This list stays on white, carries a number and a chevron, and lets any number
 * of rows be open at once — the board's "All open" state shows all fourteen.
 */
export function FaqList() {
  const [open, setOpen] = useState<number[]>([0]);

  function toggle(index: number) {
    setOpen((current) =>
      current.includes(index) ? current.filter((i) => i !== index) : [...current, index],
    );
  }

  return (
    <ul className="border-t border-brand-rule">
      {faqs.map((faq, index) => {
        const isOpen = open.includes(index);
        const panelId = `faq-panel-${index}`;

        return (
          <li key={faq.question} className="border-b border-brand-rule">
            <h3>
              <button
                data-tap
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className="flex w-full items-center gap-6 py-6 text-left"
              >
                <span className="w-6 shrink-0 text-body-s text-brand-blue">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-title-m font-semibold text-brand-ink">
                  {faq.question}
                </span>
                <Chevron open={isOpen} />
              </button>
            </h3>

            {isOpen ? (
              <div id={panelId} className="pb-8 pl-12 pr-10 text-body-m text-brand-ink-2">
                {faq.answer}
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
