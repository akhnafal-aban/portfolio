import { ln, seg, link } from './types'
import type { Line } from './types'

const vbar = '│'
const dash = '─'

// about
export const about: Line[] = [
  ln('Noor Akhnafal Aban', 'b'),
  ln('Software Engineer  ·  iOS  ·  Backend Systems', 'a'),
  ln('Jakarta, Indonesia', 'm'),
  [{ t: 'Universitas Islam Indonesia — Bachelor of Informatics · 2022 - 2026 (Graduated) · GPA 3.84/4.00', c: 'd' }],
  [{ t: 'Backend-leaning generalist. Laravel, Python, Swift. Production deployment + Linux server ops. Builds maintainable products across the application lifecycle — SwiftUI apps, REST APIs, databases, infrastructure.', c: 'd' }],
  [{ t: 'Current:  iOS Developer @ Apple Developer Academy @ UC Jakarta (contract, Feb 2026 -)', c: 'cy' }],
  [{ t: '          Software Engineer @ Really Sport Center (freelance, Aug 2025 -)', c: 'cy' }],
  [{ t: 'Type `projects`, `skills`, `publications`, `contact` to inspect.', c: 'm' }],
]

// help
export const help: Line[] = [
  ln('available commands', 'b'),
  [seg('  about         ', 'a'), seg('whoami, bio, current roles', 'm')],
  [seg('  projects      ', 'a'), seg('6 selected repos + product work', 'm')],
  [seg('  skills         ', 'a'), seg('languages, frameworks, infra, tools', 'm')],
  [seg('  publications   ', 'a'), seg('peer-reviewed journal article', 'm')],
  [seg('  contact        ', 'a'), seg('email, phone, location', 'm')],
  [seg('  social         ', 'a'), seg('github, linkedin, youtube', 'm')],
  [seg('  ls             ', 'a'), seg('list files in ~', 'm')],
  [seg('  whoami         ', 'a'), seg('one-line identity', 'm')],
  [seg('  pwd            ', 'a'), seg('print working directory', 'm')],
  [seg('  date           ', 'a'), seg('system date', 'm')],
  [seg('  clear          ', 'a'), seg('clear screen', 'm')],
  [seg('  help           ', 'a'), seg('this listing', 'm')],
  [seg('tip: click a command above or type it. <Up>/<Down> = history. Tab = autocomplete.', 'm')],
]

// whoami
export const whoami: Line[] = [
  ln('noor-akhnafal-aban  uid=1000  groups=engineers,ios,backend,infra', 'd'),
]

// pwd
export const pwd: Line[] = [ln('/home/akhnaf', 'd')]

// ls
export const ls: Line[] = [
  ln('about.md       projects.md     skills.md        publications.md', 'a'),
  ln('contact.txt    social.txt      resume.pdf       README.md', 'a'),
  [{ t: '0 directories hidden', c: 'm' }],
]

