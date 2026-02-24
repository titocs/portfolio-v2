'use client'

import { useState, useRef, useEffect, KeyboardEvent } from 'react'
import { processCommand } from './terminalLogic'

export interface OutputLine {
  id: string
  type: 'command' | 'output' | 'error' | 'system'
  text: string
}

export default function TerminalBody() {
  const [history, setHistory] = useState<OutputLine[]>([
    { id: 'start-1', type: 'system', text: 'Welcome to Antigravity OS v1.0' },
    { id: 'start-2', type: 'system', text: 'Type "help" to see available commands.' }
  ])
  const [input, setInput] = useState('')
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  
  const endOfMessagesRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Focus input on mount and when clicking anywhere in body
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  // Auto scroll to bottom
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (!input.trim()) return

      const newCommandId = Date.now().toString()
      const newCommandCmd: OutputLine = { id: newCommandId, type: 'command', text: input }

      if (input.trim().toLowerCase() === 'clear') {
        setHistory([])
        setCommandHistory(prev => [...prev, input])
        setHistoryIndex(-1)
        setInput('')
        return
      }

      const outputLines = processCommand(input)
      
      setHistory(prev => [...prev, newCommandCmd, ...outputLines])
      setCommandHistory(prev => [...prev, input])
      setHistoryIndex(-1)
      setInput('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex + 1
        if (nextIndex < commandHistory.length) {
          setHistoryIndex(nextIndex)
          setInput(commandHistory[commandHistory.length - 1 - nextIndex])
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1
        setHistoryIndex(nextIndex)
        setInput(commandHistory[commandHistory.length - 1 - nextIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput('')
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault()
      setHistory([])
    }
  }

  return (
    <div 
      className="p-4 font-mono text-xs md:text-sm h-[300px] md:h-[350px] overflow-y-auto bg-black/60 text-gray-300 relative z-10"
      onClick={() => inputRef.current?.focus()}
      data-testid="terminal-body"
    >
      <div className="flex flex-col gap-1 pb-2">
        {history.map((line) => (
          <div key={line.id} className="whitespace-pre-wrap break-words">
            {line.type === 'command' && (
              <span className="text-bio-green mr-2">➜  ~</span>
            )}
            <span className={
              line.type === 'error' ? 'text-red-400' : 
              line.type === 'system' ? 'text-blue-400 font-bold' :
              line.type === 'command' ? 'text-white' : 'text-gray-300'
            }>
              {line.text}
            </span>
          </div>
        ))}
      </div>
      
      <div className="flex items-center mt-2">
        <span className="text-bio-green mr-2 font-bold">➜  ~</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0"
          autoFocus
          spellCheck={false}
          autoComplete="off"
          aria-label="Terminal input"
        />
      </div>
      <div ref={endOfMessagesRef} />
    </div>
  )
}
