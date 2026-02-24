'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

// Note: Briefcase is imported but not used in the map, so I'll keep it just in case or remove if unused warning.
// It wasn't used in the legacy code snippet provided (inside map).

const experiences = [
  {
    company: "PT Pelindo Solusi Digital",
    role: "Fullstack Developer, Enterprise Digital Solution",
    period: "Present",
    location: "Jakarta, ID",
    description: [
      "Maintained critical backend services using ASP.NET Core, processing transactions valued at billions of rupiah.",
      "Designed and optimized RESTful APIs using .NET 8, achieving 95% reduction in manual errors.",
      "Managed CI/CD pipelines for automated deployments to cloud environments.",
      "Developed responsive frontend applications using React.js and Redux, improving efficiency by 30%."
    ]
  },
  {
    company: "PT Pelabuhan Indonesia (Persero)",
    role: "Frontend Engineer Intern",
    period: "Jan 2023 – Jun 2023",
    location: "Jakarta, ID",
    description: [
      "Developed SILABA app using React and TypeScript, improving user experience by 90%.",
      "Created comprehensive user documentation reducing support queries by 88%.",
      "Redeveloped P-Meet app, increasing efficiency for meeting organizers by 87%."
    ]
  },
  {
    company: "Kementerian Keuangan RI",
    role: "Fullstack Developer Intern",
    period: "Feb 2023 – Jun 2023",
    location: "Jakarta, ID",
    description: [
      "Accelerated search time by 90% with autocomplete functionality in Angular.",
      "Integrated backend using Redux Toolkit, reducing code complexity by 50%.",
      " maintained RESTful APIs using ASP.NET and documented in Swagger."
    ]
  },
  {
    company: "TVRI",
    role: "Frontend Developer Freelance",
    period: "Nov 2022 – May 2023",
    location: "Jakarta, ID",
    description: [
      "Developed 'Layar' streaming and news app featuring PEMILU statistics using Laravel.",
      "Collaborated with stakeholders to align project goals with business objectives."
    ]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-20 px-4 relative z-10 bg-void-black">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white mb-16 font-mono text-center"
        >
          <span className="text-bio-green">&gt;</span> EXPERIENCE_LOG
        </motion.h2>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-10 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-void-black border-2 border-bio-green shadow-[0_0_10px_#39FF14]" />
              
              <div className="bg-gray-900/40 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:border-bio-green/50 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-bio-green transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {exp.period}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
                  </div>
                </div>
                
                <h4 className="text-lg text-bio-green mb-4 font-mono">{exp.company}</h4>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-bio-green mt-1">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
