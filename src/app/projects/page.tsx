import { Metadata } from "next";
import ProjectsHeader from "@/components/sections/projects/ProjectsHeader";
import ProjectsList from "@/components/sections/projects/ProjectsList";

export const metadata: Metadata = {
  title: "Projects | DAOWork - Web3 Talent Marketplace",
  description: "Explore available Web3 and DAO projects. Find your next opportunity in blockchain development, design, marketing, and more.",
};

export default function ProjectsPage() {
  return (
    <div className="w-full bg-dark-800 min-h-screen">
      <div className="pt-16 pb-24">
        <ProjectsHeader />
        <div className="container mx-auto px-8">
          <ProjectsList />
        </div>
      </div>
    </div>
  );
} 