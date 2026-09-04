import type { StaticImageData } from "next/image";
import commercialCore from "@/assets/images/what-we-finance/commercial-core-and-casualty.jpg";
import construction from "@/assets/images/what-we-finance/construction-real-estate-main-street.jpg";
import professional from "@/assets/images/what-we-finance/professional-cyber-financial.jpg";
import energy from "@/assets/images/what-we-finance/energy-marine-agribusiness.jpg";
import catastrophe from "@/assets/images/what-we-finance/catastrophe-weather-environmental.jpg";
import specialty from "@/assets/images/what-we-finance/specialty-markets-surplus-lines.jpg";

/** A single coverage area: the title and the lines that sit under it. */
export interface CoverageArea {
  title: string;
  detail: string;
}

/**
 * Catastrophe, Weather & Environmental Perils nests two of its three entries —
 * a titled panel holding its own cards — so an entry is either an area or a
 * group of them.
 */
export interface CoverageGroup {
  title: string;
  items: CoverageArea[];
}

export type CoverageEntry = CoverageArea | CoverageGroup;

export function isGroup(entry: CoverageEntry): entry is CoverageGroup {
  return "items" in entry;
}

export function isArea(entry: CoverageEntry): entry is CoverageArea {
  return !("items" in entry);
}

export interface CoverageFamily {
  number: string;
  title: string;
  /** The figure the board prints beside the family in the list. */
  count: number;
  image: StaticImageData;
  alt: string;
  entries: CoverageEntry[];
}

