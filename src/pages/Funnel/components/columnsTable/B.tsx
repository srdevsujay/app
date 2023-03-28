import { Tooltip } from "@mui/material";
import { NumericFormat } from "react-number-format";
import { BackColorsTable } from "../../../../styled-components/Table/index";

export const BColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              B: Cantidad de personas que agendan una cita en el calendario de
              un vendedor.
            </span>
            <br />
            <span>
              B: Number of people who schedule an appointment on a salesperson's
              calendar.
            </span>
          </>
        }
        placement="top"
      >
        <span>#B</span>
      </Tooltip>
    ),
    field: "B",
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.B == 0
            ? "back-grey-table"
            : funnelData?.B > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >
        <NumericFormat
          value={funnelData?.B}
          allowLeadingZeros
          thousandSeparator=","
          displayType="text"
        />
      </BackColorsTable>
    ),
  };
};
