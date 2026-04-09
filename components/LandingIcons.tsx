import type { ReactNode, SVGProps } from "react";

type IconFrameProps = {
  children: ReactNode;
  className?: string;
  tone?: "navy" | "sunset" | "emerald" | "sky" | "violet";
};

type GlyphProps = SVGProps<SVGSVGElement>;

const toneMap = {
  navy: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white",
  sunset: "bg-gradient-to-br from-orange-500 via-orange-400 to-amber-300 text-white",
  emerald: "bg-gradient-to-br from-emerald-600 via-emerald-500 to-green-400 text-white",
  sky: "bg-gradient-to-br from-sky-600 via-sky-500 to-cyan-400 text-white",
  violet: "bg-gradient-to-br from-violet-600 via-violet-500 to-fuchsia-400 text-white"
} as const;

export function IconFrame({ children, className = "h-14 w-14", tone = "navy" }: IconFrameProps) {
  return (
    <div
      className={`inline-flex items-center justify-center overflow-hidden rounded-2xl ${toneMap[tone]} ${className}`}
    >
      {children}
    </div>
  );
}

function glyphDefaults(props: GlyphProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props
  };
}

export function PresenceGlyph(props: GlyphProps) {
  return (
    <svg {...glyphDefaults(props)}>
      <rect x="4" y="5" width="16" height="12" rx="3" />
      <path d="M8 19h8" />
      <path d="M9 9h6" />
      <path d="M8 12.5h8" />
      <circle cx="17" cy="8" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ChatFlowGlyph(props: GlyphProps) {
  return (
    <svg {...glyphDefaults(props)}>
      <path d="M6.5 7.5h7a4.5 4.5 0 0 1 0 9H11l-3.5 2v-2A4.5 4.5 0 0 1 6.5 7.5Z" />
      <path d="M10 11h4" />
      <path d="M10 13.8h2.8" />
      <path d="M17.2 8.8l1.7 1.7 2.6-3" />
    </svg>
  );
}

export function PipelineGlyph(props: GlyphProps) {
  return (
    <svg {...glyphDefaults(props)}>
      <rect x="4" y="6" width="4" height="12" rx="1.5" />
      <rect x="10" y="9" width="4" height="9" rx="1.5" />
      <rect x="16" y="12" width="4" height="6" rx="1.5" />
      <path d="M6 6V4" />
      <path d="M12 9V4" />
      <path d="M18 12V4" />
    </svg>
  );
}

export function GrowthGlyph(props: GlyphProps) {
  return (
    <svg {...glyphDefaults(props)}>
      <path d="M5 16.5 10 11l3.4 3.4L19 8.8" />
      <path d="M14.5 8.8H19v4.5" />
      <path d="M5 19h14" />
    </svg>
  );
}

export function TrustGlyph(props: GlyphProps) {
  return (
    <svg {...glyphDefaults(props)}>
      <path d="M12 4.5 18.5 7v4.7c0 4-2.8 6.9-6.5 7.8-3.7-.9-6.5-3.8-6.5-7.8V7L12 4.5Z" />
      <path d="m9.3 11.7 1.8 1.8 3.8-4" />
    </svg>
  );
}

export function VisibilityGlyph(props: GlyphProps) {
  return (
    <svg {...glyphDefaults(props)}>
      <path d="M3.5 12s3.1-5 8.5-5 8.5 5 8.5 5-3.1 5-8.5 5-8.5-5-8.5-5Z" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M18.5 6.5 20 5" />
    </svg>
  );
}

export function OutdatedGlyph(props: GlyphProps) {
  return (
    <svg {...glyphDefaults(props)}>
      <rect x="5" y="6" width="14" height="12" rx="2.5" />
      <path d="M8.5 10h4" />
      <path d="M8.5 13h2.5" />
      <path d="m15.5 9.5 3 3" />
      <path d="m18.5 9.5-3 3" />
    </svg>
  );
}

export function LeadLeakGlyph(props: GlyphProps) {
  return (
    <svg {...glyphDefaults(props)}>
      <path d="M6 7.5h8a4 4 0 1 1 0 8H12l-3 2v-2a4 4 0 0 1-3-4v0a4 4 0 0 1 0-4Z" />
      <path d="M16.5 8.5v5" />
      <path d="M14.7 11.7 16.5 13.5l1.8-1.8" />
    </svg>
  );
}

export function ManualOpsGlyph(props: GlyphProps) {
  return (
    <svg {...glyphDefaults(props)}>
      <circle cx="12" cy="12" r="7" />
      <path d="M12 8.5v4l2.5 1.5" />
      <path d="M19 5 5 19" />
    </svg>
  );
}

export function TeamGlyph(props: GlyphProps) {
  return (
    <svg {...glyphDefaults(props)}>
      <circle cx="9" cy="10" r="2.3" />
      <circle cx="15.5" cy="9" r="1.8" />
      <path d="M5.5 17c.8-2 2.6-3 5-3s4.2 1 5 3" />
      <path d="M15.5 13.7c1.6.2 2.8 1 3.4 2.3" />
    </svg>
  );
}

export function TimeGlyph(props: GlyphProps) {
  return (
    <svg {...glyphDefaults(props)}>
      <circle cx="12" cy="12" r="7.5" />
      <path d="M12 8.5v4.3l2.8 1.7" />
      <path d="M12 4.5v1.2" />
    </svg>
  );
}

export function QuoteGlyph(props: GlyphProps) {
  return (
    <svg {...glyphDefaults(props)}>
      <path d="M8.5 9.5H6.8A2.8 2.8 0 0 0 4 12.3v.2A2.5 2.5 0 0 0 6.5 15H9v-2.5H7.2a.8.8 0 0 1-.7-.8v-.1a1 1 0 0 1 1-1H9V7.5" />
      <path d="M17.5 9.5h-1.7a2.8 2.8 0 0 0-2.8 2.8v.2a2.5 2.5 0 0 0 2.5 2.5H18v-2.5h-1.8a.8.8 0 0 1-.7-.8v-.1a1 1 0 0 1 1-1H18V7.5" />
    </svg>
  );
}

export function StarGlyph(props: GlyphProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="m12 3.8 2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.9 2.5.9-5.4L4.2 9.5l5.4-.8L12 3.8Z" />
    </svg>
  );
}

export function CommerceGlyph(props: GlyphProps) {
  return (
    <svg {...glyphDefaults(props)}>
      <path d="M6 8h13l-1.2 6.5H8.2L7 6H5" />
      <circle cx="9.5" cy="18" r="1.4" />
      <circle cx="16.5" cy="18" r="1.4" />
      <path d="M10 11h4.5" />
    </svg>
  );
}

export function SettingsGlyph(props: GlyphProps) {
  return (
    <svg {...glyphDefaults(props)}>
      <circle cx="12" cy="12" r="2.2" />
      <path d="M12 5.2v2" />
      <path d="M12 16.8v2" />
      <path d="m7.2 7.2 1.4 1.4" />
      <path d="m15.4 15.4 1.4 1.4" />
      <path d="M5.2 12h2" />
      <path d="M16.8 12h2" />
      <path d="m7.2 16.8 1.4-1.4" />
      <path d="m15.4 8.6 1.4-1.4" />
    </svg>
  );
}

export function SocialGlyph({
  kind,
  className = "h-5 w-5"
}: {
  kind: "instagram" | "linkedin" | "whatsapp" | "mail" | "phone" | "location";
  className?: string;
}) {
  const icons = {
    instagram: (
      <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4.5" y="4.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16.7" cy="7.4" r="1" fill="currentColor" />
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4.5" y="4.5" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8.3 10.2V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8.3 8.1h.01" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
        <path d="M12 16v-3.3c0-1.3.8-2.2 2-2.2s1.9.8 1.9 2.2V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 10.2V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    whatsapp: <ChatFlowGlyph className={className} />,
    mail: (
      <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4.5" y="6.5" width="15" height="11" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="m6.5 8 5.5 4.3L17.5 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    phone: (
      <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.3 5.5h2.2l1 3-1.5 1.5a13 13 0 0 0 4 4l1.5-1.5 3 1v2.2c0 .8-.6 1.4-1.4 1.4-6.1 0-11.1-5-11.1-11.1 0-.8.6-1.5 1.3-1.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    location: (
      <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 19s5-4.6 5-9a5 5 0 1 0-10 0c0 4.4 5 9 5 9Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="1.8" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    )
  };

  return icons[kind];
}
