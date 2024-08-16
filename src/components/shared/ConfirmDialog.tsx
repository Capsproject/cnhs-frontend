import { Modal } from "antd";
import React from "react";

export type ConfirmDialogProps = {
  open?: boolean;
  title: string;
  description: string;
  confirmText?: string;
  type?: any;
  onConfirm: () => void;
  onCancel: () => void;
};
export const ConfirmDialog: React.FC<ConfirmDialogProps> = (props) => {
  return (
    <Modal open={props.open} onClose={props.onCancel} title={props.title} okText={props.title} onOk={props.onConfirm} onCancel={props.onCancel} okType={props.type}>
        <p className="text-sm text-gray-700">{props.description}</p>
    </Modal>
  );
};
