import { PageLayout } from "@/components/Layouts/PageLayout";
import { ReactNode } from "react";
import { images } from "../images";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <PageLayout backgroundImage={images.backgrounds.background2}>
      {children}
    </PageLayout>
  );
}
