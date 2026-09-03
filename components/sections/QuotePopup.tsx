"use client";

import { useState, type FormEvent } from "react";
import { Button, InputField, Modal, TextareaField } from "@/components/ui";
import { company } from "@/lib/config/site";

/**
 * 08 / Get a Quote, lifted into the shade pop-up. Same card, same copy, same
 * field order as the section on the homepage — the only difference is that it
 * floats over the shade instead of over the dark image band.
 *
 * Front end only by design: there is no mutation and nothing leaves the
 * browser. Swap `onSubmit` for `useSubmitQuote()` when a transport exists.
 */
export function QuotePopup({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);

  // Reset on the way out, so a reopened pop-up starts on the form again rather
  // than on the last confirmation. Closing the <dialog> any way — the control,
  // Escape, the shade, or the parent flipping `open` — lands here.
  function close() {
    setSent(false);
    onClose();
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <Modal
      open={open}
      onClose={close}
      size="l"
      title={sent ? "Thank you" : "Get a quote today"}
      description={
        sent
          ? `One of our team will call you back soon. If it is urgent, call us on ${company.phone}.`
          : "If you want to speak to us about a general query, fill in the form and we will call you back soon."
      }
    >
      {sent ? (
        <div className="flex flex-col items-center gap-6">
          <span
            aria-hidden
            className="grid h-14 w-14 place-items-center rounded-logo bg-brand-red text-brand-on-dark"
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="m5 12.5 4.5 4.5L19 7.5" />
            </svg>
          </span>

          <p role="status" className="text-center text-body-m">
            Your callback request has been noted.
          </p>

          <Button variant="navy" onClick={close} className="w-full md:w-auto">
            Close
          </Button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <div className="grid gap-6 md:grid-cols-2">
            <InputField label="Full Name" name="fullName" placeholder="Enter full name" required autoComplete="name" />
            <InputField label="Email" name="email" type="email" placeholder="name@agency.com" required autoComplete="email" />
            <InputField label="Phone" name="phone" type="tel" placeholder="(000) 000-0000" autoComplete="tel" />
            <InputField label="Subject" name="subject" placeholder="General inquiry" />
          </div>

          <TextareaField label="Tell us your question" name="question" rows={4} placeholder="Write here" />

          <Button type="submit" variant="navy" className="w-full">
            Get a Call Back
          </Button>

          <p className="text-center text-body-s text-brand-ink-2">
            Prefer to talk?{" "}
            <a href={company.phoneHref} className="text-brand-blue underline underline-offset-4">
              {company.phone}
            </a>
          </p>
        </form>
      )}
    </Modal>
  );
}
