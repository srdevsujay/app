import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";
import { NumericFormat } from "react-number-format";

export const USColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              US: Que cantidad de compradores del producto principal compran el
              upsell o bump.
            </span>
            <br />
            <span>
              US: What percentage of the main product buyers purchase the upsell
              or bump.
            </span>
          </>
        }
        placement="top"
      >
        <span>#US</span>
      </Tooltip>
    ),
    field: "us",
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.us == 0
            ? "back-grey-table"
            : funnelData?.us > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >
        <NumericFormat
          value={funnelData?.us}
          allowLeadingZeros
          thousandSeparator=","
          displayType="text"
        />
      </BackColorsTable>
    ),
  };
};
