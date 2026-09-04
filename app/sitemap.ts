import type { MetadataRoute } from "next";
import { publicEnv } from "@/lib/config/env";
import { posts } from "@/lib/content/posts";

const routes = [
  "",
  "/about",
  "/how-it-works",
  "/what-we-finance",
  "/who-we-serve",
  "/states-we-fund",
  "/why-choose-usif",
  "/blogs",
  "/faqs",
  "/testimonials",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...routes.map((route) => ({
      url: `${publicEnv.siteUrl}${route}`,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...posts.map((post) => ({
      url: `${publicEnv.siteUrl}/blogs/${post.slug}`,
      lastModified: post.date,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
