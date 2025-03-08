"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function TalentHeader() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would trigger a search
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="w-full bg-gradient-to-br from-primary/20 via-purple-800/20 to-indigo-800/20 pt-8 pb-16 shadow-lg">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Find Expert Web3 Talent
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl mb-10 opacity-90">
            Connect with skilled professionals specializing in blockchain development, 
            tokenomics, governance, design, and more.
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="w-full max-w-2xl mb-10">
            <div className="relative flex items-center">
              <input
                type="text"
                className="w-full p-4 pl-12 pr-24 rounded-lg border border-indigo-500/30 bg-dark-800/80 text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-lg"
                placeholder="Search by name, skill, or role..."
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
                <p className="text-3xl font-bold text-primary">300+</p>
                <p className="text-white">Verified Talent</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">95%</p>
                <p className="text-white">Successful Projects</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">30+</p>
                <p className="text-white">Skills Categories</p>
              </div>
            </div>
            <Link 
              href="/join-as-talent" 
              className="btn bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 shadow-md"
            >
              Join as Talent
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 