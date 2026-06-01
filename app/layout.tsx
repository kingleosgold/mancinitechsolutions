import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://mancinitechsolutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mancini Tech Solutions — Own your website. Run it by talking to AI.",
  description:
    "Stop renting your website from Wix, Squarespace, or Shopify. We build you a site you own outright, and you change anything on it just by asking, in plain English.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Stop renting your website. Own it, and run it by talking to AI.",
    description:
      "We build you a website you own outright, and you change anything on it just by asking, in plain English.",
    url: siteUrl,
    siteName: "Mancini Tech Solutions",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mancini Tech Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stop renting your website. Own it, and run it by talking to AI.",
    description:
      "We build you a website you own outright, and you change anything on it just by asking, in plain English.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="bg-bg font-sans text-white antialiased">{children}</body>
    </html>
  );
}
