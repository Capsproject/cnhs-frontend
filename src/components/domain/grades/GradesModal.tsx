import { Props } from "@/types/Props";
import { Modal } from "antd";
import React from "react";

export const GradesModal: React.FC<Props> = (props) => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleSubmit = () => {
    setLoading(true);
    if (props.formType === "add") {
      // Add logic here
    } else {
      // Update logic here
    }
    setLoading(false);
    props.handleClose();
  }
  return (
    <Modal loading={loading} onClose={props.handleClose}>
      
    </Modal>
  )
}

export default GradesModal;