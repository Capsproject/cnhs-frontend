import { UserService } from "@/services/user.service";
import { Props } from "@/types/Props";
import { useQuery } from "@tanstack/react-query";
import { Modal, Select, SelectProps } from "antd";
import React from "react";

export const EditSectionModal: React.FC<Props> = (props) => {
  const { data } = useQuery({
    queryKey: ["data-user-list"],
    queryFn: async () => await UserService.getUsersList(),
  });
  const options: SelectProps["options"] = [];
  let adviserOptions: SelectProps["options"] = [];


  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };
  React.useEffect(() => {
    console.log(data);
    if (data) {
      adviserOptions = data.data
        .filter((user: any) => user.userRole.id === 3)
        .map((user: any) => ({
          label: user.first_name + " " + user.last_name,
          value: user.id,
        }));
    }
  }, [data]);
  return (
    <>
      <Modal open={props.show} onClose={props.handleClose} title="Edit Section">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700">
              Adviser
            </label>
            <Select placeholder="Select Adviser" className="w-full" />
          </div>
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700">
              Students
            </label>
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select Students to be added in Section"
              defaultValue={["a10", "c12"]}
              onChange={handleChange}
              options={options}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditSectionModal;
