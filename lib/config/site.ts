/**
 * Site-wide facts and information architecture, taken from the Navigation board
 * and the footer of the Figma file. Kept in one place so nav, footer and
 * metadata cannot drift apart.
 */

export const company = {
  name: "U.S. Insurance Funding",
  shortName: "USIF",
  tagline: "A premium finance company serving General Agents and Producers since early nineties.",
  phone: "(713) 777-6786",
  phoneHref: "tel:+17137776786",
  address: {
    street: "8303 Southwest Freeway, Suite 435",
    city: "Houston, TX 77074",
  },
  established: "1999",
  developedBy: "uConnect Technologies Pvt Ltd",
  developedByHref: "https://uconnect.pk",
} as const;

export interface NavItem {
  label: string;
  href: string;
  children?: ReadonlyArray<{ label: string; href: string }>;
}

export const primaryNav: readonly NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Premium Financing",
    href: "/how-it-works",
    children: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "What We Finance", href: "/what-we-finance" },
      { label: "Who We Serve", href: "/who-we-serve" },
      { label: "States We Fund", href: "/states-we-fund" },
    ],
  },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Why Choose USIF", href: "/why-choose-usif" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Blogs", href: "/blogs" },
      { label: "FAQs", href: "/faqs" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

export const footerNav = [
  {
    heading: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "Premium Financing", href: "/how-it-works" },
      { label: "About Us", href: "/about" },
      { label: "Resources", href: "/resources" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Premium Finance", href: "/how-it-works" },
      { label: "Flexible Pricing Plans", href: "/how-it-works#flexibility" },
      { label: "Online Services", href: "/online-services" },
    ],
  },
  {
    heading: "Account",
    links: [
      { label: "Let's Get You Funded", href: "/apply" },
      { label: "Become an Agent", href: "/become-an-agent" },
      { label: "Agent Login", href: "/login" },
    ],
  },
  {
    heading: "Follow Us",
    links: [
      { label: "Facebook", href: "https://facebook.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
    ],
  },
] as const;
