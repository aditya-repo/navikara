export const siteConfig = {
  business: {
    name: "Navikara",
    shortName: "Navikara",
    website: "https://navikara.com",
    websiteLabel: "navikara.com",
    tagline:
      "Digital growth partner for businesses that want a stronger web presence, cleaner lead flow, and more reliable follow-up systems.",
    coverage: "Serving businesses across India"
  },
  contact: {
    email: "hello@navikara.com",
    phoneDisplay: "+91 62000 00000",
    phoneHref: "tel:+9162000000000",
    whatsappDisplay: "+91 62000 00000",
    whatsappHref: "https://wa.me/9162000000000",
    address: ["Navikara Office", "Boring Road", "Patna, Bihar 800001", "India"],
    officeHours: "Monday to Saturday, 10:00 AM to 7:00 PM"
  },
  social: {
    instagram: "#",
    linkedin: "#",
    whatsapp: "https://wa.me/9162000000000"
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
      offerPrice: "Rs. 18,000",
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
      name: "Lead Generation System",
      icon: "TrendingUp",
      originalPrice: "Rs. 45,000",
      offerPrice: "Rs. 35,000",
      tag: "Launch Offer",
      description: "Turn traffic into real inquiries and consistent leads.",
      features: [
        "High-converting landing pages",
        "Ad-ready funnel system",
        "WhatsApp lead capture & automation"
      ],
      bestFor: "Best for growing inquiries fast",
      featured: true
    },
    {
      name: "Business Automation & CRM",
      icon: "Settings2",
      originalPrice: "Rs. 60,000",
      offerPrice: "Rs. 48,000",
      tag: "Launch Offer",
      description: "Organize your business and never lose a lead again.",
      features: [
        "CRM & lead tracking system",
        "Automated follow-ups",
        "Booking / service workflows"
      ],
      bestFor: "Best for scaling operations",
      featured: false
    },
    {
      name: "Online Sales & App Systems",
      icon: "ShoppingCart",
      originalPrice: "Rs. 90,000",
      offerPrice: "Rs. 70,000",
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
