import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./Navbar.tsx";
import PageOne from "./pageOne/PageOne.tsx";
import Skills from "./skills/SkillsSection.tsx";
import AboutMe from "./AboutMe/AboutMe.tsx";
import Contact from "./contact/Contact.tsx";
import ProjectsSection from "./project/ProjectSection.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <PageOne />
    <Skills />
    <AboutMe />
    <Contact /> 
    <ProjectsSection />
  </StrictMode>,
);
