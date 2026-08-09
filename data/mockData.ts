// Mocked data for ABTalks Redesign — no auth, no database needed

export interface Student {
  id: string
  name: string
  avatar: string
  track: string
  currentStreak: number
  longestStreak: number
  totalDays: number
  completedDays: number
  startDate: string
  todaySubmitted: boolean
  streakFreezeAvailable: boolean
  achievements: Achievement[]
  weeklyActivity: DayActivity[]
  submissions: Submission[]
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlockedAt: string | null
}

export interface DayActivity {
  date: string
  dayNumber: number
  completed: boolean
  submitted: boolean
}

export interface Submission {
  day: number
  date: string
  githubUrl: string
  linkedinUrl: string
  status: 'approved' | 'pending' | 'rejected'
}

export interface ChallengeDay {
  dayNumber: number
  title: string
  description: string
  requirements: string[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  type: 'build' | 'learn' | 'ship' | 'setup'
  tools: string[]
}

export const student: Student = {
  id: 'student-001',
  name: 'Arjun Mehta',
  avatar: '',
  track: 'Full-Stack Development',
  currentStreak: 11,
  longestStreak: 18,
  totalDays: 60,
  completedDays: 12,
  startDate: '2026-06-01',
  todaySubmitted: false,
  streakFreezeAvailable: true,
  achievements: [
    { id: 'ach-1', title: 'First Commit', description: 'Submitted your first day', icon: '🚀', unlockedAt: '2026-06-01' },
    { id: 'ach-2', title: 'Week Warrior', description: '7-day streak', icon: '⚡', unlockedAt: '2026-06-07' },
    { id: 'ach-3', title: 'Double Digits', description: '10-day streak', icon: '🔥', unlockedAt: '2026-06-10' },
    { id: 'ach-4', title: 'Halfway Hero', description: '30 days completed', icon: '🏆', unlockedAt: null },
    { id: 'ach-5', title: 'Social Butterfly', description: '10 LinkedIn posts', icon: '🦋', unlockedAt: '2026-06-15' },
    { id: 'ach-6', title: 'Code Machine', description: '45 days completed', icon: '🤖', unlockedAt: null },
  ],
  weeklyActivity: [
    { date: '2026-08-03', dayNumber: 8, completed: true, submitted: true },
    { date: '2026-08-04', dayNumber: 9, completed: true, submitted: true },
    { date: '2026-08-05', dayNumber: 10, completed: true, submitted: true },
    { date: '2026-08-06', dayNumber: 11, completed: true, submitted: true },
    { date: '2026-08-07', dayNumber: 12, completed: true, submitted: true },
    { date: '2026-08-08', dayNumber: 13, completed: true, submitted: true },
    { date: '2026-08-09', dayNumber: 14, completed: false, submitted: false },
  ],
  submissions: [
    { day: 12, date: '2026-08-08', githubUrl: 'https://github.com/arjun/day-12', linkedinUrl: 'https://linkedin.com/posts/arjun_day12', status: 'approved' },
    { day: 11, date: '2026-08-07', githubUrl: 'https://github.com/arjun/day-11', linkedinUrl: 'https://linkedin.com/posts/arjun_day11', status: 'approved' },
    { day: 10, date: '2026-08-06', githubUrl: 'https://github.com/arjun/day-10', linkedinUrl: 'https://linkedin.com/posts/arjun_day10', status: 'pending' },
  ],
}

export const challengeDay12: ChallengeDay = {
  dayNumber: 12,
  title: 'Build a REST API with Authentication',
  description: 'Today you will build a fully functional REST API with JWT-based authentication. Your API should support user registration, login, and protected routes. This is a critical backend skill that every full-stack developer must master.',
  requirements: [
    'Set up a Node.js/Express or Python/FastAPI server',
    'Implement user registration with password hashing (bcrypt)',
    'Implement JWT-based login that returns a token',
    'Create at least 2 protected routes that require authentication',
    'Add proper input validation and error handling',
    'Write a README with API documentation',
    'Push code to a public GitHub repository',
    'Share your progress on LinkedIn',
  ],
  difficulty: 'intermediate',
  type: 'build',
  tools: ['Node.js', 'Express', 'JWT', 'bcrypt', 'Postman'],
}

export const challengeDay14: ChallengeDay = {
  dayNumber: 14,
  title: 'Deploy Your First Full-Stack App',
  description: 'Take one of your previous projects and deploy it to the internet. Learn about environment variables, build processes, and hosting platforms.',
  requirements: [
    'Select a previous project to deploy',
    'Set up environment variables properly',
    'Deploy frontend to Vercel or Netlify',
    'Deploy backend to Render or Railway',
    'Configure CORS and production settings',
    'Share the live URL on LinkedIn',
  ],
  difficulty: 'intermediate',
  type: 'ship',
  tools: ['Vercel', 'Render', 'Environment Variables'],
}

export const allChallengeDays: ChallengeDay[] = [
  { dayNumber: 1, title: 'Set Up Your Development Environment', description: 'Install VS Code, Node.js, Git, and your preferred framework. Get comfortable with the terminal.', requirements: ['Install VS Code', 'Install Node.js', 'Set up Git', 'Create GitHub account'], difficulty: 'beginner', type: 'setup', tools: ['VS Code', 'Node.js', 'Git'] },
  { dayNumber: 2, title: 'Build Your First HTML Page', description: 'Create a simple HTML page with proper semantic structure. Focus on accessibility.', requirements: ['Use semantic HTML', 'Add meta tags', 'Include a navigation bar'], difficulty: 'beginner', type: 'build', tools: ['HTML'] },
  { dayNumber: 3, title: 'Style with CSS Fundamentals', description: 'Learn CSS box model, flexbox, and grid. Style your HTML page from Day 2.', requirements: ['Use flexbox layout', 'Add responsive design', 'Implement a color scheme'], difficulty: 'beginner', type: 'build', tools: ['CSS', 'Flexbox'] },
  { dayNumber: 4, title: 'JavaScript Basics', description: 'Variables, functions, loops, and DOM manipulation. Make your page interactive.', requirements: ['Handle click events', 'Manipulate DOM elements', 'Use array methods'], difficulty: 'beginner', type: 'build', tools: ['JavaScript'] },
  { dayNumber: 5, title: 'Build a Todo App', description: 'Apply everything you learned by building a fully functional Todo application.', requirements: ['Add/delete todos', 'Mark as complete', 'Persist in localStorage'], difficulty: 'beginner', type: 'build', tools: ['HTML', 'CSS', 'JavaScript'] },
  { dayNumber: 6, title: 'Git & GitHub Workflow', description: 'Learn branching, pull requests, and collaborative Git workflows.', requirements: ['Create a branch', 'Make a pull request', 'Resolve a merge conflict'], difficulty: 'beginner', type: 'learn', tools: ['Git', 'GitHub'] },
  { dayNumber: 7, title: 'React Fundamentals', description: 'Components, props, state, and hooks. Build your first React app.', requirements: ['Create functional components', 'Use useState and useEffect', 'Handle forms'], difficulty: 'intermediate', type: 'build', tools: ['React', 'Vite'] },
  { dayNumber: 8, title: 'React Router & Navigation', description: 'Add routing to your React app. Learn about SPA navigation.', requirements: ['Set up React Router', 'Create nested routes', 'Add 404 page'], difficulty: 'intermediate', type: 'build', tools: ['React Router'] },
  { dayNumber: 9, title: 'API Integration & Fetch', description: 'Connect your React app to a real API. Handle loading and error states.', requirements: ['Fetch data from API', 'Show loading spinner', 'Handle errors gracefully'], difficulty: 'intermediate', type: 'build', tools: ['Fetch API', 'React'] },
  { dayNumber: 10, title: 'State Management with Context', description: 'Learn React Context API for global state management.', requirements: ['Create a context provider', 'Consume context in components', 'Avoid prop drilling'], difficulty: 'intermediate', type: 'build', tools: ['React Context'] },
  { dayNumber: 11, title: 'CSS-in-JS & Tailwind', description: 'Style your React app with Tailwind CSS utility classes.', requirements: ['Set up Tailwind', 'Create responsive layouts', 'Add dark mode'], difficulty: 'intermediate', type: 'build', tools: ['Tailwind CSS'] },
  challengeDay12,
  { dayNumber: 13, title: 'Database Integration', description: 'Connect your API to a database. Learn CRUD operations.', requirements: ['Set up MongoDB or PostgreSQL', 'Create models/schemas', 'Implement CRUD endpoints'], difficulty: 'intermediate', type: 'build', tools: ['MongoDB', 'Mongoose'] },
  challengeDay14,
]

export const testimonials = [
  { name: 'Priya Sharma', role: 'Placed at Google', text: 'ABTalks changed my life. The 60-day streak gave me the discipline I needed to crack interviews.', avatar: 'PS' },
  { name: 'Rahul Verma', role: 'Placed at Microsoft', text: 'The daily proof of work kept me accountable. I built 60 projects in 60 days!', avatar: 'RV' },
  { name: 'Sneha Patel', role: 'Placed at Amazon', text: 'Recruiters noticed my consistent GitHub activity. That\'s how I got my first interview.', avatar: 'SP' },
  { name: 'Amit Kumar', role: 'Placed at Stripe', text: 'The LinkedIn posts built my personal brand. I went from 0 to 5000 followers during the challenge.', avatar: 'AK' },
]

export const stats = {
  totalStudents: 12500,
  totalSubmissions: 340000,
  placementRate: 78,
  averageStreak: 23,
}
