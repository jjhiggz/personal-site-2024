import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PageLayout } from "@/components/Layouts/PageLayout";
import { images } from "./images";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jon Higger Software Developer",
  description: "Jon Higger is a Cool Programmer let's go",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
