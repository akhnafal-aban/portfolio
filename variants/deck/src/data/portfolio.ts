export const profile = {
  name: 'Noor Akhnafal Aban',
  headline: 'Software Engineer',
  sublines: ['iOS', 'Backend Systems', 'Infrastructure'],
  based: 'Jakarta, Indonesia',
  from: 'Bojonegoro, East Java',
  email: 'akhnafal03@gmail.com',
  phone: '+62 857-9781-5215',
  github: 'https://github.com/akhnafal-aban',
  linkedin: 'https://www.linkedin.com/in/akhnaf-aban',
  youtube: 'https://youtube.com/@noorakhnafalaban-9917',
  gpa: '3.87 / 4.00',
  school: 'Universitas Islam Indonesia — Yogyakarta',
  degree: 'Bachelor of Informatics · Faculty of Industrial Technology · 2022 - Present',
  summary:
    'Software engineer across iOS, backend systems, production deployment, and server operations. Builds maintainable digital products over the application lifecycle — SwiftUI development alongside Laravel platforms, databases, APIs, and Linux infrastructure.',
  currentRole: 'Junior Developer - iOS · Apple Developer Academy @ UC Jakarta',
  currentMeta: 'Feb 2026 - Present · Contract',
  secondaryRole: 'Software Engineer · Really Sport Center',
  secondaryMeta: 'Aug 2025 - Present · Freelance',
}

export type Project = {
  id: string
  index: string
  title: string
  year: string
  stack: string[]
  tagline: string
  bullets: string[]
  repo?: string
  status?: string
}

export const projects: Project[] = [
  {
    id: 'akhnafin',
    index: '01',
    title: 'AkhnaFin',
    year: 'Jul 2026 - Present',
    stack: ['Swift', 'SwiftUI', 'SwiftData', 'CloudKit', 'Foundation Models', 'Vision', 'Speech', 'App Intents'],
    tagline: 'Personal finance capture. Logging expenses is tedious, so it doesn’t get done — so make capture near-frictionless.',
    bullets: [
      'Multiple input channels: App Intent / Siri, natural language via Foundation Models, voice via Speech, receipt photo via Vision, batch entry.',
      'All channels converge on one pipeline: input → TransactionParsing → TransactionDraft (editable) → confirm → commit → SwiftData + CloudKit.',
      'AI output always becomes an editable draft before save. Never auto-commits without confirmation.',
      'Solo app: on-device AI, multi-modal input, SwiftData + CloudKit persistence in production.',
    ],
    repo: 'https://github.com/akhnafal-aban/AkhnaFin',
    status: 'In development',
  },
  {
    id: 'rsc',
    index: '02',
    title: 'Really Sport Center',
    year: 'Aug 2025 - Present',
    stack: ['Laravel', 'MySQL', 'Docker', 'Nginx', 'Ubuntu', 'systemd'],
    tagline: 'End-to-end gym management platform. Members, payments, check-in, reporting — and the servers it runs on.',
    bullets: [
      'Members, memberships, payments, check-in / check-out, dashboards, reporting, scheduled operations.',
      'Deploy and maintain across staging and production.',
      'Administer Linux servers over SSH — remote maintenance, monitoring, troubleshooting.',
      'Freelance engagement; I own the platform end to end.',
    ],
    status: 'In production',
  },
  {
    id: 'danantara',
    index: '03',
    title: 'Danantara Research',
    year: '2026',
    stack: ['Python', 'Jupyter', 'BERTopic', 'indoSBERT'],
    tagline: 'Topic modeling pipeline that backs the published paper. Tweets about Danantara, modeled.',
    bullets: [
      'Full research pipeline: cleaning → BERTopic with indoSBERT embeddings → report.',
      'Companion to the journal article in Rabit : Jurnal Teknologi dan Sistem Informasi (Jan 2026).',
      'Reproducible notebook workflow; indexed in Garuda.',
    ],
    repo: 'https://github.com/akhnafal-aban/Danantara-Research',
  },
  {
    id: 'asset-tracker',
    index: '04',
    title: 'Asset Tracker',
    year: 'Jun 2026 - Present',
    stack: ['Swift', 'SwiftUI'],
    tagline: 'iOS asset tracking. Dashboard, models, users, settings, a network layer.',
    bullets: [
      'Dashboard, asset and category models, user management, settings.',
      'Network layer with API integration.',
      'Models: Asset, AssetCategory, User.',
    ],
    repo: 'https://github.com/akhnafal-aban/Asset-Tracker',
    status: 'In development',
  },
  {
    id: 'jambidan',
    index: '05',
    title: 'Jambidan',
    year: 'Mar 2024 - May 2024',
    stack: ['Laravel', 'PHP', 'MySQL'],
    tagline: 'Village management system. Administration workflows, a decision-support dashboard, LLM-assisted features.',
    bullets: [
      'Village administration workflows built full-stack.',
      'Decision-support dashboard.',
      'LLM-assisted functionality layered in.',
    ],
    repo: 'https://github.com/AKHNAFAL/JambidanDesa',
  },
  {
    id: 'task-reminder',
    index: '06',
    title: 'Task Reminder',
    year: '2026',
    stack: ['Laravel', 'Docker'],
    tagline: 'Project management app. Role-based dashboards, smart reminders, email notifications — dockerized.',
    bullets: [
      'Role-based dashboards.',
      'Smart task reminders and email notifications.',
      'Dockerized deployment; actively maintained.',
    ],
    repo: 'https://github.com/akhnafal-aban/laravel-project-task-reminder',
  },
]

