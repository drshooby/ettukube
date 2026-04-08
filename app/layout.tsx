import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://ettukube.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ettukube",
    template: "%s · ettukube",
  },
  description:
    "Personal domain of a solo developer. A holding page—nothing grand on display.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "ettukube",
    title: "ettukube",
    description:
      "Personal domain of a solo developer. Shakespeare, clusters, and hobby experiments.",
  },
  twitter: {
    card: "summary",
    title: "ettukube",
    description:
      "Personal domain of a solo developer. Shakespeare, clusters, and hobby experiments.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
