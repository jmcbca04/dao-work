"use client";

import { motion } from 'framer-motion';

export default function HowItWorksSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 60, 
        damping: 15 
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 50, 
        damping: 12 
      }
    },
    hover: { 
      y: -8,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  return (
    <section className="py-32 bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute top-[10%] right-[5%] w-64 h-64 rounded-full bg-primary/5 blur-[100px]"></div>
      <div className="absolute bottom-[10%] left-[5%] w-72 h-72 rounded-full bg-accent-purple/5 blur-[120px]"></div>
      
      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            variants={itemVariants}
          >
            How DAOWork Helps You
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Our platform streamlines the process of connecting Web3 talent with the right opportunities
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="bg-dark-800/80 backdrop-blur-sm p-8 rounded-2xl border border-dark-700/50 shadow-darkrise transition-all hover:border-primary/30 relative group"
            variants={cardVariants}
            whileHover="hover"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-dark-700/50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br from-primary/20 to-accent-purple/20 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">Create Your Profile</h3>
              <p className="text-gray-400">Showcase your Web3 skills, experience, and past work to stand out to potential clients and collaborators.</p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-dark-800/80 backdrop-blur-sm p-8 rounded-2xl border border-dark-700/50 shadow-darkrise transition-all hover:border-primary/30 relative group"
            variants={cardVariants}
            whileHover="hover"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-dark-700/50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br from-primary/20 to-accent-purple/20 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">Discover Opportunities</h3>
              <p className="text-gray-400">Browse a curated selection of Web3 projects, DAO governance roles, and blockchain development opportunities.</p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-dark-800/80 backdrop-blur-sm p-8 rounded-2xl border border-dark-700/50 shadow-darkrise transition-all hover:border-primary/30 relative group"
            variants={cardVariants}
            whileHover="hover"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-dark-700/50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br from-primary/20 to-accent-purple/20 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">Secure Collaboration</h3>
              <p className="text-gray-400">Utilize smart contracts for secure agreements, milestone-based payments, and transparent collaboration terms.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 