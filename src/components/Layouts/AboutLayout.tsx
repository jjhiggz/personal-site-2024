import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

export const AboutLayout = ({
  image,
  content,
  title,
}: {
  image: StaticImageData;
  content: ReactNode;
  title: string;
}) => {
  return (
    <div className=" absolute h-full  w-full flex flex-col">
      <div className="h-12 bg-green-600 w-full"></div>
      <section className="flex flex-col h-full w-full items-center gap-10 pt-3 z-20 overflow-scroll md:overflow-hidden ">
        <h2 className="text-3xl font-mono">{title}</h2>
        {/* Desktop */}
        <div className="flex-1 w-full gap-10 px-10 z-20 hidden md:flex">
          {/* Image */}
          <div className=" flex-1  h-5/6  p-3 bg-black rounded-lg">
            <Image
              src={image}
              alt="main picture of me"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
          {/* Content */}
          <div className=" flex-1  h-5/6   rounded-lg bg-slate-800 bg-opacity-40 p-11 font-mono">
            {content}
          </div>
        </div>

        {/* Mobile */}
        <div className="flex-1 w-full gap-10 px-10 z-20 flex flex-col md:hidden">
          <div className=" flex-1  h-5/6   rounded-lg bg-slate-800 bg-opacity-40 p-11 font-mono">
            {content}
          </div>

          <div className=" flex-1  h-5/6  p-3 bg-black rounded-lg">
            <Image
              src={image}
              alt="main picture of me"
              className="h-full w-full object-cover rounded-lg mb-10"
            />
          </div>

          <div className="h-5"></div>
        </div>
      </section>
    </div>
  );
};
