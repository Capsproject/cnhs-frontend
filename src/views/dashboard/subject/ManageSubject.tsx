import { PageHeader } from "@/components/shared/PageHeader";
import { FormModal } from "@/types/shared";
import { Button } from "antd";
import React from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { CreateSubjectModal } from "@/components/domain/subject/CreateSubjectModal";

export const ManageSubject: React.FC = () => {
  const [formModal, setFormModal] = React.useState<FormModal>({
    show: false,
    selectedData: undefined,
  });
  const handleFormModal = (data: FormModal) => {
    setFormModal(data);
  };
  return (
    <>
      <CreateSubjectModal
        show={formModal.show}
        handleClose={() => handleFormModal({ show: false })}
      />
      <PageHeader title="Manage Subject" />
      <Button
        type="primary"
        className="bg-orange-500"
        icon={<PlusCircleOutlined />}
        onClick={() => handleFormModal({ show: true, formType: "add" })}
      >
        Create Subject
      </Button>
    </>
  );
};

export default ManageSubject;
