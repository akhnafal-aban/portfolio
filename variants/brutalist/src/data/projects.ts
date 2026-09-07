export interface Project {
  name: string
  stack: string
  period: string
  note: string
  url?: string
}

export const PROJECTS: Project[] = [
  {
    name: 'AkhnaFin',
    stack: 'Swift · SwiftUI · SwiftData · CloudKit · Foundation Models · Vision · Speech · App Intents',
    period: 'JUL 2026 - PRESENT',
    note: 'Solo iOS finance app. Near-frictionless expense capture via App Intent/Siri, NL via Foundation Models, voice via Speech, receipt photo via Vision, batch entry. AI output always becomes an editable draft before save. SwiftData + CloudKit persistence.',
    url: 'https://github.com/akhnafal-aban/AkhnaFin',
  },
  {
    name: 'GayaGerakSeru',
    stack: 'Swift · RealityKit · SwiftUI',
    period: 'JUL 2026 - PRESENT',
    note: 'Interactive RealityKit physics simulation for friction education. Object slides down inclined ramp; ground roughness (0.0-1.0) is the main user-controlled variable. Restitution disabled to focus on friction. Academy Challenge 2.',
    url: 'https://github.com/akhnafal-aban/GayaGerakSeru',
  },
  {
    name: 'BiteBeat',
    stack: 'Swift · SwiftUI · Foundation Models',
    period: 'MAY 2026 - JUN 2026',
    note: 'Academy Challenge 2 team app. Analyzes music and recommends food pairings using Apple Intelligence (Foundation Models). Flow: authorization -> home -> recommendation -> ending -> profile. Team project with windyclaun.',
    url: 'https://github.com/windyclaun/BiteBeatApp',
  },
  {
    name: 'Asset Tracker',
    stack: 'Swift · SwiftUI',
    period: 'JUN 2026 - PRESENT',
    note: 'iOS asset tracking app. Dashboard, asset and category models, user management, settings. Network layer with API integration.',
    url: 'https://github.com/akhnafal-aban/Asset-Tracker',
  },
  {
    name: 'Task Reminder',
    stack: 'Laravel · Docker',
    period: '2026',
    note: 'Laravel project management app. Role-based dashboards, smart task reminders, email notifications. Dockerized deployment.',
    url: 'https://github.com/akhnafal-aban/laravel-project-task-reminder',
  },
  {
    name: 'Danantara-Research',
    stack: 'Python · Jupyter · BERTopic · indoSBERT',
    period: '2026',
    note: 'Full research pipeline: cleaning -> BERTopic topic modeling with indoSBERT embeddings -> report. Companion to the published journal article.',
    url: 'https://github.com/akhnafal-aban/Danantara-Research',
  },
  {
    name: 'TPA FTI',
    stack: 'Laravel · LLM integration',
    period: 'MAY 2025 - PRESENT',
    note: 'Role-based academic potential test platform. Authentication for admin and student roles, personalized result guidance, filtered CSV exports with aggregation.',
  },
  {
    name: 'Jambidan Village Management',
    stack: 'Laravel · Full-stack',
    period: 'MAR 2024 - MAY 2024',
    note: 'Village administration workflows, decision-support dashboard, LLM-assisted functionality.',
  },
  {
    name: 'Blog System',
    stack: 'Java · JavaFX · MVC · XStream',
    period: 'JUL 2023',
    note: 'Desktop blog manager. XML storage, multi-scene navigation, role-based views.',
  },
  {
    name: 'Really Sport Center Platform',
    stack: 'Laravel · Full operational product',
    period: 'ONGOING',
    note: 'Payments, membership workflows, reporting, scheduled processes, deployment, infrastructure management.',
  },
]
