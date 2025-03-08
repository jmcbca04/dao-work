import { Metadata } from "next";
import { mockTalent } from "../../../data/mockTalent";
import Image from "next/image";
import Link from "next/link";

// Generate metadata for the page dynamically
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const talent = mockTalent.find((p) => p.id === params.id);
  
  if (!talent) {
    return {
      title: "Talent Not Found | DAOWork",
    };
  }
  
  return {
    title: `${talent.name} - ${talent.title} | DAOWork`,
    description: talent.bio,
  };
}

export default function TalentDetailPage({ params }: { params: { id: string } }) {
  const talent = mockTalent.find((p) => p.id === params.id);
  
  if (!talent) {
    return (
      <div className="min-h-screen bg-dark-800 pt-16 pb-24">
        <div className="container mx-auto px-8">
          <div className="bg-dark-700 p-8 rounded-xl">
            <h1 className="text-2xl font-bold text-dark-50 mb-4">Talent Not Found</h1>
            <p className="text-dark-200 mb-6">The talent you're looking for does not exist or has been removed.</p>
            <Link href="/talent" className="text-primary hover:underline">
              ← Back to Talent Directory
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Function to get appropriate badge color based on experience level
  const getExperienceBadgeColor = (level: string) => {
    switch (level) {
      case 'junior':
        return 'bg-blue-500/10 text-blue-400';
      case 'mid-level':
        return 'bg-green-500/10 text-green-400';
      case 'senior':
        return 'bg-orange-500/10 text-orange-400';
      case 'expert':
        return 'bg-purple-500/10 text-purple-400';
      default:
        return 'bg-gray-500/10 text-gray-400';
    }
  };

  // Function to get appropriate badge color based on availability
  const getAvailabilityBadgeColor = (availability: string) => {
    switch (availability) {
      case 'full-time':
        return 'bg-green-500/10 text-green-400';
      case 'part-time':
        return 'bg-blue-500/10 text-blue-400';
      case 'contract':
        return 'bg-orange-500/10 text-orange-400';
      case 'not available':
        return 'bg-red-500/10 text-red-400';
      default:
        return 'bg-gray-500/10 text-gray-400';
    }
  };
  
  return (
    <div className="min-h-screen bg-dark-800 pt-16 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <Link href="/talent" className="text-primary hover:underline inline-flex items-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Talent Directory
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-2">
            <div className="bg-dark-800 border border-dark-700 rounded-xl overflow-hidden mb-8">
              {/* Header with basic info */}
              <div className="p-8 border-b border-dark-700">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="relative h-24 w-24 rounded-full overflow-hidden mr-6 border-2 border-primary/20 mb-4 md:mb-0">
                    <Image
                      src={talent.avatar}
                      alt={talent.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-dark-50 mb-1">{talent.name}</h1>
                    <p className="text-xl text-primary mb-2">{talent.title}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className={`text-xs px-2 py-1 rounded ${getExperienceBadgeColor(talent.experienceLevel)}`}>
                        {talent.experienceLevel.charAt(0).toUpperCase() + talent.experienceLevel.slice(1)}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded ${getAvailabilityBadgeColor(talent.availability)}`}>
                        {talent.availability.charAt(0).toUpperCase() + talent.availability.slice(1)}
                      </span>
                      {talent.details?.governance?.experience && (
                        <span className="text-xs bg-indigo-500/10 text-indigo-400 px-2 py-1 rounded">
                          DAO Governance
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bio Section */}
              <div className="p-8 border-b border-dark-700">
                <h2 className="text-xl font-bold text-dark-50 mb-4">About</h2>
                <p className="text-dark-200 whitespace-pre-line">{talent.bio}</p>
              </div>
              
              {/* Skills Section */}
              <div className="p-8 border-b border-dark-700">
                <h2 className="text-xl font-bold text-dark-50 mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {talent.skills.map((skill, index) => (
                    <span key={index} className="bg-dark-700 text-dark-100 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Previous DAOs */}
              {talent.details?.previousDAOs && talent.details.previousDAOs.length > 0 && (
                <div className="p-8 border-b border-dark-700">
                  <h2 className="text-xl font-bold text-dark-50 mb-4">Previous DAO Experience</h2>
                  <div className="flex flex-wrap gap-2">
                    {talent.details.previousDAOs.map((dao, index) => (
                      <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {dao}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Languages */}
              {talent.details?.languages && talent.details.languages.length > 0 && (
                <div className="p-8">
                  <h2 className="text-xl font-bold text-dark-50 mb-4">Languages</h2>
                  <div className="flex flex-wrap gap-2">
                    {talent.details.languages.map((language, index) => (
                      <span key={index} className="bg-dark-700 text-dark-100 px-3 py-1 rounded-full text-sm">
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Right Column - Stats & Contact */}
          <div>
            {/* Contact Card */}
            <div className="bg-dark-800 border border-dark-700 rounded-xl overflow-hidden mb-8 sticky top-4">
              <div className="p-6 border-b border-dark-700">
                <h2 className="text-xl font-bold text-dark-50 mb-4">Availability & Rate</h2>
                <div className="flex justify-between mb-4">
                  <span className="text-dark-200">Hourly Rate:</span>
                  <span className="text-dark-50 font-semibold">{talent.hourlyRate}</span>
                </div>
                <div className="flex justify-between mb-6">
                  <span className="text-dark-200">Location:</span>
                  <span className="text-dark-50">{talent.details?.location || 'Remote'}</span>
                </div>
                <button className="bg-primary hover:bg-primary-dark text-white w-full py-3 rounded-lg font-medium transition-colors mb-3">
                  Contact
                </button>
                <button className="bg-dark-700 hover:bg-dark-600 text-dark-100 w-full py-3 rounded-lg font-medium transition-colors">
                  Save Profile
                </button>
              </div>
              
              {/* Stats Card */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-dark-50 mb-4">Stats & Reputation</h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-dark-700 rounded-lg text-center">
                    <div className="flex justify-center mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-dark-50">{talent.rating}</div>
                    <div className="text-dark-300 text-sm">{talent.reviews} reviews</div>
                  </div>
                  <div className="p-4 bg-dark-700 rounded-lg text-center">
                    <div className="flex justify-center mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-dark-50">{talent.completedProjects}</div>
                    <div className="text-dark-300 text-sm">Projects</div>
                  </div>
                </div>
                
                {/* Social Links */}
                {talent.details?.social && Object.values(talent.details.social).length > 0 && (
                  <div>
                    <h3 className="text-dark-200 mb-3 text-sm">Connect with {talent.name.split(' ')[0]}</h3>
                    <div className="flex gap-3">
                      {talent.details.social.twitter && (
                        <a href={`https://twitter.com/${talent.details.social.twitter.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-dark-300 hover:text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                        </a>
                      )}
                      {talent.details.social.github && (
                        <a href={`https://github.com/${talent.details.social.github}`} target="_blank" rel="noopener noreferrer" className="text-dark-300 hover:text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                        </a>
                      )}
                      {talent.details.social.linkedin && (
                        <a href={`https://linkedin.com/in/${talent.details.social.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-dark-300 hover:text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      )}
                      {talent.details.portfolio && (
                        <a href={talent.details.portfolio} target="_blank" rel="noopener noreferrer" className="text-dark-300 hover:text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 