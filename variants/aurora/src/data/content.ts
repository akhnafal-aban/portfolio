export const profile = {
  name: 'Noor Akhnafal Aban',
  headline: 'Software Engineer · iOS · Backend Systems',
  location: 'Jakarta, Indonesia',
  summary:
    'Software engineer building maintainable digital products across the application lifecycle — SwiftUI on iOS, Laravel backend systems, databases, APIs, and Linux infrastructure. Current focus: native iOS and product-development at the Apple Developer Academy.',
  email: 'akhnafal03@gmail.com',
  phone: '+62 857-9781-5215',
  links: {
    github: 'https://github.com/akhnafal-aban',
    linkedin: 'https://linkedin.com/in/akhnaf-aban',
    youtube: 'https://youtube.com/@noorakhnafalaban-9917',
  },
} as const

export const stats = [
  { value: '3.87', label: 'GPA / 4.00' },
  { value: '2026', label: 'First publication' },
  { value: '6+', label: 'Shipped projects' },
  { value: 'GEMASTIK', label: '2025 national finalist' },
] as const

export type Project = {
  id: string
  name: string
  period: string
  stack: string[]
  kind: string
  blurb: string
  link?: string
  repo?: string
}

export const projects: Project[] = [
  {
    id: 'akhnafin',
    name: 'AkhnaFin',
    period: 'JUL 2026 - PRESENT',
    stack: ['Swift', 'SwiftUI', 'SwiftData', 'CloudKit', 'Foundation Models', 'Vision', 'Speech', 'App Intents'],
    kind: 'iOS · Personal',
    blurb:
      'Solo iOS finance app. Near-frictionless expense capture across App Intent/Siri, on-device Foundation Models, voice, receipt photo OCR, and batch entry — all converging on one pipeline. AI output becomes an editable draft before commit, never auto-saves.',
    repo: 'https://github.com/akhnafal-aban/AkhnaFin',
  },
  {
    id: 'gayagerak',
    name: 'GayaGerakSeru',
    period: 'JUL 2026 - PRESENT',
    stack: ['Swift', 'RealityKit', 'SwiftUI'],
    kind: 'iOS · Academy',
    blurb:
      'Interactive RealityKit physics simulation for friction education. An object slides down a ramp onto a surface; ground roughness is the primary controlled variable, restitution disabled to isolate friction. Translates effective-friction physics into a manipulable 3D experience.',
    repo: 'https://github.com/akhnafal-aban/GayaGerakSeru',
  },
  {
    id: 'bitebeat',
    name: 'BiteBeat',
    period: 'MAY 2026 - JUN 2026',
    stack: ['Swift', 'SwiftUI', 'Foundation Models'],
    kind: 'iOS · Academy team',
    blurb:
      'Academy team app with windyclaun. Analyzes music and recommends food pairings using Apple Intelligence. Flow: authorization → home → recommendation → ending → profile, mapping musical qualities to meal suggestions.',
    repo: 'https://github.com/windyclaun/BiteBeatApp',
  },
  {
    id: 'rsc',
    name: 'Really Sport Center',
    period: 'AUG 2025 - PRESENT',
    stack: ['Laravel', 'MySQL', 'Docker', 'Nginx', 'Linux VPS'],
    kind: 'Backend · Production',
    blurb:
      'End-to-end gym management platform — members, memberships, payments, check-in/out, dashboards, reporting, and scheduled operations. Deployed and maintained across staging and production with SSH-based server administration.',
  },
  {
    id: 'tpa-fti',
    name: 'TPA FTI',
    period: 'MAY 2025 - JAN 2026',
    stack: ['Laravel', 'LLM', 'CSV'],
    kind: 'Backend · Faculty',
    blurb:
      'Role-based academic potential test platform for the Faculty of Industrial Technology. Authentication for admin and student roles, personalized LLM guidance, and filtered CSV exports with aggregation for analysis.',
  },
  {
    id: 'danantara',
    name: 'Danantara-Research',
    period: '2026',
    stack: ['Python', 'BERTopic', 'indoSBERT', 'Jupyter'],
    kind: 'Research · ML',
    blurb:
      'Full research pipeline companion to the published paper: cleaning → BERTopic topic modeling with indoSBERT embeddings → report. Topic modeling of tweets about Danantara.',
    repo: 'https://github.com/akhnafal-aban/Danantara-Research',
  },
]

