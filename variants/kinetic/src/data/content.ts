export const ABOUT =
  'Software engineer working across iOS, backend systems, and infrastructure. Builds maintainable products end to end — SwiftUI apps, Laravel platforms, databases, APIs, and the Linux servers they run on. Currently at the Apple Developer Academy @ UC Jakarta, expanding native iOS while continuing backend and production work. Published author in topic modeling research. GEMASTIK 2025 national finalist.'
export const EMAIL = 'akhnafal03@gmail.com'
export const GITHUB = 'https://github.com/akhnafal-aban'
export const LINKEDIN = 'https://www.linkedin.com/in/akhnaf-aban'
export const LOCATION = 'Jakarta, Indonesia'
export const NAME = 'Noor Akhnafal Aban'
export const TAGLINE = 'Builds. Ships. Publishes.'
export const ROLE = 'Software Engineer — iOS — Backend Systems'

export interface Project {
  name: string
  line: string
  stack: string
  url?: string
}

export const PROJECTS: Project[] = [
  {
    name: 'AkhnaFin',
    line: 'Solo iOS finance app. Near-frictionless expense capture via Siri, natural language, voice, and receipt OCR.',
    stack: 'Swift · SwiftUI · SwiftData · CloudKit · Foundation Models · Vision · Speech · App Intents',
    url: 'https://github.com/akhnafal-aban/AkhnaFin',
  },
  {
    name: 'GayaGerakSeru',
    line: 'Interactive RealityKit physics simulation for friction education. Academy Challenge 2.',
    stack: 'Swift · RealityKit · SwiftUI',
    url: 'https://github.com/akhnafal-aban/GayaGerakSeru',
  },
  {
    name: 'BiteBeat',
    line: 'Analyzes music and recommends food pairings using Apple Intelligence. Team project.',
    stack: 'Swift · SwiftUI · Foundation Models',
    url: 'https://github.com/windyclaun/BiteBeatApp',
  },
  {
    name: 'Really Sport Center',
    line: 'End-to-end gym management platform: members, payments, check-in, reporting, scheduled ops. In production.',
    stack: 'Laravel · MySQL · Docker · Nginx · Linux',
  },
  {
    name: 'TPA FTI',
    line: 'Role-based academic potential test platform with LLM-guided results and filtered CSV exports.',
    stack: 'Laravel · LLM integration',
  },
  {
    name: 'Danantara-Research',
    line: 'Topic modeling pipeline companion to the published journal article.',
    stack: 'Python · BERTopic · indoSBERT',
    url: 'https://github.com/akhnafal-aban/Danantara-Research',
  },
]

export const PUBLICATION =
  'Pemodelan Topik Cuitan tentang Danantara. Rabit: Jurnal Teknologi dan Sistem Informasi, LPPM Universitas Riau, Vol 11 No 1, January 2026. With Chanifah Indah Ratnasari. Indexed in Garuda.'

export const SKILLS =
  'Swift · SwiftUI · SwiftData · CloudKit · Foundation Models · PHP · Laravel · Livewire · SQL · MySQL · PostgreSQL · MongoDB · Redis · Java · JavaScript · Python · Go · REST APIs · Docker · Nginx · systemd · Linux · SSH · deployment · Git · BERTopic · indoSBERT'
