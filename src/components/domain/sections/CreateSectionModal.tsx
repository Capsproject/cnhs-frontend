import { gradeLevel } from "@/components/constants";
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
  const gradeLevels = gradeLevel;

  const submit = handleSubmit(async (data: any) => {
    console.log("submit", data);
  });

  return (
    <>
      <Modal
        loading={loading}
        title="Create Section"
        open={props.show}
        onCancel={props.handleClose}
        onOk={submit}
        okText="Create"
      >
        <form onSubmit={submit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Grade Level
            </label>
            <select
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              {...register("grade_level", { required: true })}
            >
              <option value="">Select Grade Level</option>
              {gradeLevels.map((grade) => (
                <option key={grade.value} value={grade.value}>
                  {grade.label}
                </option>
              ))}
            </select>
            {errors.grade_level && (
              <p className="text-red-500 text-xs mt-1">
                This field is required
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Section Name
            </label>
            <input
              {...register("section_name", { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            />
            {errors.section_name && (
              <p className="text-red-500 text-xs mt-1">
                This field is required
              </p>
            )}
          </div>
        </form>
      </Modal>
    </>
  );
};
