import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import LOGO from "../assets/logo.png";
import { useAuthStore } from "@/stores";

const navLinksAdmin = [
  {
    title: "Manage Account",
    to: "/admin/manage-account",
  },
  {
    title: "Enrollment Status",
    to: "/dashboard/quizzes",
  },
  {
    title: "Anouncements",
    to: "/admin/manage-announcements",
  },
  {
    title: "Events",
    to: "/admin/manage-event",
  },
  {
    title: "Feedback",
    to: "/dashboard/student-accounts",
  },
  {
    title: "Messages",
    to: "/admin/messages",
  },
  {
    title: "Calendar",
    to: "/dashboard/calendar",
  }
]

export const AdminLayout: React.FC = () => {
  const { IS_AUTHENTICATED } = useAuthStore();

  React.useLayoutEffect(() => {
    if(!IS_AUTHENTICATED()){
      window.location.href = "/auth/signin";
    }
  }, [IS_AUTHENTICATED]);
  const [activeLink, setActiveLink] = useState(null); // State to track active menu item

  const handleItemClick = (index: any) => {
    setActiveLink(index); // Set the active link when clicked
  };
  return (
    <div className="w-screen h-screen relative">
      
      <div className="w-[300px] h-screen bg-orange-500 fixed top-0 left-0 drop-shadow-md px-5 py-5">
      <div className="w-full h-[60px] flex flex-row justify-center items-center gap-x-1 mb-5">
        <img src={LOGO} className="w-[50px]" alt="Logo" />
        <h1 className="text-black text-sm font-medium">CINHS Student Portal</h1>
      </div>

      <div className="flex flex-col gap-y-3">
        {navLinksAdmin.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className={`text-xs p-3 rounded-md 
                        ${activeLink === index ? 'bg-orange-200 text-slate-900' : 'hover:text-slate-700 hover:bg-orange-200 focus:bg-orange-200 focus:text-slate-900 text-white'}`}
            onClick={() => handleItemClick(index)}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>

      <div className="h-screen bg-slate-200 ml-[300px] px-10 py-5">
        <Outlet />
      </div>
    </div>
  );
};
