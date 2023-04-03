import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";

export const LTBColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              LTB: Porcentaje de registrados al funnel que agendan sesión.
            </span>
            <br />
            <span>
              LTB: The percentage of registered users in the funnel who schedule
              a session.
            </span>
          </>
        }
        placement="top"
      >
        <span>%LTB</span>
      </Tooltip>
    ),
    field: "LTB",
    name: "%LTB",
    checkbox: true,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.LTB == 0
            ? "back-grey-table"
            : funnelData?.LTB > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`${funnelData?.LTB.toFixed(2)}%`}</BackColorsTable>
    ),
  };
};
