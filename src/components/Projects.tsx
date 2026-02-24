'use client'

import ProjectCard, { Project } from './ProjectCard'

// Images handled via Next.js import (which return an object usually, or string path depending on config, but here standard import)
// Note: In Next.js, imported images are objects with src, width, height. ProjectCard expects string currently.
// I'll update ProjectCard to handle StaticImageData or string, but for now let's assume standard behavior.
// Actually, `src={project.image}` works with StaticImport if I change the type in ProjectCard or pass .src.
// Let's coerce to string or update ProjectCard later if needed. For now, I'll use .src if it's an object, or just pass it.
// Checking legacy: it used `src={project.image}`. Vite imports give path string. Next.js gives object.
// I will need to use `.src` or update ProjectCard to use <Image>.
// For now, I will rename imports to be clear and pass .src if possible, or just Cast.
// Actually, better to just use Next.js <Image> in ProjectCard.
// But to minimize changes, I'll pass the string path.
// Standard import in Next.js: import x from '...' -> x is { src: '...', ... }

import silabaPreview from '../assets/silaba_preview_1767090031263.png'
import layarPreview from '../assets/layar_news_preview_1767090048986.png'
import inspektoratPreview from '../assets/inspektorat_preview_1767090065331.png'
import pMeetPreview from '../assets/p_meet_preview_1767090080233.png'

const projectsData: Project[] = [
  {
    title: "SILABA_APP",
    description: "Enterprise app for Pelindo using React and TypeScript. Improved user experience by 90% and delivered a well-structured codebase based on SOLID principles.",
    tags: ["React", "TypeScript", "SOLID"],
    github: "#",
    demo: "#",
    image: silabaPreview.src
  },
  {
    title: "LAYAR_NEWS",
    description: "Streaming and news application for TVRI featuring PEMILU statistics. Built with Laravel for reusable controller logic.",
    tags: ["Laravel", "PHP", "News API"],
    github: "#",
    demo: "#",
    image: layarPreview.src
  },
  {
    title: "INSPEKTORAT_SYSTEM",
    description: "Internal supervision system for Ministry of Finance. Accelerated search time by 90% using Angular and integrated .NET APIs.",
    tags: ["Angular", "Redux", ".NET", "Swagger"],
    github: "#",
    demo: "#",
    image: inspektoratPreview.src
  },
  {
    title: "P_MEET",
    description: "Meeting Room Management System. Redeveloped using React & TypeScript, increasing efficiency for organizers by 87%.",
    tags: ["React", "TypeScript", "Management"],
    github: "#",
    demo: "#",
    image: pMeetPreview.src
  }
]

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative z-10 bg-void-black/90">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-20 font-mono text-center">
          <span className="text-bio-green">&gt;</span> FEATURED_PROJECTS
        </h2>
        
        <div className="flex flex-col gap-32 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
