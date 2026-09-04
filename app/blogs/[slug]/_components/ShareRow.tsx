"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const buttonClasses =
  "inline-flex min-h-11 items-center justify-center rounded-card border border-brand-rule " +
  "bg-brand-white px-5 py-2.5 text-body-m text-brand-ink transition-colors " +
  "hover:border-brand-blue hover:text-brand-blue " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue";

/**
 * Blog Detail — "Share this article" and its four controls.
 *
 * The share targets are built from the live URL rather than a configured base,
 * so a copied link is always the one the reader is actually on.
 */
export function ShareRow({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  function share(target: "facebook" | "linkedin" | "email") {
    const url = window.location.href;
    const encoded = encodeURIComponent(url);

    const destination = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`,
      email: `mailto:?subject=${encodeURIComponent(title)}&body=${encoded}`,
    }[target];

    window.open(destination, target === "email" ? "_self" : "_blank", "noopener,noreferrer");
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can be refused; leave the label alone rather than
      // claiming a copy that did not happen.
    }
  }

  return (
    <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-brand-rule pt-8">
      <p className="text-body-m font-semibold">Share this article</p>

      <button data-tap type="button" className={buttonClasses} onClick={() => share("facebook")}>
        Facebook
      </button>
      <button data-tap type="button" className={buttonClasses} onClick={() => share("linkedin")}>
        LinkedIn
      </button>
      <button data-tap type="button" className={buttonClasses} onClick={() => share("email")}>
        Email
      </button>
      <button
        data-tap
        type="button"
        className={cn(buttonClasses, copied && "border-brand-blue text-brand-blue")}
        onClick={copy}
      >
        {copied ? "Link copied" : "Copy link"}
      </button>
    </div>
  );
}
