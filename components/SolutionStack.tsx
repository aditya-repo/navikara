import { ArrowRight, Globe, Megaphone, Store, Workflow } from "lucide-react";

const solutions = [
  {
    icon: Globe,
    title: "Website and landing pages",
    description:
      "Conversion-first pages that present your business clearly and make inquiry easy on every screen.",
    features: ["Fast mobile layouts", "SEO-ready structure", "Clear trust signals"],
    color: "from-sky-600 to-blue-800"
  },
  {
    icon: Megaphone,
    title: "Lead generation campaigns",
    description:
      "Ad funnels and inquiry flows tuned for Patna audiences, service categories, and local intent.",
    features: ["Offer-led campaign pages", "Lead forms and CTA mapping", "Source tracking"],
    color: "from-orange-500 to-amber-600"
  },
  {
    icon: Workflow,
    title: "CRM and follow-up automation",
    description:
      "Capture every inquiry, route it quickly, and keep conversations moving with structured follow-ups.",
    features: ["WhatsApp-ready workflows", "Lead status stages", "Reminder sequences"],
    color: "from-emerald-500 to-green-700"
  },
  {
    icon: Store,
    title: "Local credibility systems",
    description:
      "Position your business for trust with case studies, proof blocks, and local-market messaging.",
    features: ["Social proof sections", "Service packaging", "Reporting visibility"],
    color: "from-violet-500 to-indigo-700"
  }
];

export default function SolutionStack() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20">
      <div className="section-shell">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            A complete digital growth stack, not just a pretty homepage
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Navikara combines design, lead capture, and operations so your digital
            presence actually supports sales.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="rounded-[28px] border border-slate-100 bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${solution.color} shadow-lg`}
              >
                <solution.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{solution.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{solution.description}</p>

              <div className="mt-6 space-y-3">
                {solution.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-slate-700">
                    <div className="h-2 w-2 rounded-full bg-orange-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-600">
                Learn more
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
