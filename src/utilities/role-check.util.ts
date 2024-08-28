import { useAuthStore } from "@/stores/auth.store";

export const roleUtils = {
  checkRole: (role: string | string[], checkMultipleRole: boolean = false) => {
    const { user } = useAuthStore.getState();

    if (!user) return false;

    if (checkMultipleRole) {
      //
    }

    return user?.user_role.name === role;
  },
};
