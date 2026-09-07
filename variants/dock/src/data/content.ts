export type Project = {
  name: string
  period: string
  stack: string
  blurb: string
  repo?: string
  kind: 'iOS' | 'Web' | 'Research' | 'Desktop'
}

export type Experience = {
  role: string
  org: string
  period: string
  type?: string
  points: string[]
}

export type Publication = {
  title: string
  authors: string
  venue: string
  date: string
  detail: string
  indexed?: string
}

export type SkillGroup = {
  label: string
  skills: string[]
}

export const profile = {
  name: 'Noor Akhnafal Aban',
  headline: 'Software Engineer | iOS | Backend Systems',
  location: 'Jakarta, Indonesia',
  summary:
    'Software engineer building maintainable digital products across the application lifecycle - SwiftUI iOS development, Laravel backend platforms, databases, APIs, and Linux infrastructure.',
  email: 'akhnafal03@gmail.com',
  github: 'https://github.com/akhnafal-aban',
  linkedin: 'https://linkedin.com/in/akhnaf-aban',
  education: 'B.Sc. Informatics, Universitas Islam Indonesia - GPA 3.87 / 4.00',
  award: 'GEMASTIK 2025 National Round finalist',
}

export const experience: Experience[] = [
  {
    role: 'Junior Developer - iOS',
    org: 'Apple Developer Academy @ UC Jakarta',
    period: 'Feb 2026 - Present',
    type: 'Contract',
    points: [
      'Develop iOS applications with Swift and SwiftUI through collaborative, project-based product development.',
      'Apply an established backend foundation while expanding product thinking and native iOS implementation skills.',
    ],
  },
  {
    role: 'Software Engineer',
    org: 'Really Sport Center',
    period: 'Aug 2025 - Present',
    type: 'Freelance',
    points: [
      'Build and evolve an end-to-end gym management platform: members, memberships, payments, check-in/out, dashboards, reporting, and scheduled operations.',
      'Deploy and maintain the application across staging and production environments.',
      'Administer Linux servers via SSH - remote maintenance, monitoring, and troubleshooting.',
    ],
  },
  {
    role: 'Back End Developer',
    org: 'Faculty of Industrial Technology, Universitas Islam Indonesia',
    period: 'May 2025 - Jan 2026',
    type: 'Part-time',
    points: [
      'Built a Laravel-based, role-based academic test platform for faculty use.',
      'Implemented authentication, result processing, personalized LLM guidance, and filtered CSV exports for analysis.',
    ],
  },
  {
    role: 'Backend Developer Intern',
    org: 'Artiknesia',
    period: 'Feb 2025 - May 2025',
    type: 'Remote',
    points: [
      'Developed and optimized backend features with Laravel Livewire to strengthen application functionality.',
      'Improved database queries and backend logic, then collaborated across functions to support reliable system integration.',
    ],
  },
]

export const projects: Project[] = [
  {
    name: 'AkhnaFin',
    period: 'Jul 2026 - Present',
    stack: 'Swift, SwiftUI, SwiftData, CloudKit, Foundation Models, Vision, Speech, App Intents',
    kind: 'iOS',
    blurb:
      'Personal finance capture app. Near-frictionless expense logging via App Intent/Siri, natural language (Foundation Models), voice (Speech), and receipt photo (Vision). AI output always becomes an editable draft before save - never auto-commits.',
    repo: 'https://github.com/akhnafal-aban/AkhnaFin',
  },
  {
    name: 'GayaGerakSeru',
    period: 'Jul 2026 - Present',
    stack: 'Swift, RealityKit, SwiftUI',
    kind: 'iOS',
    blurb:
      'Interactive RealityKit physics simulation for friction education. Object slides down an inclined ramp; ground roughness (0.0-1.0) is the user-controlled variable that determines speed change. Restitution disabled to focus purely on friction.',
    repo: 'https://github.com/akhnafal-aban/GayaGerakSeru',
  },
  {
    name: 'BiteBeat',
    period: 'May 2026 - Jun 2026',
    stack: 'Swift, SwiftUI, Foundation Models',
    kind: 'iOS',
    blurb:
      'Academy team app. Analyzes music and recommends food pairings using Apple Intelligence. Flow: authorization -> home -> recommendation -> ending -> profile, with a default playlist and foods dataset.',
    repo: 'https://github.com/windyclaun/BiteBeatApp',
  },
  {
    name: 'Really Sport Center',
    period: 'Ongoing',
    stack: 'Laravel, Linux, Docker, Nginx',
    kind: 'Web',
    blurb:
      'End-to-end gym management platform. Payments, membership workflows, reporting, scheduled processes, and full deployment + infrastructure management across staging and production.',
  },
  {
    name: 'TPA FTI',
    period: 'May 2025 - Present',
    stack: 'Laravel, LLM integration',
    kind: 'Web',
    blurb:
      'Role-based academic potential test platform. Authentication for admin and student roles, personalized LLM result guidance, and filtered CSV exports with aggregation for analysis.',
  },
  {
    name: 'Danantara Research',
    period: '2026',
    stack: 'Python, BERTopic, indoSBERT',
    kind: 'Research',
    blurb:
      'Full research pipeline: cleaning -> BERTopic topic modeling with indoSBERT embeddings -> report. Companion to the published journal article on topic modeling of tweets about Danantara.',
    repo: 'https://github.com/akhnafal-aban/Danantara-Research',
  },
]

export const publications: Publication[] = [
  {
    title: 'Pemodelan Topik Cuitan tentang Danantara',
    authors: 'Noor Akhnafal Aban, Chanifah Indah Ratnasari',
    venue: 'Rabit: Jurnal Teknologi dan Sistem Informasi - LPPM Universitas Riau',
    date: 'Vol 11 No 1, January 2026',
    detail:
      'Topic modeling of Twitter conversations about Danantara using BERTopic and indoSBERT embeddings.',
    indexed: 'Garuda (Garba Rujukan Digital, Kemdiktisaintek)',
  },
]

export const skillGroups: SkillGroup[] = [
  { label: 'Languages', skills: ['PHP', 'SQL', 'Java', 'JavaScript', 'Python', 'Go', 'Swift'] },
  {
    label: 'Frameworks & Platforms',
    skills: ['Laravel', 'Livewire', 'Express', 'SwiftUI'],
  },
  { label: 'Databases', skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
  {
    label: 'Backend & Systems',
    skills: ['REST APIs', 'OOP', 'Debugging', 'Logging', 'App Security', 'Linux Admin', 'SSH', 'Deployment'],
  },
  {
    label: 'Infrastructure',
    skills: ['Docker', 'Nginx', 'systemd', 'Ubuntu', 'CI/CD', 'VPS'],
  },
  {
    label: 'AI Integration',
    skills: ['Foundation Models', 'Vision OCR', 'Speech', 'LLM Guidance', 'MCP', 'BERTopic'],
  },
  {
    label: 'Tools',
    skills: ['Git', 'Postman', 'VS Code', 'TablePlus', 'Figma'],
  },
]

export const dockSections = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'work', label: 'Work', icon: 'folder' },
  { id: 'about', label: 'About', icon: 'user' },
  { id: 'publications', label: 'Pubs', icon: 'book' },
  { id: 'skills', label: 'Skills', icon: 'wrench' },
  { id: 'contact', label: 'Contact', icon: 'mail' },
] as const

export type DockIconName = (typeof dockSections)[number]['icon']
