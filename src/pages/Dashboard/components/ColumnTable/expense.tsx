import { TableStyle } from "../../../../styled-components/Table/index";

export const expenseColumn = (dashboardMain: []) => {
  return {
    title: "#Gastos",
    field: "gastos",
    render: (dashboardMain: any) => (
      <TableStyle>{`${dashboardMain?.gastos.toFixed(2)}`}</TableStyle>
    ),
  };
};
