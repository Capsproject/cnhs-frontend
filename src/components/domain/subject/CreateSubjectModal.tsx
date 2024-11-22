import { Props } from "@/types/Props";
import { Input, Modal } from "antd";
import React from "react";

export const CreateSubjectModal: React.FC<Props> = (props) => {
  React.useEffect(() => {
    console.log(props.formType);
  }, [props.formType, props.data]);
  return (
    <Modal
      loading={props.loading}
      title="Create Subject"
      open={props.show}
      onCancel={props.handleClose}
      okText="Submit"
    >
      <Input  />
    </Modal>
  );
}