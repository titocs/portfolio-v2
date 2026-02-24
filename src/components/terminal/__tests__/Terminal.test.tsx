import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import TerminalBody from '../TerminalBody'

// Mock tracking of scroll to prevent unimplemented jsdom issues
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

describe('Terminal Component Integration', () => {
  it('renders terminal body with initial messages', () => {
    render(<TerminalBody />)
    expect(screen.getByText(/Welcome to Antigravity OS/i)).toBeInTheDocument()
  })

  it('handles input and displays output', async () => {
    render(<TerminalBody />)
    const input = screen.getByRole('textbox') as HTMLInputElement
    
    // Type help
    fireEvent.change(input, { target: { value: 'help' } })
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })

    // Input should be cleared
    expect(input.value).toBe('')

    // Should see help output
    expect(await screen.findByText(/Available commands:/i)).toBeInTheDocument()
  })

  it('clears terminal on clear command', () => {
    render(<TerminalBody />)
    const input = screen.getByRole('textbox') as HTMLInputElement
    
    fireEvent.change(input, { target: { value: 'clear' } })
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })

    // Welcome message should be cleared
    expect(screen.queryByText(/Welcome to Antigravity OS/i)).not.toBeInTheDocument()
  })
})
