// Replace each YOUR_* value with its own real URL or a file under public/.
export const placeholders = {
  resume: 'YOUR_RESUME_URL',
  email: 'YOUR_EMAIL',
  linkedin: 'YOUR_LINKEDIN_URL',
}

export const profile = {
  name: 'Lavanya',
  role: 'Aspiring Java Full Stack Developer',
  intro:
    'I am a passionate learner focused on building strong skills in Java, SQL, frontend technologies, backend development, and full-stack web development. I enjoy learning new technologies and creating practical web applications.',
  email: 'lavanya.saladi24@sasi.ac.in',
  github: 'https://github.com/lavanyasaladhi',
  linkedin: 'www.linkedin.com/in/lavanya-saladhi-2275103a0',
  resume: placeholders.resume,
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', icon: '5', description: 'Semantic structure for the web.' },
      { name: 'CSS', icon: '✳', description: 'Responsive layouts and visual styling.' },
      { name: 'JavaScript', icon: 'JS', description: 'Interactive browser experiences.' },
      { name: 'React.js', icon: '⚛', description: 'Component-based user interfaces.' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Java', icon: '☕', description: 'Object-oriented programming foundations.' },
      { name: 'JDBC', icon: 'DB', description: 'Connecting Java applications to databases.' },
      { name: 'Servlets', icon: 'API', description: 'Learning Java web request handling.' },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'SQL', icon: 'SQL', description: 'Writing queries to work with data.' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', icon: '⌘', description: 'Tracking changes as I build.' },
      { name: 'GitHub', icon: 'GH', description: 'Sharing and organizing code.' },
      { name: 'VS Code', icon: '▣', description: 'My everyday development editor.' },
    ],
  },
]

export const projects = [
  {
    id: 'maze-escape',
    title: 'Maze Escape',
    description:
      'A browser-based maze game where players navigate through challenging maze levels, collect items, avoid obstacles, and reach the exit.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Multiple levels, timer, score, and lives',
      'Keyboard and mobile controls',
      'Collectible coins and obstacles',
      'Exit and door mechanics with sound effects',
    ],
    github: 'https://github.com/lavanyasaladhi/1game',
    demo: '1game-ten.vercel.app',
    image: '',
  },
  {
    id: 'candles-ghost',
    title: 'Candles Ghost',
    description:
      'An atmospheric browser project exploring candlelight, animation, and a ghostly visual experience.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Candle-inspired visuals', 'Animated ghost character', 'Interactive web experience'],
    github: 'https://github.com/lavanyasaladhi/candles-ghost',
    demo: 'candles-ghost.vercel.app',
    image: '',
  },
]

export const certificates = [
  {
    id: 'nptel-data-analytics',
    title: 'Data Analytics with Python',
    issuer: 'NPTEL',
    date: '',
    certificateUrl: '/certificates/nptel-data-analytics.pdf',
  },
  {
    id: 'infosys-java',
    title: 'Java Programming Certificate',
    issuer: 'Infosys',
    date: '',
    certificateUrl: '/certificates/infosys-java-programming.pdf',
  },
]

export const education = {
  degree: 'B.Tech – Information Technology',
  institution: 'Sasi Institute of Technology and Engineering',
  status: 'Year details to be added',
  description: 'Building a strong academic and practical foundation in information technology, programming, and software development.',
  startYear: '2024',
  endYear: '2028',
}
