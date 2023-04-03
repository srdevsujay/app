import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";
import { NumericFormat } from "react-number-format";

export const FCRColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              FCR: Porcentaje de leads del funnel que compran un producto.
            </span>
            <br />
            <span>
              FCR: The percentage of Leads from the Funnel that make a purchase.
            </span>
          </>
        }
        placement="top"
      >
        <span>%FCR</span>
      </Tooltip>
    ),
    field: "FCR",
    name: "%FCR",
    checkbox: true,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.FCR == 0
            ? "back-grey-table"
            : funnelData?.FCR > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`${funnelData?.FCR.toFixed(2)}%`}</BackColorsTable>
    ),
  };
};