// projects
export const projects: Line[] = [
  ln('== projects ==', 'b'),
  [{ t: '', c: 'd' }],
  [seg('AkhnaFin  ', 'a'), seg('Personal Finance Capture            ', 'd'), seg('Swift · SwiftUI · SwiftData · CloudKit · Foundation Models · Vision · Speech', 'm')],
  [seg('          ', 'd'), link('github.com/akhnafal-aban/AkhnaFin', 'https://github.com/akhnafal-aban/AkhnaFin')],
  [seg('          ', 'd'), { t: 'Solo iOS app. Near-frictionless expense logging via App Intent/Siri, natural language (Foundation Models), voice (Speech), receipt OCR (Vision), batch entry — all converging on one pipeline. AI output becomes an editable draft before commit; never auto-saves. SwiftData + CloudKit persistence.', c: 'd' }],
  [{ t: '', c: 'd' }],
  [seg('Really Sport Center  ', 'a'), seg('Gym Management Platform     ', 'd'), seg('Laravel · MySQL · Linux · Docker', 'm')],
  [seg('          ', 'd'), { t: 'End-to-end gym platform: members, memberships, payments, check-in/out, dashboards, reporting, scheduled ops. Deployed to staging + production. SSH server admin, remote maintenance, monitoring, incident triage. (Active freelance.)', c: 'd' }],
  [{ t: '', c: 'd' }],
  [seg('TPA FTI  ', 'a'), seg('Academic Potential Test Platform          ', 'd'), seg('Laravel · LLM integration', 'm')],
  [seg('          ', 'd'), { t: 'Role-based academic test platform for Faculty of Industrial Technology, UII. Auth (admin/student), result processing, personalized LLM guidance, filtered CSV exports with aggregation. (Part-time backend role, May 2025 - Jan 2026.)', c: 'd' }],
  [{ t: '', c: 'd' }],
  [seg('GayaGerakSeru  ', 'a'), seg('Friction Simulation                ', 'd'), seg('Swift · RealityKit · SwiftUI', 'm')],
  [seg('          ', 'd'), link('github.com/akhnafal-aban/GayaGerakSeru', 'https://github.com/akhnafal-aban/GayaGerakSeru')],
  [seg('          ', 'd'), { t: 'Interactive RealityKit physics sim for friction education. Object slides a ramp onto a ground surface; ground roughness (0.0-1.0) is the main variable. Restitution = 0.0 (no bounce). Ramp friction fixed 0.5; object friction varies per material. Academy Challenge 2.', c: 'd' }],
  [{ t: '', c: 'd' }],
  [seg('BiteBeat  ', 'a'), seg('Music -> Food Analyzer              ', 'd'), seg('Swift · Foundation Models', 'm')],
  [seg('          ', 'd'), link('github.com/windyclaun/BiteBeatApp', 'https://github.com/windyclaun/BiteBeatApp')],
  [seg('          ', 'd'), { t: 'Academy Challenge 2 team app (w/ windyclaun). Analyzes music and recommends food pairings via Apple Intelligence. Flow: authorization -> home -> recommendation -> ending -> profile. AppleIntelligenceHelper + MusicToFoodAnalyzer services.', c: 'd' }],
  [{ t: '', c: 'd' }],
  [seg('Danantara-Research  ', 'a'), seg('Topic Modeling Pipeline       ', 'd'), seg('Python · BERTopic · indoSBERT', 'm')],
  [seg('          ', 'd'), link('github.com/akhnafal-aban/Danantara-Research', 'https://github.com/akhnafal-aban/Danantara-Research')],
  [seg('          ', 'd'), { t: 'Full research pipeline: cleaning -> BERTopic topic modeling with indoSBERT embeddings -> report. Companion to the published journal article (see `publications`).', c: 'd' }],
  [{ t: '', c: 'd' }],
  [seg('Additional:  ', 'm'), { t: 'Asset Tracker (iOS, SwiftUI, networking) · Jambidan Village Mgmt (Laravel) · Blog System (Java/JavaFX) · laravel-project-task-reminder (Dockerized) · legacy repos @ github.com/AKHNAFAL', c: 'm' }],
]

