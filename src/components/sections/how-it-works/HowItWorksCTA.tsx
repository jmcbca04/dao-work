"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HowItWorksCTA() {
  return (
    <section className="pt-20 pb-10 bg-gradient-to-b from-dark-900 to-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px] transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-[150px] transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1]
            }
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent-purple to-accent-blue"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.2
              }
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Ready to Transform Your Web3 Career?
          </motion.h2>
          
          <motion.p 
            className="text-lg mb-10 text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.3
              }
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Join the community of Web3 professionals and DAOs building the future of decentralized work.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.4
              }
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                transition: { 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 10 
                } 
              }}
              whileTap={{ scale: 0.98 }}
            >
              <button 
                className="inline-block w-full sm:w-auto bg-gradient-to-r from-primary to-accent-purple text-white font-semibold px-10 py-4 rounded-full transition-all hover:shadow-darkrise-accent text-center"
              >
                Connect Wallet
              </button>
            </motion.div>
            
            <motion.div
              whileHover={{ 
                scale: 1.05,
                transition: { 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 10 
                } 
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                href="/talent" 
                className="inline-block w-full sm:w-auto bg-dark-800/50 backdrop-blur-sm hover:bg-dark-700/60 text-white border border-primary/20 font-semibold px-10 py-4 rounded-full transition-all hover:border-primary/40 text-center"
              >
                Find Talent
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 