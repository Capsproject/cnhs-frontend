import { Props } from "@/types/Props";
import { Modal } from "antd";
import React from "react";

export const StudentResponseModal: React.FC<Props> = (props) => {
  return (
    <>
      <Modal open={props.show} onClose={props.handleClose} title="Student">
        <div className="flex">
          
        </div>
      </Modal>
    </>
  );
};

export default StudentResponseModal;