// skills
export const skills: Line[] = [
  ln('== skills ==', 'b'),
  [{ t: '', c: 'd' }],
  [seg('languages      ', 'a'), { t: 'PHP · SQL · Java · JavaScript · Python · Go · Swift', c: 'd' }],
  [seg('frameworks     ', 'a'), { t: 'Laravel · Livewire · Express · SwiftUI', c: 'd' }],
  [seg('databases      ', 'a'), { t: 'MySQL · PostgreSQL · MongoDB · Redis', c: 'd' }],
  [seg('backend        ', 'a'), { t: 'REST APIs · auth · role-based authz · query optimization · system integration · testing', c: 'd' }],
  [seg('infrastructure  ', 'a'), { t: 'Docker · Nginx · systemd · Ubuntu · CI/CD · VPS · staging/production · monitoring', c: 'd' }],
  [seg('ios            ', 'a'), { t: 'SwiftUI · SwiftData · CloudKit · Foundation Models · Vision · Speech · App Intents', c: 'd' }],
  [seg('research/ml    ', 'a'), { t: 'BERTopic · indoSBERT embeddings · topic modeling · text preprocessing', c: 'd' }],
  [seg('agentic/devops ', 'a'), { t: 'OpenCode · MCP · plugins · skill authoring · Hermes agent (VPS)', c: 'd' }],
  [seg('tools          ', 'a'), { t: 'Git · Postman · VS Code · TablePlus · Laragon', c: 'd' }],
  [{ t: '', c: 'd' }],
  [seg('notable:  ', 'm'), { t: 'GEMASTIK 2025 national-round finalist · GitHub Pull Shark x2, Pair Extraordinaire', c: 'm' }],
]

// publications
export const publications: Line[] = [
  ln('== publications ==', 'b'),
  [{ t: '', c: 'd' }],
  [seg('Pemodelan Topik Cuitan tentang Danantara', 'a')],
  [{ t: '  Topic Modeling of Tweets about Danantara using BERTopic + indoSBERT', c: 'm' }],
  [{ t: '', c: 'd' }],
  [seg('  authors      ', 'd'), { t: 'Noor Akhnafal Aban, Chanifah Indah Ratnasari', c: 'd' }],
  [seg('  affiliation  ', 'd'), { t: 'Universitas Islam Indonesia', c: 'd' }],
  [seg('  journal      ', 'd'), { t: 'Rabit : Jurnal Teknologi dan Sistem Informasi — LPPM Universitas Riau', c: 'd' }],
  [seg('  volume       ', 'd'), { t: 'Vol 11 No 1, January 2026', c: 'd' }],
  [seg('  indexed      ', 'd'), { t: 'Garuda (Garba Rujukan Digital, Kemdiktisaintek)', c: 'd' }],
  [{ t: '', c: 'd' }],
  [seg('  pipeline     ', 'd'), link('github.com/akhnafal-aban/Danantara-Research', 'https://github.com/akhnafal-aban/Danantara-Research')],
]

// contact
export const contact: Line[] = [
  ln('== contact ==', 'b'),
  [{ t: '', c: 'd' }],
  [seg('  email     ', 'a'), link('akhnafal03@gmail.com', 'mailto:akhnafal03@gmail.com')],
  [seg('  phone     ', 'a'), { t: '+62 857-9781-5215', c: 'd' }],
  [seg('  location  ', 'a'), { t: 'Jakarta, Indonesia', c: 'd' }],
  [seg('  home      ', 'm'), { t: 'Bojonegoro, East Java (not a career base)', c: 'm' }],
]

// social
export const social: Line[] = [
  ln('== social ==', 'b'),
  [{ t: '', c: 'd' }],
  [seg('  github      ', 'a'), link('github.com/akhnafal-aban', 'https://github.com/akhnafal-aban'), { t: '   (primary: iOS + current work)', c: 'm' }],
  [seg('  github      ', 'a'), link('github.com/AKHNAFAL', 'https://github.com/AKHNAFAL'), { t: '             (legacy: 2024-2025 backend/student)', c: 'm' }],
  [seg('  linkedin   ', 'a'), link('linkedin.com/in/akhnaf-aban', 'https://linkedin.com/in/akhnaf-aban')],
  [seg('  youtube    ', 'a'), link('youtube.com/@noorakhnafalaban-9917', 'https://youtube.com/@noorakhnafalaban-9917'), { t: '   (8 videos: SPK, TechnoMage, NLP)', c: 'm' }],
]

export const unknownCmd = (cmd: string): Line[] => [
  [{ t: `${vbar}${dash}  command not found: ${cmd}`, c: 'r' }],
  [{ t: '  try `help`.', c: 'm' }],
]
