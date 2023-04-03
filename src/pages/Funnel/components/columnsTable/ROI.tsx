import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";
import { NumericFormat } from "react-number-format";

export const ROIColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              ROI: Puede ser sobre facturación o cash. Por cuánto multiplico mi
              dinero invertido en anuncios.
            </span>
            <br />
            <span>
              ROI: This can be about revenue or cash. By how much do I multiply
              my ad spend.
            </span>
          </>
        }
        placement="top"
      >
        <span>#ROI</span>
      </Tooltip>
    ),
    field: "ROI",
    name: "#ROI",
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.ROI == 0
            ? "back-grey-table"
            : funnelData?.ROI > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >
        <NumericFormat
          value={funnelData?.ROI}
          allowLeadingZeros
          thousandSeparator=","
          displayType="text"
        />
      </BackColorsTable>
    ),
  };
};
