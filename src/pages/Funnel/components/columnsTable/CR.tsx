import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";
import { NumericFormat } from "react-number-format";

export const CRColumn = () => {
  return {
    title: "%CR",
    field: "CR",
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.CR == 0
            ? "back-grey-table"
            : funnelData?.CR > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >{`${funnelData?.CR.toFixed(2)}%`}</BackColorsTable>
    ),
  };
};
