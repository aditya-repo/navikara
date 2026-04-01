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
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <SolutionStack />
      <HowItWorks />
      <UseCases />
      <Results />
      <SocialProof />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
}
