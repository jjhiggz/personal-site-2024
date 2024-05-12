import Image from "next/image";
import pattern1 from "../../../public/pattern-1.jpg";
import { Header } from "@/components/Header/Header";

const AboutPage = () => {
  return (
    <main className="flex h-screen bg-slate-900 relative flex-col">
      <Header />

      <Image
        src={pattern1}
        className="absolute h-screen z-0 object-cover w-screen opacity-25 select-none drag-none"
        alt="background-pattern"
      />
    </main>
  );
};

export default AboutPage;
