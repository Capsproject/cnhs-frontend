/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useForm } from "react-hook-form";
import { AuthService } from "../../../services/auth.service";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Spin, Button } from "antd";
import { Link } from "react-router-dom";
export const SigninForm: React.FC = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleLogin = handleSubmit(async (formData: any) => {
    setLoading(true);
    await AuthService.authenticateCredentials(formData, setLoading).finally(
      () => {
        reset();
      }
    );
  });

  return (
    <>
      {loading ? (
        <div className="w-full flex flex-col items-center gap-y-4">
          <Spin spinning={loading} />
        </div>
      ) : (
        <>
          <div className="w-full flex flex-col items-center gap-y-4">
            <h1 className="text-center text-lg  font-bold">SIGN IN</h1>
            <p className="text-xs">Provide your credentials</p>

            <form
              className="w-full flex flex-col gap-y-3"
              onSubmit={handleLogin}
            >
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
              <div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="py-3 ps-4 pe-10 block w-full border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-white-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Enter password"
                    {...register("password", { required: true })}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className={
                      errors.password
                        ? "border border-red-400 absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500"
                        : "absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500"
                    }
                  >
                    {showPassword ? (
                      <FiEyeOff size={20} className="text-white" />
                    ) : (
                      <FiEye size={20} className="text-white" />
                    )}
                  </button>
                </div>
                {errors.password ? (
                  <small className="text-xs text-red-400">
                    Password is required
                  </small>
                ) : null}
              </div>

              <div className="flex justify-end">
                Don't have an account?
                  <Link
                    to="/auth/request-otp"
                    className="text-blue-600 underline mt-8"
                  >
                    Forgot your password?
                  </Link>
              </div>
              <Button type="primary" htmlType="submit" block>
                Sign In
              </Button>
              {/* <div className="text-xs text-center mt-4">
                <p className="">
                  Don't have an account?
                  <a href="#" className="ml-1 hover:underline">
                    Click here
                  </a>
                </p>
              </div> */}
            </form>
          </div>
        </>
      )}
    </>
  );
};
