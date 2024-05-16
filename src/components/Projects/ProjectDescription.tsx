import { Project } from "./data";

export const ProjectDescription = ({ project }: { project: Project }) => {
  return (
    <>
      <h2 className="text-2xl flex justify-center">{project.name}</h2>
      <p className="mt-4 italic align-middle">{project.description}</p>
    </>
  );
};
