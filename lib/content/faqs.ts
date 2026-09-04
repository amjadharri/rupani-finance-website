/** FAQs — the fourteen questions on the FAQs board, in board order. */
export interface Faq {
  question: string;
  answer: string;
}

export const faqs: readonly Faq[] = [
  {
    question: "What is premium financing?",
    answer:
      "Premium financing allows an insured to pay their insurance premium over time instead of paying the entire premium upfront. USIF helps convert annual insurance premiums into manageable payment plans.",
  },
  {
    question: "What types of insurance premiums does USIF finance?",
    answer:
      "USIF finances a wide range of commercial insurance, homeowners and personal lines, and Excess & Surplus (E&S) coverage.",
  },
  {
    question: "Do you finance small insurance premiums?",
    answer:
      "Yes. USIF welcomes accounts of all sizes and specifically notes that small premiums are not turned away.",
  },
  {
    question: "What payment schedules are available?",
    answer:
      "Payment plans can be structured around the insured's cash flow, including monthly, quarterly, annual, or seasonal payment schedules.",
  },
  {
    question: "What insurance industries and coverage types do you finance?",
    answer:
      "USIF finances a broad range of coverage, including commercial property and casualty, workers' compensation, E&S, professional liability, homeowners, construction, hospitality, manufacturing, energy, marine, environmental, healthcare, technology, financial institutions, bonds, and more.",
  },
  {
    question: "Do you finance hard-to-place or specialty insurance risks?",
    answer:
      "Yes. USIF finances Excess & Surplus Lines and specialty placements, including hard-to-place risks and non-admitted carrier placements across industries.",
  },
  {
    question: "What if I don't see my type of insurance listed?",
    answer:
      "The listed coverage is not exhaustive. If your line of business isn't shown, contact USIF to discuss your account and financing options.",
  },
  {
    question: "Who can work with USIF?",
    answer:
      "USIF works with retail brokers, managing general agents (MGAs), insurance companies, agents, and general agents to provide premium financing solutions for their clients.",
  },
  {
    question: "How does the premium financing process work?",
    answer:
      "The process starts with an application through USIF's online quotation system. USIF verifies the policy details with the agent, and once the agreement is signed, the contract is processed and funded.",
  },
  {
    question: "How quickly can a financing contract be funded?",
    answer:
      "USIF states that once the contract is signed, it is processed and funded without unnecessary delay.",
  },
  {
    question: "What payment methods does USIF accept?",
    answer:
      "USIF accepts EFT/ACH, credit card, and electronic payments, and provides online access for notices and account management.",
  },
  {
    question: "What rates does USIF offer?",
    answer:
      "USIF offers tiered finance charges based on the amount financed. The listed 9-payment rates range from 13% for $500–$2,000 down to 10% for $5,001–$10,000; accounts above $10,000 should contact USIF for rate information. Rates and terms may vary by premium size and line of business.",
  },
  {
    question: "Does USIF serve customers in my state?",
    answer: "Yes. USIF states that it provides premium financing services across all 50 states.",
  },
  {
    question: "Why should I choose USIF for premium financing?",
    answer:
      "USIF offers competitive financing, flexible payment structures, fast processing, financing across a broad range of insurance lines, and a network of more than 300 agents and reputable carriers. The company also emphasizes personalized service and accounts of all sizes.",
  },
];
