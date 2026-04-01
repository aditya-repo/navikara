import { BarChart3, Clock3, TrendingUp, Users } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "+180%",
    label: "Lead lift potential",
    description: "For businesses moving from no system to structured inquiry capture.",
    color: "from-emerald-500 to-green-700"
  },
  {
    icon: Users,
    value: "+120%",
    label: "Better response handling",
    description: "Cleaner routing and follow-up means fewer inquiries go unattended.",
    color: "from-sky-500 to-blue-700"
  },
  {
    icon: Clock3,
    value: "8 hrs",
    label: "Saved every week",
    description: "Teams spend less time repeating updates, reminders, and tracking.",
    color: "from-orange-500 to-amber-600"
  },
  {
    icon: BarChart3,
    value: "3x",
    label: "Clearer visibility",
    description: "More confidence in what pages, offers, and campaigns are working.",
    color: "from-violet-500 to-indigo-700"
  }
];

export default function Results() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0d213b] via-[#12365c] to-[#081a30] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,142,54,0.16),transparent_22%),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:auto,52px_52px,52px_52px]" />
      <div className="section-shell relative">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">What this setup is meant to improve</h2>
          <p className="mt-4 text-lg leading-8 text-blue-100">
            Navikara is positioned as a practical growth partner, not a vanity redesign.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur-md transition hover:bg-white/15"
            >
              <div
                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${metric.color}`}
              >
                <metric.icon className="h-7 w-7 text-white" />
              </div>
              <div className="text-4xl font-bold text-white">{metric.value}</div>
              <div className="mt-2 text-lg font-semibold text-orange-200">{metric.label}</div>
              <p className="mt-2 text-sm leading-7 text-blue-100">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
