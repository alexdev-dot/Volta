import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ServicesSection from "@/components/landing/ServicesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import CtaBanner from "@/components/landing/CtaBanner";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <CtaBanner />
    </div>
  );
}
