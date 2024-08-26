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
    authenticateCredentials: async function(credentials : credentials, setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
        return await http
        .post("/auth/login", credentials)
        .then((response)=> {
            const { SET_AUTH_DATA } = useAuthStore.getState();
            
            const { token, user } = response.data;
            SET_AUTH_DATA({ authToken: token, user, profile: "https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-1/297982054_110277578449100_5557065508074026182_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeEECER5SdgxOvDUz2swizoz96SR1UAxGGP3pJHVQDEYY_AKKjdmu1o7bv8jkpG7N2BCVWKfHxwj1OHyNMrA7-5l&_nc_ohc=pf1CskdBhf0Q7kNvgFplufH&_nc_ht=scontent.fmnl30-1.fna&oh=00_AYBgmyF4s1jrb07QCM6ra0OSVdWheZ7hMcZJAdeL_7k9SA&oe=66C55E3F" });
            toast.success("Login successful, redirecting...");
            let userRole = useAuthStore.getState().GET_AUTH_DATA().user.user_role.name;
            if(userRole === "superadmin") {
                setTimeout(() => {
                    window.location.href = "/admin/manage-account";
                }, 5000);
            }else  {
                setTimeout(() => {
                    window.location.href = "/dashboard";
                }, 5000);
            }
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
        window.location.href = "/auth/signin";
    }
}