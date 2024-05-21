import { CgChevronLeft } from "react-icons/cg";

export const ProjectCardTopPanel = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      className="flex  h-10 bg-opacity-40  items-center px-2 cursor-pointer text-blue-500 hover:text-blue-300"
      onClick={() => {
        onClose();
      }}
    >
      <CgChevronLeft fontWeight={20} className="cursor-pointer text-3xl " />
      <p className="underline">go back</p>
    </div>
  );
};
