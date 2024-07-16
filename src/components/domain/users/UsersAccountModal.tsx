import React from "react";
import _ from "lodash";
import PasswordStrengthBar from "react-password-strength-bar";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Button, Modal, Spinner } from "flowbite-react";
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

  console.log(props.disableDC);

  const { data: userRoles, isFetching: userRolesLoading } = useQuery({
    queryKey: ["data-user-roles"],
    queryFn: async () => await UserService.getUsersList(),
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
    console.log(formData);
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
    <Modal show={props.show} onClose={handleCloseModal}>
      <Modal.Header>Account Details</Modal.Header>
      <Modal.Body>
        <form className="flex flex-col gap-5" onSubmit={handleSubmitForm}>
          <div className="flex flex-col gap-2">
            <p className="text-sm">
              <span className="text-red-600 mr-1">*</span>
              Account Type
            </p>
            {userRolesLoading ? (
              "Fetching account types ..."
            ) : (
              <select {...register("user_role_id")} required>
                <option value="">--</option>
                {userRoles
                  .filter((userRole: any) => userRole.name !== "superadmin")
                  .map((userRole: any) => (
                    <option value={userRole.id} key={userRole.name}>
                      {_.startCase(userRole.name)}
                    </option>
                  ))}
              </select>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm">
              <span className="text-red-600 mr-1">*</span>
              Full Name
            </p>
            <input type="text" {...register("name")} required />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm">
              <span className="text-red-600 mr-1">*</span>
              E-mail
            </p>
            <input type="email" {...register("email")} required />
          </div>

          {props.formType === "add" ? (
            <div className="flex flex-col gap-2">
              <p className="text-sm">
                <span className="text-red-600 mr-1">*</span>
                Default Password
              </p>
              <input
                type="text"
                defaultValue={password}
                {...register("password")}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                className="text-sm text-left text-blue-700 underline"
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

          <div className="flex flex-row justify-end gap-3">
            <Button
              color="success"
              type="submit"
              disabled={
                loading || (passwordStrength < 3 && props.formType === "add")
              }
            >
              {loading ? (
                <Spinner />
              ) : props.formType === "add" ? (
                "Create Account"
              ) : (
                "Update Account"
              )}
            </Button>
            <Button color="light" onClick={handleCloseModal}>
              Close
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};
