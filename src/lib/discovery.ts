import type { Metadata } from "next";
import { services, site } from "./operations";

export const orgId = site.url + "/#avixzon";
export const webId = site.url + "/#website";
export const address = {
  "@type": "PostalAddress", streetAddress: "617-1050 Markham Road",
  addressLocality: "Scarborough", addressRegion: "ON", postalCode: "M1H 2Y7", addressCountry: "CA",
};

export function pageMeta(title: string, description: string, path: string, image = "/avixzon-share.png"): Metadata {
  return {
    title, description, alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: "Avixzon", locale: "en_CA", type: "website", images: [{ url: image, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
export const organization = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness", "@id": orgId, name: "Avixzon", legalName: site.name,
      url: site.url + "/", logo: site.url + "/icon-192.png",
      image: site.url + "/avixzon-share.png", telephone: site.tel, email: site.email, address,
      areaServed: site.cities.map((name) => ({ "@type": "Place", name })),
      sameAs: site.socials.map(([, url]) => url),
      hasOfferCatalog: {
        "@type": "OfferCatalog", name: "Avixzon services",
        itemListElement: services.map((service) => ({
          "@type": "Offer", itemOffered: { "@type": "Service", "@id": site.url + "/services/" + service.slug + "#service", name: service.name, url: site.url + "/services/" + service.slug },
        })),
      },
    },
    { "@type": "WebSite", "@id": webId, name: "Avixzon", url: site.url + "/", inLanguage: "en-CA", publisher: { "@id": orgId } },
  ],
};
export function breadcrumbs(items: [string, string][]) {
  return {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [["Home", "/"], ...items].map(([name, url], index) => ({
      "@type": "ListItem", position: index + 1, name, item: site.url + url,
    })),
  };
}
