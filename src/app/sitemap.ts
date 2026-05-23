import type { MetadataRoute } from "next";
import { locationPages, servicePages, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/about", "/gallery", "/reviews", "/contact", "/request-estimate", "/service-areas"];
  const serviceRoutes = servicePages.map((page) => `/${page.slug}`);
  const locationRoutes = locationPages.map((page) => `/service-areas/${page.slug}`);
  return [...staticRoutes, ...serviceRoutes, ...locationRoutes].map((route) => ({
    url: `${site.domain}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/service-areas") ? 0.75 : 0.85,
  }));
}
