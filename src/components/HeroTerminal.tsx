'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Cpu, Wifi } from 'lucide-react'

const HeroTerminal = () => {
  const [code, setCode] = useState('')
  const fullCode = `class DigitalArchitect {
  constructor() {
    this.stack = ['React', '.NET', 'Next.js'];
    this.passion = 'High Performance';
  }

  async deploy() {
    await this.optimize();
    return 'Future Ready';
  }
}`

  useEffect(() => {
    let index = 0
    // eslint-disable-next-line prefer-const
    let interval: NodeJS.Timeout

    const runInterval = () => {
         // eslint-disable-next-line @typescript-eslint/no-unused-vars
         interval = setInterval(() => {
          setCode(fullCode.slice(0, index))
          index++
          if (index > fullCode.length) {
            // clearInterval(interval) - Don't clear, let it sit or reset? Legacy code just stopped.
            // But we need to define interval for cleanup.
            // Using a simpler recursive timeout or just standard setinterval is better.
          }
        }, 50)
    }
    
    // Simplification of legacy logic to make it robust in TS
    const timer = setInterval(() => {
        setCode((prev) => {
            if (prev.length < fullCode.length) {
                return fullCode.slice(0, prev.length + 1)
            } else {
                clearInterval(timer)
                return prev
            }
        })
    }, 50)

    return () => clearInterval(timer)
  }, [fullCode])

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative w-full max-w-md mx-auto lg:mr-0 bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-1"
    >
        {/* Glow behind */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-linear-to-br from-bio-green/20 to-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative bg-black/40 rounded-xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-xs font-mono text-gray-500 flex items-center gap-2">
                    <Terminal size={12} />
                    <span>arch.js</span>
                </div>
            </div>

            {/* Code Area */}
            <div className="p-6 font-mono text-xs sm:text-sm h-[280px]">
                <pre className="text-gray-300 overflow-hidden">
                    <code>
                        {code.split('\n').map((line, i) => (
                            <div key={i} className="min-h-[1.5em]">
                                {/* Syntax Highlighting Simulation */}
                                <span className={line.includes('class') || line.includes('this') ? 'text-purple-400' : ''}>
                                    {line}
                                </span>
                            </div>
                        ))}
                    </code>
                    <motion.span 
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="inline-block w-2 H-4 bg-bio-green ml-1 align-middle"
                    >
                        _
                    </motion.span>
                </pre>
            </div>

            <div className="p-4 border-t border-white/10 bg-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-bio-green to-blue-500 flex items-center justify-center">
                        <Cpu size={20} className="text-black" />
                    </div>
                    <div>
                        <div className="text-white font-bold text-sm">System Architect</div>
                        <div className="text-bio-green text-xs font-mono">Senior Engineer</div>
                    </div>
                </div>
                <Wifi size={20} className="text-gray-500" />
            </div>
        </div>
    </motion.div>
  )
}

export default HeroTerminal
