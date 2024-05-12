"use client";
import { useState } from "react";
import { Nav } from "./Nav";
import { HamburgerMenu } from "./HamburgerMenu";

export const Header = () => {
  const [showHamburger, setShowHamburger] = useState(false);

  return (
    <>
      <header className="h-12 w-full border-1 shadow-sm shadow-neutral-300 border-gray-400 text-white flex  bg-black z-10 bg-opacity-90 justify-between items-center">
        <h1 className="font-mono justify-between pl-2 text-2xl">Jon Higger</h1>
        <Nav
          setShowHamburger={setShowHamburger}
          showHamburger={showHamburger}
        />
      </header>
      {showHamburger && (
        <HamburgerMenu
          setShowHamburger={setShowHamburger}
          showHamburger={showHamburger}
        />
      )}
    </>
  );
};
