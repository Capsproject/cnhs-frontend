/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { EventService } from "@/services/event.service";
import { useDialog } from "@/hooks/use-dialog.hook";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, Button } from "antd";
import { DeleteFilled, PlusCircleOutlined, EditOutlined } from "@ant-design/icons";
import { EventFormModal } from "@/components/domain/events/EventModal";
import { FormModal } from "@/types/shared";


const ManageEventPage: React.FC = () => {
  const { data, refetch } = useQuery({
    queryKey: ["data-events-list"],
    queryFn: async () => await EventService.geteventsList(),
  });

  const [formModal, setFormModal] = React.useState<FormModal>({
    show: false,
    selectedData: undefined,
  });
  const { showConfirm, closeConfirm, DialogComponent } = useDialog();
  const handleUpdate = (eventData: any) => {
    console.log(eventData);
    handleFormModal({
      show: true,
      selectedData: eventData,
    });
  }
  const handleDelete = (id: number) => {
    showConfirm({
      open: true,
      title: "Confirm Deletion",
      description: "Are you sure you want to delete this record?",
      type: "danger",
      onConfirm: async () => {
        await EventService.deleteEvent(id);
        refetch();
        closeConfirm();
      },
      onCancel: () => {
        closeConfirm();
      },
    });
  };
  const handleFormModal = (data: FormModal) => {
    setFormModal(data);
  };
  return (
    <>
      {DialogComponent}
      <PageHeader title="Manage Event" />
      <EventFormModal
        show={formModal.show}
        formType={formModal.selectedData ? "update" : "add"}
        data={formModal.selectedData}
        refetch={refetch}
        handleClose={() =>
          setFormModal({ show: false, selectedData: undefined })
        }
      />
      <div className="flex flex-row max-md:flex-col justify-end gap-3 w-full mb-4">
        <Button
          type="primary"
          className="bg-orange-500"
          icon={<PlusCircleOutlined />}
          onClick={() => handleFormModal({ show: true })}
        >
          Add Announcement
        </Button>
        <button
          className="h-[35px] max-md:!w-full px-3 rounded bg-gray-200 border border-gray-300 text-gray-800 text-sm"
          onClick={() => refetch()}
        >
          Refresh list
        </button>
      </div>
      <div className="over-flow-auto h-[80vh] md:overflow-auto sm:overflow-auto">
        <div className="flex flex-wrap xl:gap-9 md:gap-4 justify-center gap-3 over-flow-auto  md:overflow-auto sm:overflow-auto">
          {data &&
            data.map((event: any) => (
              <Card
                key={event.id}
                style={{ width: 300 }}
                cover={<img alt="example" src={event.banner_img} className="h-40 object-cover" />}
                actions={[
                  <EditOutlined onClick={() => handleUpdate(event)}/>,
                  <DeleteFilled onClick={() => handleDelete(event.id)} />,
                ]}
              >
                <Card.Meta title={event.title} description={event.message}  />
              </Card>
            ))}
        </div>
      </div>
    </>
  );
};

export default ManageEventPage;
