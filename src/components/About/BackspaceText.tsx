"use client";
import { useRouter } from "next/navigation";

export const BackspaceText = () => {
  const router = useRouter();

  return (
    <>
      <div
        className="cursor-pointer hover:text-green-200 [&:not(:hover)]:animate-blink text-center hidden md:flex"
        onClick={() => router.back()}
      >
        [Press Backspace to Return]
      </div>
      <div
        className="cursor-pointer  text-center  md:hidden border-white border-2   hover:bg-white hover:text-black"
        onClick={() => router.back()}
      >
        Go Back
      </div>
    </>
  );
};
