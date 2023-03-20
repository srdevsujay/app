import { TableStyle } from "../../../../styled-components/Table/index";
import { FormatNumber } from "../../../../utilities/FormatNumber";
export const incomeColumn = (dashboardMain: []) => {
  return {
    title: "$Ingresos",
    field: "ingresos",
    render: (dashboardMain: any) => (
      <TableStyle>
        <>
          <FormatNumber number={dashboardMain?.ingresos} />
        </>
      </TableStyle>
    ),
  };
};
