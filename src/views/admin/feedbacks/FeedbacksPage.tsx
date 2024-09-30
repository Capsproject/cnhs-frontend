/* eslint-disable @typescript-eslint/no-explicit-any */
import NewFeedbackModal from "@/components/domain/feedback/NewFeedback";
import { PageHeader } from "@/components/shared/PageHeader";
import { FeedbackService } from "@/services/feedback.service";
import { useAuthStore } from "@/stores";
import { skipToken, useQuery } from "@tanstack/react-query";
import { Table, Button } from "antd";
import React from "react";
import { BsEye } from "react-icons/bs";

export const FeedbacksPage: React.FC = () => {
  const userRole = useAuthStore.getState().user?.user_role.id;
  console.log(userRole);

  const fetchFeedbacks = async () => {
    try {

      const data = await FeedbackService.getFeedbackList();
      console.log(data);
      return data; // Ensure to return the fetched data
    } catch (error) {
      console.error("Failed to fetch feedbacks", error);
      throw error; // Throw error to notify the query of failure
    }
  };

  const { data, isFetching, refetch } = useQuery({
    queryKey: ["data-feedbacks-list", userRole],
    queryFn: userRole === 1 ? fetchFeedbacks : () => Promise.reject(skipToken),
  });

  const tableColumns = [
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
      render: (row: any) => (
        <div className="flex flex-row gap-2">
          <Button
            type="primary"
            onClick={() => {
              console.log(row);
            }}
          >
            <BsEye />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <>
      {userRole === 1 && (
        <>
          <PageHeader title="Feedbacks" />
          <Table
            dataSource={data || []}
            loading={isFetching}
            columns={tableColumns}
          />
        </>
      )}
      {userRole === 4 && (
        <>
          <PageHeader title="Make a Teacher Feedback" />
          <NewFeedbackModal />
        </>
      )}
    </>
  );
};
export default FeedbacksPage;
