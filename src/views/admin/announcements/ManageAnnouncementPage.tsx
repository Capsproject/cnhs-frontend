/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Button } from "antd";
import { EditOutlined, DeleteFilled } from "@ant-design/icons";
import { PageHeader } from "@/components/shared/PageHeader";
import React from "react";
import { FormModal } from "@/types/shared";
import { useQuery } from "@tanstack/react-query";
import { AnnouncementService } from "@/services/announcement.service";
import { AnnouncementFormModal } from "@/components/domain/announcement/AnnouncementFormModal";
import { PlusCircleOutlined, EyeOutlined } from "@ant-design/icons";
import { Announcement } from "@/types/announcement";
import { useDialog } from "@/hooks/use-dialog.hook";
import { useAuthStore } from "@/stores";
const ManageAnnouncementPage: React.FC = () => {
  const userRole = useAuthStore.getState().GET_AUTH_DATA().user.user_role.name;
  const { data, refetch } = useQuery({
    queryKey: ["data-announcements-list"],
    queryFn: async () => await AnnouncementService.getAnnouncementsList(),
  });

  const [formModal, setFormModal] = React.useState<FormModal>({
    show: false,
    selectedData: undefined,
  });
  const handleFormModal = (data: FormModal) => {
    setFormModal(data);
  };
  const handleUpdate = (announcementData: Announcement) => {
    handleFormModal({
      show: true,
      selectedData: announcementData,
      formType: "update",
    });
  };
  const handleView = (announcementData: Announcement) => {
    handleFormModal({
      show: true,
      selectedData: announcementData,
      formType: "view",
    });
  }
  const { showConfirm, closeConfirm, DialogComponent } = useDialog();
  const handleDelete = (id: number) => {
    showConfirm({
      open: true,
      title: "Confirm Deletion",
      description: "Are you sure you want to delete this record?",
      type: "danger",
      onConfirm: async () => {
        await AnnouncementService.deleteAnnouncement(id);
        refetch();
        closeConfirm();
      },
      onCancel: () => {
        closeConfirm();
      },
    });
  };

  return (
    <>
      {DialogComponent}
      <PageHeader title={userRole === "admin" ? "Manage Announcement" : "Announcement"} />
      
      <AnnouncementFormModal
        show={formModal.show}
        formType={formModal.formType}
        data={formModal.selectedData}
        disableDC={false}
        refetch={refetch}
        disableDC={false}
        handleClose={() =>
          handleFormModal({ show: false, selectedData: undefined })
        }
      />
      <div className="flex flex-row max-md:flex-col justify-end gap-3 w-full mb-4">
        <>
          {userRole === "superadmin" && (
            <Button
              type="primary"
              className="bg-orange-500"
              icon={<PlusCircleOutlined />}
              onClick={() => handleFormModal({ show: true, formType: "add" })}
            >
              Add Announcement
            </Button>
          )}
          <Button
            className="h-[35px] max-md:!w-full px-3 rounded bg-gray-200 border border-gray-300 text-gray-800 text-sm"
            type="primary"
            onClick={() => refetch()}
          >
            Refresh list
          </Button>
        </>
      </div>
      <div className="over-flow-auto h-[80vh] md:overflow-auto sm:overflow-auto">
        <div className="flex flex-wrap xl:gap-9 md:gap-4 justify-center gap-3 over-flow-auto  md:overflow-auto sm:overflow-auto">
          {data &&
            data.map((announcement: any) => (
              <Card
                key={announcement.id}
                style={{ width: 350 }}
                cover={
                  <img
                    alt="example"
                    className="h-40 object-cover"
                    src={announcement.banner_img}
                  />
                }
                {...(userRole === "superadmin" && {
                  actions: [
                    <EyeOutlined onClick={() => handleView(announcement)} />,
                    <EditOutlined onClick={() => handleUpdate(announcement)} />,
                    <DeleteFilled
                      onClick={() => handleDelete(announcement.id)}
                    />,
                  ],
                })}
                {...(userRole === "teacher" || userRole === "student" ? {
                  actions: [
                    <EyeOutlined onClick={() => handleView(announcement)}/>
                  ],
                } : null)}
              >
                <Card.Meta
                  title={announcement.title}
                  description={announcement.message}
                />
              </Card>
            ))}
        </div>
      </div>
    </>
  );
};

export default ManageAnnouncementPage;
