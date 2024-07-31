import { EventService } from "@/services/event.service";
import { DatePicker, DatePickerProps, Modal, TimePicker, TimePickerProps } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import type { Dayjs } from 'dayjs';

type Props = {
  show: boolean;
  formType: "add" | "update";
  data?: any;
  refetch: () => void;
  handleClose: () => void;
};

export const EventFormModal: React.FC<Props> = (props) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const closeModal = () => {
    reset();
    setSelectedImage(null);
    props.handleClose();
  }
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [selectedBanner, setSelectBanner] = React.useState<any | null>(null);
  const handleFormSubmit = handleSubmit(async (data: any) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("message", data.message);
    formData.append("image",  selectedBanner);
    formData.append("event_date", selectedDate);
    formData.append("event_time", selectedTime);
    console.log(data.image[0]);
    if (props.formType === "add") {
      await EventService.createEvent(formData);
      reset();
      props.refetch();
      setSelectedImage(null);
      setSelectBanner(null);
    } else {
      await EventService.updateEvent(formData);
      reset();
      setSelectedImage(null);
      setSelectBanner(null);
      props.handleClose();
    }
    setLoading(false);
    props.handleClose();
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      setSelectBanner(file);
    } else {
      setSelectedImage(null);
    }
  };
  const [selectedDate, setSelectedDate] = React.useState<any>();
  const handleDateChange : DatePickerProps<Dayjs[]>['onChange'] = (date) =>{
    setSelectedDate(date.toLocaleString());
  };
  const  [selectedTime, setSelectedTime] =React.useState<any>();
  const handleTimeChange: TimePickerProps['onChange'] = (time) => {
    setSelectedTime(time?.format('HH:mm a'));
    console.log(selectedTime);
  };
  return (
    <Modal
      loading={loading}
      title={props.formType === "add" ? "Create Event" : "Update Event"}
      onCancel={closeModal}
      okText="Submit"
      onClose={closeModal}
      open={props.show}
      onOk={handleFormSubmit}
    >
      <form className="flex flex-col gap-2" onSubmit={handleFormSubmit}>
        <div className="flex flex-col gap-2">
          <input
            className={
              errors.title
                ? "border border-red-400"
                : "appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            }
            placeholder="Event Title"
            {...register("title", { required: true })}

            type="text"
            required
          />
          {errors.title ? (
            <small className="text-xs text-red-400">Title is required</small>
          ) : null}
        </div>
        <div className="flex flex-col gap-2">
          <input
            className={
              errors.message
                ? "border border-red-400"
                : "appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            }
            placeholder="Event Description"
            {...register("message", { required: true })}
            type="text"
            required
          />
          {errors.title ? (
            <small className="text-xs text-red-400">Description is required</small>
          ) : null}
        </div>
        <div className="flex items-center w-full gap-5 justify-around flex-wrap">
          <DatePicker onChange={handleDateChange} needConfirm size="large"/>
          <TimePicker onChange={handleTimeChange} use12Hours size="large"/>
        </div>
        <h1>Upload File</h1>
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected Image"
                className="w-full h-full object-cover"
              />
            ) : (
              <>
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
              </>
            )}
            <input
              {...register("image")}
              type="file"
              className="hidden"
              onChange={handleImageChange} 
            />
          </label>
          {errors.image ? (
            <small className="text-xs text-red-400">Image is required</small>
          ) : null}
        </div>
        
      </form>
    </Modal>
  );
};
