"use client";
import { LinkData } from "@/app/types";
import useKeyListener from "@/hooks/useKeyListener";
import { useSearchParamsState } from "@/hooks/useSearchParamsState";
import { twcx } from "@/utils/tailwind-helpers";
import { wait } from "@/utils/wait";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
  isNavigating,
  onClick,
}: {
  option: LinkData;
  isSelected: boolean;
  isNavigating: boolean;
  onClick: (option: LinkData) => void;
}) => {
  if (isSelected) {
    return (
      <div className="flex">
        <p
          className={twcx({
            "text-green-400": !isNavigating,
            "cursor-pointer": !isNavigating,
            "text-yellow-200": isNavigating,
            "cursor-wait": isNavigating,
          })}
          onClick={() => {
            onClick(option);
          }}
        >
          ➡️ [[{option.text}]]
        </p>
      </div>
    );
  }

  return (
    <>
      <span>
        <p
          className={twcx("hover:text-gray-300", {
            "cursor-not-allowed": isNavigating,
            "cursor-pointer": !isNavigating,
          })}
          onClick={() => {
            onClick(option);
          }}
        >
          • {option.text}
        </p>
      </span>
    </>
  );
};

const defaultOption = aboutSelectorOptions[0];

export const AboutSelector = () => {
  const [isNavigating, setIsNavigating] = useState(false);
  const [selectedOption, setSelectedOption] = useSearchParamsState({
    defaultValue: defaultOption,
    key: "selectedAboutOption",
  });

  const selectNextOption = () => {
    const currentIndex = aboutSelectorOptions.findIndex(
      (option) => selectedOption?.to === option.to
    );
    const nextIndex = (currentIndex + 1) % aboutSelectorOptions.length;

    setSelectedOption(aboutSelectorOptions[nextIndex]);
  };

  const selectPreviousOption = () => {
    const currentIndex = aboutSelectorOptions.findIndex(
      (option) => selectedOption?.to === option.to
    );
    const previousIndex =
      (currentIndex - 1 + aboutSelectorOptions.length) %
      aboutSelectorOptions.length;
    setSelectedOption(aboutSelectorOptions[previousIndex]);
  };

  const router = useRouter();

  useKeyListener({
    keys: ["j", "ArrowDown", "s"],
    activeWhen: true,
    handler: () => {
      selectNextOption();
    },
    onKey: "down",
  });

  useKeyListener({
    keys: ["k", "ArrowUp", "w"],
    activeWhen: true,
    handler: () => {
      selectPreviousOption();
    },
    onKey: "down",
  });

  useKeyListener({
    keys: ["Enter"],
    activeWhen: true,
    handler: () => {
      if (!isNavigating) {
        setIsNavigating(true);
        wait(300).then(() => {
          const to = selectedOption?.to;
          if (to) router.push(to);
        });
      }
    },
    onKey: "down",
  });

  return (
    <>
      <div className="ml-8 select-none">
        <p>Hi I{"'"}m Jon 👋,</p>
        <br />
        <p>I am a...</p>
        <br />
        <div>
          {aboutSelectorOptions.map((option) => {
            const isSelected = option.to === selectedOption?.to;
            return (
              <AboutSelectorOption
                option={option}
                key={option.to}
                isSelected={isSelected}
                isNavigating={isNavigating}
                onClick={(option) => {
                  if (isNavigating) return;
                  if (isSelected) {
                    setIsNavigating(true);
                    wait(300).then(() => {
                      router.push(option.to);
                    });
                  } else {
                    setIsNavigating(false);
                    setSelectedOption(option);
                  }
                }}
              />
            );
          })}
          <br />
          <p>[ Please Pick With Arrows Or Mouse ]</p>
          <br />
          <br />
          <p>[ I use vim btw... ]</p>
        </div>
      </div>
    </>
  );
};
