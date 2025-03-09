"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      quote: "Found an amazing Solidity developer within 48 hours. The talent quality on this platform is outstanding.",
      name: "Elena Petrov",
      role: "DAO Project Lead",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      id: 2,
      quote: "As a Web3 designer, I've found consistent high-quality projects that align with my expertise and values.",
      name: "Marcus Johnson",
      role: "UI/UX Designer",
      rating: 4.9,
      avatar: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      id: 3,
      quote: "The platform's escrow system and clear milestones made our DeFi project collaboration seamless and secure.",
      name: "Sophia Chen",
      role: "Tokenomics Specialist",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/2.jpg"
    }
  ];

  // State for current testimonial
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTestimonialIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 500); // Match this with the animation duration
    }, 7000); // Rotate every 7 seconds
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Current testimonial
  const currentTestimonial = testimonials[currentTestimonialIndex];

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

  // Generate stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg 
          key={i} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill={i < Math.floor(rating) ? "currentColor" : "none"}
          stroke="currentColor"
          className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-400"}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={i < Math.floor(rating) ? 0 : 1.5} d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
      );
    }
    
    // Handle partial stars
    if (rating % 1 !== 0) {
      stars[Math.floor(rating)] = (
        <svg 
          key={Math.floor(rating)} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          className="w-4 h-4 text-yellow-400"
        >
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
      );
    }
    
    return stars;
  };

  return (
    <section className="bg-hero-gradient text-white py-20 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-20">
        <div className="absolute top-[20%] left-[10%] w-24 h-24 md:w-40 md:h-40 rounded-full bg-accent-purple blur-[80px]"></div>
        <div className="absolute top-[40%] right-[15%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary blur-[100px]"></div>
        <div className="absolute bottom-[20%] left-[20%] w-28 h-28 md:w-36 md:h-36 rounded-full bg-accent-blue blur-[90px]"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex justify-between relative">
          {/* Left Side Profile Images - Only visible on tablet and larger */}
          <div className="hidden md:flex flex-col absolute left-0 top-0 bottom-0 w-[15%] lg:w-[18%]">
            <div className="relative h-full">
              <motion.div 
                className="absolute top-0 left-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="rounded-tl-3xl rounded-tr-xl rounded-bl-xl rounded-br-3xl overflow-hidden w-20 h-24 lg:w-28 lg:h-32 border-2 border-indigo-500/20">
                  <Image 
                    src="https://randomuser.me/api/portraits/men/1.jpg" 
                    alt="Talent profile" 
                    width={112} 
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute top-[30%] left-[15%]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <div className="rounded-tl-xl rounded-tr-3xl rounded-bl-3xl rounded-br-xl overflow-hidden w-24 h-28 lg:w-32 lg:h-36 border-2 border-indigo-500/20">
                  <Image 
                    src="https://randomuser.me/api/portraits/women/2.jpg" 
                    alt="Talent profile" 
                    width={128} 
                    height={144}
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-10 left-[5%]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <div className="rounded-tl-3xl rounded-tr-xl rounded-bl-xl rounded-br-3xl overflow-hidden w-24 h-28 lg:w-32 lg:h-36 border-2 border-indigo-500/20">
                  <Image 
                    src="https://randomuser.me/api/portraits/men/3.jpg" 
                    alt="Talent profile" 
                    width={128} 
                    height={144}
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Center Content */}
          <motion.div 
            className="w-full md:w-3/5 mx-auto flex flex-col items-center text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight"
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
              className="flex flex-col sm:flex-row gap-4 justify-center"
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
            
            <motion.div 
              className="mt-16"
              variants={itemVariants}
            >
              <div className="bg-dark-800/80 backdrop-blur-md rounded-2xl shadow-darkrise overflow-hidden p-4 md:p-6 border border-dark-700/50">
                <div className="rounded-xl bg-darkrise-accent p-[2px]">
                  <div className="bg-dark-800 rounded-lg p-5 h-auto w-72 md:w-96 flex items-center justify-center">
                    {/* Testimonial Card */}
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: isAnimating ? 0 : 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Testimonial content */}
                      <p className="text-white text-lg mb-6 leading-relaxed">"{currentTestimonial.quote}"</p>
                      
                      {/* User info */}
                      <div className="flex items-center justify-center mb-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30 mr-3">
                          <Image 
                            src={currentTestimonial.avatar}
                            alt={currentTestimonial.name}
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="text-left">
                          <h4 className="font-semibold text-white">{currentTestimonial.name}</h4>
                          <p className="text-primary text-sm">{currentTestimonial.role}</p>
                        </div>
                      </div>
                      
                      {/* Rating */}
                      <div className="flex justify-center items-center gap-1">
                        {renderStars(currentTestimonial.rating)}
                        <span className="text-white/80 text-sm ml-1">({currentTestimonial.rating})</span>
                      </div>
                      
                      {/* Navigation dots */}
                      <div className="flex justify-center gap-1.5 mt-5">
                        {testimonials.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setIsAnimating(true);
                              setTimeout(() => {
                                setCurrentTestimonialIndex(index);
                                setIsAnimating(false);
                              }, 500);
                            }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === currentTestimonialIndex 
                                ? 'bg-primary w-4' 
                                : 'bg-gray-500/50 hover:bg-gray-400/50'
                            }`}
                            aria-label={`View testimonial ${index + 1}`}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Side Profile Images - Only visible on tablet and larger */}
          <div className="hidden md:flex flex-col absolute right-0 top-0 bottom-0 w-[15%] lg:w-[18%]">
            <div className="relative h-full">
              <motion.div 
                className="absolute top-10 right-[5%]"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <div className="rounded-tl-xl rounded-tr-3xl rounded-bl-3xl rounded-br-xl overflow-hidden w-24 h-28 lg:w-32 lg:h-36 border-2 border-indigo-500/20">
                  <Image 
                    src="https://randomuser.me/api/portraits/women/4.jpg" 
                    alt="Talent profile" 
                    width={128} 
                    height={144}
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute top-[35%] right-[15%]"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <div className="rounded-tl-3xl rounded-tr-xl rounded-bl-xl rounded-br-3xl overflow-hidden w-20 h-24 lg:w-28 lg:h-32 border-2 border-indigo-500/20">
                  <Image 
                    src="https://randomuser.me/api/portraits/women/6.jpg" 
                    alt="Talent profile" 
                    width={112} 
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-0 right-0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                <div className="rounded-tl-xl rounded-tr-3xl rounded-bl-3xl rounded-br-xl overflow-hidden w-24 h-28 lg:w-32 lg:h-36 border-2 border-indigo-500/20">
                  <Image 
                    src="https://randomuser.me/api/portraits/men/7.jpg" 
                    alt="Talent profile" 
                    width={128} 
                    height={144}
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 