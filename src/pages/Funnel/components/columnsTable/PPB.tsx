import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";

export const PPBColumn = (funnelData: any) => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              PPB: Cuanto dinero gano por cada cita (sobre facturación o cash).
            </span>
            <br />
            <span>
              PPB: How much money do I earn per appointment (on revenue or cash
              basis).
            </span>
          </>
        }
        placement="top"
      >
        <span>$PPB</span>
      </Tooltip>
    ),
    field: "PPB",
    name: "$PPB",
    checkbox: funnelData.checkbox,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.PPB == 0
            ? "back-grey-table"
            : funnelData?.PPB > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`$${funnelData?.PPB.toFixed(2)}`}</BackColorsTable>
    ),
  };
};
