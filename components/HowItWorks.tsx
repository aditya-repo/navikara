import {
  ArrowRight,
  MessageCircleMore,
  Rocket,
  ScanSearch,
  Workflow
} from "lucide-react";

const pillars = [
  {
    icon: ScanSearch,
    iconClassName: "bg-gradient-to-br from-slate-900 to-slate-800 text-white",
    title: "Lead-Ready Website",
    description:
      "Mobile-first pages built to convert visitors into WhatsApp or call inquiries."
  },
  {
    icon: MessageCircleMore,
    iconClassName: "bg-gradient-to-br from-orange-500 to-orange-400 text-white",
    title: "WhatsApp Lead System",
    description:
      "One-click entry, auto responses, and follow-ups so you never miss a lead."
  },
  {
    icon: Workflow,
    iconClassName: "bg-gradient-to-br from-sky-500 to-cyan-400 text-white",
    title: "CRM & Tracking",
    description:
      "Track all inquiries, follow-ups, and conversions in one simple dashboard."
  },
  {
    icon: Rocket,
    iconClassName: "bg-gradient-to-br from-emerald-500 to-green-400 text-white",
    title: "Growth Optimization",
    description:
      "Continuous improvements to bring better quality leads and higher conversions."
  }
];

const results = [
  { value: "+42 Leads", label: "in 30 days for a clinic" },
  { value: "3x Inquiries", label: "for a real estate agent" },
  { value: "Rs. 2.5L Revenue", label: "from website in first month" }
];

export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-14 lg:py-16">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-5xl">
            Everything you need to get consistent leads, done for you
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            No tools to learn. No team to hire. We build and manage your complete growth system.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-[28px] border border-white/80 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.1)]"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${pillar.iconClassName}`}
                >
                  <pillar.icon className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-900">
                  {pillar.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">{pillar.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[32px] bg-gradient-to-br from-[#0c213c] to-[#153962] p-6 text-white shadow-[0_30px_80px_rgba(11,31,57,0.18)] lg:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h3 className="text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
                Real Results for Local Businesses
              </h3>
              <p className="mt-2 text-blue-100">
                Systems built for trust, speed, and measurable conversion.
              </p>
            </div>
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-600"
            >
              Get Free Growth Audit
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {results.map((item) => (
              <div
                key={item.value}
                className="rounded-[24px] border border-white/10 bg-white/[0.06] p-5"
              >
                <p className="text-2xl font-bold tracking-[-0.03em] text-white">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-blue-100">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

