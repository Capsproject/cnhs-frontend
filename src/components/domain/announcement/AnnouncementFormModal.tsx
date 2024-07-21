import { Modal } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";
import { AnnouncementService } from "@/services/announcement.service";
import { Button } from "antd";
type Props = {
  show: boolean;
  formType: "add" | "update";
  data?: any;
  refetch: () => void;
  handleClose: () => void;
};

export const AnnouncementFormModal: React.FC<Props> = (props) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const { handleSubmit, register, reset } = useForm();

  const handleFormSubmit = handleSubmit(async (data: any) => {
    setLoading(true);
    
    if (props.formType === "add") {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("message", data.message);
        formData.append("image", data.image[0]);
        console.log(data.image[0])
      await AnnouncementService.createAnnouncement(formData, setLoading);
      reset();
      props.refetch();
    } else {
      // await AnnouncementService.updateAnnouncement(formData);
      reset()
    }
    setLoading(false);
    props.handleClose();
  });
  return (
    <Modal show={props.show} onClose={props.handleClose}>
      <Modal.Header>
        {props.formType === "add" ? "Create" : "Update"} Announcement
      </Modal.Header>
      <Modal.Body>
        <form className="flex flex-col gap-2" onSubmit={handleFormSubmit}>
          <div className="flex flex-col gap-2">
            <p className="text-sm">
              <span className="text-red-600 mr-1">*</span> Title
            </p>
            <input type="text" {...register("title")} required />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm">
              <span className="text-red-600 mr-1">*</span> Description
            </p>
            <input type="text" {...register("message")} required />
          </div>
          <h1>Upload File</h1>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input {...register("image")} type="file" className="hidden" />
            </label>
          </div>
          <div className="flex flex-row justify-end gap-3">
            <Button loading={loading} type="primary" htmlType="submit">
              {props.formType === "add" ? "Create Announcement" : "Update Announcement"}
            </Button>
            <Button type="primary" danger onClick={props.handleClose}>
              Close
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};
