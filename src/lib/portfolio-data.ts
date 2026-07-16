import {
  Code2, Server, Database, Cloud, Terminal, Boxes, Wrench, Users,
  Github, Linkedin, Twitter, Mail, Phone, MapPin, Dribbble,
  Facebook,
} from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const profile = {
  name: "Aarav Sharma",
  title: "Actor & Performer",
  tagline: "Stage, screen, and voice — I bring characters to life with presence, range, and craft honed across theatre and film.",
  bio: "A versatile actor and performer with a passion for storytelling across stage and screen. From classical theatre to independent film, I bring authenticity, discipline, and range to every role.",
  email: "hello@aaravsharma.dev",
  phone: "+1 (555) 123-4567",
  location: "Los Angeles",
  resumeUrl: "#",
};

export const socials = [
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "Email", href: "https://mail.com", icon: Mail },
];

export const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Certificates", id: "certificates" },
  { label: "Contact", id: "contact" },
];

export const aboutCards = [
  { label: "Experience", value: "6+ Years" },
  { label: "Focus", value: "Web & AI" },
  { label: "Availability", value: "Freelance" },
  { label: "Based in", value: "San Francisco" },
];

export const interests = [
  "Generative AI", "Design Systems", "Open Source", "3D & WebGL",
  "Developer Tooling", "Photography",
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 94 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python / FastAPI", level: 85 },
      { name: "GraphQL", level: 80 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "Redis", level: 78 },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    skills: [
      { name: "Docker / K8s", level: 84 },
      { name: "AWS / GCP", level: 80 },
      { name: "CI / CD", level: 86 },
    ],
  },
  {
    title: "Languages",
    icon: Terminal,
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "Python", level: 88 },
      { name: "Go", level: 72 },
    ],
  },
  {
    title: "Frameworks",
    icon: Boxes,
    skills: [
      { name: "React / Vue", level: 92 },
      { name: "Express / Nest", level: 87 },
      { name: "TensorFlow", level: 75 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    badges: ["Git", "Figma", "Vite", "Jest", "Storybook", "Postman", "Vercel", "Linear"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    badges: ["Leadership", "Communication", "Mentoring", "Problem Solving", "Ownership"],
  },
];

export const experiences = [
  {
    company: "Nebula Labs",
    position: "Senior Software Engineer",
    duration: "2022 — Present",
    responsibilities: [
      "Lead a squad of 5 building AI-powered SaaS products end to end.",
      "Architected a real-time analytics platform serving 2M+ users.",
    ],
    achievements: ["Cut page load time by 60%", "Shipped 3 flagship features"],
  },
  {
    company: "Vertex Studio",
    position: "Full-Stack Developer",
    duration: "2020 — 2022",
    responsibilities: [
      "Built design-system-driven interfaces for enterprise clients.",
      "Owned CI/CD pipelines and cloud infrastructure on AWS.",
    ],
    achievements: ["Delivered 20+ client projects", "Reduced infra cost by 35%"],
  },
  {
    company: "Pixel Forge",
    position: "Frontend Engineer",
    duration: "2018 — 2020",
    responsibilities: [
      "Developed responsive marketing sites and web apps.",
      "Collaborated with designers to ship award-winning UIs.",
    ],
    achievements: ["Awwwards Honorable Mention", "Grew team knowledge base"],
  },
];

export const education = [
  {
    school: "Stanford University",
    degree: "M.S. Computer Science",
    major: "Artificial Intelligence",
    year: "2018",
    gpa: "3.9 / 4.0",
  },
  {
    school: "UC Berkeley",
    degree: "B.S. Computer Science",
    major: "Software Engineering",
    year: "2016",
    gpa: "3.8 / 4.0",
  },
];

export const projects = [
  {
    name: "Nova Analytics",
    description: "A real-time analytics dashboard with predictive insights and beautiful data visualization.",
    image: project1,
    tech: ["React", "TypeScript", "D3.js", "FastAPI"],
    features: ["Live dashboards", "AI forecasting", "Team workspaces"],
    demo: "#",
    github: "#",
  },
  {
    name: "Aura Commerce",
    description: "A headless e-commerce platform with a lightning-fast mobile-first storefront.",
    image: project2,
    tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    features: ["Headless CMS", "One-tap checkout", "PWA support"],
    demo: "#",
    github: "#",
  },
  {
    name: "Sage AI",
    description: "An AI assistant that answers questions from your knowledge base with cited sources.",
    image: project3,
    tech: ["Python", "LangChain", "React", "Redis"],
    features: ["RAG pipeline", "Streaming replies", "Source citations"],
    demo: "#",
    github: "#",
  },
];

export const certificates = [
  {
    title: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    link: "#",
    image: "/certs/aws-solutions-architect.jpg",
  },
  {
    title: "Professional ML Engineer",
    issuer: "Google Cloud",
    date: "2022",
    link: "#",
    image: "/certs/google-cloud-ml-engineer.jpg",
  },
  {
    title: "Meta Frontend Developer",
    issuer: "Meta",
    date: "2021",
    link: "#",
    image: "/certs/meta-frontend-developer.jpg",
  },
  {
    title: "Certified Kubernetes Admin",
    issuer: "CNCF",
    date: "2021",
    link: "#",
    image: "/certs/cncf-kubernetes-admin.jpg",
  },
];

export const stats = [
  { label: "Projects Completed", value: 120, suffix: "+" },
  { label: "Happy Clients", value: 60, suffix: "+" },
  { label: "Years Experience", value: 6, suffix: "" },
  { label: "GitHub Contributions", value: 4800, suffix: "+" },
];

export const timeline = [
  { year: "2016", title: "Graduated UC Berkeley", detail: "B.S. Computer Science", type: "education" },
  { year: "2018", title: "Master's at Stanford", detail: "Specialized in AI", type: "education" },
  { year: "2018", title: "Joined Pixel Forge", detail: "Frontend Engineer", type: "career" },
  { year: "2020", title: "Full-Stack at Vertex", detail: "Owned end-to-end delivery", type: "career" },
  { year: "2022", title: "Senior at Nebula Labs", detail: "Leading AI product squad", type: "career" },
  { year: "2024", title: "Awwwards Recognition", detail: "Portfolio & client work", type: "milestone" },
];

export const contactInfo = [
  { label: "Email", value: profile.email, icon: Mail, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, icon: Phone, href: `tel:${profile.phone}` },
  { label: "Location", value: profile.location, icon: MapPin, href: "#" },
];
