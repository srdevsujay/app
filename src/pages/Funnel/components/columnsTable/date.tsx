import { TableStyle } from "../../../../styled-components/Table";

export const dateColumn = (time_Zone: string, funnelData: any) => {
  return {
    title: "FECHA",
    value: "FECHA",
    field: "date_start",
    name: "FECHA",
    checkbox: true,
    render: (funnelData: any) => (
      <TableStyle>{funnelData.date_start}</TableStyle>
    ),
  };
};
