/* eslint-disable @typescript-eslint/no-explicit-any */
export type TableColumns = {
  title: string;
  key: string;
  dataIndex: string;
  render?: (row: any) => JSX.Element;
}