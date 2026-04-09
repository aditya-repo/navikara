import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import BrandMark from "@/components/BrandMark";
import { IconFrame, SocialGlyph } from "@/components/LandingIcons";

export default function Footer() {
  return (
    <footer className="bg-[#091423] text-slate-300">
      <div className="section-shell py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <BrandMark />
              <div>
                <div className="text-xl font-bold text-white">{siteConfig.business.name}</div>
                <div className="text-sm text-slate-400">{siteConfig.business.websiteLabel}</div>
              </div>
            </div>
            <p className="mt-5 max-w-md leading-7 text-slate-400">
              {siteConfig.business.tagline}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-10 md:col-span-1 md:grid-cols-2 lg:col-span-4 lg:grid-cols-4">
            <FooterColumn title="Services" items={siteConfig.footer.services} />
            <FooterColumn title="Sectors" items={siteConfig.footer.sectors} />
            <FooterColumn title="Company" items={siteConfig.footer.company} />
            <FooterColumn title="Legal" items={siteConfig.footer.legal} />
          </div>
        </div>

        <div className="mt-12 grid gap-6 border-t border-white/10 py-8 md:grid-cols-4">
          <InfoBlock
            icon="mail"
            label="Email"
            value={siteConfig.contact.email}
            href={`mailto:${siteConfig.contact.email}`}
          />
          <InfoBlock
            icon="phone"
            label="Phone"
            value={siteConfig.contact.phoneDisplay}
            href={siteConfig.contact.phoneHref}
          />
          <InfoBlock
            icon="whatsapp"
            label="WhatsApp"
            value={siteConfig.contact.whatsappDisplay}
            href={siteConfig.contact.whatsappHref}
          />
          <InfoBlock icon="location" label="Coverage" value={siteConfig.business.coverage} />
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>&copy; 2026 {siteConfig.business.name}. {siteConfig.footer.copyright}</div>
          <div className="flex items-center gap-3">
            <SocialIcon icon="whatsapp" href={siteConfig.social.whatsapp} />
            <SocialIcon icon="instagram" href={siteConfig.social.instagram} />
            <SocialIcon icon="linkedin" href={siteConfig.social.linkedin} />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: readonly string[] }) {
  const linkMap: Record<string, string> = {
    "About Navikara": "/about-us",
    "Pricing": "/pricing",
    "Contact": "/contact-us",
    "Privacy Policy": "/privacy-policy",
    "Terms & Conditions": "/terms-and-conditions",
    "Refund Policy": "/refund-policy"
  };

  return (
    <div>
      <h3 className="font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm text-slate-400">
        {items.map((item) => (
          <li key={item}>
            {linkMap[item] ? (
              <Link href={linkMap[item]} className="transition hover:text-orange-300">
                {item}
              </Link>
            ) : (
              item
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function InfoBlock({
  icon,
  label,
  value,
  href
}: {
  icon: "mail" | "phone" | "whatsapp" | "location";
  label: string;
  value: string;
  href?: string;
}) {
  const content = href ? (
    <a href={href} className="text-sm text-slate-300 transition hover:text-orange-300">
      {value}
    </a>
  ) : (
    <p className="text-sm text-slate-300">{value}</p>
  );

  return (
    <div className="flex items-start gap-3">
      <IconFrame className="mt-0.5 h-10 w-10 shrink-0 rounded-xl" tone="navy">
        <SocialGlyph kind={icon} className="h-5 w-5" />
      </IconFrame>
      <div>
        <div className="font-semibold text-white">{label}</div>
        {content}
      </div>
    </div>
  );
}

function SocialIcon({
  icon,
  href
}: {
  icon: "instagram" | "linkedin" | "whatsapp";
  href: string;
}) {
  return (
    <a
      href={href}
      className="text-slate-300 transition hover:text-white"
    >
      <IconFrame className="h-10 w-10 rounded-full" tone="sunset">
        <SocialGlyph kind={icon} className="h-5 w-5" />
      </IconFrame>
    </a>
  );
}
