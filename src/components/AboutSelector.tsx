"use client";
import { LinkData } from "@/app/types";
import useKeyListener from "@/hooks/useKeyListener";
import {
  SetSearchParams,
  useSearchParamsState,
} from "@/hooks/useSearchParamsState";
import { wait } from "@/utils/wait";
import { useRouter } from "next/navigation";

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
  setSelectedOption: SetSearchParams<LinkData>;
}) => {
  const router = useRouter();
  const goToRoute = () => {
    setSelectedOption(option);
    wait(500).then(() => {
      router.push(option.to);
    });
  };

  useKeyListener({
    keys: ["Enter"],
    activeWhen: isSelected,
    handler: () => {
      goToRoute();
    },
    onKey: "down",
  });

  if (isSelected) {
    return (
      <p
        className="text-green-400 cursor-pointer "
        onClick={() => {
          goToRoute();
        }}
      >
        ➡️ [[{option.text}]]
      </p>
    );
  }

  return (
    <>
      <span>
        <p
          className="cursor-pointer hover:text-green-300 w-auto"
          onClick={() => {
            goToRoute();
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

  return (
    <>
      <div className="ml-8">
        <p>Hi I{"'"}m Jon 👋,</p>
        <br />
        <p>I am a...</p>
        <br />
        <div>
          {aboutSelectorOptions.map((option) => (
            <AboutSelectorOption
              option={option}
              key={option.to}
              isSelected={option.to === selectedOption?.to}
              setSelectedOption={setSelectedOption}
            />
          ))}
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
