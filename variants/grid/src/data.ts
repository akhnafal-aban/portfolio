export type Project = {
  id: string
  name: string
  tagline: string
  stack: string
  description: string
  repo?: string
  url?: string
  period: string
}

export const projects: Project[] = [
  {
    id: 'akhnafin',
    name: 'AkhnaFin',
    tagline: 'Personal Finance Capture',
    stack: 'Swift · SwiftUI · SwiftData · CloudKit · Foundation Models · Vision · Speech',
    description:
      'Solo iOS finance app. Near-frictionless expense logging via App Intent/Siri, natural language (Foundation Models), voice (Speech), receipt OCR (Vision), batch entry — all converging on one pipeline. AI output becomes an editable draft before commit; never auto-saves.',
    repo: 'github.com/akhnafal-aban/AkhnaFin',
    url: 'https://github.com/akhnafal-aban/AkhnaFin',
    period: 'JUL 2026 - PRESENT',
  },
  {
    id: 'rsc',
    name: 'Really Sport Center',
    tagline: 'Gym Management Platform',
    stack: 'Laravel · MySQL · Linux · Docker',
    description:
      'End-to-end gym platform: members, memberships, payments, check-in/out, dashboards, reporting, scheduled ops. Deployed to staging + production. SSH server admin, remote maintenance, monitoring, incident triage.',
    period: 'AUG 2025 - PRESENT',
  },
  {
    id: 'tpa-fti',
    name: 'TPA FTI',
    tagline: 'Academic Potential Test Platform',
    stack: 'Laravel · LLM integration',
    description:
      'Role-based academic test platform for Faculty of Industrial Technology, UII. Auth (admin/student), result processing, personalized LLM guidance, filtered CSV exports with aggregation.',
    period: 'MAY 2025 - JAN 2026',
  },
  {
    id: 'gayagerakseru',
    name: 'GayaGerakSeru',
    tagline: 'Friction Simulation',
    stack: 'Swift · RealityKit · SwiftUI',
    description:
      'Interactive RealityKit physics sim for friction education. Object slides a ramp onto a ground surface; ground roughness (0.0-1.0) is the main variable. Restitution = 0.0 (no bounce). Academy Challenge 2.',
    repo: 'github.com/akhnafal-aban/GayaGerakSeru',
    url: 'https://github.com/akhnafal-aban/GayaGerakSeru',
    period: 'JUL 2026 - PRESENT',
  },
  {
    id: 'bitebeat',
    name: 'BiteBeat',
    tagline: 'Music → Food Analyzer',
    stack: 'Swift · Foundation Models',
    description:
      'Academy Challenge 2 team app (w/ windyclaun). Analyzes music and recommends food pairings via Apple Intelligence. Flow: authorization → home → recommendation → ending → profile.',
    repo: 'github.com/windyclaun/BiteBeatApp',
    url: 'https://github.com/windyclaun/BiteBeatApp',
    period: 'MAY 2026 - JUN 2026',
  },
  {
    id: 'danantara',
    name: 'Danantara-Research',
    tagline: 'Topic Modeling Pipeline',
    stack: 'Python · BERTopic · indoSBERT',
    description:
      'Full research pipeline: cleaning → BERTopic topic modeling with indoSBERT embeddings → report. Companion to the published journal article.',
    repo: 'github.com/akhnafal-aban/Danantara-Research',
    url: 'https://github.com/akhnafal-aban/Danantara-Research',
    period: '2026',
  },
]

export type SkillGroup = {
  label: string
  items: string
}

export const skills: SkillGroup[] = [
  { label: 'languages', items: 'PHP · SQL · Java · JavaScript · Python · Go · Swift' },
  { label: 'frameworks', items: 'Laravel · Livewire · Express · SwiftUI' },
  { label: 'databases', items: 'MySQL · PostgreSQL · MongoDB · Redis' },
  {
    label: 'backend',
    items: 'REST APIs · auth · role-based authz · query optimization · system integration · testing',
  },
  {
    label: 'infrastructure',
    items: 'Docker · Nginx · systemd · Ubuntu · CI/CD · VPS · staging/production · monitoring',
  },
  {
    label: 'ios',
    items: 'SwiftUI · SwiftData · CloudKit · Foundation Models · Vision · Speech · App Intents',
  },
  {
    label: 'research/ml',
    items: 'BERTopic · indoSBERT embeddings · topic modeling · text preprocessing',
  },
  {
    label: 'agentic/devops',
    items: 'OpenCode · MCP · plugins · skill authoring · Hermes agent (VPS)',
  },
  { label: 'tools', items: 'Git · Postman · VS Code · TablePlus · Laragon' },
]

export type Experience = {
  role: string
  org: string
  period: string
  note: string
}

export const experience: Experience[] = [
  {
    role: 'Junior Developer - iOS',
    org: 'Apple Developer Academy @ UC Jakarta',
    period: 'FEB 2026 - PRESENT',
    note: 'iOS apps in Swift + SwiftUI through collaborative, project-based product development.',
  },
  {
    role: 'Software Engineer',
    org: 'Really Sport Center',
    period: 'AUG 2025 - PRESENT',
    note: 'End-to-end gym management platform. Deploy + maintain staging/production. Linux server admin via SSH.',
  },
  {
    role: 'Back End Developer',
    org: 'Faculty of Industrial Technology, UII',
    period: 'MAY 2025 - JAN 2026',
    note: 'Laravel role-based academic test platform. Auth, result processing, LLM guidance, filtered CSV exports.',
  },
  {
    role: 'Backend Developer Intern',
    org: 'Artiknesia',
    period: 'FEB 2025 - MAY 2025',
    note: 'Laravel Livewire backend features. Query optimization, backend logic, system integration.',
  },
]

export type Link = { label: string; href: string; note?: string }

export const links: Link[] = [
  { label: 'GitHub', href: 'https://github.com/akhnafal-aban', note: 'primary · iOS + current work' },
  { label: 'GitHub (legacy)', href: 'https://github.com/AKHNAFAL', note: '2024-2025 backend/student' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/akhnaf-aban' },
  { label: 'YouTube', href: 'https://youtube.com/@noorakhnafalaban-9917', note: '8 videos' },
  { label: 'Email', href: 'mailto:akhnafal03@gmail.com' },
]
