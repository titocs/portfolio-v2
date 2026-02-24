import { OutputLine } from './TerminalBody'

export const generateId = () => Math.random().toString(36).substring(2, 9)

export const processCommand = (input: string): OutputLine[] => {
  const cmd = input.trim().toLowerCase()
  const args = cmd.split(' ').slice(1)
  const baseCmd = cmd.split(' ')[0]

  switch (baseCmd) {
    case 'help':
      return [
        { id: generateId(), type: 'output', text: 'Available commands:' },
        { id: generateId(), type: 'output', text: '  about      - Who am I?' },
        { id: generateId(), type: 'output', text: '  skills     - View technical stack' },
        { id: generateId(), type: 'output', text: '  projects   - View featured work' },
        { id: generateId(), type: 'output', text: '  contact    - Get my info' },
        { id: generateId(), type: 'output', text: '  clear      - Clear terminal' },
        { id: generateId(), type: 'output', text: '  date       - Show current date' },
        { id: generateId(), type: 'output', text: '  whoami     - Print current user' },
        { id: generateId(), type: 'output', text: '  sudo       - Become root' },
      ]
    case 'about':
      return [
        { id: generateId(), type: 'output', text: 'Hi! I am a Full Stack Engineer.' },
        { id: generateId(), type: 'output', text: 'I love building digital realities and pixel-perfect web experiences.' }
      ]
    case 'skills':
      return [
        { id: generateId(), type: 'output', text: 'Frontend: React, Next.js, TailwindCSS, TypeScript' },
        { id: generateId(), type: 'output', text: 'Backend: Node.js, .NET, PostgreSQL' },
        { id: generateId(), type: 'output', text: 'Tools: Git, Docker, Framer Motion' }
      ]
    case 'projects':
      return [
        { id: generateId(), type: 'output', text: 'Check out the /projects section on this portfolio page for more details!' }
      ]
    case 'contact':
      return [
        { id: generateId(), type: 'output', text: 'Email: you@example.com' },
        { id: generateId(), type: 'output', text: 'GitHub: github.com/yourusername' }
      ]
    case 'date':
      return [
        { id: generateId(), type: 'output', text: new Date().toString() }
      ]
    case 'whoami':
      return [
        { id: generateId(), type: 'output', text: 'guest' }
      ]
    case 'sudo':
      return [
        { id: generateId(), type: 'error', text: 'Nice try, hacker. This incident will be reported.' }
      ]
    case '':
      return []
    default:
      return [
        { id: generateId(), type: 'error', text: `command not found: ${baseCmd}. Type 'help' to see available commands.` }
      ]
  }
}
