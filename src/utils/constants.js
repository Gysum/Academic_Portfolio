// Central data file — modified to display Certificates instead of Projects.

export const PROFILE = {
  name: 'Aakash',
  role: 'Full-stack Developer',
  tagline: 'Hello! I\'m Aakash, I\'m a full-stack builder.',
  experience: 'Always building, always learning.',
  description: "I'm a 3rd-year B.Tech Computer Science student at the Indian Institute of Information Technology Dharwad, passionate about building intuitive and scalable web applications. My current focus is on React, Tailwind CSS, Node.js, and strengthening my problem-solving abilities through Data Structures & Algorithms in Java. I enjoy participating in hackathons, learning modern technologies, and building products that create meaningful impact.",
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-username',
  telegram: 'https://t.me/your-username',
  facebook: 'https://facebook.com/your-username',
  instagram: 'https://instagram.com/your-username',
  email: 'your.email@example.com',
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contacts' },
]

export const CERTIFICATES = [
  {
    title: 'AWS Certified Cloud Practitioner',
    detail: 'Authorized by Amazon Web Services. Validates core understanding of AWS Cloud platform, infrastructure, billing, and security paradigms.',
    image: '/project_placeholder.png',
    tech: 'AWS / Cloud Computing / IAM / VPC / EC2',
    link: '#',
  },
  {
    title: 'Meta Front-End Developer Professional Certificate',
    detail: 'Issued by Meta. Confirms mastery of building responsive web applications using React, JavaScript state management, and UX design guidelines.',
    image: '/project_placeholder.png',
    tech: 'React / JavaScript / UI/UX / Version Control',
    link: '#',
  },
  {
    title: 'Google Advanced Data Analytics',
    detail: 'Issued by Google. Verifies proficiency in predictive modeling, statistical testing, and automated Python scripts for dataset analysis.',
    image: '/project_placeholder.png',
    tech: 'Python / Data Science / SQL / Predictive Analysis',
    link: '#',
  }
]

export const SKILLS_CATEGORIES = {
  Frontend: {
    title: 'Front-end',
    skills: 'TypeScript / React.js / Vue.js / Next.js / Redux Toolkit / Framer Motion / GSAP / Jest / React Native / Playwright',
  },
  Styles: {
    title: 'Styles',
    skills: 'CSS3 / SCSS / SASS / PostCSS / Tailwind CSS / Bootstrap / Material UI',
  },
  Backend: {
    title: 'Back-end',
    skills: 'Node.js / Express.js / Golang / Gin / PostgreSQL / MySQL / MongoDB / gRPC / Redis / REST APIs / Microservices',
  },
  DevOps: {
    title: 'DevOps & Tools',
    skills: 'Git / GitHub / Docker / Nginx / Shell Scripting / VS Code / Postman / Vercel',
  }
}

export const WORK_EXPERIENCE = [
  {
    year: '2026 - Now',
    duration: '1 year 2 months',
    company: 'HAL Aerothon (3rd Prize)',
    role: 'Core Frontend Engineer | React & GSAP',
  },
  {
    year: '2025 - 2026',
    duration: '8 months',
    company: 'Academic Projects',
    role: 'Fullstack Developer | Node.js & React',
  },
  {
    year: '2024 - 2025',
    duration: '1 year',
    company: 'Open Source Dev',
    role: 'UI Specialist | TypeScript & Tailwind CSS',
  },
  {
    year: '2023 - 2024',
    duration: '9 months',
    company: 'Self-taught Builds',
    role: 'Web Interface Intern | HTML, CSS & JS',
  }
]

export const STATS = [
  { value: 300, suffix: '+', label: 'Problems solved' },
  { value: 450, suffix: '+', label: 'Code commits' },
  { value: 5, suffix: '+', label: 'Hackathons' },
  { value: 14, suffix: '', label: 'Technologies' }
]

export const EDUCATION = [
  {
    duration: '2023 - 2027',
    degree: 'B.Tech in Computer Science & Eng.',
    institution: 'IIT (Academic Portfolio)',
  },
  {
    duration: '2021 - 2023',
    degree: 'Higher Secondary Education',
    institution: 'State Board Academy',
  },
  {
    duration: '2025',
    degree: 'Full-stack Web Dev Certificate',
    institution: 'Meta / Coursera Professional',
  }
]

export const ABOUT_ME_INFO = {
  title: 'About me',
  description: 'I am a passionate software developer who loves building user-centric interfaces and modular, highly scalable backends. I have experience working with cross-functional teams in hackathons and academic environments.',
  details: [
    { label: 'Name', value: 'Aakash' },
    { label: 'Experience', value: '3+ Years' },
    { label: 'Nationality', value: 'Indian' },
    { label: 'Freelance', value: 'Available' },
    { label: 'Phone', value: '(+91) 98765 43210' },
    { label: 'Email', value: 'aakash.developer@gmail.com' },
    { label: 'Languages', value: 'English, Hindi' }
  ]
}


