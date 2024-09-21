import { StudentGrades } from "./types/StudentGrades";
import { StudentInfo } from "./types/StudentInfo";

export const DummyGrade: StudentGrades[] = [
  {
    subject: "Mathematics",
    grades: {
      firstQuarter: 85,
      secondQuarter: 88,
      thirdQuarter: 90,
      fourthQuarter: 92,
    },
  },
  {
    subject: "Science",
    grades: {
      firstQuarter: 78,
      secondQuarter: 80,
      thirdQuarter: 82,
      fourthQuarter: 85,
    },
  },
  {
    subject: "English",
    grades: {
      firstQuarter: 90,
      secondQuarter: 92,
      thirdQuarter: 91,
      fourthQuarter: 94,
    },
  },
  {
    subject: "History",
    grades: {
      firstQuarter: 75,
      secondQuarter: 76,
      thirdQuarter: 79,
      fourthQuarter: 80,
    },
  },
  {
    subject: "Art",
    grades: {
      firstQuarter: 88,
      secondQuarter: 90,
      thirdQuarter: 92,
      fourthQuarter: 95,
    },
  },
  {
    subject: "Physical Education",
    grades: {
      firstQuarter: 80,
      secondQuarter: 85,
      thirdQuarter: 83,
      fourthQuarter: 87,
    },
  },
  {
    subject: "Computer Science",
    grades: {
      firstQuarter: 92,
      secondQuarter: 94,
      thirdQuarter: 96,
      fourthQuarter: 98,
    },
  },
  {
    subject: "Geography",
    grades: {
      firstQuarter: 70,
      secondQuarter: 72,
      thirdQuarter: 74,
      fourthQuarter: 77,
    },
  },
  {
    subject: "Chemistry",
    grades: {
      firstQuarter: 82,
      secondQuarter: 85,
      thirdQuarter: 88,
      fourthQuarter: 90,
    },
  },
  {
    subject: "Music",
    grades: {
      firstQuarter: 91,
      secondQuarter: 93,
      thirdQuarter: 95,
      fourthQuarter: 97,
    },
  },
  {
    subject: "Biology",
    grades: {
      firstQuarter: 76,
      secondQuarter: 78,
      thirdQuarter: 80,
      fourthQuarter: 82,
    },
  },
  {
    subject: "Philosophy",
    grades: {
      firstQuarter: 89,
      secondQuarter: 87,
      thirdQuarter: 90,
      fourthQuarter: 92,
    },
  },
];
export const DummyStudentInfo: StudentInfo = {
  firstName: "John",
  lastName: "Doe",
  middleName: "A.",
  profile_picture: "https://placehold.co/600x400",
  gradeLevel: "10th Grade",
  studentNumber: 12345,
  grades: DummyGrade,
  finalGrade: 90,
  section: "A",
};

export const teacherGradesTable: StudentInfo[] = [
  {
    name: "John Doe",
    gender: "Male",
    finalGrade: 1.25,
    gradeLevel: "10",
    section: "A",
    birthdate: "2005-05-15",
    contactNumber: "09123456789",
    email: "johndoe@example.com",
  },
  {
    name: "Jane Smith",
    gender: "Female",
    finalGrade: 1.75,
    gradeLevel: "11",
    section: "B",
    birthdate: "2004-03-20",
    contactNumber: "09876543210",
    email: "janesmith@example.com",
  },
  {
    name: "Alex Johnson",
    gender: "Non-binary",
    finalGrade: 1.5,
    gradeLevel: "12",
    section: "C",
    birthdate: "2003-09-10",
    contactNumber: "09112233445",
    email: "alexjohnson@example.com",
  },
  {
    name: "Emily Davis",
    gender: "Female",
    finalGrade: 2.0,
    gradeLevel: "10",
    section: "A",
    birthdate: "2005-12-01",
    contactNumber: "09113334455",
    email: "emilydavis@example.com",
  },
];
