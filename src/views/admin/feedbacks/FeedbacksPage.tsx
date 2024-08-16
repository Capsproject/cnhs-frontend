import { PageHeader } from "@/components/shared/PageHeader";
import { FeedbackService } from "@/services/feedback.service";
import { useQuery } from "@tanstack/react-query";
import { Table, Button } from "antd";
import React from "react";
import { BsEye } from "react-icons/bs";

export const FeedbacksPage: React.FC = () => {
  const { data, isFetching, refetch } = useQuery({
    queryKey: ["data-feedbacks-list"],
    queryFn: async () => await FeedbackService.getFeedbackList(),
  });
  const tableColumns: any = [
    {
      title: "Feedback",
      key: "feedback",
      dataIndex: "feedback",
    },
    {
      title: "Rating",
      key: "rating",
      dataIndex: "rating",
    },
    {
      title: "Created At",
      key: "created_at",
      dataIndex: "created_at",
    },
    {
      title: "Actions",
      key: "actions",
      render: (row: any) => {
        <div className="flex flex-row gap-2">
          <Button
            type="primary"
            onClick={() => {
                console.log(row);
            }}
          >
            <BsEye />
          </Button>
        </div>;
      },
    },
  ];
  return (
    <>
      <PageHeader title="Feedbacks" />
      <Table dataSource={data} loading={isFetching} columns={tableColumns} />
    </>
  );
};
export default FeedbacksPage;
