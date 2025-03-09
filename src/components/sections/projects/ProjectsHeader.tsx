"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectsHeader() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="w-full bg-gradient-to-br from-primary/20 via-purple-800/20 to-indigo-800/20 pt-8 pb-16 shadow-lg">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.h1 
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Explore Projects
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white max-w-3xl mb-10 opacity-90"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Discover opportunities to contribute to DAOs and Web3 projects
          </motion.p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="w-full max-w-2xl mb-10">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full p-4 pl-12 pr-24 rounded-lg border border-indigo-500/30 bg-dark-800/80 text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute left-4 text-indigo-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
              <button
                type="submit"
                className="absolute right-1.5 bg-primary hover:bg-primary-dark text-white py-2.5 px-5 rounded-md transition duration-200 font-medium shadow-md"
              >
                Search
              </button>
            </div>
          </form>

          {/* Stats & CTA */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl bg-dark-800/40 rounded-xl p-6 backdrop-blur-sm border border-indigo-500/10">
            <div className="flex gap-10 mb-6 md:mb-0">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">150+</p>
                <p className="text-white">Open Projects</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">90%</p>
                <p className="text-white">Completion Rate</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">25+</p>
                <p className="text-white">Project Categories</p>
              </div>
            </div>
            <Link 
              href="/post-project" 
              className="btn bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 shadow-md"
            >
              Post a Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 