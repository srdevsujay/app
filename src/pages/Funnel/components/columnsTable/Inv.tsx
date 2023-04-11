import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";

export const InvColumn = (funnelData: any) => {
  console.log("funnelData.checkboxfunnelData.checkbox", funnelData.checkbox);
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
    name: "$Inv.",
    checkbox: funnelData?.checkbox,
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
