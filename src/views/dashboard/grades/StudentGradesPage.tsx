import { PageHeader } from "@/components/shared/PageHeader";
import { DummyGrade, DummyStudentInfo, teacherGradesTable } from "@/dummy";
import { useAuthStore } from "@/stores";
import { StudentInfo } from "@/types/StudentInfo";
import { Button, Table } from "antd";
import React from "react";

const StudentGradesPage: React.FC = () => {
  const isRole = useAuthStore.getState().user?.user_role.name;
  const [studentInfo, setStudentInfo] = React.useState<StudentInfo>();
  const [students, setStudents] = React.useState<any>();
  const tableColumns: any = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Gender",
      key: "gender",
      dataIndex: "gender",
    },
    {
      title: "GWA",
      key: "finalGrade",
      dataIndex: "finalGrade",
    },
    {
      title: "Grade Level",
      key: "gradeLevel",
      dataIndex: "gradeLevel",
    },
    {
      title: "Section",
      key: "section",
      dataIndex: "section",
    },
    {
      title: "Date of Birth",
      key: "birthdate",
      dataIndex: "birthdate",
    },
    {
      title: "Contact Number",
      key: "contactNumber",
      dataIndex: "contactNumber",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Actions",
      key: "actions",
      render: (row: any) => {
        return (
          <div className="flex flex-row gap-2">
            <Button
              type="primary"
              size="small"
              onClick={() => {
                console.log(row);
              }}
            >
              View
            </Button>
            <Button
              type="primary"
              size="small"
              danger
              onClick={() => {
                console.log(row);
              }}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];
  React.useEffect(() => {
    if (isRole === "student") {
      const studentinfo = DummyStudentInfo;
      if (studentinfo.grades === undefined) {
        studentinfo.grades = [];
      }
      studentinfo.grades.map((student) => {
        const grades = DummyGrade;
        return {
          ...student,
          grades,
        };
      });
      setStudentInfo(studentinfo);
    } else if (isRole === "teacher") {
      setStudents(teacherGradesTable);
    }
  }, [isRole]);

  return (
    <>
      {isRole === "teacher" && (
        <>
          <PageHeader title="Student Grades" />
          <Table dataSource={students} loading={false} columns={tableColumns} />
        </>
      )}
      {isRole === "student" && (
        <>
          <PageHeader title="My Grades" />
          <div className="flex flex-row mb-4 justify-between p-5">
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 border rounded-lg items-center justify-center">
              <img
                className="object-cover w-20 h-20 rounded-full"
                src={studentInfo?.profile_picture}
              />
              <div>
                <div className="flex flex-wrap flex-row items-center gap-2">
                  <span className="text-2xl font-semibold text-black">
                    {studentInfo?.gradeLevel}
                  </span>
                  <span className="text-2xl font-semibold text-black">
                    {studentInfo?.section}
                  </span>
                  <span className="text-2xl font-semibold text-black">
                    {studentInfo?.studentNumber}
                  </span>
                </div>

                <div className="flex flex-wrap flex-row items-center gap-2">
                  <span className="text-2xl font-semibold text-gray-400">
                    {studentInfo?.lastName}
                  </span>
                  <span className="text-2xl font-semibold text-gray-400">
                    {studentInfo?.firstName}
                  </span>
                  <span className="text-2xl font-semibold text-gray-400">
                    {studentInfo?.middleName}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="block rounded-lg bg-white p-6 text-gray-700 shadow-secondary-1 ">
                <label className="text-gray-700 text-lg font-bold mb-2">
                  Final Grade
                </label>
                <div className="w-80">
                  <input
                    className="shadow disabled:bg-gray-200 disabled:text-gray-800 text-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    value={studentInfo?.finalGrade}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flew-row flex-wrap justify-center gap-2">
            {studentInfo?.grades?.map((student) => (
              <div className="rounded-lg bg-white p-6 text-gray-700 shadow-secondary-1 ">
                <div className="mb-4">
                  <label className="text-gray-700 text-lg font-bold mb-2">
                    {student.subject}
                  </label>
                </div>
                <div className="flex flex-row gap-1 justify-center">
                  {Object.entries(student.grades).map(([quarter, grade]) => (
                    <div className="flex justify-center">
                      <input
                        className=" disabled:bg-gray-200 disabled:text-gray-800 text-lg shadow w-12 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id={quarter}
                        type="text"
                        value={grade} // Set value to the grade
                        disabled
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default StudentGradesPage;
