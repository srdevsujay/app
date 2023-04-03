import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";

export const cpatColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>CPAT: Cuánto nos cuesta que alguien asista.</span>
            <br />
            <span>CPAT: "How much does it cost us for someone to attend.</span>
          </>
        }
        placement="top"
      >
        <span>$CPAT</span>
      </Tooltip>
    ),
    field: "CPAT",
    name: "$CPAT",
    checkbox: false,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.CPAT == 0
            ? "back-grey-table"
            : funnelData?.CPAT > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`$${funnelData?.CPAT.toFixed(2)}`}</BackColorsTable>
    ),
  };
};
