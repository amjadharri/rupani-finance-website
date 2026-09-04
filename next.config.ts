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
    return [{ source: "/resources", destination: "/blogs", permanent: false }];
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
