import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";

export const EPLColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              EPL: Cuánto dinero gano por cada Lead o registro (revenue o cash).
            </span>
            <br />
            <span>
              EPL: "How much money do I earn per Lead or registration (revenue
              or cash).
            </span>
          </>
        }
        placement="top"
      >
        <span>$EPL</span>
      </Tooltip>
    ),
    field: "EPL",
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.EPL == 0
            ? "back-grey-table"
            : funnelData?.EPL > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`$${funnelData?.EPL.toFixed(2)}`}</BackColorsTable>
    ),
  };
};
