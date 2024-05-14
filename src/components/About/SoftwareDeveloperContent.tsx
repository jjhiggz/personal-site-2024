"use client";

import {
  SiBun,
  SiCss3,
  SiDocker,
  SiElixir,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRemix,
  SiRuby,
  SiRust,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVitest,
  SiVuedotjs,
  SiZod,
} from "react-icons/si";
import { BackspaceText } from "./BackspaceText";
import { DiJavascript } from "react-icons/di";

export const SoftwareDeveloperContent = () => {
  return (
    <>
      <div className="ml-8">
        <ul className="list-disc list-inside">
          <li>I{"'"}ve freelanced, to make products come to life</li>
          <li>
            From{" "}
            <a
              className="underline text-blue-300"
              href="https://www.dativeapp.com/"
            >
              Dative
            </a>{" "}
            to{" "}
            <a
              href="https://www.skycompassmedia.com/portfolio-spmultifamilygroup/"
              className="underline text-blue-300"
            >
              Property Trackers
            </a>
            ... That{"'"}s right{" "}
          </li>
          <li>I code through the day and I code through the night</li>
          <li>In under about a week, I built this website </li>
          <li>
            In industry I{"'"}ve worked with{" "}
            <a href="https://bombbomb.com/" className="underline text-blue-300">
              Bomb Bomb
            </a>{" "}
            and{" "}
            <a href="https://pfl.com" className="underline text-blue-300">
              PFL
            </a>
          </li>
          <li>to work on their apps, and they came out quite swell</li>
          <li>And of course on the side for not 1 year but 2</li>
          <li>
            Built a CMS for Restaurant{"'"}s,{" "}
            <a
              href="https://www.skycompassmedia.com/"
              className="underline text-blue-300"
            >
              we
            </a>
            {"'"}ve called it{" "}
            <a
              href="https://www.skycompassmedia.com/portfolio-oliviatampa/"
              className="underline text-blue-300"
            >
              remenu
            </a>
          </li>
          <li>My code is in Typescript, I love me React</li>
          <li>But am comfortable with many languages in back</li>
          <li>
            <a
              className="underline text-blue-300"
              href="https://github.com/jjhiggz/noteworthy"
            >
              A Project in Elixir, that used Rust too
            </a>
          </li>
          <li>
            I started on Rails with a{" "}
            <a
              href="https://github.com/jjhiggz/DOOMTYPER_backend"
              className="underline text-blue-300"
            >
              Typer Themed Doom
            </a>
          </li>
        </ul>
        <br />
        <div className="flex gap-2">
          <SiTypescript
            color="09a1ff"
            className="animate-bounce animation-delay-0"
          />
          <SiElixir
            color="#a710ed"
            className="animate-bounce animation-delay-75"
          />
          <SiReact
            color="09a1ff"
            className="animate-bounce animation-delay-100"
          />
          <SiJavascript
            color="yellow"
            className="animate-bounce animation-delay-150"
          />
          <SiRemix
            color="09a1ff"
            className="animate-bounce animation-delay-200"
          />
          <SiRuby color="red" className="animate-bounce animation-delay-300" />
          <SiDocker
            color="09a1ff"
            className="animate-bounce animation-delay-500"
          />
          <SiPostgresql
            color="09a1ff"
            className="animate-bounce animation-delay-700"
          />
          <SiRust
            color="orange"
            className="animate-bounce animation-delay-1000"
          />
          <SiPython
            color="09a1ff"
            className="animate-bounce animation-delay-700"
          />
          <SiPrisma
            color="green"
            className="animate-bounce animation-delay-500"
          />
          <SiZod
            color="salmon"
            className="animate-bounce animation-delay-300"
          />
          <SiTailwindcss
            color="09a1ff"
            className="animate-bounce animation-delay-200"
          />
          <SiHtml5 color="red" className="animate-bounce animation-delay-150" />
          <SiCss3
            color="09a1ff"
            className="animate-bounce animation-delay-100"
          />
          <SiVitest
            color="yellow"
            className="animate-bounce animation-delay-75"
          />
          <SiVuedotjs
            color="green"
            className="animate-bounce animation-delay-0"
          />
          <SiVite
            color="yellow"
            className="animate-bounce animation-delay-100"
          />
          <SiJest
            color="green"
            className="animate-bounce animation-delay-150"
          />
          <SiBun color="white" className="animate-bounce animation-delay-200" />
        </div>
      </div>
      <br />
      <BackspaceText />
    </>
  );
};
