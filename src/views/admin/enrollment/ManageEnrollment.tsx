import { PageHeader } from "@/components/shared/PageHeader";
import { Button, Dropdown, Input, Table } from "antd";
import React from "react";
import Search from "antd/es/input/Search";
import { KeyValuePair } from "@/types/value-pair";
import { gradeLevel } from "@/components/constants";
import { ItemType } from "antd/es/menu/interface";

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
  const items = [
    {
      label: "View",
      key: 1,
    },
    {
      label: "Delete",
      key: 2,
    },
  ];
  const gradeLevels: ItemType[] = gradeLevel.map((item) => {
    return {
      label: item.label,
      key: item.value,
    }
  })
  return (
    <>
      <PageHeader title="Manage Enrollment" />
      <div className="flex gap-2 justify-center mb-2">
        <Dropdown menu={{ items: gradeLevels }} placement="bottom" arrow>
          <Button>Grade</Button>
        </Dropdown>
        <Dropdown menu={{ items }} placement="bottom" arrow>
          <Button>Section</Button>
        </Dropdown>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          loading={loading}
        />
      </div>
      <Table loading={loading} dataSource={[]} columns={tableColumns} />
    </>
  );
};

export default ManageEnrollment;
