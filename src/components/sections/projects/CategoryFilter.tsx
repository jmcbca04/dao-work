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
      className="mb-8 overflow-x-auto"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <div className="flex space-x-2 pb-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 
              ${selectedCategory === category.id 
                ? 'bg-primary text-white' 
                : 'bg-dark-700 text-gray-400 hover:bg-dark-600 hover:text-white'}`
            }
          >
            {category.name}
          </button>
        ))}
      </div>
    </motion.div>
  );
} 