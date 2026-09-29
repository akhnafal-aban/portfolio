// All content sourced from /Users/aban/Profile/akhnaf-context.md (verified 2026-09-03).

export const profile = {
  name: "Noor Akhnafal Aban",
  role: "Software Engineer — iOS · Backend Systems",
  location: "Jakarta, Indonesia",
  summary:
    "Software engineer building maintainable digital products across the application lifecycle — SwiftUI native iOS, Laravel backend platforms, databases, APIs, and Linux infrastructure.",
  email: "akhnafal03@gmail.com",
  phone: "+62 857-9781-5215",
  links: {
    github: "https://github.com/akhnafal-aban",
    linkedin: "https://linkedin.com/in/akhnaf-aban",
    youtube: "https://youtube.com/@noorakhnafalaban-9917",
  },
  education: {
    school: "Universitas Islam Indonesia",
    city: "Yogyakarta, Indonesia",
    degree: "Bachelor of Informatics · Faculty of Industrial Technology",
    period: "2022 - 2026 (Graduated)",
    gpa: "3.84 / 4.00",
  },
};

export type Project = {
  title: string;
  tagline: string;
  period: string;
  stack: string[];
  description: string;
  repo?: string;
  kind: "ios" | "backend" | "research" | "academy";
};

export const projects: Project[] = [
  {
    title: "AkhnaFin",
    tagline: "Personal finance capture",
    period: "Jul 2026 - Present",
    stack: ["Swift", "SwiftUI", "SwiftData", "CloudKit", "Foundation Models", "Vision", "Speech", "App Intents"],
    description:
      "Solo iOS finance app. Logging expenses is tedious, so it doesn't get done — solved via near-frictionless multi-modal capture. App Intent/Siri, natural language via Foundation Models, voice via Speech, receipt photo via Vision, batch entry — all converge on one pipeline. AI output always becomes an editable draft before save; never auto-commits without confirmation.",
    repo: "https://github.com/akhnafal-aban/AkhnaFin",
    kind: "ios",
  },
  {
    title: "GayaGerakSeru",
    tagline: "Friction simulation",
    period: "Jul 2026 - Present",
    stack: ["Swift", "RealityKit", "SwiftUI"],
    description:
      "Interactive RealityKit physics simulation for friction education. Object slides down an inclined ramp onto a ground surface; ground roughness (0.0-1.0) is the main user-controlled variable. Restitution disabled to focus purely on friction. Translates effective friction = f(object friction × ground friction) into a manipulable 3D experience.",
    repo: "https://github.com/akhnafal-aban/GayaGerakSeru",
    kind: "academy",
  },
  {
    title: "BiteBeat",
    tagline: "Music to food analyzer",
    period: "May 2026 - Jun 2026",
    stack: ["Swift", "SwiftUI", "Foundation Models"],
    description:
      "Academy Challenge 2 team app (with windyclaun). Analyzes music and recommends food pairings using Apple Intelligence. Flow: authorization → home → recommendation → ending → profile, with meal selection and a default playlist + foods dataset. Integrates AppleIntelligenceHelper and MusicToFoodAnalyzer services.",
    repo: "https://github.com/windyclaun/BiteBeatApp",
    kind: "academy",
  },
  {
    title: "Really Sport Center",
    tagline: "Gym management platform",
    period: "Aug 2025 - Present",
    stack: ["Laravel", "PHP", "MySQL", "Docker", "Nginx", "Linux"],
    description:
      "End-to-end gym management platform: members, memberships, payments, check-in/out, dashboards, reporting, scheduled operations. Deployed across staging and production. Linux servers administered via SSH — remote maintenance, monitoring, troubleshooting.",
    kind: "backend",
  },
  {
    title: "TPA FTI",
    tagline: "Academic potential test platform",
    period: "May 2025 - Present",
    stack: ["Laravel", "PHP", "LLM", "CSV"],
    description:
      "Role-based academic test platform for the Faculty of Industrial Technology, UII. Auth for admin and student roles, personalized LLM-generated result guidance, filtered CSV exports with aggregation for analysis.",
    repo: "https://github.com/akhnafal-aban",
    kind: "backend",
  },
  {
    title: "Danantara-Research",
    tagline: "Topic modeling pipeline",
    period: "2026",
    stack: ["Python", "BERTopic", "indoSBERT", "Jupyter"],
    description:
      "Full research pipeline: cleaning → BERTopic topic modeling with indoSBERT embeddings → report. Companion to the published journal article on topic modeling of tweets about Danantara.",
    repo: "https://github.com/akhnafal-aban/Danantara-Research",
    kind: "research",
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Junior Developer - iOS",
    org: "Apple Developer Academy @ UC Jakarta",
    period: "Feb 2026 - Present · Contract",
    bullets: [
      "Developing iOS applications with Swift and SwiftUI through collaborative, project-based product development.",
      "Applying an established backend foundation while expanding product thinking and native iOS implementation skills.",
    ],
  },
  {
    role: "Software Engineer",
    org: "Really Sport Center",
    period: "Aug 2025 - Present · Freelance",
    bullets: [
      "Building and evolving an end-to-end gym management platform: members, memberships, payments, check-in/out, dashboards, reporting, scheduled operations.",
      "Deploying and maintaining the application across staging and production environments.",
      "Administering Linux servers through SSH — remote maintenance, monitoring, troubleshooting.",
    ],
  },
  {
    role: "Back End Developer",
    org: "Faculty of Industrial Technology, Universitas Islam Indonesia",
    period: "May 2025 - Jan 2026 · Part-time",
    bullets: [
      "Developed a Laravel-based, role-based academic test platform for faculty use.",
      "Implemented authentication, result processing, personalized LLM guidance, and filtered CSV exports for analysis.",
    ],
  },
  {
    role: "Backend Developer Intern",
    org: "Artiknesia",
    period: "Feb 2025 - May 2025 · Remote",
    bullets: [
      "Developed and optimized backend features with Laravel Livewire.",
      "Improved database queries and backend logic; collaborated across functions to support reliable system integration.",
    ],
  },
];

