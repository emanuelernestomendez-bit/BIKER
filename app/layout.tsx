import type { Metadata } from "next";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "@fontsource/teko/400.css";
import "@fontsource/teko/500.css";
import "@fontsource/teko/600.css";
import "@fontsource/teko/700.css";

import { Footer } from "@/components/footer";
import { GoogleAnalytics } from "@/components/google-analytics";
import { Navbar } from "@/components/navbar";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { brand } from "@/lib/brand";
import { seoKeywords } from "@/lib/site";

import "./globals.css";

const title = `${brand.name} | Motos, accesorios y repuestos en Santo Domingo`;
const description =
  "Sitio oficial de JC BikerStore. Motos, cascos, guantes, repuestos, accesorios y equipos para riders en Santo Domingo, República Dominicana.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jcbikerstore.com"),
  title: {
    default: title,
    template: `%s | ${brand.name}`
  },
  description,
  keywords: seoKeywords,
  openGraph: {
    title,
    description,
    url: "https://jcbikerstore.com",
    siteName: brand.name,
    locale: "es_DO",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: brand.name
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.svg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-brand-coal font-body text-white antialiased">
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        <Navbar />
        <main className="relative overflow-x-hidden pt-24">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
