import { Props } from "@/types/Props";
import { Button, Modal } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { SmileOutlined } from "@ant-design/icons";

export const ModuleModal: React.FC<Props> = (props) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [selectedFile, setselectFile] = React.useState<any>();
  const [selectedTypeModule, setselectectedModule] = React.useState<string>("");
  const {
    setValue,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const handleFormSubmit = handleSubmit(async (data: any) => {
    setLoading(true);
    if (props.formType === "add") {
      const formdata = new FormData();
      formdata.append("title", data.title);
      formdata.append("description", data.description);
      formdata.append("due_date", data.due_date);
      formdata.append("url", data.url);
      formdata.append("file", selectedFile);
      reset();
      props.refetch();
    } else {
      const formdata = new FormData();
      formdata.append("title", data.title);
      formdata.append("description", data.description);
      formdata.append("due_date", data.due_date);
      formdata.append("url", data.url);
      formdata.append("file", selectedFile);
      // await AnnouncementService.updateAnnouncement(formData);
      reset();
      props.handleClose();
    }
    setLoading(false);
    props.handleClose();
  });
  return (
    <>
      <Modal
        loading={loading}
        onClose={props.handleClose}
        open={props.show}
        title={props.formType === "add" ? "Post Module" : "Update Module"}
        onCancel={props.handleClose}
        {...(props.formType !== "view"
          ? {
              okText: "Submit",
              onOk: handleFormSubmit,
            }
          : { footer: null })}
      >
        <form className="flex flex-col gap-2" onSubmit={handleFormSubmit}>
          <div className="flex flex-row">
            <Button
              className={selectedTypeModule === "file" ? "" : "bg-gray"}
              onClick={() => setselectectedModule("file")}
            >
              File
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};
export default ModuleModal;