export const coverageFamilies: readonly CoverageFamily[] = [
  {
    number: "01",
    title: "Commercial Core & Casualty",
    count: 5,
    image: commercialCore,
    alt: "A framer working on a timber staircase against an open sky",
    entries: [
      {
        title: "Commercial Property & Casualty",
        detail:
          "General Liability, Commercial Property, Business Owners Policies (BOP), Umbrella & Excess Liability, Inland Marine",
      },
      {
        title: "Workers' Compensation",
        detail: "Every class and industry  small crews to large payrolls",
      },
      {
        title: "Retail & Service Businesses",
        detail: "Storefronts, Franchises, Professional Services",
      },
      {
        title: "Hospitality & Restaurant",
        detail: "Restaurants, Bars & Taverns, Hotels & Lodging",
      },
      {
        title: "Manufacturing & Distribution",
        detail: "Product Liability, Warehousing, Wholesale & Distribution",
      },
    ],
  },
  {
    number: "02",
    title: "Construction, Real Estate & Main Street",
    count: 6,
    image: construction,
    alt: "A hard hat resting on a bench at a construction site",
    entries: [
      {
        title: "Contractors & Construction",
        detail: "General Contractors, Subcontractors, Builder's Risk, Specialty Trades",
      },
      {
        title: "Habitational & Real Estate",
        detail:
          "Apartment Complexes, Rental Properties, Condo & HOA Associations, Property Management",
      },
      {
        title: "Homeowners & Personal Lines",
        detail: "Homeowners, Dwelling Fire, Personal Umbrella",
      },
      {
        title: "Education",
        detail:
          "Schools (Public/Private), Daycare & Childcare Centers, Colleges & Universities",
      },
      {
        title: "Nonprofit & Religious Organizations",
        detail: "Churches, Charities, Community Organizations",
      },
      {
        title: "Security Guard & Staffing",
        detail: "Security Firms, Staffing Agencies, Employee Leasing/PEO",
      },
    ],
  },
  {
    number: "03",
    title: "Professional, Cyber & Financial Lines",
    count: 5,
    image: professional,
    alt: "Two colleagues talking over a desk in an open-plan office",
    entries: [
      {
        title: "Professional & Management Liability",
        detail:
          "Errors & Omissions (E&O), Directors & Officers (D&O), Employment Practices Liability (EPLI), Cyber Liability",
      },
      {
        title: "Technology (Tech E&O)",
        detail: "Software Developers, IT Consultants, SaaS Companies, Data Processors",
      },
      {
        title: "Financial Institutions",
        detail: "Banks, Credit Unions, Financial Institution Bonds, Fidelity/Crime Coverage",
      },
      {
        title: "Healthcare & Medical Facilities",
        detail:
          "Medical Malpractice, Allied Healthcare, Assisted Living, Home Health Agencies",
      },
      {
        title: "Bonds",
        detail: "Surety Bonds, Contract Bonds, License & Permit Bonds, Fidelity Bonds",
      },
    ],
  },
  {
    number: "04",
    title: "Energy, Marine & Agribusiness",
    count: 3,
    image: energy,
    alt: "Electricity transmission towers silhouetted at dusk",
    entries: [
      {
        title: "Agribusiness & Farm",
        detail: "Farm & Ranch, Crop Insurance, Farm Equipment, Livestock",
      },
      {
        title: "Energy & Oil/Gas",
        detail: "Oilfield Services, Pipeline, Renewable Energy, Drilling Contractors",
      },
      {
        title: "Marine (Ocean/Hull)",
        detail: "Ocean Cargo, Hull & Machinery, Marina Operators, Boat Dealers",
      },
    ],
  },
  {
    number: "05",
    title: "Catastrophe, Weather & Environmental Perils",
    count: 3,
    image: catastrophe,
    alt: "A pair of hands cupping soil and a young fern",
    entries: [
      {
        title: "Windstorm & Flood",
        items: [
          {
            title: "Windstorm Policy",
            detail:
              "Covers wind and hail damage in coastal and storm-prone states, where standard policies often leave gaps",
          },
          {
            title: "Flood Insurance",
            detail:
              "Separate coverage for flood damage, since standard policies never include it",
          },
        ],
      },
      {
        title: "Catastrophe & Specialty Perils",
        items: [
          {
            title: "Named Storm / Hurricane Coverage",
            detail:
              "Its own protection for hurricanes and named storms, apart from standard windstorm coverage",
          },
          {
            title: "Wildfire / Brush Fire Coverage",
            detail: "Coverage for wildfire-prone areas like CA, CO, OR, and AZ",
          },
          {
            title: "Difference in Conditions (DIC)",
            detail: "Fills the gaps left by earthquake, flood, and landslide exclusions",
          },
          {
            title: "Terrorism Insurance (TRIA-backed)",
            detail: "Covers losses from certified acts of terrorism",
          },
          {
            title: "Riot, Civil Commotion & Vandalism",
            detail: "Protection against unrest, riots, and vandalism",
          },
          {
            title: "Cyber / Ransomware",
            detail:
              "Today's man-made disaster — covers data breaches, ransomware, and network outages",
          },
          {
            title: "Boiler & Machinery / Equipment Breakdown",
            detail:
              "Covers mechanical and electrical breakdowns not included in standard property policies",
          },
        ],
      },
      {
        title: "Environmental & Pollution Liability",
        detail: "Contractors Pollution Liability, Site Pollution, Environmental Consultants",
      },
    ],
  },
  {
    number: "06",
    title: "Specialty Markets & Surplus Lines",
    count: 3,
    image: specialty,
    alt: "A beach volleyball game silhouetted against the evening sky",
    entries: [
      {
        title: "Excess & Surplus Lines (E&S)",
        detail:
          "Hard-to-place risks, non-admitted carriers, and specialty accounts of any kind",
      },
      {
        title: "Entertainment & Special Events",
        detail:
          "Event Liability, Liquor Liability, Amusement/Recreation, Sports & Fitness Facilities",
      },
      {
        title: "Cannabis Industry",
        detail: "Cultivators, Dispensaries, Processors, Product Liability",
      },
    ],
  },
];

/** "25 coverage areas across six families" — the figure the board prints. */
export const totalCoverageAreas = coverageFamilies.reduce(
  (total, family) => total + family.count,
  0,
);
