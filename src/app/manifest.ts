import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Avixzon Moving, Freight & Logistics",
    short_name: "Avixzon",
    description:
      "Professional moving, freight, transportation and warehousing services across Toronto and the GTA.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f8fc",
    theme_color: "#111a2c",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
