import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";
import { NumericFormat } from "react-number-format";

export const SCRColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              SCR: Porcentaje de personas que compran del total de asistencias.
              Puede ser del producto principal, de downsells, o ambas.
            </span>
            <br />
            <span>
              SCR: Percentage of people who make a purchase out of the total
              number of attendees. It can refer to the main product, downsells,
              or both.
            </span>
          </>
        }
        placement="top"
      >
        <span>%SCR</span>
      </Tooltip>
    ),
    field: "SCR",
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.SCR == 0
            ? "back-grey-table"
            : funnelData?.SCR > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`${funnelData?.SCR.toFixed(2)}%`}</BackColorsTable>
    ),
  };
};
