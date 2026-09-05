import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Opt-in minimal server bundle for container deploys. Left off locally because
  // `next start` does not serve a standalone build (the Dockerfile sets this).
  output: process.env.BUILD_STANDALONE === "true" ? "standalone" : undefined,

  reactStrictMode: true,

  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },

  images: {
    formats: ["image/avif", "image/webp"],
    // Add the hosts you serve images from.
    remotePatterns: [
      // { protocol: "https", hostname: "images.example.com" },
    ],
  },

  // The nav and footer both point at /resources, and the Blogs board is that
  // page — it is titled "Resources" and its breadcrumb reads Home / Resources.
  // One page, one URL, so the other name redirects rather than duplicating it.
  async redirects() {
    return [
      { source: "/resources", destination: "/blogs", permanent: false },

      // --- Legacy WordPress URLs -------------------------------------------
      // This domain served a WordPress site until the cutover, and it ranked.
      // Its paths do not match this site's, so every one of them would 404 and
      // take its search ranking with it. Permanent (308) so the equity moves.
      // Inventory captured from the old sitemap_index.xml before the switch.

      // Pages
      { source: "/about-us-insurance-funding", destination: "/about", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/blog", destination: "/blogs", permanent: true },
      { source: "/contact-finance-companies-houston", destination: "/contact", permanent: true },
      { source: "/get-a-quote", destination: "/contact", permanent: true },
      { source: "/our-services", destination: "/what-we-finance", permanent: true },
      { source: "/home-insurance-financing", destination: "/what-we-finance", permanent: true },
      { source: "/premium-financing-houston", destination: "/how-it-works", permanent: true },
      { source: "/pricing", destination: "/how-it-works", permanent: true },

      // Posts — every old post has a counterpart here under a shorter slug.
      {
        source: "/agents-dont-have-to-fear-premium-financing-anymore",
        destination: "/blogs/agents-dont-have-to-fear-premium-financing",
        permanent: true,
      },
      {
        source: "/how-premium-financing-can-make-insurance-more-affordable",
        destination: "/blogs/premium-financing-makes-insurance-affordable",
        permanent: true,
      },
      {
        source: "/how-premium-financing-can-help-your-agency",
        destination: "/blogs/how-premium-financing-helps-your-agency",
        permanent: true,
      },
      {
        source: "/benefits-of-premium-financing",
        destination: "/blogs/benefits-of-premium-financing",
        permanent: true,
      },
      {
        source: "/how-to-network-as-an-insurance-agent",
        destination: "/blogs/how-to-network-as-an-insurance-agent",
        permanent: true,
      },
      {
        source: "/the-finance-industry-and-how-it-relates-to-premium-finance-for-commercial-policies",
        destination: "/blogs/finance-industry-and-commercial-policies",
        permanent: true,
      },
      {
        source: "/what-makes-usif-a-premier-finance-company-in-texas",
        destination: "/blogs/what-makes-usif-a-premier-finance-company-in-texas",
        permanent: true,
      },
      {
        source: "/things-all-insurance-agents-should-look-for-when-choosing-an-insurance-financing-company",
        destination: "/blogs/choosing-an-insurance-financing-company",
        permanent: true,
      },
      {
        source: "/what-are-the-benefits-of-premium-financing-for-commercial-home-auto-and-life-insurance",
        destination: "/blogs/benefits-across-commercial-home-auto-life",
        permanent: true,
      },

      // Taxonomy archives — no equivalent, so they fold into the blog index.
      { source: "/category/:slug", destination: "/blogs", permanent: true },
      { source: "/tag/:slug", destination: "/blogs", permanent: true },

      // WooCommerce leftovers and a stray template page. Nothing here was ever
      // part of the business, so they go home rather than to a 404.
      { source: "/cart", destination: "/", permanent: true },
      { source: "/checkout", destination: "/", permanent: true },
      { source: "/shop", destination: "/", permanent: true },
      { source: "/my-account", destination: "/", permanent: true },
      { source: "/footer-layout", destination: "/", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
