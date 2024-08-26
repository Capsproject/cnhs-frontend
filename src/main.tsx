
import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import router from "./router";
import "react-toastify/dist/ReactToastify.css";
import { ConfigProvider } from "antd";


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  // const buttonCss = css` &.${rootPrefixCls}-btn-primary:not([disabled]):not(.${rootPrefixCls}-btn-dangerous) {
  //   &:hover {
  //     color: red
  //   }
  // }`  
  <ConfigProvider theme={{
    token: {
    "colorPrimary": "#fb923c",
    "colorInfo": "#fb923c",
    "colorPrimaryHover": "#fed7aa",
    "colorPrimaryTextHover": "", 
    },
    components: {
      Button: {
        textHoverBg: "black",
        colorPrimaryTextHover: "black",
      }
    }
  }}>
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <RouterProvider router={router} />
    <ToastContainer theme="colored" position="top-right"  />
  </QueryClientProvider>
  </ConfigProvider>
);
