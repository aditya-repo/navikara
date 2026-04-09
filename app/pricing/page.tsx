import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  Globe,
  Settings2,
  ShoppingCart,
  Sparkles,
  TrendingUp
} from "lucide-react";
import Footer from "@/components/Footer";
import NavigationHeader from "@/components/NavigationHeader";
import { siteConfig } from "@/lib/site-config";

const iconMap = {
  Globe,
  TrendingUp,
  Settings2,
  ShoppingCart
};

export const metadata: Metadata = {
  title: "Pricing | Navikara",
  description:
    "Simple, transparent pricing for websites, lead generation systems, business automation, and online sales systems."
};

export default function PricingPage() {
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
              Pricing
            </div>
            <h1 className="max-w-4xl text-5xl font-bold leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Simple, transparent pricing <span className="text-orange-300">for growth.</span>
            </h1>
            <p className="max-w-2xl text-xl leading-8 text-blue-100 sm:text-2xl">
              {siteConfig.pricing.intro}
            </p>
          </div>

          <div className="rounded-[32px] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
            <div className="text-sm uppercase tracking-[0.28em] text-blue-200">
              Why this works
            </div>
            <div className="mt-5 space-y-3">
              {siteConfig.pricingPsychology.map((item) => (
                <div key={item} className="flex items-start gap-3 border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
                  <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="text-sm leading-7 text-blue-50/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-12 lg:py-14">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.pricingPlans.map((plan) => {
            const Icon = iconMap[plan.icon];

            return (
              <article
                key={plan.name}
                className={`relative rounded-[28px] border bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] ${
                  plan.featured ? "border-orange-300 ring-2 ring-orange-300/60" : "border-slate-200"
                }`}
              >
                {plan.featured ? (
                  <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-orange-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                    <Sparkles className="h-3.5 w-3.5" />
                    Most Popular
                  </div>
                ) : null}

                <div className="flex items-center gap-4 pr-16">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0f2744] text-orange-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-[-0.03em] text-slate-900">
                    {plan.name}
                  </h2>
                </div>
                <p className="mt-3 leading-7 text-slate-600">{plan.description}</p>

                <div className="mt-5">
                  <div className="flex items-end gap-3">
                    <span className="text-xl text-slate-400 line-through">{plan.originalPrice}</span>
                    <span className="text-4xl font-bold tracking-[-0.04em] text-slate-900">
                      {plan.offerPrice}
                    </span>
                  </div>
                  <div className="mt-1 text-sm font-medium uppercase tracking-[0.22em] text-orange-600">
                    {plan.tag}
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800">
                  {plan.bestFor}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="section-shell py-12 lg:py-14">
          <div className="rounded-[32px] bg-gradient-to-br from-[#0c213c] to-[#153962] p-6 text-white shadow-[0_30px_80px_rgba(11,31,57,0.18)] lg:p-8">
            <p className="max-w-4xl text-lg leading-8 text-blue-50/90">{siteConfig.pricing.note}</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-lg font-medium text-white">{siteConfig.pricing.assist}</div>
                <div className="mt-1 text-blue-100">Book a Free Strategy Call</div>
              </div>
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-600"
              >
                Book a Free Strategy Call
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


