import type { MetadataRoute } from "next";
import { publicEnv } from "@/lib/config/env";

const routes = ["", "/about", "/how-it-works"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${publicEnv.siteUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
