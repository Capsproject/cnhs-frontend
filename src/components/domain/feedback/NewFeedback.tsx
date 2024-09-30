import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UserService } from "@/services/user.service";

export const NewFeedbackModal: React.FC = (props) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [teachers, setTeachers] = useState<any[]>([]);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const data = await UserService.getUsersList();
        const filteredTeachers = data.filter(
          (user: any) => user.user_role.id === 3
        );
        console.log(filteredTeachers);
        setTeachers(filteredTeachers);
      } catch (error) {
        console.error("Failed to fetch teachers", error);
      }
    };

    fetchTeachers();
  }, []);

  const submit = handleSubmit(async (data: any) => {
    console.log("submit", data);
  });

  return (
    <>
      <form onSubmit={submit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Teacher
          </label>

          <select
            {...register("teacher", { required: true })}
            className="mt-1 mb-5 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
          >
            <option value="">Select Teacher</option>
            {teachers.map((teacher) => (
              <option key={teacher.id} value={teacher.id}>
                {teacher.name}
              </option>
            ))}
          </select>
          <label className="block text-sm font-medium text-gray-700">
            Feedback
          </label>
          <textarea
            {...register("feedback", { required: true })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
          />
          {errors.feedback && (
            <p className="text-red-500 text-xs mt-1">This field is required</p>
          )}
        </div>
      </form>
    </>
  );
};

export default NewFeedbackModal;
