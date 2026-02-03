import React from "react";
import ProjectCard from "./ProjectCard";
import project from "./Project";
export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-[#FAFAFA] dark:bg-blend-normal">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold">
          Featured <span className="text-[#00CED1] font-serif italic">WORK</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-7 gap-10">
          {project.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;