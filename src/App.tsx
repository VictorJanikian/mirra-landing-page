import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Benefits } from "./components/Benefits";
import { HowItWorks } from "./components/HowItWorks";
import { CTASection } from "./components/CTASection";
import { LeadForm } from "./components/LeadForm";
import { Footer } from "./components/Footer";
import { UnderConstruction } from "./components/UnderConstruction";
import { useState } from "react";

export default function App() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Hero />
      <Features />
      <Benefits />
      <HowItWorks />
      <CTASection />
      <LeadForm />
      <Footer 
        onTermsClick={() => setShowTerms(true)}
        onPrivacyClick={() => setShowPrivacy(true)}
      />
      
      {showTerms && (
        <UnderConstruction 
          title="Termos de Uso" 
          onClose={() => setShowTerms(false)} 
        />
      )}
      
      {showPrivacy && (
        <UnderConstruction 
          title="Política de Privacidade" 
          onClose={() => setShowPrivacy(false)} 
        />
      )}
    </div>
  );
}