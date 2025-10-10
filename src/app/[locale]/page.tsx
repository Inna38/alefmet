import React, { Suspense } from "react";

const AboutPage = React.lazy(() => import("@/components/AboutPage/AboutPage"));

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <AboutPage />
      </div>
    </Suspense>
  );
}
