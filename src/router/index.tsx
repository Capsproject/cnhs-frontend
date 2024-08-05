import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { LoadComponent } from "../components/LoadComponent";

/**
 * Layouts
 */
import { AuthLayout, DashboardLayout, AdminLayout } from "../layouts";


/**
 * Error Pages
 */
const ErrorPage = LoadComponent(
  React.lazy(() => import("../views/system/ErrorPage"))
);

/**
 * Auth Pages
 */
const SigninPage = LoadComponent(
  React.lazy(() => import("../views/auth/SigninPage"))
);

/**
 * Dashboard Pages
 */
const DashboardPage = LoadComponent(
  React.lazy(() => import("../views/dashboard/OverviewPage"))
);


/**
 * Admin Pages
 */
const ManageAccPage = LoadComponent(
  React.lazy(()=> import("../views/admin/accounts/ManageAccountPage"))
);
const ManageEventPage = LoadComponent(
  React.lazy(() => import("../views/admin/events/ManageEventPage"))
)
const ManageAnnouncementPage = LoadComponent(
  React.lazy(() => import("../views/admin/announcements/ManageAnnouncementPage"))
)

/**
 * About
 */
const AboutPage = LoadComponent(
  React.lazy(() => import("@/views/about/AboutPage"))
)

export default createBrowserRouter([
  {
    path: "*",
    element: ErrorPage,
  },
  {
    path: "/",
    element: <Navigate to="/auth/signin" />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/signin",
        element: SigninPage,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/overview",
        element: DashboardPage,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/manage-account",
        element: ManageAccPage,
      },
      {
        path: "/admin/manage-event",
        element: ManageEventPage
      },
      {
        path: "/admin/manage-announcements",
        element: ManageAnnouncementPage
      },
      {
        path: "/admin/about",
        element: AboutPage
      }
    ]
  }
]);
