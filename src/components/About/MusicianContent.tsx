"use client";
import { asciiDrawings } from "@/utils/ascii-drawings";
import { AsciiArt } from "../Terminal/AsciiArt";
import { BackspaceText } from "./BackspaceText";

export const MusicianContent = () => {
  return (
    <>
      <div className="ml-8">
        <ul className="list-disc list-inside">
          <li>I code during day, Make songs through the night</li>
          <li>My songs only matched by tech skills in might</li>
          <li>Play Music in Linux, and write songs in vim</li>
          <li>For one who does all, you know you{"'"}ve found him</li>
          <li>In middleschool I listened to Greenday Basketcase</li>
          <li>
            After College in a Band{" "}
            <a
              href="https://www.facebook.com/KonaTheBand/videos/2086937854928192"
              className="text-blue-300 underline"
            >
              I slapped on da{"'"} bass
            </a>
          </li>
          <li>
            I got good at producing, and made me{" "}
            <a
              href="https://higgzmadethebeat.beatstars.com/"
              className="text-blue-300 underline"
            >
              some beats
            </a>
          </li>
          <li>
            And wrote{" "}
            <a
              href="https://soundcloud.com/higgzmadethebeatt"
              className="text-blue-300 underline"
            >
              lot{"'"}s of songs
            </a>
            , just to get me through grief
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <AsciiArt text={asciiDrawings.piano} />
      </div>
      <br />
      <BackspaceText />
    </>
  );
};
