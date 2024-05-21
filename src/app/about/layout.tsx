import { PageLayout } from "@/components/Layouts/PageLayout";
import { ReactNode, Suspense } from "react";
import { images } from "../images";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Suspense>
      <PageLayout backgroundImage={images.backgrounds.background2}>
        {children}
      </PageLayout>
    </Suspense>
  );
}
