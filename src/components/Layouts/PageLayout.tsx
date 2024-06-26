import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { Header } from "../Header/Header";

export const PageLayout = ({
  backgroundImage,
  children,
}: {
  backgroundImage: StaticImageData;
  children: ReactNode;
}) => {
  return (
    <main className="flex h-screen bg-gray-900 relative flex-col overflow-hidden">
      <Header />
      <Image
        src={backgroundImage}
        className="absolute h-screen z-0 object-cover w-screen opacity-25 select-none drag-none top-0 "
        alt="background-pattern"
      />
      {children}
    </main>
  );
};
