import { Linkedin, Github, Twitter } from "lucide-react";

export const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

export const about = {
  description: `I'm a multidisciplinary creator specializing in UI/UX designer, Frontend developer and IoT Innovator.
I design intuitive digital experiences and express ideas through comics and logo design, blending creativity with technology.
`,
  works: [
    { id: 1, image: "/assets/works/tpmhiring.webp" },
    { id: 2, image: "/assets/works/tpmsquad.webp" },
    { id: 3, image: "/assets/works/saddleup.webp" },
    { id: 4, image: "/assets/works/beyondsyllabus.webp" },
    { id: 5, image: "/assets/works/tpm.webp" },
    { id: 6, image: "/assets/works/tpmrelease.webp" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "HOME FOR YOU",
    description: "Real estate platform with modern UI",
    tags: ["Web Design", "UI/UX"],
    gradient: "from-orange-500 via-red-500 to-pink-500",
    mockupBg: "from-orange-600/30 to-red-600/30",
  },
  {
    id: 2,
    title: "Dashboard Pro",
    description: "Analytics dashboard application",
    tags: ["Dashboard", "React"],
    gradient: "from-blue-500 via-purple-500 to-pink-500",
    mockupBg: "from-blue-600/30 to-purple-600/30",
  },
  {
    id: 3,
    title: "Portfolio Site",
    description: "Creative personal portfolio",
    tags: ["Portfolio", "Design"],
    gradient: "from-green-500 via-teal-500 to-cyan-500",
    mockupBg: "from-green-600/30 to-teal-600/30",
  },
  {
    id: 4,
    title: "E-Commerce App",
    description: "Modern shopping experience",
    tags: ["E-Commerce", "Mobile"],
    gradient: "from-yellow-500 via-orange-500 to-red-500",
    mockupBg: "from-yellow-600/30 to-orange-600/30",
  },
];

export const education = [
  {
    id: 1,
    institution: "Marian Engineering College",
    degree: "Bachelor's Computer Science",
    icon: "/assets/education/mec.webp",
  },
];


export const experiences = [
  {
    id: 1,
    role: "UI/UX Design Intern",
    company: "TheNextLeap",
    location: "Remote",
    duration: "2023 - Present",
    description:
      "Designed user interfaces and experiences for web applications. Collaborated with cross-functional teams to deliver pixel-perfect designs.",
    achievements: ["15+ UI Designs", "40% UX Improvement", "Design Sprints"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 2,
    role: "Content Creation Lead",
    company: "Freelance",
    location: "Remote",
    duration: "2022 - 2023",
    description:
      "Created and coordinated content across multiple platforms. Developed creative strategies for brand engagement.",
    achievements: ["10+ Projects", "200% Growth", "Team Building"],
    gradient: "from-blue-500 to-purple-500",
  },
];

export const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];
