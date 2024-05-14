import { images } from "@/app/images";
import { DogDadContent } from "@/components/About/DogDadContent";
import { MusicianContent } from "@/components/About/MusicianContent";
import { SoftwareDeveloperContent } from "@/components/About/SoftwareDeveloperContent";
import { TeacherContent } from "@/components/About/TeacherContent";
import { AboutLayout } from "@/components/Layouts/AboutLayout";
import { TerminalLayout } from "@/components/Terminal/TerminalLayout";

const AboutChildSwitch = ({ aboutId }: { aboutId: string }) => {
  if (aboutId === "musician") return <MusicianContent />;
  if (aboutId === "software-developer") return <SoftwareDeveloperContent />;
  if (aboutId === "dog-dad") return <DogDadContent />;
  if (aboutId === "teacher") return <TeacherContent />;
};

const defaultImage = images.about.main;

const AboutShowPage = ({
  params,
}: {
  params: {
    aboutId: string;
  };
}) => {
  const aboutId = params.aboutId;

  const image =
    images.about[aboutId as keyof typeof images.about] ?? defaultImage;

  return (
    <AboutLayout
      title={aboutId}
      content={
        <TerminalLayout
          content={<AboutChildSwitch aboutId={aboutId} />}
          path={"about/" + aboutId}
          enableBackButton={true}
        />
      }
      image={image}
    />
  );
};
export default AboutShowPage;
