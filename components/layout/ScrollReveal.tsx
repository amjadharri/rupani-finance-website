"use client";

import { useEffect } from "react";

/**
 * Reveals `[data-reveal]` elements as they enter the viewport.
 *
 * One observer for the whole document rather than a wrapper component per
 * section: the sections stay Server Components, and adding motion to a new one
 * is an attribute rather than a client boundary.
 *
 * The hidden state is applied by CSS only once this has marked the document
 * ready, so with JavaScript unavailable — or before hydration — everything is
 * simply visible. Content is never hidden behind a script that might not run.
 */
export function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;

    // Honour the OS setting: no observer, nothing hidden, nothing to undo.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    root.dataset.revealReady = "";

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.revealed = "";
          observer.unobserve(entry.target);
        }
      },
      // Fire a little before the element reaches the fold so the movement has
      // finished by the time it is properly in view.
      { rootMargin: "0px 0px -12% 0px", threshold: 0.01 },
    );

    const seen = new WeakSet<Element>();
    function observeAll() {
      // Staggered grids carry their own attribute and need observing too —
      // their children are the ones hidden, and they only un-hide once the
      // container is marked revealed.
      const selector = "[data-reveal]:not([data-revealed]), [data-reveal-stagger]:not([data-revealed])";
      for (const el of document.querySelectorAll(selector)) {
        if (seen.has(el)) continue;
        seen.add(el);
        // Anything already on screen at mount reveals immediately, so the first
        // paint is never a blank page.
        const box = el.getBoundingClientRect();
        if (box.top < window.innerHeight) (el as HTMLElement).dataset.revealed = "";
        else observer.observe(el);
      }
    }

    observeAll();

    // Client navigation swaps the tree without remounting this component.
    const mutations = new MutationObserver(observeAll);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
      delete root.dataset.revealReady;
    };
  }, []);

  return null;
}
