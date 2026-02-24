'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal as TerminalIcon } from 'lucide-react'
import TerminalHeader from './TerminalHeader'
import TerminalBody from './TerminalBody'
import { useTerminal } from '@/context/TerminalContext'

export default function FloatingTerminal() {
  const { isOpen, closeTerminal } = useTerminal()

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            drag
            dragConstraints={{ left: -800, right: 800, top: -100, bottom: 800 }}
            dragMomentum={false}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-24 right-6 md:right-12 lg:right-24 z-50 w-[90vw] md:w-full max-w-[500px] shadow-2xl shadow-bio-green/10 rounded-xl overflow-hidden bg-gray-900/90 backdrop-blur-xl border border-white/20"
            style={{ touchAction: 'none' }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-bio-green/5 to-blue-500/5 pointer-events-none" />
            <TerminalHeader 
              onClose={closeTerminal} 
              onMinimize={closeTerminal} 
            />
            <TerminalBody />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
