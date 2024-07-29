import React from "react";
import { useQuery } from "@tanstack/react-query";
import { EventService } from "@/services/event.service";
import { useDialog } from "@/hooks/use-dialog.hook";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card } from "antd";
import { DeleteFilled } from "@ant-design/icons";

const ManageEventPage : React.FC = () => {
  const { data, isFetching, refetch } = useQuery({
    queryKey: ["data-events-list"],
    queryFn: async () => await EventService.geteventsList(),
  })


  const { showConfirm, closeConfirm, DialogComponent } = useDialog();
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
    })
  }

    return (
      <> 
        {DialogComponent}
        <PageHeader title="Manage Event" />
        <div className="flex flex-row max-md:flex-col justify-end gap-3 w-full mb-4">

        </div>
        <div className="over-flow-auto h-[80vh] md:overflow-auto sm:overflow-auto">
          <div className="flex flex-wrap xl:gap-9 md:gap-4 justify-center gap-3 over-flow-auto  md:overflow-auto sm:overflow-auto">
          {data && data.map((event: any) => (
            <Card
            key={event.id}
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src={event.image}
              />
            }
            actions={
              [
                <DeleteFilled onClick={() => handleDelete(event.id)} />,
              ]
            }
            >
              <Card.Meta
                title={event.title}
                description={event.message}
              />
            </Card>
          ))}
          </div>
        </div>
      </>
    )
}

export default ManageEventPage;