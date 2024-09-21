import { PageHeader } from "@/components/shared/PageHeader";
import { Button, Table } from "antd";
import React from "react";

export const ManageEnrollment: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
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

  return (
    <>
      <PageHeader title="Manage Enrollment" />
      <Table loading={loading} dataSource={[]} columns={tableColumns} />
    </>
  );
};

export default ManageEnrollment;
