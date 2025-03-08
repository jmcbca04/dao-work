"use client";

import { useState, useEffect } from 'react';
import TalentCard from './TalentCard';
import CategoryFilter from './CategoryFilter';
import FilterControls from './FilterControls';
import SortOptions from './SortOptions';
import { mockTalent, Talent } from '../../../data/mockTalent';

export default function TalentList() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [rateRange, setRateRange] = useState({ min: 0, max: 300 });
  const [currentSort, setCurrentSort] = useState('relevance');
  const [filteredTalent, setFilteredTalent] = useState<Talent[]>(mockTalent);

  // Apply filters whenever they change
  useEffect(() => {
    let filtered = [...mockTalent];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((talent) => talent.primarySkill === selectedCategory);
    }

    // Filter by experience
    if (selectedExperience.length > 0) {
      filtered = filtered.filter((talent) => selectedExperience.includes(talent.experienceLevel));
    }

    // Filter by availability
    if (selectedAvailability.length > 0) {
      filtered = filtered.filter((talent) => selectedAvailability.includes(talent.availability));
    }

    // Filter by rate range
    if (rateRange.min > 0 || rateRange.max < 300) {
      filtered = filtered.filter((talent) => {
        // Extract numeric rate range
        const rateString = talent.hourlyRate.replace(/\$/g, '');
        const rates = rateString.split('-').map(r => parseInt(r.trim(), 10));
        
        // Use the lower end of the range for comparison
        const talentRate = rates[0] || 0;
        
        return talentRate >= rateRange.min && talentRate <= rateRange.max;
      });
    }

    // Apply sorting
    switch (currentSort) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'projects':
        filtered.sort((a, b) => b.completedProjects - a.completedProjects);
        break;
      case 'rate-low':
        filtered.sort((a, b) => {
          const aRate = parseInt(a.hourlyRate.replace(/\$/g, '').split('-')[0], 10) || 0;
          const bRate = parseInt(b.hourlyRate.replace(/\$/g, '').split('-')[0], 10) || 0;
          return aRate - bRate;
        });
        break;
      case 'rate-high':
        filtered.sort((a, b) => {
          const aRate = parseInt(a.hourlyRate.replace(/\$/g, '').split('-')[0], 10) || 0;
          const bRate = parseInt(b.hourlyRate.replace(/\$/g, '').split('-')[0], 10) || 0;
          return bRate - aRate;
        });
        break;
      case 'relevance':
      default:
        // By default, we don't change the order
        break;
    }

    setFilteredTalent(filtered);
  }, [selectedCategory, selectedExperience, selectedAvailability, rateRange, currentSort]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleExperienceChange = (experience: string[]) => {
    setSelectedExperience(experience);
  };

  const handleAvailabilityChange = (availability: string[]) => {
    setSelectedAvailability(availability);
  };

  const handleRateRangeChange = (min: number, max: number) => {
    setRateRange({ min, max });
  };

  const handleSortChange = (sortBy: string) => {
    setCurrentSort(sortBy);
  };

  return (
    <div>
      {/* Filters Section */}
      <div className="mb-8 bg-dark-800/40 p-6 rounded-xl border border-indigo-500/10 backdrop-blur-sm">
        <CategoryFilter
          onCategoryChange={handleCategoryChange}
          selectedCategory={selectedCategory}
        />
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
          <FilterControls
            onExperienceChange={handleExperienceChange}
            onAvailabilityChange={handleAvailabilityChange}
            onRateRangeChange={handleRateRangeChange}
            selectedExperience={selectedExperience}
            selectedAvailability={selectedAvailability}
            rateRange={rateRange}
          />
          
          <div className="flex items-center">
            <span className="text-white mr-3 opacity-80">Sort:</span>
            <SortOptions 
              onSortChange={handleSortChange}
              currentSort={currentSort}
            />
          </div>
        </div>
        
        {/* Active filters display */}
        {(selectedExperience.length > 0 || selectedAvailability.length > 0 || selectedCategory !== 'all') && (
          <div className="flex flex-wrap gap-2 mb-2">
            {selectedCategory !== 'all' && (
              <span className="bg-primary/20 text-white px-3 py-1.5 text-sm rounded-full flex items-center border border-primary/30">
                Category: {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="ml-2 hover:text-primary"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            )}
            
            {selectedExperience.map(exp => (
              <span key={exp} className="bg-orange-500/20 text-white px-3 py-1.5 text-sm rounded-full flex items-center border border-orange-400/30">
                {exp.charAt(0).toUpperCase() + exp.slice(1)}
                <button
                  onClick={() => setSelectedExperience(selectedExperience.filter(e => e !== exp))}
                  className="ml-2 hover:text-orange-400"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            ))}
            
            {selectedAvailability.map(avail => (
              <span key={avail} className="bg-green-500/20 text-white px-3 py-1.5 text-sm rounded-full flex items-center border border-green-400/30">
                {avail.charAt(0).toUpperCase() + avail.slice(1)}
                <button
                  onClick={() => setSelectedAvailability(selectedAvailability.filter(a => a !== avail))}
                  className="ml-2 hover:text-green-400"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            ))}
            
            {(selectedExperience.length > 0 || selectedAvailability.length > 0 || selectedCategory !== 'all') && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedExperience([]);
                  setSelectedAvailability([]);
                  setRateRange({ min: 0, max: 300 });
                }}
                className="text-white hover:text-primary px-3 py-1.5 text-sm underline"
              >
                Clear All Filters
              </button>
            )}
          </div>
        )}
      </div>
      
      {/* Featured Talent Section */}
      {selectedCategory === 'all' && selectedExperience.length === 0 && selectedAvailability.length === 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6 text-white">Featured Talent</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockTalent.filter(t => t.rating >= 4.9).slice(0, 3).map((talent) => (
              <TalentCard key={talent.id} talent={talent} />
            ))}
          </div>
        </div>
      )}
      
      {/* Talent List */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            {selectedCategory === 'all' ? 'All Talent' : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Talent`}
          </h2>
          <p className="text-white opacity-80">{filteredTalent.length} results</p>
        </div>
        
        {filteredTalent.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTalent.map((talent) => (
              <TalentCard key={talent.id} talent={talent} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-dark-800/60 rounded-lg border border-indigo-500/20">
            <p className="text-xl text-white mb-4">No talent matches your filters</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedExperience([]);
                setSelectedAvailability([]);
              }}
              className="text-primary hover:text-primary-light hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 