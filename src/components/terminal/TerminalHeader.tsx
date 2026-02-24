'use client'

import { Terminal, X } from 'lucide-react'

interface TerminalHeaderProps {
  onClose: () => void
  onMinimize: () => void
}

export default function TerminalHeader({ onClose, onMinimize }: TerminalHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10 cursor-grab active:cursor-grabbing relative z-10">
      <div className="flex gap-2">
        <button 
          onClick={onClose}
          className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors flex items-center justify-center group" 
          aria-label="Close"
          title="Close"
        >
          <X size={8} className="text-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
        <button 
          onClick={onMinimize}
          className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors" 
          aria-label="Minimize"
          title="Minimize"
        />
        <button 
          className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors" 
          aria-label="Maximize"
          title="Maximize (Disabled)"
        />
      </div>
      <div className="text-xs font-mono text-gray-400 flex items-center gap-2 select-none pointer-events-none">
        <Terminal size={12} />
        <span>guest@antigravity:~</span>
      </div>
    </div>
  )
}
