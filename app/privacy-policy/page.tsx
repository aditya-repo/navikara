import type { Metadata } from "next";
import Footer from "@/components/Footer";
import NavigationHeader from "@/components/NavigationHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy | Navikara",
  description: "Read the Navikara privacy policy covering data collection, usage, and communication practices."
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f9fc] text-slate-900">
      <LegalHero title="Privacy Policy" subtitle="How we collect, use, and protect your information." />
      <section className="section-shell py-12 lg:py-14">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:p-8">
          <LegalBlock
            title="Information we collect"
            body={`We may collect your name, phone number, email address, business information, and any details you share with ${siteConfig.business.name} through calls, WhatsApp, forms, or email.`}
          />
          <LegalBlock
            title="How we use information"
            body="We use this information to respond to inquiries, understand project requirements, send proposals, provide services, and communicate about ongoing or future business engagement."
          />
          <LegalBlock
            title="Data sharing"
            body="We do not sell your personal information. We may share limited information with trusted tools or service providers only when required to operate communication, payments, hosting, analytics, or project delivery."
          />
          <LegalBlock
            title="Data protection"
            body="We take reasonable steps to protect your information, but no digital system can guarantee absolute security. By contacting us, you acknowledge this practical limitation."
          />
          <LegalBlock
            title="Contact"
            body={`For privacy-related questions, contact us at ${siteConfig.contact.email} or ${siteConfig.contact.phoneDisplay}.`}
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}

function LegalHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1f39] via-[#13355b] to-[#1f5379] text-white">
      <div className="relative border-b border-white/10 bg-[#071a31]/22 backdrop-blur-xl">
        <NavigationHeader />
      </div>
      <div className="section-shell py-14 lg:py-18">
        <h1 className="text-5xl font-bold tracking-[-0.05em] sm:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-xl leading-8 text-blue-100">{subtitle}</p>
      </div>
    </section>
  );
}

function LegalBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-b border-slate-200 py-5 last:border-b-0 last:pb-0 first:pt-0">
      <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-900">{title}</h2>
      <p className="mt-3 leading-7 text-slate-600">{body}</p>
    </div>
  );
}
