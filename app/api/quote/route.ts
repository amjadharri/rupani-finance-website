import { NextResponse } from "next/server";
import type { QuoteRequest } from "@/lib/api/quote";

function isValid(body: Partial<QuoteRequest>): body is QuoteRequest {
  return Boolean(body.fullName?.trim()) && Boolean(body.email?.trim());
}

/**
 * Accepts a callback request from 08 / Get a Quote.
 *
 * PLACEHOLDER: there is no CRM or mail transport wired up yet. Swap the logging
 * below for the real integration; the request/response contract stays the same.
 */
export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as Partial<QuoteRequest>;

  if (!isValid(body)) {
    return NextResponse.json(
      { message: "A name and email address are required." },
      { status: 422 },
    );
  }

  console.info("[quote] callback requested", { email: body.email, subject: body.subject });

  return NextResponse.json({ received: true }, { status: 201 });
}
