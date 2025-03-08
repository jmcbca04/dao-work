"use client";

import { useState } from 'react';

interface SortOptionsProps {
  onSortChange: (sortBy: string) => void;
  currentSort: string;
}

export default function SortOptions({ onSortChange, currentSort }: SortOptionsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSortSelection = (sortOption: string) => {
    onSortChange(sortOption);
    setIsOpen(false);
  };

  // Sort options
  const sortOptions = [
    { id: 'relevance', label: 'Relevance' },
    { id: 'rating', label: 'Highest Rating' },
    { id: 'projects', label: 'Most Projects' },
    { id: 'rate-low', label: 'Rate: Low to High' },
    { id: 'rate-high', label: 'Rate: High to Low' },
  ];

  // Find current sort label
  const currentSortLabel = sortOptions.find(option => option.id === currentSort)?.label || 'Sort by';

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between bg-dark-700/80 hover:bg-dark-600 text-white py-2.5 px-5 rounded-md min-w-[180px] border border-indigo-500/20 shadow-sm"
      >
        <span>{currentSortLabel}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-4 h-4 ml-2 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1.5 bg-dark-700/90 rounded-md shadow-xl border border-indigo-500/30 w-full z-10 backdrop-blur-sm overflow-hidden">
          <ul>
            {sortOptions.map((option) => (
              <li key={option.id}>
                <button
                  onClick={() => handleSortSelection(option.id)}
                  className={`block w-full text-left px-4 py-2.5 hover:bg-primary/20 transition-colors ${
                    currentSort === option.id ? 'bg-primary/30 text-white font-medium' : 'text-white'
                  }`}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
} 