/**
 * Rate card. Rendered on both the homepage (07 / Our rates) and How It Works
 * (03 / Rates), so it lives here rather than in either route's _components.
 */

export interface RateTier {
  amount: string;
  rate: string;
}

export const rateTiers: readonly RateTier[] = [
  { amount: "$500 – 2,000", rate: "13.00%" },
  { amount: "$2,001 – 3,000", rate: "12.00%" },
  { amount: "$3,001 – 5,000", rate: "11.00%" },
  { amount: "$5,001 – 10,000", rate: "10.00%" },
  { amount: "$10,000 +", rate: "Contact USIF for rate info" },
];

export const paymentCount = "9 payments";
export const standardDownpayment = "25%";
