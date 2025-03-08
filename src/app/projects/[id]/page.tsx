import { Metadata } from "next";
import Link from "next/link";
import { mockProjects } from "@/data/mockProjects";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string }
};

export function generateMetadata({ params }: Props): Metadata {
  const project = mockProjects.find(p => p.id === params.id);
  
  if (!project) {
    return {
      title: "Project Not Found | DAOWork"
    };
  }
  
  return {
    title: `${project.title} | DAOWork Projects`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = mockProjects.find(p => p.id === params.id);
  
  if (!project) {
    notFound();
  }
  
  // Status badge colors
  const statusColors = {
    "open": "bg-green-500/20 text-green-400",
    "in-progress": "bg-blue-500/20 text-blue-400",
    "completed": "bg-gray-500/20 text-gray-400"
  };

  const statusText = {
    "open": "Open",
    "in-progress": "In Progress",
    "completed": "Completed"
  };

  return (
    <div className="w-full bg-dark-800 min-h-screen">
      <div className="container mx-auto px-8 py-16">
        <div className="mb-8">
          <Link 
            href="/projects" 
            className="text-gray-400 hover:text-primary flex items-center gap-1 mb-8 transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to Projects
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h1 className="text-3xl font-bold text-white">{project.title}</h1>
            
            <div className="flex gap-3">
              <div className={`px-3 py-1.5 rounded-full text-sm font-medium ${statusColors[project.status]}`}>
                {statusText[project.status]}
              </div>
              
              <div className="bg-dark-700 px-3 py-1.5 rounded-full text-sm font-medium text-gray-300">
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
              </div>
            </div>
          </div>
          
          <p className="text-xl text-gray-400 mb-10">{project.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {project.details && (
              <>
                {project.details.budget && (
                  <div className="bg-dark-700 rounded-xl p-6">
                    <h3 className="text-gray-400 text-sm font-medium mb-2">Budget</h3>
                    <p className="text-xl text-white font-semibold">{project.details.budget}</p>
                  </div>
                )}
                
                {project.details.timeline && (
                  <div className="bg-dark-700 rounded-xl p-6">
                    <h3 className="text-gray-400 text-sm font-medium mb-2">Timeline</h3>
                    <p className="text-xl text-white font-semibold">{project.details.timeline}</p>
                  </div>
                )}
                
                {project.details.location && (
                  <div className="bg-dark-700 rounded-xl p-6">
                    <h3 className="text-gray-400 text-sm font-medium mb-2">Location</h3>
                    <p className="text-xl text-white font-semibold">{project.details.location}</p>
                  </div>
                )}
              </>
            )}
          </div>
          
          {project.details?.skills && (
            <div className="mb-12">
              <h2 className="text-xl font-semibold text-white mb-4">Required Skills</h2>
              <div className="flex flex-wrap gap-2">
                {project.details.skills.map((skill, index) => (
                  <div key={index} className="bg-dark-700 px-3 py-1.5 rounded-full text-sm text-gray-300">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="flex justify-center">
            <button className="btn btn-primary btn-lg normal-case px-12">
              {project.status === 'open' ? 'Apply for This Project' : 'Contact Project Owner'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 