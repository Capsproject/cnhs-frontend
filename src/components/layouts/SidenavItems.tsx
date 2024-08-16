import React from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {
    onLinkClick?: () => void;
    items: any[];
}


export const SidenavItems: React.FC<Props> = (props) => {
    const { pathname } = useLocation();
    const { items } = props;

    const isSidebarActive = (path: string) => {
        return path == pathname;
    }
    return (
      <div className="flex flex-col align-middle">
      
      {items
        .filter((link) => link.show)
        .map((link) => (
          <Link
            onClick={props.onLinkClick}
            to={link.to}
            key={`sidebar-link-${link.title}`}
            className={`text-sm p-3 rounded-md mb-3 flex items-center hover:text-slate-700 hover:bg-orange-200 focus:bg-orange-200 focus:text-slate-900 ${
              isSidebarActive(link.to) ? "bg-orange-200 text-slate-900" : "text-white"
            }`}
          >
            {link.icon}
            <span className="hidden md:block ml-2">
              {link.title}
            </span>
          </Link>
        ))}
    </div>
    
    )
}