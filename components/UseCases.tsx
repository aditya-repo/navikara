import { Building2, GraduationCap, HeartPulse, Home } from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "Professional services",
    description: "Agencies, consultants, architects, and niche local service brands.",
    tag: "High trust needed",
    color: "from-slate-700 to-slate-900"
  },
  {
    icon: Home,
    title: "Real estate",
    description: "Builders, brokers, and property advisors who need constant inquiry flow.",
    tag: "Lead speed matters",
    color: "from-blue-500 to-indigo-700"
  },
  {
    icon: HeartPulse,
    title: "Clinics and wellness",
    description: "Practices that need appointment requests, trust signals, and cleaner follow-up.",
    tag: "Local search ready",
    color: "from-emerald-500 to-green-700"
  },
  {
    icon: GraduationCap,
    title: "Institutes and educators",
    description: "Coaching centers and training brands that want admissions without manual chaos.",
    tag: "Admissions support",
    color: "from-orange-500 to-amber-600"
  }
];

export default function UseCases() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20">
      <div className="section-shell">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Built for modern Patna businesses
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            The template was adapted into a Navikara landing page focused on local
            service categories that benefit most from digital trust and lead systems.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="h-full rounded-[28px] border border-white/80 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${industry.color} text-white`}
              >
                <industry.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{industry.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{industry.description}</p>
              <div className="mt-5 inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700 ring-1 ring-orange-100">
                {industry.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
