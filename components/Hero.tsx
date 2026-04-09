import { ArrowRight, MessageCircleMore, ScanSearch, Sparkles, TrendingUp, Workflow } from "lucide-react";
import NavigationHeader from "@/components/NavigationHeader";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1f39] via-[#13355b] to-[#1f5379] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,143,0.14),transparent_30%),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:auto,56px_56px,56px_56px]" />
      <div className="relative border-b border-white/10 bg-[#071a31]/22 backdrop-blur-xl">
        <NavigationHeader />
      </div>
      <div className="section-shell relative py-14 lg:py-18">
        <div className="hero-grid">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-blue-50 backdrop-blur">
              <Sparkles className="h-4 w-4 text-orange-300" />
              Complete digital setup for growth-focused businesses
            </div>

            <div className="space-y-4">
              <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                We put your business online
                <span className="text-orange-300">{" "}and bring you customers.</span>
              </h1>
              <p className="max-w-2xl text-xl leading-8 text-blue-100 sm:text-2xl">
                Complete digital setup for local businesses.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.contact.phoneHref}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow-xl shadow-orange-950/30 transition hover:bg-orange-600"
              >
                Call
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                See Pricing
              </a>
            </div>

          </div>

          <div className="relative hidden lg:block">
            <div className="rounded-[28px] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.25em] text-blue-200">
                    Business growth system
                  </div>
                  <div className="mt-1 text-2xl font-semibold">Everything working together</div>
                </div>
                <div className="rounded-full bg-emerald-400/15 p-3">
                  <TrendingUp className="h-6 w-6 text-emerald-300" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Leads", value: "284", change: "+34%" },
                  { label: "Follow-ups", value: "61", change: "+18%" },
                  { label: "Revenue", value: "INR 8.2L", change: "+26%" }
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/15 bg-white/10 p-3"
                  >
                    <div className="text-xs uppercase tracking-wide text-blue-200">
                      {item.label}
                    </div>
                    <div className="mt-2 text-2xl font-bold text-white">
                      {item.value}
                    </div>
                    <div className="mt-1 text-sm text-emerald-300">{item.change}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-3xl border border-white/15 bg-[#0d2744]/70 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="font-semibold text-white">What you get</div>
                  <div className="text-sm text-orange-200">Built-in</div>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      title: "High-converting website designed for trust",
                      time: "Launch ready",
                      icon: ScanSearch
                    },
                    {
                      title: "WhatsApp and call inquiries routed instantly",
                      time: "Always on",
                      icon: MessageCircleMore
                    },
                    {
                      title: "CRM pipeline and follow-up automation configured",
                      time: "Conversion focused",
                      icon: Workflow
                    }
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center gap-3 rounded-2xl bg-white/5 p-3"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 via-amber-300 to-orange-200 text-slate-950 shadow-lg shadow-orange-950/20">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white">{item.title}</div>
                        <div className="text-xs text-blue-200">{item.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-orange-500/40 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-sky-400/25 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
