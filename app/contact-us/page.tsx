import type { Metadata } from "next";
import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles
} from "lucide-react";
import Footer from "@/components/Footer";
import NavigationHeader from "@/components/NavigationHeader";
import { siteConfig } from "@/lib/site";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    note: "Share your business details and goals."
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.contact.phoneDisplay,
    href: siteConfig.contact.phoneHref,
    note: "Call for direct conversation and consultation."
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: siteConfig.contact.whatsappDisplay,
    href: siteConfig.contact.whatsappHref,
    note: "Best for quick questions and fast response."
  },
  {
    icon: Clock3,
    label: "Office Hours",
    value: siteConfig.contact.officeHours,
    note: "Reach out during working hours for quicker support."
  }
];

export const metadata: Metadata = {
  title: "Contact Us | Navikara",
  description:
    "Contact Navikara by email, phone, WhatsApp, or visit our office details page for business inquiries and consultations."
};

export default function ContactUsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f9fc] text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1f39] via-[#13355b] to-[#1f5379] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,143,0.16),transparent_28%),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:auto,56px_56px,56px_56px]" />
        <div className="relative border-b border-white/10 bg-[#071a31]/22 backdrop-blur-xl">
          <NavigationHeader />
        </div>

        <div className="section-shell relative grid gap-10 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-18">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-blue-50 backdrop-blur">
              <Sparkles className="h-4 w-4 text-orange-300" />
              Contact Navikara
            </div>
            <h1 className="max-w-4xl text-5xl font-bold leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Let&apos;s talk about your <span className="text-orange-300">business growth.</span>
            </h1>
            <p className="max-w-2xl text-xl leading-8 text-blue-100 sm:text-2xl">
              Reach out by email, call, WhatsApp, or visit our office details below.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
            <div className="text-sm uppercase tracking-[0.28em] text-blue-200">
              Quick contact
            </div>
            <div className="mt-5 grid gap-3">
              <QuickAction
                icon={Phone}
                label="Call us"
                value={siteConfig.contact.phoneDisplay}
                href={siteConfig.contact.phoneHref}
              />
              <QuickAction
                icon={MessageCircle}
                label="WhatsApp us"
                value={siteConfig.contact.whatsappDisplay}
                href={siteConfig.contact.whatsappHref}
              />
              <QuickAction
                icon={Mail}
                label="Email us"
                value={siteConfig.contact.email}
                href={`mailto:${siteConfig.contact.email}`}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-12 lg:py-14">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {contactCards.map((card) => (
            <article
              key={card.label}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0f2744] text-orange-300">
                <card.icon className="h-6 w-6" />
              </div>
              <div className="mt-5 text-sm uppercase tracking-[0.22em] text-slate-500">
                {card.label}
              </div>
              {card.href ? (
                <a
                  href={card.href}
                  className="mt-3 block text-2xl font-semibold tracking-[-0.03em] text-slate-900 transition hover:text-orange-600"
                >
                  {card.value}
                </a>
              ) : (
                <div className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-900">
                  {card.value}
                </div>
              )}
              <p className="mt-2 leading-7 text-slate-600">{card.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="section-shell grid gap-8 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700 ring-1 ring-orange-100">
              <MapPin className="h-4 w-4" />
              Office information
            </div>
            <h2 className="text-4xl font-bold tracking-[-0.04em] text-slate-900 sm:text-5xl">
              Visit us or reach out remotely.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Whether you want a consultation, project discussion, or partnership
              conversation, you can contact us using any of the channels below.
            </p>
          </div>

          <div className="rounded-[32px] bg-gradient-to-br from-[#0c213c] to-[#153962] p-6 text-white shadow-[0_30px_80px_rgba(11,31,57,0.24)]">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <div className="text-sm uppercase tracking-[0.24em] text-blue-200">
                  Office address
                </div>
                <div className="mt-4 space-y-2 text-lg leading-8 text-blue-50/90">
                  {siteConfig.contact.address.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-[0.24em] text-blue-200">
                  Office time
                </div>
                <div className="mt-4 text-lg leading-8 text-blue-50/90">
                  {siteConfig.contact.officeHours}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.contact.whatsappHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-600"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Now
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                <Send className="h-5 w-5" />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function QuickAction({
  icon: Icon,
  label,
  value,
  href
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.08] text-orange-300">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-sm uppercase tracking-[0.22em] text-blue-200">{label}</div>
          <div className="mt-1 text-lg font-semibold text-white">{value}</div>
        </div>
      </div>
      <Send className="h-5 w-5 text-white/80" />
    </a>
  );
}
