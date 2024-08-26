import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "@/types/user";

type AuthData = { authToken: string; user: User, profile: string };

export type AuthStore = {
  authToken?: string;
  user?: User;
  profile?: string;
  SET_AUTH_USER: (user: AuthData["user"]) => void;
  SET_AUTH_DATA: (data: AuthData) => void;
  GET_AUTH_DATA: () => AuthData;
  CLEAR_AUTH_DATA: () => void;
  IS_AUTHENTICATED: () => boolean;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      authToken: undefined,
      user: undefined,
      SET_AUTH_USER: (user: AuthData["user"]) => {
        return set({
          user: user,
        });
      },
      SET_AUTH_DATA: (data: AuthData) => {
        return set({
          authToken: data.authToken,
          user: data.user,
          profile: data.profile,
        });
      },
      GET_AUTH_DATA: () => {
        return {
          authToken: get().authToken!,
          user: get().user!,
          profile: get().profile!,
        };
      },
      CLEAR_AUTH_DATA: () => {
        return set({
          authToken: undefined,
          user: undefined,
        });
      },
      IS_AUTHENTICATED: () => {
        return Boolean(get().authToken !== undefined && get().user !== undefined);
      },
    }),
    {
      name: "auth-store",
    }
  )
);
