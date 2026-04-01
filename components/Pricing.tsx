import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Launch",
    price: "INR 14,999",
    period: "/project start",
    description: "A polished one-page presence for brands that need to look credible fast.",
    features: [
      "Landing page design",
      "Mobile-first layout",
      "Core inquiry CTA setup",
      "Brand-aligned copy blocks",
      "Basic SEO structure"
    ],
    cta: "Start launch",
    featured: false,
    color: "from-sky-500 to-blue-700"
  },
  {
    name: "Growth",
    price: "INR 29,999",
    period: "/month",
    description: "For teams that want leads, follow-up flow, and a stronger digital sales process.",
    features: [
      "Everything in Launch",
      "Lead funnel pages",
      "WhatsApp and CRM flow",
      "Campaign landing support",
      "Reporting and optimization"
    ],
    cta: "Choose growth",
    featured: true,
    color: "from-orange-500 to-amber-600"
  },
  {
    name: "Scale",
    price: "Custom",
    period: "/engagement",
    description: "For multi-service brands that need deeper automation, packaging, and support.",
    features: [
      "Everything in Growth",
      "Multi-page web system",
      "Custom workflow design",
      "Local content expansion",
      "Ongoing growth consulting"
    ],
    cta: "Talk to Navikara",
    featured: false,
    color: "from-violet-500 to-indigo-700"
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gradient-to-br from-slate-50 via-white to-orange-50 py-20">
      <div className="section-shell">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Pricing framed for how local businesses usually buy
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            The original template pricing is now renamed and reworded for Navikara&apos;s
            website-plus-growth positioning.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-[30px] border bg-white p-8 shadow-xl ${
                plan.featured
                  ? "border-orange-300 ring-2 ring-orange-300/70 md:-translate-y-2"
                  : "border-slate-200"
              }`}
            >
              {plan.featured ? (
                <div className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  <Sparkles className="h-3.5 w-3.5" />
                  Most chosen
                </div>
              ) : null}
              <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
              <p className="mt-3 leading-7 text-slate-600">{plan.description}</p>
              <div className="mt-6">
                <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                <span className="ml-2 text-slate-500">{plan.period}</span>
              </div>
              <button
                className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-6 py-4 font-semibold transition ${
                  plan.featured
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                }`}
              >
                {plan.cta}
              </button>
              <div className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br ${plan.color}`}
                    >
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
