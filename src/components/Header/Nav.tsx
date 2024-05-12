"use client";
import { links } from "@/app/constants";
import { NavLink } from "@/components/Header/NavLink";
import { Dispatch, SetStateAction } from "react";

export const Nav = ({
  showHamburger,
  setShowHamburger,
}: {
  setShowHamburger: Dispatch<SetStateAction<boolean>>;
  showHamburger: boolean;
}) => {
  return (
    <>
      {/* md - lg navbar */}
      <nav className="w-1/3  justify-evenly font-mono hidden md:flex">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} text={link.text} />
        ))}
      </nav>
      {/* sm navbar */}
      <nav className="flex justify-evenly font-mono md:hidden">
        <button
          className="bg-gray-800 p-1 px-2 mr-3 cursor-pointer rounded-lg flex items-center justify-center select-none hover:bg-gray-700"
          onClick={() => {
            setShowHamburger(!showHamburger);
          }}
        >
          {showHamburger ? "🌭" : "🍔"}
        </button>
      </nav>
    </>
  );
};
