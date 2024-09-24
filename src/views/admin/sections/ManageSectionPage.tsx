import { CreateSectionModal } from "@/components/domain/sections/CreateSectionModal";
import { PageHeader } from "@/components/shared/PageHeader";
import { FormModal } from "@/types/shared";
import { Button, Table } from "antd";
import React from "react";



const ManageSectionPage: React.FC = () => {
  const [isFetching, setIsFetching] = React.useState<boolean>(false);
  const [formModal, setFormModal] = React.useState<FormModal>({
    show: false,
    selectedData: undefined,
  });
  const [disableDc, setDisableDc] = React.useState<boolean>(false);


  const handleFormModal = (data: FormModal) => {
    setFormModal(data);
  };

  const tableColumns = [
    {
      title: "Sections",
      dataIndex: "section",
      key: "section",
    },
    {
      title: "Action",
      key: "action",
      render: (text: any, record: any) => (
        <div>
          <Button type="primary" className="mr-2">Edit</Button>
          <Button type="primary" danger>Delete</Button>
        </div>
      ),
    },
  ];
  
  return (
    <div>
      <CreateSectionModal
        show={formModal.show} 
        formType={formModal.formType}
        handleClose={() => handleFormModal({ show: false, selectedData: undefined })}
        disableDC={disableDc}
        refetch={() => setIsFetching(true)}
      />
      <PageHeader title="Manage Sections" />
      <div className="flex mb-4 justify-end">
        <Button type="primary" onClick={() => handleFormModal({
          show: true,
          formType: "add",
        })}>Create Section</Button>
      </div>
      <div className="min:h-[400px] bg-white border-t-2 border-gray-100">
        <Table columns={tableColumns}  dataSource={[]} loading={isFetching} pagination={false} />
      </div>
    </div>
  );
}
export default ManageSectionPage;