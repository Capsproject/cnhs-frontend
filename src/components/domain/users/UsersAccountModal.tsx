import React from "react";
import _ from "lodash";
import PasswordStrengthBar from "react-password-strength-bar";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { UserService } from "@/services/user.service";
import { UserForm } from "@/types/user";

type Props = {
  show: boolean;
  formType: "add" | "update";
  data?: UserForm;
  disableDC: boolean;
  refetch: () => void;
  handleClose: () => void;
};

export const UserAccountFormModal: React.FC<Props> = (props) => {
  const { handleSubmit, register, setValue, reset } = useForm();

  const { data: userRoles, isFetching: userRolesLoading } = useQuery({
    queryKey: ["data-user-roles"],
    queryFn: async () => await UserService.getUserRolesList(),
  });

  const [password, setPassword] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [passwordStrength, setPasswordStrength] = React.useState<number>(0);

  const generateUniquePassword = (length: number = 16) => {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-=_+";

    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      const randomChar = charset[randomIndex];

      result += randomChar;
    }

    return result;
  };

  const handleCreatePassword = () => {
    const password = generateUniquePassword();

    setPassword(password);
    setValue("password", password);
  };

  const handleSetPasswordStrength = (strength: number) => {
    setPasswordStrength(strength);
  };

  const handleSubmitForm = handleSubmit(async (formData) => {
    setLoading(true);
    if (props.formType === "add") {
      reset();
      setValue("username", "");
      setValue("password", "");
      await UserService.createUser(formData, props.handleClose);
    } else {
      delete formData.password;
      await UserService.updateUser(formData.id, formData);
    }

    props.refetch();
    setLoading(false);
  });

  const handleCloseModal = () => {
    reset();
    props.handleClose();
  };
  React.useEffect(() => {
    // SET FORM VALUES BASED ON PROPS.DATA
    if (props.data) {
      for (const [key, value] of Object.entries(props.data)) {
        // @ts-ignore
        if (key === "userRole") setValue(key, props.data.userRole.id);
        if (key === "email")
          setValue(key, props.data.email.toLowerCase().replace(/ /g, "-"));
        else setValue(key, value);
      }
    }
  }, [props.data, setValue]);

  return (
    <Modal
      open={props.show}
      loading={loading}
      onCancel={handleCloseModal}
      title="Account Details"
      okText={props.formType === "add" ? "Create Account" : "Update Account"}
      onOk={handleSubmitForm}
    >
      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <p className="text-sm">
            <span className="text-red-600 mr-1">*</span>
            Account Type
          </p>
          {userRolesLoading ? (
            "Fetching account types ..."
          ) : (
            <div className="inline-block relative w-64">
              <select
                {...register("user_role_id")}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="">--</option>
                {userRoles
                  .filter((userRole: any) => userRole.name !== "superadmin")
                  .map((userRole: any) => (
                    <option
                      className="block px-4 py-2 text-sm text-gray-700"
                      value={userRole.id}
                      key={userRole.name}
                    >
                      {_.startCase(userRole.name)}
                    </option>
                  ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-wrap -mx-3 mb-1">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Full Name
            </label>
            <input
              className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Juan Dela Cruz"
              type="text"
              {...register("name")}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-1">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </label>
            <input
              className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="juandelacruz@domain.com"
              type="email"
              {...register("email")}
              required
            />
          </div>
        </div>

        {props.formType === "add" ? (
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Password
                </label>
                <input
                  className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="******************"
                  type="text"
                  defaultValue={password}
                  {...register("password")}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <button
              className="text-sm text-left text-blue-700 underline bg-white"
              type="button"
              onClick={handleCreatePassword}
            >
              Generate new password
            </button>
            {password.length ? (
              <PasswordStrengthBar
                password={password}
                onChangeScore={handleSetPasswordStrength}
              />
            ) : null}
          </div>
        ) : null}
      </form>
    </Modal>
  );
};
