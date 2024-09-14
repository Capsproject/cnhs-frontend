export type FormModal = { show: boolean; selectedData?: any , formType?: "add" | "update" | "view" | any };

export enum UserRoles {
  SUPERADMIN = "superadmin",
  teacher = "teacher",
  student = "student",
}
