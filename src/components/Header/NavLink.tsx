"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const getIsActive = (pathname: string, to: string) => {
  return pathname.includes(to);
};

export const NavLink = ({ to, text }: { to: string; text: string }) => {
  const pathname = usePathname();
  const isActive = getIsActive(pathname, to);
  if (!isActive)
    return (
      <Link
        href={to}
        className="hover:scale-105 p-0.5 px-2 border-2 border-white flex items-center"
      >
        {text}
      </Link>
    );
  return (
    <Link
      href={to}
      className="bg-white text-black p-0.5 px-2 flex items-center cursor-not-allowed"
    >
      {text}
    </Link>
  );
};
