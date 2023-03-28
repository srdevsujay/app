import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";

export const BRColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              BR: Porcentaje de personas de las que hicieron clic al final del
              vídeo que terminaron agendando. Con Aplicación Previa: Cantidad de
              personas que aplican que terminan agendando.
            </span>
            <br />
            <span>
              BR: The percentage of people who clicked at the end of the video
              who ended up scheduling an appointment. With Pre-application:
              Number of people who apply and end up scheduling.
            </span>
          </>
        }
        placement="top"
      >
        <span>%BR</span>
      </Tooltip>
    ),
    field: "BR",
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.BR == 0
            ? "back-grey-table"
            : funnelData?.BR > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`${funnelData?.BR.toFixed(2)}%`}</BackColorsTable>
    ),
  };
};
