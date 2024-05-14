"use client";
import { ReactNode } from "react";
import useKeyListener from "@/hooks/useKeyListener";
import { useRouter } from "next/navigation";

export const TerminalLayout = ({
  command = "whomai",
  path = "",
  content,
  enableBackButton = false,
}: {
  command?: string;
  path: string;
  content: ReactNode;
  enableBackButton?: boolean;
}) => {
  const router = useRouter();

  useKeyListener({
    keys: ["Backspace"],
    activeWhen: enableBackButton,
    onKey: "down",
    handler: () => {
      router.back();
    },
  });

  return (
    <div className="bg-black text-white p-4 rounded-lg shadow-lg h-full">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <span className="text-green-400 mr-2">$</span>
          <span className="text-yellow-200">{command}</span>
        </div>
        <div className="text-sm text-gray-400">~/{path}</div>
      </div>
      {content}
    </div>
  );
};
