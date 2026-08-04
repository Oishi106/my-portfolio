import {
  Code2,
  Server,
  Database,
  Cloud,
  Terminal,
  Boxes,
  Wrench,
  Users,
  ShieldCheck,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Facebook,
} from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const profile = {
  name: "Mahamuda Afroz",
  title: "Full-Stack Developer",
  tagline:
    "I build modern, responsive, and high-performance web applications with clean code, strong UI principles, and real-world problem solving in mind.",
  bio: "Full-stack developer focused on shipping polished digital products end to end. I care about thoughtful UI, scalable architecture, and the details that make a web app feel fast, reliable, and easy to use.",
  email: "mahmudaoishi457@gmail.com",
  phone: "01759542477",
  location: "Dhaka, Bangladesh",
  resumeUrl: "#",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/Oishi106", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mahmuda-afroz-/", icon: Linkedin },
  { label: "Facebook", href: "https://www.facebook.com/mahmudaafroz.oishi", icon: Facebook },
  { label: "Email", href: `mailto:mahmudaoishi457@gmail.com`, icon: Mail },
];

export const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Certificates", id: "certificates" },
  { label: "Contact", id: "contact" },
];

export const aboutCards = [
  { label: "Experience", value: "1.5+ Years" },
  { label: "Focus", value: "Full-Stack Products" },
  { label: "Availability", value: "Open to Work" },
  { label: "Based in", value: "Remote" },
];

export const interests = [
  "Product Thinking",
  "Design Systems",
  "API Architecture",
  "Performance",
  "Open Source",
  "Mentoring",
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "REST API", level: 80 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "Mongoose", level: 80 },
      { name: "Firebase", level: 75 },
    ],
  },
  {
    title: "Authentication",
    icon: ShieldCheck,
    skills: [
      { name: "NextAuth", level: 70 },
      { name: "Firebase Auth", level: 80 },
      { name: "JWT", level: 75 },
    ],
  },
  {
    title: "Languages",
    icon: Terminal,
    skills: [
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 90 },
      { name: "HTML / CSS", level: 88 },
    ],
  },
  {
    title: "Frameworks",
    icon: Boxes,
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "Express.js", level: 70 },
      { name: "React Hook Form", level: 82 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    badges: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Netlify", "Figma"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    badges: ["Problem Solving", "Communication", "Team Collaboration", "Time Management", "Adaptability"],
  },
];

export const experiences = [
  {
    company: "Freelance / Contract",
    position: "Full-Stack Developer",
    duration: "2023 — Present",
    responsibilities: [
      "Build responsive web apps end to end, from polished interfaces to production-ready APIs.",
      "Collaborate with clients to turn ideas into fast, maintainable, user-focused products.",
    ],
    achievements: [
      "Improved UX consistency across product surfaces",
      "Delivered reusable component patterns",
    ],
  },
  {
    company: "Product Studio",
    position: "Software Engineer",
    duration: "2021 — 2023",
    responsibilities: [
      "Developed client-facing dashboards and workflow tools with React and TypeScript.",
      "Integrated backend services, authentication, and deployment pipelines.",
    ],
    achievements: [
      "Shipped multiple production apps",
      "Reduced repetitive UI work with shared components",
    ],
  },
  {
    company: "Independent Projects",
    position: "Frontend Engineer",
    duration: "2019 — 2021",
    responsibilities: [
      "Built responsive landing pages and portfolio-style experiences.",
      "Practiced accessibility, motion, and performance-focused UI implementation.",
    ],
    achievements: ["Strengthened UI craft", "Expanded full-stack fundamentals"],
  },
];

export const education = [
  {
    school: "Self-Directed Learning",
    degree: "Full-Stack Development",
    major: "React, Node.js, Databases",
    year: "Present",
    gpa: "Portfolio-driven",
  },
  {
    school: "Continuous Practice",
    degree: "Web Application Engineering",
    major: "UI Systems and APIs",
    year: "Ongoing",
    gpa: "Project-based",
  },
];

