import React from "react";

import { useQuery } from "@tanstack/react-query";
import { LoadingPage } from "@/components/shared/LoadingPage";
import Table, {ColumnsType} from "antd/es/table";
import { UserService } from "@/services/user.service";
import { useDialog } from "@/hooks/use-dialog.hook";
import type { FormModal } from "@/types/shared";
import { UserAccountFormModal } from "@/components/domain/users/UsersAccountModal";
import { User } from "@/types/user";
import { Button } from "antd";

const UsersManagementPage: React.FC = () => {
  const { showConfirm, closeConfirm, DialogComponent } = useDialog();

  const { data, isFetching, refetch } = useQuery({
    queryKey: ["data-users-list"],
    queryFn: async () => await UserService.getUsersList(),
  });

  const [formModal, setFormModal] = React.useState<FormModal>({
    show: false,
    selectedData: undefined,
  });
  const [disableDc, setDisableDc] = React.useState<boolean>(false);

  const handleFormModal = (data: FormModal) => {
    setFormModal(data);
  };

  const handleUpdate = (userData: any) => {
    handleFormModal({
      show: true,
      selectedData: userData,
    });
  };

  const handleDelete = (id: number) => {
    showConfirm({
      open: true,
      title: "Confirm Deletion",
      description: "Are you sure you want to delete this record?",
      onConfirm: async () => {
        await UserService.deleteUser(id);
        refetch();
        closeConfirm();
      },
      onCancel: () => {
        closeConfirm();
      },
    });
  };

  const tableColumns: ColumnsType<User> = [
    {
      title: "Account Type", 
      key: "user_role",
      render: (row: any) => {
        console.log(row)
        if (+row.user_role.id === 1) {
          return "Admin";
        } else if (+row.user_role.id === 2) {
          return "Teacher";
        } else {
          return "Student";
        }
      },
    },
    {
      title: "Full Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "E-mail",
      dataIndex: "email",
      key: "email",
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
              onClick={() => handleUpdate(row)}
            >
              Edit
            </Button>
            <Button
              type="primary"
              danger
              size="small"
              onClick={() => handleDelete(row.id)}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];
  
  React.useEffect(() => {
    if (data) {
      console.log(data)
      if (data.filter((user: any) => +user.user_role === 2).length > 0) {
        setDisableDc(true);
      }
    } else {
      setDisableDc(false);
    }
  }, [data]);
  return (
    <div>
      {DialogComponent}
      <UserAccountFormModal
        show={formModal.show}
        formType={formModal.selectedData ? "update" : "add"}
        data={formModal.selectedData}
        disableDC={disableDc}
        refetch={refetch}
        handleClose={() => handleFormModal({ show: false, selectedData: undefined })}
      />
      
        <div className="flex flex-row max-md:flex-col justify-end gap-3 w-full">
          <button className="h-[35px] max-md:!w-full px-3 rounded bg-primary text-white text-sm" onClick={() => handleFormModal({ show: true })}>
            Add User
          </button>
          <button className="h-[35px] max-md:!w-full px-3 rounded bg-gray-200 border border-gray-300 text-gray-800 text-sm" onClick={() => refetch()}>
            Refresh list
          </button>
        </div>
      <div className="w-full min-h-[300px] bg-white border-t-2 border-gray-100">
        <Table columns={tableColumns}  dataSource={data} loading={isFetching}/>
      </div>
    </div>
  );
};

export default UsersManagementPage;
