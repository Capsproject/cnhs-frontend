import { credentials } from "../types/auth";
import http from "@/api/index";
import React from "react";
import { useAuthStore } from "@/stores/auth.store";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
export const AuthService = {
  requestOtp: async function (
    formData: { email: string },
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    

    return await http.post("/auth/request-otp", formData)
    .then(() => {
        window.location.href = "/auth/verify-otp";
    toast.success("Request OTP sent to email....");
    })
    .catch((error) => {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          toast.error("Request OTP failed, invalid credentials provided");
        }
        if (error.response?.status === 404) {
          toast.error("Request OTP failed, user not found");
        }
        if (error.response?.status === 500) {
          toast.error("Request OTP failed, server error");
        }
        if (error.response?.status === 200) {
          toast.success("Request OTP sent to email....");
      }
    }
      setLoading(false);
    });
  },
  authenticateCredentials: async function (
    credentials: credentials,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    return await http
      .post("/auth/login", credentials)
      .then((response) => {
        const { SET_AUTH_DATA } = useAuthStore.getState();

        const { token, user } = response.data;
        SET_AUTH_DATA({
          authToken: token,
          user
        });
        toast.success("Login successful, redirecting...");
        const userRole = useAuthStore.getState().GET_AUTH_DATA().user
          .user_role.name;
        if (userRole === "superadmin") {
          setTimeout(() => {
            window.location.href = "/admin/manage-account";
          }, 5000);
        } else {
          setTimeout(() => {
            window.location.href = "/dashboard/announcements";
          }, 5000);
        }
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          if (error.response?.status === 401) {
            toast.error("Login failed, invalid credentials provided");
          }
        }
        setLoading(false);
      });
  },
  logOut() {
    const { CLEAR_AUTH_DATA } = useAuthStore.getState();
    CLEAR_AUTH_DATA();
    window.location.href = "/auth/signin";
  },
};
