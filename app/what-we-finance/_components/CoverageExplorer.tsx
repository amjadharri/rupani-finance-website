"use client";

import { useId, useState } from "react";
import Image from "next/image";
import {
  coverageFamilies,
  isGroup,
  totalCoverageAreas,
  type CoverageArea,
  type CoverageEntry,
  type CoverageGroup,
} from "@/lib/content/coverage";
import { cn } from "@/lib/utils";

type Part =
  | { kind: "areas"; areas: CoverageArea[] }
  | { kind: "group"; group: CoverageGroup };

/** Collapse consecutive plain areas into one grid, leaving groups standalone. */
function chunk(entries: readonly CoverageEntry[]): Part[] {
  return entries.reduce<Part[]>((parts, entry) => {
    if (isGroup(entry)) {
      parts.push({ kind: "group", group: entry });
      return parts;
    }

    const last = parts[parts.length - 1];
    if (last?.kind === "areas") last.areas.push(entry);
    else parts.push({ kind: "areas", areas: [entry] });

    return parts;
  }, []);
}

/** A coverage area card — blush panel, title and the lines beneath it. */
function AreaCard({ area, tone = "blush" }: { area: CoverageArea; tone?: "blush" | "white" }) {
  return (
    <div
      className={cn(
        "rounded-card p-6",
        tone === "blush" ? "bg-brand-blue-05" : "bg-brand-white",
      )}
    >
      <h4 className="text-title-m font-semibold text-brand-ink">{area.title}</h4>
      <p className="mt-3 text-body-m text-brand-ink-2">{area.detail}</p>
    </div>
  );
}

/**
 * ★ USIF Coverage explorer. The family list drives a detail panel; selecting a
 * family swaps the photograph, the count and the cards.
 *
 * Catastrophe, Weather & Environmental Perils is the reason an entry can be a
 * group: two of its three entries are titled panels holding their own cards,
 * which the board draws as white cards inside the blush panel.
 */
export function CoverageExplorer() {
  const [selected, setSelected] = useState(0);
  const panelId = useId();
  const family = coverageFamilies[selected];

  return (
    <div data-reveal-stagger className="mt-12 grid gap-12 lg:grid-cols-[400px_1fr] lg:gap-16">
      <div>
        <ul>
          {coverageFamilies.map((item, index) => {
            const isActive = index === selected;

            return (
              <li key={item.number} className={cn(!isActive && "border-t border-brand-rule")}>
                <button
                  data-tap
                  type="button"
                  aria-pressed={isActive}
                  aria-controls={panelId}
                  onClick={() => setSelected(index)}
                  className={cn(
                    "flex w-full items-center gap-4 py-5 text-left transition-colors",
                    isActive
                      ? "rounded-card border-l-4 border-brand-blue bg-brand-blue-05 px-5"
                      : "px-1 hover:text-brand-blue",
                  )}
                >
                  <span
                    className={cn(
                      "w-6 shrink-0 text-body-s",
                      isActive ? "text-brand-blue" : "text-brand-ink-2",
                    )}
                  >
                    {item.number}
                  </span>
                  <span className="flex-1 text-title-m text-brand-ink">{item.title}</span>
                  <span className="shrink-0 text-body-s text-brand-ink-2">{item.count}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <p className="mt-6 max-w-[380px] text-body-s text-brand-ink-2">
          {totalCoverageAreas} coverage areas across six families. Select one to see everything
          inside it.
        </p>
      </div>

      <div id={panelId} aria-live="polite">
        <Image
          src={family.image}
          alt={family.alt}
          sizes="(max-width: 1024px) 100vw, 820px"
          placeholder="blur"
          className="h-auto w-full rounded-card bg-brand-rule"
        />

        <p className="mt-8 flex items-baseline gap-4 text-body-s">
          <span className="text-brand-blue">{family.number}</span>
          <span className="text-brand-ink-2">{family.count} coverage areas</span>
        </p>

        <h3 className="mt-3 font-display text-display-l font-light tracking-[-0.01em]">
          {family.title}
        </h3>

        <div className="mt-8 flex flex-col gap-6">
          {/* Entries keep the order the board puts them in: a run of plain
              areas shares one two-column grid, and a group becomes its own
              panel wherever it falls in that order. */}
          {chunk(family.entries).map((part, index) =>
            part.kind === "areas" ? (
              <div data-reveal-stagger key={`areas-${index}`} className="grid gap-6 md:grid-cols-2">
                {part.areas.map((area) => (
                  <AreaCard key={area.title} area={area} />
                ))}
              </div>
            ) : (
              <div key={part.group.title} className="rounded-card bg-brand-blue-05 p-6">
                <h4 className="text-title-m font-semibold text-brand-ink">{part.group.title}</h4>
                <div data-reveal-stagger className="mt-6 grid gap-6 md:grid-cols-2">
                  {part.group.items.map((item) => (
                    <AreaCard key={item.title} area={item} tone="white" />
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
