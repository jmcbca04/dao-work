'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      className="bg-dark-900/90 backdrop-blur-md text-white border-b border-dark-800/50 sticky top-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 50, 
        damping: 20,
        delay: 0.1
      }}
    >
      <div className="container mx-auto px-8 py-5">
        <div className="flex justify-between items-center">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-purple">DAO</span>
              <span className="text-white">Work</span>
            </Link>
          </div>
          
          {/* Center navigation - desktop only */}
          <div className="hidden lg:flex items-center justify-center">
            <nav>
              <ul className="flex space-x-10">
                <motion.li whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link className="font-medium text-gray-300 hover:text-white transition-colors px-2" href="/projects">Find Projects</Link>
                </motion.li>
                <motion.li whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link className="font-medium text-gray-300 hover:text-white transition-colors px-2" href="/talent">Find Talent</Link>
                </motion.li>
                <motion.li whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link className="font-medium text-gray-300 hover:text-white transition-colors px-2" href="/how-it-works">How It Works</Link>
                </motion.li>
              </ul>
            </nav>
          </div>
          
          {/* Right side with connect wallet button */}
          <div className="flex items-center">
            <motion.button 
              className="bg-gradient-to-r from-primary to-accent-purple text-white font-medium px-6 py-3 rounded-full transition-all shadow-darkrise-sm"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 8px 20px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 10 
              }}
            >
              Connect Wallet
            </motion.button>
            
            {/* Mobile menu button - only visible on small screens */}
            <motion.button 
              className="lg:hidden ml-4 p-2 text-gray-300 hover:text-white hover:bg-dark-800/80 rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </motion.button>
          </div>
        </div>
        
        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <motion.div 
            className="lg:hidden mt-4 py-4 bg-dark-800/90 backdrop-blur-md shadow-darkrise rounded-xl border border-dark-700/50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <nav className="px-4">
              <ul className="space-y-3">
                <li><Link className="block py-2 text-gray-300 hover:text-white" href="/projects" onClick={() => setIsMenuOpen(false)}>Find Projects</Link></li>
                <li><Link className="block py-2 text-gray-300 hover:text-white" href="/talent" onClick={() => setIsMenuOpen(false)}>Find Talent</Link></li>
                <li><Link className="block py-2 text-gray-300 hover:text-white" href="/how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</Link></li>
              </ul>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header; 