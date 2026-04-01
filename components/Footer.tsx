import {
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone
} from "lucide-react";

const links = {
  services: ["Web presence", "Lead funnels", "CRM workflows", "Local growth systems"],
  sectors: ["Real estate", "Clinics", "Institutes", "Professional services"],
  company: ["About Navikara", "Work process", "Pricing", "Contact"],
  support: ["Discovery calls", "Project onboarding", "Content updates", "Launch support"]
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
                <div className="text-xl font-bold text-white">Navikara</div>
                <div className="text-sm text-slate-400">navikara.com</div>
              </div>
            </div>
            <p className="mt-5 max-w-md leading-7 text-slate-400">
              Patna-based digital growth partner for businesses that want a stronger
              web presence, cleaner lead flow, and more reliable follow-up systems.
            </p>
            <a
              href="https://navikara.com"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-500"
            >
              <Globe className="h-5 w-5" />
              Visit website
            </a>
          </div>

          <FooterColumn title="Services" items={links.services} />
          <FooterColumn title="Sectors" items={links.sectors} />
          <FooterColumn title="Company" items={links.company} />
          <FooterColumn title="Support" items={links.support} />
        </div>

        <div className="mt-12 grid gap-6 border-t border-white/10 py-8 md:grid-cols-3">
          <InfoBlock
            icon={Mail}
            label="Email"
            value="hello@navikara.com"
            href="mailto:hello@navikara.com"
          />
          <InfoBlock
            icon={Phone}
            label="Phone"
            value="+91 62000 00000"
            href="tel:+9162000000000"
          />
          <InfoBlock icon={MapPin} label="Location" value="Patna, Bihar" />
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Navikara. Crafted for businesses growing from Patna outward.</div>
          <div className="flex items-center gap-3">
            <SocialIcon icon={MessageCircle} />
            <SocialIcon icon={Instagram} />
            <SocialIcon icon={Linkedin} />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm text-slate-400">
        {items.map((item) => (
          <li key={item}>{item}</li>
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

function SocialIcon({ icon: Icon }: { icon: typeof Mail }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-300 transition hover:bg-orange-500 hover:text-white">
      <Icon className="h-5 w-5" />
    </div>
  );
}
