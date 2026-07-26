// Central data file — modified to display Certificates instead of Projects.

export const PROFILE = {
  name: "Aakash Pathrikar",
  role: "Full-stack Developer",
  tagline: "Hello! I'm Aakash Pathrikar, I'm a full-stack builder.",
  experience: "Always building, always learning.",
  description:
    "I'm a 3rd-year B.Tech Computer Science student at the Indian Institute of Information Technology Dharwad, passionate about building intuitive and scalable web applications. My current focus is on React, Tailwind CSS, Node.js, and strengthening my problem-solving abilities through Data Structures & Algorithms in Java. I enjoy participating in hackathons, learning modern technologies, and building products that create meaningful impact.",
  github: "https://github.com/Gysum",
  linkedin: "https://linkedin.com/in/aakash-pathrikar-483aa4324",
  email: "aakashpathrikar@gmail.com",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Certificates", href: "#certificates" },
  { label: "Projects", href: "#projects" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contacts" },
];

export const PROJECTS = [
  {
    title: "VibeCode Editor",
    description:
      "A full-stack browser-based code editor inspired by modern cloud IDEs. Features secure OAuth authentication, Monaco Editor integration, browser-based code execution with WebContainers, an integrated terminal, live preview, and project management for a seamless in-browser development experience.",
    repo: "https://github.com/Gysum/Vibe-code-editor.git",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Monaco Editor",
      "WebContainers",
      "Prisma ORM",
      "MongoDB",
      "Auth.js",
      "Xterm.js",
    ],
    role: "Full Stack Developer",
    image: "/vibecode_editor_preview.png",
  },
  {
    title: "RiverFlow",
    description:
      "A responsive smart water management platform designed to simplify water resource monitoring and management through a modern, intuitive user interface. Focused on delivering an accessible user experience with responsive design and efficient frontend architecture.",
    repo: "https://github.com/Gysum/RiverFlow.git",
    tech: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
    role: "Frontend Developer",
    image: "/riverflow_preview.png",
  },
  {
    title: "Project Camp Backend",
    description:
      "Project Camp Backend is a RESTful API service designed to support collaborative project management. The system enables teams to organize projects, manage tasks with subtasks, maintain project notes, and handle user authentication with role-based access control.",
    repo: "https://github.com/Gysum/Project-Camp.git",
    tech: ["Node.js", "Express.js", "MongoDB", "REST API", "JWT", "RBAC"],
    role: "Backend Engineer",
    image: "/project_camp_preview.png",
  },
];

export const CERTIFICATES = [
  {
    title: "HackMaze 2.0 - Track: PwrGov-X",
    detail:
      "Secured top performance in Track: PwrGov-X (Telemetry-Driven Power Governor IP) at HackMaze 2.0, a 36-hour hackathon. Organized by GND_0 VLSI Club, IIIT Dharwad in collaboration with accelAIrate, and recognized for outstanding technical excellence, innovation, and AI/ML-driven hardware design.",
    image: "/hackmaze_2_0.jpg",
    tech: "IIIT Dharwad / GND_0 / accelAIrate / VLSI / AI",
    link: "/hackmaze_2_0.jpg",
  },
  {
    title: "HAL Aerothon '26",
    detail:
      "Awarded Third Prize in HAL Aerothon 2026, a National-Level Aerospace Innovation Hackathon jointly organized by Hindustan Aeronautics Limited (HAL) and IIIT Dharwad. Conferred in recognition of outstanding innovation, technical excellence, and problem-solving.",
    image: "/hal_aerothon_26.jpg",
    tech: "HAL / IIIT Dharwad / React / GSAP",
    link: "/hal_aerothon_26.jpg",
  },
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    detail:
      "Completed practical tasks in exploratory data analysis and risk profiling, predicting delinquency with AI, business reporting and data storytelling for collections strategy, and implementing an AI-driven collections strategy.",
    image: "/tata_forage_data_analytics.png",
    tech: "Forage / TATA / Data Analytics / GenAI / Python",
    link: "/tata_forage_data_analytics.png",
  },
];

