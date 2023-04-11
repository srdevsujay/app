import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";

export const CPBColumn = (funnelData: any) => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              CPB: Cuanto debo invertir para conseguir que una persona agende
              una cita.
            </span>
            <br />
            <span>
              CPB: How much should I invest to get one person to schedule an
              appointment.
            </span>
          </>
        }
        placement="top"
      >
        <span>$CPB</span>
      </Tooltip>
    ),
    field: "CPB",
    name: "$CPB",
    checkbox: funnelData.checkbox,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.CPB == 0
            ? "back-grey-table"
            : funnelData?.CPB > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`$${funnelData?.CPB.toFixed(2)}`}</BackColorsTable>
    ),
  };
};
