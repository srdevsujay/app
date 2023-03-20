import { TableStyle } from "../../../../styled-components/Table/index";

export const percentageProfitabilityColumn = (dashboardMain: []) => {
  return {
    title: "%Rentabilidad",
    field: "porcentajerentabilidad",
    render: (dashboardMain: any) => (
      <TableStyle>
        {`${dashboardMain?.porcentajerentabilidad.toFixed(2)}`}
      </TableStyle>
    ),
  };
};
