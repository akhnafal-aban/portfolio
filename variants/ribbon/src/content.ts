export const person = {
  name: 'Noor Akhnafal Aban',
  headline: 'Software Engineer · iOS · Backend Systems',
  location: 'Jakarta, Indonesia',
  email: 'akhnafal03@gmail.com',
  phone: '+62 857-9781-5215',
  github: 'https://github.com/akhnafal-aban',
  linkedin: 'https://linkedin.com/in/akhnaf-aban',
  summary:
    'Software engineer with experience spanning iOS development, backend systems, production deployment, and server operations. Builds maintainable digital products across the application lifecycle, combining SwiftUI development with Laravel-based platforms, databases, APIs, and Linux infrastructure.',
}

export const experience = [
  {
    role: 'Junior Developer - iOS',
    org: 'Apple Developer Academy @ UC Jakarta',
    date: 'Feb 2026 - Present',
    type: 'Contract',
    points: [
      'Develop iOS applications with Swift and SwiftUI through collaborative, project-based product development.',
      'Apply an established backend foundation while expanding product thinking and native iOS implementation skills.',
    ],
  },
  {
    role: 'Software Engineer',
    org: 'Really Sport Center',
    date: 'Aug 2025 - Present',
    type: 'Freelance',
    points: [
      'Built and evolved an end-to-end gym management platform covering members, memberships, payments, check-in/out, dashboards, reporting, and scheduled operations.',
      'Deployed and maintained the application across staging and production environments.',
      'Administered Linux servers through SSH; performed remote maintenance, monitoring, and troubleshooting of application and infrastructure issues.',
    ],
  },
  {
    role: 'Back End Developer',
    org: 'Faculty of Industrial Technology, Universitas Islam Indonesia',
    date: 'May 2025 - Jan 2026',
    type: 'Part-time',
    points: [
      'Developed a Laravel-based, role-based academic test platform for faculty use.',
      'Implemented authentication, result processing, personalized LLM guidance, and filtered CSV exports for analysis.',
    ],
  },
  {
    role: 'Backend Developer Intern',
    org: 'Artiknesia',
    date: 'Feb 2025 - May 2025',
    type: 'Remote',
    points: [
      'Developed and optimized backend features with Laravel Livewire to strengthen application functionality.',
      'Improved database queries and backend logic; collaborated across functions to support reliable system integration.',
    ],
  },
]

