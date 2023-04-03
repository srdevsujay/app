import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";
import { NumericFormat } from "react-number-format";

export const SUTSDColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              SUTSD: Cantidad de días que pasan desde que una asiste a la cita
              hasta que compra.
            </span>
            <br />
            <span>
              SUTSD: The number of days that pass from when a person attends the
              appointment until they make a purchase.
            </span>
          </>
        }
        placement="top"
      >
        <span>#SUTSD</span>
      </Tooltip>
    ),
    field: "sutds",
    name: "#SUTSD",
    checkbox: false,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.sutds == 0
            ? "back-grey-table"
            : funnelData?.sutds > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >
        <NumericFormat
          value={funnelData?.sutds}
          allowLeadingZeros
          thousandSeparator=","
          displayType="text"
        />
      </BackColorsTable>
    ),
  };
};
