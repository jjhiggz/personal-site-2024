"use client";
import { Project } from "@/app/projects/page";
import { twcx } from "@/utils/tailwind-helpers";
import { CgChevronLeft } from "react-icons/cg";
import { ProjectCardShell } from "./ProjectCardShell";
import { ProjectCardTopPanel } from "./ProjectTopPanel";

export const ProjectCard = ({
  project,
  selectedProject,
  setSelectedProject,
}: {
  project: Project;
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
}) => {
  const isAnyProjectSelected = selectedProject !== null;
  const isThisProjectSelected = selectedProject?.name === project.name;
  const shouldHide = isAnyProjectSelected && !isThisProjectSelected;
  const shouldShowName = !isAnyProjectSelected;

  return (
    <ProjectCardShell
      {...{ isAnyProjectSelected, isThisProjectSelected, shouldHide }}
    >
      {shouldShowName && (
        <div
          className={
            "bg-slate-900 bg-opacity-40 h-full w-full rounded-lg flex justify-center items-center select-none cursor-pointer hover:bg-slate-800 hover:bg-opacity-40"
          }
          onClick={() => {
            setSelectedProject(project);
          }}
        >
          <h3>{project.name}</h3>
        </div>
      )}
      {isAnyProjectSelected && (
        <div className="p-10 h-full w-full">
          <div className="w-full h-full bg-slate-800 bg-opacity-40 rounded-2xl">
            <ProjectCardTopPanel onClose={() => setSelectedProject(null)} />
          </div>
        </div>
      )}
    </ProjectCardShell>
  );
};
