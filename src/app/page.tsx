import HeroSection from "@/components/sections/HeroSection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import SkillsCategoriesSection from "@/components/sections/SkillsCategoriesSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <TrustedBySection />
      <HowItWorksSection />
      <SkillsCategoriesSection />
      <CTASection />
    </div>
  )
} 