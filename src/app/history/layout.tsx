import { PageLayout } from "@/components/Layouts/PageLayout";
import { images } from "../images";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <PageLayout backgroundImage={images.backgrounds.background3}>
      {children}
    </PageLayout>
  );
}
