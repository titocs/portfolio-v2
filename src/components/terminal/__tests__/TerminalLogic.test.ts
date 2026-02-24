import { describe, it, expect } from 'vitest'
import { processCommand } from '../terminalLogic'

describe('Terminal Logic', () => {
  it('returns help output', () => {
    const result = processCommand('help')
    expect(result).toBeDefined()
    expect(result.length).toBeGreaterThan(0)
    expect(result[0].text).toContain('Available commands:')
  })

  it('returns about info', () => {
    const result = processCommand('about')
    expect(result.some(r => r.text.includes('Full Stack Engineer'))).toBe(true)
  })

  it('handles unknown commands gracefully', () => {
    const result = processCommand('unknowncmd')
    expect(result.some(r => r.text.includes('command not found: unknowncmd'))).toBe(true)
    expect(result[0].type).toBe('error')
  })

  it('ignores trailing spaces', () => {
    const result = processCommand('help  ')
    expect(result[0].text).toContain('Available commands:')
  })

  it('handles sudo command with an easter egg error', () => {
    const result = processCommand('sudo')
    expect(result[0].type).toBe('error')
    expect(result[0].text).toContain('Nice try, hacker. This incident will be reported.')
  })
})
