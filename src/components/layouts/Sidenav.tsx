import React from "react";
import BRAND_LOGO from "@/assets/logo.png";
import { SidenavItems } from "./SidenavItems";
type Props = {
  onLinkClick?: () => void;
  items: any[];
};

export const Sidenav: React.FC<Props> = (props) => {
  return (
    <>
      <div className="h-screen bg-orange-500 text-white p-4 space-y-4 flex flex-col transition-all duration-300 lg:w-[300px] ease-in-out">
        <div className="hidden lg:flex md:flex w-full h-[60px] justify-center items-center gap-x-1 my-5 flex-nowrap flex-col">
          <img src={BRAND_LOGO} className="w-[80px]"        alt="Logo" />
          <h1 className="text-white text-sm font-extrabold pt-2">
            CINHS Student Portal
          </h1>
        </div>
        <div className="flex flex-col gap-y-3">
          <SidenavItems onLinkClick={props.onLinkClick} items={props.items} />
        </div>
      </div>
    </>
  );
};
