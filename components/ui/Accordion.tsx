"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  title: string;
  body: string;
}

/**
 * From 09 / Advantages. The open panel takes the red fill; closed rows stay on
 * white. One item is open at a time, matching the board.
 */
export function Accordion({ items, className }: { items: AccordionItem[]; className?: string }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        const panelId = `accordion-panel-${index}`;

        return (
          <div
            key={item.title}
            className={cn(
              "rounded-card border transition-colors",
              isOpen
                ? "border-brand-charcoal bg-brand-charcoal text-brand-on-dark"
                : "border-brand-rule bg-brand-white text-brand-ink",
            )}
          >
            <button
              data-tap
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-8"
            >
              <span className="text-title-m font-semibold">{item.title}</span>
              <span aria-hidden className="text-2xl leading-none">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {isOpen ? (
              <div id={panelId} className="px-6 pb-6 text-body-m md:px-8 md:pb-8">
                {item.body}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
