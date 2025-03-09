"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import CategoryFilter from "./CategoryFilter";
import { mockProjects } from "@/data/mockProjects";

export default function ProjectsList() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(mockProjects);

  // Filter projects when category changes
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProjects(mockProjects);
    } else {
      setFilteredProjects(
        mockProjects.filter((project) => project.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  return (
    <div className="mt-2">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6 sm:mb-8">
        <div className="w-full sm:w-auto">
          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        
        <motion.button
          className="btn btn-primary normal-case w-full sm:w-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <span className="flex items-center gap-1 justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Post a Project
          </span>
        </motion.button>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              category={project.category}
              status={project.status}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 sm:py-20">
          <h3 className="text-xl text-gray-400 mb-4">No projects found</h3>
          <p className="text-gray-500">
            Try adjusting your filters or{" "}
            <button 
              onClick={() => setSelectedCategory("all")}
              className="text-primary hover:text-primary-focus transition-colors duration-200"
            >
              view all projects
            </button>
          </p>
        </div>
      )}
    </div>
  );
} 