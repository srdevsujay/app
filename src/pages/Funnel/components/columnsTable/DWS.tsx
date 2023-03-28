import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";
import { NumericFormat } from "react-number-format";

export const DWSColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>DWS: Que cantidad de personas compran un downsell.</span>
            <br />
            <span>
              DWS: What is the number of people who purchase a downsell.
            </span>
          </>
        }
        placement="top"
      >
        <span>#DWS</span>
      </Tooltip>
    ),
    field: "dws",
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.dws == 0
            ? "back-grey-table"
            : funnelData?.dws > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >
        <NumericFormat
          value={funnelData?.dws}
          allowLeadingZeros
          thousandSeparator=","
          displayType="text"
        />
      </BackColorsTable>
    ),
  };
};
