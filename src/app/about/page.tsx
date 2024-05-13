import { images } from "../images";
import { AboutSelector } from "@/components/AboutSelector";
import { AboutLayout } from "@/components/Layouts/AboutLayout";
import { TerminalLayout } from "@/components/Terminal/TerminalLayout";

const AboutPage = () => {
  return (
    <AboutLayout
      image={images.about.main}
      content={
        <>
          <TerminalLayout content={<AboutSelector />} path="about" />
        </>
      }
      title="About Me..."
    />
  );
};

export default AboutPage;
