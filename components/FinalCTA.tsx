import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0d223d] via-[#12365f] to-[#091c31] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,125,50,0.2),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(64,168,255,0.18),transparent_24%)]" />
      <div className="section-shell relative text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-400/15 px-4 py-2 text-sm text-orange-100">
          <Sparkles className="h-4 w-4" />
          Ready to launch navikara.com with this direction
        </div>

        <h2 className="mx-auto mt-8 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          Navikara is now positioned as a Patna-based digital growth brand with a
          complete landing page to match.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
          Use this as the foundation for the production site, then plug in real contact
          details, case studies, and form actions when you are ready.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://navikara.com"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-10 py-5 text-lg font-semibold text-white transition hover:bg-orange-600"
          >
            Open navikara.com
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-10 py-5 text-lg font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            Review packages
          </a>
        </div>
      </div>
    </section>
  );
}