export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  indexed: string;
  topic: string;
};

export const publications: Publication[] = [
  {
    title: "Pemodelan Topik Cuitan tentang Danantara (Topic Modeling of Tweets about Danantara)",
    authors: ["Noor Akhnafal Aban", "Chanifah Indah Ratnasari"],
    venue: "Rabit : Jurnal Teknologi dan Sistem Informasi — LPPM Universitas Riau · Vol 11 No 1, January 2026",
    indexed: "Garuda (Garba Rujukan Digital, Kemdiktisaintek)",
    topic: "Topic modeling of Twitter conversations about Danantara using BERTopic and indoSBERT embeddings.",
  },
];

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skills: SkillGroup[] = [
  { category: "Languages", skills: ["PHP", "SQL", "Java", "JavaScript", "Python", "Go", "Swift"] },
  { category: "Frameworks & Platforms", skills: ["Laravel", "Livewire", "Express", "SwiftUI"] },
  { category: "Databases", skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"] },
  {
    category: "Backend & Systems",
    skills: ["REST APIs", "OOP", "Debugging", "Logging", "App security", "Linux admin", "SSH", "Deployment"],
  },
  {
    category: "Infrastructure",
    skills: ["Docker", "Nginx", "systemd", "Ubuntu", "CI/CD", "VPS", "Staging/Production"],
  },
  { category: "Tools", skills: ["Git", "Postman", "VS Code", "TablePlus", "Laragon", "GitHub Desktop"] },
  { category: "Agentic AI & DevOps", skills: ["OpenCode", "Hermes Agent", "MCP", "Plugins", "Skill authoring"] },
  { category: "Research / ML", skills: ["BERTopic", "indoSBERT", "Topic modeling", "Text preprocessing"] },
];

export const awards = [
  "GEMASTIK 2025 National Round finalist — one of six Informatics UII students advancing nationally.",
  "GitHub badges: Pull Shark ×2, Pair Extraordinaire, YOLO.",
];
