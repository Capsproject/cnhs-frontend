/* eslint-disable @typescript-eslint/no-explicit-any */
export type Props = {
  show: boolean;
  formType: "add" | "update" | "view";
  data?: any;
  refetch: () => void;
  handleClose: () => void;
};