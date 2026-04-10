import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.business.website;
  const routes = [
    "",
    "/about-us",
    "/contact-us",
    "/partnership",
    "/pricing",
    "/privacy-policy",
    "/refund-policy",
    "/terms-and-conditions"
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
