import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";
import { NumericFormat } from "react-number-format";

export const SPCRColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              SPCR: Qué porcentaje de visitas compran en una carta de venta.
            </span>
            <br />
            <span>
              SPCR: What percentage of visits convert to sales in a sales
              letter."
            </span>
          </>
        }
        placement="top"
      >
        <span>%SPCR</span>
      </Tooltip>
    ),
    field: "SPCR",
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.SPCR == 0
            ? "back-grey-table"
            : funnelData?.SPCR > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`${funnelData?.SPCR.toFixed(2)}%`}</BackColorsTable>
    ),
  };
};