export type Experience = {
  role: string
  org: string
  period: string
  bullets: string[]
}

export const experience: Experience[] = [
  {
    role: 'Junior Developer - iOS',
    org: 'Apple Developer Academy @ UC Jakarta',
    period: 'FEB 2026 - PRESENT · Contract',
    bullets: [
      'Developing iOS applications with Swift and SwiftUI through collaborative, project-based product development.',
      'Building on a backend foundation while expanding product thinking and native iOS implementation.',
    ],
  },
  {
    role: 'Software Engineer',
    org: 'Really Sport Center',
    period: 'AUG 2025 - PRESENT · Freelance',
    bullets: [
      'Building and evolving an end-to-end gym management platform — members, payments, check-in/out, dashboards, reporting, scheduled operations.',
      'Deploying and maintaining staging and production, administering Linux servers via SSH, troubleshooting infrastructure.',
    ],
  },
  {
    role: 'Back End Developer',
    org: 'Faculty of Industrial Technology, Universitas Islam Indonesia',
    period: 'MAY 2025 - JAN 2026 · Part-time',
    bullets: [
      'Built a Laravel-based, role-based academic test platform for faculty use.',
      'Implemented authentication, result processing, personalized LLM guidance, and filtered CSV exports.',
    ],
  },
  {
    role: 'Backend Developer Intern',
    org: 'Artiknesia',
    period: 'FEB 2025 - MAY 2025 · Remote',
    bullets: [
      'Developed and optimized backend features with Laravel Livewire.',
      'Improved database queries and backend logic; collaborated across functions for reliable integration.',
    ],
  },
]

export type Publication = {
  title: string
  authors: string
  venue: string
  year: string
  indexed: string
  abstract: string
  repo?: string
}

export const publications: Publication[] = [
  {
    title: 'Pemodelan Topik Cuitan tentang Danantara',
    authors: 'Noor Akhnafal Aban, Chanifah Indah Ratnasari',
    venue: 'Rabit: Jurnal Teknologi dan Sistem Informasi — LPPM Universitas Riau, Vol 11 No 1',
    year: 'JAN 2026',
    indexed: 'Garuda (Kemdiktisaintek)',
    abstract:
      'Topic modeling of Twitter conversations about Danantara using BERTopic and indoSBERT embeddings.',
    repo: 'https://github.com/akhnafal-aban/Danantara-Research',
  },
]

export type SkillGroup = {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  { category: 'Languages', items: ['PHP', 'SQL', 'Java', 'JavaScript', 'Python', 'Go', 'Swift'] },
  { category: 'Frameworks', items: ['Laravel', 'Livewire', 'Express', 'SwiftUI'] },
  { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
  {
    category: 'Backend & Systems',
    items: ['REST APIs', 'OOP', 'Debugging', 'Logging', 'App Security', 'Linux Admin', 'SSH', 'Deployment'],
  },
  {
    category: 'Infrastructure',
    items: ['Docker', 'Nginx', 'systemd', 'Ubuntu', 'CI/CD', 'VPS', 'Staging/Production'],
  },
  { category: 'Tools', items: ['Git', 'Postman', 'VS Code', 'TablePlus', 'Laragon', 'GitHub Desktop'] },
  {
    category: 'Agentic AI & DevOps',
    items: ['OpenCode', 'Hermes Agent (VPS)', 'MCP', 'Plugins', 'Skill authoring'],
  },
  { category: 'Research / ML', items: ['BERTopic', 'indoSBERT', 'Topic modeling', 'Text preprocessing'] },
]

export const awards = [
  {
    title: 'GEMASTIK 2025 National Round Finalist',
    detail: 'One of six Informatics UII students advancing to the national round.',
  },
  {
    title: 'GitHub: Pull Shark x2, Pair Extraordinaire, YOLO',
    detail: 'Merged PRs, co-authored PRs, and a master push — badges on the public profile.',
  },
]
