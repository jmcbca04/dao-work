"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectsHeader() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 mb-8 sm:mb-12 pt-4 sm:pt-0">
      <div className="text-center mb-6 sm:mb-10">
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-5 text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Explore Projects
        </motion.h1>
        
        <motion.p 
          className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Discover opportunities to contribute to DAOs and Web3 projects
        </motion.p>
      </div>

      <motion.div 
        className="max-w-xl mx-auto px-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full px-5 py-3 pl-12 rounded-lg bg-dark-700/90 border border-dark-600 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="absolute left-4 top-3.5 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </form>
      </motion.div>
    </div>
  );
} 