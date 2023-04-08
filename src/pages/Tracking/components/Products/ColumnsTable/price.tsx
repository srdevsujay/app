import { TableStyle } from "../../../../../styled-components/Table/index";
import { FormatNumber } from "../../../../../utilities/FormatNumber";

export const priceColumn = () => {
  return {
    title: "Precio",
    field: "price",
    render: (dashboardMain: any) => (
      <TableStyle>
        <>
          <FormatNumber number={dashboardMain?.price} />
        </>
      </TableStyle>
    ),
  };
};