export const projects = [
  {
    n: '01',
    title: 'AkhnaFin — Personal Finance Capture',
    meta: 'Swift · SwiftUI · SwiftData · CloudKit · Foundation Models · Vision · Speech · App Intents',
    date: 'Jul 2026 - Present',
    href: 'https://github.com/akhnafal-aban/AkhnaFin',
    body: 'Solo iOS finance app solving one problem: logging expenses is tedious, so it doesn\u2019t get done. Near-frictionless capture via App Intent/Siri, natural language via Foundation Models, voice via Speech, receipt photo via Vision, and batch entry — all converging on a single pipeline. AI output always becomes an editable draft before save; never auto-commits without user confirmation. Demonstrates on-device AI integration, multi-modal input, and SwiftData + CloudKit persistence in a production solo app.',
  },
  {
    n: '02',
    title: 'GayaGerakSeru — Friction Simulation',
    meta: 'Swift · RealityKit · SwiftUI · Academy Challenge 2',
    date: 'Jul 2026 - Present',
    href: 'https://github.com/akhnafal-aban/GayaGerakSeru',
    body: 'Interactive RealityKit physics simulation for friction education. An object slides down an inclined ramp onto a ground surface; ground roughness (0.0–1.0) is the main user-controlled variable and determines how the object\u2019s speed changes after leaving the ramp. Restitution disabled (0.0) to focus purely on friction. Ramp friction fixed at 0.5; object friction varies per material type. Translates a physics concept — effective friction = f(object friction × ground friction) — into an interactive, manipulable 3D experience.',
  },
  {
    n: '03',
    title: 'BiteBeat — Music to Food Analyzer',
    meta: 'Swift · SwiftUI · Foundation Models · Academy Challenge 2 · Team project',
    date: 'May 2026 - Jun 2026',
    href: 'https://github.com/windyclaun/BiteBeatApp',
    body: 'Academy challenge 2 team app. Analyzes music and recommends food pairings using Apple Intelligence (Foundation Models). Flow: authorization → home → recommendation → ending → profile, with meal selection and a default playlist + foods dataset. Integrates AppleIntelligenceHelper and MusicToFoodAnalyzer services to map musical qualities to meal suggestions.',
  },
  {
    n: '04',
    title: 'TPA FTI — Academic Potential Test Platform',
    meta: 'Laravel · Role-based web platform · LLM integration',
    date: 'May 2025 - Present',
    href: null,
    body: 'Role-based academic test platform built for the Faculty of Industrial Technology at UII. Implemented authentication for admin and student roles, personalized result guidance via LLM-generated feedback, and filtered CSV exports with aggregation for analysis. Deployed for faculty use.',
  },
  {
    n: '05',
    title: 'Really Sport Center Platform',
    meta: 'Laravel · Full operational product',
    date: 'Ongoing',
    href: null,
    body: 'End-to-end gym management platform: members, memberships, payments, check-in/out, dashboards, reporting, and scheduled operations. Built and maintained across staging and production. Includes Linux server administration, SSH remote management, deployment, and infrastructure monitoring. A full product, not a prototype — in active operational use.',
  },
  {
    n: '06',
    title: 'Danantara-Research — Topic Modeling Pipeline',
    meta: 'Python · Jupyter · BERTopic · indoSBERT',
    date: '2026',
    href: 'https://github.com/akhnafal-aban/Danantara-Research',
    body: 'Full research pipeline: cleaning → BERTopic topic modeling with indoSBERT embeddings → report. Companion to the published journal article on topic modeling of tweets about Danantara. Reproducible end-to-end, from raw text to indexed findings.',
  },
]

export const publications = [
  {
    title: 'Pemodelan Topik Cuitan tentang Danantara',
    subtitle: 'Topic Modeling of Tweets about Danantara using BERTopic and indoSBERT Embeddings',
    authors: 'Noor Akhnafal Aban, Chanifah Indah Ratnasari (Universitas Islam Indonesia)',
    venue: 'Rabit : Jurnal Teknologi dan Sistem Informasi — LPPM Universitas Riau',
    vol: 'Vol 11 No 1, January 2026',
    indexed: 'Garuda (Garba Rujukan Digital, Kemdiktisaintek)',
  },
]

export const skills = [
  { category: 'Languages', items: ['PHP', 'SQL', 'Java', 'JavaScript', 'Python', 'Go', 'Swift'] },
  { category: 'Frameworks & Platforms', items: ['Laravel', 'Livewire', 'Express', 'SwiftUI'] },
  { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
  { category: 'Backend & Systems', items: ['REST APIs', 'OOP', 'Debugging', 'Logging', 'App Security', 'Linux Server Admin', 'SSH', 'Deployment'] },
  { category: 'Infrastructure', items: ['Docker', 'Nginx', 'systemd', 'Ubuntu', 'CI/CD', 'VPS', 'Staging/Prod'] },
  { category: 'Tools', items: ['Git', 'Postman', 'VS Code', 'TablePlus', 'Laragon', 'GitHub Desktop'] },
  { category: 'Agentic AI & DevOps', items: ['OpenCode', 'Hermes Agent (VPS)', 'Model Context Protocol (MCP)', 'Plugins', 'Skill Authoring'] },
  { category: 'Research / ML', items: ['BERTopic', 'indoSBERT Embeddings', 'Topic Modeling', 'Text Preprocessing'] },
]

export const awards = [
  'GEMASTIK 2025 National Round finalist — one of six Informatics UII students advancing to the national round.',
  'GitHub badges: Pull Shark ×2, Pair Extraordinaire, YOLO.',
]

export const education = {
  school: 'Universitas Islam Indonesia — Yogyakarta',
  degree: 'Bachelor of Informatics · Faculty of Industrial Technology',
  date: '2022 - 2026 (Graduated)',
  gpa: '3.84 / 4.00',
}
