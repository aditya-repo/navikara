import type { Metadata } from "next";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.business.website),
  title: siteConfig.meta.defaultTitle,
  description: siteConfig.meta.defaultDescription,
  openGraph: {
    title: siteConfig.business.name,
    description: siteConfig.meta.openGraphDescription,
    url: siteConfig.business.website,
    siteName: siteConfig.business.name
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
