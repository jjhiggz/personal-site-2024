import { asciiDrawings } from "@/utils/ascii-drawings";
import { AsciiArt } from "../Terminal/AsciiArt";

export const DogDadContent = () => {
  return (
    <>
      <div className="ml-8">
        <ul className="list-disc list-inside">
          <li>My Dog is The Bomb! 🔥</li>
          <li>My Dog is The Best</li>
          <li>His Name is Doomslayer</li>
          <li>There{"'"}s a Heart on His Chest</li>
          <li>One Half of a Corgi, The other half a heeler</li>
          <li>
            He{"'"}s a {'"'}cowboy corgi{'"'}, just like{" "}
            <a
              href="https://www.youtube.com/watch?v=vlq9UWWqe44"
              className="text-blue-300 underline"
            >
              Walker de Wheeler
            </a>
          </li>
          <li>I got him during COVID, when I was alone</li>
          <li>And now without doomie, home wouldn{"'"}t be home</li>
        </ul>
      </div>
      <div className="mt-4">
        <AsciiArt text={asciiDrawings.doomslayer} />
      </div>
      <br />
      <div>[Press Backspace to Return]</div>
    </>
  );
};
