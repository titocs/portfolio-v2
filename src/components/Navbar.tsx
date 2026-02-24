'use client'

import { motion } from 'framer-motion'
import { Home, User, Code, BookOpen, Terminal, Mail } from 'lucide-react'
import Link from 'next/link'
import { useTerminal } from '@/context/TerminalContext'

const Navbar = () => {
  const { toggleTerminal } = useTerminal()
  const navItems = [
    { icon: <Home size={24} />, label: 'Home', href: '/' },
    { icon: <User size={24} />, label: 'About', href: '/about' }, 
    { icon: <Code size={24} />, label: 'Projects', href: '/#projects' },
    { icon: <BookOpen size={24} />, label: 'Blog', href: '/blog' },
    { icon: <Mail size={24} />, label: 'Contact', href: '#contact' },
  ]

  // IMPORTANT: Next.js Link with hash works, but smooth scrolling needs CSS: scroll-behavior: smooth in html/body.
  // I added overflow-x: hidden to body in globals.css. I should ensure scroll-behavior: smooth.

  return (
    <motion.nav 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-2 px-6 py-3 bg-black/40 backdrop-blur-md border border-bio-green/20 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:border-bio-green/40 transition-colors duration-300">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="relative group p-3 text-gray-400 hover:text-bio-green transition-colors"
          >
            <motion.div
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="relative z-10"
            >
              {item.icon}
            </motion.div>
            
            {/* Tooltip / Label */}
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/80 text-bio-green text-xs font-mono rounded border border-bio-green/20 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {item.label}
            </span>
            
            {/* Active/Hover Glow */}
            <div className="absolute inset-0 bg-bio-green/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        ))}
        
        <div className="w-px h-6 bg-gray-700/50 mx-2" />
        
        <button 
          onClick={toggleTerminal}
          className="relative group p-3 text-bio-green hover:text-white transition-colors"
        >
          <div className="relative z-10">
            <Terminal size={24} />
          </div>
          <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/80 text-bio-green text-xs font-mono rounded border border-bio-green/20 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Open Terminal
          </span>
          <div className="absolute inset-0 bg-bio-green/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </button>
      </div>
    </motion.nav>
  )
}

export default Navbar
