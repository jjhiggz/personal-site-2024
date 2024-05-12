import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { Header } from "./Header/Header";

export const PageLayout = ({
  backgroundImage,
  children,
}: {
  backgroundImage: StaticImageData;
  children: ReactNode;
}) => {
  return (
    <main className="flex h-screen bg-slate-900 relative flex-col">
      <Header />
      <Image
        src={backgroundImage}
        className="absolute h-screen z-0 object-cover w-screen opacity-25 select-none drag-none"
        alt="background-pattern"
      />
      <section className="w-full h-full">{children}</section>
    </main>
  );
};
