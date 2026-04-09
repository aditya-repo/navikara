import {
  GrowthGlyph,
  IconFrame,
  PresenceGlyph,
  TrustGlyph
} from "@/components/LandingIcons";

const badges = [
  {
    icon: TrustGlyph,
    tone: "navy" as const,
    title: "Built for service businesses",
    description: "Clear positioning, strong trust signals, and conversion-focused structure."
  },
  {
    icon: PresenceGlyph,
    tone: "sunset" as const,
    title: "Modern web presence",
    description: "Launch a brand people trust on mobile, search, and social."
  },
  {
    icon: GrowthGlyph,
    tone: "emerald" as const,
    title: "Growth-minded execution",
    description: "Leads, nurturing, and reporting tied to business outcomes."
  }
];

export default function TrustStrip() {
  return (
    <section className="border-y border-orange-100 bg-gradient-to-r from-orange-50 via-white to-blue-50">
      <div className="section-shell py-12">
        <div className="mb-8 text-center">
          <p className="text-lg text-slate-700">
            <span className="font-semibold text-orange-600">Navikara</span> combines
            strong brand presentation with scalable digital systems.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="flex items-center gap-4 rounded-2xl bg-white/80 p-5 shadow-sm ring-1 ring-slate-100"
            >
              <IconFrame className="h-12 w-12" tone={badge.tone}>
                <badge.icon className="h-6 w-6" />
              </IconFrame>
              <div>
                <div className="font-semibold text-slate-900">{badge.title}</div>
                <div className="text-sm text-slate-600">{badge.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
