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
  title:
    "Mancini Tech Solutions | AI Consulting for Business. Adoption, Automation, Custom Software.",
  description:
    "AI consulting firm run by Jon Mancini, 14 years of enterprise IT across Apple, Netflix, Disney, Raytheon, and Kuehne + Nagel. We find where AI fits your business, build the automation, and train your people until it sticks.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Your business has AI. Nobody's using it.",
    description:
      "AI consulting firm run by Jon Mancini. We find where AI fits your business, build the automation, and train your people until it sticks.",
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
    title: "Your business has AI. Nobody's using it.",
    description:
      "AI consulting firm run by Jon Mancini. We find where AI fits your business, build the automation, and train your people until it sticks.",
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
