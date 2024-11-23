/* eslint-disable @typescript-eslint/no-explicit-any */
export type Props = {
  show: boolean;
  formType?:   "add" | "update" | "view" | "view-response" | "delete";
  data?: any;
  disableDC?: boolean;
  loading?: boolean;
  refetch: () => void;
  handleClose: () => void;
};