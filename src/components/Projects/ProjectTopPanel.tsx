import { CgClose } from "react-icons/cg";

export const ProjectCardTopPanel = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      className="flex  h-10 bg-opacity-40  items-center px-2 cursor-pointer text-gray-500 hover:text-blue-300 absolute"
      onClick={() => {
        onClose();
      }}
    >
      <CgClose fontWeight={20} className="cursor-pointer text-3xl " />
    </div>
  );
};
