import type { MetadataRoute } from "next";
import { services, site } from "@/lib/operations";
import { guides } from "@/lib/news";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/services", "/about", "/careers", "/service-area", "/contact", "/news", ...services.map(s => "/services/" + s.slug), ...guides.map(g => "/news/" + g.slug)].map(path => ({url: site.url + path}));
}
