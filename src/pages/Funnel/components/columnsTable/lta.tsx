import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";

export const LTAColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              LTA: Porcentaje de registros que hacen clic para agendar o comprar
              (acción).
            </span>
            <br />
            <span>
              LTA: The percentage of registrations that click to schedule or
              purchase (action).
            </span>
          </>
        }
        placement="top"
      >
        <span>%LTA</span>
      </Tooltip>
    ),
    field: "LTA",
    name: "%LTA",
    checkbox: true,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.LTA == 0
            ? "back-grey-table"
            : funnelData?.LTA > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`${funnelData?.LTA.toFixed(2)}%`}</BackColorsTable>
    ),
  };
};