export const SKILLS_CATEGORIES = {
  Frontend: {
    title: "Front-end",
    skills:
      "Java / React.js / Vue.js / Next.js / Redux Toolkit / Framer Motion / GSAP / Jest / React Native / Playwright",
  },
  Styles: {
    title: "Styles",
    skills:
      "CSS3 / SCSS / SASS / PostCSS / Tailwind CSS / Bootstrap / Material UI",
  },
  Backend: {
    title: "Back-end",
    skills:
      "Node.js / Express.js / Golang / Gin / Python / MySQL / MongoDB / gRPC / Redis / REST APIs / Microservices",
  },
  DevOps: {
    title: "DevOps & Tools",
    skills:
      "Git / GitHub / Docker / Nginx / Shell Scripting / VS Code / Postman / Vercel",
  },
};

export const WORK_EXPERIENCE = [
  {
    year: "2026 - Now",
    duration: "Ongoing",
    company: "Project Camp",
    role: "Backend Architect & Developer",
    description:
      "Designed and built a collaborative project management service with subtasks, notes, and user authentication with role-based access control. Implemented event-driven patterns and robust MongoDB schemas.",
    location: "Remote",
    date: "July 2026",
    link: "https://github.com/Gysum/Project-Camp",
  },
  {
    year: "2026 - Now",
    duration: "1 year 2 months",
    company: "HAL Aerothon (3rd Prize)",
    role: "Core Frontend Engineer",
    description:
      "Awarded Third Prize in HAL Aerothon 2026. Conferred in recognition of outstanding innovation, technical excellence, and problem-solving. Created dynamic frontend animations using GSAP and React.",
    location: "IIT Dharwad",
    date: "Feb 2026",
    link: "/hal_aerothon_26.jpg",
  },
  {
    year: "2025 - 2026",
    duration: "8 months",
    company: "Academic Projects",
    role: "Fullstack Developer",
    description:
      "Built various fullstack apps using Node.js, Express, and React. Focused on creating responsive user interfaces and modular REST APIs.",
    location: "IIIT Dharwad",
    date: "August - December 2025",
  },
  {
    year: "2024 - 2025",
    duration: "1 year",
    company: "Open Source Dev",
    role: "UI Specialist",
    description:
      "Contributed to open source design libraries. Specialized in TypeScript, Tailwind CSS, and interactive component architectures.",
    location: "Remote",
    date: "2024 - 2025",
  },
];

export const STATS = [
  { value: 300, suffix: "+", label: "Problems solved" },
  { value: 450, suffix: "+", label: "Code commits" },
  { value: 5, suffix: "+", label: "Hackathons" },
  { value: 14, suffix: "", label: "Technologies" },
];

export const EDUCATION = [
  {
    duration: "2023 - 2027",
    degree: "B.Tech in Computer Science & Eng.",
    institution: "IIT (Academic Portfolio)",
  },
  {
    duration: "2021 - 2023",
    degree: "Higher Secondary Education",
    institution: "State Board Academy",
  },
  {
    duration: "2025",
    degree: "Full-stack Web Dev Certificate",
    institution: "Meta / Coursera Professional",
  },
];

export const ABOUT_ME_INFO = {
  title: "About me",
  description:
    "I am a passionate software developer who loves building user-centric interfaces and modular, highly scalable backends. I have experience working with cross-functional teams in hackathons and academic environments.",
  details: [
    { label: "Name", value: "Aakash Pathrikar" },
    { label: "Experience", value: "2 Years" },
    { label: "Nationality", value: "Indian" },
    { label: "Freelance", value: "Available" },
    { label: "Email", value: "aakashpathrikar@gmail.com" },
    { label: "Languages", value: "English, Hindi, Marathi" },
  ],
};
