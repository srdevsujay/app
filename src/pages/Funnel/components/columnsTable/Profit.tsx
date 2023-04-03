import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";

export const ProfitColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              Profit: Dinero restante luego de descontar costo de anuncios.
            </span>
            <br />
            <span>
              Profit: The remaining money after deducting the cost of
              advertising.
            </span>
          </>
        }
        placement="top"
      >
        <span>$Profit</span>
      </Tooltip>
    ),
    field: "profit",
    name: "$Profit",
    checkbox: true,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.profit == 0
            ? "back-grey-table"
            : funnelData?.profit > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`$${funnelData?.profit.toFixed(2)}`}</BackColorsTable>
    ),
  };
};
