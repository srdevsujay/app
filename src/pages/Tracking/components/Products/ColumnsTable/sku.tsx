import { TableStyle } from "../../../../../styled-components/Table/index";
import { FormatNumber } from "../../../../../utilities/FormatNumber";

export const skuColumn = () => {
  return {
    title: "Sku",
    field: "sku",
    render: (dashboardMain: any) => (
      <TableStyle>
        <>
          <FormatNumber number={dashboardMain?.sku} />
        </>
      </TableStyle>
    ),
  };
};
