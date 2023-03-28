import { TableStyle } from "../../../../styled-components/Table";

export const dateColumn = (time_Zone: string) => {
  return {
    title: "FECHA",
    value: "FECHA",
    field: "date_start",
    render: (funnelData: any) => (
      <TableStyle>{funnelData.date_start}</TableStyle>
    ),
  };
};
