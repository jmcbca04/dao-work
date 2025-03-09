"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TrustedBySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 50, 
        damping: 10 
      }
    }
  };

  // Logo data with image paths and alt text
  const logos = [
    { src: "/images/logos/beaker-dao-pic.jpg", alt: "Beaker DAO" },
    { src: "/images/logos/flamingo-dao-pic.jpg", alt: "Flamingo DAO" },
    { src: "/images/logos/lao-dao-pic.jpg", alt: "LAO DAO" },
    { src: "/images/logos/neon-dao-pic.jpg", alt: "Neon DAO" },
    { src: "/images/logos/punk-dao-pic.jpg", alt: "Punk DAO" },
  ];

  return (
    <section className="py-16 bg-dark-900 border-t border-dark-800 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-primary/5 blur-[100px] rounded-full"></div>
      
      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-center text-sm font-medium text-gray-400 tracking-wider uppercase mb-12"
            variants={itemVariants}
          >
            Trusted by leading DAOs and Web3 projects
          </motion.h2>
          
          <motion.div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {logos.map((logo, index) => (
              <motion.div 
                key={index}
                className="h-28 w-28 bg-dark-800/80 backdrop-blur-sm rounded-full border border-dark-700/50 flex items-center justify-center text-gray-300 font-medium shadow-darkrise-sm hover:border-primary/30 transition-all duration-300 p-2 overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.15)" }}
              >
                <div className="relative h-full w-full rounded-full overflow-hidden">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="(max-width: 768px) 112px, 112px"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 