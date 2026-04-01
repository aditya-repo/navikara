import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://navikara.com"),
  title: "Navikara | Digital Growth Partner for Patna Businesses",
  description:
    "Navikara helps Patna-based businesses launch modern websites, lead funnels, CRM workflows, and local growth systems.",
  openGraph: {
    title: "Navikara",
    description:
      "Modern digital growth systems for Patna businesses, startups, clinics, institutes, and service brands.",
    url: "https://navikara.com",
    siteName: "Navikara"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
