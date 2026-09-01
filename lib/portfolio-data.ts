export const IDENTITY = {
  name: 'KHOA_HO',
  role: 'Software Engineer // Game Developer',
  tagline: 'System-level performance, game-level engagement.',
  location: 'GRID SECTOR 7 // REMOTE',
}

export const ABOUT = {
  lines: [
    'System-level performance, game-level engagement.',
    'Currently optimizing for new technical collaborations.',
  ],
  stats: [
    { label: 'YEARS_ACTIVE', value: '03' },
    { label: 'PROJECTS MADE', value: '12+' },
    { label: 'GAME PLAYED', value: '50+' },
    { label: 'UPTIME', value: '99.9%' },
  ],
}

export type Skill = {
  name: string
  level: number
  category: string
}

export const SKILLS: Skill[] = [
  { name: 'REACT', level: 50, category: 'FRONTEND' },
  { name: 'TYPESCRIPT', level: 80, category: 'BACKEND' },
  { name: 'NODE.JS', level: 70, category: 'BACKEND' },
  { name: 'UNITY', level: 80, category: 'GAME DEV' },
  { name: 'C#', level: 75, category: 'GAME DEV' },
]

export type Project = {
  id: string
  title: string
  genre: string
  year: string
  description: string
  stack: string[]
  highScore: string
  image?: string
  links?: {
    label: string
    url: string
  }[]
}

export const PROJECTS: Project[] = [
  {
    id: 'PRJ-01',
    title: 'TASK MANAGEMENT APP',
    genre: 'PRODUCTIVITY TOOL',
    year: '2024',
    description:
      'A task management application with a focus on performance and responsiveness, built using modern web technologies.',
    stack: ['PRISMA', 'TYPESCRIPT', 'EXPRESS', 'REACT', 'POSTGRES'],
    highScore: '280,300',
    image: '',
    links: [
      { label: 'GITHUB', url: 'https://github.com/KayHo412/task-management-app' },
    ],
  },
  {
    id: 'PRJ-02',
    title: 'FRAMERY FLOW',
    genre: 'SMART OFFICE POD SYSTEM',
    year: '2025',
    description:
      'Next.js application for monitoring and reserving office pods. Supabase for data (pods + bookings), auth, and realtime updates.',
    stack: ['TYPESCRIPT', 'REACT', 'VITE', 'POSTGRES'],
    highScore: '804,100',
    image: '',
    links: [
      { label: 'GITHUB', url: 'https://github.com/KayHo412/framery-flow' },
    ],
  },
  {
    id: 'PRJ-03',
    title: 'RPS LEAGUE DASHBOARD',
    genre: 'Reaktor Summer Developer Assignment',
    year: '2026',
    description:
      'It consumes the legacy API and presents live + historical match data in a dashboard focused on clarity and resilience.',
    stack: ['NEXT.JS', 'POSTGRES'],
    highScore: '760,900',
    links: [
      { label: 'GITHUB', url: 'https://github.com/KayHo412/reaktor' },
    ],
  },
  {
    id: 'PRJ-04',
    title: 'BCAANS',
    genre: 'WEB SCRAPER',
    year: '2025',
    description:
      'Real-time badminton court availability tracker with automated email notifications for SportUni Hervanta facility.',
    stack: ['REACT', 'TYPESCRIPT', 'SELENIUM', 'SUPABASE', 'VITE'],
    highScore: '1,240,500',
    image: '',
    links: [
      { label: 'GITHUB', url: 'https://github.com/KayHo412/BCAANSS'},
    ],
  },
  {
    id: 'PRJ-05',
    title: 'Game Service Backend',
    genre: 'Backend',
    year: '2026',
    description:
      'A game service backend that handles user authentication, game state management, and real-time multiplayer interactions for a 1v1 game.',
    stack: ['REACT', 'TYPESCRIPT', 'DRIZZLE', 'POSTGRES', 'GITHUB ACTIONS'],
    highScore: '1,240,500',
    image: '',
    links : [ { label: 'GITHUB', url: 'https://github.com/KayHo412/game-services'}]
  },

  {
    id: 'GAME-PRJ-01',
    title: 'KOTO-KITCHEN',
    genre: 'Interactive Cooking Game',
    year: '2026',
    description:
      'Interactive, culinary-themed game designed specifically for touch-based tablet devices. Players complete simulated kitchen workflows that emphasize precision, timing, and clear touch feedback.',
    stack: ['C#', 'UNITY', 'DOTNET'],
    highScore: '760,900',
    image: '',
    links : [ { label: 'ITCH.IO', url: 'https://kaho412.itch.io/koto-kitchen'}]
  },

  {
    id: 'GAME-PRJ-02',
    title: 'ROLL-A-PAWS',
    genre: '3D CAT RUNNER GAME',
    year: '2026',
    description:
      'A 3D side-scrolling runner game featuring a lovable cat character. Players navigate through various maps and avoid enemies while collecting items.',
    stack: ['C#', 'UNITY', 'DOTNET'],
    highScore: '2,060,900',
    image: '',
    links : [ { label: 'ITCH.IO', url: 'https://kaho412.itch.io/not-yet-named'}]
  },
]

export const CONTACT = {
  email: 'khoaphan412@gmail.com',
  channels: [
    { label: 'GITHUB', handle: '@KayHo412', url: 'https://github.com/KayHo412' },
    { label: 'LINKEDIN', handle: '/in/khoa-phan-ho', url: 'https://www.linkedin.com/in/khoa-phan-ho/' },
    { label: 'ITCH.IO', handle: 'kaho412.itch.io', url: 'https://kaho412.itch.io/' },
  ],
}

export const BOOT_LOGS = [
  '> BIOS check ................ OK',
  '> Mounting /dev/portfolio ... OK',
  '> Initializing game engine .. OK',
  '> Loading assets [########] . 100%',
  '> Compiling shaders ......... OK',
  '> A random logs line I guess.. OK',
  '> Spawning player_one ....... OK',
  '> Having a good dinner ....... OK',
  '> Launching graphical shell ..',
]

type FileContent = {
  [key: string]: string;
};

export const fileData: FileContent = {
  'about.md': ABOUT.lines.join('\n'),
  'skills.json': JSON.stringify(SKILLS, null, 2),
  'project.exe': PROJECTS.map(p => `${p.id}: ${p.title} (${p.genre})`).join('\n'),
  'contact.txt': `EMAIL: ${CONTACT.email}\nGITHUB: ${CONTACT.channels[0].handle}`
};
