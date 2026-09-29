export type Project = {
  name: string
  blurb: string
  stack: string[]
  href: string
  tag: string
  period: string
}

export type Stat = {
  label: string
  value: string
  sub: string
}

export type LinkRow = {
  label: string
  value: string
  href: string
}

export const profile = {
  name: 'Noor Akhnafal Aban',
  role: 'Software Engineer — iOS · Backend Systems',
  location: 'Jakarta, Indonesia',
  email: 'akhnafal03@gmail.com',
  bio: 'Builds maintainable products across the application lifecycle — SwiftUI development, Laravel platforms, databases, APIs, and Linux infrastructure. Currently expanding native iOS at the Apple Developer Academy while keeping a backend and production foundation.',
}

export const stats: Stat[] = [
  { label: 'GPA', value: '3.84', sub: 'UII Informatics · /4.00' },
  { label: 'GEMASTIK', value: '2025', sub: 'National round finalist' },
  { label: 'PUBLISHED', value: '2026', sub: 'Rabit Journal · Vol 11 No 1' },
]

export const projects: Project[] = [
  {
    name: 'AkhnaFin',
    blurb:
      'Solo iOS finance app. Frictionless expense capture via App Intent/Siri, Foundation Models NLP, Speech, Vision OCR, and batch entry — all converging on one editable-draft pipeline before commit.',
    stack: ['Swift', 'SwiftUI', 'SwiftData', 'CloudKit', 'Foundation Models', 'Vision', 'Speech'],
    href: 'https://github.com/akhnafal-aban/AkhnaFin',
    tag: 'iOS · Personal',
    period: '2026 — present',
  },
  {
    name: 'Asset Tracker',
    blurb:
      'iOS asset tracking app. Dashboard, asset and category models, user management, settings. Network layer with API integration.',
    stack: ['Swift', 'SwiftUI'],
    href: 'https://github.com/akhnafal-aban/Asset-Tracker',
    tag: 'iOS · Personal',
    period: '2026 — present',
  },
  {
    name: 'GayaGerakSeru',
    blurb:
      'Interactive RealityKit physics simulation for friction education. Object slides a ramp onto a surface; ground roughness is the user-controlled variable driving post-ramp speed.',
    stack: ['Swift', 'RealityKit', 'SwiftUI'],
    href: 'https://github.com/akhnafal-aban/GayaGerakSeru',
    tag: 'Academy · Challenge 2',
    period: '2026 — present',
  },
  {
    name: 'BiteBeat',
    blurb:
      'Music-to-food analyzer. Maps musical qualities to meal suggestions using Apple Intelligence Foundation Models. Team project — authorization, home, recommendation, ending, profile flow.',
    stack: ['Swift', 'SwiftUI', 'Foundation Models'],
    href: 'https://github.com/windyclaun/BiteBeatApp',
    tag: 'Academy · Team',
    period: '2026',
  },
  {
    name: 'TPA FTI',
    blurb:
      'Role-based academic potential test platform. Auth for admin/student roles, personalized LLM result guidance, and filtered CSV exports with aggregation.',
    stack: ['Laravel', 'PHP', 'LLM'],
    href: 'https://github.com/akhnafal-aban',
    tag: 'Backend · Faculty',
    period: '2025 — present',
  },
  {
    name: 'Really Sport Center',
    blurb:
      'End-to-end gym management. Members, memberships, payments, check-in/out, dashboards, reporting, scheduled ops. Deployed across staging and production with Linux server admin.',
    stack: ['Laravel', 'MySQL', 'Docker', 'Nginx'],
    href: 'https://github.com/akhnafal-aban',
    tag: 'Backend · Freelance',
    period: '2025 — present',
  },
]

export const skillGroups: { label: string; items: string[] }[] = [
  { label: 'LANGUAGES', items: ['Swift', 'PHP', 'SQL', 'Java', 'Python', 'Go', 'JavaScript'] },
  { label: 'FRAMEWORKS', items: ['SwiftUI', 'Laravel', 'Livewire', 'Express'] },
  { label: 'DATABASES', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
  { label: 'INFRASTRUCTURE', items: ['Docker', 'Nginx', 'systemd', 'Ubuntu', 'CI/CD', 'VPS'] },
  { label: 'APPLE PLATFORM', items: ['Foundation Models', 'Vision', 'Speech', 'CloudKit', 'SwiftData', 'RealityKit'] },
  { label: 'RESEARCH / ML', items: ['BERTopic', 'indoSBERT', 'topic modeling'] },
]

export const links: LinkRow[] = [
  { label: 'GITHUB', value: 'akhnafal-aban', href: 'https://github.com/akhnafal-aban' },
  { label: 'LINKEDIN', value: 'akhnaf-aban', href: 'https://linkedin.com/in/akhnaf-aban' },
  { label: 'YOUTUBE', value: '@noorakhnafalaban', href: 'https://youtube.com/@noorakhnafalaban-9917' },
  { label: 'EMAIL', value: 'akhnafal03@gmail.com', href: 'mailto:akhnafal03@gmail.com' },
]
