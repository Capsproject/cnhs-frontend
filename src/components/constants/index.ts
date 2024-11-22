import { KeyValuePair } from "@/types/value-pair";
import { roleUtils } from "@/utilities/role-check.util";

export const USER_ROLES = {
  SUPERADMIN: "superadmin",
  TEACHER: "teacher",
  STUDENT: "student",
};

export const IS_SUPERADMIN = roleUtils.checkRole(USER_ROLES.SUPERADMIN);
export const IS_TEACHER = roleUtils.checkRole(USER_ROLES.TEACHER);
export const IS_STUDENT = roleUtils.checkRole(USER_ROLES.STUDENT);
export const IS_NOTTEACHER =
  roleUtils.checkRole(USER_ROLES.SUPERADMIN) ||
  roleUtils.checkRole(USER_ROLES.STUDENT);
export const IS_NOTADMIN = !roleUtils.checkRole(USER_ROLES.SUPERADMIN)

export const gradeLevel: KeyValuePair[] = [
  {
    value: "7",
    label: "Grade 7",
  },
  {
    value: "8",
    label: "Grade 8",
  },
  {
    value: "9",
    label: "Grade 9",
  },
  {
    value: "10",
    label: "Grade 10",
  },
];
