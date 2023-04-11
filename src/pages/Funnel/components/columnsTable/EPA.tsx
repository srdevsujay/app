import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";

export const EPAColumn = (funnelData: any) => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              EPA: Cuánto dinero recibo por cada asistente (revenue o cash).
            </span>
            <br />
            <span>
              EPA: How much money do I earn per attendee (revenue or cash).
            </span>
          </>
        }
        placement="top"
      >
        <span>$EPA</span>
      </Tooltip>
    ),
    field: "EPA",
    name: "$EPA",
    checkbox: funnelData.checkbox,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.EPA == 0
            ? "back-grey-table"
            : funnelData?.EPA > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`$${funnelData?.EPA.toFixed(2)}`}</BackColorsTable>
    ),
  };
};
