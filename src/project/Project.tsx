import React from 'react';


interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  status: 'Completed' | 'In Progress';
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}
const Project: Project[] = [
  {
    id: 1,
    title: "Nutri AI chatbot",
    description: "Nutri AI is a nutrition chatbot that checks BMI, answers food-related questions, and allows users to book nutrition consultations.",
    image: "/path-to-nutri-ai-image.png",
    status: "Completed",
    tags: ["React", "Tailwind Css", "Python", "Fastapi", "GeminiAI"],
    githubUrl: "https://github.com/yourusername/nutri-ai"
  },
  {
    id: 2,
    title: "Nelfund Student Loan App",
    description: "Together with my team, I built an app where users can get instant, accurate answers about NELFUND student loans, check qualifications, and how to apply.",
    image: "/path-to-nelfund-image.png",
    status: "In Progress",
    tags: ["React", "Tailwind Css"],
    githubUrl: "https://github.com/yourusername/nelfund",
    liveUrl: "https://nelfund.gov.ng" // Example link
  }
];

export default Project;


