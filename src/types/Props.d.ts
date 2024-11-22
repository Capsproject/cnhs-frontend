/* eslint-disable @typescript-eslint/no-explicit-any */
export type Props = {
  show: boolean;
  formType: "add" | "update" | "view";
  data?: any;
  disableDC: boolean;
  loading?: boolean;
  refetch: () => void;
  handleClose: () => void;
};