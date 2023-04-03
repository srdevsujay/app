import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";

export const CKCRColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              CKCR: Porcentaje de personas que compran de las que visitan el
              checkout o carrito de compras.
            </span>
            <br />
            <span>
              CKCR: Percentage of people who make a purchase out of those who
              visit the checkout or shopping cart.
            </span>
          </>
        }
        placement="top"
      >
        <span>%CKCR</span>
      </Tooltip>
    ),
    field: "CKCR",
    name: "%CKCR",
    checkbox: true,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.CKCR == 0
            ? "back-grey-table"
            : funnelData?.CKCR > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`${funnelData?.CKCR.toFixed(2)}%`}</BackColorsTable>
    ),
  };
};
