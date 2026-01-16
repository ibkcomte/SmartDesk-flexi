import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Navbar.tsx'
import PageOne from './pageOne/PageOne.tsx'
import Skills from './skills/SkillsSection.tsx'
import AboutMe from './AboutMe/AboutMe.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <PageOne/>
    <Skills/>
     <AboutMe/>
  </StrictMode>,
)
