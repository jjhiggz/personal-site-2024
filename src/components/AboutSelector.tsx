"use client";
import { LinkData } from "@/app/types";
import useKeyListener from "@/hooks/useKeyListener";
import { Dispatch, SetStateAction, useState } from "react";

const aboutSelectorOptions: LinkData[] = [
  {
    text: "Software Developer",
    to: "about/software-developer",
  },
  {
    text: "Teacher",
    to: "about/teacher",
  },
  {
    text: "Musician",
    to: "about/musician",
  },
  {
    text: "Dog Dad",
    to: "about/dog-dad",
  },
];

const AboutSelectorOption = ({
  option,
  isSelected,
  setSelectedOption,
}: {
  option: LinkData;
  isSelected: boolean;
  setSelectedOption: Dispatch<SetStateAction<LinkData>>;
}) => {
  if (isSelected) {
    return (
      <p
        className="text-green-400 cursor-pointer"
        onClick={() => {
          setSelectedOption(option);
        }}
      >
        ➡️ [[{option.text}]]
      </p>
    );
  }

  return (
    <p
      className="cursor-pointer hover:text-green-300 w-auto"
      onClick={() => {
        setSelectedOption(option);
      }}
    >
      • {option.text}
    </p>
  );
};

export const AboutSelector = () => {
  const [selectedOption, setSelectedOption] = useState(aboutSelectorOptions[0]);

  const selectNextOption = () => {
    const currentIndex = aboutSelectorOptions.indexOf(selectedOption);
    const nextIndex = (currentIndex + 1) % aboutSelectorOptions.length;
    setSelectedOption(aboutSelectorOptions[nextIndex]);
  };

  const selectPreviousOption = () => {
    const currentIndex = aboutSelectorOptions.indexOf(selectedOption);
    const previousIndex =
      (currentIndex - 1 + aboutSelectorOptions.length) %
      aboutSelectorOptions.length;
    setSelectedOption(aboutSelectorOptions[previousIndex]);
  };

  useKeyListener({
    keys: ["j"],
    activeWhen: true,
    handler: () => {
      selectNextOption();
    },
    onKey: "down",
  });

  useKeyListener({
    keys: ["k"],
    activeWhen: true,
    handler: () => {
      selectPreviousOption();
    },
    onKey: "down",
  });
  return (
    <div>
      {aboutSelectorOptions.map((option) => (
        <AboutSelectorOption
          option={option}
          key={option.to}
          isSelected={option.to === selectedOption.to}
          setSelectedOption={setSelectedOption}
        />
      ))}
      <br />
      <p>[ Please Pick With Arrows Or Mouse ]</p>
      <br />
      <br />
      <p>[ I use vim btw... ]</p>
    </div>
  );
};
