'use client'

import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  image?: string;
  tech?: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Custom SVG for External Link as requested
const CustomExternalLink = ({ size = 20 }: { size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    role="img" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    width={size} 
    height={size}
  >
    <title>Preview Link</title>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
)

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative grid grid-cols-1 md:grid-cols-12 items-center group w-full mb-12 md:mb-0"
    >
      {/* Project Image */}
      <div 
        className={`relative w-full h-80 md:h-90 rounded-xl overflow-hidden shadow-2xl z-10
          col-start-1 col-span-1 md:col-span-7 row-start-1
          ${isEven ? 'md:col-start-1' : 'md:col-start-6'}
        `}
      >
        {/* Mobile overlay */}
        <div className="absolute inset-0 bg-gray-900/85 md:hidden z-10" />
        {/* Desktop overlay */}
        <div className="absolute inset-0 hidden md:block bg-bio-green/30 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500 z-10" />
        
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover object-center transform md:group-hover:scale-105 transition-transform duration-500 md:grayscale md:group-hover:grayscale-0"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-800">
            <span className="text-gray-600 font-mono">No Preview Available</span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div 
        className={`relative flex flex-col justify-center z-20 p-6 md:p-0
          col-start-1 col-span-1 md:col-span-7 row-start-1
          ${isEven ? 'md:col-start-6 md:items-end md:text-right' : 'md:col-start-1 md:items-start md:text-left'}
        `}
      >
        <p className="text-bio-green font-mono text-xs md:text-sm mb-2 tracking-widest drop-shadow-md">
          Featured Project
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-white md:mb-6 hover:text-bio-green transition-colors cursor-pointer drop-shadow-md">
          {project.title}
        </h3>
        
        {/* Description Box Overlapping */}
        <div 
          className="z-30 py-6 md:p-6 rounded-xl md:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)] mb-4 md:mb-6 text-gray-300 text-sm md:text-base leading-relaxed w-full bg-transparent md:bg-[#112240] transition-shadow md:hover:shadow-[0_10px_30px_-15px_rgba(16,185,129,0.2)]"
        >
          {project.description}
        </div>

        {/* Tech Stack */}
        <ul className={`flex flex-wrap gap-x-5 gap-y-2 text-gray-400 font-mono text-xs mb-6 w-full drop-shadow-md
          ${isEven ? "justify-start md:justify-end" : "justify-start"}
        `}>
          {project.tags.map(tag => (
            <li key={tag} className="hover:text-bio-green transition-colors cursor-default whitespace-nowrap">
              {tag}
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className={`flex gap-5 items-center text-gray-400 w-full drop-shadow-md
          ${isEven ? "justify-start md:justify-end" : "justify-start"}
        `}>
          <a 
            href={project.github} 
            className="hover:text-bio-green transition-colors md:hover:-translate-y-1 transform duration-300"
            aria-label="GitHub Repository"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={22} />
          </a>
          <a 
            href={project.demo} 
            className="hover:text-bio-green transition-colors md:hover:-translate-y-1 transform duration-300"
            aria-label="External Link"
            target="_blank"
            rel="noreferrer"
          >
            <CustomExternalLink size={24} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
