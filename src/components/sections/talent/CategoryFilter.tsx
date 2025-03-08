"use client";

import { useState } from 'react';

interface CategoryFilterProps {
  onCategoryChange: (category: string) => void;
  selectedCategory: string;
}

export default function CategoryFilter({ onCategoryChange, selectedCategory }: CategoryFilterProps) {
  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'development', label: 'Development' },
    { id: 'design', label: 'Design' },
    { id: 'strategy', label: 'Strategy' },
    { id: 'legal', label: 'Legal' },
    { id: 'community', label: 'Community' },
    { id: 'security', label: 'Security' },
    { id: 'analytics', label: 'Analytics' },
  ];

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              selectedCategory === category.id
                ? 'bg-primary text-white shadow-md'
                : 'bg-dark-700/60 text-white hover:bg-dark-600 border border-indigo-500/20'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
} 