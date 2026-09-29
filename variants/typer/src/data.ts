// All content sourced from /Users/aban/Profile/akhnaf-context.md
// Real data only — no invented metrics.

export const profile = {
  name: 'Noor Akhnafal Aban',
  role: 'Software Engineer',
  headline: 'iOS · Backend · Infrastructure',
  focus: ['iOS', 'Backend'],
  location: 'Jakarta, Indonesia',
  email: 'akhnafal03@gmail.com',
  phone: '+62 857-9781-5215',
  github: 'github.com/akhnafal-aban',
  githubUrl: 'https://github.com/akhnafal-aban',
  linkedin: 'linkedin.com/in/akhnaf-aban',
  linkedinUrl: 'https://linkedin.com/in/akhnaf-aban',
  youtube: 'youtube.com/@noorakhnafalaban-9917',
  youtubeUrl: 'https://youtube.com/@noorakhnafalaban-9917',
  summary:
    'Software engineer with experience spanning iOS development, backend systems, production deployment, and server operations. Builds maintainable digital products across the application lifecycle — SwiftUI development with Laravel-based platforms, databases, APIs, and Linux infrastructure.',
  gpa: '3.84 / 4.00',
  education: 'Universitas Islam Indonesia — Bachelor of Informatics (2022 - 2026 (Graduated))',
}

export type Experience = {
  role: string
  org: string
  period: string
  kind: 'professional' | 'additional' | 'volunteer'
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Junior Developer - iOS',
    org: 'Apple Developer Academy @ UC Jakarta',
    period: 'Feb 2026 - Present · Contract',
    kind: 'professional',
    bullets: [
      'Develop iOS applications with Swift and SwiftUI through collaborative, project-based product development.',
      'Apply an established backend foundation while expanding product thinking and native iOS implementation skills.',
    ],
  },
  {
    role: 'Software Engineer',
    org: 'Really Sport Center',
    period: 'Aug 2025 - Present · Freelance',
    kind: 'professional',
    bullets: [
      'Build and evolve an end-to-end gym management platform — members, memberships, payments, check-in/out, dashboards, reporting, and scheduled operations.',
      'Deploy and maintain across staging and production; administer Linux servers via SSH, monitor, and troubleshoot.',
    ],
  },
  {
    role: 'Back End Developer',
    org: 'Faculty of Industrial Technology, Universitas Islam Indonesia',
    period: 'May 2025 - Jan 2026 · Part-time',
    kind: 'professional',
    bullets: [
      'Built a Laravel-based, role-based academic test platform for faculty use.',
      'Implemented authentication, result processing, personalized LLM guidance, and filtered CSV exports for analysis.',
    ],
  },
  {
    role: 'Backend Developer Intern',
    org: 'Artiknesia',
    period: 'Feb 2025 - May 2025 · Remote',
    kind: 'professional',
    bullets: [
      'Developed and optimized backend features with Laravel Livewire to strengthen application functionality.',
      'Improved database queries and backend logic; collaborated across functions for reliable system integration.',
    ],
  },
  {
    role: 'Design Coordinator',
    org: 'Marketing & Communications, FTI UII',
    period: 'Jan 2025 - Feb 2026',
    kind: 'additional',
    bullets: [
      'Led a 13-person design team, delegated work, and aligned promotional output with cross-division campaign goals.',
    ],
  },
  {
    role: 'Volunteer Backend Developer',
    org: 'Ulil Albab Student Center Electric Vehicle',
    period: 'Aug 2024 - Oct 2024 · Remote',
    kind: 'volunteer',
    bullets: [
      'Built and deployed a Laravel attendance system — authentication, attendance tracking, meeting APIs, optimized database structures.',
    ],
  },
]

export type Project = {
  name: string
  tag: 'ios' | 'academy' | 'web' | 'research' | 'web-legacy'
  stack: string[]
  period: string
  url?: string
  description: string
}

