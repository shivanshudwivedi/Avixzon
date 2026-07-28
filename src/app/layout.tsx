import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FaqConcierge } from "@/components/faq-concierge";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-body",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display-family",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://avixzon.com"),
  title: {
    default: "Avixzon | Movers, Freight & Logistics in Toronto & the GTA",
    template: "%s | Avixzon",
  },
  description: "Professional residential and commercial moving, packing, freight, transportation and warehousing services in Scarborough, Toronto and across the GTA.",
  applicationName: "Avixzon",
  authors: [{ name: "Avixzon Inc.", url: "https://avixzon.com" }],
  creator: "Avixzon Inc.",
  publisher: "Avixzon Inc.",
  category: "Moving and logistics",
  keywords: [
    "movers Scarborough",
    "moving company Toronto",
    "GTA movers",
    "commercial movers Toronto",
    "residential moving Scarborough",
    "packing services GTA",
    "freight forwarding Toronto",
    "air freight Toronto",
    "ocean freight Toronto",
    "warehousing Scarborough",
    "logistics company GTA",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Avixzon | Movers, Freight & Logistics in Toronto & the GTA",
    description: "Professional moving, packing, freight, transportation and warehousing from one trusted GTA team.",
    url: "https://avixzon.com",
    siteName: "Avixzon",
    locale: "en_CA",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Avixzon — Move Without Limits" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avixzon | Movers, Freight & Logistics in the GTA",
    description: "Professional moving, packing, freight, transportation and warehousing from one trusted GTA team.",
    images: ["/og.png"],
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png",   sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/avixzon-logo.jpg", sizes: "180x180", type: "image/jpeg" },
    ],
    shortcut: "/favicon-32.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#111814" },
    { media: "(prefers-color-scheme: dark)", color: "#111814" },
  ],
  width: "device-width",
  initialScale: 1,
};

const GTAG_ID = "AW-18185211647";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MovingCompany",
      "@id": "https://avixzon.com/#business",
      name: "Avixzon Inc.",
      alternateName: "Avixzon",
      url: "https://avixzon.com",
      logo: "https://avixzon.com/avixzon-logo.jpg",
      image: "https://avixzon.com/og.png",
      description:
        "Professional moving, packing, freight, transportation and warehousing services across Toronto and the Greater Toronto Area.",
      telephone: "+1-437-775-2592",
      email: "avixzon@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "617-1050 Markham Road",
        addressLocality: "Scarborough",
        addressRegion: "ON",
        postalCode: "M1H 2Y7",
        addressCountry: "CA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 43.7764,
        longitude: -79.2318,
      },
      areaServed: [
        "Scarborough",
        "Toronto",
        "Mississauga",
        "Brampton",
        "Markham",
        "Vaughan",
        "Greater Toronto Area",
      ],
      sameAs: [
        "https://www.instagram.com/avixzoncanada",
        "https://www.facebook.com/share/16dDPPY9WX",
        "https://www.tiktok.com/@avixzoncanada",
        "https://www.youtube.com/@avixzoncanada",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Moving and logistics services",
        itemListElement: [
          "Moving Services",
          "Transportation",
          "Packing & Crating",
          "Air Freight",
          "Ocean Freight",
          "Customs Brokerage",
          "Warehousing",
          "Cleaning Services",
          "Manpower Services",
          "Car Rentals",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://avixzon.com/#website",
      url: "https://avixzon.com",
      name: "Avixzon",
      inLanguage: "en-CA",
      publisher: { "@id": "https://avixzon.com/#business" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Ads tag */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GTAG_ID}');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} ${inter.className} min-h-screen flex flex-col antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FaqConcierge />
        </ThemeProvider>
      </body>
    </html>
  );
}
