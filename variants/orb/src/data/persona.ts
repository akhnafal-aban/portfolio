export const persona = {
  name: 'Noor Akhnafal Aban',
  headline: 'Software Engineer · iOS · Backend Systems',
  location: 'Jakarta, Indonesia',
  summary:
    'Software engineer working across iOS development, backend systems, production deployment, and server operations. Builds maintainable digital products across the application lifecycle — SwiftUI development alongside Laravel platforms, databases, APIs, and Linux infrastructure.',
  email: 'akhnafal03@gmail.com',
  phone: '+62 857-9781-5215',
  links: {
    github: 'https://github.com/akhnafal-aban',
    githubLegacy: 'https://github.com/AKHNAFAL',
    linkedin: 'https://linkedin.com/in/akhnaf-aban',
    youtube: 'https://youtube.com/@noorakhnafalaban-9917',
  },
  education: {
    school: 'Universitas Islam Indonesia',
    city: 'Yogyakarta, Indonesia',
    program: 'Bachelor of Informatics · Faculty of Industrial Technology',
    period: '2022 - Present',
    gpa: '3.87 / 4.00',
  },
} as const

export type Work = {
  title: string
  blurb: string
  stack: string[]
  period: string
  repo?: string
  kind: 'iOS' | 'Web' | 'Academy' | 'Research' | 'Backend'
}

export const works: Work[] = [
  {
    title: 'AkhnaFin',
    blurb:
      'Solo iOS finance app. Friction is the reason expense logging never gets done — so this app removes it. Capture via App Intent / Siri, natural language through Foundation Models, voice via Speech, receipt photo via Vision, and batch entry, all converging on one pipeline. AI output becomes an editable draft before save; never auto-commits.',
    stack: ['Swift', 'SwiftUI', 'SwiftData', 'CloudKit', 'Foundation Models', 'Vision', 'Speech', 'App Intents'],
    period: 'Jul 2026 - Present',
    repo: 'https://github.com/akhnafal-aban/AkhnaFin',
    kind: 'iOS',
  },
  {
    title: 'GayaGerakSeru',
    blurb:
      'Interactive RealityKit physics simulation for friction education. An object slides down an inclined ramp onto a ground surface; ground roughness (0.0 - 1.0) is the main variable and determines how speed changes after leaving the ramp. Restitution is disabled to keep the focus on friction, not bounce.',
    stack: ['Swift', 'RealityKit', 'SwiftUI'],
    period: 'Jul 2026 - Present',
    repo: 'https://github.com/akhnafal-aban/GayaGerakSeru',
    kind: 'Academy',
  },
  {
    title: 'BiteBeat',
    blurb:
      'Academy team app (Challenge 2). Analyzes music and recommends food pairings using Apple Intelligence. Flow: authorization → home → recommendation → ending → profile. Maps musical qualities to meal suggestions through a Foundation Models helper and a default playlist + foods dataset.',
    stack: ['Swift', 'SwiftUI', 'Foundation Models'],
    period: 'May 2026 - Jun 2026',
    repo: 'https://github.com/windyclaun/BiteBeatApp',
    kind: 'Academy',
  },
  {
    title: 'Really Sport Center',
    blurb:
      'End-to-end gym management platform — members, memberships, payments, check-in / check-out, dashboards, reporting, and scheduled operations. Deployed across staging and production, with Linux server administration over SSH and ongoing maintenance and monitoring.',
    stack: ['Laravel', 'MySQL', 'Linux', 'Nginx', 'Docker'],
    period: 'Aug 2025 - Present',
    kind: 'Web',
  },
  {
    title: 'Task Reminder',
    blurb:
      'Laravel project management app with role-based dashboards, smart task reminders, and email notifications. Dockerized deployment; actively maintained.',
    stack: ['Laravel', 'Docker'],
    period: '2026',
    repo: 'https://github.com/akhnafal-aban/laravel-project-task-reminder',
    kind: 'Backend',
  },
  {
    title: 'Danantara Research',
    blurb:
      'Full research pipeline: cleaning → BERTopic topic modeling with indoSBERT embeddings → report. Companion to the published journal article on topic modeling of tweets about Danantara.',
    stack: ['Python', 'BERTopic', 'indoSBERT', 'Jupyter'],
    period: '2026',
    repo: 'https://github.com/akhnafal-aban/Danantara-Research',
    kind: 'Research',
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
    period: 'Feb 2026 - Present · Contract',
    bullets: [
      'Developing iOS applications with Swift and SwiftUI through collaborative, project-based product development.',
      'Applying an established backend foundation while expanding product thinking and native iOS implementation skills.',
    ],
  },
  {
    role: 'Software Engineer',
    org: 'Really Sport Center',
    period: 'Aug 2025 - Present · Freelance',
    bullets: [
      'Building and evolving an end-to-end gym management platform: members, memberships, payments, check-in / check-out, dashboards, reporting, scheduled operations.',
      'Deploying and maintaining the application across staging and production environments.',
      'Administering Linux servers over SSH — remote maintenance, monitoring, and troubleshooting of application and infrastructure issues.',
    ],
  },
  {
    role: 'Back End Developer',
    org: 'Faculty of Industrial Technology, Universitas Islam Indonesia',
    period: 'May 2025 - Jan 2026 · Part-time',
    bullets: [
      'Built a Laravel-based, role-based academic test platform for faculty use.',
      'Implemented authentication, result processing, personalized LLM guidance, and filtered CSV exports for analysis.',
    ],
  },
  {
    role: 'Backend Developer Intern',
    org: 'Artiknesia',
    period: 'Feb 2025 - May 2025 · Remote',
    bullets: [
      'Developed and optimized backend features with Laravel Livewire.',
      'Improved database queries and backend logic, and collaborated across functions to support reliable system integration.',
    ],
  },
]

