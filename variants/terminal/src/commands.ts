import type { Line } from './types'
import {
  about,
  help,
  projects,
  skills,
  publications,
  contact,
  social,
  ls,
  pwd,
  whoami,
  unknownCmd,
} from './data'

export const commandList = [
  'about',
  'projects',
  'skills',
  'publications',
  'contact',
  'social',
  'ls',
  'whoami',
  'pwd',
  'date',
  'help',
  'clear',
] as const

export function runCommand(raw: string): { output: Line[]; clear?: boolean } {
  const cmd = raw.trim().toLowerCase()
  if (cmd === '') return { output: [] }
  const [base, ...rest] = cmd.split(/\s+/)

  switch (base) {
    case 'help':
      return { output: help }
    case 'about':
    case 'cat':
    case 'bio':
      if (base === 'cat') {
        const arg = rest[0] ?? ''
        if (arg === 'about.md' || arg === 'about') return { output: about }
        if (arg === 'projects.md' || arg === 'projects') return { output: projects }
        if (arg === 'skills.md' || arg === 'skills') return { output: skills }
        if (arg === 'publications.md' || arg === 'publications') return { output: publications }
        if (arg === 'contact.txt' || arg === 'contact') return { output: contact }
        if (arg === 'social.txt' || arg === 'social') return { output: social }
        if (arg === '') return { output: [[{ t: 'cat: missing file operand', c: 'r' }]] }
        return { output: unknownCmd(`cat ${arg}`) }
      }
      return { output: about }
    case 'projects':
      return { output: projects }
    case 'skills':
      return { output: skills }
    case 'publications':
    case 'publication':
    case 'pubs':
      return { output: publications }
    case 'contact':
      return { output: contact }
    case 'social':
      return { output: social }
    case 'ls':
      return { output: ls }
    case 'whoami':
      return { output: whoami }
    case 'pwd':
      return { output: pwd }
    case 'date':
      return { output: [[{ t: new Date().toString(), c: 'd' }]] }
    case 'clear':
    case 'cls':
      return { output: [], clear: true }
    case 'sudo':
      return {
        output: [
          [{ t: '[sudo] password for akhnaf: ', c: 'd' }],
          [{ t: 'akhnaf is not in the sudoers file. This incident will be reported.', c: 'r' }],
        ],
      }
    case 'echo':
      return { output: [[{ t: rest.join(' '), c: 'd' }]] }
    case 'neofetch':
    case 'fastfetch':
      return { output: about }
    case 'exit':
    case 'logout':
      return { output: [[{ t: 'session closed. refresh to reconnect.', c: 'm' }]] }
    default:
      return { output: unknownCmd(cmd) }
  }
}
