import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";
import { NumericFormat } from "react-number-format";

export const UCRColumn = (funnelData: any) => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              UCR: Que porcentaje de compradores del producto principal compran
              el upsell o bump.
            </span>
            <br />
            <span>
              UCR: What percentage of main product buyers purchase the upsell or
              bump.
            </span>
          </>
        }
        placement="top"
      >
        <span>%UCR</span>
      </Tooltip>
    ),
    field: "UCR",
    name: "%UCR",
    checkbox: funnelData.checkbox,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.UCR == 0
            ? "back-grey-table"
            : funnelData?.UCR > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`${funnelData?.UCR.toFixed(2)}%`}</BackColorsTable>
    ),
  };
};
