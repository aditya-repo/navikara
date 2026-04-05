import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

const links = {
  services: ["Web presence", "Lead funnels", "CRM workflows", "Growth systems"],
  sectors: ["Real estate", "Clinics", "Institutes", "Professional services"],
  company: ["About Navikara", "Work process", "Pricing", "Contact"],
  legal: ["Privacy Policy", "Terms & Conditions", "Refund Policy"]
};

export default function Footer() {
  return (
    <footer className="bg-[#091423] text-slate-300">
      <div className="section-shell py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500 text-lg font-bold text-white">
                N
              </div>
              <div>
                <div className="text-xl font-bold text-white">{siteConfig.business.name}</div>
                <div className="text-sm text-slate-400">{siteConfig.business.websiteLabel}</div>
              </div>
            </div>
            <p className="mt-5 max-w-md leading-7 text-slate-400">
              {siteConfig.business.tagline}
            </p>
          </div>

          <FooterColumn title="Services" items={links.services} />
          <FooterColumn title="Sectors" items={links.sectors} />
          <FooterColumn title="Company" items={links.company} />
          <FooterColumn title="Legal" items={links.legal} />
        </div>

        <div className="mt-12 grid gap-6 border-t border-white/10 py-8 md:grid-cols-4">
          <InfoBlock
            icon={Mail}
            label="Email"
            value={siteConfig.contact.email}
            href={`mailto:${siteConfig.contact.email}`}
          />
          <InfoBlock
            icon={Phone}
            label="Phone"
            value={siteConfig.contact.phoneDisplay}
            href={siteConfig.contact.phoneHref}
          />
          <InfoBlock
            icon={MessageCircle}
            label="WhatsApp"
            value={siteConfig.contact.whatsappDisplay}
            href={siteConfig.contact.whatsappHref}
          />
          <InfoBlock icon={MapPin} label="Coverage" value={siteConfig.business.coverage} />
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>&copy; 2026 {siteConfig.business.name}. Built for businesses growing across India.</div>
          <div className="flex items-center gap-3">
            <SocialIcon icon={MessageCircle} href={siteConfig.social.whatsapp} />
            <SocialIcon icon={Instagram} href={siteConfig.social.instagram} />
            <SocialIcon icon={Linkedin} href={siteConfig.social.linkedin} />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
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
  icon: Icon,
  label,
  value,
  href
}: {
  icon: typeof Mail;
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
      <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-orange-400">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="font-semibold text-white">{label}</div>
        {content}
      </div>
    </div>
  );
}

function SocialIcon({ icon: Icon, href }: { icon: typeof Mail; href: string }) {
  return (
    <a
      href={href}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-300 transition hover:bg-orange-500 hover:text-white"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}
