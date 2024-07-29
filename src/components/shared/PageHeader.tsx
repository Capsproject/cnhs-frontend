import { useAuthStore } from "@/stores/auth.store";
import { Breadcrumb, Button } from "antd";
import React from "react";
import { LogoutOutlined } from "@ant-design/icons";
import { AuthService } from "@/services/auth.service";
type Props ={
    title?: string;
    subtitle?: string;
    breadcrumbs?: Array<string>;
    children?: React.ReactNode;
}
export const PageHeader: React.FC<Props> = (props) => {
    const breadcrumbsItems = ["dashboard-home"]
    // const role = useAuthStore.getState().user?.userRole
    const userRole : any = useAuthStore.getState().user?.user_role;
   
    const isAdmin = () => {
        return userRole?.name === "superadmin";
    }

    React.useEffect(() => {
        if(props.breadcrumbs) {
            props.breadcrumbs.forEach((crumb) => breadcrumbsItems.push(crumb))
        }
    }, [])
    return (
        <div className="flex bg-white justify-center drop-shadow-md flex-row max-md:flex-col max-md:gap-8 items-center px-5 mb-4 py-2 rounded-md">
      <div className="w-full lex flex-col gap-1">
        <Breadcrumb>
          <Breadcrumb.Item className="capitalize">
            <span className="text-xs">{isAdmin() ? 'Admin' : 'Dashboard Page'}</span>
          </Breadcrumb.Item>

          {props.breadcrumbs?.length
            ? props.breadcrumbs.map((item) => (
                <Breadcrumb.Item key={`breadcrumb-item-${item}`} className="capitalize">
                  <span className="text-xs">{item.replace(/-/g, " ")}</span>
                </Breadcrumb.Item>
              ))
            : null}
        </Breadcrumb>

        <h1 className="text-xl">{props.title}</h1>
        <p className="text-sm text-gray-600">{props.subtitle}</p>
      </div>
      {props.children ? <div className="w-full">{props.children}</div> : null}
      <div className="flex items-center justify-center">
        <Button type="primary" className="mr-2 bg-orange-500 hover:bg-orange-400 focus:bg-orange-200"  onClick={AuthService.logOut}>
        <LogoutOutlined />
          Logout
        </Button>
      </div>
    </div>
    )
}