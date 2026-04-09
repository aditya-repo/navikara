import { ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0d223d] via-[#12365f] to-[#091c31] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,125,50,0.2),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(64,168,255,0.18),transparent_24%)]" />
      <div className="section-shell relative text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-400/15 px-4 py-2 text-sm text-orange-100">
          <Sparkles className="h-4 w-4" />
          {siteConfig.finalCta.badge}
        </div>

        <div className="mx-auto mt-8 max-w-5xl space-y-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-200">
            {siteConfig.finalCta.eyebrow}
          </p>

          <h2 className="text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            {siteConfig.finalCta.titleLead}
            <span className="block bg-gradient-to-r from-white via-orange-100 to-orange-300 bg-clip-text text-transparent">
              {siteConfig.finalCta.titleAccent}
            </span>
          </h2>

          <p className="mx-auto max-w-4xl text-lg leading-8 text-blue-100 sm:text-xl lg:text-2xl">
            {siteConfig.finalCta.descriptionLead}
            <span className="text-white">{siteConfig.finalCta.descriptionAccent}</span>
          </p>

          <p className="mx-auto max-w-2xl text-xl font-medium text-orange-200 sm:text-2xl">
            {siteConfig.finalCta.subtext}
          </p>
        </div>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={siteConfig.finalCta.primaryHref}
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-10 py-5 text-lg font-semibold text-white transition hover:bg-orange-600"
          >
            {siteConfig.finalCta.primaryLabel}
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </a>
          <a
            href={siteConfig.finalCta.secondaryHref}
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-10 py-5 text-lg font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            {siteConfig.finalCta.secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}




