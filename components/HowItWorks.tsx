import { Rocket, TrendingUp, Zap } from "lucide-react";

const steps = [
  {
    icon: Rocket,
    title: "We shape the offer and website",
    description:
      "First we clarify positioning, pages, and calls to action so the website matches how your team sells."
  },
  {
    icon: Zap,
    title: "We connect lead capture and follow-up",
    description:
      "Forms, WhatsApp entry points, and CRM workflow are set up so every inquiry has a next step."
  },
  {
    icon: TrendingUp,
    title: "We refine based on response",
    description:
      "As traffic and inquiries come in, Navikara adjusts the system to improve quality and conversion."
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20">
      <div className="section-shell">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">How Navikara works</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            A simple path from local business presence to repeatable digital growth.
          </p>
        </div>

        <div className="relative grid gap-8 md:grid-cols-3">
          <div className="absolute left-1/4 right-1/4 top-10 hidden h-px bg-gradient-to-r from-orange-200 via-orange-500 to-orange-200 md:block" />
          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center">
              <div className="relative z-10 mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white shadow-lg">
                {index + 1}
              </div>
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-[24px] bg-slate-900 shadow-xl">
                <step.icon className="h-10 w-10 text-orange-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
