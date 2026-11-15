import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./operations.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FaqConcierge } from "@/components/faq-concierge";
import { SiteMotion } from "@/components/operations-motion";
import { SiteAnalytics } from "@/components/site-analytics";
import { JsonLd } from "@/components/operations-ui";
import { organization } from "@/lib/discovery";
import { site } from "@/lib/operations";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--ops-font" });
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Avixzon | Cleaning, Labour, Freight & Transport in the GTA",
  applicationName: "Avixzon",
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large" } },
  manifest: "/manifest.webmanifest",
};
export const viewport: Viewport = { themeColor: "#111a2c", width: "device-width", initialScale: 1 };

export default function RootLayout({children}: {children: React.ReactNode}) {
  return <html lang="en-CA"><body className={inter.variable}>
    <JsonLd data={organization} />
    {process.env.NODE_ENV === "production" && <><Script src="https://www.googletagmanager.com/gtag/js?id=AW-18185211647" strategy="afterInteractive" /><Script id="existing-ads-tag" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','AW-18185211647');`}</Script></>}
    <Navbar /><main id="main-content">{children}</main><Footer /><FaqConcierge /><SiteMotion /><SiteAnalytics />
  </body></html>;
}
