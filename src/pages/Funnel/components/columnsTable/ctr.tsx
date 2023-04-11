import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";

export const ctrColumn = (funnelData: any) => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              CTR: Porcentaje de clics en el enlace en comparación con el número
              de impresiones.
            </span>
            <br />
            <span>
              CTR: percentage of clicks on the link compared to the number of
              impressions.
            </span>
          </>
        }
        placement="top"
      >
        <span>%CTR</span>
      </Tooltip>
    ),
    field: "ctr",
    name: "%CTR",
    checkbox: funnelData.checkbox,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.ctr == 0
            ? "back-grey-table"
            : funnelData?.ctr > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >
        {`${funnelData?.ctr.toFixed(2)}%`}
      </BackColorsTable>
    ),
  };
};
