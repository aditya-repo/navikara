import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeIndianRupee,
  Bot,
  Building2,
  ChevronRight,
  Cpu,
  Globe2,
  Landmark,
  Rocket,
  Search,
  ShieldAlert,
  Smartphone,
  WalletCards
} from "lucide-react";
import Footer from "@/components/Footer";
import NavigationHeader from "@/components/NavigationHeader";

const pillars = [
  {
    icon: Rocket,
    title: "Built for growth, not decoration",
    text: "We design systems that help businesses get discovered, capture demand, and convert attention into revenue."
  },
  {
    icon: Cpu,
    title: "Engineered with modern technology",
    text: "We build with Next.js, Node.js, automation systems, and AI-assisted workflows."
  },
  {
    icon: Building2,
    title: "Made for real operations",
    text: "Our work is built for real users, leads, customer journeys, and business processes."
  }
];

const stats = [
  { value: "800M+", label: "Internet users and growing", icon: Globe2 },
  { value: "UPI", label: "Driving digital payment behavior nationwide", icon: WalletCards },
  { value: "MSMEs", label: "Moving online faster than ever before", icon: BadgeIndianRupee }
];

const challenges = [
  "No proper online presence",
  "Poor visibility on Google",
  "No structured way to capture leads",
  "No follow-up or customer retention system"
];

const threats = [
  {
    icon: Smartphone,
    title: "Large platforms move fast",
    text: "Funded platforms are spending aggressively, training customers to transact inside their ecosystems."
  },
  {
    icon: Search,
    title: "They own visibility",
    text: "When they dominate discovery, smaller businesses lose attention before the customer even makes contact."
  },
  {
    icon: ShieldAlert,
    title: "They control the relationship",
    text: "The platform becomes the habit, the brand, and the repeat touchpoint instead of the business."
  }
];

const growthSystem = [
  "High-converting websites and landing pages",
  "Google visibility and marketplace presence",
  "WhatsApp lead funnels",
  "CRM and follow-up systems"
];

