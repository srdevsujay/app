import { Tooltip } from "@mui/material";
import { NumericFormat } from "react-number-format";
import { BackColorsTable } from "../../../../styled-components/Table/index";

export const ApsColumn = () => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>Aps: Cantidad de personas que aplican para agendar.</span>
            <br />
            <span>Aps: Number of people who apply to schedule.</span>
          </>
        }
        placement="top"
      >
        <span>#Aps.</span>
      </Tooltip>
    ),
    field: "Aps",
    name: "#Aps.",
    checkbox: true,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.Aps == 0
            ? "back-grey-table"
            : funnelData?.Aps > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >
        <NumericFormat
          value={funnelData?.Aps}
          allowLeadingZeros
          thousandSeparator=","
          displayType="text"
        />
      </BackColorsTable>
    ),
  };
};
