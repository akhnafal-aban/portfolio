export type Project = {
  index: string
  title: string
  meta: string
  period: string
  blurb: string
  detail: string
  repo: { label: string; href: string }
  tags: string[]
}

export const HERO = {
  name: 'Noor Akhnafal Aban',
  roles: ['Software Engineer', 'iOS', 'Backend Systems'],
  location: 'Jakarta, Indonesia',
  hook: 'Backend-leaning generalist. Laravel, Python, Swift. Building things that run — apps, pipelines, and the occasional research notebook.',
}

export const PROJECTS: Project[] = [
  {
    index: '01',
    title: 'AkhnaFin',
    meta: 'Personal finance capture · iOS',
    period: '2026 — present',
    blurb:
      'Solo iOS app attacking one problem: logging expenses is tedious, so it does not get done. Near-frictionless capture across App Intent/Siri, natural language via Foundation Models, voice via Speech, receipt photo via Vision, and batch entry — all converging on one pipeline.',
    detail:
      'Input (text / voice / image) → TransactionParsing → TransactionDraft (editable) → user confirm → TransactionRepository.commit() → SwiftData + CloudKit. AI output always becomes an editable draft before save; never auto-commits without confirmation.',
    repo: { label: 'github.com/akhnafal-aban/AkhnaFin', href: 'https://github.com/akhnafal-aban/AkhnaFin' },
    tags: ['Swift', 'SwiftUI', 'SwiftData', 'CloudKit', 'Foundation Models', 'Vision', 'Speech', 'App Intents'],
  },
  {
    index: '02',
    title: 'Really Sport Center',
    meta: 'Gym management platform · Laravel',
    period: '2025 — present',
    blurb:
      'End-to-end gym management as a freelancer: members, memberships, payments, check-in and check-out, dashboards, reporting, and scheduled operations. Deployed and maintained across staging and production.',
    detail:
      'Administers Linux servers over SSH — remote maintenance, monitoring, and troubleshooting of application and infrastructure issues in a live commercial environment.',
    repo: { label: 'Production · freelance engagement', href: 'https://github.com/akhnafal-aban' },
    tags: ['Laravel', 'MySQL', 'Linux', 'Nginx', 'Deployment', 'Operations'],
  },
  {
    index: '03',
    title: 'Danantara Research',
    meta: 'Topic modeling pipeline · Python',
    period: '2026',
    blurb:
      'Full research pipeline — cleaning → BERTopic topic modeling with indoSBERT embeddings → report. Companion to the published journal article on Twitter conversations about Danantara.',
    detail:
      'Source code and reproducible pipeline for the paper in Rabit: Jurnal Teknologi dan Sistem Informasi, Vol 11 No 1 (January 2026).',
    repo: { label: 'github.com/akhnafal-aban/Danantara-Research', href: 'https://github.com/akhnafal-aban/Danantara-Research' },
    tags: ['Python', 'Jupyter', 'BERTopic', 'indoSBERT', 'NLP'],
  },
  {
    index: '04',
    title: 'Asset Tracker',
    meta: 'Asset management · iOS',
    period: '2026 — present',
    blurb:
      'iOS asset tracking app with dashboard, asset and category models, user management, and settings. Network layer with API integration; typed models for Asset, AssetCategory, and User.',
    detail: 'Built to exercise a clean client–server contract against a REST backend.',
    repo: { label: 'github.com/akhnafal-aban/Asset-Tracker', href: 'https://github.com/akhnafal-aban/Asset-Tracker' },
    tags: ['Swift', 'SwiftUI', 'REST', 'Networking'],
  },
  {
    index: '05',
    title: 'Jambidan',
    meta: 'Village management system · Laravel',
    period: '2024',
    blurb:
      'Village administration workflows, a decision-support dashboard, and LLM-assisted functionality for local government use.',
    detail: 'Full-stack Laravel application delivered as a volunteer engagement.',
    repo: { label: 'github.com/AKHNAFAL/JambidanDesa', href: 'https://github.com/AKHNAFAL/JambidanDesa' },
    tags: ['Laravel', 'Full-stack', 'LLM integration'],
  },
  {
    index: '06',
    title: 'Task Reminder',
    meta: 'Project management · Laravel · Docker',
    period: '2026',
    blurb:
      'Project management app with role-based dashboards, smart task reminders, and email notifications. Dockerized deployment; actively maintained.',
    detail: '2 stars on GitHub.',
    repo: {
      label: 'github.com/akhnafal-aban/laravel-project-task-reminder',
      href: 'https://github.com/akhnafal-aban/laravel-project-task-reminder',
    },
    tags: ['Laravel', 'Docker', 'Role-based access', 'Email'],
  },
]

