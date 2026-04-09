const contactConfig = {
  email: "navikara99@gmail.com",
  phoneDisplay: "+91 70500 20659",
  phoneHref: "tel:+917050020659",
  whatsappDisplay: "+91 94730 95293",
  whatsappHref: "https://wa.me/919473095293",
  address: ["Navikara Office", "Boring Road", "Patna, Bihar 800001", "India"],
  officeHours: "Monday to Saturday, 10:00 AM to 7:00 PM"
} as const;

export const siteConfig = {
  business: {
    name: "Navikara",
    shortName: "Navikara",
    website: "https://navikara.com",
    websiteLabel: "navikara.com",
    descriptor: "Growth Studio",
    tagline:
      "Digital growth partner for businesses that want a stronger web presence, cleaner lead flow, and more reliable follow-up systems.",
    coverage: "Serving businesses across India"
  },
  contact: contactConfig,
  social: {
    instagram: "#",
    linkedin: "#",
    whatsapp: contactConfig.whatsappHref
  },
  navigation: {
    main: [
      { label: "Home", href: "/", homeHref: "#home" },
      { label: "About Us", href: "/about-us" },
      { label: "Pricing", href: "/pricing" },
      { label: "Partnership", href: "/partnership" },
      { label: "Contact Us", href: "/contact-us" }
    ]
  },
  footer: {
    services: ["Web presence", "Lead funnels", "CRM workflows", "Growth systems"],
    sectors: ["Real estate", "Clinics", "Institutes", "Professional services"],
    company: ["About Navikara", "Work process", "Pricing", "Contact"],
    legal: ["Privacy Policy", "Terms & Conditions", "Refund Policy"],
    copyright:
      "Built for businesses growing across India."
  },
  meta: {
    defaultTitle: "Navikara | Digital Growth Systems for Modern Businesses",
    defaultDescription:
      "Navikara helps businesses launch modern websites, lead funnels, CRM workflows, and scalable digital growth systems.",
    openGraphDescription:
      "Modern digital growth systems for businesses, startups, clinics, institutes, and service brands."
  },
  finalCta: {
    badge: "Ready to launch navikara.com with this direction",
    eyebrow: "Our belief",
    titleLead: "We started Navikara with",
    titleAccent: "one belief.",
    descriptionLead: "Great businesses don't fail because they lack quality. ",
    descriptionAccent: "They fail because they lack visibility and systems.",
    subtext: "We exist to change that.",
    primaryLabel: "Chat on WhatsApp",
    primaryHref: contactConfig.whatsappHref,
    secondaryLabel: "Review packages",
    secondaryHref: "#pricing"
  },
  partnership: {
    revenueShare: "10-15%",
    title: "Affiliate Partnership",
    summary:
      "Partner with Navikara by bringing qualified clients and earn a revenue share on every successful sale.",
    benefits: [
      "Earn 10-15% revenue share on closed deals",
      "Perfect for marketers, consultants, agencies, and network partners",
      "No delivery overhead on your side",
      "You focus on referrals, we handle strategy and execution"
    ]
  },
  pricing: {
    intro: "Simple, transparent pricing based on where your business is today.",
    note:
      "Every business is different. Final pricing depends on your exact requirements, but most of our clients fall within these ranges.",
    assist:
      "Not sure what you need? We'll guide you and recommend the right system based on your business."
  },
  pricingPlans: [
    {
      name: "Online Presence Setup",
      icon: "Globe",
      originalPrice: "Rs. 25,000",
      offerPrice: "Rs. 15,000",
      tag: "Launch Offer",
      description: "Build your digital foundation and start getting discovered online.",
      features: [
        "Professional business website",
        "Google & local listing setup",
        "WhatsApp integration"
      ],
      bestFor: "Best for getting started online",
      featured: false
    },
    {
      name: "Lead Generation & CRM System",
      icon: "TrendingUp",
      originalPrice: "Rs. 45,000",
      offerPrice: "Rs. 30,000",
      tag: "Launch Offer",
      description: "Turn traffic into real inquiries and manage every lead with structured follow-up.",
      features: [
        "High-converting landing pages",
        "Ad-ready funnel system",
        "WhatsApp lead capture & automation",
        "CRM & lead tracking system",
        "Automated follow-ups"
      ],
      bestFor: "Best for growing inquiries and managing leads",
      featured: true
    },
    {
      name: "Online Sales & App Systems",
      icon: "ShoppingCart",
      originalPrice: "Rs. 90,000",
      offerPrice: "Rs. 55,000",
      tag: "Launch Offer",
      description: "Expand beyond your local area and sell at scale.",
      features: [
        "E-commerce / catalog system",
        "Payment integrations (UPI, gateways)",
        "Mobile app (if required)"
      ],
      bestFor: "Best for serious business expansion",
      featured: false
    }
  ],
  pricingPsychology: [
    "Strike pricing creates urgency",
    "Most Popular positioning anchors attention to the middle tier",
    "Stage-based clarity reduces confusion",
    "Outcome-driven language speaks in business terms, not tech terms"
  ]
} as const;
