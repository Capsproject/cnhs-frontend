import React from "react";
import { Outlet } from "react-router-dom";
import { Card } from "antd";
import LOGO from "../assets/logo.png";

export const AuthLayout: React.FC = () => {
  return (
    <div className="w-50 h-screen flex flex-col gap-y-4 justify-center items-center bg-amber-400 relative ">
      <img
        src={LOGO}
        alt="brand-logo.png"
        className="w-50 h-50 object-contain"
      />
      <Card className="w-[400px] bg-slate-100 drop-shadow-xl">
        <Outlet />
      </Card>

      <small className="text-xs text-slate-500 absolute bottom-2 left-2">
        Version 1.0.1 (beta)
      </small>
    </div>
  );
};
