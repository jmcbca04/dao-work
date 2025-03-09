"use client";

import { motion } from "framer-motion";

type CategoryFilterProps = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

const categories = [
  { id: "all", name: "All Projects" },
  { id: "development", name: "Development" },
  { id: "design", name: "Design" },
  { id: "marketing", name: "Marketing" },
  { id: "community", name: "Community" },
  { id: "finance", name: "Finance" },
  { id: "security", name: "Security" },
  { id: "analytics", name: "Analytics" },
];

export default function CategoryFilter({ selectedCategory, setSelectedCategory }: CategoryFilterProps) {
  return (
    <motion.div 
      className="mb-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <div className="overflow-x-auto pb-3 hide-scrollbar">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 
                ${selectedCategory === category.id 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-dark-700/60 text-white hover:bg-dark-600 border border-indigo-500/20'}`
              }
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 