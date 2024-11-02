import { Backpack, GraduationCap } from "lucide-react";

export const introduction = [
  'Hello, stranger! <span class="text-[#5862F2]">My name is Komal Sai</span>,',
  "I love experimenting new technologies.",
  "I have a decent knowledge about <span class='text-[#5862F2]'>how things work</span>.",
  "I am a full stack web developer and I love to do competitive programming  in my free time.",
];

export const stack = {
  languages: ["JavaScript", "C++", "Python"],
  technologies: {
    Frameworks: [
      "React",
      "Zustand",
      "Express",
      "Django rest framework",
      "TailwindCSS",
    ],
    "Development tools": [
      "Docker",
      "Prisma",
      "Node.js",
      "Vite",
      "Figma",
      "Postman",
      "Git",
    ],
    Databases: ["MySQL", "MongoDB", "Redis"],
    Deployment: ["AWS", "Render", "Vercel"],
    Environment: ["Ubuntu", "mac", "windows"],
  },
};

export const Education = [
  {
    icon: GraduationCap,
    Name: "Vignan's institute of information technology",
    passOut: 2025,
    course: "CSE",
    gpa: "8.4",
  },
  {
    icon: Backpack,
    Name: "Sainik School Korukonda",
    passOut: 2020,
    course: "MPCCs",
    gpa: "91.4",
  },
];
export const Experience = [
  {
    company: "propeers",
    product: "https://propeers.in/",
    joinDate: new Date("2024-09-24"),
    leftDate: null,
    role: "software developer intern",
  },
  {
    company: "picknpin",
    product: "https://picknpin.com/",
    joinDate: new Date("2024-05-07"),
    leftDate: new Date("2024-08-20"),
    role: "backend developer",
  },
];
