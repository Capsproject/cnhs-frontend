export type User = {
  id: number;
  name: string;
  email: string;
  lastSignin: string;
  isVerified: boolean;
  userRoleId: null;
  departmentId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
  userRole: null;
};

export type UserForm = {
  name: string;
  email: string;
  password: string;
  userRoleId: number;
}