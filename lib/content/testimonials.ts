/**
 * Testimonials.
 *
 * The board is careful about the difference between the two blocks on it, and
 * so is this file: `clientQuotes` are words attributed to a client, while
 * `howWeWork` is USIF describing itself. The board labels that second block
 * "These statements are USIF's own description of how the company works not
 * client quotations." — so they must never be rendered as quotes.
 */
export interface ClientQuote {
  quote: string;
  name: string;
  role: string;
}

export const clientQuotes: readonly ClientQuote[] = [
  {
    quote: "Atif & Fatima always go above & beyond. Quick response as well. Thank you!",
    name: "Debra M. Hernandez",
    role: "Agent / Partner",
  },
];

export type StatementId =
  | "staff"
  | "serving"
  | "known"
  | "relationships"
  | "approach"
  | "options"
  | "consultant";

export interface Statement {
  id: StatementId;
  text: string;
}

/** In the order the Testimonials board lays the cards out. */
export const howWeWork: readonly Statement[] = [
  {
    id: "staff",
    text: "Every staff member at US Insurance Funding is a dedicated professional, who is always prepared to answer your question immediately and accurately. We understand your needs, your opportunities, your concerns and how they can change.",
  },
  {
    id: "serving",
    text: "We have been serving General Agents and Producers since the early nineties. Our company can be your single source for premium financing.",
  },
  {
    id: "known",
    text: "We are known for our honesty, dependability, courtesy and excellent customer service; we are very much serious towards our commitment. We always ready to help you with our expertise team to meet your premium finance needs.",
  },
  {
    id: "relationships",
    text: "We build relationships by offering best premium finance solutions to the agents and general agents that boost up their business and profitable by using our dedicated services.",
  },
  {
    id: "approach",
    text: "Our approach makes difference in projecting your business image as well as increasing profit with mutual business relationship. We work together as a consultant. We keep in mind the types of coverage you finance, the premium size and above all the technologies needed in order to make perfect fit for your agency.",
  },
  {
    id: "options",
    text: "We offer unique services with open options in order to accommodate you and the Insured.",
  },
  {
    id: "consultant",
    text: "We believe in honesty, dependability, and courtesy in every interaction. Our team works as a consultant to your agency not just a lender.",
  },
];

export function statements(...ids: StatementId[]): Statement[] {
  return ids.map((id) => {
    const found = howWeWork.find((statement) => statement.id === id);
    if (!found) throw new Error(`Unknown statement: ${id}`);
    return found;
  });
}

/**
 * Why Choose USIF reuses four of these under "What Our Clients Say", in a
 * different order from the Testimonials board.
 */
export const whyChooseUsifStatements = statements(
  "serving",
  "known",
  "staff",
  "relationships",
);
