import Image from "next/image";
import { Header } from "@/components/Header/Header";
import { PageLayout } from "@/components/Layouts/PageLayout";
import { images } from "../images";
import { AboutSelector } from "@/components/AboutSelector";

const AboutPage = () => {
  return (
    <section className="flex flex-col h-full w-full items-center gap-10 pt-3 z-20">
      <h2 className="text-3xl font-mono">About Me...</h2>
      <div className="flex-1 w-full gap-10 px-10 z-20 hidden md:flex">
        {/* Image */}
        <div className=" flex-1  h-5/6  p-3 bg-black rounded-lg">
          <Image
            src={images.about.main}
            alt="main picture of me"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
        {/* Content */}
        <div className=" flex-1  h-5/6   rounded-lg bg-slate-800 bg-opacity-40 p-11 font-mono">
          <p>Hi I{"'"}m Jon 👋,</p>
          <br />
          <p>I am a...</p>
          <br />
          <AboutSelector />
        </div>
      </div>

      <div className="flex-1 w-full gap-10 px-10 z-20 flex flex-col-reverse md:hidden">
        {/* Image */}
        <div className=" flex-1  h-5/6  p-3 bg-black rounded-lg">
          <Image
            src={images.about.main}
            alt="main picture of me"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
        {/* Content */}
        <div className=" flex-1  h-5/6   rounded-lg bg-slate-800 bg-opacity-40 p-11 font-mono">
          <p>Hi I{"'"}m Jon 👋,</p>
          <br />
          <p>I am a...</p>
          <br />
          <AboutSelector />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
