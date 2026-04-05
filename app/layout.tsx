import type { Metadata } from "next";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://navikara.com"),
  title: "Navikara | Digital Growth Systems for Modern Businesses",
  description:
    "Navikara helps businesses launch modern websites, lead funnels, CRM workflows, and scalable digital growth systems.",
  openGraph: {
    title: "Navikara",
    description:
      "Modern digital growth systems for businesses, startups, clinics, institutes, and service brands.",
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
      <body>
        {children}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
