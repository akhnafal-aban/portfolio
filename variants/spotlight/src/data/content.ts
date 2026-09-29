export const profile = {
  name: "Noor Akhnafal Aban",
  headline: "Software Engineer | iOS | Backend Systems",
  basedIn: "Jakarta, Indonesia",
  email: "akhnafal03@gmail.com",
  github: "https://github.com/akhnafal-aban",
  linkedin: "https://linkedin.com/in/akhnaf-aban",
  summary:
    "Software engineer with experience spanning iOS development, backend systems, production deployment, and server operations. Builds maintainable digital products across the application lifecycle, combining SwiftUI development with Laravel-based platforms, databases, APIs, and Linux infrastructure.",
};

export const projects = [
  {
    title: "AkhnaFin — Personal Finance Capture",
    period: "JUL 2026 - Present",
    stack: "Swift · SwiftUI · SwiftData · CloudKit · Foundation Models · Vision · Speech · App Intents",
    repo: "https://github.com/akhnafal-aban/AkhnaFin",
    description:
      "Solo iOS finance app solving one problem: logging expenses is tedious, so it doesn't get done. Near-frictionless capture via multiple input channels — App Intent/Siri, natural language via Foundation Models, voice via Speech, receipt photo via Vision, batch entry — all converging on a single pipeline.",
    detail:
      "Pipeline: input (text/voice/image) → TransactionParsing → TransactionDraft (editable) → user confirm → TransactionRepository.commit() → SwiftData + CloudKit. AI output always becomes an editable draft before save; never auto-commits without confirmation.",
  },
  {
    title: "Really Sport Center Platform",
    period: "AUG 2025 - Present · Ongoing",
    stack: "Laravel · Full operational product",
    live: "https://reallysportcenter.com",
    admin: "https://admin.reallysportcenter.com",
    description:
      "End-to-end gym management platform covering members, memberships, payments, check-in/check-out, dashboards, reporting, and scheduled operations. Deployed and maintained across staging and production environments.",
    detail:
      "Administers Linux servers through SSH, performs remote maintenance and monitoring, and troubleshoots application and infrastructure issues.",
  },
  {
    title: "GayaGerakSeru — Friction Simulation",
    period: "JUL 2026 - Present",
    stack: "Swift · RealityKit · SwiftUI · Challenge 2",
    repo: "https://github.com/akhnafal-aban/GayaGerakSeru",
    description:
      "Interactive RealityKit physics simulation for friction education. Object slides down an inclined ramp onto a ground surface; ground roughness (0.0–1.0) is the main user-controlled variable determining how speed changes after leaving the ramp.",
    detail:
      "Restitution disabled (0.0) to focus purely on friction. Ramp friction fixed at 0.5; object friction varies per material type. Translates effective friction (object friction × ground friction) into a manipulable 3D experience.",
  },
  {
    title: "BiteBeat — Music to Food Analyzer",
    period: "MAY 2026 - JUN 2026",
    stack: "Swift · SwiftUI · Foundation Models · Challenge 2 · Team with windyclaun",
    repo: "https://github.com/windyclaun/BiteBeatApp",
    description:
      "Academy challenge 2 team app. Analyzes music and recommends food pairings using Apple Intelligence (Foundation Models). Flow: authorization → home → recommendation → ending → profile, with meal selection and a default playlist + foods dataset.",
    detail:
      "Integrates AppleIntelligenceHelper and MusicToFoodAnalyzer services to map musical qualities to meal suggestions.",
  },
  {
    title: "Danantara-Research — Topic Modeling Pipeline",
    period: "2026",
    stack: "Python · Jupyter · BERTopic · indoSBERT",
    repo: "https://github.com/akhnafal-aban/Danantara-Research",
    description:
      "Full research pipeline: cleaning → BERTopic topic modeling with indoSBERT embeddings → report. Companion to the published journal article on topic modeling of tweets about Danantara.",
    detail:
      "Published in Rabit: Jurnal Teknologi dan Sistem Informasi, LPPM Universitas Riau, Vol 11 No 1, January 2026. Indexed in Garuda (Kemdiktisaintek).",
  },
  {
    title: "TPA FTI — Academic Potential Test Platform",
    period: "MAY 2025 - Present",
    stack: "Laravel · Role-based web platform · LLM integration",
    live: "https://tbe-fit.uii.ac.id/",
    description:
      "Built authentication for admin and student roles, personalized result guidance via LLM, and filtered CSV exports with aggregation. Developed for faculty use at Universitas Islam Indonesia.",
    detail:
      "Part-time backend developer role at Faculty of Industrial Technology, UII. Implemented authentication, result processing, personalized LLM guidance, and filtered CSV exports for analysis.",
  },
];

