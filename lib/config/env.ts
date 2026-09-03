/**
 * Single, validated entry point for environment configuration.
 * Import from here instead of reading `process.env` throughout the app —
 * it keeps client/server boundaries explicit and fails loudly on misconfiguration.
 */

function required(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

/**
 * Resolves the canonical origin. An explicit NEXT_PUBLIC_SITE_URL wins; otherwise
 * Vercel's own production URL is used so metadataBase, robots and sitemap are
 * correct on a preview or a fresh deploy without any manual configuration.
 */
function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;

  const vercelUrl =
    process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL;

  return vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000";
}

/** Safe to reference from Client Components — must be NEXT_PUBLIC_*. */
export const publicEnv = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? "/api",
  siteUrl: resolveSiteUrl(),
  environment: process.env.NODE_ENV,
} as const;

/** Server-only. Never import this from a "use client" module. */
export const serverEnv = {
  get apiSecret() {
    return required("API_SECRET", process.env.API_SECRET);
  },
} as const;

export const isProduction = process.env.NODE_ENV === "production";
export const isDevelopment = process.env.NODE_ENV === "development";
