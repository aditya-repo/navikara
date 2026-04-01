import { ArrowRight, MapPin, Sparkles, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1f39] via-[#13355b] to-[#1f5379] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,143,0.14),transparent_30%),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:auto,56px_56px,56px_56px]" />
      <div className="section-shell relative py-20 lg:py-32">
        <div className="hero-grid">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-blue-50 backdrop-blur">
              <Sparkles className="h-4 w-4 text-orange-300" />
              Patna-first digital systems for ambitious local brands
            </div>

            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-400/15 px-3 py-1 text-sm text-orange-100">
                <MapPin className="h-4 w-4" />
                Based in Patna, Bihar
              </div>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Navikara builds the{" "}
                <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-amber-200 bg-clip-text text-transparent">
                  website, leads, and follow-up engine
                </span>{" "}
                your business needs to grow.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-blue-100 sm:text-xl">
                From launch-ready websites to WhatsApp funnels and CRM workflows,
                Navikara helps Patna businesses turn digital traffic into real
                inquiries and repeat customers.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://navikara.com"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow-xl shadow-orange-950/30 transition hover:bg-orange-600"
              >
                Visit navikara.com
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Explore Plans
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-3 text-sm text-blue-100">
              <div>
                <div className="text-2xl font-bold text-white">50+</div>
                Patna businesses supported
              </div>
              <div>
                <div className="text-2xl font-bold text-white">7 days</div>
                Typical launch window
              </div>
              <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                Lead capture readiness
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="rounded-[28px] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.25em] text-blue-200">
                    Navikara dashboard
                  </div>
                  <div className="mt-1 text-2xl font-semibold">Growth snapshot</div>
                </div>
                <div className="rounded-full bg-emerald-400/15 p-3">
                  <TrendingUp className="h-6 w-6 text-emerald-300" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Leads", value: "284", change: "+34%" },
                  { label: "Calls booked", value: "61", change: "+18%" },
                  { label: "Revenue", value: "INR 8.2L", change: "+26%" }
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/15 bg-white/10 p-4"
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

              <div className="mt-5 rounded-3xl border border-white/15 bg-[#0d2744]/70 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div className="font-semibold text-white">Pipeline activity</div>
                  <div className="text-sm text-orange-200">Live updates</div>
                </div>
                <div className="space-y-3">
                  {[
                    ["Website inquiry from Boring Road clinic", "2 mins ago"],
                    ["WhatsApp lead assigned to sales", "7 mins ago"],
                    ["Patna City coaching campaign converted", "14 mins ago"]
                  ].map(([title, time]) => (
                    <div
                      key={title}
                      className="flex items-center gap-3 rounded-2xl bg-white/5 p-3"
                    >
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-amber-300" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white">{title}</div>
                        <div className="text-xs text-blue-200">{time}</div>
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
