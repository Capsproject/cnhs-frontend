import { roleUtils } from "@/utilities/role-check.util"

export const USER_ROLES = {
  SUPERADMIN : 'superadmin',
  TEACHER : 'teacher',
  STUDENT : 'student',
}

export const IS_SUPERADMIN = roleUtils.checkRole(USER_ROLES.SUPERADMIN);
export const IS_TEACHER = roleUtils.checkRole(USER_ROLES.TEACHER);
export const IS_STUDENT = roleUtils.checkRole(USER_ROLES.STUDENT);
export const IS_NOTEACHER = roleUtils.checkRole([USER_ROLES.STUDENT, USER_ROLES.SUPERADMIN]);