import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";

export const atrColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              ATR: Porcentaje de personas que se registraron asisten a ver el
              video o webinar.
            </span>
            <br />
            <span>
              ATR: The percentage of people who registered and attended the
              video or webinar.
            </span>
          </>
        }
        placement="top"
      >
        <span>%ATR</span>
      </Tooltip>
    ),
    field: "ATR",
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.ATR == 0
            ? "back-grey-table"
            : funnelData?.ATR > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`${funnelData?.ATR.toFixed(2)}%`}</BackColorsTable>
    ),
  };
};
