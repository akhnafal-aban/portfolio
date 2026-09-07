export interface WorkItem {
  role: string
  org: string
  dates: string
  type: string
  bullets: string[]
}

export const WORK: WorkItem[] = [
  {
    role: 'Junior Developer - iOS',
    org: 'Apple Developer Academy @ UC Jakarta',
    dates: 'FEB 2026 - PRESENT',
    type: 'Contract',
    bullets: [
      'Develop iOS applications with Swift and SwiftUI through collaborative, project-based product development.',
      'Apply an established backend foundation while expanding product thinking and native iOS implementation skills.',
    ],
  },
  {
    role: 'Software Engineer',
    org: 'Really Sport Center',
    dates: 'AUG 2025 - PRESENT',
    type: 'Freelance',
    bullets: [
      'Build and evolve an end-to-end gym management platform: members, memberships, payments, check-in/out, dashboards, reporting, scheduled operations.',
      'Deploy and maintain the application across staging and production environments.',
      'Administer Linux servers via SSH; remote maintenance, monitoring, troubleshooting of app and infrastructure.',
    ],
  },
  {
    role: 'Back End Developer',
    org: 'Faculty of Industrial Technology, Universitas Islam Indonesia',
    dates: 'MAY 2025 - JAN 2026',
    type: 'Part-time',
    bullets: [
      'Developed a Laravel-based, role-based academic test platform for faculty use.',
      'Implemented authentication, result processing, personalized LLM guidance, and filtered CSV exports for analysis.',
    ],
  },
  {
    role: 'Backend Developer Intern',
    org: 'Artiknesia',
    dates: 'FEB 2025 - MAY 2025',
    type: 'Remote',
    bullets: [
      'Developed and optimized backend features with Laravel Livewire.',
      'Improved database queries and backend logic; collaborated across functions for reliable system integration.',
    ],
  },
  {
    role: 'Design Coordinator',
    org: 'Marketing & Communications, FTI UII',
    dates: 'JAN 2025 - FEB 2026',
    type: 'Additional',
    bullets: [
      'Led a 13-person design team, delegated work, aligned promotional output with cross-division campaign goals.',
    ],
  },
  {
    role: 'Volunteer Backend Developer',
    org: 'Ulil Albab Student Center Electric Vehicle',
    dates: 'AUG 2024 - OCT 2024',
    type: 'Remote',
    bullets: [
      'Built and deployed a Laravel attendance system: authentication, attendance tracking, meeting APIs, optimized database structures.',
    ],
  },
]
