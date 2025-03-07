'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = [
    { title: "Platform", links: [
      { name: "Find Talent", href: "/talent" },
      { name: "Find Projects", href: "/projects" },
      { name: "How It Works", href: "/how-it-works" }
    ]}
  ];

  return (
    <footer className="bg-dark-900 text-white border-t border-dark-800/50">
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 pb-10 border-b border-dark-800/50">
          {/* Logo and description */}
          <div>
            <Link href="/" className="text-xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-purple">DAO</span>
              <span className="text-white">Work</span>
            </Link>
            <p className="max-w-xs mt-4 text-sm text-gray-400 leading-relaxed">
              The premier marketplace connecting DAO contributors, Web3 consultants, and crypto professionals.
            </p>
          </div>
          
          {/* Footer link columns */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Copyright section */}
        <div className="pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} DAOWork. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;