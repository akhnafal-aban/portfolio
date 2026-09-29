export const profile = {
  name: 'Noor Akhnafal Aban',
  firstName: 'Noor',
  role: 'Software Engineer',
  disciplines: 'iOS · Backend Systems',
  location: 'Jakarta, Indonesia',
  email: 'akhnafal03@gmail.com',
  phone: '+62 857-9781-5215',
  github: 'github.com/akhnafal-aban',
  githubUrl: 'https://github.com/akhnafal-aban',
  linkedin: 'linkedin.com/in/akhnaf-aban',
  linkedinUrl: 'https://linkedin.com/in/akhnaf-aban',
  summary:
    'Software engineer with experience spanning iOS development, backend systems, production deployment, and server operations. Builds maintainable digital products across the application lifecycle, combining SwiftUI development with Laravel-based platforms, databases, APIs, and Linux infrastructure.',
}

export const journey = [
  {
    role: 'Junior Developer — iOS',
    org: 'Apple Developer Academy @ UC Jakarta',
    period: 'Feb 2026 — Present',
    note: 'Contract. Swift, SwiftUI, project-based product development.',
  },
  {
    role: 'Software Engineer',
    org: 'Really Sport Center',
    period: 'Aug 2025 — Present',
    note: 'Freelance. End-to-end gym management platform. Staging and production. Linux server administration.',
  },
  {
    role: 'Back End Developer',
    org: 'Faculty of Industrial Technology, Universitas Islam Indonesia',
    period: 'May 2025 — Jan 2026',
    note: 'Part-time. Laravel role-based academic test platform with LLM guidance and CSV exports.',
  },
  {
    role: 'Backend Developer Intern',
    org: 'Artiknesia',
    period: 'Feb 2025 — May 2025',
    note: 'Remote. Laravel Livewire, query optimization, backend logic.',
  },
]

export const projects = [
  {
    index: '01',
    name: 'AkhnaFin',
    type: 'iOS Application',
    stack: 'Swift · SwiftUI · SwiftData · CloudKit · Foundation Models · Vision · Speech · App Intents',
    year: '2026',
    url: 'https://github.com/akhnafal-aban/AkhnaFin',
    description:
      'Personal finance capture. Solves one problem: logging expenses is tedious, so it does not get done. Near-frictionless input via App Intent, natural language, voice, receipt photo, and batch entry — all converging on a single pipeline.',
  },
  {
    index: '02',
    name: 'Really Sport Center Platform',
    type: 'Web Platform',
    stack: 'Laravel · MySQL · Docker · Nginx · Linux VPS',
    year: '2025',
    url: null,
    description:
      'End-to-end gym management. Members, memberships, payments, check-in and check-out, dashboards, reporting, and scheduled operations. Deployed across staging and production.',
  },
  {
    index: '03',
    name: 'TPA FTI — Academic Potential Test',
    type: 'Web Platform',
    stack: 'Laravel · Role-based · LLM integration · CSV export',
    year: '2025',
    url: null,
    description:
      'Role-based academic test platform for faculty use. Authentication, result processing, personalized LLM guidance, and filtered CSV exports with aggregation for analysis.',
  },
  {
    index: '04',
    name: 'GayaGerakSeru — Friction Simulation',
    type: 'Educational RealityKit',
    stack: 'Swift · RealityKit · SwiftUI',
    year: '2026',
    url: 'https://github.com/akhnafal-aban/GayaGerakSeru',
    description:
      'Interactive physics simulation for friction education. Object slides down a ramp onto a variable-roughness ground. Translates effective friction into a manipulable 3D experience.',
  },
  {
    index: '05',
    name: 'BiteBeat — Music to Food Analyzer',
    type: 'iOS Application',
    stack: 'Swift · SwiftUI · Foundation Models',
    year: '2026',
    url: 'https://github.com/windyclaun/BiteBeatApp',
    description:
      'Academy team app. Analyzes music and recommends food pairings using Apple Intelligence. Maps musical qualities to meal suggestions through a structured recommendation flow.',
  },
  {
    index: '06',
    name: 'Danantara — Topic Modeling Pipeline',
    type: 'Research Pipeline',
    stack: 'Python · BERTopic · indoSBERT · Jupyter',
    year: '2026',
    url: 'https://github.com/akhnafal-aban/Danantara-Research',
    description:
      'Full research pipeline: cleaning through BERTopic topic modeling with indoSBERT embeddings to report. Companion to the published journal article.',
  },
]

export const publications = [
  {
    title: 'Pemodelan Topik Cuitan tentang Danantara',
    subtitle: 'Topic Modeling of Tweets about Danantara',
    authors: 'Noor Akhnafal Aban, Chanifah Indah Ratnasari',
    venue: 'Rabit : Jurnal Teknologi dan Sistem Informasi — LPPM Universitas Riau',
    volume: 'Vol 11 No 1',
    date: 'January 2026',
    indexed: 'Garuda (Garba Rujukan Digital, Kemdiktisaintek)',
    pipeline: 'github.com/akhnafal-aban/Danantara-Research',
  },
]

export const education = {
  institution: 'Universitas Islam Indonesia',
  city: 'Yogyakarta, Indonesia',
  degree: 'Bachelor of Informatics',
  faculty: 'Faculty of Industrial Technology',
  period: '2022 — 2026 (Graduated)',
  gpa: '3.84 / 4.00',
}

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Languages',
    items: ['PHP', 'SQL', 'Java', 'JavaScript', 'Python', 'Go', 'Swift'],
  },
  {
    group: 'Frameworks',
    items: ['Laravel', 'Livewire', 'Express', 'SwiftUI'],
  },
  {
    group: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    group: 'Backend',
    items: [
      'REST APIs',
      'OOP',
      'Authentication',
      'Role-based authorization',
      'Query optimization',
    ],
  },
  {
    group: 'Infrastructure',
    items: [
      'Docker',
      'Nginx',
      'systemd',
      'Ubuntu',
      'CI/CD',
      'VPS deployment',
      'SSH',
      'staging / production',
    ],
  },
  {
    group: 'iOS & On-device AI',
    items: [
      'SwiftUI',
      'SwiftData',
      'CloudKit',
      'Foundation Models',
      'Vision',
      'Speech',
      'App Intents',
    ],
  },
  {
    group: 'Research / ML',
    items: ['BERTopic', 'indoSBERT', 'Topic modeling', 'Text preprocessing'],
  },
  {
    group: 'Tools',
    items: ['Git', 'Postman', 'TablePlus', 'Laragon', 'GitHub Desktop'],
  },
]

export const recognition = [
  {
    title: 'GEMASTIK 2025 National Round Finalist',
    detail: 'One of six Informatics UII students advancing to the national round.',
  },
  {
    title: 'GitHub Pull Shark ×2',
    detail: 'Merged pull requests across repositories.',
  },
  {
    title: 'GitHub Pair Extraordinaire',
    detail: 'Co-authored pull requests.',
  },
]
