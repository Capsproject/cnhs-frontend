import ModuleModal from "@/components/domain/modules/ModuleModal";
import { PageHeader } from "@/components/shared/PageHeader";
import { DummyGrade, DummyStudentInfo, teacherGradesTable } from "@/dummy";
import { useAuthStore } from "@/stores";
import { FormModal } from "@/types/shared";
import { StudentInfo } from "@/types/StudentInfo";
import { Button, Card, Table } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

const ModulePage: React.FC = () => {
  const isRole = useAuthStore.getState().user?.user_role.name;
  const [studentInfo, setStudentInfo] = React.useState<StudentInfo>();
  const [students, setStudents] = React.useState<any>();
  const [formModal, setFormModal] = React.useState<FormModal>({
    show: false,
    selectedData: undefined,
  });

  const handleFormModal = (data: FormModal) => {
    setFormModal(data);
  }

  const handleUpdate = (data: any) => {
    handleFormModal({
      show: true,
      selectedData: data,
      formType: "update",
    })
  }


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
  const modules = [
    {
      id: 1,
      title: "Module 1",
      description: "Math Quiz",
      due_date: "August 12, 2021",
    },
    {
      id: 2,
      title: "Module 2",
      description: "Science Quiz",
      due_date: "August 12, 2021",
    },
    {
      id: 3,
      title: "Module 3",
      description: "English Quiz",
      due_date: "August 12, 2021",
    },
    {
      id: 4,
      title: "Module 4",
      description: "Filipino Quiz",
      due_date: "August 12, 2021",
    },
    {
      id: 5,
      title: "Module 5",
      description: "PE Quiz",
      due_date: "August 12, 2021",
    },
    {
      id: 6,
      title: "Module 6",
      description: "Health Quiz",
      due_date: "August 12, 2021",
    },
    {
      id: 7,
      title: "Module 7",
      description: "Music Quiz",
      due_date: "August 12, 2021",
    },
    {
      id: 8,
      title: "Module 8",
      description: "Art Quiz",
      due_date: "August 12, 2021",
    },
    {
      id: 9,
      title: "Module 9",
      description: "Home Economics Quiz",
      due_date: "August 12, 2021",
    },
    {
      id: 10,
      title: "Module 10",
      description: "Technology and Livelihood Education Quiz",
      due_date: "August 12, 2021",
    },
    {
      id: 11,
      title: "Module 11",
      description: "Araling Panlipunan Quiz",
      due_date: "August 12, 2021",
    },
    {
      id: 12,
      title: "Module 12",
      description: "Values Education Quiz",
      due_date: "August 12, 2021",
    },
    {
      id: 13,
      title: "Module 13",
      description: "Physical Education Quiz",
      due_date: "August 12, 2021",
    },
    {
      id: 14,
      title: "Module 14",
      description: "Health Quiz",
      due_date: "August 12, 2021",
    },
    {
      id: 15,
      title: "Module 15",
      description: "Music Quiz",
      due_date: "August 12, 2021",
    },
    {
      id: 16,
      title: "Module 16",
      description: "Art Quiz",
      due_date: "August 12, 2021",
    },
    {
      id: 17,
      title: "Module 17",
      description: "Home Economics Quiz",
      due_date: "August 12, 2021",
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
      <PageHeader title={isRole === "student" ? "Modules" : "Manage Modules"} />
      <ModuleModal 
        show={formModal.show} 
        formType={formModal.formType}
        data={formModal.selectedData}
        disableDC={false}
        refetch={() => {}}
        handleClose={() => setFormModal({ show: false, selectedData: undefined })}
      />
      <>
        {isRole === "teacher" && (
          <div className="flex mb-4">
            <Button
              className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
              type="primary"
              onClick={() => handleFormModal({ show: true, formType: "add" })}
            >
              Post Module
            </Button> 
          </div>
        )}
        <div className="flex flex-wrap xl:gap-9 md:gap-4 justify-center gap-3 over-flow-auto  md:overflow-auto sm:overflow-auto">
          {modules &&
            modules.map((event: any) => (
              <Card hoverable key={event.id} style={{ width: 300 }}>
                <div className="flex mb-5">
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    className="h-40 object-cover w-full"
                  />
                </div>
                <Card.Meta
                  title={event.title}
                  description={event.description}
                />
              </Card>
            ))}
        </div>
      </>
    </>
  );
};

export default ModulePage;
