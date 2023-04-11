import { Tooltip } from "@mui/material";
import { NumericFormat } from "react-number-format";
import { BackColorsTable } from "../../../../styled-components/Table/index";

export const LTBDColumn = (funnelData: any) => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              LTBD: Cantidad de días que pasan desde que una persona se registra
              al funnel hasta que agenda.
            </span>
            <br />
            <span>
              LTBD: The number of days that pass from when a person registers
              for the funnel until they schedule."
            </span>
          </>
        }
        placement="top"
      >
        <span>#LTBD</span>
      </Tooltip>
    ),
    field: "ltbd",
    name: "#LTBD",
    checkbox: funnelData.checkbox,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.ltbd == 0
            ? "back-grey-table"
            : funnelData?.ltbd > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >
        <NumericFormat
          value={funnelData?.ltbd}
          allowLeadingZeros
          thousandSeparator=","
          displayType="text"
        />
      </BackColorsTable>
    ),
  };
};
