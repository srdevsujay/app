import { TableStyle } from "../../../../styled-components/Table/index";

export const leadColumn = (dashboardMain: []) => {
  return {
    title: "#Leads",
    field: "leeds",
    render: (dashboardMain: any) => (
      <TableStyle>{`${dashboardMain?.leeds.toFixed(2)}`}</TableStyle>
    ),
  };
};
