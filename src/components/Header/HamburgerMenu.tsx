import { links } from "@/app/constants";
import useClickOutside from "@/hooks/useClickOutside";
import useKeyListener from "@/hooks/useKeyListener";
import { getIsActive } from "@/utils/route-helpers";
import { twcx } from "@/utils/tailwind-helpers";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useRef } from "react";

export const HamburgerMenuNavLink = ({
  to,
  text,
}: {
  to: string;
  text: string;
}) => {
  const path = usePathname();
  const isActive = getIsActive(path, to);

  return (
    <div className="w-full bg-slate-300 ">
      <Link
        href={to}
        className={twcx(
          "text-black flex justify-center items-center shadow-sm shadow-slate-600hover:bg-slate-400 h-10",
          {
            "bg-slate-500": isActive,
            "text-white": isActive,
            "hover:bg-slate-400": !isActive,
          }
        )}
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
      className="absolute z-50 mt-12 w-full p-0 md:hidden"
      ref={$hamburgerRef}
    >
      {links.map((link) => (
        <HamburgerMenuNavLink to={link.to} text={link.text} key={link.to} />
      ))}
    </div>
  );
};
