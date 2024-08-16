import { useAuthStore } from "@/stores";
import React from "react";
import BRAND_LOGO  from "@/assets/logo.png";
import { SidenavItems } from "./SidenavItems";
type Props = {
    onLinkClick?: () => void;
    items: any[];
}

export const Sidenav: React.FC<Props> = (props) => {
    const { user } = useAuthStore();
    const getUserRole = () => {
        if(user) {
            return user.user_role.name.toUpperCase().replace("_", " ");
        }
    }
    return (
        <>
            <div className="h-screen bg-orange-500 text-white p-4 space-y-4 w-[300px] flex flex-col transition-all duration-300 ease-in-out">
    <div className="w-full h-[60px] justify-center flex items-center gap-x-1 my-5 flex-nowrap flex-col">
        <img src={BRAND_LOGO} className="w-[80px]" alt="Logo" />
        <h1 className="text-black text-sm font-medium hidden sm:block">CINHS Student Portal</h1>
    </div>
    <div className="flex flex-col gap-y-3">
        <SidenavItems onLinkClick={props.onLinkClick} items={props.items} />
    </div>
</div>

        </>
    )
}