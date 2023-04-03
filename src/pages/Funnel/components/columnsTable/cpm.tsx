import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";

export const cpmColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              CPM: Cuánto dinero cuesta obtener 1.000 impresiones de publicidad.
            </span>
            <br />
            <span>
              CPM: The number of times your content or advertisement is
              displayed.
            </span>
          </>
        }
        placement="top"
      >
        <span>$CPM</span>
      </Tooltip>
    ),
    field: "cpm",
    name: "$CPM",
    checkbox: false,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.cpm == 0
            ? "back-grey-table"
            : funnelData?.cpm > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >
        {`$${funnelData?.cpm.toFixed(2)}`}
      </BackColorsTable>
    ),
  };
};
