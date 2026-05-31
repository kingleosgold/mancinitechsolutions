import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
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
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
