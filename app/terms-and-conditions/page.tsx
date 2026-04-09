import type { Metadata } from "next";
import Footer from "@/components/Footer";
import NavigationHeader from "@/components/NavigationHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions | Navikara",
  description: "Read the Navikara terms and conditions for project scope, payments, delivery, and service expectations."
};

export default function TermsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f9fc] text-slate-900">
      <LegalHero title="Terms & Conditions" subtitle="Basic terms that apply to inquiries, proposals, and project work with Navikara." />
      <section className="section-shell py-12 lg:py-14">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:p-8">
          <LegalBlock
            title="Scope of work"
            body="All services are delivered according to the agreed proposal, discussion, or contract. Any work outside the approved scope may require revised pricing, timelines, or both."
          />
          <LegalBlock
            title="Payments"
            body="Project work may require advance payment, milestone payments, or full payment depending on the engagement type. Work may begin only after the agreed payment stage is completed."
          />
          <LegalBlock
            title="Client responsibilities"
            body="Clients are responsible for providing timely content, approvals, assets, access credentials, and feedback required to complete the project efficiently."
          />
          <LegalBlock
            title="Delivery timelines"
            body="Timelines are estimates unless explicitly committed in writing. Delays in content, communication, or approvals may shift project delivery schedules."
          />
          <LegalBlock
            title="Ownership and usage"
            body="Final deliverables are transferred or licensed as agreed after payment obligations are completed. Navikara may reference completed work in portfolios or case studies unless restricted in writing."
          />
          <LegalBlock
            title="Contact"
            body={`Questions regarding these terms can be sent to ${siteConfig.contact.email}.`}
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
