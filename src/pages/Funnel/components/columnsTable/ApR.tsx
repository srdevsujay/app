import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";

export const ApRColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              APR: Porcentaje de personas de las que hicieron clic al final del
              vídeo que terminaron aplicando.
            </span>
            <br />
            <span>
              APR: The percentage of people who clicked at the end of the video
              who ended up applying.
            </span>
          </>
        }
        placement="top"
      >
        <span>%APR</span>
      </Tooltip>
    ),
    field: "Apr",
    name: "%APR",
    checkbox: true,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.Apr == 0
            ? "back-grey-table"
            : funnelData?.Apr > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`${funnelData?.Apr.toFixed(2)}%`}</BackColorsTable>
    ),
  };
};
