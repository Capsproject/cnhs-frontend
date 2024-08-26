import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthService } from "@/services/auth.service";
import { Button, Spin } from "antd";

export const RequestOtpForm: React.FC = () => {
  const { handleSubmit, register, reset, formState: {errors} } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const [loading, setLoading] = React.useState<boolean>(false);

  const handleFormSubmit = handleSubmit(async (formData: { email: string }) => {
    setLoading(true);

    await AuthService.requestOtp(formData, setLoading)
    .finally(() => {
      reset();
      window.location.href = "/auth/verify-otp";
    });
  });

  return (
    <div className="w-full">
      <h1 className="font-semibold text-lg mb-2">VERIFY YOUR ACCOUNT</h1>

      {loading ? (
        <div className="w-full flex flex-col items-center gap-y-4">
          <Spin spinning={loading} />
        </div>
      ) : (
        <form className="flex flex-col gap-3 text-[14px] mt-2" onSubmit={handleFormSubmit}>
          <div className="flex flex-col gap-y-1">
                <input
                  type="text"
                  placeholder="Your e-mail address"
                  className={
                    errors.email
                      ? "border border-red-400 appearance-none block w-full  text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      : "appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  }
                  {...register("email", { required: true })}
                />
                {errors.email ? (
                  <small className="text-xs text-red-400">
                    E-mail is required
                  </small>
                ) : null}
              </div>
          <Button type="primary" typeof="onSubmit" onClick={handleFormSubmit} className="h-[50px] w-full  text-white bg-primary  rounded mt-2">
            SEND OTP
          </Button>

          <Link to="/auth/signin" className="text-blue-600 underline mt-8">
            Back to login
          </Link>
        </form>
      )}
    </div>
  );
};
