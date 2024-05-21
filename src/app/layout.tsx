import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twcx } from "@/utils/tailwind-helpers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jon Higger Software Developer",
  description: "Jon Higger is a Cool Programmer let's go",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark text-white">
      <body className={twcx(inter.className, "dark")}>{children}</body>
    </html>
  );
}
