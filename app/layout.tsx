import type { Metadata } from "next";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.business.website),
  title: siteConfig.meta.defaultTitle,
  description: siteConfig.meta.defaultDescription,
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [{ url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon_io/favicon.ico"]
  },
  manifest: "/favicon_io/site.webmanifest",
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
