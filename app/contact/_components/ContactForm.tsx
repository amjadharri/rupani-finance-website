"use client";

import { useState, type FormEvent } from "react";
import { Button, Card } from "@/components/ui";
import { QuoteFields } from "@/components/sections";
import { useSubmitQuote } from "@/hooks";

/**
 * Contact Us 02 / Get in touch — the elevated card beside the contact details.
 *
 * The same field block as the homepage section, with the board's own submit:
 * full width and brand/blue rather than the navy the homepage uses (sampled
 * #d01c24 off the board).
 */
export function ContactForm() {
  const { mutate, isPending, isSuccess, isError } = useSubmitQuote();
  const [formKey, setFormKey] = useState(0);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    mutate(
      {
        fullName: String(data.get("fullName") ?? ""),
        email: String(data.get("email") ?? ""),
        phone: String(data.get("phone") ?? ""),
        subject: String(data.get("subject") ?? ""),
        question: String(data.get("question") ?? ""),
      },
      { onSuccess: () => setFormKey((key) => key + 1) },
    );
  }

  return (
    <Card tone="elevated" className="border-transparent p-8 md:p-10">
      <h2 className="font-display text-display-m font-light">Get a quote today</h2>
      <p className="mt-4 max-w-[520px] text-body-m text-brand-ink-2">
        If you want to speak to us about a general query, fill in the form and we will call you back
        soon.
      </p>

      <form key={formKey} onSubmit={onSubmit} className="mt-8 flex flex-col gap-6">
        <QuoteFields textareaRows={4} />

        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? "Sending…" : "Get a Call Back"}
        </Button>

        <p role="status" className="min-h-6 text-center text-body-s">
          {isSuccess ? (
            <span className="text-brand-red">Thank you — we will call you back soon.</span>
          ) : null}
          {isError ? (
            <span className="text-brand-blue">
              Something went wrong. Please call{" "}
              <a href="tel:+17137776786" className="underline">
                (713) 777-6786
              </a>
              .
            </span>
          ) : null}
        </p>
      </form>
    </Card>
  );
}
