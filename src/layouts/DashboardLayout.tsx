import React from "react";
import { Outlet } from "react-router-dom";
import { useAuthStore } from "@/stores";
import { TiCalendarOutline } from "react-icons/ti";
import { GrDocumentConfig } from "react-icons/gr";
import { TfiAnnouncement } from "react-icons/tfi";
import { VscFeedback } from "react-icons/vsc";
import { BiMessageSquareDots } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";
import { FaCalendarAlt } from "react-icons/fa";
import { Sidenav } from "@/components/layouts/Sidenav";
import { IS_NOTEACHER, IS_SUPERADMIN } from "@/components/constants";
const ICON_SIZE = 20;
const navLinks = [
  {
    icon: <TfiAnnouncement size={ICON_SIZE} />,
    title: "Anouncements",
    to: "/dashboard/announcements",
    show: true,
  },
  {
    icon: <TiCalendarOutline size={ICON_SIZE} />,
    title: "Events",
    to: "/dashboard/events",
    show: true,
  },
  {
    icon: <GrDocumentConfig size={ICON_SIZE} />,
    title: "Enrollment Status",
    to: "/dashboard/enrollment",
    show: IS_SUPERADMIN,
  },
  {
    icon: <GrDocumentConfig size={ICON_SIZE} />,
    title: "Grades",
    to: "/dashboard/grades",
    show: true,
  },
  {
    icon: <VscFeedback size={ICON_SIZE} />,
    title: "Feedback",
    to: "/dashboard/feedbacks",
    show: IS_NOTEACHER,
  },
  {
    icon: <BiMessageSquareDots size={ICON_SIZE} />,
    title: "Messages",
    to: "/dashboard/messages",
    show: true,
  },
  {
    icon: <FcAbout size={ICON_SIZE} />,
    title: "About",
    to: "/dashboard/about",
    show: true,
  },
  {
    icon: <FaCalendarAlt size={ICON_SIZE} />,
    title: "Calendar",
    to: "/dashboard/calendar",
    show: true,
  },
];
export const DashboardLayout: React.FC = () => {
  const { IS_AUTHENTICATED, user } = useAuthStore();

  React.useLayoutEffect(() => {
    if (!IS_AUTHENTICATED()) {
      window.location.href = "/auth/signin";
    }
    if (user?.user_role.name === "superadmin") {
      window.location.href = "/admin/manage-account";
    }
  }, [user, IS_AUTHENTICATED]);
  return (
    <div className="flex-1 flex flex-row">
      <Sidenav items={navLinks} />
      <div className="h-screen  bg-slate-200 px-10 py-5 w-screen overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};
