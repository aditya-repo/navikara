import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import ProblemSection from "@/components/ProblemSection";
import Results from "@/components/Results";
import SocialProof from "@/components/SocialProof";
import SolutionStack from "@/components/SolutionStack";
import TrustStrip from "@/components/TrustStrip";
import UseCases from "@/components/UseCases";

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white/70">
      <section id="home">
        <Hero />
      </section>
      <TrustStrip />
      <section id="about-us" className="scroll-mt-32">
        <ProblemSection />
      </section>
      <SolutionStack />
      <HowItWorks />
      <UseCases />
      <Results />
      <SocialProof />
      <section id="pricing" className="scroll-mt-32">
        <Pricing />
      </section>
      <section id="partnership" className="scroll-mt-32">
        <FinalCTA />
      </section>
      <section id="contact-us" className="scroll-mt-32">
        <Footer />
      </section>
    </main>
  );
}