export const ABOUT = {
  lead:
    'Software engineer working across iOS, backend systems, production deployment, and server operations. Builds maintainable digital products through the full lifecycle — SwiftUI on one end, Laravel and Linux on the other.',
  journeyTitle: 'Bojonegoro → Yogyakarta → Jakarta',
  journey: [
    {
      place: 'Bojonegoro, East Java',
      note: 'Home village. Where it started, not where the work happens.',
    },
    {
      place: 'Yogyakarta',
      note: 'Universitas Islam Indonesia — Bachelor of Informatics, Faculty of Industrial Technology. GPA 3.84 / 4.00. 2022 — 2026 (Graduated).',
    },
    {
      place: 'Jakarta',
      note: 'Apple Developer Academy @ UC Jakarta — Junior Developer, iOS. Moved for the academy; planning to continue the career here.',
    },
  ],
  currently:
    'Currently a Junior Developer (iOS) at the Apple Developer Academy @ UC Jakarta, expanding product and native iOS skills on top of a backend and infrastructure foundation. Freelance Software Engineer at Really Sport Center since August 2025.',
  pull:
    '"Backend-leaning generalist" is the honest description. The work is not one stack — it is whatever needs to run, end to end.',
}

export const EXPERIENCE = [
  {
    role: 'Junior Developer — iOS',
    org: 'Apple Developer Academy @ UC Jakarta',
    period: 'Feb 2026 — present · Contract',
    note: 'iOS development with Swift and SwiftUI through collaborative, project-based product work.',
  },
  {
    role: 'Software Engineer',
    org: 'Really Sport Center',
    period: 'Aug 2025 — present · Freelance',
    note: 'End-to-end gym management platform; staging/production deployment and Linux server administration over SSH.',
  },
  {
    role: 'Back End Developer',
    org: 'Faculty of Industrial Technology, Universitas Islam Indonesia',
    period: 'May 2025 — Jan 2026 · Part-time',
    note: 'Role-based academic test platform in Laravel: auth, result processing, personalized LLM guidance, filtered CSV exports.',
  },
  {
    role: 'Backend Developer Intern',
    org: 'Artiknesia',
    period: 'Feb 2025 — May 2025 · Remote',
    note: 'Laravel Livewire features, query optimization, and backend logic for system integration.',
  },
]

export const PUBLICATIONS = [
  {
    title: 'Pemodelan Topik Cuitan tentang Danantara',
    subtitle: 'Topic Modeling of Tweets about Danantara',
    authors: 'Noor Akhnafal Aban · Chanifah Indah Ratnasari',
    venue: 'Rabit: Jurnal Teknologi dan Sistem Informasi — LPPM Universitas Riau',
    volume: 'Vol 11 No 1 · January 2026',
    indexed: 'Indexed in Garuda (Garba Rujukan Digital, Kemdiktisaintek)',
    pipeline: {
      label: 'github.com/akhnafal-aban/Danantara-Research',
      href: 'https://github.com/akhnafal-aban/Danantara-Research',
    },
  },
]

export const RECOGNITION = [
  'GEMASTIK 2025 national-round finalist (one of six Informatics UII students advancing)',
  'Published author — Rabit: Jurnal Teknologi dan Sistem Informasi, 2026',
  'GPA 3.84 / 4.00 — Universitas Islam Indonesia',
]

export const SKILLS: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['PHP', 'SQL', 'Java', 'JavaScript', 'Python', 'Go', 'Swift'] },
  { group: 'Frameworks', items: ['Laravel', 'Livewire', 'Express', 'SwiftUI'] },
  { group: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
  {
    group: 'Backend & systems',
    items: ['REST APIs', 'OOP', 'Debugging', 'Logging', 'Application security', 'Linux server admin', 'SSH', 'Deployment'],
  },
  {
    group: 'Infrastructure',
    items: ['Docker', 'Nginx', 'systemd', 'Ubuntu', 'CI/CD', 'VPS', 'Staging / production'],
  },
  { group: 'Tools', items: ['Git', 'Postman', 'VS Code', 'TablePlus', 'Laragon'] },
  { group: 'Agentic AI & DevOps', items: ['OpenCode', 'Hermes Agent', 'MCP', 'Skill authoring'] },
  { group: 'Research / ML', items: ['BERTopic', 'indoSBERT', 'Topic modeling', 'Text preprocessing'] },
]

export const CONTACT = {
  email: 'akhnafal03@gmail.com',
  github: { label: 'github.com/akhnafal-aban', href: 'https://github.com/akhnafal-aban' },
  linkedin: { label: 'linkedin.com/in/akhnaf-aban', href: 'https://www.linkedin.com/in/akhnaf-aban' },
}
