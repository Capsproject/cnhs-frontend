import React from "react";
import BRAND_LOGO from "@/assets/logo.png";
export const LoadingPage: React.FC = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <img src={BRAND_LOGO} alt="brand-logo" className="h-auto w-[150px]" />
    </div>
  )
};
