import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";

export const EPCColumn = (funnelData: any) => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>EPC: Cuanto dinero gano por cada clic (revenue o cash).</span>
            <br />
            <span>
              EPC: How much money do I earn per click (revenue or cash).
            </span>
          </>
        }
        placement="top"
      >
        <span>$EPC</span>
      </Tooltip>
    ),
    field: "EPC",
    name: "$EPC",
    checkbox: funnelData.checkbox,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.EPC == 0
            ? "back-grey-table"
            : funnelData?.EPC > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`$${funnelData?.EPC.toFixed(2)}`}</BackColorsTable>
    ),
  };
};
