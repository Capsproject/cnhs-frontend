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
  user_role: {
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: null;
  
  };
  
};

export type UserForm = {
  name: string;
  email: string;
  password: string;
  userRoleId: number;
}