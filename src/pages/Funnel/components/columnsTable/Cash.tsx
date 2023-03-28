import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";
import { NumericFormat } from "react-number-format";

export const CashColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>Cash: Dinero total cobrado.</span>
            <br />
            <span>Cash: Total money collected.</span>
          </>
        }
        placement="top"
      >
        <span>$Cash</span>
      </Tooltip>
    ),
    field: "cash",
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.cash == 0
            ? "back-grey-table"
            : funnelData?.cash > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`$${funnelData?.cash.toFixed(2)}`}</BackColorsTable>
    ),
  };
};