export const projects: Project[] = [
  {
    name: 'AkhnaFin',
    tag: 'ios',
    stack: ['Swift', 'SwiftUI', 'SwiftData', 'CloudKit', 'Foundation Models', 'Vision', 'Speech', 'App Intents'],
    period: 'Jul 2026 - Present',
    url: 'https://github.com/akhnafal-aban/AkhnaFin',
    description:
      'Solo iOS finance app. Near-frictionless expense capture via App Intent/Siri, natural language (Foundation Models), voice (Speech), receipt photo (Vision), and batch entry — all converging on one pipeline. AI output always becomes an editable draft before commit; never auto-saves without confirmation.',
  },
  {
    name: 'GayaGerakSeru',
    tag: 'academy',
    stack: ['Swift', 'RealityKit', 'SwiftUI'],
    period: 'Jul 2026 - Present · Challenge 2',
    url: 'https://github.com/akhnafal-aban/GayaGerakSeru',
    description:
      'Interactive RealityKit physics simulation for friction education. Object slides down an inclined ramp onto a ground surface; ground roughness (0.0 - 1.0) is the main user-controlled variable. Restitution disabled to focus purely on friction.',
  },
  {
    name: 'BiteBeat',
    tag: 'academy',
    stack: ['Swift', 'SwiftUI', 'Foundation Models'],
    period: 'May 2026 - Jun 2026 · Challenge 2 · Team',
    url: 'https://github.com/windyclaun/BiteBeatApp',
    description:
      'Academy challenge 2 team app. Analyzes music and recommends food pairings using Apple Intelligence (Foundation Models). Flow: authorization → home → recommendation → ending → profile.',
  },
  {
    name: 'Asset Tracker',
    tag: 'ios',
    stack: ['Swift', 'SwiftUI'],
    period: 'Jun 2026 - Present',
    url: 'https://github.com/akhnafal-aban/Asset-Tracker',
    description:
      'iOS asset tracking app with dashboard, asset and category models, user management, and settings. Network layer with API integration.',
  },
  {
    name: 'Really Sport Center Platform',
    tag: 'web',
    stack: ['Laravel', 'MySQL', 'Docker', 'Nginx', 'Linux'],
    period: 'Ongoing',
    url: 'https://github.com/akhnafal-aban',
    description:
      'End-to-end gym management product: payments, membership workflows, reporting, scheduled processes, deployment, and infrastructure management across staging and production.',
  },
  {
    name: 'TPA FTI — Academic Potential Test Platform',
    tag: 'web',
    stack: ['Laravel', 'LLM'],
    period: 'May 2025 - Present',
    description:
      'Role-based web platform with authentication (admin/student), personalized result guidance via LLM, and filtered CSV exports with aggregation.',
  },
  {
    name: 'Task Reminder',
    tag: 'web',
    stack: ['Laravel', 'Docker'],
    period: '2026',
    url: 'https://github.com/akhnafal-aban/laravel-project-task-reminder',
    description:
      'Laravel project management app with role-based dashboards, smart task reminders, and email notifications. Dockerized deployment; actively maintained.',
  },
  {
    name: 'Danantara-Research',
    tag: 'research',
    stack: ['Python', 'Jupyter', 'BERTopic', 'indoSBERT'],
    period: '2026',
    url: 'https://github.com/akhnafal-aban/Danantara-Research',
    description:
      'Full research pipeline: cleaning → BERTopic topic modeling with indoSBERT embeddings → report. Companion to the published journal article.',
  },
  {
    name: 'Jambidan Village Management System',
    tag: 'web-legacy',
    stack: ['Laravel'],
    period: 'Mar 2024 - May 2024',
    description:
      'Full-stack web application for village administration workflows, a decision-support dashboard, and LLM-assisted functionality.',
  },
  {
    name: 'Blog System',
    tag: 'web-legacy',
    stack: ['Java', 'JavaFX', 'MVC', 'XStream'],
    period: 'Jul 2023',
    description: 'Desktop blog manager with XML storage, multi-scene navigation, and role-based views.',
  },
]

export type SkillGroup = {
  category: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  { category: 'languages', items: ['PHP', 'SQL', 'Java', 'JavaScript', 'Python', 'Go', 'Swift'] },
  {
    category: 'frameworks',
    items: ['Laravel', 'Livewire', 'Express', 'SwiftUI'],
  },
  { category: 'databases', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
  {
    category: 'backend',
    items: ['REST APIs', 'OOP', 'Authentication', 'Role-based auth', 'Query optimization', 'System integration'],
  },
  {
    category: 'infrastructure',
    items: ['Docker', 'Nginx', 'systemd', 'Ubuntu', 'CI/CD', 'VPS', 'SSH', 'Staging/Prod'],
  },
  {
    category: 'ai',
    items: ['Foundation Models', 'BERTopic', 'indoSBERT', 'Vision OCR', 'Speech', 'MCP', 'LLM integration'],
  },
  {
    category: 'tools',
    items: ['Git', 'Postman', 'VS Code', 'TablePlus', 'Laragon', 'Figma'],
  },
]

export type Publication = {
  title: string
  authors: string[]
  venue: string
  date: string
  indexed: string[]
  pipeline?: string
}

export const publications: Publication[] = [
  {
    title: 'Pemodelan Topik Cuitan tentang Danantara (Topic Modeling of Tweets about Danantara)',
    authors: ['Noor Akhnafal Aban', 'Chanifah Indah Ratnasari'],
    venue: 'Rabit : Jurnal Teknologi dan Sistem Informasi — LPPM Universitas Riau, Vol 11 No 1',
    date: 'January 2026',
    indexed: ['Garuda (Garba Rujukan Digital, Kemdiktisaintek)'],
    pipeline: 'github.com/akhnafal-aban/Danantara-Research',
  },
]

export const achievements = [
  'GEMASTIK 2025 National Round finalist — one of six Informatics UII students advancing to the national round.',
  'GitHub badges: Pull Shark ×2, Pair Extraordinaire, YOLO.',
]
