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
export const IS_NOTEACHER = roleUtils.checkRole([
  USER_ROLES.STUDENT,
  USER_ROLES.SUPERADMIN,
]);

export const gradeLevel: KeyValuePair[] = [
  { 
    value: "1", 
    label: "Grade 1" 
  },
  {
    value: "2",
    label: "Grade 2",
  },
  {
    value: "3",
    label: "Grade 3",
  },
  {
    value: "4",
    label: "Grade 4",
  },
  {
    value: "5",
    label: "Grade 5",
  },
  {
    value: "6",
    label: "Grade 6",
  },
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
  {
    value: "11",
    label: "Grade 11",
  },
  {
    value: "12",
    label: "Grade 12",
  },
];
