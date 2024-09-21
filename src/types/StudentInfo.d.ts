import { StudentGrades } from "./StudentGrades";

export type StudentInfo = {
  name?: string
  firstName?: string;
  lastName?: string;
  middleName?: string;
  profile_picture?: string;
  gradeLevel?: string;
  section?: string;
  studentNumber?: number;
  grades?: StudentGrades[];
  finalGrade?: number;
  birthdate?: Date | string;
  contactNumber?: string;
  email?: string;
  gender?: string;

}