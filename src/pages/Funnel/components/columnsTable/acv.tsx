import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";

export const acvColumn = (funnelData: any) => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              ACV: Dinero promedio que gasta una persona en productos.
            </span>
            <br />
            <span>
              ACV: The average amount of money a person spends on products.
            </span>
          </>
        }
        placement="top"
      >
        <span>$ACV</span>
      </Tooltip>
    ),
    field: "ACV",
    name: "$ACV",
    checkbox: funnelData.checkbox,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.ACV == 0
            ? "back-grey-table"
            : funnelData?.ACV > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`$${funnelData.ACV.toFixed(2)}`}</BackColorsTable>
    ),
  };
};
