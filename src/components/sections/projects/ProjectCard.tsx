import Link from "next/link";
import { motion } from "framer-motion";

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  status: "open" | "in-progress" | "completed";
}

export default function ProjectCard({ id, title, description, category, status }: ProjectCardProps) {
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
    <motion.div 
      className="bg-dark-700 border border-dark-600 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:border-primary/30"
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.15)"
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
            {statusText[status]}
          </div>
          <div className="bg-dark-600 px-2.5 py-1 rounded-full text-xs font-medium text-gray-300">
            {category}
          </div>
        </div>
        
        <Link href={`/projects/${id}`}>
          <h3 className="text-lg font-semibold text-white mb-2 hover:text-primary transition-colors duration-200">
            {title}
          </h3>
        </Link>
        
        <p className="text-gray-400 text-sm line-clamp-2 mb-4">
          {description}
        </p>
        
        <div className="flex justify-end">
          <Link 
            href={`/projects/${id}`}
            className="text-sm font-medium text-primary hover:text-primary-focus transition-colors duration-200 flex items-center gap-1"
          >
            View Details
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
} 