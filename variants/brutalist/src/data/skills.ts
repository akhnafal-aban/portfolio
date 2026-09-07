export interface SkillGroup {
  cat: string
  items: string
}

export const SKILLS: SkillGroup[] = [
  { cat: 'LANGUAGES', items: 'PHP, SQL, Java, JavaScript, Python, Go, Swift' },
  {
    cat: 'FRAMEWORKS & PLATFORMS',
    items: 'Laravel, Livewire, Express, SwiftUI',
  },
  { cat: 'DATABASES', items: 'MySQL, PostgreSQL, MongoDB, Redis' },
  {
    cat: 'BACKEND & SYSTEMS',
    items: 'REST APIs, OOP, debugging, logging, application security, Linux server admin, SSH, deployment',
  },
  {
    cat: 'INFRASTRUCTURE',
    items: 'Docker, Nginx, systemd, Ubuntu, CI/CD, VPS deployment, staging/production',
  },
  {
    cat: 'TOOLS',
    items: 'Git, Postman, VS Code, TablePlus, Laragon, GitHub Desktop',
  },
  {
    cat: 'AGENTIC AI & DEVOPS',
    items: 'OpenCode, Hermes Agent (VPS), Model Context Protocol (MCP), plugins, skill authoring',
  },
  {
    cat: 'RESEARCH / ML',
    items: 'BERTopic, indoSBERT embeddings, topic modeling, text preprocessing',
  },
]
