/**
 * The callback-request contract shared by the quote forms and the endpoint
 * that receives them.
 *
 * This used to live in `app/api/quote/route.ts`. The site is exported as
 * static files (`output: "export"`), which does not support POST Route
 * Handlers, so the handler moved to `deploy/quote.php` on the host and the
 * type moved here — the wire format is unchanged either way.
 */
export interface QuoteRequest {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  question: string;
}

export interface QuoteResponse {
  received: boolean;
}
