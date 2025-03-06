'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-50 to-purple-50 text-black">
      <div className="container mx-auto px-8 py-5">
        <div className="flex justify-between items-center">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              <span className="text-primary">DAO</span><span className="text-black">Work</span>
            </Link>
          </div>
          
          {/* Center navigation - desktop only */}
          <div className="hidden lg:flex items-center justify-center">
            <nav>
              <ul className="flex space-x-10">
                <li><Link className="font-medium text-black hover:text-primary transition-colors px-2" href="/projects">Find Projects</Link></li>
                <li><Link className="font-medium text-black hover:text-primary transition-colors px-2" href="/talent">Find Talent</Link></li>
                <li><Link className="font-medium text-black hover:text-primary transition-colors px-2" href="/how-it-works">How It Works</Link></li>
              </ul>
            </nav>
          </div>
          
          {/* Right side with connect wallet button */}
          <div className="flex items-center">
            <Link 
              href="/connect" 
              className="bg-neutral-900 hover:bg-black text-white font-medium px-6 py-3 rounded-full transition-colors"
            >
              Connect Wallet
            </Link>
            
            {/* Mobile menu button - only visible on small screens */}
            <button 
              className="lg:hidden ml-4 p-2 text-neutral-800 hover:bg-neutral-100 rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white shadow-lg rounded-xl">
            <nav className="px-4">
              <ul className="space-y-3">
                <li><Link className="block py-2 text-black hover:text-primary" href="/projects" onClick={() => setIsMenuOpen(false)}>Find Projects</Link></li>
                <li><Link className="block py-2 text-black hover:text-primary" href="/talent" onClick={() => setIsMenuOpen(false)}>Find Talent</Link></li>
                <li><Link className="block py-2 text-black hover:text-primary" href="/how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</Link></li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 