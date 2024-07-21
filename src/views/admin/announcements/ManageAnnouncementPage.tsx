import { Card, Button } from "antd";
import { EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import Meta from "antd/es/card/Meta";
import { PageHeader } from "@/components/shared/PageHeader";
import React from "react";
import { FormModal } from "@/types/shared";
import { useQuery } from "@tanstack/react-query";
import { AnnouncementService } from "@/services/announcement.service";
import { AnnouncementFormModal } from "@/components/domain/announcement/AnnouncementFormModal";
import { PlusSquareTwoTone } from "@ant-design/icons";
const ManageAnnouncementPage: React.FC = () => {
  const { data, isFetching, refetch } = useQuery({
    queryKey: ["data-announcements-list"],
    queryFn: async () => await AnnouncementService.getAnnouncementsList(),
  })
  const [formModal, setFormModal] = React.useState<FormModal>({
    show: false,
    selectedData: undefined,
  });
  console.log(data)
  const handleFormModal = (data : FormModal) => {
    setFormModal(data);
  }
    return (
    <>
    <PageHeader title="Manage Announcement" />
    <AnnouncementFormModal
      show={formModal.show}
      formType={formModal.selectedData ? "update" : "add"}
      data={formModal.selectedData}
      refetch={refetch}
      handleClose={() => handleFormModal({ show: false, selectedData: undefined })}
    />
    <div className="flex flex-row max-md:flex-col justify-end gap-3 w-full mb-4">
          <Button type="primary" danger className="bg-orange-500 active:bg-orange-300 hover:bg-orange-300" icon={<PlusSquareTwoTone />} onClick={() => handleFormModal({show: true})}>Add Announcement</Button>
          <button className="h-[35px] max-md:!w-full px-3 rounded bg-gray-200 border border-gray-300 text-gray-800 text-sm" onClick={() => refetch()}>
            Refresh list
          </button>
        </div>
        <div className="flex flex-wrap gap-4">
        {data && data.map((announcement: any) => (
          <Card
            key={announcement.id}
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Card.Meta
              title={announcement.title}
              description={announcement.description}
            />
          </Card>
        ))}
      </div>
    
  </>
  )
}

export default ManageAnnouncementPage;