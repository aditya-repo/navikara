import type { Metadata } from "next";
import Footer from "@/components/Footer";
import NavigationHeader from "@/components/NavigationHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Refund Policy | Navikara",
  description: "Read the Navikara refund policy for project payments, cancellations, and service-related refund requests."
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f9fc] text-slate-900">
      <LegalHero title="Refund Policy" subtitle="How refunds are handled for strategy, digital services, and project engagements." />
      <section className="section-shell py-12 lg:py-14">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:p-8">
          <LegalBlock
            title="Project payments"
            body="Payments made for strategy, design, development, setup, or implementation work are generally non-refundable once work has started or resources have been allocated."
          />
          <LegalBlock
            title="Before work begins"
            body="If a cancellation happens before project work starts, any refund decision will depend on administrative effort, reserved time, and costs already incurred."
          />
          <LegalBlock
            title="Partial delivery"
            body="If a project stops after partial work has been completed, refunds are not guaranteed. Any review will be based on completed work, time spent, and agreed project stage."
          />
          <LegalBlock
            title="Third-party costs"
            body="Payments made toward third-party services such as domains, hosting, tools, ad credits, plugins, or subscriptions are non-refundable unless the third-party provider itself issues a refund."
          />
          <LegalBlock
            title="Requesting a review"
            body={`For refund-related concerns, contact ${siteConfig.contact.email}. Any exception, if granted, will be reviewed case by case.`}
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}

function LegalHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1f39] via-[#13355b] to-[#1f5379] text-white">
      <div className="relative border-b border-white/10 bg-[#071a31]/22 backdrop-blur-xl">
        <NavigationHeader />
      </div>
      <div className="section-shell py-14 lg:py-18">
        <h1 className="text-5xl font-bold tracking-[-0.05em] sm:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-xl leading-8 text-blue-100">{subtitle}</p>
      </div>
    </section>
  );
}

function LegalBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-b border-slate-200 py-5 last:border-b-0 last:pb-0 first:pt-0">
      <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-900">{title}</h2>
      <p className="mt-3 leading-7 text-slate-600">{body}</p>
    </div>
  );
}
