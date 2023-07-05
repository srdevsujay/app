import { TableStyle } from "../../../../styled-components/Table/index";
import { FormatNumber } from "../../../../utilities/FormatNumber";
export const percentageIncomeColumn = (
  dashboardMain: [],
  dataTotal: any,
  selectPlatform: any
) => {
  return {
    title: "%Ingresos",
    // field: "ingresos",
    render: (dashboardMain: any) => (
      <TableStyle>
        {`${
          dataTotal?.ingresos === 0
            ? 0
            : ((dashboardMain?.ingresos * 100) / dataTotal?.ingresos).toFixed(2)
        }%`}
      </TableStyle>
    ),
  };
};
