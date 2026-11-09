import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (
    path: string,
    changeFrequency: "monthly" | "yearly",
    priority: number,
  ): MetadataRoute.Sitemap[number] => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  });
  return [
    page("", "yearly", 1),
    page("/services", "yearly", 0.8),
    page("/projects", "monthly", 0.8),
    page("/contact", "yearly", 0.7),
    page("/resume", "yearly", 0.5),
  ];
}
