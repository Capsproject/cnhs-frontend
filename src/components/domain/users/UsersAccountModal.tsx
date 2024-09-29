/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import _, { get } from "lodash";
import PasswordStrengthBar from "react-password-strength-bar";
import { useQuery } from "@tanstack/react-query";
import { Button, Modal } from "antd";
import { UserService } from "@/services/user.service";
import { UserForm } from "@/types/user";
import { useForm, useWatch } from "react-hook-form";
import PROFILE_IMAGE from "@/assets/profile.png";
import { EditOutlined } from "@ant-design/icons";
import { Props } from "@/types/Props";
import { ErrorMessage } from "@hookform/error-message";
import { clear } from "console";

export const UserAccountFormModal: React.FC<Props> = (props) => {
  const {
    handleSubmit,
    register,
    setValue,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const { data: userRoles, isFetching: userRolesLoading } = useQuery({
    queryKey: ["data-user-roles"],
    queryFn: async () => await UserService.getUserRolesList(),
  });
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [selectedBanner, setSelectBanner] = React.useState<any | null>(null);

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

  const handleSubmitForm = handleSubmit(async () => {
    const formData = getValues();
    setLoading(true);
    formData.profile_img = selectedBanner;
    if (props.formType === "add") {
      reset();
      setValue("username", "");
      setValue("password", "");
      await UserService.createUser(formData, handleCloseModal());
    } else {
      setPassword("");
      await UserService.updateUser(formData.id, formData);
    }

    props.refetch();
    setLoading(false);
  });

  const handleCloseModal = () => {
    reset();
    props.handleClose();
  };

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

  // Watching user_role_id
  const [userRoleId, setUserRoleId] = React.useState<number | null>(null);
  const AccountType = getValues("user_role_id");
  React.useEffect(() => {
    // SET FORM VALUES BASED ON PROPS.DATA
    if (userRoleId === null || userRoleId === undefined) return;
    if (props.data) {
      for (const [key, value] of Object.entries(props.data)) {
        if (key === "userRole") setValue(key, props.data.userRoleId);
        if (key === "email")
          setValue(key, props.data.email.toLowerCase().replace(/ /g, "-"));
        else setValue(key, value);
      }
    }
  }, [props.data, setValue, AccountType]);

  return (
    <Modal
      open={props.show}
      loading={loading}
      onCancel={handleCloseModal}
      width={1000}
      title="Account Details"
      okText={props.formType === "add" ? "Create Account" : "Update Account"}
      onOk={handleSubmitForm}
    >
      <form>
        {/* Image Select */}
        <div className="flex w-full mb-4">
          <div className="flex w-full flex-wrap items-center justify-between">
            <div className="flex mr-2">
              {selectedImage ? (
                <img
                  className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-orange-300 dark:ring-orange-500"
                  src={selectedImage}
                  alt="Bordered avatar"
                />
              ) : (
                <img
                  className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-orange-300 dark:ring-orange-500"
                  src={PROFILE_IMAGE}
                  alt="Bordered avatar"
                />
              )}
              <input
                {...register("profile_img")}
                type="file"
                className="hidden"
                id="imageSelect"
                onChange={handleImageChange}
                {...(props.formType === "view" ? { disabled: true } : {})}
              />
            </div>
            {/* Info Input */}
            <div className="flex w-3/4 flex-col">
              <div className="flex mb-2">
                <input
                  type="text"
                  id="first_name"
                  className="bg-orange-50 border border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-300"
                  placeholder="Your name"
                  required
                  {...register("name", { required: true })}
                  {...(props.formType === "view" ? { disabled: true } : {})}
                />
              </div>
              <div className="flex w-full gap-2 mb-2 items-center">
                <div className="w-1/2">
                  <input
                    type="date"
                    id="first_name"
                    className="bg-orange-50 border border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 "
                    {...register("birthdate", { required: true })}
                    required
                  />
                </div>
                <div className="w-1/2">
                  <select
                    className="bg-orange-50 border border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                    {...register("gender", { required: true })}
                  >
                    <option selected>Select your Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <Button
                  type="primary"
                  icon={<EditOutlined />}
                  onClick={() =>
                    document.getElementById("imageSelect")?.click()
                  }
                />
                <select
                  className="bg-orange-50 border border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block p-2.5"
                  {...register("user_role_id", {
                    required: true,
                    onChange: (e) => setUserRoleId(+e.target.value),
                  })}
                >
                  <option value="0">Select your role</option>
                  {userRoles?.map((role: any) => (
                    <option key={role.id} value={role.id}>
                      {_.startCase(role.name)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Inputs First Info*/}
        <div className="flex w-full">
          <div className="flex w-full flex-wrap items-center">
            <div className="flex w-full flex-col">
              {/* Address */}
              <div className="flex mb-2">
                <input
                  type="text"
                  className="bg-orange-50 border border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-300"
                  placeholder="Your address"
                  required
                  {...register("address", { required: true })}
                  {...(props.formType === "view" ? { disabled: true } : {})}
                />
              </div>

              {/* Email and Password */}
              <div className="w-full flex gap-2 mb-2">
                <div className="w-1/2">
                  <input
                    type="email"
                    className="bg-orange-50 border border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-300"
                    placeholder="Your email"
                    required
                    {...register("email", { required: true })}
                    {...(props.formType === "view" ? { disabled: true } : {})}
                  />
                </div>
                <div className="w-1/2">
                  <input
                    className="bg-orange-50 border border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-300"
                    placeholder="******************"
                    type="text"
                    defaultValue={password}
                    {...register("password")}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
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
                      scoreWordClassName="hidden"
                    />
                  ) : null}
                </div>
              </div>

              {/* Religion & Contact Number */}
              <div className="w-full flex gap-2 mb-2">
                <div className="w-1/2">
                  <input
                    type="text"
                    className="bg-orange-50 border border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-300"
                    placeholder="Your contact number"
                    required
                    {...register("contact_number", {
                      required: true,
                      pattern: {
                        value: /^(09|\+639)\d{9}$/,
                        message: "Invalid Philippine phone number",
                      },
                      validate: (value) =>
                        !isNaN(Number(value)) ||
                        "Contact number must be numeric",
                    })}
                    {...(props.formType === "view" ? { disabled: true } : {})}
                  />
                  <ErrorMessage errors={errors} name="contact_number" />
                  {errors.email ? (
                    <small className="text-xs text-red-400">
                      {errors.root?.message}
                    </small>
                  ) : null}
                </div>
                <div className="w-1/2">
                  <input
                    className="bg-orange-50 border border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-300"
                    placeholder="Your Religion"
                    type="text"
                    {...register("religion")}
                    required
                  />
                </div>
              </div>

              {/* Status & Nationality */}
              <div className="w-full flex gap-2 mb-2">
                <div className="w-1/2">
                  <input
                    type="text"
                    className="bg-orange-50 border border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-300"
                    placeholder="Your Status"
                    required
                    {...register("status", { required: true })}
                    {...(props.formType === "view" ? { disabled: true } : {})}
                  />
                </div>
                <div className="w-1/2">
                  <input
                    className="bg-orange-50 border border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-300"
                    placeholder="Your Nationality "
                    type="text"
                    {...register("nationality")}
                    required
                  />
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="w-full flex gap-2 mb-2">
                <div className="w-1/2">
                  <input
                    type="text"
                    className="bg-orange-50 border border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-300"
                    placeholder="Your contact number"
                    required
                    {...register("emergency_contact", {
                      required: true,
                      pattern: {
                        value: /^(09|\+639)\d{9}$/,
                        message: "Invalid Philippine phone number",
                      },
                      validate: (value) =>
                        !isNaN(Number(value)) ||
                        "Contact number must be numeric",
                    })}
                    {...(props.formType === "view" ? { disabled: true } : {})}
                  />
                </div>
              </div>

              {/* Second Info */}
              {userRoleId === 4 && (
                <div className="w-full mb-2">
                  <h1 className="text-lg font-semibold text-orange-900">
                    Parent Information
                  </h1>
                  <div className="w-full flex gap-2 mb-2">
                    <div className="w-1/2">
                      <input
                        type="text"
                        className="bg-orange-50 border border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-300"
                        placeholder="Father's Name"
                        required
                        {...register("father_name", { required: true })}
                        {...(props.formType === "view"
                          ? { disabled: true }
                          : {})}
                      />
                    </div>
                    <div className="w-1/2">
                      <input
                        type="text"
                        className="bg-orange-50 border border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-300"
                        placeholder="Mother's Name"
                        required
                        {...register("mother_name", { required: true })}
                        {...(props.formType === "view"
                          ? { disabled: true }
                          : {})}
                      />
                    </div>
                  </div>
                  <div className="w-full flex gap-2 mb-2">
                    <div className="w-1/2">
                      <input
                        type="text"
                        className="bg-orange-50 border border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-300"
                        placeholder="Father'cupation"
                        required
                        {...register("father_occu", { required: true })}
                        {...(props.formType === "view"
                          ? { disabled: true }
                          : {})}
                      />
                    </div>
                    <div className="w-1/2">
                      <input
                        type="text"
                        className="bg-orange-50 border border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-300"
                        placeholder="Mother's Occupation"
                        required
                        {...register("mother_occu", { required: true })}
                        {...(props.formType === "view"
                          ? { disabled: true }
                          : {})}
                      />
                    </div>
                  </div>
                  <div className="full mb-2">
                    <input
                      type="text"
                      className="bg-orange-50 border border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-300"
                      placeholder="09123456789"
                      required
                      {...register("parent_contactNumber", { required: true })}
                      {...(props.formType === "view" ? { disabled: true } : {})}
                    />
                  </div>
                  <div className="full mb-2">
                    <input
                      type="text"
                      className="bg-orange-50 border border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-300"
                      placeholder="Address"
                      required
                      {...register("parent_address", { required: true })}
                      {...(props.formType === "view" ? { disabled: true } : {})}
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      className="bg-orange-50 border border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-300"
                      placeholder="Permanent Address"
                      required
                      {...register("permanent_address", { required: true })}
                      {...(props.formType === "view" ? { disabled: true } : {})}
                    />
                  </div>
                </div>
              )}

              {userRoleId === 3 && (
                <div className="w-full mb-2">
                  <h1 className="text-lg font-semibold text-orange-900">
                    Spouse Information
                  </h1>
                  <div className="w-full flex gap-2 mb-2">
                    <div className="w-1/2">
                      <input
                        type="text"
                        className="bg-orange-50 border border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-300"
                        placeholder="Father's Name"
                        required
                        {...register("father_name", { required: true })}
                        {...(props.formType === "view"
                          ? { disabled: true }
                          : {})}
                      />
                    </div>
                    <div className="w-1/2">
                      <input
                        type="text"
                        className="bg-orange-50 border border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-300"
                        placeholder="Mother's Name"
                        required
                        {...register("mother_name", { required: true })}
                        {...(props.formType === "view"
                          ? { disabled: true }
                          : {})}
                      />
                    </div>
                  </div>
                  <div className="w-full flex gap-2 mb-2">
                    <div className="w-1/2">
                      <input
                        type="text"
                        className="bg-orange-50 border border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-300"
                        placeholder="Father'cupation"
                        required
                        {...register("father_occu", { required: true })}
                        {...(props.formType === "view"
                          ? { disabled: true }
                          : {})}
                      />
                    </div>
                    <div className="w-1/2">
                      <input
                        type="text"
                        className="bg-orange-50 border border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-300"
                        placeholder="Mother's Occupation"
                        required
                        {...register("mother_occu", { required: true })}
                        {...(props.formType === "view"
                          ? { disabled: true }
                          : {})}
                      />
                    </div>
                  </div>
                  <div className="full mb-2">
                    <input
                      type="text"
                      className="bg-orange-50 border border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-300"
                      placeholder="09123456789"
                      required
                      {...register("spouse_contactNumber", { required: true })}
                      {...(props.formType === "view" ? { disabled: true } : {})}
                    />
                  </div>
                  <div className="full mb-2">
                    <input
                      type="text"
                      className="bg-orange-50 border border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-300"
                      placeholder="Address"
                      required
                      {...register("spouse_address", { required: true })}
                      {...(props.formType === "view" ? { disabled: true } : {})}
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      className="bg-orange-50 border border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-300"
                      placeholder="Permanent Address"
                      required
                      {...register("spouse_permanent_address", { required: true })}
                      {...(props.formType === "view" ? { disabled: true } : {})}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
};
