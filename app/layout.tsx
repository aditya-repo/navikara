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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.business.name,
  alternateName: siteConfig.business.shortName,
  url: siteConfig.business.website,
  logo: `${siteConfig.business.website}/favicon_io/android-chrome-512x512.png`,
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phoneDisplay,
  sameAs: [siteConfig.social.instagram, siteConfig.social.linkedin].filter(
    (value) => value && value !== "#"
  ),
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteConfig.contact.email,
      telephone: siteConfig.contact.phoneDisplay,
      areaServed: "IN",
      availableLanguage: ["en", "hi"]
    }
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: `${siteConfig.contact.address[0]}, ${siteConfig.contact.address[1]}`,
    addressLocality: "Patna",
    addressRegion: "Bihar",
    postalCode: "800001",
    addressCountry: "IN"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.business.name,
  url: siteConfig.business.website,
  description: siteConfig.meta.defaultDescription,
  publisher: {
    "@type": "Organization",
    name: siteConfig.business.name
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
