import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhatIsBullyingSection from "@/components/WhatIsBullyingSection";
import PreventionSection from "@/components/PreventionSection";
import IdentificationSection from "@/components/IdentificationSection";
import AISupportSection from "@/components/AISupportSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <WhatIsBullyingSection />
        <PreventionSection />
        <IdentificationSection />
        <AISupportSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
