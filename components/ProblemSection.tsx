import { AlertCircle, FileX, UserRoundX } from "lucide-react";

const problems = [
  {
    icon: FileX,
    title: "Your brand looks outdated",
    description:
      "Many Patna businesses still rely on word of mouth alone and lose trust online before the first call.",
    color: "from-rose-500 to-orange-500"
  },
  {
    icon: UserRoundX,
    title: "Leads arrive, then go cold",
    description:
      "Without a proper website, form flow, and WhatsApp process, inquiries slip through every week.",
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: AlertCircle,
    title: "Follow-up is too manual",
    description:
      "Teams spend time chasing messages, updating spreadsheets, and forgetting high-intent prospects.",
    color: "from-amber-400 to-yellow-500"
  }
];

export default function ProblemSection() {
  return (
    <section className="bg-white py-20">
      <div className="section-shell">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            The same growth blockers show up again and again
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Navikara is designed for service businesses that know they should grow
            online, but need a team to make it practical and measurable.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${problem.color} shadow-lg`}
              >
                <problem.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{problem.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
