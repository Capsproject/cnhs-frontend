import React from "react";
import { Outlet, Link } from "react-router-dom";
import LOGO from "../assets/logo.png";

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
    to: "/dashboard/events",
  },
  {
    title: "Calendar",
    to: "/dashboard/calendar",
  }
]

export const AdminLayout: React.FC = () => {
  return (
    <div className="w-screen h-screen relative">
      
      <div className="w-[300px] h-screen bg-orange-500 fixed top-0 left-0 drop-shadow-md px-5 py-5">
        
        <div className="w-full h-[60px] flex flex-row justify-center items-center gap-x-1 mb-5">
          <img src={LOGO} className="w-[50px]" alt="" />
          <h1 className="text-black text-sm font-medium">
          CINHS Student Portal
          </h1>
        </div>
    
      
          <div className="flex flex-col gap-y-3 ">
          {navLinksAdmin.map((link)=>(
            <Link
              to={link.to}
              className="text-xs text-white hover:text-slate-700 hover:bg-orange-200 rounded-md p-3 focus:bg-orange-200 focus:text-slate-900"
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