export const experience = [
  {
    role: "Junior Developer - iOS",
    org: "Apple Developer Academy @ UC Jakarta",
    period: "FEB 2026 - Present · Contract",
    bullets: [
      "Develop iOS applications with Swift and SwiftUI through collaborative, project-based product development.",
      "Apply an established backend foundation while expanding product thinking and native iOS implementation skills.",
    ],
  },
  {
    role: "Software Engineer",
    org: "Really Sport Center",
    period: "AUG 2025 - Present · Freelance",
    bullets: [
      "Build and evolve an end-to-end gym management platform covering members, memberships, payments, check-in/check-out, dashboards, reporting, and scheduled operations.",
      "Deploy and maintain the application across staging and production environments.",
      "Administer Linux servers through SSH, perform remote maintenance and monitoring, and troubleshoot application and infrastructure issues.",
    ],
  },
  {
    role: "Back End Developer",
    org: "Faculty of Industrial Technology, Universitas Islam Indonesia",
    period: "MAY 2025 - JAN 2026 · Part-time",
    bullets: [
      "Developed a Laravel-based, role-based academic test platform for faculty use.",
      "Implemented authentication, result processing, personalized LLM guidance, and filtered CSV exports for analysis.",
    ],
  },
  {
    role: "Backend Developer Intern",
    org: "Artiknesia",
    period: "FEB 2025 - MAY 2025 · Remote",
    bullets: [
      "Developed and optimized backend features with Laravel Livewire to strengthen application functionality.",
      "Improved database queries and backend logic, then collaborated across functions to support reliable system integration.",
    ],
  },
];

export const publication = {
  title:
    "Pemodelan Topik Cuitan tentang Danantara (Topic Modeling of Tweets about Danantara)",
  authors: "Noor Akhnafal Aban, Chanifah Indah Ratnasari (Universitas Islam Indonesia)",
  journal:
    "Rabit: Jurnal Teknologi dan Sistem Informasi — LPPM Universitas Riau, Vol 11 No 1, January 2026",
  indexed: "Garuda (Garba Rujukan Digital, Kemdiktisaintek)",
  topic:
    "Topic modeling of Twitter conversations about Danantara using BERTopic and indoSBERT embeddings.",
  pipeline: "https://github.com/akhnafal-aban/Danantara-Research",
};

export const skills = [
  { category: "Languages", items: "PHP, SQL, Java, JavaScript, Python, Go, Swift" },
  {
    category: "Frameworks & Platforms",
    items: "Laravel, Livewire, Express, SwiftUI",
  },
  { category: "Databases", items: "MySQL, PostgreSQL, MongoDB, Redis" },
  {
    category: "Backend & Systems",
    items: "REST APIs, OOP, debugging, logging, application security, Linux server administration, SSH, deployment",
  },
  {
    category: "Infrastructure",
    items: "Docker, Nginx, systemd, Ubuntu, CI/CD, VPS deployment, staging/production environments",
  },
  {
    category: "Tools",
    items: "Git, Postman, VS Code, TablePlus, Laragon, GitHub Desktop",
  },
  {
    category: "Agentic AI & DevOps",
    items: "OpenCode, Hermes Agent (VPS), Model Context Protocol (MCP), plugins, skill authoring",
  },
  {
    category: "Research / ML",
    items: "BERTopic, indoSBERT embeddings, topic modeling, text preprocessing",
  },
];

export const education = {
  school: "Universitas Islam Indonesia",
  location: "Yogyakarta, Indonesia",
  program: "Bachelor of Informatics · Faculty of Industrial Technology",
  period: "2022 - Present",
  gpa: "3.87 / 4.00",
};

export const awards = [
  "GEMASTIK 2025 National Round finalist — one of six Informatics UII students advancing to the national round.",
  "GitHub badges: Pull Shark ×2 (merged PRs), Pair Extraordinaire (co-authored PRs), YOLO (pushed to master).",
];
