import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";
import { NumericFormat } from "react-number-format";

export const RevenueColumn = (funnelData: any) => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>Revenue: Dinero total generado y a generar.</span>
            <br />
            <span>Revenue: Total money generated and to be generated.</span>
          </>
        }
        placement="top"
      >
        <span>$Revenue</span>
      </Tooltip>
    ),
    field: "revenue",
    name: "$Revenue",
    checkbox: funnelData.checkbox,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.revenue == 0
            ? "back-grey-table"
            : funnelData?.revenue > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`$${funnelData?.revenue.toFixed(2)}`}</BackColorsTable>
    ),
  };
};
