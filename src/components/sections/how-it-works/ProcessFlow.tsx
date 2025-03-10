"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ProcessFlow() {
  const [activeStep, setActiveStep] = useState(0);
  
  // Steps data
  const steps = [
    {
      number: "01",
      title: "Create Your Profile or List Your Project",
      description: "Build a comprehensive profile showcasing your Web3 skills or list your blockchain project with detailed requirements.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      ),
      detail: "Start by creating your profile with your skills, experience, and portfolio or post a detailed project with clear requirements, timeline and budget expectations."
    },
    {
      number: "02",
      title: "Connect with Talent or Projects",
      description: "Browse through available talent or projects and directly connect with those that match your requirements.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </svg>
      ),
      detail: "Use our advanced matching algorithm to find the perfect talent or project. Filter by skills, budget, timeline, and reputation score to find your ideal match."
    },
    {
      number: "03",
      title: "Establish Terms with Smart Contracts",
      description: "Set up secure collaboration terms using our blockchain-based smart contracts with milestone deliverables.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
        </svg>
      ),
      detail: "Our platform offers customizable smart contract templates that define clear milestones, payment terms, and deliverables, providing security and transparency for both parties."
    },
    {
      number: "04",
      title: "Collaborate and Complete Work",
      description: "Work together through our platform with integrated tools for efficient communication and project tracking.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
        </svg>
      ),
      detail: "Collaborate through our integrated messaging system, file sharing tools, and progress tracking dashboard. Regular updates and milestone approvals keep projects on track."
    },
    {
      number: "05",
      title: "Receive Payment and Provide Feedback",
      description: "Secure payment is released upon milestone completion, and both parties can leave feedback to build reputation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
      detail: "Once milestones are approved, payments are automatically released from escrow. Both talent and project owners leave reviews that contribute to their blockchain-verified reputation score."
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-dark-800 to-dark-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute top-[30%] left-[5%] w-64 h-64 rounded-full bg-primary/5 blur-[100px]"></div>
      <div className="absolute bottom-[20%] right-[5%] w-72 h-72 rounded-full bg-accent-purple/5 blur-[120px]"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            The DAOWork Process
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Our streamlined workflow makes it easy to connect, collaborate, and complete projects
          </p>

          {/* Timeline Progress Bar */}
          <div className="relative max-w-5xl mx-auto mb-10 hidden md:block">
            <div className="h-1 bg-dark-700 rounded-full">
              <motion.div 
                className="h-full bg-gradient-to-r from-primary to-accent-purple rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${(activeStep + 1) * 20}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <div className="flex justify-between absolute w-full top-0 -mt-2.5">
              {steps.map((step, index) => (
                <motion.button
                  key={index}
                  className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${
                    index <= activeStep ? 'bg-primary border-primary' : 'bg-dark-800 border-dark-700'
                  }`}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {index < activeStep && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Step Numbers - Mobile Version */}
          <div className="flex justify-center gap-3 mb-6 md:hidden">
            {steps.map((step, index) => (
              <motion.button
                key={index}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                  index === activeStep 
                    ? 'bg-primary text-white' 
                    : 'bg-dark-800 text-gray-400 border border-dark-700'
                }`}
                onClick={() => setActiveStep(index)}
                whileTap={{ scale: 0.95 }}
              >
                {index + 1}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        {/* Step Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          key={activeStep}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-dark-700/50 shadow-darkrise">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-dark-700/80 rounded-2xl flex items-center justify-center mb-3">
                  {steps[activeStep].icon}
                </div>
                <div className="text-center md:text-left">
                  <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-purple">
                    {steps[activeStep].number}
                  </span>
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-white">{steps[activeStep].title}</h3>
                <p className="text-gray-300 mb-6">{steps[activeStep].description}</p>
                <p className="text-gray-400">{steps[activeStep].detail}</p>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-10">
              <button 
                onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg ${
                  activeStep === 0 
                    ? 'bg-dark-700/50 text-gray-500 cursor-not-allowed' 
                    : 'bg-dark-700 text-white hover:bg-dark-600 border border-primary/30'
                } transition-colors duration-200 font-medium`}
                disabled={activeStep === 0}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                <span>Previous</span>
              </button>
              
              <button 
                onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium ${
                  activeStep === steps.length - 1 
                    ? 'bg-primary/30 text-gray-300 cursor-not-allowed' 
                    : 'bg-primary text-white hover:bg-primary/90'
                } transition-colors duration-200 shadow-md`}
                disabled={activeStep === steps.length - 1}
              >
                <span>Next</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
        
        {/* Step Indicators - Dots at Bottom */}
        <div className="flex justify-center mt-8 gap-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                index === activeStep ? 'bg-primary' : 'bg-dark-700'
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 