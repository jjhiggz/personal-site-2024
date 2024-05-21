import { PageLayout } from "@/components/Layouts/PageLayout";
import { images } from "../images";

import { ReactNode, Suspense } from "react";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Suspense>
      <PageLayout backgroundImage={images.backgrounds.background4}>
        {children}
      </PageLayout>
    </Suspense>
  );
}
