import type { Metadata } from "next";
import { Archivo, Public_Sans } from "next/font/google";
import { ChatLauncher, SiteFooter, UtilityBar } from "@/components/layout";
import { AppProviders } from "@/providers";
import { company } from "@/lib/config/site";
import { publicEnv } from "@/lib/config/env";
import "./globals.css";

/* Rule 01: two typefaces only — Archivo for display, Public Sans for text. */
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "500"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(publicEnv.siteUrl),
  title: {
    default: `${company.name} — Premium Finance Company`,
    template: `%s | ${company.shortName}`,
  },
  description:
    "An established premium finance company offering flexible premium finance solutions with " +
    "very competitive APR for commercial, homeowners, excess & surplus lines.",
  openGraph: {
    type: "website",
    siteName: company.name,
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-mode="red-led"
      className={`${archivo.variable} ${publicSans.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <AppProviders>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-card focus:bg-brand-white focus:px-4 focus:py-2"
          >
            Skip to content
          </a>
          <UtilityBar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
          <ChatLauncher />
        </AppProviders>
      </body>
    </html>
  );
}
