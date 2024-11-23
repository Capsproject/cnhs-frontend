export type FormModal = {
  show: boolean;
  selectedData?: any;
  formType?: "add" | "update" | "view" | "view-response" | "delete";
  disableDC?: boolean;
};

export enum UserRoles {
  SUPERADMIN = "superadmin",
  teacher = "teacher",
  student = "student",
}
