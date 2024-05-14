"use client";
import { ProjectCard } from "@/components/Projects/ProjectCard";
import { useState } from "react";

export type Project = {
  name: string;
};

const projects = [
  {
    name: "Remenu",
  },
  {
    name: "Portfolio",
  },
  {
    name: "DativeApp",
  },
  {
    name: "Noteworthy",
  },
  {
    name: "DoomTyper",
  },
  {
    name: "Property Tracker",
  },
];

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2  lg:grid-cols-3 h-full overflow-y-scroll z-30 relative">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.name}
              project={project}
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
            />
          );
        })}
      </section>
    </>
  );
};

export default ProjectsPage;
