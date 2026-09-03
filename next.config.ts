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
