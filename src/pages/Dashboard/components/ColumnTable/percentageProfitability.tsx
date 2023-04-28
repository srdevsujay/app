import { TableStyle } from "../../../../styled-components/Table/index";

export const percentageProfitabilityColumn = (
  dashboardMain: [],
  dataTotal: any
) => {
  return {
    title: "%Rentabilidad",
    field: "porcentajerentabilidad",
    render: (dashboardMain: any) => (
      <TableStyle>
        {`${
          dataTotal.porcentajerentabilidad === 0
            ? 0
            : dashboardMain?.porcentajerentabilidad.toFixed(2)
        }`}
      </TableStyle>
    ),
  };
};
