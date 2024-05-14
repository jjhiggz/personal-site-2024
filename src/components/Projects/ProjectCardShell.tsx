import { twcx } from "@/utils/tailwind-helpers";
import { ReactNode } from "react";

export const ProjectCardShell = ({
  children,
  isAnyProjectSelected,
  isThisProjectSelected,
  shouldHide,
}: {
  children: ReactNode;
  isAnyProjectSelected: boolean;
  isThisProjectSelected: boolean;
  shouldHide: boolean;
}) => {
  return (
    <div
      className={twcx("transition-all duration-500 aspect-square ", {
        "flex p-10": !isAnyProjectSelected,
        "col-span-full row-span-full ": isThisProjectSelected,
        "opacity-0": shouldHide,
      })}
    >
      {children}
    </div>
  );
};
