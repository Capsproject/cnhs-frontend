import React from "react";
import { Outlet, Link } from "react-router-dom";
import { APP_TITLE } from "@/constants";
import { sidebarLinks } from "@/static";
import BRAND_LOGO from "@/assets/logo.png";

export const AdminLayout: React.FC = () => {
  return (
    <div className="w-screen h-screen relative">
      <div className="w-[300px] h-screen bg-orange-500 fixed top-0 left-0 drop-shadow-md px-5 py-5">
        <div className="w-full h-[60px] flex flex-row justify-center items-center gap-x-1 mb-5">
          <img src={BRAND_LOGO} className="w-[50px]" alt="" />
          <h1 className="text-black text-sm font-medium">{APP_TITLE}</h1>
        </div>

        <div className="flex flex-col gap-y-3 ">
          {sidebarLinks.admin.map((link) => (
            <Link
              to={link.to}
              className="text-xs text-white hover:text-slate-700 hover:bg-orange-200 rounded-md p-3 focus:bg-orange-200 focus:text-slate-900"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full h-screen bg-slate-200 ml-[300px] px-10 py-5">
        <div className="w-full h-[70px] flex items-center border-b-2 border-slate-800 px-5">
          <small className="">Dashboard &gt; Overview</small>
        </div>

        <Outlet />
      </div>
    </div>
  );
};
