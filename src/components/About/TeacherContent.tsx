import { asciiDrawings } from "@/utils/ascii-drawings";
import { AsciiArt } from "../Terminal/AsciiArt";
import { BackspaceText } from "./BackspaceText";

export const TeacherContent = () => {
  return (
    <>
      <div className="ml-8">
        <ul className="list-disc list-inside">
          <li>To teach is to learn, But you learn when you teach</li>
          <li>Programming{"'"}s a challenge but not out of reach </li>
          <li>A bootcamp instructor, since 2021</li>
          <li>To change someone{"'"}s life, there is nothing more fun</li>
          <li>I{"'"}ll write your curriculum, or teach you in class</li>
          <li>But if your code isn{"'"}t clean </li>
          <li>Then I{"'"}ll (in a friendly way) roast your ass </li>
        </ul>
      </div>
      <div className="mt-4">
        <AsciiArt text={asciiDrawings.apple} />
      </div>
      <br />
      <BackspaceText />
    </>
  );
};
