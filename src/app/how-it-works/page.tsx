import { Metadata } from "next";
import HowItWorksHeader from "@/components/sections/how-it-works/HowItWorksHeader";
import ProcessFlow from "@/components/sections/how-it-works/ProcessFlow";
import PlatformBenefits from "@/components/sections/how-it-works/PlatformBenefits";
import SecurityFeatures from "@/components/sections/how-it-works/SecurityFeatures";
import FAQSection from "@/components/sections/how-it-works/FAQSection";
import HowItWorksCTA from "@/components/sections/how-it-works/HowItWorksCTA";

export const metadata: Metadata = {
  title: "How It Works | DAOWork - Web3 Talent Marketplace",
  description: "Learn how DAOWork connects Web3 talent with projects using secure blockchain technology and smart contracts.",
};

export default function HowItWorksPage() {
  return (
    <div className="w-full bg-gradient-to-b from-dark-900 via-dark-900/95 to-dark-800 min-h-screen">
      <div className="pb-0">
        <HowItWorksHeader />
        <ProcessFlow />
        <PlatformBenefits />
        <SecurityFeatures />
        <FAQSection />
        <HowItWorksCTA />
      </div>
    </div>
  );
} 