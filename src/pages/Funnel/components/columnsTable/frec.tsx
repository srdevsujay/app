import { Tooltip } from "@mui/material";
import { BackColorsTable } from "../../../../styled-components/Table/index";
import { NumericFormat } from "react-number-format";

export const frecColumn = (funnelData: any) => {
  return {
    title: (
      <Tooltip
        title={
          <>
            <span>
              Frec: Promedio de veces que cada persona vio tu anuncio.
            </span>
            <br />
            <span>
              Frec: Average number of times each person viewed your ad.
            </span>
          </>
        }
        placement="top"
      >
        <span>#Frec.</span>
      </Tooltip>
    ),
    field: "frequency",
    name: "#Frec.",
    checkbox: funnelData.checkbox,
    render: (funnelData: any) => (
      <BackColorsTable
        className={`${
          funnelData?.frequency == 0
            ? "back-grey-table"
            : funnelData?.frequency > 0
            ? "back-green-table"
            : "back-danger-table"
        }`}
      >
        <NumericFormat
          value={funnelData?.frequency}
          allowLeadingZeros
          thousandSeparator=","
          displayType="text"
        />
      </BackColorsTable>
    ),
  };
};
