"use client";
import { ProjectCard } from "@/components/Projects/ProjectCard";
import { Project, projects } from "@/components/Projects/data";
import { useSearchParamsState } from "@/hooks/useSearchParamsState";
import { twcx } from "@/utils/tailwind-helpers";

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] =
    useSearchParamsState<Project | null>({
      defaultValue: null,
      key: "selectedProject",
    });

  return (
    <>
      <section
        className={twcx(
          "grid-cols-1 h-full z-30 relative w-full overflow-y-scroll",
          {
            "grid  sm:grid-cols-2  md:grid-cols-2  lg:grid-cols-3 ":
              !selectedProject,
            "grid  ": !selectedProject,
          }
        )}
      >
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
