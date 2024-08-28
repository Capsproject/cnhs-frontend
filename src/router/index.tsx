/* eslint-disable react-refresh/only-export-components */
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
const VerifyOTPPage = LoadComponent(
  React.lazy(() => import("@/views/auth/VerifyOtpPage"))
);
const RequestOtpPage = LoadComponent(
  React.lazy(() => import("@/views/auth/RequestOtpPage"))
)

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
const AccountSetting = LoadComponent(
  React.lazy(() => import("@/components/domain/account/AccountSettingPage"))
)
const FeedbacksPage = LoadComponent(
  React.lazy(() => import("@/views/admin/feedbacks/FeedbacksPage"))
)


/**
 * About
 */
const AboutPage = LoadComponent(
  React.lazy(() => import("@/views/about/AboutPage"))
)

/**
 * Messages Pages
 */
const MessagesPage = LoadComponent(
  React.lazy(() => import("@/views/messages/Messages"))
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
      {
        path: "/auth/verify-otp",
        element: VerifyOTPPage
      },
      {
        path: "/auth/request-otp",
        element: RequestOtpPage
      }
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
      {
        path: "/dashboard/announcements",
        element: ManageAnnouncementPage
      },
      {
        path: "/dashboard/messages",
        element: MessagesPage
      }
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
      },
      {
        path: "/admin/messages",
        element: MessagesPage
      },
      {
        path: "/admin/feedbacks",
        element: FeedbacksPage
      },
      {
        path: "/admin/account-setting",
        element: AccountSetting
      }
    ]
  }
]);
