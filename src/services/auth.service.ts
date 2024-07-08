import { credentials } from "../types/auth";
import http from "@/api/index";
import React from "react";
import { useAuthStore } from "@/stores/auth.store";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
export const AuthService = {
    requestOtp: async function (formData: { identifier: string }, setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
        console.log({ formData, setLoading });
    },
    // requestOtp: async funtion (formData: { identifier: string }, setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
    //     console.log({formData, setLoading});
    // }

    authenticateCredentials: async function(credentials : credentials, setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
        return await http
        .post("/auth/login", credentials)
        .then((response)=> {
            const { SET_AUTH_DATA } = useAuthStore.getState();
            const { token, user } = response.data;

            SET_AUTH_DATA({ authToken: token, user });
            setTimeout(() => {
                window.location.href = "/dashboard";
            }, 5000);
        })
        .catch((error) => {
            if(error instanceof AxiosError) {
                if(error.response?.status === 401) {
                    toast.error("Login failed, invalid credentials provided");
                }
            }
        setLoading(false);
        })
        
    },
    logOut() {
        const { CLEAR_AUTH_DATA } = useAuthStore.getState();
        CLEAR_AUTH_DATA();
        window.location.href = "/auth/login";
    }
}