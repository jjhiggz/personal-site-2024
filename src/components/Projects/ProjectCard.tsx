"use client";
import { ProjectCardShell } from "./ProjectCardShell";
import { ProjectCardTopPanel } from "./ProjectTopPanel";
import { ProjectDescription } from "./ProjectDescription";
import { ProjectTechnology } from "./ProjectTechnology";
import { Project } from "./data";
import { useRouter } from "next/navigation";
import { ProjectData } from "./ProjectData";

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
  const router = useRouter();

  return (
    <ProjectCardShell
      {...{ isAnyProjectSelected, isThisProjectSelected, shouldHide }}
    >
      {shouldShowName && (
        <div
          className={
            "bg-slate-900 bg-opacity-40 h-full w-full rounded-lg flex justify-center items-center select-none cursor-pointer hover:bg-slate-800 hover:bg-opacity-40 overflow-y-hide"
          }
          onClick={() => {
            setSelectedProject(project);
          }}
        >
          <h3>{project.name}</h3>
        </div>
      )}

      {isAnyProjectSelected && (
        <div className="p-10 h-full w-full  absolute">
          <div className="w-full h-full bg-slate-800 bg-opacity-40 rounded-2xl ">
            <ProjectCardTopPanel
              onClose={() => {
                router.back();
              }}
            />
            {/* Desktop View */}
            <div className="h-full w-full hidden lg:flex">
              {/* Left */}
              <div className="flex flex-col flex-3 gap-2 px-2 py-2">
                {/* Description Panel */}
                <div className=" w-full flex-1 p-3 px-10 rounded-2xl font-mono bg-gray-950 bg-opacity-90 outline-4 outline-white">
                  <ProjectDescription project={project} />
                </div>
                {/* Technology Panel */}
                <div className="flex-1 rounded-2xl bg-gray-950 bg-opacity-90">
                  <ProjectTechnology project={project} />
                </div>
              </div>
              {/* Right */}
              <div className="flex flex-col flex-5 gap-2 px-2 py-2">
                {/* Video Panel */}
                <div className="flex-5 bg-red-400 rounded-2xl"></div>
                {/* Links */}
                <div className="flex-3 bg-gray-950 bg-opacity-90 rounded-2xl">
                  <ProjectData project={project} />
                </div>
              </div>
            </div>
            {/* Mobile View */}
            <div className="w-full flex flex-col p-5 gap-5  font-mono lg:hidden">
              <div className="w-full p-5 md:p-10 bg-gray-900 rounded-2xl bg-opacity-45">
                <ProjectDescription project={project} />
              </div>
              <div className="w-full p-2 md:p-10 bg-gray-900 rounded-2xl bg-opacity-45">
                <ProjectTechnology project={project} />
              </div>

              <div className="w-full p-2 md:p-10 bg-gray-900 rounded-2xl bg-opacity-45">
                <ProjectData project={project} />
              </div>
            </div>
          </div>
        </div>
      )}
    </ProjectCardShell>
  );
};
