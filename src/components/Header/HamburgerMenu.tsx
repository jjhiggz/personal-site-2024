import { links } from "@/app/constants";
import useClickOutside from "@/app/hooks/useClickOutside";
import useKeyListener from "@/app/hooks/useKeyListener";
import Link from "next/link";
import { Dispatch, SetStateAction, useRef } from "react";

export const HamburgerMenuNavLink = ({
  to,
  text,
}: {
  to: string;
  text: string;
}) => {
  return (
    <div className="w-full bg-slate-300">
      <Link
        href={to}
        className="text-black flex justify-center items-center shadow-sm shadow-slate-600 hover:bg-slate-400"
      >
        {text}
      </Link>
    </div>
  );
};

export const HamburgerMenu = ({
  setShowHamburger,
  showHamburger,
}: {
  setShowHamburger: Dispatch<SetStateAction<boolean>>;
  showHamburger: boolean;
}) => {
  const $hamburgerRef = useRef(null);

  useClickOutside($hamburgerRef, () => setShowHamburger(false));

  useKeyListener({
    activeWhen: showHamburger,
    handler: () => {
      setShowHamburger(false);
    },
    keys: ["Escape"],
    onKey: "down",
  });

  return (
    <div
      className="absolute z-10 mt-12 w-full p-0 md:hidden"
      ref={$hamburgerRef}
    >
      {links.map((link) => (
        <HamburgerMenuNavLink to={link.to} text={link.text} key={link.to} />
      ))}
    </div>
  );
};