export const projects = [
  {
    name: "LearnSnap AI",
    description:
      "An AI-powered app that turns whiteboard photos into study notes and prescriptions into clear explanations.",
    image: "/learnSnap-ai.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Gemma 4 Vision"],
    features: ["Whiteboard-to-notes with flashcards & quiz", "Prescription explainer", "Bangla + English support"],
    demo: "https://learnsnap-ai.vercel.app/",
    github: "#",
    githubClient: "https://github.com/Oishi106/LearnSnap-AI---frontend",
    githubServer: "https://github.com/Oishi106/LearnSnap-AI---backend",
  },
  {
    name: "LMS Platform",
    description:
      "A full-stack learning platform where users browse courses, watch previews, and track progress through a personal dashboard.",
    image: "/skill-forge.png",
    tech: ["Next.js", "Express.js", "MongoDB", "NextAuth"],
    features: ["Role-based dashboards", "Course enroll & progress tracking", "Advanced search & filtering"],
    demo: "https://lms-client-ne5a.vercel.app/",
    github: "#",
    githubClient: "https://github.com/Oishi106/lms-client",
    githubServer: "https://github.com/Oishi106/lms-server",
  },
  {
    name: "Care Connect",
    description:
      "A caregiving service platform where families can find, book, and manage trusted caregivers for children, elderly, and sick relatives.",
    image: "care.png",
    tech: ["React", "Firebase", "Node.js", "MongoDB"],
    features: ["Dynamic booking with cost calculation", "Booking status tracking", "Email invoice on confirmation"],
    demo: "https://care-connect-client-eight.vercel.app/",
    github: "#",
    githubClient: "https://github.com/Oishi106/care-connect-client",
    githubServer: "https://github.com/Oishi106/care-connect-server",
  },
  {
    name: "StyleDecor",
    description:
      "A role-based decoration booking platform where users book services, make payments, and track project status in real time.",
    image: "style-decor.png",
    tech: ["React", "Firebase", "Node.js", "Stripe"],
    features: ["Role-based dashboards for User/Decorator/Admin", "Stripe payment integration", "Real-time service status tracking"],
    demo: "https://luxury-flan-e90d84.netlify.app/",
    github: "#",
    githubClient: "https://github.com/Oishi106/styleDecor-client",
    githubServer: "https://github.com/Oishi106/styleDecor-server",
  },
  {
    name: "FoodNest",
    description:
      "A community-driven platform for food lovers to share reviews, discover trending dishes, and connect with nearby food enthusiasts.",
    image: "foodNest.png",
    tech: ["React", "Firebase", "Node.js", "MongoDB"],
    features: ["Review CRUD with dashboard", "Favorite system for saved reviews", "Search by food name"],
    demo: "https://local-food-client.vercel.app/",
    github: "#",
    githubClient: "https://github.com/Oishi106/local-food-client",
    githubServer: "https://github.com/Oishi106/local-food-server",
  },
  {
    name: "SkillSwap",
    description:
      "A local skill-exchange platform where users can offer, learn, and book sessions to swap valuable skills within their community.",
    image: "skill-swap.png",
    tech: ["React", "Firebase", "Tailwind CSS", "DaisyUI"],
    features: ["Firebase auth with Google login", "Protected skill details & booking", "Profile management with password reset"],
    demo: "https://mellow-otter-666845.netlify.app/",
    github: "https://github.com/Oishi106/skill_swap",
    githubClient: "",
    githubServer: "",
  },
];

export const certificates = [
  {
    title: "Web Development Course",
    issuer: "Programming Hero",
    date: "2026",
    link: "#",
    image: "c1.png",
  },
  {
    title: "Blackbelt Web Developer",
    issuer: "Programming Hero (Job Placement)",
    date: "2026",
    link: "#",
    image: "c2.png",
  },
  {
    title: "AI Workflows & Agents",
    issuer: "Grameenphone Academy",
    date: "2026",
    link: "#",
    image: "c3.png",
  },
  {
    title: "Communication Secrets",
    issuer: "10 Minute School",
    date: "2026",
    link: "#",
    image: "c4.png",
  },
];

export const stats = [
  { label: "Projects Completed", value: 35, suffix: "+" },
  { label: "Happy Clients", value: 18, suffix: "+" },
  { label: "Years Experience", value: 4, suffix: "+" },
  { label: "GitHub Contributions", value: 2400, suffix: "+" },
];

export const timeline = [
  {
    year: "2021",
    title: "Built first production app",
    detail: "React and Node.js",
    type: "career",
  },
  {
    year: "2022",
    title: "Expanded backend skills",
    detail: "APIs, auth, and databases",
    type: "career",
  },
  {
    year: "2023",
    title: "Started freelance work",
    detail: "Product and portfolio builds",
    type: "career",
  },
  {
    year: "2024",
    title: "Polished design systems",
    detail: "Reusable components and UI patterns",
    type: "milestone",
  },
  {
    year: "2025",
    title: "Focused on full-stack delivery",
    detail: "Fast, maintainable web apps",
    type: "career",
  },
  {
    year: "2026",
    title: "Open to new opportunities",
    detail: "Freelance and full-time work",
    type: "milestone",
  },
];

export const contactInfo = [
  { label: "Email", value: profile.email, icon: Mail, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, icon: Phone, href: `tel:${profile.phone}` },
  { label: "Location", value: profile.location, icon: MapPin, href: "#" },
];
