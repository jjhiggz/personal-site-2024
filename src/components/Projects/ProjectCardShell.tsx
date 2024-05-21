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
      className={twcx("transition-all duration-500 ", {
        "flex p-10 aspect-square": !isAnyProjectSelected,
        "min-h-full w-full": isThisProjectSelected,
        hidden: shouldHide,
      })}
    >
      {children}
    </div>
  );
};
