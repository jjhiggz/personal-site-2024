import { Project, projects } from "./data";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

export const ProjectDescription = ({
  project,
  setSelectedProject,
}: {
  project: Project;
  setSelectedProject: (input: Project) => unknown;
}) => {
  const currentProjectIndex = projects.findIndex(
    (proj) => proj.name === project.name
  );
  const nextProjectIndex =
    currentProjectIndex + 1 > projects.length - 1 ? 0 : currentProjectIndex + 1;
  const previousProjectIndex =
    currentProjectIndex - 1 < 0 ? projects.length - 1 : currentProjectIndex - 1;

  return (
    <>
      <div className="flex w-full items-center justify-between">
        <CgChevronLeft
          onClick={() => {
            setSelectedProject(projects[previousProjectIndex]);
          }}
          className="opacity-80 cursor-pointer hover:opacity-100"
        />
        <h2 className="text-2xl flex justify-center">{project.name}</h2>
        <CgChevronRight
          onClick={() => {
            setSelectedProject(projects[nextProjectIndex]);
          }}
          className="opacity-80 cursor-pointer hover:opacity-100"
        />
      </div>
      <p className="mt-4 italic align-middle">{project.description}</p>
    </>
  );
};
