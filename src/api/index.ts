import { useAuthStore } from "@/stores/auth.store";
import axios, { AxiosInstance, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_APIENV,
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    /**
     * Set Headers
     */
    const token = useAuthStore.getState().GET_AUTH_DATA().authToken;

    config.headers["Accept"] = "application/json";
    config.headers["X-API-KEY"] = `${import.meta.env.VITE_APP_APIKEY}`.toUpperCase();
    config.headers["Authorization"] = `Bearer ${token}`; // For Security API 
    if (config.data && !(config.data instanceof FormData)) {
      config.headers["Content-Type"] = "application/json";
    }
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error: AxiosError): Promise<AxiosError> => {
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        console.error('Unauthorized');
        // window.location.href = "/auth/signin";
      }
      if (status === 500) {
        console.error({
          message: "Error",
          description: "Server error occured!",
        });
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
