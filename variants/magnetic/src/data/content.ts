export const profile = {
  name: 'Noor Akhnafal Aban',
  headline: 'Software Engineer · iOS · Backend Systems',
  basedIn: 'Jakarta, Indonesia',
  summary:
    'Software engineer with experience spanning iOS development, backend systems, production deployment, and server operations. Builds maintainable digital products across the application lifecycle, combining SwiftUI development with Laravel-based platforms, databases, APIs, and Linux infrastructure.',
  email: 'akhnafal03@gmail.com',
  github: 'https://github.com/akhnafal-aban',
  linkedin: 'https://linkedin.com/in/akhnaf-aban',
  youtube: 'https://youtube.com/@noorakhnafalaban-9917',
  gpa: '3.84 / 4.00',
  education: 'Universitas Islam Indonesia — Yogyakarta',
}

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
    period: 'Feb 2026 - Present',
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
      'Building an end-to-end gym management platform covering members, memberships, payments, check-in/out, dashboards, reporting, and scheduled operations.',
      'Deploying and maintaining the application across staging and production environments.',
      'Administering Linux servers through SSH, performing remote maintenance and monitoring, and troubleshooting application and infrastructure issues.',
    ],
  },
  {
    role: 'Back End Developer',
    org: 'Faculty of Industrial Technology, Universitas Islam Indonesia',
    period: 'May 2025 - Jan 2026 · Part-time',
    bullets: [
      'Developed a Laravel-based, role-based academic test platform for faculty use.',
      'Implemented authentication, result processing, personalized LLM guidance, and filtered CSV exports for analysis.',
    ],
  },
  {
    role: 'Backend Developer Intern',
    org: 'Artiknesia',
    period: 'Feb 2025 - May 2025 · Remote',
    bullets: [
      'Developed and optimized backend features with Laravel Livewire to strengthen application functionality.',
      'Improved database queries and backend logic, then collaborated across functions to support reliable system integration.',
    ],
  },
]

export type Project = {
  name: string
  tagline: string
  description: string
  stack: string
  url?: string
  year: string
}

export const projects: Project[] = [
  {
    name: 'AkhnaFin',
    tagline: 'Personal Finance Capture',
    description:
      'Solo iOS finance app solving one problem: logging expenses is tedious. Near-frictionless capture via App Intent/Siri, natural language via Foundation Models, voice via Speech, receipt photo via Vision — all converging on a single pipeline. AI output always becomes an editable draft before save.',
    stack: 'Swift · SwiftUI · SwiftData · CloudKit · Foundation Models · Vision · Speech · App Intents',
    url: 'https://github.com/akhnafal-aban/AkhnaFin',
    year: '2026',
  },
  {
    name: 'GayaGerakSeru',
    tagline: 'Friction Simulation',
    description:
      'Interactive RealityKit physics simulation for friction education. Object slides down an inclined ramp; ground roughness is the main user-controlled variable. Translates a physics concept into a manipulable 3D experience.',
    stack: 'Swift · RealityKit · SwiftUI',
    url: 'https://github.com/akhnafal-aban/GayaGerakSeru',
    year: '2026',
  },
  {
    name: 'BiteBeat',
    tagline: 'Music to Food Analyzer',
    description:
      'Academy team app analyzing music and recommending food pairings using Apple Intelligence. Flow: authorization, home, recommendation, ending, profile, with meal selection and a default playlist and foods dataset.',
    stack: 'Swift · SwiftUI · Foundation Models',
    url: 'https://github.com/windyclaun/BiteBeatApp',
    year: '2026',
  },
  {
    name: 'Really Sport Center',
    tagline: 'Gym Management Platform',
    description:
      'End-to-end gym management platform: members, memberships, payments, check-in/out, dashboards, reporting, scheduled operations. Deployed across staging and production. Linux server administration included.',
    stack: 'Laravel · MySQL · Docker · Nginx · Ubuntu',
    year: '2025',
  },
  {
    name: 'TPA FTI',
    tagline: 'Academic Potential Test Platform',
    description:
      'Laravel role-based academic test platform with admin and student authentication, personalized result guidance via LLM, and filtered CSV exports with aggregation for faculty analysis.',
    stack: 'Laravel · LLM Integration · CSV Export',
    year: '2025',
  },
  {
    name: 'Danantara Research',
    tagline: 'Topic Modeling Pipeline',
    description:
      'Full research pipeline: cleaning, BERTopic topic modeling with indoSBERT embeddings, and report. Companion to the published journal article on topic modeling of tweets about Danantara.',
    stack: 'Python · BERTopic · indoSBERT · Jupyter',
    url: 'https://github.com/akhnafal-aban/Danantara-Research',
    year: '2026',
  },
]

export type SkillGroup = {
  category: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  { category: 'Languages', skills: ['PHP', 'SQL', 'Java', 'JavaScript', 'Python', 'Go', 'Swift'] },
  { category: 'Frameworks', skills: ['Laravel', 'Livewire', 'Express', 'SwiftUI'] },
  { category: 'Databases', skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
  {
    category: 'Backend & Systems',
    skills: ['REST APIs', 'OOP', 'Debugging', 'Logging', 'Application Security', 'Linux Server Admin'],
  },
  {
    category: 'Infrastructure',
    skills: ['Docker', 'Nginx', 'systemd', 'Ubuntu', 'CI/CD', 'VPS Deployment'],
  },
  { category: 'Tools', skills: ['Git', 'Postman', 'TablePlus', 'Laragon'] },
  {
    category: 'AI & Research',
    skills: ['Foundation Models', 'Vision', 'Speech', 'BERTopic', 'indoSBERT', 'MCP'],
  },
]

export const publication = {
  title: 'Pemodelan Topik Cuitan tentang Danantara',
  subtitle: 'Topic Modeling of Tweets about Danantara',
  authors: 'Noor Akhnafal Aban, Chanifah Indah Ratnasari',
  journal: 'Rabit : Jurnal Teknologi dan Sistem Informasi — LPPM Universitas Riau',
  volume: 'Vol 11 No 1, January 2026',
  indexed: 'Garuda (Garba Rujukan Digital, Kemdiktisaintek)',
}

export const awards = [
  'GEMASTIK 2025 National Round finalist',
  'GitHub badges: Pull Shark x2, Pair Extraordinaire, YOLO',
]