export const metadata: Metadata = {
  title: "About Navikara",
  description:
    "Learn how Navikara builds complete digital growth systems for businesses that want stronger visibility, better lead capture, and long-term online growth."
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f9fc] text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1f39] via-[#13355b] to-[#1f5379] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,143,0.16),transparent_28%),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:auto,56px_56px,56px_56px]" />
        <div className="relative border-b border-white/10 bg-[#071a31]/22 backdrop-blur-xl">
          <NavigationHeader />
        </div>

        <div className="section-shell relative grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:py-18">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-blue-50 backdrop-blur">
              <Landmark className="h-4 w-4 text-orange-300" />
              About Navikara
            </div>

            <div className="space-y-4">
              <h1 className="max-w-4xl text-5xl font-bold leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                We&apos;re not here to <span className="text-orange-300">make websites.</span>
              </h1>
              <p className="max-w-2xl text-xl leading-8 text-blue-100 sm:text-2xl">
                Navikara exists to build complete growth systems for businesses,
                not just pages that look good on launch day.
              </p>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
            <div className="text-sm uppercase tracking-[0.28em] text-blue-200">
              What makes us different
            </div>
            <div className="mt-5 space-y-3">
              {[
                "Most agencies focus on templates.",
                "Most freelancers compete on cheap pricing.",
                "Most platforms give you tools you don't fully understand.",
                "We build systems designed to create real business outcomes."
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
                >
                  <ChevronRight className="mt-0.5 h-5 w-5 flex-none text-orange-300" />
                  <p className="text-sm leading-7 text-blue-50/90">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-12 lg:py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0f2744] text-orange-300">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-900">
                  {pillar.title}
                </h2>
              </div>
              <p className="mt-3 leading-7 text-slate-600">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="section-shell grid gap-8 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700 ring-1 ring-orange-100">
              <Bot className="h-4 w-4" />
              Who we are
            </div>
            <h2 className="text-4xl font-bold tracking-[-0.04em] text-slate-900 sm:text-5xl">
              Software engineers and product builders focused on business growth.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              We are a team working with modern technologies like Next.js,
              Node.js, automation systems, and AI-assisted tools to build
              scalable, high-performance digital systems.
            </p>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              We build production-grade solutions for real users, real leads,
              and real operations.
            </p>
          </div>

          <div className="rounded-[32px] bg-gradient-to-br from-[#0c213c] to-[#153962] p-6 text-white shadow-[0_30px_80px_rgba(11,31,57,0.24)]">
            <div className="text-sm uppercase tracking-[0.28em] text-blue-200">
              What we build
            </div>
            <div className="mt-6 space-y-4">
              {[
                "High-performance websites with sharp business positioning",
                "Lead capture systems built for calls, forms, and WhatsApp",
                "Follow-up and retention workflows that support real sales",
                "Scalable digital infrastructure designed for growth"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-300" />
                  <p className="text-base leading-7 text-blue-50/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-12 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0f2744] px-4 py-2 text-sm font-medium text-blue-50">
              <Rocket className="h-4 w-4 text-orange-300" />
              India is changing fast
            </div>
            <h2 className="text-4xl font-bold tracking-[-0.04em] text-slate-900 sm:text-5xl">
              The opportunity for businesses has never been bigger.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              India is going through a massive digital transformation. Internet
              adoption, digital payments, and technology support systems are
              pushing businesses online faster than ever before.
            </p>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Strong initiatives like Digital India and MSME support programs are
              making it easier for businesses to adopt technology and scale.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div className="mt-5 text-3xl font-bold tracking-[-0.04em] text-slate-900">
                  {stat.value}
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="section-shell grid gap-8 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700 ring-1 ring-orange-100">
              <Landmark className="h-4 w-4" />
              Our belief and vision
            </div>
            <h2 className="text-4xl font-bold tracking-[-0.04em] text-slate-900 sm:text-5xl">
              Great businesses lose because they stay digitally invisible.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              In today&apos;s market, visibility is everything. The businesses that
              grow are the ones that are easiest to find, easiest to trust, and
              easiest to buy from online.
            </p>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Our vision is to help businesses build a strong digital foundation
              so they own their audience, their leads, and their customer
              relationships instead of depending on third-party platforms.
            </p>
          </div>

          <div className="rounded-[32px] bg-[#0f2744] p-6 text-white shadow-[0_30px_80px_rgba(11,31,57,0.16)]">
            <div className="text-sm uppercase tracking-[0.28em] text-blue-200">
              What we want for businesses
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Go digital with clarity and speed",
                "Build a strong and trustworthy online presence",
                "Capture and retain their own customers",
                "Compete confidently with large platforms"
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-base leading-7 text-blue-50/90"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-6 text-lg font-medium leading-8 text-white">
              In the long run, the businesses that win are the ones who own the customer.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#091423] text-white">
        <div className="section-shell py-12 lg:py-14">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-100">
              <ShieldAlert className="h-4 w-4 text-orange-300" />
              But here's the problem
            </div>
            <h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              Digital growth is accelerating, but so is competition.
            </h2>
            <p className="text-lg leading-8 text-slate-300">
              Large funded platforms like Zomato, Zepto, Blinkit, and Dunzo are
              moving aggressively. They are backed by massive capital, spending
              heavily, and building ecosystems that attract and retain customers.
            </p>
            <p className="text-lg leading-8 text-slate-300">
              They do not just sell products. They control the customer
              relationship.
            </p>
          </div>

          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {threats.map((threat) => (
              <article
                key={threat.title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/[0.08] text-orange-300">
                    <threat.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                    {threat.title}
                  </h3>
                </div>
                <p className="mt-3 leading-7 text-slate-300">{threat.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-9 rounded-[32px] border border-white/10 bg-white/5 p-6 lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="text-sm uppercase tracking-[0.26em] text-orange-200">
                  Meanwhile, many businesses are still struggling with the basics
                </div>
                <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">
                  Over time, that creates a gap. And that gap turns into lost
                  market share.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {challenges.map((challenge) => (
                  <div
                    key={challenge}
                    className="rounded-2xl border border-white/10 bg-[#10233d] p-4 text-base font-medium text-white"
                  >
                    {challenge}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-9 grid gap-8 rounded-[32px] border border-white/10 bg-white/5 p-6 lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
            <div className="space-y-5">
              <div className="text-sm uppercase tracking-[0.26em] text-orange-200">
                Our approach
              </div>
              <h2 className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">
                We do not just build websites. We build the system behind growth.
              </h2>
              <p className="text-lg leading-8 text-slate-300">
                Customers search, compare, and decide online. Businesses choose
                Navikara because we focus on what actually matters: visibility,
                trust, lead capture, and conversion.
              </p>
              <p className="text-lg leading-8 text-slate-300">
                No templates, no shortcuts, no fluff. Just solid systems built by
                real developers, designed to perform in the real market.
              </p>
            </div>

            <div>
              <div className="text-sm uppercase tracking-[0.26em] text-blue-200">
                Complete growth system
              </div>
              <div className="mt-5 grid gap-3">
                {growthSystem.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-[#10233d] p-4 text-base font-medium text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-lg font-medium leading-8 text-orange-200">
                More leads. More customers. More revenue.
              </p>
              <p className="mt-3 text-base leading-7 text-slate-300">
                At the end of the day, it is not about having a website. It is
                about having a system that brings you customers.
              </p>
            </div>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="/#contact-us"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
            >
              Talk to Navikara
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
            <a
              href="/#pricing"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Explore Plans
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

