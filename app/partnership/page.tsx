import type { Metadata } from "next";
import { ArrowRight, Check, Handshake, MessageCircle, Sparkles, Users } from "lucide-react";
import Footer from "@/components/Footer";
import NavigationHeader from "@/components/NavigationHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Affiliate Partnership | Navikara",
  description:
    "Become a Navikara affiliate partner, refer clients, and earn a 10-15% revenue share on successful sales."
};

export default function PartnershipPage() {
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
              {siteConfig.partnership.title}
            </div>
            <h1 className="max-w-4xl text-5xl font-bold leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Bring clients. <span className="text-orange-300">Earn revenue share.</span>
            </h1>
            <p className="max-w-2xl text-xl leading-8 text-blue-100 sm:text-2xl">
              {siteConfig.partnership.summary}
            </p>
          </div>

          <div className="rounded-[32px] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
            <div className="text-sm uppercase tracking-[0.28em] text-blue-200">
              Partner reward
            </div>
            <div className="mt-4 text-6xl font-bold tracking-[-0.05em] text-white">
              {siteConfig.partnership.revenueShare}
            </div>
            <div className="mt-2 text-blue-100">Revenue share on each closed sale</div>
            <div className="mt-5 space-y-3">
              {siteConfig.partnership.benefits.map((item) => (
                <div key={item} className="flex items-start gap-3 border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
                  <Check className="mt-0.5 h-5 w-5 flex-none text-orange-300" />
                  <p className="text-sm leading-7 text-blue-50/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-12 lg:py-14">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Users,
              title: "You bring the opportunity",
              text: "Refer business owners, founders, service providers, or brands who need digital growth systems."
            },
            {
              icon: Handshake,
              title: "We handle the execution",
              text: "Navikara takes care of consultation, proposal, delivery, and ongoing communication."
            },
            {
              icon: MessageCircle,
              title: "You earn on success",
              text: "When the deal closes successfully, you receive your 10-15% revenue share."
            }
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0f2744] text-orange-300">
                  <item.icon className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-900">
                  {item.title}
                </h2>
              </div>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="section-shell grid gap-8 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700 ring-1 ring-orange-100">
              <Handshake className="h-4 w-4" />
              Why partner with Navikara
            </div>
            <h2 className="text-4xl font-bold tracking-[-0.04em] text-slate-900 sm:text-5xl">
              A simple affiliate model built for long-term collaboration.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              This partnership works well for freelancers, marketing consultants,
              agency owners, community connectors, and anyone who already knows
              businesses that need stronger digital systems.
            </p>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              You do not need to manage delivery. You just connect the right
              client, and we take care of the rest.
            </p>
          </div>

          <div className="rounded-[32px] bg-gradient-to-br from-[#0c213c] to-[#153962] p-6 text-white shadow-[0_30px_80px_rgba(11,31,57,0.18)]">
            <div className="text-sm uppercase tracking-[0.28em] text-blue-200">
              Ideal partners
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Freelancers and independent consultants",
                "Marketing agencies and media buyers",
                "Business coaches and advisors",
                "Local network partners and introducers"
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-base leading-7 text-blue-50/90"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#091423] text-white">
        <div className="section-shell py-12 lg:py-14">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 lg:p-8">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.26em] text-orange-200">
                Ready to partner?
              </div>
              <h2 className="mt-3 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                Start referring clients and earn on every successful sale.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                If you already know businesses that need websites, lead systems,
                CRM setup, automation, or digital expansion support, let&apos;s talk.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact-us"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-600"
              >
                Become a Partner
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a
                href={siteConfig.contact.whatsappHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

