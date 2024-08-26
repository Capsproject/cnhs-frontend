import React from "react";
import { Outlet, Link } from "react-router-dom";
import LOGO from "../assets/logo.png";
import { Card } from "antd";
import { useAuthStore } from "@/stores";
const navLinksAdmin = [
  {
    title: "Enrollment Status",
    to: "/dashboard/quizzes",
  },
  {
    title: "Anouncements",
    to: "/dashboard/exams",
  },
  {
    title: "Events",
    to: "/dashboard/teacher-accounts",
  },
  {
    title: "Feedback",
    to: "/dashboard/student-accounts",
  },
  {
    title: "Messages",
    to: "/dashboard/messages",
  },
  {
    title: "Calendar",
    to: "/dashboard/calendar",
  }
]

export const DashboardLayout: React.FC = () => {
  const { IS_AUTHENTICATED } = useAuthStore();

  React.useLayoutEffect(() => {
    if(!IS_AUTHENTICATED()){
      window.location.href = "/auth/signin";
    }
  }, [IS_AUTHENTICATED]);
  return (
    <div className="w-screen h-screen relative">
      
      <div className="w-[300px] h-screen bg-slate-200 fixed top-0 left-0 drop-shadow-md px-5 py-5">
        <Card className="flex flex-col justify-center items-center mb-5 bg-orange-500">
        <div className="w-full h-[60px] flex flex-row justify-center items-center gap-x-1 mb-5">
          <img src={LOGO} className="w-[50px]" alt="" />
          <h1 className="text-black text-sm font-medium">
          CINHS Student Portal
          </h1>
        </div>
        </Card>
        <Card className="bg-orange-500">
          <div className="flex flex-col gap-y-3 ">
          {navLinksAdmin.map((link)=>(
            <Link
              to={link.to}
              className="text-xs text-white hover:text-slate-700 hover:bg-orange-200 rounded-md p-3 focus:bg-orange-500 focus:text-white"
            >
              {link.title}
            </Link>
          ))}
 
        </div>
        </Card>

        
      </div>

      <div className="w-full h-screen bg-slate-200 ml-[300px]">
        <div className="w-full h-[70px] flex items-center border-b-2 border-slate-800 px-5">
          <small className="">Dashboard &gt; Overview</small>
        </div>

        <Outlet />
      </div>
    </div>
  );
};