export type Publication = {
  title: string
  authors: string
  venue: string
  date: string
  indexed: string
  pipeline?: string
}

export const publications: Publication[] = [
  {
    title: 'Pemodelan Topik Cuitan tentang Danantara (Topic Modeling of Tweets about Danantara)',
    authors: 'Noor Akhnafal Aban, Chanifah Indah Ratnasari',
    venue: 'Rabit: Jurnal Teknologi dan Sistem Informasi — LPPM Universitas Riau, Vol 11 No 1',
    date: 'January 2026',
    indexed: 'Garuda (Garba Rujukan Digital, Kemdiktisaintek)',
    pipeline: 'github.com/akhnafal-aban/Danantara-Research',
  },
]

export const skillGroups: { label: string; items: string[] }[] = [
  { label: 'Languages', items: ['PHP', 'SQL', 'Java', 'JavaScript', 'Python', 'Go', 'Swift'] },
  {
    label: 'Frameworks & Platforms',
    items: ['Laravel', 'Livewire', 'Express', 'SwiftUI'],
  },
  { label: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
  {
    label: 'Backend & Systems',
    items: ['REST APIs', 'OOP', 'Authentication', 'Role-based authorization', 'Query optimization', 'Application security', 'Logging', 'Debugging'],
  },
  {
    label: 'Infrastructure',
    items: ['Linux server admin', 'SSH', 'Docker', 'Nginx', 'systemd', 'Ubuntu', 'CI/CD', 'VPS', 'Staging / Production'],
  },
  { label: 'Tools', items: ['Git', 'Postman', 'VS Code', 'TablePlus', 'Laragon', 'GitHub Desktop'] },
  {
    label: 'Agentic AI & DevOps',
    items: ['OpenCode', 'Hermes Agent (VPS)', 'Model Context Protocol (MCP)', 'Plugins', 'Skill authoring'],
  },
  { label: 'Research / ML', items: ['BERTopic', 'indoSBERT', 'Topic modeling', 'Text preprocessing'] },
]

export const awards: string[] = [
  'GEMASTIK 2025 National Round finalist — one of six Informatics UII students advancing to the national round.',
  'GitHub badges: Pull Shark ×2 (merged PRs), Pair Extraordinaire (co-authored PRs), YOLO (pushed to master).',
]
