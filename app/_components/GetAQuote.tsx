"use client";

import { useState, type FormEvent } from "react";
import { Button, Card, Container, InputField, TextareaField } from "@/components/ui";
import { useSubmitQuote } from "@/hooks";

/**
 * 08 / Get a Quote — floating card over a dark image band. This is the one
 * genuinely interactive part of the site, so it is a Client Component driven by
 * a React Query mutation.
 */
export function GetAQuote() {
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
    <section className="bg-brand-ink py-16 md:py-24">
      <Container>
        <Card tone="elevated" className="mx-auto max-w-[720px] p-8 md:p-12">
          <h2 className="text-center font-display text-display-m font-light">Get a quote today</h2>
          <p className="mx-auto mt-4 max-w-[480px] text-center text-body-m text-brand-ink-2">
            If you want to speak to us about a general query, fill in the form and we will call you
            back soon.
          </p>

          <form key={formKey} onSubmit={onSubmit} className="mt-8 flex flex-col gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <InputField label="Full Name" name="fullName" placeholder="Enter full name" required autoComplete="name" />
              <InputField label="Email" name="email" type="email" placeholder="name@agency.com" required autoComplete="email" />
              <InputField label="Phone" name="phone" type="tel" placeholder="(000) 000-0000" autoComplete="tel" />
              <InputField label="Subject" name="subject" placeholder="General inquiry" />
            </div>

            <TextareaField label="Tell us your question" name="question" placeholder="Write here" />

            <Button type="submit" variant="navy" disabled={isPending} className="w-full">
              {isPending ? "Sending…" : "Get a Call Back"}
            </Button>

            <p role="status" className="min-h-6 text-center text-body-s">
              {isSuccess ? (
                <span className="text-brand-red">Thank you — we will call you back soon.</span>
              ) : null}
              {isError ? (
                <span className="text-brand-blue">
                  Something went wrong. Please call {" "}
                  <a href="tel:+17137776786" className="underline">
                    (713) 777-6786
                  </a>
                  .
                </span>
              ) : null}
            </p>
          </form>
        </Card>
      </Container>
    </section>
  );
}
