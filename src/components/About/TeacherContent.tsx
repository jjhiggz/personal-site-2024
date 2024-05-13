import { asciiDrawings } from "@/utils/ascii-drawings";
import { AsciiArt } from "../Terminal/AsciiArt";

export const TeacherContent = () => {
  return (
    <>
      <div className="ml-8">
        <ul className="list-disc list-inside">
          <li>I code during day, Make songs through the night</li>
          <li>My songs only matched by tech skills in might</li>
          <li>Play Music in Linux, and write songs in vim</li>
          <li>For one who does all, you know you{"'"}ve found him</li>
        </ul>
      </div>
      <div className="mt-4">
        <AsciiArt text={asciiDrawings.piano} />
      </div>
      <br />
      <div>[Press Backspace to Return]</div>
    </>
  );
};
