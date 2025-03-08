import { Metadata } from "next";
import TalentHeader from "../../components/sections/talent/TalentHeader";
import TalentList from "../../components/sections/talent/TalentList";

export const metadata: Metadata = {
  title: "Talent | DAOWork - Web3 Talent Marketplace",
  description: "Find skilled Web3 professionals for your DAO or blockchain project. Connect with experts in development, design, marketing, and governance.",
};

export default function TalentPage() {
  return (
    <div className="w-full bg-gradient-to-b from-dark-900 via-dark-900/95 to-dark-800 min-h-screen">
      <div className="pb-24">
        <TalentHeader />
        <div className="container mx-auto px-4 md:px-8 mt-8">
          <TalentList />
        </div>
      </div>
    </div>
  );
} 