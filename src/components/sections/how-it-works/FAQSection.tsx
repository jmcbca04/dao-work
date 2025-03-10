"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQSection() {
  // FAQ data
  const faqs = [
    {
      question: "How are payments handled on DAOWork?",
      answer: "Payments are secured through smart contracts that act as escrow. Funds are released automatically when predetermined milestones are completed and approved. This ensures security for both talent and project owners."
    },
    {
      question: "What types of skills are in demand on DAOWork?",
      answer: "Web3 talent is in high demand, particularly in areas such as smart contract development, blockchain architecture, tokenomics design, community management, DAO governance, and Web3 marketing. Technical roles like Solidity developers are especially sought after."
    },
    {
      question: "How does the rating system work?",
      answer: "After project completion, both parties can leave verified reviews and ratings. These are stored immutably on the blockchain and contribute to each user's reputation score. Higher ratings increase visibility and opportunities on the platform."
    },
    {
      question: "What fees does the platform charge?",
      answer: "DAOWork charges a small percentage fee on successful project completions. The fee structure is transparent and competitive compared to traditional freelance platforms, with reduced rates for long-term engagements and repeat collaborations."
    },
    {
      question: "Can I work with teams or only individuals?",
      answer: "DAOWork supports both individual contributors and teams. Project owners can hire individual talent or entire teams for more complex projects. Teams can create collective profiles to showcase their combined skill sets and past work."
    },
    {
      question: "How are disputes handled on the platform?",
      answer: "DAOWork provides a transparent dispute resolution system. If a disagreement occurs, both parties can present their case, and resolution is facilitated through a combination of platform mediation and community-based arbitration if necessary."
    },
  ];

  // State to track which FAQ is open
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-dark-800 to-dark-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute top-[30%] left-[10%] w-64 h-64 rounded-full bg-primary/5 blur-[100px]"></div>
      <div className="absolute bottom-[20%] right-[10%] w-64 h-64 rounded-full bg-accent-purple/5 blur-[100px]"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-400">
            Find answers to common questions about using the DAOWork platform
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left p-6 rounded-xl flex justify-between items-center ${
                  activeIndex === index 
                    ? 'bg-gradient-to-r from-primary/10 to-accent-purple/10 border border-primary/20' 
                    : 'bg-dark-800/50 border border-dark-700/50 hover:border-primary/20'
                } transition-all duration-300`}
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className={`w-5 h-5 text-primary transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pt-2 pb-6 text-gray-300 bg-dark-800/30 border-x border-b border-dark-700/50 rounded-b-xl">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-gray-400 max-w-2xl mx-auto">
            Can't find an answer to your question? Reach out to our support team at{' '}
            <a className="text-primary hover:text-primary/80 transition-colors">
              support@daowork.xyz
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
} 