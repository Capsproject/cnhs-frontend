import { Props } from "@/types/Props";
import { Modal } from "antd";
import React from "react";
import { useForm } from "react-hook-form";

export const CreateSectionModal: React.FC<Props> = (props) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const {
    setValue,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  
  const submit = handleSubmit(async (data: any) => {
    console.log("submit", data);
  })

  return (
    <>
      <Modal
        loading={loading}
        title="Create Section"
        open={props.show}
        onCancel={props.handleClose}
        onOk={submit}
      >
        <form onSubmit={submit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Section Name</label>
            <input
              type="text"
              {...register("section_name", { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.section_name && <p className="text-red-500 text-xs mt-1">This field is required</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Section Description</label>
            <textarea
              {...register("section_description", { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.section_description && <p className="text-red-500 text-xs mt-1">This field is required</p>}
          </div>
        </form>
      </Modal>
    </>
  )
}