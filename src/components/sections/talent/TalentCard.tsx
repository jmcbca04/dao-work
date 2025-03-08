"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Talent } from '../../../data/mockTalent';

interface TalentCardProps {
  talent: Talent;
}

export default function TalentCard({ talent }: TalentCardProps) {
  // Function to get appropriate badge color based on experience level
  const getExperienceBadgeColor = (level: string) => {
    switch (level) {
      case 'junior':
        return 'bg-blue-500/20 text-blue-300 border border-blue-500/30';
      case 'mid-level':
        return 'bg-green-500/20 text-green-300 border border-green-500/30';
      case 'senior':
        return 'bg-orange-500/20 text-orange-300 border border-orange-500/30';
      case 'expert':
        return 'bg-purple-500/20 text-purple-300 border border-purple-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border border-gray-500/30';
    }
  };

  // Function to get appropriate badge color based on availability
  const getAvailabilityBadgeColor = (availability: string) => {
    switch (availability) {
      case 'full-time':
        return 'bg-green-500/20 text-green-300 border border-green-500/30';
      case 'part-time':
        return 'bg-blue-500/20 text-blue-300 border border-blue-500/30';
      case 'contract':
        return 'bg-orange-500/20 text-orange-300 border border-orange-500/30';
      case 'not available':
        return 'bg-red-500/20 text-red-300 border border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border border-gray-500/30';
    }
  };

  return (
    <div className="bg-dark-800/90 border border-indigo-500/20 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col shadow-md">
      <div className="p-6">
        <div className="flex items-center mb-5">
          <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4 border-2 border-primary/30 shadow-md">
            <Image
              src={talent.avatar}
              alt={talent.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{talent.name}</h3>
            <p className="text-primary text-md font-medium">{talent.title}</p>
          </div>
        </div>
        
        <p className="text-white/90 mb-5 line-clamp-2 text-base leading-relaxed">{talent.bio}</p>
        
        {/* Skills section */}
        <div className="mb-5">
          <div className="flex flex-wrap gap-1.5 mb-2">
            {talent.skills.slice(0, 3).map((skill, index) => (
              <span key={index} className="text-sm bg-dark-700/80 text-white border border-indigo-500/20 px-2.5 py-1 rounded-md">
                {skill}
              </span>
            ))}
            {talent.skills.length > 3 && (
              <span className="text-sm bg-dark-700/80 text-white border border-indigo-500/20 px-2.5 py-1 rounded-md">
                +{talent.skills.length - 3}
              </span>
            )}
          </div>
        </div>
        
        {/* Stats row */}
        <div className="flex justify-between text-sm mb-5 bg-dark-900/40 p-2.5 rounded-lg border border-indigo-500/10">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-300 mr-1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            <span className="text-white font-medium">{talent.rating}</span>
            <span className="text-white/70 ml-1">({talent.reviews})</span>
          </div>
          <div className="text-white">
            <span className="font-medium">{talent.completedProjects}</span> projects
          </div>
          <div className="text-white font-medium">
            {talent.hourlyRate}/hr
          </div>
        </div>
        
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`text-sm px-3 py-1.5 rounded-md font-medium ${getExperienceBadgeColor(talent.experienceLevel)}`}>
            {talent.experienceLevel.charAt(0).toUpperCase() + talent.experienceLevel.slice(1)}
          </span>
          <span className={`text-sm px-3 py-1.5 rounded-md font-medium ${getAvailabilityBadgeColor(talent.availability)}`}>
            {talent.availability.charAt(0).toUpperCase() + talent.availability.slice(1)}
          </span>
          {talent.details?.governance?.experience && (
            <span className="text-sm bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-3 py-1.5 rounded-md font-medium">
              DAO Governance
            </span>
          )}
        </div>
      </div>
      
      {/* Card footer */}
      <div className="mt-auto pt-4 px-6 pb-6 border-t border-indigo-500/20 flex justify-between">
        <Link 
          href={`/talent/${talent.id}`}
          className="text-primary hover:text-primary-light hover:underline text-sm font-medium"
        >
          View Profile
        </Link>
        <button className="bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 hover:text-white text-sm px-4 py-1.5 rounded-md transition-colors font-medium">
          Contact
        </button>
      </div>
    </div>
  );
} 