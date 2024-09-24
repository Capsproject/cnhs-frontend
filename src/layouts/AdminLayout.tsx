import React from "react";
import { Outlet } from "react-router-dom";
import { useAuthStore } from "@/stores";
import { Sidenav } from "@/components/layouts/Sidenav";
import { TiCalendarOutline, TiUserOutline } from "react-icons/ti";
import { TfiAnnouncement } from "react-icons/tfi";
import { GrDocumentConfig } from "react-icons/gr";
import { VscFeedback } from "react-icons/vsc";
import { BiMessageSquareDots } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { ScheduleOutlined } from "@ant-design/icons";

const ICON_SIZE = 20;
const navLinksAdmin = [
  {
    icon: <TiUserOutline size={ICON_SIZE} />,
    title: "Manage Account",
    to: "/admin/manage-account",
    show: true,
  },
  {
    icon: <GrDocumentConfig size={ICON_SIZE} />,
    title: "Enrollment Status",
    to: "/admin/manage-enrollment",
    show: true,
  },
  {
    icon: <TfiAnnouncement size={ICON_SIZE} />,
    title: "Anouncements",
    to: "/admin/manage-announcements",
    show: true,
  },
  {
    icon: <TiCalendarOutline size={ICON_SIZE} />,
    title: "Events",
    to: "/admin/manage-event",
    show: true,
  },
  {
    icon: <VscFeedback size={ICON_SIZE} />,
    title: "Feedback",
    to: "/admin/feedbacks",
    show: true,
  },
  {
    icon: <ScheduleOutlined size={ICON_SIZE}/>,
    title: "Sections",
    to: "/admin/sections",
    show: true,
  },
  {
    icon: <BiMessageSquareDots size={ICON_SIZE} />,
    title: "Messages",
    to: "/admin/messages",
    show: true,
  },
  {
    icon: <FaCalendarAlt size={ICON_SIZE} />,
    title: "Calendar",
    to: "/admin/calendar",
    show: true,
  },
];

export const AdminLayout: React.FC = () => {
  const { IS_AUTHENTICATED } = useAuthStore();

  React.useLayoutEffect(() => {
    if (!IS_AUTHENTICATED()) {
      window.location.href = "/auth/signin";
    }
  }, [IS_AUTHENTICATED]);
  return (
    <>
      <div className="flex-1 flex flex-row">
        <Sidenav items={navLinksAdmin} />
        <div className="h-screen  bg-slate-200 px-10 py-5 w-screen ">
          <Outlet />
        </div>
      </div>
    </>
  );
};
