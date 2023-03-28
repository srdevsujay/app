import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";
import { NumericFormat } from "react-number-format";

export const DWCRColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              DWCR: Porcentaje de personas que compran downsell sobre
              compradores, leads o Asistentes.
            </span>
            <br />
            <span>
              DWCR: Percentage of people who buy a downsell out of buyers, leads
              or attendees.
            </span>
          </>
        }
        placement="top"
      >
        <span>%DWCR</span>
      </Tooltip>
    ),
    field: "DWCR",
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.DWCR == 0
            ? "back-grey-table"
            : funnelData?.DWCR > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`${funnelData?.DWCR.toFixed(2)}%`}</BackColorsTable>
    ),
  };
};
