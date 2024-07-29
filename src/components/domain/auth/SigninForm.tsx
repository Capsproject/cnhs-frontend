import React from "react";
import { useForm } from "react-hook-form";
import { AuthService } from "../../../services/auth.service";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Spin } from "antd";
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
    await AuthService.authenticateCredentials(formData, setLoading).finally(() => {
      reset();
    })
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

      <form className="w-full flex flex-col gap-y-3" onSubmit={handleLogin}>
        <div className="flex flex-col gap-y-1">
          <input
            type="text"
            placeholder="Your e-mail address"
            className={errors.email ? "border border-red-400" : "appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"}
            {...register("email", { required: true })}
          />
          {errors.email ? (
            <small className="text-xs text-red-400">E-mail is required</small>
          ) : null}
        </div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Your password"
            className={errors.password ? "border border-red-400" : "appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"}
            {...register("password", { required: true })}
          />
          <div className="absolute right-4 top-1">
              <button type="button" onClick={togglePasswordVisibility}>
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
          {errors.password ? (
            <small className="text-xs text-red-400">Password is required</small>
          ) : null}
        </div>

        <div className="flex justify-end">
          <a href="#" className="text-xs font-light">
            Forgot your password?
          </a>
        </div>
        <button type="submit">SIGN IN</button>
        <div className="text-xs text-center mt-4">
          <p className="">
            Don't have an account?
            <a href="#" className="ml-1 hover:underline">
              Click here
            </a>
          </p>
        </div>
      </form>
    </div>
    </>
    )}
  </>

  );
};
