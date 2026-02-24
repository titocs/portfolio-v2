'use client'

import { motion } from 'framer-motion'

interface TechCardProps {
  icon?: React.ElementType;
  name: string;
}

const TechCard = ({ icon: Icon, name }: TechCardProps) => {
  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      className="group relative flex flex-col items-center justify-center p-6 bg-gray-900/40 backdrop-blur-sm border border-white/10 rounded-xl hover:border-bio-green/50 hover:shadow-[0_0_20px_rgba(57,255,20,0.2)] transition-all duration-300 overflow-hidden"
    >
      <div className="p-3 rounded-lg bg-white/5 group-hover:bg-bio-green/10 transition-colors mb-3 relative z-10 text-white min-h-14 min-w-14 flex items-center justify-center">
        {Icon ? (
          <Icon size={32} className="group-hover:text-bio-green transition-colors" />
        ) : (
          <div className="w-8 h-8 opacity-20" /> /* Placeholder space */
        )}
      </div>
      
      <span className="text-gray-400 font-mono text-sm group-hover:text-bio-green transition-colors relative z-10 text-center">
        {name}
      </span>
    </motion.div>
  )
}

export default TechCard