export type Publication = {
  title: string
  authors: string
  venue: string
  date: string
  indexed: string
  repo?: string
}

export const publications: Publication[] = [
  {
    title: 'Pemodelan Topik Cuitan tentang Danantara',
    authors: 'Noor Akhnafal Aban, Chanifah Indah Ratnasari',
    venue: 'Rabit : Jurnal Teknologi dan Sistem Informasi — LPPM Universitas Riau, Vol 11 No 1',
    date: 'January 2026',
    indexed: 'Garuda (Garba Rujukan Digital, Kemdiktisaintek)',
    repo: 'https://github.com/akhnafal-aban/Danantara-Research',
  },
]

export const awards = [
  'GEMASTIK 2025 National Round finalist',
  'Pull Shark ×2 — GitHub',
  'Pair Extraordinaire — GitHub',
]

export const experience = [
  {
    role: 'Junior Developer - iOS',
    org: 'Apple Developer Academy @ UC Jakarta',
    meta: 'Feb 2026 - Present · Contract',
    note: 'iOS with Swift and SwiftUI through collaborative, project-based product development.',
  },
  {
    role: 'Software Engineer',
    org: 'Really Sport Center',
    meta: 'Aug 2025 - Present · Freelance',
    note: 'Gym management platform, end to end — including the servers.',
  },
  {
    role: 'Back End Developer',
    org: 'Faculty of Industrial Technology, UII',
    meta: 'May 2025 - Jan 2026 · Part-time',
    note: 'Laravel role-based academic test platform with LLM guidance.',
  },
  {
    role: 'Backend Developer Intern',
    org: 'Artiknesia',
    meta: 'Feb 2025 - May 2025 · Remote',
    note: 'Laravel Livewire backend, query optimization.',
  },
]

export const skillGroups = [
  { label: 'Languages', items: ['PHP', 'SQL', 'Java', 'JavaScript', 'Python', 'Go', 'Swift'] },
  { label: 'Frameworks', items: ['Laravel', 'Livewire', 'Express', 'SwiftUI'] },
  { label: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
  { label: 'Infra', items: ['Docker', 'Nginx', 'systemd', 'Ubuntu', 'CI/CD', 'VPS'] },
  { label: 'AI / ML', items: ['Foundation Models', 'Vision', 'Speech', 'BERTopic', 'indoSBERT'] },
]
