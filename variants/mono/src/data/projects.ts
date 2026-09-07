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
