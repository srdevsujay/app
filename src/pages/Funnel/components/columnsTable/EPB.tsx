import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";

export const EPBColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              EPB: Cuánto dinero recibo por cada cita (revenue o cash).
            </span>
            <br />
            <span>
              EPB: How much revenue or cash do I receive per appointment.
            </span>
          </>
        }
        placement="top"
      >
        <span>$EPB</span>
      </Tooltip>
    ),
    field: "EPB",
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.EPB == 0
            ? "back-grey-table"
            : funnelData?.EPB > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`$${funnelData?.EPB.toFixed(2)}`}</BackColorsTable>
    ),
  };
};
