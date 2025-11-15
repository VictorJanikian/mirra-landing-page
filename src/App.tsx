import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Benefits } from "./components/Benefits";
import { HowItWorks } from "./components/HowItWorks";
import { CTASection } from "./components/CTASection";
import { LeadForm } from "./components/LeadForm";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Hero />
      <Features />
      <Benefits />
      <HowItWorks />
      <CTASection />
      <LeadForm />
      <Footer />
    </div>
  );
}