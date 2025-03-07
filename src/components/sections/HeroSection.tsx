"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }
    }
  };

  return (
    <section className="bg-hero-gradient text-white py-32 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-20">
        <div className="absolute top-[20%] left-[10%] w-24 h-24 md:w-40 md:h-40 rounded-full bg-accent-purple blur-[80px]"></div>
        <div className="absolute top-[40%] right-[15%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary blur-[100px]"></div>
        <div className="absolute bottom-[20%] left-[20%] w-28 h-28 md:w-36 md:h-36 rounded-full bg-accent-blue blur-[90px]"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="md:w-1/2 mb-16 md:mb-0"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
              variants={itemVariants}
            >
              <span className="text-white">Connect with</span> <br />
              <span className="bg-clip-text text-transparent bg-darkrise-accent drop-shadow-[0_5px_20px_rgba(124,58,237,0.3)]">Web3</span>
              <span className="text-white"> Talent</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-xl"
              variants={itemVariants}
            >
              The premier marketplace connecting DAO contributors, Web3 consultants, and crypto professionals with projects.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Link href="/projects">
                <motion.span
                  className="inline-block w-full sm:w-auto bg-darkrise-accent text-white font-medium px-8 py-4 rounded-full transition-all text-center shadow-darkrise-accent"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0px 10px 30px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 10 
                  }}
                >
                  Find Projects
                </motion.span>
              </Link>
              
              <Link href="/talent">
                <motion.span
                  className="inline-block w-full sm:w-auto bg-dark-700/50 backdrop-blur-sm hover:bg-dark-700/70 text-white font-medium px-8 py-4 rounded-full border border-dark-600 transition-all hover:border-primary text-center"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0px 10px 30px rgba(59, 130, 246, 0.1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 10 
                  }}
                >
                  Hire Talent
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            variants={itemVariants}
          >
            <motion.div 
              className="relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 20,
                delay: 0.6
              }}
            >
              <div className="bg-dark-800/80 backdrop-blur-md rounded-2xl shadow-darkrise overflow-hidden p-4 md:p-6 border border-dark-700/50">
                <div className="rounded-xl bg-darkrise-accent p-[2px]">
                  <div className="bg-dark-800 rounded-lg p-4 h-80 w-64 md:h-96 md:w-80 flex items-center justify-center">
                    <div className="text-center">
                      <motion.div 
                        className="flex justify-center mb-4"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 2,
                          ease: "easeInOut" 
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 text-primary">
                          <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.96 49.96 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.89 50.89 0 0 0 3.102 10.08A49.98 49.98 0 0 0 2.815 10a.75.75 0 0 1-.23-1.337A60.64 60.64 0 0 1 11.7 2.805Z" />
                          <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.71 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99 1.984.788 3.904 1.82 5.736 3.094a.75.75 0 0 0 .832 0c1.832-1.274 3.752-2.306 5.736-3.094.897-.356 1.808-.686 2.73-.99Z" />
                        </svg>
                      </motion.div>
                      <h3 className="text-xl font-medium mb-2 text-gray-300">Portfolio Balance</h3>
                      <motion.p 
                        className="text-3xl font-bold text-white mb-3"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                      >
                        $54,805.32
                      </motion.p>
                      <motion.p 
                        className="text-sm text-green-500 font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                      >
                        ↑ 12.34% this week
                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 