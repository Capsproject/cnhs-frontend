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
  profile: string;
  user_role: Role
};

export type UserForm = {
  name: string;
  email: string;
  password: string;
  userRoleId: number;
};

export type Role = {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
};
