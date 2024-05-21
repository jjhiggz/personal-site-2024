import { images } from "../images";
import { AboutSelector } from "@/components/AboutSelector";
import { AboutLayout } from "@/components/Layouts/AboutLayout";
import { TerminalLayout } from "@/components/Terminal/TerminalLayout";
import { Suspense } from "react";

const AboutPage = () => {
  return (
    <AboutLayout
      image={images.about.main}
      content={
        <>
          <Suspense>
            <TerminalLayout content={<AboutSelector />} path="about" />
          </Suspense>
        </>
      }
      title="About Me..."
    />
  );
};

export default AboutPage;
