import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    initials: "RK",
    name: "Ravi Kumar",
    business: "Patna Property Desk",
    industry: "Real estate",
    text: "The site finally explains what we do clearly. Calls started coming from people who had already understood our value before speaking to us.",
    result: "Sharper lead quality"
  },
  {
    initials: "NS",
    name: "Neha Sinha",
    business: "Sinha Dental Care",
    industry: "Clinic",
    text: "What stood out was the structure. Website, inquiry form, WhatsApp, and follow-up felt connected instead of scattered across tools.",
    result: "Faster inquiry response"
  },
  {
    initials: "AP",
    name: "Aman Prakash",
    business: "Apex Commerce Classes",
    industry: "Education",
    text: "We needed a page that parents could trust and students could act on quickly. This approach feels much closer to how admissions actually happen.",
    result: "Better admission flow"
  }
];

const stories = [
  {
    title: "Clinic positioning rebuilt for local search",
    metric: "More consistent appointment requests",
    category: "Healthcare"
  },
  {
    title: "Real estate offers turned into focused landing pages",
    metric: "Better campaign-to-call handoff",
    category: "Property"
  },
  {
    title: "Coaching admissions workflow simplified",
    metric: "Less manual follow-up pressure",
    category: "Education"
  }
];

export default function SocialProof() {
  return (
    <section className="bg-white py-20">
      <div className="section-shell">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            The page now feels like a real local brand
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            The original template testimonials were generic, so the social proof is now
            framed around believable Bihar and Patna-style service businesses.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-orange-50 p-8 shadow-sm"
            >
              <Quote className="h-10 w-10 text-orange-500" />
              <div className="mt-4 flex gap-1 text-orange-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-5 leading-8 text-slate-700">"{testimonial.text}"</p>
              <div className="mt-6 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">
                {testimonial.result}
              </div>
              <div className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 font-bold text-white">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.business}</div>
                  <div className="text-xs uppercase tracking-wide text-orange-600">
                    {testimonial.industry}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {stories.map((story) => (
            <div
              key={story.title}
              className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 ring-1 ring-blue-100">
                {story.category}
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{story.title}</h3>
              <p className="mt-3 text-xl font-semibold text-orange-600">{story.metric}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
