import {
  Check,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import {
  CommerceGlyph,
  GrowthGlyph,
  IconFrame,
  PresenceGlyph,
  SettingsGlyph
} from "@/components/LandingIcons";

const iconMap = {
  Globe: PresenceGlyph,
  TrendingUp: GrowthGlyph,
  Settings2: SettingsGlyph,
  ShoppingCart: CommerceGlyph
};

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gradient-to-br from-slate-50 via-white to-orange-50 py-14 lg:py-16">
      <div className="section-shell">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            {siteConfig.pricing.intro}
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.pricingPlans.map((plan) => {
            const Icon = iconMap[plan.icon];

            return (
              <div
                key={plan.name}
                className={`relative rounded-[28px] border bg-white p-6 shadow-xl ${
                  plan.featured
                    ? "border-orange-300 ring-2 ring-orange-300/60"
                    : "border-slate-200"
                }`}
              >
                {plan.featured ? (
                  <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-orange-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                    <Sparkles className="h-3.5 w-3.5" />
                    Most Popular
                  </div>
                ) : null}

                <div className="flex items-center gap-4 pr-16">
                  <IconFrame
                    className="h-12 w-12 shrink-0"
                    tone={plan.featured ? "sunset" : plan.icon === "ShoppingCart" ? "emerald" : "navy"}
                  >
                    <Icon className="h-5 w-5" />
                  </IconFrame>
                  <h3 className="text-2xl font-bold tracking-[-0.03em] text-slate-900">
                    {plan.name}
                  </h3>
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


