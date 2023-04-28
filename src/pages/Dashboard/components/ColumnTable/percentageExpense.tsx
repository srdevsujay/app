import { TableStyle } from "../../../../styled-components/Table/index";
import { FormatNumber } from "../../../../utilities/FormatNumber";
export const percentageExpenseColumn = (
  dashboardMain: [],
  dataTotal: any,
  selectPlatform: any
) => {
  return {
    title: "%Gastos",
    field: "gastos",
    render: (dashboardMain: any) => (
      <TableStyle>
        {`${
          dataTotal.gastos === 0
            ? 0
            : ((dashboardMain.gastos * 100) / dataTotal.gastos).toFixed(2)
        }%`}
      </TableStyle>
    ),
  };
};
