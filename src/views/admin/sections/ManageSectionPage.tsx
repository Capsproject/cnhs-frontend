import { CreateSectionModal } from "@/components/domain/sections/CreateSectionModal";
import EditSectionModal from "@/components/domain/sections/SectionsModal";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionService } from "@/services/section.service";
import { FormModal } from "@/types/shared";
import { useQuery } from "@tanstack/react-query";
import { Button, Table } from "antd";
import React from "react";

const ManageSectionPage: React.FC = () => {
  const { data, isFetching, refetch } = useQuery({
    queryKey: ["data-section-list"],
    queryFn: async () => await SectionService.getUsersList(),
  });
  const [formModal, setFormModal] = React.useState<FormModal>({
    show: false,
    selectedData: undefined,
  });

  const [disableDc, setDisableDc] = React.useState<boolean>(false);

  const handleFormModal = (data: FormModal) => {
    setFormModal(data);
  };
  const [editSectionModal, setEditSectionModal] = React.useState<FormModal>({
    show: false,
    selectedData: undefined,
  });
  
  const handleEditSectionModal = (data: FormModal) => {
    setEditSectionModal(data);
  };

  const handleEditSection = (data: any) => {
    handleEditSectionModal({
      show: true,
      selectedData: undefined,
    });
  };

  const tableColumns = [
    {
      title: "Section Name",
      dataIndex: "section_name",
      key: "section_name",
    },
    {
      title: "Grade Level",
      dataIndex: "grade_level",
      key: "grade_level",
    },
    {
      title: "Actions",
      key: "action-options",
      render: (row: any) => {
        return (
          <div className="flex flex-row gap-2">
            <Button
              type="primary"
              size="small"
              onClick={() => handleEditSection(row)}
            >
              Edit
            </Button>
          </div>
        );
      },
    },
  ];
  const sectionDummyData = [
    {
      key: "1",
      section_name: "Section 1",
      grade_level: "Grade 7",
    },
    {
      key: "2",
      section_name: "Section 2",
      grade_level: "Grade 8",
    },
    {
      key: "3",
      section_name: "Section 3",
      grade_level: "Grade 9",
    },
  ];
  React.useEffect(() => {
    if (data) {
      if (data.filter((user: any) => +user.user_role === 2).length > 0) {
        setDisableDc(true);
      }
    } else {
      setDisableDc(false);
    }
  }, [data]);
  return (
    <div>
      <CreateSectionModal
        show={formModal.show}
        formType={formModal.formType}
        handleClose={() =>
          handleFormModal({ show: false, selectedData: undefined })
        }
        disableDC={disableDc}
        refetch={refetch}
      />
      <EditSectionModal
        show={editSectionModal.show}
        formType={editSectionModal.formType}
        handleClose={() =>
          handleEditSectionModal({ show: false, selectedData: undefined })
        }
        disableDC={disableDc}
        refetch={refetch}
      />
      <PageHeader title="Manage Sections" />
      <div className="flex mb-4 justify-end">
        <Button
          type="primary"
          onClick={() =>
            handleFormModal({
              show: true,
              formType: "add",
            })
          }
        >
          Create Section
        </Button>
      </div>
      <div className="min:h-[400px] bg-white border-t-2 border-gray-100">
        <Table
          columns={tableColumns}
          dataSource={sectionDummyData}
          loading={isFetching}
          pagination={false}
        />
      </div>
    </div>
  );
};
export default ManageSectionPage;
