'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { notesData } from '@/lib/notesData'
import { Layout, Server, BookOpen, Layers } from 'lucide-react'

// Helper function to render correct icon based on string
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'layout':
      return <Layout className="w-8 h-8 text-bio-green" />
    case 'server':
      return <Server className="w-8 h-8 text-bio-green" />
    default:
      return <BookOpen className="w-8 h-8 text-bio-green" />
  }
}

// Custom Animated Grid Icon
const AnimatedGridIcon = ({ active }: { active: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-colors duration-300 ${active ? 'text-bio-green' : 'text-gray-500'}`}>
    <motion.rect x="3" y="3" width="7" height="7" rx="1" animate={{ pathLength: active ? 1 : 0.3, opacity: active ? 1 : 0.5 }} transition={{ duration: 0.4 }} />
    <motion.rect x="14" y="3" width="7" height="7" rx="1" animate={{ pathLength: active ? 1 : 0.3, opacity: active ? 1 : 0.5 }} transition={{ duration: 0.4, delay: 0.1 }} />
    <motion.rect x="14" y="14" width="7" height="7" rx="1" animate={{ pathLength: active ? 1 : 0.3, opacity: active ? 1 : 0.5 }} transition={{ duration: 0.4, delay: 0.2 }} />
    <motion.rect x="3" y="14" width="7" height="7" rx="1" animate={{ pathLength: active ? 1 : 0.3, opacity: active ? 1 : 0.5 }} transition={{ duration: 0.4, delay: 0.3 }} />
  </svg>
)

// Custom Animated List Icon
const AnimatedListIcon = ({ active }: { active: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-colors duration-300 ${active ? 'text-bio-green' : 'text-gray-500'}`}>
    <motion.line x1="8" y1="6" x2="21" y2="6" animate={{ pathLength: active ? 1 : 0.3, opacity: active ? 1 : 0.5 }} transition={{ duration: 0.4 }} />
    <motion.line x1="8" y1="12" x2="21" y2="12" animate={{ pathLength: active ? 1 : 0.3, opacity: active ? 1 : 0.5 }} transition={{ duration: 0.4, delay: 0.1 }} />
    <motion.line x1="8" y1="18" x2="21" y2="18" animate={{ pathLength: active ? 1 : 0.3, opacity: active ? 1 : 0.5 }} transition={{ duration: 0.4, delay: 0.2 }} />
    <motion.line x1="3" y1="6" x2="3.01" y2="6" animate={{ opacity: active ? 1 : 0.5 }} transition={{ duration: 0.4 }} />
    <motion.line x1="3" y1="12" x2="3.01" y2="12" animate={{ opacity: active ? 1 : 0.5 }} transition={{ duration: 0.4, delay: 0.1 }} />
    <motion.line x1="3" y1="18" x2="3.01" y2="18" animate={{ opacity: active ? 1 : 0.5 }} transition={{ duration: 0.4, delay: 0.2 }} />
  </svg>
)

export default function NotesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        
        <header className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">My Notes</h1>
              <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                A structured digital garden where I document my learning journey. Choose a learning path below to explore topics from the absolute basics up to expert levels.
              </p>
            </div>
            
            {/* View Toggle */}
            <div className="flex items-center bg-white/5 border border-white/10 p-1 rounded-lg shrink-0">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center justify-center p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-[#111] shadow-sm cursor-default' : 'hover:bg-white/5'}`}
                aria-label="Grid View"
              >
                <AnimatedGridIcon active={viewMode === 'grid'} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center justify-center p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-[#111] shadow-sm cursor-default' : 'hover:bg-white/5'}`}
                aria-label="List View"
              >
                <AnimatedListIcon active={viewMode === 'list'} />
              </button>
            </div>
          </div>
        </header>

        <AnimatePresence mode="wait">
          <motion.div
            key={viewMode}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
              : "flex flex-col gap-4"}
          >
            {notesData.map((topic) => (
              <Link key={topic.id} href={`/notes/${topic.id}`}>
                {viewMode === 'grid' ? (
                  /* Grid Card */
                  <div className="p-px rounded-xl bg-linear-to-br from-white/10 to-transparent hover:from-bio-green/60 hover:to-bio-green/20 transition-all duration-500 h-full group">
                    <div className="bg-[#111] backdrop-blur-md rounded-xl p-8 h-full flex flex-col relative overflow-hidden">
                      <div className="absolute inset-0 bg-linear-to-br from-bio-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                        {getIcon(topic.icon)}
                      </div>
                      
                      <h2 className="relative z-10 text-2xl font-bold text-white mb-3 group-hover:text-bio-green transition-colors">
                        {topic.title}
                      </h2>
                      
                      <p className="relative z-10 text-gray-400 mb-8 grow">
                        {topic.description}
                      </p>

                      <div className="relative z-10 flex flex-col gap-3 mt-auto">
                        <div className="flex items-center text-sm text-gray-500 font-mono">
                          <Layers className="w-4 h-4 mr-2" />
                          <span>{topic.levelRange}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 font-mono">
                          <BookOpen className="w-4 h-4 mr-2" />
                          <span>{topic.totalChapters} Chapters</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* List Item */
                  <div className="p-px rounded-xl bg-linear-to-br from-white/10 to-transparent hover:from-bio-green/60 hover:to-bio-green/20 transition-all duration-500 group">
                    <div className="bg-[#111] backdrop-blur-md rounded-xl p-6 flex flex-col sm:flex-row sm:items-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-linear-to-r from-bio-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/5 shrink-0 group-hover:scale-110 transition-transform duration-300 mb-4 sm:mb-0">
                        {getIcon(topic.icon)}
                      </div>
                      <div className="relative z-10 sm:ml-6 flex-1 mb-4 sm:mb-0">
                        <h2 className="text-xl font-bold text-white mb-2 group-hover:text-bio-green transition-colors">{topic.title}</h2>
                        <p className="text-gray-400 text-sm line-clamp-2 md:line-clamp-none">{topic.description}</p>
                      </div>
                      <div className="relative z-10 sm:ml-6 shrink-0 flex flex-row sm:flex-col items-start sm:items-end gap-3 sm:gap-2">
                        <div className="flex items-center text-sm text-gray-500 font-mono">
                          <Layers className="w-4 h-4 mr-2" />
                          <span>{topic.levelRange}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 font-mono">
                          <BookOpen className="w-4 h-4 mr-2" />
                          <span>{topic.totalChapters} Chapters</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  )
}
