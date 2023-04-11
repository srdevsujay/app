import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";

export const EPVColumn = (funnelData: any) => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              EPV: Cuánto dinero gano por cada visita a mi web o funnel (revenue
              o cash).
            </span>
            <br />
            <span>
              EPV: How much money do I earn per website or funnel visit (revenue
              or cash).
            </span>
          </>
        }
        placement="top"
      >
        <span>$EPV</span>
      </Tooltip>
    ),
    field: "EPV",
    name: "$EPV",
    checkbox: funnelData.checkbox,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.EPV == 0
            ? "back-grey-table"
            : funnelData?.EPV > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`$${funnelData?.EPV.toFixed(2)}`}</BackColorsTable>
    ),
  };
};
