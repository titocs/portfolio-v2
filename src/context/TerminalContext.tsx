'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface TerminalContextType {
  isOpen: boolean
  openTerminal: () => void
  closeTerminal: () => void
  toggleTerminal: () => void
}

const TerminalContext = createContext<TerminalContextType | undefined>(undefined)

export function TerminalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <TerminalContext.Provider
      value={{
        isOpen,
        openTerminal: () => setIsOpen(true),
        closeTerminal: () => setIsOpen(false),
        toggleTerminal: () => setIsOpen((prev) => !prev),
      }}
    >
      {children}
    </TerminalContext.Provider>
  )
}

export const useTerminal = () => {
  const context = useContext(TerminalContext)
  if (!context) throw new Error('useTerminal must be used within TerminalProvider')
  return context
}
