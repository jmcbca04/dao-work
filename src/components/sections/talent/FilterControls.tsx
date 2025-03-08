"use client";

import { useState } from 'react';

interface FilterControlsProps {
  onExperienceChange: (experience: string[]) => void;
  onAvailabilityChange: (availability: string[]) => void;
  onRateRangeChange: (min: number, max: number) => void;
  selectedExperience: string[];
  selectedAvailability: string[];
  rateRange: { min: number, max: number };
}

export default function FilterControls({
  onExperienceChange,
  onAvailabilityChange,
  onRateRangeChange,
  selectedExperience,
  selectedAvailability,
  rateRange
}: FilterControlsProps) {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [localRateMin, setLocalRateMin] = useState(rateRange.min);
  const [localRateMax, setLocalRateMax] = useState(rateRange.max);

  const handleExperienceToggle = (experience: string) => {
    if (selectedExperience.includes(experience)) {
      onExperienceChange(selectedExperience.filter(exp => exp !== experience));
    } else {
      onExperienceChange([...selectedExperience, experience]);
    }
  };

  const handleAvailabilityToggle = (availability: string) => {
    if (selectedAvailability.includes(availability)) {
      onAvailabilityChange(selectedAvailability.filter(avail => avail !== availability));
    } else {
      onAvailabilityChange([...selectedAvailability, availability]);
    }
  };

  const applyRateRange = () => {
    onRateRangeChange(localRateMin, localRateMax);
  };

  const experienceLevels = [
    { id: 'junior', label: 'Junior' },
    { id: 'mid-level', label: 'Mid-Level' },
    { id: 'senior', label: 'Senior' },
    { id: 'expert', label: 'Expert' },
  ];

  const availabilityOptions = [
    { id: 'full-time', label: 'Full-time' },
    { id: 'part-time', label: 'Part-time' },
    { id: 'contract', label: 'Contract' },
    { id: 'not available', label: 'Not Available' },
  ];

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsFiltersVisible(!isFiltersVisible)}
        className="flex items-center text-primary hover:text-primary-light mb-4 font-medium"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
          />
        </svg>
        Advanced Filters {isFiltersVisible ? '(Hide)' : '(Show)'}
      </button>

      {isFiltersVisible && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-dark-800/80 p-6 rounded-lg border border-indigo-500/20 shadow-md mb-6">
          {/* Experience Level Filter */}
          <div>
            <h3 className="font-medium text-white mb-3 text-sm">Experience Level</h3>
            <div className="space-y-2">
              {experienceLevels.map((level) => (
                <label key={level.id} className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary checkbox-sm mr-2"
                    checked={selectedExperience.includes(level.id)}
                    onChange={() => handleExperienceToggle(level.id)}
                  />
                  <span className="text-white opacity-90">{level.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Availability Filter */}
          <div>
            <h3 className="font-medium text-white mb-3 text-sm">Availability</h3>
            <div className="space-y-2">
              {availabilityOptions.map((option) => (
                <label key={option.id} className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary checkbox-sm mr-2"
                    checked={selectedAvailability.includes(option.id)}
                    onChange={() => handleAvailabilityToggle(option.id)}
                  />
                  <span className="text-white opacity-90">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Hourly Rate Range */}
          <div>
            <h3 className="font-medium text-white mb-3 text-sm">Hourly Rate (USD)</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div>
                  <label className="text-xs text-white opacity-70 block mb-1">Min</label>
                  <input
                    type="number"
                    className="w-full p-2 bg-dark-700 border border-indigo-500/30 rounded text-white focus:border-primary focus:outline-none"
                    value={localRateMin}
                    onChange={(e) => setLocalRateMin(parseInt(e.target.value) || 0)}
                    min="0"
                  />
                </div>
                <div>
                  <label className="text-xs text-white opacity-70 block mb-1">Max</label>
                  <input
                    type="number"
                    className="w-full p-2 bg-dark-700 border border-indigo-500/30 rounded text-white focus:border-primary focus:outline-none"
                    value={localRateMax}
                    onChange={(e) => setLocalRateMax(parseInt(e.target.value) || 0)}
                    min="0"
                  />
                </div>
              </div>
              <button
                onClick={applyRateRange}
                className="bg-primary/20 hover:bg-primary/30 text-primary hover:text-white px-3 py-2 rounded text-sm w-full font-medium transition-colors border border-primary/30"
              >
                Apply Range
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 