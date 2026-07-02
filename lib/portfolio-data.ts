export const IDENTITY = {
  name: 'ALEX_RIVERA',
  role: 'SENIOR UX/UI ENGINEER',
  tagline: 'Designing rigid, technical interfaces since 199X.',
  location: 'GRID SECTOR 7 // REMOTE',
}

export const ABOUT = {
  lines: [
    'I build high-contrast, pixel-perfect interfaces where every',
    'element earns its place. No soft gradients. No blob shapes.',
    'No bento filler. Just rigid systems and honest pixels.',
    '',
    'Currently accepting new player-two collaborations.',
  ],
  stats: [
    { label: 'YEARS_ACTIVE', value: '08' },
    { label: 'SHIPS_DEPLOYED', value: '42' },
    { label: 'COFFEE_UNITS', value: '999+' },
    { label: 'UPTIME', value: '99.9%' },
  ],
}

export type Skill = {
  name: string
  level: number
  category: string
}

export const SKILLS: Skill[] = [
  { name: 'REACT', level: 95, category: 'FRONTEND' },
  { name: 'TYPESCRIPT', level: 92, category: 'FRONTEND' },
  { name: 'TAILWIND', level: 90, category: 'FRONTEND' },
  { name: 'FIGMA', level: 88, category: 'DESIGN' },
  { name: 'MOTION', level: 85, category: 'DESIGN' },
  { name: 'NODE.JS', level: 80, category: 'BACKEND' },
  { name: 'WEBGL', level: 72, category: 'GRAPHICS' },
  { name: 'A11Y', level: 87, category: 'SYSTEMS' },
  { name: 'PIXEL_ART', level: 78, category: 'DESIGN' },
]

export type Project = {
  id: string
  title: string
  genre: string
  year: string
  description: string
  stack: string[]
  highScore: string
}

export const PROJECTS: Project[] = [
  {
    id: 'PRJ-01',
    title: 'NEON_LEDGER',
    genre: 'FINTECH DASHBOARD',
    year: '2025',
    description:
      'A real-time trading terminal with keyboard-first navigation and zero-latency charts.',
    stack: ['REACT', 'WEBSOCKET', 'D3'],
    highScore: '1,240,500',
  },
  {
    id: 'PRJ-02',
    title: 'PIXEL_FORGE',
    genre: 'CREATIVE TOOL',
    year: '2024',
    description:
      'Browser-based sprite editor with frame timelines and palette locking for game artists.',
    stack: ['CANVAS', 'TS', 'ZUSTAND'],
    highScore: '980,300',
  },
  {
    id: 'PRJ-03',
    title: 'GRID_RUNNER',
    genre: 'ARCADE GAME',
    year: '2024',
    description:
      'An endless vector-maze runner built as a technical demo for input-latency research.',
    stack: ['WEBGL', 'RUST/WASM'],
    highScore: '2,004,100',
  },
  {
    id: 'PRJ-04',
    title: 'TERMINAL_CMS',
    genre: 'DEV PLATFORM',
    year: '2023',
    description:
      'A content system driven entirely by a command palette. Ship docs without a mouse.',
    stack: ['NEXT.JS', 'POSTGRES'],
    highScore: '760,900',
  },
]

export const CONTACT = {
  email: 'player2@arcade-os.dev',
  channels: [
    { label: 'GITHUB', handle: '@alexrivera', url: '#' },
    { label: 'LINKEDIN', handle: '/in/alexrivera', url: '#' },
    { label: 'X.COM', handle: '@alex_builds', url: '#' },
  ],
}

export const BOOT_LOGS = [
  '> BIOS check ................ OK',
  '> Mounting /dev/portfolio ... OK',
  '> Initializing game engine .. OK',
  '> Loading assets [########] . 100%',
  '> Compiling shaders ......... OK',
  '> Calibrating CRT scanlines . OK',
  '> Spawning player_one ....... OK',
  '> Launching graphical shell ..',
]
