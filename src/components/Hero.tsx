'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import HeroTerminal from './HeroTerminal'

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-20 lg:pt-0">
      
      {/* Background Glow Elements */}
      <div className="absolute top-[-5%] left-[-5%] w-125 h-125 bg-bio-green/30 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-bio-green/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      {/* Central Soft Light Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-0" />

      {/* Overlay Gradient for readability */}
      <div className="absolute inset-0 bg-linear-to-b from-void-black/50 via-transparent to-void-black z-0 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Typography & CTA */}
        <div className="text-left">
            {/* Status Badge */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-bio-green/20 bg-bio-green/5 mb-8"
            >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bio-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-bio-green"></span>
                </span>
                <span className="text-xs font-mono text-bio-green tracking-wider">STATUS: ONLINE / AVAILABLE FOR REMOTE JOB</span>
            </motion.div>

            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tighter"
            >
                HI, I AM <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-bio-green to-emerald-500">
                    TITO CANDRA SEPTIO
                </span> <br />
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed"
            >
                Full Stack Engineer architecting accessible, pixel-perfect, and performant web experiences. Merging clean code with cyberpunk aesthetics.
            </motion.p>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap gap-4"
            >
                <a 
                    href="#projects" 
                    className="group px-8 py-4 bg-bio-green text-black font-bold font-mono rounded-lg hover:bg-white transition-all hover:scale-105 flex items-center gap-2"
                >
                    VIEW_PROJECTS
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                
                <button 
                    className="px-8 py-4 bg-transparent border border-white/20 text-white font-mono rounded-lg hover:border-bio-green hover:text-bio-green transition-all hover:scale-105 flex items-center gap-2"
                >
                    DOWNLOAD_CV
                    <Download size={18} />
                </button>
            </motion.div>

            <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 1, duration: 1 }}
                 className="mt-12 flex gap-8 text-gray-500 font-mono text-xs"
            >
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-500" /> React.js</span>
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-500" /> Next.js 15</span>
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-500" /> TypeScript</span>
            </motion.div>
        </div>

        {/* Right Side: Terminal */}
        <div className="hidden lg:block">
            <HeroTerminal />
        </div>


      </div>
    </section>
  )
}

export default Hero
