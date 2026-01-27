import React from "react";
import ProjectCard from "./ProjectCard";
import project from "./Project";
export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-[#FAFAFA] dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-sm font-bold uppercase tracking-[0.2em] text-[#00CED1] mb-12">
          Featured Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {project.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;