import React from "react";
import { LoadingPage } from "./shared";

export const LoadComponent = (Component: React.ComponentType) => {
  return (
    <React.Suspense fallback={<LoadingPage />}>
      <Component />
    </React.Suspense>
  );
};

