import { Props } from "@/types/Props";
import { Button, DatePicker, Modal } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import React from "react";
import { useForm } from "react-hook-form";

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
      formdata.append("module_title", data.title);
      formdata.append("module_description", data.description);
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
  const moduleTypes = ["File", "URL"];
  console.log(selectedTypeModule);
  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf("day");
  };
  const handleCloseModal = () => {
    reset();
    props.handleClose();
    setselectectedModule("");
  }
  return (
    <>
      <Modal
        loading={loading}
        onClose={handleCloseModal}
        open={props.show}
        title={props.formType === "add" ? "Post Module" : "Update Module"}
        onCancel={handleCloseModal}
        {...(props.formType !== "view"
          ? {
              okText: "Submit",
              onOk: handleFormSubmit,
            }
          : { footer: null })}
      >
        <form className="flex flex-col gap-2" onSubmit={handleFormSubmit}>
          <div className="flex flex-col mb-2">
            <label>Title</label>
            <input
              type="text"
              id="module_title"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="Module Title"
              required
              {...register("module_title", { required: true })}
              {...(props.formType === "view" ? { disabled: true } : {})}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label>Description</label>
            <input
              type="text"
              id="module_description"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="Module Description"
              required
              {...register("module_description", { required: true })}
              {...(props.formType === "view" ? { disabled: true } : {})}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label>Due Date</label>
            <DatePicker
              {...register("due_date", { required: true })}
              disabledDate={disabledDate}
            />
          </div>
          <div className="flex flex-row gap-1">
            {moduleTypes &&
              moduleTypes.map((type) => {
                return (
                  <Button
                    className={
                      selectedTypeModule === type
                        ? "bg-orange-300 text-white"
                        : "bg-gray"
                    }
                    onClick={() => setselectectedModule(type)}
                  >
                    {type}
                  </Button>
                );
              })}
          </div>
          {selectedTypeModule === "File" && (
            <div className="flex flex-col mb-2">
              <label>File</label>
              <input
                type="file"
                id="module_title"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                placeholder="Module Title"
                required
                onChange={(e) => {
                  if (e.target.files) {
                    setselectFile(e.target.files[0]);
                  }
                }}
                {...(props.formType === "view" ? { disabled: true } : {})}
              />
            </div>
          )}
          {selectedTypeModule === "URL" && (
            <div className="flex flex-col mb-2">
              <label>URL</label>
              <input
                type="text"
                id="url"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                placeholder="Module Title"
                required
                {...register("url", { required: true })}
                {...(props.formType === "view" ? { disabled: true } : {})}
              />
            </div>
          )}
        </form>
      </Modal>
    </>
  );
};
export default ModuleModal;
