import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";
import { NumericFormat } from "react-number-format";

export const InvColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>Inv: Cantidad de dinero que se invierte en publicidad.</span>
            <br />
            <span>Inv: Amount of money invested in advertising."</span>
          </>
        }
        placement="top"
      >
        <span>$Inv.</span>
      </Tooltip>
    ),
    field: "spend",
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.spend == 0
            ? "back-grey-table"
            : funnelData?.spend > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`$${funnelData?.spend.toFixed(2)}`}</BackColorsTable>
    ),
  };
};
