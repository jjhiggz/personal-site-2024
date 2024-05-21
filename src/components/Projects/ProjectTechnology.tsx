import { twcx } from "@/utils/tailwind-helpers";
import { useEffect, useState } from "react";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import { Project, Technology } from "./data";
import { IoOpenOutline } from "react-icons/io5";
import Link from "next/link";
import useKeyListener from "@/hooks/useKeyListener";

export const ProjectTechnology = ({ project }: { project: Project }) => {
  const [activeTechnology, setActiveTechnology] = useState<Technology | null>(
    project.technologies[0] ?? null
  );

  const activeTech = project.technologies.find(
    (project) => project.name === activeTechnology?.name
  );

  useEffect(() => {
    // scroll to active technology
    const $element = document.querySelector("#tech-" + activeTechnology?.name);
    $element?.scrollIntoView();
  }, [activeTechnology]);

  const gotoNextActiveTech = () => {
    const activeTechIndex = project.technologies.findIndex(
      (tech) => tech.name === activeTechnology?.name
    );
    const nextIndex =
      activeTechIndex === project.technologies.length - 1
        ? 0
        : activeTechIndex + 1;

    const nextTech = project.technologies[nextIndex];
    setActiveTechnology(nextTech);
  };

  const gotoPrevActiveTech = () => {
    const activeTechIndex = project.technologies.findIndex(
      (tech) => tech.name === activeTechnology?.name
    );
    const prevIndex =
      activeTechIndex === 0
        ? project.technologies.length - 1
        : activeTechIndex - 1;

    const prevTech = project.technologies[prevIndex];
    setActiveTechnology(prevTech);
  };

  useKeyListener({
    activeWhen: true,
    handler: () => {
      gotoPrevActiveTech();
    },
    keys: ["ArrowLeft", "h", "a"],
    onKey: "down",
  });

  useKeyListener({
    activeWhen: true,
    handler: () => {
      gotoNextActiveTech();
    },
    keys: ["ArrowRight", "l", "d"],
    onKey: "down",
  });

  return (
    <div className="flex flex-col items-center py-2 px-10 text-2xl font-mono between h-full">
      <h3>Technologies</h3>
      <div className="h-10 flex items-center justify-between mt-4 scrollbar-none select-none">
        <CgChevronLeft
          onClick={() => {
            gotoPrevActiveTech();
          }}
          className="opacity-80 cursor-pointer hover:opacity-100"
        />
        <div className=" w-52 md:w-72 flex overflow-x-scroll scrol gap-4  items-center scroll-m-0 scrollbar-none">
          {project.technologies.map((tech) => {
            const isActiveTech = tech.name === activeTechnology?.name;
            return (
              <div
                id={`tech-${tech.name}`}
                key={tech.name}
                className={twcx(
                  "w-auto cursor-pointer transition-all duration-500",
                  {
                    "text-xs  align-middle text-gray-400 ": !isActiveTech,
                    "text-sm text-white font-bold": isActiveTech,
                  }
                )}
                onClick={() => {
                  setActiveTechnology(tech);
                }}
              >
                {tech.name}
              </div>
            );
          })}
        </div>

        <CgChevronRight
          className="opacity-80 cursor-pointer hover:opacity-100"
          onClick={() => {
            gotoNextActiveTech();
          }}
        />
      </div>

      <div className="text-xs mt-4">
        {activeTech ? activeTech.description : "No Technology"}
      </div>

      {activeTech?.link && (
        <button className="rounded-lg bg-blue-600 text-sm mt-10 p-2 flex items-center gap-4">
          <Link href={activeTech.link} className="">
            Check it Out Here
          </Link>
          <IoOpenOutline />
        </button>
      )}
    </div>
  );
};
